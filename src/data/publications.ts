import { IMember, MEMBERS } from './members'

export const PublicationTypes = ['conference', 'poster', 'workshop', 'journal', 'preprint'] as const
export type PublicationType = (typeof PublicationTypes)[number]

export const ResearchTopics = {
  datamining: { emoji: '⛏️' },
  crowdsourcing: { emoji: '👥' },
  learning: { emoji: '📚' },
  civics: { emoji: '🏛️' },
  visualization: { emoji: '📊' },
  social: { emoji: '🗣️' },
  'human-AI interaction': { emoji: '🤖' },
} as const

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

export interface IPublication {
  title: string
  authors: (IMember | string)[]
  year: number
  venue: string
  topics: ResearchTopicType[]
  type: PublicationType
  award?: string
  links?: { url: string; type: PublicationLinkType }[]
}

export const PUBLICATIONS: IPublication[] = [
  {
    title: 'ChoiceMates: Supporting Unfamiliar Online Decision-Making with Multi-Agent Conversational Interactions',
    authors: ['Jeongeon Park', 'Bryan Min', 'Xiaojuan Ma', 'Juho Kim'],
    venue: 'arXiv preprint',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'preprint',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.01331',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'CReHate: Cross-cultural Re-annotation of English Hate Speech Dataset',
    authors: ['Nayeon Lee', 'Chani Jung', 'Junho Myung', 'Jiho Jin', 'Juho Kim', 'Alice Oh'],
    year: 2024,
    venue: 'NAACL 2024',
    topics: ['social'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2308.16705',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'FABRIC: Automated Scoring and Feedback Generation for Essays',
    authors: [
      'Jieun Han',
      'Haneul Yoo',
      'Junho Myung',
      'Minsun Kim',
      'Hyunseung Lim',
      'Yoonsu Kim',
      'Tak Yeon Lee',
      'Hwajung Hong',
      'Juho Kim',
      'So-Yeon Ahn',
      'Alice Oh',
    ],
    year: 2023,
    venue: 'arXiv preprint',
    topics: ['learning'],
    type: 'preprint',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.05191',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title:
      'One vs. Multiple: Comprehending Accurate Information from Multiple Erroneous and Inconsistent AI Generations',
    authors: [
      'Yoonjoo Lee',
      'Kihoon Son',
      'Tae Soo Kim',
      'Jisu Kim',
      'John Joon Young Chung',
      'Eytan Adar',
      'Juho Kim',
    ],
    venue: 'FAccT 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [],
  },
  {
    title:
      'EduLive: Re-Creating Cues for Instructor-Learner Interaction in Educational Live Streams with Learners’ Transcript-Based Annotations',
    authors: ['Jingchao Fang', 'Jeongeon Park', 'Juho Kim', 'Hao-Chuan Wang'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['learning', 'social'],
    type: 'conference',
    links: [],
  },
  {
    title: 'VIVID: Human-AI Collaborative Authoring of Vicarious Dialogues from Lecture Videos',
    authors: ['Seulgi Choi', 'Hyewon Lee', 'Yoonjoo Lee', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2403.09168',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title:
      'PaperWeaver: Enriching Topical Paper Alerts by Contextualizing Recommended Papers with User-collected Papers',
    authors: [
      'Yoonjoo Lee',
      'Hyeonsu B Kang',
      'Matt Latzke',
      'Juho Kim',
      'Jonathan Bragg',
      'Joseph Chee Chang',
      'Pao Siangliulue',
    ],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2403.02939',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'CreativeConnect: Supporting Reference Recombination for Graphic Design Ideation with Generative AI',
    authors: ['DaEun Choi', 'Sumin Hong', 'Jeongeon Park', 'John Joon Young Chung', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2312.11949',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://creativeconnect.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title: 'GenQuery: Supporting Expressive Visual Search with Generative Models',
    authors: ['Kihoon Son', 'DaEun Choi', 'Tae Soo Kim', 'Young-Ho Kim', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2310.01287',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://genquery.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title: 'Demystifying Tacit Knowledge in Graphic Design: Characteristics, Instances, Approaches, and Guidelines',
    authors: ['Kihoon Son', 'DaEun Choi', 'Tae Soo Kim', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['learning'],
    type: 'conference',
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
    ],
  },
  {
    title: 'Teach AI How to Code: Using Large Language Models as Teachable Agents for Programming Education',
    authors: ['Hyoungwook Jin', 'Seonghee Lee', 'Hyungyu Shin', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.14534',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'EvalLM: Interactive Evaluation of Large Language Model Prompts on User-Defined Criteria',
    authors: ['Tae Soo Kim', 'Yoonjoo Lee', 'Jamin Shin', 'Young-Ho Kim', 'Juho Kim'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.13633',
        type: PublicationLinkType.ARX,
      },
      {
        url: 'https://evallm.kixlab.org/',
        type: PublicationLinkType.WEB,
      },
    ],
  },
  {
    title: 'Natural Language Dataset Generation Framework for Visualizations Powered by Large Language Models',
    authors: ['Hyung-Kwon Ko', 'Hyeon Jeon', 'Gwanmo Park', 'Dae Hyun Kim', 'Nam Wook Kim', 'Juho Kim', 'Jinwook Seo'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'visualization'],
    type: 'conference',
    links: [
      {
        url: 'https://arxiv.org/abs/2309.10245',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'AQuA: Automated Question-Answering in Software Tutorial Videos with Visual Anchors',
    authors: ['Saelyne Yang', 'Jo Vermeulen', 'George Fitzmaurice', 'Justin Matejka'],
    venue: 'CHI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
    links: [],
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
      'Juho Kim',
      'Minjoon Seo',
    ],
    venue: 'ICLR 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
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
    authors: ['Saelyne Yang', 'Sunghyun Park', 'Yunseok Jang', 'Moontae Lee'],
    venue: 'AAAI 2024',
    year: 2024,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
    links: [],
  },
  {
    title:
      "Understanding Users' Dissatisfaction with ChatGPT Responses: Types, Resolving Tactics, and the Effect of Knowledge Level",
    authors: ['Yoonsu Kim', 'Jueon Lee', 'Seoyoung Kim', 'Jaehyuk Park', 'Juho Kim'],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
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
    authors: ['Bekzat Tilekbay', 'Saelyne Yang', 'Michal A Lewkowicz', 'Alex Suryapranata', 'Juho Kim'],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['human-AI interaction'],
    type: 'conference',
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
    authors: ['Hyunwoo Kim', 'Khanh Duy Le', 'Gionnieve Lim', 'Dae Hyun Kim', 'Yoo Jin Hong', 'Juho Kim'],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['crowdsourcing', 'human-AI interaction', 'civics'],
    type: 'conference',
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
    authors: ['Jeongeon Park', 'Eunyoung Ko', 'Yeon Su Park', 'Jinyeong Yim', 'Juho Kim'],
    venue: 'IUI 2024',
    year: 2024,
    topics: ['crowdsourcing', 'human-AI interaction'],
    type: 'conference',
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
    authors: ['Seoyoung Kim', 'Yeon Su Park', 'Dakyeom Ahn', 'Jin Myung Kwak', 'Juho Kim'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['human-AI interaction', 'social'],
    type: 'conference',
    links: [],
  },
  {
    title: 'CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: ['Hyoungwook Jin', 'Juho Kim'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['crowdsourcing', 'learning'],
    type: 'conference',
    links: [],
  },
  {
    title: 'Re:SPect: Enabling Active and Scalable Responses to Networked Online Harassment',
    authors: ['Haesoo Kim', 'Juhoon Lee', 'Juho Kim', 'Jeong-woo Jang'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['social'],
    type: 'conference',
    links: [],
  },
  {
    title: 'Cells, Generators, and Lenses: Design Framework for Object-Oriented Interaction with Large Language Models',
    authors: ['Tae Soo Kim', 'Yoonjoo Lee', 'Minsuk Chang', 'Juho Kim'],
    venue: 'UIST 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'conference',
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
    authors: ['Tae Soo Kim', 'Matt Latzke', 'Jonathan Bragg', 'Amy X. Zhang', 'Joseph Chee Chang'],
    venue: 'UIST 2023',
    year: 2023,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
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
      'Yoonjoo Lee',
      'Kyungjae Lee',
      'Sunghyun Park',
      'Dasol Hwang',
      'Jaehyeon Kim',
      'Hong-In Lee',
      'Moontae Lee',
    ],
    venue: 'ICML 2023',
    year: 2023,
    topics: ['human-AI interaction', 'datamining'], // check
    type: 'conference',
    links: [
      {
        url: 'https://yoonjoolee.com/assets/papers/QASA_ICML2023.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'EmphasisChecker: A Tool for Guiding Chart and Caption Emphasis',
    authors: ['Dae Hyun Kim', 'Seulgi Choi', 'Juho Kim', 'Vidya Setlur', 'Maneesh Agrawala'],
    venue: 'IEEE VIS 2023',
    year: 2023,
    topics: ['visualization'],
    type: 'journal',
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
      'Gionnieve Lim',
      'Hyunwoo Kim',
      'Yoonseo Choi',
      'Toby Jia-Jun Li',
      'Chinmay Kulkarni',
      'Hariharan Subramonyam',
      'Joseph Seering',
      'Michael S. Bernstein',
      'Amy X. Zhang',
      'Elena L. Glassman',
      'Simon Perrault',
      'Juho Kim',
    ],
    venue: 'CSCW SIG',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'poster',
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
      'Yoonsu Kim',
      'Junho Myung',
      'Minsun Kim',
      'Hyunseung Lim',
      'Juho Kim',
      'Tak Yeon Lee',
      'Hwajung Hong',
      'So-Yeon Ahn',
      'Alice Oh',
    ],
    venue: 'L@S 2023 (Work-in-Progress)',
    year: 2023,
    topics: ['learning'],
    type: 'poster',
    links: [
      {
        url: 'https://arxiv.org/abs/2305.11583',
        type: PublicationLinkType.ARX,
      },
    ],
  },
  {
    title: 'Look Upon Thyself: Understanding the Effect of Self-Reflection on Toxic Behavior in Online Gaming',
    authors: ['Juhoon Lee', 'Juho Kim', 'Jeong-woo Jang'],
    venue: 'CHI 2023 Workshop on Combating Toxicity, Harassment, and Abuse in Online Social Spaces',
    year: 2023,
    topics: ['social'],
    type: 'workshop',
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
    authors: ['Haesoo Kim', 'Juhoon Lee', 'Juho Kim', 'Jeong-woo Jang'],
    venue: 'CHI 2023 Workshop on Combating Toxicity, Harassment, and Abuse in Online Social Spaces',
    year: 2023,
    topics: ['social'],
    type: 'workshop',
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
    authors: ['Hyung-Kwon Ko', 'Kihoon Son', 'Hyoungwook Jin', 'Yoonseo Choi', 'Xiang ‘Anthony’ Chen'],
    venue: 'CHI 2023 Workshop on Generative AI and HCI',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-customer-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'LMCanvas: Object-Oriented Interaction to Personalize Large Language Model-Powered Writing Environments',
    authors: ['Tae Soo Kim', 'Arghya Sarkar', 'Yoonjoo Lee', 'Minsuk Chang', 'Juho Kim'],
    venue: 'CHI 2023 Workshop on Generative AI and HCI',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'workshop',
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
    authors: ['Yoonseo Choi', 'Eun Jeong Kang', 'Min Kyung Lee', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-creatorfriendly-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Beyond Instructions: A Taxonomy of Information Types in How-to Videos',
    authors: ['Saelyne Yang', 'Sangkyung Kwak', 'Juhoon Lee', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-videomap-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'How Older Adults Use Online Videos for Learning',
    authors: ['Seoyoung Kim', 'Donghoon Shin', 'Jeongyeon Kim', 'Soonwoo Kwon', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning', 'datamining'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-olderadults-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'DAPIE: Interactive Step-by-Step Explanatory Dialogues to Answer Children’s Why and How Questions',
    authors: ['Yoonjoo Lee', 'Tae Soo Kim', 'Sungdong Kim', 'Yohan Yun', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['human-AI interaction', 'learning'],
    type: 'conference',
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
    authors: ['Jeongyeon Kim', 'DaEun Choi', 'Nicole Lee', 'Matt Beane', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['learning'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-surch-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'ModSandbox: Facilitating Online Community Moderation Through Error Prediction and Improvement of Automated Rules',
    authors: ['Jean Y Song', 'Sangwook Lee', 'Jisoo Lee', 'Mina Kim', 'Juho Kim'],
    venue: 'CHI 2023',
    year: 2023,
    topics: ['social', 'civics'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-modsandbox-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: "Large-scale Text-to-Image Generation Models for Visual Artists' Creative Works",
    authors: ['Hyung-Kwon Ko', 'Gwanmo Park', 'Hyeon Jeon', 'Jaemin Jo', 'Juho Kim', 'Jinwook Seo'],
    venue: 'IUI 2023',
    year: 2023,
    topics: ['human-AI interaction'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/iui2023-LTGMs-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'When Does it Become Harassment?: An Investigation of Online Criticism and Calling Out in Twitter',
    authors: ['Haesoo Kim', 'Haeeun Kim', 'Juho Kim', 'Jeong-woo Jang'],
    venue: 'CSCW 2022',
    year: 2022,
    topics: ['social'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/cscw2022-callout-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Learnersourcing Modular and Dynamic Multiple Choice Questions',
    authors: ['Haesoo Kim', 'Inhwa Song', 'Juho Kim'],
    venue: 'L@S 2022 Workshop on Learnersourcing: Student-generated Content @ Scale',
    year: 2022,
    topics: ['learning'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-workshop-Kuiz-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Learnersourcing Subgoal Hierarchies of Code Examples',
    authors: ['Hyoungwook Jin', 'Juho Kim'],
    venue: 'L@S 2022 Workshop on Learnersourcing: Student-generated Content @ Scale',
    year: 2022,
    topics: ['learning'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-workshop-Subgoal-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Interactive Children’s Story Rewriting Through Parent-Children Interaction',
    authors: ['Yoonjoo Lee', 'Tae Soo Kim', 'Minsuk Chang', 'Juho Kim'],
    venue: 'ACL 2022 Workshop on Intelligent and Interactive Writing Assistants',
    year: 2022,
    topics: ['human-AI interaction'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/acl2022-workshop-childrenstory-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Improving Video Interfaces by Presenting Informational Units of Videos',
    authors: ['Saelyne Yang', 'Sangkyung Kwak', 'Tae Soo Kim', 'Juho Kim'],
    venue: 'CHI 2022 Workshop on Computational Approaches for Understanding, Generating, and Adapting User Interfaces',
    year: 2022,
    topics: ['learning'],
    type: 'workshop',
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
    authors: ['Meng Xia', 'Yankun Zhao', 'Jihyeong Hong', 'Mehmet Hamza Erol', 'Taewook Kim', 'Juho Kim'],
    venue: 'Learning at Scale 2022',
    year: 2022,
    topics: ['learning'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/l@s2022-RLens-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Techniques for Semantic Search and Comparison for Robotic Surgery Videos',
    authors: ['Jeongyeon Kim', 'DaEun Choi', 'Matthew Beane', 'Juho Kim'],
    venue:
      'CHI 2022 Workshop on Integration of Human Factors in Surgery: Interdisciplinary Collaboration in Design, Development, and Evaluation of Surgical Technologies',
    year: 2022,
    topics: ['learning'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/chi2022-workshop-Surch-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ReviewAid: A Scaffolded Approach to Supporting Readers’ Evaluation of Health News',
    authors: ['Eunyoung Ko', 'Yeonsu Kim', 'Juho Kim'],
    venue: 'ICLS 2022',
    year: 2022,
    topics: ['learning', 'social', 'civics'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2022/icls2022-ReviewAid-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Capturing Diverse and Precise Reactions to a Comment with User-Generated Labels',
    authors: ['Eunyoung Ko', 'Eunseo Choi', 'Jeong-woo Jang', 'Juho Kim'],
    venue: 'TheWebConf 2022',
    year: 2022,
    topics: ['social'],
    type: 'conference',
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
    authors: ['Meng Xia', 'Yankun Zhao', 'Mehmet Hamza Erol', 'Jihyeong Hong', 'Juho Kim'],
    venue: 'LAK 2022',
    year: 2022,
    topics: ['learning'],
    type: 'conference',
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
    authors: ['Saelyne Yang', 'Jisu Yim', 'Juho Kim', 'Hijung Valentina Shin'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'conference',
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
    authors: ['Kabdo Choi', 'Hyungyu Shin', 'Meng Xia', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning'],
    type: 'conference',
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
    authors: ['Mina Huh', 'Yunjung Lee', 'Dasom Choi', 'Haesoo Kim', 'Uran Oh', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['crowdsourcing'],
    type: 'conference',
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
    authors: ['Yoonjoo Lee', 'John Joon Young Chung', 'Tae Soo Kim', 'Jean Y Song', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'conference',
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
    authors: ['Tae Soo Kim', 'DaEun Choi', 'Yoonseo Choi', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['human-AI interaction'],
    type: 'conference',
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
    authors: ['Jeongyeon Kim', 'Yubin Choi', 'Minsuk Kahng', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning', 'human-AI interaction'],
    type: 'conference',
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
    authors: ['Jeongyeon Kim', 'Yubin Choi', 'Meng Xia', 'Juho Kim'],
    venue: 'CHI 2022',
    year: 2022,
    topics: ['learning'],
    type: 'conference',
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
    authors: ['Saelyne Yang', 'Jisu Yim', 'Aitolkyn Baigutanova', 'Seoyoung Kim', 'Minsuk Chang', 'Juho Kim'],
    venue: 'IUI 2022',
    year: 2022,
    topics: ['datamining', 'learning'],
    type: 'conference',
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
    authors: ['Hyungyu Shin', 'Nabila Sindi', 'Yoonjoo Lee', 'Jaeryoung Ka', 'Jean Y. Song', 'Juho Kim'],
    venue: 'SIGCSE TS 2022 Posters',
    year: 2022,
    topics: ['human-AI interaction', 'learning'],
    type: 'poster',
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
    authors: ['Yoonseo Choi', 'Eun Jeong Kang', 'Juho Kim'],
    venue: 'NeurIPS 2021 Workshop on Human Centered AI',
    year: 2021,
    topics: ['human-AI interaction'],
    type: 'workshop',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2021/neurips2021-workshop-HumanCenteredExplanation-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Dynamic Construction of Datasets through Crowd Suggestions',
    authors: ['Jeongeon Park', 'Eunyoung Ko', 'Donghoon Han', 'Jinyeong Yim', 'Juho Kim'],
    venue: 'HCOMP 2021 WiP (Works-in-Progress)',
    year: 2021,
    topics: ['crowdsourcing'],
    type: 'poster',
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
    authors: ['Taewook Kim', 'Hyunwoo Kim', 'Juho Kim', 'Xiaojuan Ma'],
    venue: 'CSCW 2021 Posters',
    year: 2021,
    topics: ['social'],
    type: 'poster',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2021/cscw2021-poster-hagendas-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Collaborative Sequencing of Small Groups through Visual Awareness',
    authors: ['Tae Soo Kim', 'Nitesh Goyal', 'Jeongyeon Kim', 'Juho Kim', 'Sungsoo Ray Hong'],
    venue: 'CSCW 2021',
    year: 2021,
    topics: ['social', 'visualization'],
    type: 'conference',
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
    authors: ['Hyunwoo Kim', 'Haesoo Kim', 'Kyung Je Jo', 'Juho Kim'],
    venue: 'CSCW 2021',
    year: 2021,
    topics: ['civics'],
    type: 'journal', // check
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
    authors: ['Minsuk Chang', 'Mina Huh', 'Juho Kim'],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['learning'],
    type: 'conference',
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
    authors: ['Yoonjoo Lee', 'John Joon Young Chung', 'Jean Y. Song', 'Minsuk Chang', 'Juho Kim'],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['learning'],
    type: 'conference',
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
    authors: ['Tae Soo Kim', 'Seungsu Kim', 'Yoonseo Choi', 'Juho Kim'],
    venue: 'CHI 2021',
    year: 2021,
    topics: ['social'],
    type: 'conference',
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
    authors: ['Jeongyeon Kim', 'Juho Kim'],
    venue: 'CHI 2021 Extended Abstracts (Late Breaking Work)',
    year: 2021,
    topics: ['learning'],
    type: 'poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3411763.3451725',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2021/chi2021-lbw-MobileGuideline-poster.pdf',
        type: PublicationLinkType.POS,
      },
      {
        url: 'https://youtu.be/UFmspprrtlg',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://www.kixlab.org/files/2021/chi2021-lbw-MobileGuideline-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'FitVid: Towards Development of Responsive and Fluid Video Content Adaptation',
    authors: ['Jeongyeon Kim', 'Juho Kim'],
    venue: 'AAAI 2021 Workshop on Imagining Post-COVID Education with AI',
    year: 2021,
    topics: ['learning', 'human-AI interaction'],
    type: 'workshop',
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
    authors: ['Donghoon Han', 'Juho Kim', 'Alice Oh'],
    venue: '1st Data Excellence Workshop (DEW 2020) @ HCOMP 2020',
    year: 2020,
    topics: ['crowdsourcing', 'human-AI interaction'],
    type: 'workshop',
    links: [
      {
        url: 'https://www.kixlab.org/files/2020/dew2020-annotation-artifact-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ProtoChat: Supporting the Conversation Design Process with Crowd Feedback',
    authors: ['Yoonseo Choi', 'Toni-Jan Keith Monserrat', 'Jeongeon Park', 'Hyungyu Shin', 'Nyoungwoo Lee', 'Juho Kim'],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['crowdsourcing', 'visualization'],
    type: 'conference',
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
        url: 'https://www.kixlab.org/files/2020/cscw2020-Protochat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'C-Reference: Improving 2D to 3D Object Pose Estimation Accuracy via Crowdsourced Joint Object Estimation',
    authors: ['Jean Y. Song', 'John Joon Young Chung', 'David F. Fouhey', 'Walter S. Lasecki'],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3392858',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/cscw2020-CReference-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'I Share, You Care: Private Status Sharing and Sender-Controlled Notifications in Mobile Instant Messaging',
    authors: ['Hyunsung Cho', 'Jinyoung Oh', 'Juho Kim', 'Sung-Ju Lee'],
    venue: 'CSCW 2020',
    year: 2020,
    topics: ['social'],
    type: 'conference',
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
        url: 'https://www.kixlab.org/files/2020/cscw2020-MyButler-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'ProtoChat: Supporting the Conversation Design Process with Crowd Feedback (Demo)',
    authors: ['Yoonseo Choi', 'Toni-Jan Keith Monserrat', 'Jeongeon Park', 'Hyungyu Shin', 'Nyoungwoo Lee', 'Juho Kim'],
    venue: 'CSCW 2020 Demonstrations',
    year: 2020,
    topics: ['crowdsourcing', 'visualization'],
    type: 'conference',
    links: [
      {
        url: 'https://youtu.be/x_nYnn8S3u8',
        type: PublicationLinkType.VID,
      },
      {
        url: 'https://www.kixlab.org/files/2020/cscw2020-Protochat-demo.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Messaging Beyond Texts with Real-time Image Suggestions',
    authors: ['Joon-Gyum Kim', 'Taesik Gong', 'Kyungsik Han', 'Juho Kim', 'JeongGil Ko', 'Sung-Ju Lee'],
    venue: 'MobileHCI 2020',
    year: 2020,
    topics: ['social'],
    type: 'conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3379503.3403553',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/mobilehci2020-MilliCat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Workflow Graphs: A Computational Model of Collective Task Strategies for 3D Design Software',
    authors: ['Minsuk Chang', 'Ben Lafreniere', 'Juho Kim', 'George Fitzmaurice', 'Tovi Grossman'],
    venue: 'GI 2020',
    year: 2020,
    topics: ['datamining'],
    type: 'conference',
    links: [
      {
        url: 'https://openreview.net/forum?id=qXEzq5agzIN',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.kixlab.org/files/2020/gi2020-WGraphs-paper.pdf',
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
      'Juho Kim',
      'Joonhwan Lee',
      'Bongwon Suh',
    ],
    venue: 'DIS 2020',
    year: 2020,
    topics: ['human-AI interaction'],
    type: 'conference',
    award: 'Honorable Mention',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3357236.3395430',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/dis2020-AIMirror-paper.pdf',
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
      'Evey Huang',
      'Kyungsik Han',
      'Juho Kim',
      'JeongGil Ko',
      'Sung-Ju Lee',
    ],
    venue: 'ACM Transactions on Social Computing (TSC) Vol. 3, Article 9 (Apr 2020)',
    year: 2020,
    topics: ['social'],
    type: 'conference',
    links: [
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3373146',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/tsc2020-Reeboc-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'AlgoPlan: Supporting Planning in Algorithmic Problem-Solving with Subgoal Diagrams',
    authors: ['Kabdo Choi', 'Sally Chen', 'Hyungyu Shin', 'Jinho Son', 'Juho Kim'],
    venue: 'Learning at Scale 2020 (Work-in-Progress)',
    year: 2020,
    topics: ['learning'],
    type: 'poster',
    links: [
      {
        url: 'https://www.kixlab.org/files/2020/l@s2020-wip-AlgoPlan-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Leveraging the Crowd to Support the Conversation Design Process',
    authors: ['Yoonseo Choi', 'Hyungyu Shin', 'Toni-Jan Keith Monserrat', 'Nyoungwoo Lee', 'Jeongeon Park', 'Juho Kim'],
    venue: 'CHI 2020 Workshop on CUI@CHI: Mapping Grand Challenges for the Conversational User Interface Community',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'workshop',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3405755.3406155',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/chi2020-workshop-ProtoChat-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting an Iterative Conversation Design Process',
    authors: ['Yoonseo Choi', 'Hyungyu Shin', 'Toni-Jan Keith Monserrat', 'Nyoungwoo Lee', 'Jeongeon Park', 'Juho Kim'],
    venue: 'CHI 2020 Extended Abstracts (Late Breaking Work)',
    year: 2020,
    topics: ['crowdsourcing'],
    type: 'poster',
    links: [
      {
        url: 'https://dl.acm.org/doi/10.1145/3334480.3382951',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2020/chi2020-lbw-ProtoChat-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Consensus Building in Collaborative Sequencing with Visual Awareness',
    authors: ['Tae Soo Kim', 'Sungsoo (Ray) Hong', 'Nitesh Goyal', 'Jeongyeon Kim', 'Juho Kim'],
    venue: 'CHI 2020 Extended Abstracts (Late Breaking Work)',
    year: 2020,
    topics: ['visualization', 'social'],
    type: 'poster',
    links: [
      {
        url: 'https://www.kixlab.org/files/2020/chi2020-lbw-CoSeq-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'SolutionChat: Real-time Moderator Support for Chat-based Structured Discussion',
    authors: ['Sung-Chul Lee', 'Jaeyoon Song', 'Eunyoung Ko', 'Seongho Park', 'Jihee Kim', 'Juho Kim'],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['civics', 'social', 'human-AI interaction'],
    type: 'conference',
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
        url: 'https://www.kixlab.org/files/2020/chi2020-SolutionChat-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Understanding Users’ Perception Towards Automated Personality Detection with Group-specific Behavioral Data',
    authors: ['Seoyoung Kim', 'Arti Thakur', 'Juho Kim'],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['datamining', 'human-AI interaction'],
    type: 'conference',
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
        url: 'https://www.kixlab.org/files/2020/chi2020-APA-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Snapstream: Snapshot-based Interaction in Live Streaming for Visual Art',
    authors: ['Saelyne Yang', 'Changyoon Lee', 'Hijung Valentina Shin', 'Juho Kim'],
    venue: 'CHI 2020',
    year: 2020,
    topics: ['learning'],
    type: 'conference',
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
        url: 'https://www.kixlab.org/files/2020/chi2020-Snapstream-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'What Makes It Hard for Users to Follow Software Tutorial Videos?',
    authors: ['Saelyne Yang', 'Juho Kim'],
    venue: 'HCI Korea 2020',
    year: 2020,
    topics: ['learning'],
    type: 'conference',
    links: [
      {
        url: 'https://www.kixlab.org/files/2020/hcik2020-SoftwareTutorial-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'You are How You Behave in Your Group: Predicting Personality via Behaviors in a Co-located Group',
    authors: ['Seoyoung Kim', 'Arti Thakur', 'Juho Kim'],
    venue: 'CSCW 2019 Workshop on Learning from Team and Group Diversity',
    year: 2019,
    topics: ['datamining'],
    type: 'workshop',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/cscw2019-workshop-APA-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Improving Users’ Algorithmic Understandability and Trust in Content Moderation',
    authors: ['Jibon Naher', 'Taehyeon An', 'Juho Kim'],
    venue: 'CSCW 2019 Workshop on Contestability In Algorithmic Decision Making',
    year: 2019,
    topics: ['visualization'],
    type: 'workshop',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/cscw2019-workshop-ContestabilityDesign-paper.pdf',
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
      'Tae Soo Kim',
      'Irina Smoke',
      'Sang-Wha Sien',
      'Janet Ng',
      'Mark Zachry',
      'Juho Kim',
    ],
    venue: 'CSCW 2019',
    year: 2019,
    topics: ['visualization'],
    type: 'conference',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/cscw2019-ComeTogether-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Efficient Elicitation Approaches to Estimate Collective Crowd Answers',
    authors: [
      'John Joon Young Chung',
      'Jean Y. Song',
      'Sindhu Kutty',
      'Sungsoo Ray Hong',
      'Juho Kim',
      'Walter S. Lasecki',
    ],
    venue: 'CSCW 2019',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'conference',
    award: 'Honorable Mention Award',
    links: [
      {
        url: 'https://medium.com/acm-cscw/efficient-elicitation-approaches-to-estimate-collective-crowd-answers-bd4c9adddb18',
        type: PublicationLinkType.WEB,
      },
      {
        url: 'https://www.kixlab.org/files/2019/cscw2019-ManyThoughts-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Data Structures for Designing Interactions with Contextual Task Support',
    authors: ['Minsuk Chang'],
    venue: 'UIST 2019 Doctoral Symposium',
    year: 2019,
    topics: ['datamining'],
    type: 'conference', // check
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/uist2019-docsym-ds-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Supporting Instruction of Formulaic Sequences Using Videos at Scale',
    authors: ['Kyung Je Jo', 'Hyeonggeun Yun', 'Juho Kim'],
    venue: 'Learning at Scale 2019 (Work-in-Progress)',
    year: 2019,
    topics: ['learning'],
    type: 'poster',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/l@s2019-FSIST-poster.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'User-Centered Graphical Models of Interaction',
    authors: ['Minsuk Chang', 'Juho Kim'],
    venue: 'CHI 2019 Workshop on Computational Modeling in Human-Computer Interaction',
    year: 2019,
    topics: ['visualization'],
    type: 'workshop',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/chi2019-workshop-Modeling-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title:
      'Readersourcing an Accurate and Comprehensive Understanding of Health-related Information Represented by Media',
    authors: ['Eunyoung Ko', 'Ching Liu', 'Hyuntak Cha', 'Juho Kim'],
    venue: 'CHI 2019 Workshop on HCI for Accurate, Impartial and Transparent Journalism: Challenges and Solutions',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'workshop',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/chi2019-workshop-Readersourcing-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'SolveDeep: A System for Supporting Subgoal Learning in Online Math Problem Solving',
    authors: ['Hyoungwook Jin', 'Minsuk Chang', 'Juho Kim'],
    venue: 'CHI 2019 Extended Abstracts (Late Breaking Work)',
    year: 2019,
    topics: ['learning'],
    type: 'poster',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/chi2019-lbw-SolveDeep-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Crowdsourcing Perspectives on Public Policy from Stakeholders',
    authors: ['Hyunwoo Kim', 'Eunyoung Ko', 'Donghoon Han', 'Sung-chul Lee', 'Simon Perrault', 'Jihee Kim', 'Juho Kim'],
    venue: 'CHI 2019 Extended Abstracts (Late Breaking Work)',
    year: 2019,
    topics: ['civics', 'crowdsourcing'],
    type: 'poster',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/chi2019-lbw-PolicyScape-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'How to Design Voice Based Navigation for How-To Videos',
    authors: ['Minsuk Chang', 'Ahn Truong', 'Oliver Wang', 'Maneesh Agrawala', 'Juho Kim'],
    venue: 'CHI 2019',
    year: 2019,
    topics: ['learning'],
    type: 'conference',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/chi2019-VoiceVideoNavigation-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate Crowd Responses',
    authors: [
      'Jean Y. Song',
      'Stephan J. Lemmer',
      'Michael Xieyang Liu',
      'Shiyan Yan',
      'Juho Kim',
      'Jason J. Corso',
      'Walter S. Lasecki',
    ],
    venue: 'IUI 2019',
    year: 2019,
    topics: ['crowdsourcing'],
    type: 'conference',
    links: [
      {
        url: 'https://www.kixlab.org/files/2019/iui2019-2D3DReconstruction-paper.pdf',
        type: PublicationLinkType.PDF,
      },
    ],
  },
  {
    title: 'Personalized Motivation-supportive Messages for Increasing Participation in Crowd-civic Systems',
    authors: ['Paul Grau', 'Babak Naderi', 'Juho Kim'],
    venue: 'CSCW 2018',
    year: 2018,
    topics: ['civics', 'crowdsourcing'],
    type: 'conference',
    links: [
      {
        url: 'https://dl.acm.org/citation.cfm?doid=3290265.3274329',
        type: PublicationLinkType.ACM,
      },
      {
        url: 'https://www.kixlab.org/files/2018/cscw2018-Motivation-slides.pdf',
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
    authors: ['Jean Y. Song', 'Raymond Fok', 'Juho Kim', 'Walter S. Lasecki'],
    venue: 'ACM TIIS',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'journal',
    links: [{ url: 'https://juhokim.com/files/TiiS-2018-FourEyes.pdf', type: PublicationLinkType.PDF }],
  },
  {
    title: 'DynamicSlide: Reference-based Interaction Techniques for Slide-based Lecture Videos',
    authors: ['Hyeungshik Jung', 'Valentina Hijung Shin', 'Juho Kim'],
    venue: 'UIST 2018 Poster',
    year: 2018,
    topics: ['learning'],
    type: 'poster',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3266089', type: PublicationLinkType.ACM },
      {
        url: 'https://www.kixlab.org/files/2018/uist2018-poster-DynamicSlide-poster.pdf',
        type: PublicationLinkType.PDF,
      },
      { url: 'https://juhokim.com/files/UIST2018-Poster-DynamicSlide.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title:
      'DynamicSlide: Exploring the Design Space of Reference-based Interaction Techniques for Slide-based Lecture Videos',
    authors: ['Hyeungshik Jung', 'Valentina Hijung Shin', 'Juho Kim'],
    venue: 'MAHCI 2018 Workshop @ ACM Multimedia 2018',
    year: 2018,
    topics: ['learning'],
    type: 'workshop',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3264861', type: PublicationLinkType.ACM },
      {
        url: 'https://www.kixlab.org/files/2018/mm2018-workshop-DynamicSlide-slides.pdf',
        type: PublicationLinkType.SLI,
      },
      { url: 'https://juhokim.com/files/MM2018-Workshop-DynamicSlide.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Facilitating Document Reading by Linking Text and Tables',
    authors: ['Dae Hyun Kim', 'Enamul Hoque', 'Juho Kim', 'Maneesh Agrawala'],
    venue: 'UIST 2018',
    year: 2018,
    topics: ['visualization', 'datamining'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3242617', type: PublicationLinkType.ACM },
      { url: 'https://juhokim.com/files/UIST2018-TextChartRef.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Micro-NGO: Tackling Wicked Social Problems with Problem Solving and Action Planning Support in Chat',
    authors: ['Sung-chul Lee', 'Jihee Kim', 'Juho Kim'],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['civics'],
    type: 'poster',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3188564', type: PublicationLinkType.ACM },
      { url: 'https://www.kixlab.org/files/2018/chi2018-lbw-MicroNGO-poster.pdf', type: PublicationLinkType.POS },
      { url: 'http://juhokim.com/files/CHI2018-LBW-MicroNGO.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: "Detecting Personality Unobtrusively from Users' Online and Offline Workplace Behaviors",
    authors: ['Seoyoung Kim', 'Jiyoun Ha', 'Juho Kim'],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['datamining'],
    type: 'poster',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3188566', type: PublicationLinkType.ACM },
      { url: 'https://youtu.be/MZ1kx3_S5Bk', type: PublicationLinkType.VID },
      {
        url: 'https://www.kixlab.org/files/2018/chi2018-lbw-PersonalityDetection-poster.pdf',
        type: PublicationLinkType.POS,
      },
      { url: 'http://juhokim.com/files/CHI2018-LBW-Personality.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Exprgram: A Language Learning Interface for Mastering Pragmatic Competence',
    authors: ['Kyungje Jo', 'John Joon Young Chung', 'Juho Kim'],
    venue: 'CHI 2018 Extended Abstracts (Late Breaking Work)',
    year: 2018,
    topics: ['learning', 'crowdsourcing'],
    type: 'poster',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3188582', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=Cs8CSz3-MK0', type: PublicationLinkType.VID },
      { url: 'https://www.kixlab.org/files/2018/chi2018-lbw-Exprgram-poster.pdf', type: PublicationLinkType.POS },
      { url: 'http://juhokim.com/files/CHI2018-LBW-Exprgram.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Understanding the Effect of In-Video Prompting on Learners and Instructors',
    authors: ['Hyungyu Shin', 'Eun Young Ko', 'Joseph Jay Williams', 'Juho Kim'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['learning'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3173893', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=BLiR8jL8abA', type: PublicationLinkType.VID },
      { url: 'https://hyungyu.com/slides/CHI18-prompting-slide.pdf', type: PublicationLinkType.SLI },
      { url: 'http://juhokim.com/files/CHI2018-Prompting.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'RecipeScape: An Interactive Tool for Analyzing Cooking Instructions at Scale',
    authors: ['Minsuk Chang', 'Leonore Guillain', 'Hyeungshik Jung', 'Vivian Hare', 'Juho Kim', 'Maneesh Agrawala'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['datamining', 'human-AI interaction'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3174025', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=b1TccM1kN4U', type: PublicationLinkType.VID },
      { url: 'https://recipescape.kixlab.org', type: PublicationLinkType.WEB },
      { url: 'http://juhokim.com/files/CHI2018-RecipeScape.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'To Distort or Not to Distort: Distance Cartograms in the Wild',
    authors: ['Sungsoo (Ray) Hong', 'Minjoon Yoo', 'Bonnie Chinh', 'Amy Han', 'Sarah Battersby', 'Juho Kim'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['visualization'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3174202', type: PublicationLinkType.ACM },
      { url: 'http://juhokim.com/files/CHI2018-DC.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Collaborative Dynamic Queries: Supporting Distributed Small Group Decision-making',
    authors: [
      'Sungsoo (Ray) Hong',
      'Minhyang (Mia) Suh',
      'Nathalie Henry Riche',
      'Jooyoung Lee',
      'Juho Kim',
      'Mark Zachry',
    ],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['visualization'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3173640', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=wQiVSXrOpa0', type: PublicationLinkType.VID },
      { url: 'http://juhokim.com/files/CHI2018-CDQ.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'BebeCode: Collaborative Child Development Tracking System',
    authors: ['Seokwoo Song', 'Juho Kim', 'Bumsoo Kang', 'Wonjeong Park', 'John Kim'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3174114', type: PublicationLinkType.ACM },
      { url: 'https://youtu.be/Dqr45SfpMiQ', type: PublicationLinkType.VID },
      { url: 'http://juhokim.com/files/CHI2018-BebeCode.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'ConceptScape: Collaborative Concept Mapping for Video Learning',
    authors: ['Ching Liu', 'Juho Kim', 'Hao-Chuan Wang'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['crowdsourcing', 'learning'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3173961', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=c5YT4XXfh0k', type: PublicationLinkType.VID },
      { url: 'https://humancomputation.com/blog/?p=9802', type: PublicationLinkType.WEB },
      { url: 'http://juhokim.com/files/CHI2018-ConceptScape.pdf', type: PublicationLinkType.PDF },
    ],
    award: 'Honorable Mention Award',
  },
  {
    title: 'Enhancing Online Problems Through Instructor-Centered Tools for Randomized Experiments',
    authors: ['Joseph Jay Williams', 'Anna Rafferty', 'Dustin Tingley', 'Andrew Ang', 'Walter Lasecki', 'Juho Kim'],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['learning'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3173781', type: PublicationLinkType.ACM },
      { url: 'https://www.youtube.com/watch?v=Q2rvRxtkL2I', type: PublicationLinkType.VID },
      { url: 'http://juhokim.com/files/CHI2018-DynamicProblem.pdf', type: PublicationLinkType.PDF },
    ],
  },
  {
    title: 'Two Tools are Better Than One: Tool Diversity as a Means of Improving Aggregate Crowd Performance',
    authors: ['Jean Y. Song', 'Raymond Fok', 'Alan Lundgard', 'Fan Yang', 'Juho Kim', 'Walter S. Lasecki'],
    venue: 'IUI 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org/citation.cfm?id=3172944.3172948', type: PublicationLinkType.ACM },
      { url: 'https://humancomputation.com/blog/?p=9874', type: PublicationLinkType.WEB },
      { url: 'https://www.kixlab.org/files/2018/iui2018-ToolDiversity-slides.pdf', type: PublicationLinkType.SLI },
      { url: 'http://juhokim.com/files/IUI2018-FourEyes.pdf', type: PublicationLinkType.PDF },
    ],
    award: 'Best Student Paper Honorable Mention',
  },
  {
    title: 'Korero: Facilitating Complex Referencing of Visual Materials in Asynchronous Discussion Interface',
    authors: ['Soon Hau Chua', 'Toni-Jan Keith Monserrat', 'Dongwook Yoon', 'Juho Kim', 'Shengdong Zhao'],
    venue: 'CSCW 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'conference',
    links: [{ url: 'https://dl.acm.org/citation.cfm?id=3134669', type: PublicationLinkType.ACM }],
  },
  {
    title: 'Exprgram: A Video-based Language Learning Interface Powered by Learnersourced Video Annotations',
    authors: ['Kyungje Jo', 'John Joon Young Chung', 'Juho Kim'],
    venue: 'HCOMP 2017 Workshop on Human Computation for Image and Video Analysis',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'workshop',
    links: [
      { url: 'https://www.youtube.com/watch?v=J0Y9tzJ-8xY', type: PublicationLinkType.VID },
      { url: 'https://kyungjejo.com/static/media/Exprgram_GroupSight2017.2d234b6f.pdf', type: PublicationLinkType.PDF },
    ],
    award: 'Best Paper Runner-up',
  },
  {
    title: 'VideoScape: Augmenting Video Learning Experience with Concept Map',
    authors: ['Ching Liu', 'Hao-Chuan Wang', 'Juho Kim'],
    venue: 'TAICHI 2017',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'conference',
    links: [{ url: 'https://juhokim.com/files/TAICHI2017-VideoScape.pdf', type: PublicationLinkType.PDF }],
  },
  {
    title: 'RecipeScape: Mining and Analyzing Diverse Processes in Cooking Recipes',
    authors: ['Minsuk Chang', 'Vivian Hare', 'Juho Kim', 'Maneesh Agrawala'],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['datamining'],
    type: 'poster',
    links: [{ url: 'http://dl.acm.org/citation.cfm?id=3053118', type: PublicationLinkType.ACM }],
  },
  {
    title: 'PlayBetter: A Phone-based Baby Play Support System for Childcare Bystander Parents',
    authors: ['Seokwoo Song', 'Juho Kim', 'John Kim'],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['crowdsourcing'],
    type: 'poster',
    links: [{ url: 'http://dl.acm.org/citation.cfm?id=3053073', type: PublicationLinkType.ACM }],
  },
  {
    title: 'Connecting Instructors and Learning Scientists via Collaborative Dynamic Experimentation',
    authors: ['Joseph Jay Williams', 'Anna Rafferty', 'Andrew Ang', 'Dustin Tingley', 'Walter Lasecki', 'Juho Kim'],
    venue: 'CHI 2017 Extended Abstracts',
    year: 2017,
    topics: ['learning'],
    type: 'poster',
    links: [{ url: 'http://dl.acm.org/citation.cfm?id=3053247', type: PublicationLinkType.ACM }],
  },
  {
    title: 'MOOClets: A Framework for Dynamic Experimentation and Personalization',
    authors: ['Joseph Jay Williams', 'Anna Rafferty', 'Samuel Maldonado', 'Andrew Ang', 'Dustin Tingley', 'Juho Kim'],
    venue: 'Learning at Scale 2017 Work-in-Progress',
    year: 2017,
    topics: ['crowdsourcing', 'learning'],
    type: 'poster',
    links: [{ url: 'http://dl.acm.org/citation.cfm?id=3054006', type: PublicationLinkType.ACM }],
  },
  {
    title: 'Designing Interactive Distance Cartograms to Support Urban Travelers',
    authors: ['Sungsoo (Ray) Hong', 'Rafal Kocielnik', 'Min-Joon Yoo', 'Sarah Battersby', 'Juho Kim', 'Cecilia Aragon'],
    venue: 'PacificVis 2017',
    year: 2017,
    topics: ['civics'],
    type: 'conference',
    links: [{ url: 'http://juhokim.com/files/PacificVis2017-DC.pdf', type: PublicationLinkType.PDF }],
  },
  {
    title: 'Changing News Media Landscape in South Korea',
    authors: ['Hongjun Lim', 'Choongho Chung', 'Jihee Kim', 'Juho Kim', 'Sue Moon', 'Meeyoung Cha'],
    venue: 'WWW 2017 Workshop on Social News On the Web',
    year: 2017,
    topics: ['civics'],
    type: 'workshop',
    links: [{ url: 'http://juhokim.com/files/WWW2017-Workshop-News.pdf', type: PublicationLinkType.PDF }],
  },
  {
    title: 'Micro-NGO: Crowd-Driven Social Activism Via A Chat-Based Online Platform',
    authors: ['Sungchul Lee', 'Jihee Kim', 'Juho Kim'],
    venue: 'CSCW 2017 Workshop on Crowdsourcing Law and Policy',
    year: 2017,
    topics: ['civics'],
    type: 'workshop',
    links: [{ url: 'http://juhokim.com/files/CSCW2017-Workshop-MicroNGO.pdf', type: PublicationLinkType.PDF }],
  },
  {
    title: '"Don’t Bother Me. I’m Socializing!": A Breakpoint-Based Smartphone Notification System',
    authors: ['Chunjong Park', 'Junsung Lim', 'Juho Kim', 'Sung-Ju Lee', 'Dongman Lee'],
    venue: 'CSCW 2017',
    year: 2017,
    topics: ['datamining'],
    type: 'conference',
    links: [{ url: 'https://juhokim.com/files/CSCW2017-SCAN.pdf', type: PublicationLinkType.PDF }],
  },
] as const satisfies IPublication[]
