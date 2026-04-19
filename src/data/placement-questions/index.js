// Central registry for placement quiz question banks.
// Each language exports QUESTIONS_BY_LEVEL and LEVEL_ORDER.
// Languages without a question bank return null — the onboarding
// flow skips the placement step and routes directly to A1.1.

import { QUESTIONS_BY_LEVEL as de_Q, LEVEL_ORDER as de_L } from './de.js';
import { QUESTIONS_BY_LEVEL as es_Q, LEVEL_ORDER as es_L } from './es.js';
import { QUESTIONS_BY_LEVEL as fr_Q, LEVEL_ORDER as fr_L } from './fr.js';
import { QUESTIONS_BY_LEVEL as nl_Q, LEVEL_ORDER as nl_L } from './nl.js';
import { QUESTIONS_BY_LEVEL as ko_Q, LEVEL_ORDER as ko_L } from './ko.js';
import { QUESTIONS_BY_LEVEL as it_Q, LEVEL_ORDER as it_L } from './it.js';
import { QUESTIONS_BY_LEVEL as ja_Q, LEVEL_ORDER as ja_L } from './ja.js';
import { QUESTIONS_BY_LEVEL as zh_Q, LEVEL_ORDER as zh_L } from './zh.js';
import { QUESTIONS_BY_LEVEL as pt_Q, LEVEL_ORDER as pt_L } from './pt.js';
import { QUESTIONS_BY_LEVEL as ru_Q, LEVEL_ORDER as ru_L } from './ru.js';

const BANKS = {
  de: { questionsByLevel: de_Q, levelOrder: de_L },
  es: { questionsByLevel: es_Q, levelOrder: es_L },
  fr: { questionsByLevel: fr_Q, levelOrder: fr_L },
  nl: { questionsByLevel: nl_Q, levelOrder: nl_L },
  ko: { questionsByLevel: ko_Q, levelOrder: ko_L },
  it: { questionsByLevel: it_Q, levelOrder: it_L },
  ja: { questionsByLevel: ja_Q, levelOrder: ja_L },
  zh: { questionsByLevel: zh_Q, levelOrder: zh_L },
  pt: { questionsByLevel: pt_Q, levelOrder: pt_L },
  ru: { questionsByLevel: ru_Q, levelOrder: ru_L },
};

/**
 * Returns { questionsByLevel, levelOrder } for the given language code,
 * or null if no question bank exists for that language.
 */
export function getPlacementBank(langCode) {
  return BANKS[langCode] || null;
}

export default BANKS;
