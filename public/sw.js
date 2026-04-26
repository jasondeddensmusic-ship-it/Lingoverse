// VerumLingua Service Worker — Phase 2
//
// Strategy:
// - Static JS/CSS/HTML: cache-first with network update
// - Lesson data (under /assets/index-*.js or /assets/CefrReferencePage-*.js):
//   cache-first (versioned filenames mean cache is auto-busted on deploy)
// - Google Fonts (CSS + woff2): stale-while-revalidate, dedicated cache
// - Network requests for data: network-first, cache as fallback
//
// Versioning: bump CACHE_VERSION on each deploy so old caches are evicted.
// Vite builds emit filename hashes, so static assets are content-addressed
// and the SW just keeps adding to cache.
//
// Update flow (Phase 2):
// - When the SW detects a newer activate, it posts {type:"sw-updated"} to
//   all clients. The app shows a "New version available" banner.
//
// Tracked in AUTONOMOUS_QUEUE under VISUAL-002.

const CACHE_VERSION = 'verumlingua-v2';
const FONT_CACHE = 'verumlingua-fonts-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((k) => k !== CACHE_VERSION && k !== FONT_CACHE)
        .map((k) => caches.delete(k)))
    ).then(() => self.clients.claim()).then(() => {
      // Notify all open clients that a new SW has activated.
      return self.clients.matchAll({ type: 'window' }).then((clients) => {
        for (const c of clients) {
          c.postMessage({ type: 'sw-updated', version: CACHE_VERSION });
        }
      });
    })
  );
});

// Allow page to skip-waiting on demand (used by the update banner "Reload" btn).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle GET
  if (event.request.method !== 'GET') return;

  // Google Fonts (cross-origin): stale-while-revalidate with dedicated cache.
  // Both fonts.googleapis.com (CSS) and fonts.gstatic.com (woff2 binaries).
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          const network = fetch(event.request).then((res) => {
            if (res.ok || res.type === 'opaque') cache.put(event.request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // Other cross-origin: pass through (Cloudflare worker, etc.)
  if (url.origin !== self.location.origin) return;

  // Skip Supabase / API calls (network-only)
  if (url.pathname.startsWith('/auth/') || url.pathname.startsWith('/api/')) return;

  // Cache-first for static assets (Vite emits hashed filenames under /assets/)
  if (url.pathname.startsWith('/assets/') || url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/manifest.webmanifest') {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          // Only cache successful responses
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          }
          return res;
        });
      }).catch(() => {
        // Offline + cache miss → graceful failure (browser default)
        return new Response('Offline and no cached copy.', { status: 503 });
      })
    );
    return;
  }

  // Default: try cache, fall back to network (and update cache)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return res;
      }).catch(() => cached || new Response('Offline.', { status: 503 }));
      return cached || network;
    })
  );
});
