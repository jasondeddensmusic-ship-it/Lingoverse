// Tiny accessibility helpers for keyboard support on interactive non-button
// elements (e.g. <div onClick=...>).
//
// Usage:
//   <div {...clickableProps(handleClick)}>...</div>
//
// Adds: role="button", tabIndex=0, onClick=handler, onKeyDown=Enter/Space→handler.
// Pass {role: "link"} (etc.) in opts to override the default role.
//
// Tracked in AUTONOMOUS_QUEUE under VISUAL-A11Y.

export function clickableProps(handler, opts = {}) {
  if (typeof handler !== 'function') return {};
  const { role = 'button', tabIndex = 0, label = null } = opts;
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler(e);
    }
  };
  const props = { role, tabIndex, onClick: handler, onKeyDown };
  if (label) props['aria-label'] = label;
  return props;
}

// For modal scrims that close on click. Adds Escape handler too.
export function scrimProps(handler, opts = {}) {
  if (typeof handler !== 'function') return {};
  const { label = 'Close' } = opts;
  const onKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler(e);
    }
  };
  return {
    role: 'button',
    tabIndex: 0,
    'aria-label': label,
    onClick: handler,
    onKeyDown,
  };
}
