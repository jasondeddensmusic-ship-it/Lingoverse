// CEFR Can-Do Statements
// Source: Council of Europe CEFR Self-Assessment Grid (Common European Framework of Reference for Languages)
// https://www.coe.int/en/web/common-european-framework-reference-languages/table-2-cefr-3.3-common-reference-levels-self-assessment-grid
// These are UNIVERSAL descriptors — language-agnostic.

export const CAN_DO = {
  'A1.1': [
    "I can introduce myself and give basic personal information (name, where I live).",
    "I can understand and use familiar everyday expressions and very basic phrases.",
    "I can ask and answer simple questions about myself and people I know.",
    "I can interact in a simple way when the other person speaks slowly and clearly.",
    "I can recognise written words and short phrases on signs, labels, and simple forms.",
  ],
  'A1.2': [
    "I can ask and answer simple questions about family, home, and immediate surroundings.",
    "I can understand short, simple messages and personal information on forms.",
    "I can describe where I live and my daily routines using basic words and set phrases.",
    "I can name objects around me and express immediate needs in familiar situations.",
    "I can write a short postcard or fill in simple forms with personal details.",
  ],
  'A2.1': [
    "I can communicate in simple, routine tasks requiring direct exchange of information.",
    "I can describe my background, immediate environment, and matters of immediate need.",
    "I can understand short, clear announcements and instructions in familiar contexts.",
    "I can talk about past events and activities using simple connected phrases.",
    "I can handle numbers, prices, dates, and time in common transactions.",
  ],
  'A2.2': [
    "I can make and respond to suggestions, invitations, and apologies.",
    "I can understand texts written in high frequency everyday language.",
    "I can compare things and express my preferences using simple language.",
    "I can describe plans and arrangements and give simple reasons for my choices.",
    "I can write short, simple notes and messages relating to everyday matters.",
    "I can use basic verb tenses to narrate past events and future plans.",
  ],
  'B1.1': [
    "I can deal with most situations that arise while travelling in a target-language area.",
    "I can understand the main points of standard speech on familiar work, school, and leisure topics.",
    "I can produce simple connected text on familiar topics of personal interest.",
    "I can describe experiences, events, dreams, and ambitions with some elaboration.",
    "I can briefly give reasons and explanations for opinions and plans.",
    "I can understand straightforward factual texts written in everyday language.",
  ],
  'B1.2': [
    "I can maintain a conversation on a wider range of topics, including abstract ones.",
    "I can understand the main points of clear standard speech on complex topics.",
    "I can write clear, detailed text on a wide range of subjects of personal interest.",
    "I can understand the essential information from longer spoken passages.",
    "I can express and respond to feelings such as surprise, happiness, interest, and regret.",
    "I can follow extended speech and complex lines of argument when the topic is familiar.",
  ],
  'B2.1': [
    "I can communicate with a degree of fluency and spontaneity in interactions with native speakers.",
    "I can understand extended speech and lectures and follow complex argument when the topic is familiar.",
    "I can read articles and reports on current problems in which writers adopt a particular attitude.",
    "I can present clear, detailed descriptions on a wide range of subjects related to my field of interest.",
    "I can explain a viewpoint on a topical issue giving the advantages and disadvantages.",
    "I can write clear, detailed text, synthesising information and arguments from several sources.",
  ],
  'B2.2': [
    "I can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in my field.",
    "I can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible.",
    "I can produce clear, detailed text, synthesising information from multiple sources with critical evaluation.",
    "I can understand a wide range of demanding, longer texts and recognise implicit meaning.",
    "I can express ideas fluently and spontaneously without much obvious searching for expressions.",
    "I can use language flexibly and effectively for social, academic, and professional purposes.",
  ],
};

// Ordered list of all 8 sub-levels for iteration
export const CEFR_SUB_LEVELS = Object.keys(CAN_DO);

// Band color map (matches app design system)
export const CEFR_BAND_COLORS = {
  A1: '#2ECDA7',
  A2: '#4A8FE7',
  B1: '#7B5EE8',
  B2: '#E8475E',
};

// Returns the CEFR band from a sub-level id like "A1.1" -> "A1"
export const getBand = (subLevel) => subLevel.split('.')[0];
