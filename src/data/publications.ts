import { MEMBERS, Member } from './members'
import { uniq } from 'lodash'

export const PublicationTypes = ['Conference', 'Poster', 'Workshop', 'Journal', 'Preprint'] as const
export type PublicationType = (typeof PublicationTypes)[number]

export const ResearchTopics = {
  datamining: { emoji: '⛏️' },
  crowdsourcing: { emoji: '👥' },
  learning: { emoji: '📚' },
  civics: { emoji: '🏛️' },
  visualization: { emoji: '📊' },
  social: { emoji: '🗣️' },
  'human-AI interaction': { emoji: '🤖' },
}
export type ResearchTopicType = keyof typeof ResearchTopics

export enum PublicationLinkType {
  PDF = 'PDF',
  SLI = 'Slides',
  POS = 'Poster',
  ACM = 'ACM DL',
  WEB = 'Website',
  VID = 'Video',
  TRA = 'Trailer',
  ARX = 'arXiv',
}

interface Props {
  title: string
  authors: any[]
  year: number
  venue: string
  topics: ResearchTopicType[]
  type: PublicationType
  award?: string
  links?: { url: string; type: PublicationLinkType }[]
}

export interface Publication extends Props {}
export class Publication {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Proxona: Supporting Creators’ Sensemaking and Ideation with LLM-Powered Audience Personas',
    authors: [MEMBERS.yoonseochoi, MEMBERS.eunjeongkang, MEMBERS.seulgichoi, 'Min Kyung Lee', MEMBERS.juhokim],
    venue: 'CHI 2025',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2408.10937',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'TeachTune: Reviewing Pedagogical Agents Against Diverse Student Profiles with Simulated Students',
    authors: [
      MEMBERS.hyoungwookjin,
      MEMBERS.minjuyoo,
      MEMBERS.jeongeonpark,
      MEMBERS.yokyunglee,
      'Xu Wang',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2025',
    year: 2025,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/html/2410.04078v1',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'PlanTogether: Facilitating AI Application Planning Using Information Graphs and Large Language Models',
    authors: [
      MEMBERS.daehyunkim,
      MEMBERS.daeheonjeong,
      MEMBERS.shahnozayadgarova,
      MEMBERS.hyungyushin,
      'Jinho Son',
      'Hari Subramonyam',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2025',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dhkim16.github.io/plan-together/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dhkim16.github.io/plan-together/pdf/paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      "Less Talk, More Trust: Understanding Players' In-game Assessment of Communication Processes in League of Legends",
    authors: [
      MEMBERS.juhoonlee,
      MEMBERS.seoyoungkim,
      MEMBERS.yeonsupark,
      MEMBERS.juhokim,
      'Jeong-woo Jang',
      'Joseph Seering',
    ],
    venue: 'CHI 2025',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2502.17935',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title:
      'Applying the Gricean Maxims to a Human-LLM Interaction Cycle: Design Insights from a Participatory Approach',
    authors: [MEMBERS.yoonsukim, MEMBERS.brandonchin, MEMBERS.kihoonson, MEMBERS.seoyoungkim, MEMBERS.juhokim],
    venue: 'CHI 2025 Extended Abstracts (Late Breaking Work)',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [
      {
        url: 'https://arxiv.org/abs/2503.00858',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'Expandora: Broadening Design Exploration with Text-to-Image Model',
    authors: [MEMBERS.daeunchoi, MEMBERS.kihoonson, 'Hyunjoon Jung', MEMBERS.juhokim],
    venue: 'CHI 2025 Extended Abstracts (Late Breaking Work)',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [
      {
        url: 'https://arxiv.org/abs/2503.00791',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: "DocVoyager: Anticipating User's Information Needs and Guiding Document Reading through Question Answering",
    authors: [
      MEMBERS.yoonjoolee,
      'Nedim Lipka',
      'Zichao Wang',
      'Puneet Mathur',
      'Ryan Rossi',
      'Tong Sun',
      'Alexa F Siu',
    ],
    venue: 'CHI 2025 Extended Abstracts (Late Breaking Work)',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [],
  },
  {
    title: 'Visual Embedding of Screen Sequences for User-Flow Search in Example-driven Communication',
    authors: [MEMBERS.daeheonjeong, MEMBERS.hyehyunchu],
    venue: 'CHI 2025 Extended Abstracts (Late Breaking Work)',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [
      {
        url: 'https://arxiv.org/abs/2503.06067',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'Interacting with AI by Manipulating Intents',
    authors: [MEMBERS.taesookim],
    venue: 'CHI 2025 Doctoral Symposium',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [],
  },
  {
    title:
      'Can Fans Build Parasocial Relationships through Idols’ Simulated Voice Messages?: A Study of AI Private Call Users’ Perceptions, Cognitions, and Behaviors.',
    authors: [MEMBERS.eunjeongkang, MEMBERS.haesookim, MEMBERS.hyunwookim, 'Susan Fussell', MEMBERS.juhokim],
    venue: 'CSCW 2025',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: "https://www.researchgate.net/profile/Eun-Kang-12/publication/389279977_Can_Fans_Build_Parasocial_Relationships_through_Idols'_Simulated_Voice_Messages_A_Study_of_AI_Private_Call_Users'_Perceptions_Cognitions_and_Behaviors/links/67bd1b1e645ef274a4940227/Can-Fans-Build-Parasocial-Relationships-through-Idols-Simulated-Voice-Messages-A-Study-of-AI-Private-Call-Users-Perceptions-Cognitions-and-Behaviors.pdf",
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'VideoMix: Aggregating How-To Videos for Task-Oriented Learning',
    authors: [MEMBERS.saelyneyang, 'Anh Truong', MEMBERS.juhokim, 'Dingzeyu Li'],
    venue: 'IUI 2025',
    year: 2025,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [],
  },
  {
    title: 'BLEnD: A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages',
    authors: [MEMBERS.junhomyung, 'Nayeon Lee', 'Yi Zhou', 'Jiho Jin', 'Rifki Afina Putri', 'and 17 more authors'],
    venue: 'NeurIPS 2024 Datasets & Benchmarks',
    year: 2024,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2406.09948',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'ARXIVDIGESTABLES: Synthesizing Scientific Literature into Tables using Language Models',
    authors: [
      'Benjamin Newman',
      MEMBERS.yoonjoolee,
      'Aakanksha Naik',
      'Pao Siangliulue',
      'Raymond Fok',
      MEMBERS.juhokim,
      'Daniel S. Weld',
      'Joseph Chee Chang',
      'Kyle Lo',
    ],
    venue: 'EMNLP 2024 Main Track',
    year: 2024,
    topics: ['human-AI interaction', 'datamining'],
    type: 'Conference',
    links: [],
  },

  {
    title: 'Enhancing How People Learn Procedural Tasks Through How-to Videos',
    authors: [MEMBERS.saelyneyang],
    venue: 'UIST 2024 Doctoral Symposium',
    year: 2024,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/uist2024-dc-saelyne.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: 'KUIZ: Encouraging Modular Learnersourcing of Multiple Choice Questions through LLM Interventions',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.haesookim, 'Nathan Mekuria Haile', 'Soyeong Min', MEMBERS.juhokim],
    venue: 'L@S 2024 Workshop on Learnersourcing: Student-generated Content @ Scale',
    year: 2024,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://drive.google.com/file/d/1zElYwT-VJ9LRm6to1IVy59_uAitqwZ6h/view?usp=sharing',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: 'Using Large Language Models To Diagnose Math Problem-solving Skills At Scale',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.yoonsukim, MEMBERS.yeonsupark, MEMBERS.bekzattilekbay, MEMBERS.juhokim],
    venue: 'L@S 2024 (Work-in-Progress)',
    year: 2024,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3657604.3664697',
        type: PublicationLinkType.ACM,
      },
    ],
  },

  {
    title: 'Learnersourcing: Student-generated Content @ Scale: 2nd Annual Workshop',
    authors: [
      'Steven Moore',
      'Anjali Singh',
      'Xinyi Lu',
      MEMBERS.hyoungwookjin,
      'Hassan Khosravi',
      'Paul Denny',
      'Christopher Brooks',
      'Xu Wang',
      MEMBERS.juhokim,
      'John Stamper',
    ],
    venue: 'L@S 2024 Workshop Proposal',
    year: 2024,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3657604.3664643',
        type: PublicationLinkType.ACM,
      },
    ],
  },

  {
    title: 'Using LLMs to Investigate Correlations of Conversational Follow-up Queries with User Satisfaction',
    authors: [
      MEMBERS.hyunwookim,
      MEMBERS.yoonseochoi,
      MEMBERS.taehyunyang,
      'Honggu Lee',
      'Chaneon Park',
      'Yongju Lee',
      'Jin Young Kim',
      MEMBERS.juhokim,
    ],
    venue: 'SIGIR 2024 Workshop on Large Language Models for Evaluation in Information Retrieval',
    year: 2024,
    topics: ['human-AI interaction', 'datamining'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/sigir2024-workshop-searchgpt.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: 'Fine-Grained Action Understanding with Tools in Instructional Videos',
    authors: [MEMBERS.saelyneyang, MEMBERS.jaesangyu, 'Jae Won Cho', MEMBERS.juhokim],
    venue: 'CVPR 2024 Workshop on Learning from Procedural Videos and Language',
    year: 2024,
    topics: ['learning', 'datamining'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/cvpr2024-finegrained-workshop.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: 'LearnerVoice: A Dataset of Non-Native English Learners’ Spontaneous Speech',
    authors: [
      MEMBERS.haechankim,
      MEMBERS.junhomyung,
      MEMBERS.seoyoungkim,
      'Sungpah Lee',
      'Dongyeop Kang',
      MEMBERS.juhokim,
    ],
    venue: 'Interspeech 2024',
    year: 2024,
    topics: ['learning'],
    type: 'Conference',
    award: 'Shortlisted for ISCA Best Student Paper Award',
    links: [
      {
        url: 'https://arxiv.org/abs/2407.04280',
        type: PublicationLinkType.ARX,
      },
    ],
  },

  {
    title: 'A Context-Aware Onboarding Agent for Metaverse Powered by Large Language Models',
    authors: [
      MEMBERS.jihyeonghong,
      MEMBERS.yokyunglee,
      MEMBERS.daehyunkim,
      MEMBERS.daeunchoi,
      'Yeo-Jin Yoon',
      'Gyu-cheol Lee',
      'Zucheul Lee',
      MEMBERS.juhokim,
    ],
    venue: 'DIS 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/dis2024-pican-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3643834.3661579',
        type: PublicationLinkType.ACM,
      },
    ],
  },

  {
    title: 'AINeedsPlanner: A Workbook to Support Effective Collaboration Between AI Experts and Clients',
    authors: [
      MEMBERS.daehyunkim,
      MEMBERS.hyungyushin,
      MEMBERS.shahnozayadgarova,
      'Jinho Son',
      'Hariharan Subramonyam',
      MEMBERS.juhokim,
    ],
    venue: 'DIS 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/dis2024-aineedsplanner-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3643834.3661577',
        type: PublicationLinkType.ACM,
      },
    ],
  },

  {
    title: 'Co-Creating Question-and-Answer Style Articles with Large Language Models for Research Promotion',
    authors: [
      'Hyunseung Lim',
      'Ji Yong Cho',
      'Taewan Kim',
      MEMBERS.jeongeonpark,
      MEMBERS.hyungyushin,
      MEMBERS.seulgichoi,
      'Sunghyun Park',
      'Kyungjae Lee',
      MEMBERS.juhokim,
      'Moontae Lee',
      'Hwajung Hong ',
    ],
    venue: 'DIS 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/dis2024-podcast-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3643834.3660705',
        type: PublicationLinkType.ACM,
      },
    ],
  },

  {
    title:
      'Exploring Cross-Cultural Differences in English Hate Speech Annotations: From Dataset Construction to Analysis',
    authors: ['Nayeon Lee', 'Chani Jung', MEMBERS.junhomyung, 'Jiho Jin', MEMBERS.juhokim, 'Alice Oh'],
    venue: 'NAACL 2024',
    year: 2024,
    topics: ['social'],
    type: 'Conference',
    award: 'Resource Award',
    links: [
      {
        url: 'https://arxiv.org/abs/2308.16705',
        type: PublicationLinkType.ARX,
      },
    ],
  },

  {
    title: 'One vs. Many: Comprehending Accurate Information from Multiple Erroneous and Inconsistent AI Generations',
    authors: [
      MEMBERS.yoonjoolee,
      MEMBERS.kihoonson,
      MEMBERS.taesookim,
      MEMBERS.jisukim,
      'John Joon Young Chung',
      'Eytan Adar',
      MEMBERS.juhokim,
    ],
    venue: 'FAccT 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2405.05581',
        type: PublicationLinkType.ARX,
      },
    ],
  },

  {
    title: 'Beyond Prompts: Learning from Human Communication for Enhanced AI Intent Alignment',
    authors: [MEMBERS.yoonsukim, MEMBERS.kihoonson, MEMBERS.seoyoungkim, MEMBERS.juhokim],
    venue:
      'CHI 2024 Workshop on Getting Back Together: HCI and Human Factors Joining Forces to Meet the AI Interaction Challenge',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://arxiv.org/abs/2405.05678',
        type: PublicationLinkType.ARX,
      },
    ],
  },

  {
    title: 'Unveiling Disparities in Web Task Handling Between Human and Web Agent',
    authors: [
      MEMBERS.kihoonson,
      MEMBERS.jinhyeonkwon,
      MEMBERS.daeunchoi,
      MEMBERS.taesookim,
      'Young-Ho Kim',
      'Sangdoo Yun',
      MEMBERS.juhokim,
    ],
    venue:
      'CHI 2024 Workshop on Computational Methodologies for Understanding, Automating, and Evaluating User Interfaces',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://arxiv.org/abs/2405.04497',
        type: PublicationLinkType.ARX,
      },
    ],
  },

  {
    title:
      'How do multiple LLM-powered conversational agents assist sensemaking and decision-making in an unfamiliar domain?',
    authors: [MEMBERS.jeongeonpark, 'Bryan Min', 'Jean Y. Song', 'Xiaojuan Ma', MEMBERS.juhokim],
    venue: 'CHI 2024 Workshop on Sensemaking: What is it today?',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/chi2024-workshop-sensemaking-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: "How to Reflect Diverse People's Perspectives in Large-Scale LLM-based Evaluations?",
    authors: [MEMBERS.yoonjoolee, MEMBERS.taesookim, MEMBERS.juhokim],
    venue: 'CHI 2024 Workshop on Human Centered Evaluation and Auditing of Large Language Models',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://heal-workshop.github.io/papers/34_how_to_reflect_diverse_people_.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },

  {
    title: 'Towards an Evaluation of LLM-Generated Inspiration by Developing and Validating Inspiration Scale',
    authors: [
      MEMBERS.hyungyushin,
      MEMBERS.seulgichoi,
      'Ji Yong Cho',
      MEMBERS.saharadmoni,
      'Hyunseung Lim',
      'Taewan Kim',
      'Hwajung Hong',
      'Moontae Lee',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2024 Workshop on Human Centered Evaluation and Auditing of Large Language Models',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://heal-workshop.github.io/papers/30_towards_an_evaluation_of_llm_g.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ChoiceMates: Supporting Unfamiliar Online Decision-Making with Multi-Agent Conversational Interactions',
    authors: [MEMBERS.jeongeonpark, MEMBERS.bryanmin, 'Xiaojuan Ma', MEMBERS.juhokim],
    venue: 'arXiv preprint',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Preprint',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.01331',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'LLM-as-a-tutor in EFL Writing Education: Focusing on Evaluation of Student-LLM Interaction',
    authors: [
      'Jieun Han',
      'Haneul Yoo',
      MEMBERS.junhomyung,
      'Minsun Kim',
      'Hyunseung Lim',
      MEMBERS.yoonsukim,
      'Tak Yeon Lee',
      'Hwajung Hong',
      MEMBERS.juhokim,
      'So-Yeon Ahn',
      'Alice Oh',
    ],
    year: 2024,
    venue: 'EMNLP 2024 Workshop on Customizable NLP (CustomNLP4U)',
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.05191',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title:
      'EduLive: Re-Creating Cues for Instructor-Learner Interaction in Educational Live Streams with Learners’ Transcript-Based Annotations',
    authors: ['Jingchao Fang', MEMBERS.jeongeonpark, MEMBERS.juhokim, 'Hao-Chuan Wang'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['learning', 'social'],
    type: 'Conference',
    links: [],
  },
  {
    title: 'VIVID: Human-AI Collaborative Authoring of Vicarious Dialogues from Lecture Videos',
    authors: [MEMBERS.seulgichoi, MEMBERS.hyewonlee, MEMBERS.yoonjoolee, MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2403.09168',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642867',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://vivid.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title:
      'PaperWeaver: Enriching Topical Paper Alerts by Contextualizing Recommended Papers with User-collected Papers',
    authors: [
      MEMBERS.yoonjoolee,
      'Hyeonsu B Kang',
      'Matt Latzke',
      MEMBERS.juhokim,
      'Jonathan Bragg',
      'Joseph Chee Chang',
      'Pao Siangliulue',
    ],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2403.02939',
        type: PublicationLinkType.ARX,
      },
      { url: 'https://dl.acm.org/doi/10.1145/3613904.3642196', type: PublicationLinkType.ACM },
    ],
  },
  {
    title: 'CreativeConnect: Supporting Reference Recombination for Graphic Design Ideation with Generative AI',
    authors: [MEMBERS.daeunchoi, MEMBERS.suminhong, MEMBERS.jeongeonpark, MEMBERS.johnjoonyoungchung, MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2312.11949',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://creativeconnect.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642794',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'GenQuery: Supporting Expressive Visual Search with Generative Models',
    authors: [MEMBERS.kihoonson, MEMBERS.daeunchoi, MEMBERS.taesookim, 'Young-Ho Kim', MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.01287',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://genquery.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642847',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Demystifying Tacit Knowledge in Graphic Design: Characteristics, Instances, Approaches, and Guidelines',
    authors: [MEMBERS.kihoonson, MEMBERS.daeunchoi, MEMBERS.taesookim, MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['learning'],
    type: 'Conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://arxiv.org/abs/2403.06252',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'http://tacitknowledge.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642886',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.seongheelee, MEMBERS.hyungyushin, MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.14534',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642349',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://teachyou.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title: 'EvalLM: Interactive Evaluation of Large Language Model Prompts on User-Defined Criteria',
    authors: [MEMBERS.taesookim, MEMBERS.yoonjoolee, 'Jamin Shin', 'Young-Ho Kim', MEMBERS.juhokim],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.13633',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://evallm.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642216',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Natural Language Dataset Generation Framework for Visualizations Powered by Large Language Models',
    authors: [
      MEMBERS.hyungkwonko,
      'Hyeon Jeon',
      'Gwanmo Park',
      MEMBERS.daehyunkim,
      'Nam Wook Kim',
      MEMBERS.juhokim,
      'Jinwook Seo',
    ],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.10245',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642943',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'AQuA: Automated Question-Answering in Software Tutorial Videos with Visual Anchors',
    authors: [MEMBERS.saelyneyang, 'Jo Vermeulen', 'George Fitzmaurice', 'Justin Matejka'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3613904.3642752',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets',
    authors: [
      'Seonghyeon Ye',
      'Doyoung Kim',
      'Sungdong Kim',
      'Hyeonbin Hwang',
      'Seungone Kim',
      'Yongrae Jo',
      'James Thorne',
      MEMBERS.juhokim,
      'Minjoon Seo',
    ],
    venue: 'ICLR 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    award: 'Spotlight',
    links: [
      {
        url: 'https://arxiv.org/abs/2307.10928',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'YTCommentQA: Video Question Answerability in Instructional Videos',
    authors: [MEMBERS.saelyneyang, 'Sunghyun Park', 'Yunseok Jang', 'Moontae Lee'],
    venue: 'AAAI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2401.17343',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title:
      "Understanding Users' Dissatisfaction with ChatGPT Responses: Types, Resolving Tactics, and the Effect of Knowledge Level",
    authors: [MEMBERS.yoonsukim, MEMBERS.jueonlee, MEMBERS.seoyoungkim, 'Jaehyuk Park', MEMBERS.juhokim],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3640543.3645148',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://chatgpt-analysis.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2024/iui2024-ChatGPT-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ExpressEdit: Video Editing with Natural Language and Sketching',
    authors: [
      MEMBERS.bekzattilekbay,
      MEMBERS.saelyneyang,
      MEMBERS.michallewkowicz,
      MEMBERS.alexsuryapranata,
      MEMBERS.juhokim,
    ],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3640543.3645164',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://expressedit.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2024/iui2024-ExpressEdit-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: "DataDive: Supporting Readers' Contextualization of Statistical Statements with Data Exploration",
    authors: [
      MEMBERS.hyunwookim,
      MEMBERS.khanhduyle,
      MEMBERS.gionnievelim,
      MEMBERS.daehyunkim,
      MEMBERS.yoojinhong,
      MEMBERS.juhokim,
    ],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['crowdsourcing', 'human-AI interaction', 'civics'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3640543.3645155',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://datadive.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2024/iui2024-DataDive-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'DynamicLabels: Supporting Informed Construction of Machine Learning Label Sets with Crowd Feedback',
    authors: [MEMBERS.jeongeonpark, MEMBERS.eunyoungko, MEMBERS.yeonsupark, 'Jinyeong Yim', MEMBERS.juhokim],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['crowdsourcing', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3640543.3645157',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://dynamiclabels.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2024/iui2024-DynamicLabels-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Is the Same Performance Really the Same?: Understanding How Listeners Perceive ASR Results Differently According to the Speaker’s Accent',
    authors: [MEMBERS.seoyoungkim, MEMBERS.yeonsupark, MEMBERS.dakyeomahn, 'Jin Myung Kwak', MEMBERS.juhokim],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['human-AI interaction', 'social'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/cscw2024-asr-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3641008',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.juhokim],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['crowdsourcing', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/cscw2024-codetree-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3637308',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://jhw123.github.io/project/codetree',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title: 'Re:SPect: Enabling Active and Scalable Responses to Networked Online Harassment',
    authors: [MEMBERS.haesookim, MEMBERS.juhoonlee, MEMBERS.juhokim, 'Jeong-woo Jang'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2024/cscw2024-respect-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3637394',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Cells, Generators, and Lenses: Design Framework for Object-Oriented Interaction with Large Language Models',
    authors: [MEMBERS.taesookim, MEMBERS.yoonjoolee, MEMBERS.minsukchang, MEMBERS.juhokim],
    venue: 'UIST 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3586183.3606833',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://llm-objects.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2023/uist2023-llmobjects-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Papeos: Augmenting Research Papers with Talk Videos',
    authors: [MEMBERS.taesookim, 'Matt Latzke', 'Jonathan Bragg', 'Amy X. Zhang', 'Joseph Chee Chang'],
    venue: 'UIST 2023',
    year: 2023,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3586183.3606770',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://papeo.app/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://arxiv.org/pdf/2308.15224.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'QASA: Advanced Question Answering on Scientific Articles',
    authors: [
      MEMBERS.yoonjoolee,
      'Kyungjae Lee',
      'Sunghyun Park',
      'Dasol Hwang',
      'Jaehyeon Kim',
      'Hong-In Lee',
      'Moontae Lee',
    ],
    venue: 'ICML 2023',
    year: 2023,
    topics: ['human-AI interaction', 'datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://yoonjoolee.com/assets/papers/QASA_ICML2023.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'EmphasisChecker: A Tool for Guiding Chart and Caption Emphasis',
    authors: [MEMBERS.daehyunkim, MEMBERS.seulgichoi, MEMBERS.juhokim, 'Vidya Setlur', 'Maneesh Agrawala'],
    venue: 'IEEE VIS 2023',
    year: 2023,
    topics: ['visualization'],
    type: 'Journal',
    links: [
      {
        url: 'https://dhkim16.github.io/emphasis-checker/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://dhkim16.github.io/emphasis-checker/pdf/paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Designing for AI-Powered Social Computing Systems',
    authors: [
      MEMBERS.gionnievelim,
      MEMBERS.hyunwookim,
      MEMBERS.yoonseochoi,
      'Toby Jia-Jun Li',
      'Chinmay Kulkarni',
      'Hariharan Subramonyam',
      'Joseph Seering',
      'Michael S. Bernstein',
      'Amy X. Zhang',
      'Elena L. Glassman',
      MEMBERS.simonperrault,
      MEMBERS.juhokim,
    ],
    venue: 'CSCW SIG',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/cscw23-sig-CSCW2023SIG-workshop.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'RECIPE: How to Integrate ChatGPT into EFL Writing Education',
    authors: [
      'Jieun Han',
      'Haneul Yoo',
      MEMBERS.yoonsukim,
      MEMBERS.junhomyung,
      'Minsun Kim',
      'Hyunseung Lim',
      MEMBERS.juhokim,
      'Tak Yeon Lee',
      'Hwajung Hong',
      'So-Yeon Ahn',
      'Alice Oh',
    ],
    venue: 'L@S 2023 (Work-in-Progress)',
    year: 2023,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://arxiv.org/abs/2305.11583',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'Look Upon Thyself: Understanding the Effect of Self-Reflection on Toxic Behavior in Online Gaming',
    authors: [MEMBERS.juhoonlee, MEMBERS.juhokim, 'Jeong-woo Jang'],
    venue: 'CHI 2023 Workshop on Combating Toxicity, Harassment, and Abuse in Online Social Spaces',
    year: 2023,
    topics: ['social'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-toxicity-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Towards an Experience-Centric Paradigm of Online Harassment: Responding to Calling out and Networked Harassment',
    authors: [MEMBERS.haesookim, MEMBERS.juhoonlee, MEMBERS.juhokim, 'Jeong-woo Jang'],
    venue: 'CHI 2023 Workshop on Combating Toxicity, Harassment, and Abuse in Online Social Spaces',
    year: 2023,
    topics: ['social'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-callout-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Moderating Customer Inquiries and Responses to Alleviate Stress and Reduce Emotional Dissonance of Customer Service Representatives',
    authors: [
      MEMBERS.hyungkwonko,
      MEMBERS.kihoonson,
      MEMBERS.hyoungwookjin,
      MEMBERS.yoonseochoi,
      'Xiang ‘Anthony’ Chen',
    ],
    venue: 'CHI 2023 Workshop on Generative AI and HCI',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-customer-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'LMCanvas: Object-Oriented Interaction to Personalize Large Language Model-Powered Writing Environments',
    authors: [MEMBERS.taesookim, MEMBERS.arghyasarkar, MEMBERS.yoonjoolee, MEMBERS.minsukchang, MEMBERS.juhokim],
    venue: 'CHI 2023 Workshop on Generative AI and HCI',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://arxiv.org/abs/2303.15125',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-lmcanvas-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Creator-friendly Algorithms: Behaviors, Challenges, and Design Opportunities in Algorithmic Platforms',
    authors: [MEMBERS.yoonseochoi, MEMBERS.eunjeongkang, 'Min Kyung Lee', MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-creatorfriendly-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3544548.3581386',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Beyond Instructions: A Taxonomy of Information Types in How-to Videos',
    authors: [MEMBERS.saelyneyang, MEMBERS.sangkyungkwak, MEMBERS.juhoonlee, MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-videomap-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3544548.3581126',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'How Older Adults Use Online Videos for Learning',
    authors: [MEMBERS.seoyoungkim, 'Donghoon Shin', MEMBERS.jeongyeonkim, 'Soonwoo Kwon', MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning', 'datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-olderadults-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3544548.3580671',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'DAPIE: Interactive Step-by-Step Explanatory Dialogues to Answer Children’s Why and How Questions',
    authors: [MEMBERS.yoonjoolee, MEMBERS.taesookim, 'Sungdong Kim', MEMBERS.yohanyun, MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['human-AI interaction', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3544548.3581369',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=nBdIhI66_vY',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-childQA-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Surch: Enabling Structural Search and Comparison for Surgical Videos',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.daeunchoi, MEMBERS.nicolelee, 'Matt Beane', MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-surch-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3544548.3580772',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title:
      'ModSandbox: Facilitating Online Community Moderation Through Error Prediction and Improvement of Automated Rules',
    authors: [MEMBERS.jeanyoungsong, MEMBERS.sangwooklee, MEMBERS.jisoolee, MEMBERS.minakim, MEMBERS.juhokim],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['social', 'civics'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-modsandbox-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3544548.3581057',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: "Large-scale Text-to-Image Generation Models for Visual Artists' Creative Works",
    authors: [MEMBERS.hyungkwonko, 'Gwanmo Park', 'Hyeon Jeon', 'Jaemin Jo', MEMBERS.juhokim, 'Jinwook Seo'],
    venue: 'IUI 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/iui2023-LTGMs-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3581641.3584078',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'When Does it Become Harassment?: An Investigation of Online Criticism and Calling Out in Twitter',
    authors: [MEMBERS.haesookim, 'Haeeun Kim', MEMBERS.juhokim, 'Jeong-woo Jang'],
    venue: 'CSCW 2022',
    year: 2022,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/cscw2022-callout-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://dl.acm.org/doi/10.1145/3555575',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Learnersourcing Modular and Dynamic Multiple Choice Questions',
    authors: [MEMBERS.haesookim, MEMBERS.inhwasong, MEMBERS.juhokim],
    venue: 'L@S 2022 Workshop on Learnersourcing: Student-generated Content @ Scale',
    year: 2022,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-workshop-Kuiz-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.juhokim],
    venue: 'L@S 2022 Workshop on Learnersourcing: Student-generated Content @ Scale',
    year: 2022,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-workshop-Subgoal-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Interactive Children’s Story Rewriting Through Parent-Children Interaction',
    authors: [MEMBERS.yoonjoolee, MEMBERS.taesookim, MEMBERS.minsukchang, MEMBERS.juhokim],
    venue: 'ACL 2022 Workshop on Intelligent and Interactive Writing Assistants',
    year: 2022,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/acl2022-workshop-childrenstory-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Improving Video Interfaces by Presenting Informational Units of Videos',
    authors: [MEMBERS.saelyneyang, MEMBERS.sangkyungkwak, MEMBERS.taesookim, MEMBERS.juhokim],
    venue: 'CHI 2022 Workshop on Computational Approaches for Understanding, Generating, and Adapting User Interfaces',
    year: 2022,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-workshop-StarLab-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'RLens: A Computer-aided Visualization System for Supporting Reflection on Language Learning under Distributed Tutorship',
    authors: [
      MEMBERS.mengxia,
      'Yankun Zhao',
      MEMBERS.jihyeonghong,
      MEMBERS.mehmethamzaerol,
      MEMBERS.taewookkim,
      MEMBERS.juhokim,
    ],
    venue: 'Learning at Scale 2022',
    year: 2022,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-RLens-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Techniques for Semantic Search and Comparison for Robotic Surgery Videos',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.daeunchoi, 'Matthew Beane', MEMBERS.juhokim],
    venue:
      'CHI 2022 Workshop on Integration of Human Factors in Surgery: Interdisciplinary Collaboration in Design, Development, and Evaluation of Surgical Technologies',
    year: 2022,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-workshop-Surch-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ReviewAid: A Scaffolded Approach to Supporting Readers’ Evaluation of Health News',
    authors: [MEMBERS.eunyoungko, MEMBERS.yeonsukim, MEMBERS.juhokim],
    venue: 'ICLS 2022',
    year: 2022,
    topics: ['learning', 'social', 'civics'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/icls2022-ReviewAid-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Capturing Diverse and Precise Reactions to a Comment with User-Generated Labels',
    authors: [MEMBERS.eunyoungko, MEMBERS.eunseochoi, 'Jeong-woo Jang', MEMBERS.juhokim],
    venue: 'TheWebConf 2022',
    year: 2022,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3485447.3512243',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://reaction.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/www2022-user-generated-labels-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Understanding Distributed Tutorship in Online Language Tutoring',
    authors: [MEMBERS.mengxia, 'Yankun Zhao', MEMBERS.mehmethamzaerol, MEMBERS.jihyeonghong, MEMBERS.juhokim],
    venue: 'LAK 2022',
    year: 2022,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3485447.3512243',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://youtu.be/hcPImSUs8cQ',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/lak2022-distributed-tutorship-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'CatchLive: Real-time Summarization of Live Streams with Stream Content and Interaction Data',
    authors: [MEMBERS.saelyneyang, MEMBERS.jisuyim, MEMBERS.juhokim, 'Hijung Valentina Shin'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3491102.3517461',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://catchlive.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://youtu.be/M7AOIPKDc20',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-CatchLive-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'AlgoSolve: Supporting Subgoal Learning in Algorithmic Problem-Solving with Learnersourced Microtasks',
    authors: [MEMBERS.kabdochoi, MEMBERS.hyungyushin, MEMBERS.mengxia, MEMBERS.juhokim],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501917',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=ATUML6ry3ng',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-AlgoSolve-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Cocomix: Utilizing Comments to Improve Non-Visual Webtoon Accessibility',
    authors: [MEMBERS.minahuh, 'Yunjung Lee', 'Dasom Choi', MEMBERS.haesookim, 'Uran Oh', MEMBERS.juhokim],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502081',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=Oj7K7AAGudc',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-Cocomix-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Promptiverse: Scalable Generation of Scaffolding Prompts through Human-AI Hybrid Knowledge Graph Annotation',
    authors: [
      MEMBERS.yoonjoolee,
      MEMBERS.johnjoonyoungchung,
      MEMBERS.taesookim,
      MEMBERS.jeanyoungsong,
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3491102.3502087',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://promptiverse.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=jvtsD73-Hqw',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-promptiverse-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Stylette: Styling the Web with Natural Language',
    authors: [MEMBERS.taesookim, MEMBERS.daeunchoi, MEMBERS.yoonseochoi, MEMBERS.juhokim],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['human-AI interaction'],
    type: 'Conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3491102.3501931',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://stylette.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=7ZJZpIW9FHc',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-stylette-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'FitVid: Responsive and Flexible Video Content Adaptation',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.yubinchoi, 'Minsuk Kahng', MEMBERS.juhokim],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501948',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://fitvid.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=UvPo2A_jvK8',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-FitVid-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Mobile-Friendly Content Design for MOOCs: Challenges, Requirements, and Design Opportunities',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.yubinchoi, MEMBERS.mengxia, MEMBERS.juhokim],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning'],
    type: 'Conference',
    award: 'Best Paper Award',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502054',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://mobilemooc.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=G7RDBplEP6Y',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-mMOOC-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'SoftVideo: Improving the Learning Experience of Software Tutorial Videos with Collective Interaction Data',
    authors: [
      MEMBERS.saelyneyang,
      MEMBERS.jisuyim,
      MEMBERS.aitolkynbaigutanova,
      MEMBERS.seoyoungkim,
      MEMBERS.minsukchang,
      MEMBERS.juhokim,
    ],
    venue: 'IUI 2022',
    year: 2022,
    topics: ['datamining', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3490099.3511106',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://softvideo.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/iui2022-SoftVideo-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'XDesign: Integrating Interface Design into Explainable AI Education',
    authors: [
      MEMBERS.hyungyushin,
      'Nabila Sindi',
      MEMBERS.yoonjoolee,
      MEMBERS.jaeryoungka,
      MEMBERS.jeanyoungsong,
      MEMBERS.juhokim,
    ],
    venue: 'SIGCSE TS 2022 Posters',
    year: 2022,
    topics: ['human-AI interaction', 'learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3478432.3499052',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://xdesign.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=SPPaYUM1nrA',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2022/sigcse2022-poster-XDesign-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'How Does Netflix "Understand" Me?: Exploring End-user Needs to Design Human-centered Explanations',
    authors: [MEMBERS.yoonseochoi, MEMBERS.eunjeongkang, MEMBERS.juhokim],
    venue: 'NeurIPS 2021 Workshop on Human Centered AI',
    year: 2021,
    topics: ['human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2021/neurips2021-workshop-HumanCenteredExplanation-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Dynamic Construction of Datasets through Crowd Suggestions',
    authors: [MEMBERS.jeongeonpark, MEMBERS.eunyoungko, MEMBERS.donghoonhan, 'Jinyeong Yim', MEMBERS.juhokim],
    venue: 'HCOMP 2021 WiP (Works-in-Progress)',
    year: 2021,
    topics: ['crowdsourcing'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2021/hcomp2021-wip-dynamiclabels-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Improving Readers’ Awareness of Divergent Viewpoints by Displaying Agendas of Comments in Online News Discussions',
    authors: [MEMBERS.taewookkim, MEMBERS.hyunwookim, MEMBERS.juhokim, 'Xiaojuan Ma'],
    venue: 'CSCW 2021 Posters',
    year: 2021,
    topics: ['social'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2021/cscw2021-poster-hagendas-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Collaborative Sequencing of Small Groups through Visual Awareness',
    authors: [MEMBERS.taesookim, 'Nitesh Goyal', MEMBERS.jeongyeonkim, MEMBERS.juhokim, 'Sungsoo Ray Hong'],
    venue: 'CSCW 2021',
    year: 2021,
    topics: ['social', 'visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3449250',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://coseq.kixlab.org',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/cscw2021-CoSeq-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'StarryThoughts: Facilitating Diverse Opinion Exploration on Social Issues',
    authors: [MEMBERS.hyunwookim, MEMBERS.haesookim, MEMBERS.kyungjejo, MEMBERS.juhokim],
    venue: 'CSCW 2021',
    year: 2021,
    topics: ['civics'],
    type: 'Journal',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3449140',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.byulbyul.kr',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/cscw2021-StarryThoughts-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'RubySlippers: Supporting Content-based Voice Navigation for How-to Videos',
    authors: [MEMBERS.minsukchang, MEMBERS.minahuh, MEMBERS.juhokim],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3411764.3445131',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=WxCB0GGVCDA',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://www.youtube.com/watch?v=j_nPsnYq56s',
        type: PublicationLinkType.TRA,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/chi2021-RubySlippers-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Personalizing Ambience and Illusionary Presence: How People Use “Study with me” Videos to Create Effective Studying Environments',
    authors: [
      MEMBERS.yoonjoolee,
      MEMBERS.johnjoonyoungchung,
      MEMBERS.jeanyoungsong,
      MEMBERS.minsukchang,
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3411764.3445222',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=jm8jTmhHbwI',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/chi2021-Studywithme-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Winder: Linking Speech and Visual Objects to Support Communication in Asynchronous Collaboration',
    authors: [MEMBERS.taesookim, MEMBERS.seungsukim, MEMBERS.yoonseochoi, MEMBERS.juhokim],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3411764.3445686',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=_Y0d_uyA6XA&t',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://www.youtube.com/watch?v=eLczDRjKC5o',
        type: PublicationLinkType.TRA,
      },
      {
        url: 'https://winder.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/chi2021-Winder-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Guideline-Based Evaluation and Design Opportunities for Mobile Video-based Learning',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.juhokim],
    venue: 'CHI 2021 Extended Abstracts (Late Breaking Work)',
    year: 2021,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3411763.3451725',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/chi2021-lbw-MobileGuideline-poster.pdf',
        type: PublicationLinkType.POS,
      },
      {
        url: 'https://youtu.be/UFmspprrtlg',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/chi2021-lbw-MobileGuideline-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'FitVid: Towards Development of Responsive and Fluid Video Content Adaptation',
    authors: [MEMBERS.jeongyeonkim, MEMBERS.juhokim],
    venue: 'AAAI 2021 Workshop on Imagining Post-COVID Education with AI',
    year: 2021,
    topics: ['learning', 'human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://youtu.be/xcl9S_hTOq4',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2021/aaai2021-workshop-FitVid-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Reducing Annotation Artifacts in Crowdsourcing Datasets for Natural Language Processing',
    authors: [MEMBERS.donghoonhan, MEMBERS.juhokim, 'Alice Oh'],
    venue: '1st Data Excellence Workshop (DEW 2020) @ HCOMP 2020',
    year: 2020,
    topics: ['crowdsourcing', 'human-AI interaction'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2020/dew2020-annotation-artifact-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ProtoChat: Supporting the Conversation Design Process with Crowd Feedback',
    authors: [
      MEMBERS.yoonseochoi,
      MEMBERS.tonijankeithmonserrat,
      MEMBERS.jeongeonpark,
      MEMBERS.hyungyushin,
      MEMBERS.nyoungwoolee,
      MEMBERS.juhokim,
    ],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['crowdsourcing', 'visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3432924',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://protochat.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=oIBt3EkH-eE',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/cscw2020-Protochat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'C-Reference: Improving 2D to 3D Object Pose Estimation Accuracy via Crowdsourced Joint Object Estimation',
    authors: [MEMBERS.jeanyoungsong, MEMBERS.johnjoonyoungchung, 'David F. Fouhey', 'Walter S. Lasecki'],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3392858',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/cscw2020-CReference-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'I Share, You Care: Private Status Sharing and Sender-Controlled Notifications in Mobile Instant Messaging',
    authors: [MEMBERS.hyunsungcho, 'Jinyoung Oh', MEMBERS.juhokim, 'Sung-Ju Lee'],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3392839',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://nmsl.kaist.ac.kr/projects/mybutler/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.youtube.com/watch?v=hUmjE5giPC0&feature=youtu.be',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/cscw2020-MyButler-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ProtoChat: Supporting the Conversation Design Process with Crowd Feedback (Demo)',
    authors: [
      MEMBERS.yoonseochoi,
      MEMBERS.tonijankeithmonserrat,
      MEMBERS.jeongeonpark,
      MEMBERS.hyungyushin,
      MEMBERS.nyoungwoolee,
      MEMBERS.juhokim,
    ],
    venue: 'CSCW 2020 Demonstrations',
    year: 2020,
    topics: ['crowdsourcing', 'visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://youtu.be/x_nYnn8S3u8',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/cscw2020-Protochat-demo.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Messaging Beyond Texts with Real-time Image Suggestions',
    authors: ['Joon-Gyum Kim', 'Taesik Gong', 'Kyungsik Han', MEMBERS.juhokim, 'JeongGil Ko', 'Sung-Ju Lee'],
    venue: 'MobileHCI 2020',
    year: 2020,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3379503.3403553',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/mobilehci2020-MilliCat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Workflow Graphs: A Computational Model of Collective Task Strategies for 3D Design Software',
    authors: [MEMBERS.minsukchang, 'Ben Lafreniere', MEMBERS.juhokim, 'George Fitzmaurice', 'Tovi Grossman'],
    venue: 'GI 2020',
    year: 2020,
    topics: ['datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://openreview.net/forum?id=qXEzq5agzIN',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/gi2020-WGraphs-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Understanding How People Reason about Aesthetic Evaluations of Artificial Intelligence',
    authors: [
      'Changhoon Oh',
      'Seonghyeon Kim',
      'Jinhan Choi',
      'Jinsu Eun',
      'Soomin Kim',
      MEMBERS.juhokim,
      'Joonhwan Lee',
      'Bongwon Suh',
    ],
    venue: 'DIS 2020',
    year: 2020,
    topics: ['human-AI interaction'],
    type: 'Conference',
    award: 'Honorable Mention',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3357236.3395430',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/dis2020-AIMirror-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'No More One Liners: Bringing Context into Emoji Recommendations',
    authors: [
      'Joon-Gyum Kim',
      'Taesik Gong',
      'Bogoan Kim',
      'JaeYeon Park',
      'Woojeong Kim',
      MEMBERS.eveyhuang,
      'Kyungsik Han',
      MEMBERS.juhokim,
      'JeongGil Ko',
      'Sung-Ju Lee',
    ],
    venue: 'ACM Transactions on Social Computing (TSC) Vol. 3, Article 9 (Apr 2020)',
    year: 2020,
    topics: ['social'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3373146',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/tsc2020-Reeboc-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'AlgoPlan: Supporting Planning in Algorithmic Problem-Solving with Subgoal Diagrams',
    authors: [MEMBERS.kabdochoi, MEMBERS.sallychen, MEMBERS.hyungyushin, 'Jinho Son', MEMBERS.juhokim],
    venue: 'Learning at Scale 2020 (Work-in-Progress)',
    year: 2020,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2020/l@s2020-wip-AlgoPlan-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Leveraging the Crowd to Support the Conversation Design Process',
    authors: [
      MEMBERS.yoonseochoi,
      MEMBERS.hyungyushin,
      MEMBERS.tonijankeithmonserrat,
      MEMBERS.nyoungwoolee,
      MEMBERS.jeongeonpark,
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2020 Workshop on CUI@CHI: Mapping Grand Challenges for the Conversational User Interface Community',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'Workshop',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3405755.3406155',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-workshop-ProtoChat-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting an Iterative Conversation Design Process',
    authors: [
      MEMBERS.yoonseochoi,
      MEMBERS.hyungyushin,
      MEMBERS.tonijankeithmonserrat,
      MEMBERS.nyoungwoolee,
      MEMBERS.jeongeonpark,
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2020 Extended Abstracts (Late Breaking Work)',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3334480.3382951',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-lbw-ProtoChat-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Consensus Building in Collaborative Sequencing with Visual Awareness',
    authors: [MEMBERS.taesookim, 'Sungsoo (Ray) Hong', 'Nitesh Goyal', MEMBERS.jeongyeonkim, MEMBERS.juhokim],
    venue: 'CHI 2020 Extended Abstracts (Late Breaking Work)',
    year: 2020,
    topics: ['visualization', 'social'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-lbw-CoSeq-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'SolutionChat: Real-time Moderator Support for Chat-based Structured Discussion',
    authors: [
      MEMBERS.sungchullee,
      MEMBERS.jaeyoonsong,
      MEMBERS.eunyoungko,
      MEMBERS.seonghopark,
      'Jihee Kim',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['civics', 'social', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3313831.3376609',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=fWSUhUEX3BU',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://www.youtube.com/watch?v=MzUJzGOQXLI',
        type: PublicationLinkType.TRA,
      },
      {
        url: 'http://solutionchat.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-SolutionChat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Understanding Users’ Perception Towards Automated Personality Detection with Group-specific Behavioral Data',
    authors: [MEMBERS.seoyoungkim, MEMBERS.artithakur, MEMBERS.juhokim],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['datamining', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3313831.3376250',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://youtu.be/XVSyashgaKY',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://youtu.be/zLDqTBXRUbs',
        type: PublicationLinkType.TRA,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-APA-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Snapstream: Snapshot-based Interaction in Live Streaming for Visual Art',
    authors: [MEMBERS.saelyneyang, MEMBERS.changyoonlee, 'Hijung Valentina Shin', MEMBERS.juhokim],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3313831.3376390',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://youtu.be/Po6-Q5lJ0QY',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://youtu.be/x62vzVBD4N4',
        type: PublicationLinkType.TRA,
      },
      {
        url: 'https://snapstream.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2020/chi2020-Snapstream-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'What Makes It Hard for Users to Follow Software Tutorial Videos?',
    authors: [MEMBERS.saelyneyang, MEMBERS.juhokim],
    venue: 'HCI Korea 2020',
    year: 2020,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2020/hcik2020-SoftwareTutorial-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'You are How You Behave in Your Group: Predicting Personality via Behaviors in a Co-located Group',
    authors: [MEMBERS.seoyoungkim, MEMBERS.artithakur, MEMBERS.juhokim],
    venue: 'CSCW 2019 Workshop on Learning from Team and Group Diversity',
    year: 2019,
    topics: ['datamining'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/cscw2019-workshop-APA-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Improving Users’ Algorithmic Understandability and Trust in Content Moderation',
    authors: [MEMBERS.jibonnaher, MEMBERS.taehyeonan, MEMBERS.juhokim],
    venue: 'CSCW 2019 Workshop on Contestability In Algorithmic Decision Making',
    year: 2019,
    topics: ['visualization'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/cscw2019-workshop-ContestabilityDesign-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Design for Collaborative Information-Seeking: Understanding User Challenges and Deploying ComeTogether Using Collaborative Dynamic Queries',
    authors: [
      'Sungsoo Ray Hong',
      'Minhyang (Mia) Suh',
      MEMBERS.taesookim,
      'Irina Smoke',
      'Sang-Wha Sien',
      'Janet Ng',
      'Mark Zachry',
      MEMBERS.juhokim,
    ],
    venue: 'CSCW 2019',
    year: 2019,
    topics: ['visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/cscw2019-ComeTogether-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Efficient Elicitation Approaches to Estimate Collective Crowd Answers',
    authors: [
      MEMBERS.johnjoonyoungchung,
      MEMBERS.jeanyoungsong,
      'Sindhu Kutty',
      'Sungsoo Ray Hong',
      MEMBERS.juhokim,
      'Walter S. Lasecki',
    ],
    venue: 'CSCW 2019',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'Conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://medium.com/acm-cscw/efficient-elicitation-approaches-to-estimate-collective-crowd-answers-bd4c9adddb18',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2019/cscw2019-ManyThoughts-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Data Structures for Designing Interactions with Contextual Task Support',
    authors: [MEMBERS.minsukchang],
    venue: 'UIST 2019 Doctoral Symposium',
    year: 2019,
    topics: ['datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/uist2019-docsym-ds-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Instruction of Formulaic Sequences Using Videos at Scale',
    authors: [MEMBERS.kyungjejo, MEMBERS.hyeonggeunyun, MEMBERS.juhokim],
    venue: 'Learning at Scale 2019 (Work-in-Progress)',
    year: 2019,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/l@s2019-FSIST-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'User-Centered Graphical Models of Interaction',
    authors: [MEMBERS.minsukchang, MEMBERS.juhokim],
    venue: 'CHI 2019 Workshop on Computational Modeling in Human-Computer Interaction',
    year: 2019,
    topics: ['visualization'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/chi2019-workshop-Modeling-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Readersourcing an Accurate and Comprehensive Understanding of Health-related Information Represented by Media',
    authors: [MEMBERS.eunyoungko, MEMBERS.chingliu, MEMBERS.hyuntakcha, MEMBERS.juhokim],
    venue: 'CHI 2019 Workshop on HCI for Accurate, Impartial and Transparent Journalism: Challenges and Solutions',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'Workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/chi2019-workshop-Readersourcing-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'SolveDeep: A System for Supporting Subgoal Learning in Online Math Problem Solving',
    authors: [MEMBERS.hyoungwookjin, MEMBERS.minsukchang, MEMBERS.juhokim],
    venue: 'CHI 2019 Extended Abstracts (Late Breaking Work)',
    year: 2019,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/chi2019-lbw-SolveDeep-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Crowdsourcing Perspectives on Public Policy from Stakeholders',
    authors: [
      MEMBERS.hyunwookim,
      MEMBERS.eunyoungko,
      MEMBERS.donghoonhan,
      MEMBERS.sungchullee,
      MEMBERS.simonperrault,
      'Jihee Kim',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2019 Extended Abstracts (Late Breaking Work)',
    year: 2019,
    topics: ['civics', 'crowdsourcing'],
    type: 'Poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/chi2019-lbw-PolicyScape-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'How to Design Voice Based Navigation for How-To Videos',
    authors: [MEMBERS.minsukchang, 'Ahn Truong', 'Oliver Wang', 'Maneesh Agrawala', MEMBERS.juhokim],
    venue: 'CHI 2019',
    year: 2019,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/chi2019-VoiceVideoNavigation-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate Crowd Responses',
    authors: [
      MEMBERS.jeanyoungsong,
      'Stephan J. Lemmer',
      'Michael Xieyang Liu',
      'Shiyan Yan',
      MEMBERS.juhokim,
      'Jason J. Corso',
      'Walter S. Lasecki',
    ],
    venue: 'IUI 2019',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2019/iui2019-2D3DReconstruction-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Personalized Motivation-supportive Messages for Increasing Participation in Crowd-civic Systems',
    authors: [MEMBERS.paulgrau, 'Babak Naderi', MEMBERS.juhokim],
    venue: 'CSCW 2018',
    year: 2018,
    topics: ['civics', 'crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?doid=3290265.3274329',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/cscw2018-Motivation-slides.pdf',
        type: PublicationLinkType.SLI,
      },
      {
        url: 'https://juhokim.com/files/CSCW2018-ManyIdeas.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'FourEyes: Leveraging Tool Diversity as a Means to Improve Aggregate Accuracy in Crowdsourcing',
    authors: [MEMBERS.jeanyoungsong, 'Raymond Fok', MEMBERS.juhokim, 'Walter S. Lasecki'],
    venue: 'ACM TIIS',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'Journal',
    links: [
      {
        url: 'https://juhokim.com/files/TiiS-2018-FourEyes.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'DynamicSlide: Reference-based Interaction Techniques for Slide-based Lecture Videos',
    authors: [MEMBERS.hyeungshikjung, 'Valentina Hijung Shin', MEMBERS.juhokim],
    venue: 'UIST 2018 Poster',
    year: 2018,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3266089',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/uist2018-poster-DynamicSlide-poster.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://juhokim.com/files/UIST2018-Poster-DynamicSlide.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'DynamicSlide: Exploring the Design Space of Reference-based Interaction Techniques for Slide-based Lecture Videos',
    authors: [MEMBERS.hyeungshikjung, 'Valentina Hijung Shin', MEMBERS.juhokim],
    venue: 'MAHCI 2018 Workshop @ ACM Multimedia 2018',
    year: 2018,
    topics: ['learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3264861',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://juhokim.com/files/MM2018-Workshop-DynamicSlide.pdf',
        type: PublicationLinkType.PDF,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/mm2018-workshop-DynamicSlide-slides.pdf',
        type: PublicationLinkType.POS,
      },
    ],
  },
  {
    title: 'Facilitating Document Reading by Linking Text and Tables',
    authors: [MEMBERS.daehyunkim, 'Enamul Hoque', MEMBERS.juhokim, 'Maneesh Agrawala'],
    venue: 'UIST 2018',
    year: 2018,
    topics: ['visualization', 'datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3242617',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://juhokim.com/files/UIST2018-TextChartRef.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Micro-NGO: Tackling Wicked Social Problems with Problem Solving and Action Planning Support in Chat',
    authors: [MEMBERS.sungchullee, 'Jihee Kim', MEMBERS.juhokim],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['civics'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3188564',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/chi2018-lbw-MicroNGO-poster.pdf',
        type: PublicationLinkType.POS,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-LBW-MicroNGO.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: "Detecting Personality Unobtrusively from Users' Online and Offline Workplace Behaviors",
    authors: [MEMBERS.seoyoungkim, MEMBERS.jiyounha, MEMBERS.juhokim],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['datamining'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3188566',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://youtu.be/MZ1kx3_S5Bk',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/chi2018-lbw-PersonalityDetection-poster.pdf',
        type: PublicationLinkType.POS,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-LBW-Personality.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Exprgram: A Language Learning Interface for Mastering Pragmatic Competence',
    authors: [MEMBERS.kyungjejo, MEMBERS.johnjoonyoungchung, MEMBERS.juhokim],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['learning', 'crowdsourcing'],
    type: 'Poster',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3188582',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=Cs8CSz3-MK0',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/chi2018-lbw-Exprgram-poster.pdf',
        type: PublicationLinkType.POS,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-LBW-Exprgram.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Understanding the Effect of In-Video Prompting on Learners and Instructors',
    authors: [MEMBERS.hyungyushin, MEMBERS.eunyoungko, 'Joseph Jay Williams', MEMBERS.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3173893',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=BLiR8jL8abA',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://hyungyu.com/slides/CHI18-prompting-slide.pdf',
        type: PublicationLinkType.SLI,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-Prompting.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'RecipeScape: An Interactive Tool for Analyzing Cooking Instructions at Scale',
    authors: [
      MEMBERS.minsukchang,
      MEMBERS.leonoreguillain,
      MEMBERS.hyeungshikjung,
      'Vivian Hare',
      MEMBERS.juhokim,
      'Maneesh Agrawala',
    ],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['datamining', 'human-AI interaction'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3174025',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=b1TccM1kN4U',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://recipescape.kixlab.org',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-RecipeScape.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'To Distort or Not to Distort: Distance Cartograms in the Wild',
    authors: ['Sungsoo (Ray) Hong', 'Minjoon Yoo', 'Bonnie Chinh', MEMBERS.amyhan, 'Sarah Battersby', MEMBERS.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3174202',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-DC.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Collaborative Dynamic Queries: Supporting Distributed Small Group Decision-making',
    authors: [
      'Sungsoo (Ray) Hong',
      'Minhyang (Mia) Suh',
      'Nathalie Henry Riche',
      MEMBERS.jooyounglee,
      MEMBERS.juhokim,
      'Mark Zachry',
    ],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['visualization'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3173640',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=wQiVSXrOpa0',
        type: PublicationLinkType.VID,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-CDQ.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'BebeCode: Collaborative Child Development Tracking System',
    authors: ['Seokwoo Song', MEMBERS.juhokim, 'Bumsoo Kang', 'Wonjeong Park', 'John Kim'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3174114',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://youtu.be/Dqr45SfpMiQ',
        type: PublicationLinkType.VID,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-BebeCode.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ConceptScape: Collaborative Concept Mapping for Video Learning',
    authors: [MEMBERS.chingliu, MEMBERS.juhokim, 'Hao-Chuan Wang'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['crowdsourcing', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3173961',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=c5YT4XXfh0k',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://humancomputation.com/blog/?p=9802',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-ConceptScape.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
    award: 'Honorable Mention Award',
  },
  {
    title: 'Enhancing Online Problems Through Instructor-Centered Tools for Randomized Experiments',
    authors: [
      'Joseph Jay Williams',
      'Anna Rafferty',
      'Dustin Tingley',
      'Andrew Ang',
      'Walter Lasecki',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3173781',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.youtube.com/watch?v=Q2rvRxtkL2I',
        type: PublicationLinkType.VID,
      },
      {
        url: 'http://juhokim.com/files/CHI2018-DynamicProblem.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Two Tools are Better Than One: Tool Diversity as a Means of Improving Aggregate Crowd Performance',
    authors: [MEMBERS.jeanyoungsong, 'Raymond Fok', 'Alan Lundgard', 'Fan Yang', MEMBERS.juhokim, 'Walter S. Lasecki'],
    venue: 'IUI 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3172944.3172948',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://humancomputation.com/blog/?p=9874',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://kixlab.github.io/website-files/2018/iui2018-ToolDiversity-slides.pdf',
        type: PublicationLinkType.SLI,
      },
      {
        url: 'http://juhokim.com/files/IUI2018-FourEyes.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
    award: 'Best Student Paper Honorable Mention',
  },
  {
    title: 'Korero: Facilitating Complex Referencing of Visual Materials in Asynchronous Discussion Interface',
    authors: ['Soon Hau Chua', MEMBERS.tonijankeithmonserrat, 'Dongwook Yoon', MEMBERS.juhokim, 'Shengdong Zhao'],
    venue: 'CSCW 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'Conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?id=3134669',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Exprgram: A Video-based Language Learning Interface Powered by Learnersourced Video Annotations',
    authors: [MEMBERS.kyungjejo, MEMBERS.johnjoonyoungchung, MEMBERS.juhokim],
    venue: 'HCOMP 2017 Workshop on Human Computation for Image and Video Analysis',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'Workshop',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=J0Y9tzJ-8xY',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://kyungjejo.com/static/media/Exprgram_GroupSight2017.2d234b6f.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
    award: 'Best Paper Runner-up',
  },
  {
    title: 'VideoScape: Augmenting Video Learning Experience with Concept Map',
    authors: [MEMBERS.chingliu, 'Hao-Chuan Wang', MEMBERS.juhokim],
    venue: 'TAICHI 2017',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'Conference',
    links: [
      {
        url: 'https://juhokim.com/files/TAICHI2017-VideoScape.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'RecipeScape: Mining and Analyzing Diverse Processes in Cooking Recipes',
    authors: [MEMBERS.minsukchang, 'Vivian Hare', MEMBERS.juhokim, 'Maneesh Agrawala'],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['datamining'],
    type: 'Poster',
    links: [
      {
        url: 'http://dl.acm.org/citation.cfm?id=3053118',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'PlayBetter: A Phone-based Baby Play Support System for Childcare Bystander Parents',
    authors: ['Seokwoo Song', MEMBERS.juhokim, 'John Kim'],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['crowdsourcing'],
    type: 'Poster',
    links: [
      {
        url: 'http://dl.acm.org/citation.cfm?id=3053073',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Connecting Instructors and Learning Scientists via Collaborative Dynamic Experimentation',
    authors: [
      'Joseph Jay Williams',
      'Anna Rafferty',
      'Andrew Ang',
      'Dustin Tingley',
      'Walter Lasecki',
      MEMBERS.juhokim,
    ],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['learning'],
    type: 'Poster',
    links: [
      {
        url: 'http://dl.acm.org/citation.cfm?id=3053247',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'MOOClets: A Framework for Dynamic Experimentation and Personalization',
    authors: [
      'Joseph Jay Williams',
      'Anna Rafferty',
      'Samuel Maldonado',
      'Andrew Ang',
      'Dustin Tingley',
      MEMBERS.juhokim,
    ],
    venue: 'Learning at Scale 2017 Work-in-Progress',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'Poster',
    links: [
      {
        url: 'http://dl.acm.org/citation.cfm?id=3054006',
        type: PublicationLinkType.ACM,
      },
    ],
  },
  {
    title: 'Designing Interactive Distance Cartograms to Support Urban Travelers',
    authors: [
      'Sungsoo (Ray) Hong',
      'Rafal Kocielnik',
      'Min-Joon Yoo',
      'Sarah Battersby',
      MEMBERS.juhokim,
      'Cecilia Aragon',
    ],
    venue: 'PacificVis 2017',
    year: 2017,
    topics: ['civics'],
    type: 'Conference',
    links: [
      {
        url: 'http://juhokim.com/files/PacificVis2017-DC.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Changing News Media Landscape in South Korea',
    authors: ['Hongjun Lim', 'Choongho Chung', 'Jihee Kim', MEMBERS.juhokim, 'Sue Moon', 'Meeyoung Cha'],
    venue: 'WWW 2017 Workshop on Social News On the Web',
    year: 2017,
    topics: ['civics'],
    type: 'Workshop',
    links: [
      {
        url: 'http://juhokim.com/files/WWW2017-Workshop-News.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Micro-NGO: Crowd-Driven Social Activism Via A Chat-Based Online Platform',
    authors: ['Sungchul Lee', 'Jihee Kim', MEMBERS.juhokim],
    venue: 'CSCW 2017 Workshop on Crowdsourcing Law and Policy',
    year: 2017,
    topics: ['civics'],
    type: 'Workshop',
    links: [
      {
        url: 'http://juhokim.com/files/CSCW2017-Workshop-MicroNGO.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: '"Don’t Bother Me. I’m Socializing!": A Breakpoint-Based Smartphone Notification System',
    authors: ['Chunjong Park', 'Junsung Lim', MEMBERS.juhokim, 'Sung-Ju Lee', 'Dongman Lee'],
    venue: 'CSCW 2017',
    year: 2017,
    topics: ['datamining'],
    type: 'Conference',
    links: [
      {
        url: 'https://juhokim.com/files/CSCW2017-SCAN.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
] as const satisfies Publication[]

export const PREPRINTS: Publication[] = PUBLICATIONS.filter(p => p.type === 'Preprint')
export const PUBLICATIONS_BY_YEAR: Record<string, Publication[]> = PUBLICATIONS.reduce(
  (acc, publication) => {
    if (publication.type === 'Preprint') return acc // skip preprints
    const yearKey = publication.year
    if (!acc[yearKey]) acc[yearKey] = [] as Publication[]
    acc[yearKey].push(publication)
    return acc
  },
  {} as Record<number, Publication[]>
)
// const processNewJson = () => {
//   const newPub = PUBLICATIONS.map(p => {
//     p.authors = p.authors.map(a => {
//       const parts = a.replace(/[^a-zA-Z\s]/g,'').split(' ').map(part => part.trim());
//       const lastName = parts.pop()
//       const firstName = parts.join('')
//       const keytoFind = `${firstName.toLowerCase()}${lastName.toLowerCase()}`
//       const member = Object.keys(MEMBERS).find(key => key === keytoFind)

//       return (member ? `MEMBERS.${keytoFind}` : `${a}`)
//     }
//   )
//   return p
// }
// )
// return newPub;
// }

// fs.writeFileSync('src/data/new_publications.ts', JSON.stringify(processNewJson(), null, 2))
