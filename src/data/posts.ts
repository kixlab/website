interface Props {
  title: string
  date: Date
  categories: string[]
  summary: string
  contentMdFilePath?: string // Add path to markdown file if exists
  endsAt?: Date // Add if the post has a deadline
}

interface Post extends Props {}
class Post {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const POST = {
  kixlab2016: new Post({
    title: 'KIXLAB Open!',
    date: new Date('2016-07-01'),
    categories: ['news'],
    summary:
      'The new KAIST Interaction Lab has officially opened. We are kicking off with one Ph.D. student and five summer undergrad interns.',
  }),

  cs4922016: new Post({
    title: 'CS492 Crowdsourcing course finished',
    date: new Date('2016-12-30'),
    categories: ['news'],
    summary:
      'In Fall 2016, Prof. Juho Kim from KIXLAB taught CS492: Crowdsourcing. Information about the class and students project gallery can be found [on the course website](http://kixlab.org/courses/crowdsourcing/index.html).',
  }),

  internspring2017: new Post({
    title: 'Spring 2017 Undergraduate Research Internship',
    date: new Date('2017-02-16'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this spring. You can find the details on [Prof. Juho Kim's website](https://juhokim.com/2017-spring-internship-call.html).",
    endsAt: new Date('2017-02-20'),
  }),

  pub2017: new Post({
    title: 'New publications',
    date: new Date('2017-02-17'),
    categories: ['publication'],
    summary:
      "We've started the year with a number of publications accepted to CHI, CSCW and other venues. You can find our latest contributions [on our new publications page](/publications/).",
  }),

  cs3742017: new Post({
    title: 'CS374 Intro to HCI started',
    date: new Date('2017-02-27'),
    categories: ['news'],
    summary:
      'This semester, a new course is being offered by Prof. Juho Kim from KIXLAB, Intro to HCI (CS374). Information about the class can be found [on the course website](http://kixlab.org/courses/hci/).',
  }),

  newmember2017: new Post({
    title: 'New lab members',
    date: new Date('2017-03-01'),
    categories: ['news'],
    summary:
      'We are happy to welcome new members to our lab. Eunyoung Ko, Jonghyuk Jung, Hyungwoo Kim and Hyunwoo Kim are joining our team.',
  }),

  internsummer2017: new Post({
    title: 'Summer 2017 Undergraduate Research Internship',
    date: new Date('2017-04-29'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find the details on [Prof. Juho Kim's website](https://juhokim.com/2017-summer-internship-call.html).",
    endsAt: new Date('2017-04-30'),
  }),

  urp2017: new Post({
    title: 'Exprgram wins grand prix for URP (Undergraduate Research Program) project',
    date: new Date('2017-08-24'),
    categories: ['award'],
    summary:
      'Kyungje Jo, an undergrad intern, wins a grand-prix for his URP (Undergraduate Research Program) project: *Learning Diverse Expressions through Video Mining*.',
  }),

  GroupSightWorkshop2017: new Post({
    title: 'Exprgram selected as best paper runner-up @ GroupSight 2017 Workshop',
    date: new Date('2017-10-24'),
    categories: ['award'],
    summary:
      '*Exprgram: A Video-based Language Learning Interface Powered by Learnersourced Video Annotations.* by Kyungje Jo, John Joonyoung Chung, and Juho Kim is selected as a best paper runner-up at the [GroupSight 2017 Workshop on Human Computation for Image and Video Analysis](https://groupsight.github.io/) @ HCOMP 2017.',
  }),

  iui2018: new Post({
    title: 'IUI2018: one paper conditionally accepted',
    date: new Date('2017-12-06'),
    categories: ['publication'],
    summary:
      'A paper is conditionally accepted to [IUI2018](https://iui2018.acm.org/): *Two Tools are Better Than One: Tool Diversity as a Means of Improving Aggregate Crowd Performance* led by Jeanyoung Song.',
  }),

  chi2018acceptance: new Post({
    title: 'CHI2018: 7 papers conditionally accepted',
    date: new Date('2017-12-15'),
    categories: ['publication'],
    summary:
      "We're happy to share that seven papers from KIXLAB and collaborators have been conditionally accepted to [CHI2018](https://chi2018.acm.org/).",
  }),

  recipescape2017: new Post({
    title: 'RecipeScape website is up!',
    date: new Date('2017-12-19'),
    categories: ['publication'],
    summary:
      "The project website for [RecipeScape](https://recipescape.kixlab.org/) is live now! It's an interactive tool for analyzing cooking instructions at scale.",
  }),

  interns2017: new Post({
    title: 'Interns & visiting Ph.D. students!',
    date: new Date('2017-12-26'),
    categories: ['news'],
    summary:
      'KIXLAB welcomes five winter undergrad interns: Jiyoun Ha, Hyoungwook Jin, Tae Soo Kim, Hyunjong Lee, and Seayeon Lee. We also have two visiting Ph.D. students: Ray Hong from the University of Washington, USA, and Maria De Las Mercedes Huertas Miguelanez from the University of Trento, Italy.',
  }),

  conceptscape2018: new Post({
    title: 'ConceptScape wins an Honourable Mention Award for CHI 2018',
    date: new Date('2018-02-09'),
    categories: ['award'],
    summary:
      'The ConceptScape paper by Ching Liu, Juho Kim, and Hao-Chuan Wang wins an Honourable Mention Award for [CHI2018](https://chi2018.acm.org/).',
  }),

  hciKAIST2018: new Post({
    title: 'KIXLAB presents 10 posters at the HCI@KAIST Workshop',
    date: new Date('2018-02-13'),
    categories: ['news'],
    summary:
      'At the annual [HCI@KAIST Workshop](https://sites.google.com/site/hcikaist/workshop), KIXLAB members share 10 of their latest research projects.',
  }),

  chilbw2018: new Post({
    title: 'Three CHI 2018 late-breaking work (LBW) papers accepted',
    date: new Date('2018-02-17'),
    categories: ['publication'],
    summary:
      'Three late breaking work papers to [CHI2018](https://chi2018.acm.org/) have been accepted: civic engagement, data-driven personality detection, and learnersourcing.',
  }),

  iui2018award: new Post({
    title: 'Our paper wins a Best Student Paper Honorable Mention at IUI 2018',
    date: new Date('2018-03-12'),
    categories: ['award'],
    summary:
      'The [Tool Diversity](https://dl.acm.org/authorize?N43044) paper by Jean Y. Song, Raymond Fok, Alan Lundgard, Fan Yang, Juho Kim, and Walter S. Lasecki wins a Best Student Paper Honorable Mention Award at [IUI2018](http://iui.acm.org/2018/).',
  }),

  internsummer2018: new Post({
    title: 'Summer 2018 Undergraduate Research Internship',
    date: new Date('2018-04-21'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find the details on [Prof. Juho Kim's website](https://juhokim.com/2018-summer-internship-call.html).",
    endsAt: new Date('2018-04-29'),
  }),

  chi2018: new Post({
    title: 'KIXLAB at CHI 2018',
    date: new Date('2018-04-22'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present seven full papers and three late-breaking-work posters at CHI 2018. Eight members of KIXLAB will be attending CHI.',
    contentMdFilePath: '2018-04-22-chi2018.md',
  }),

  many2018: new Post({
    title: 'Many Ideas for KAIST: The Most Interesting Ideas',
    date: new Date('2018-06-29'),
    categories: ['news'],
    summary:
      'In our Many Ideas platform, every member of KAIST can post and react to ideas. In this article, we summarize the initial results.',
    contentMdFilePath: '2018-06-29-manyideas-report.md',
  }),

  msdefense2018: new Post({
    title: 'Seoyoung and Paul successfully defended their Master thesis',
    date: new Date('2018-07-05'),
    categories: ['news'],
    summary:
      'Both [Seoyoung](https://sites.google.com/view/seoyoung/) and [Paul](http://graycoding.com/) successfully defended their Master thesis as first students to graduate from KIXLAB. Congrats! Seoyoung\'s thesis is titled ["Automatic Workplace Personality Detection from Online and Offline Behavior Analysis"](https://www.kixlab.org/files/theses/thesis-ms-2018-seoyoung.pdf). Paul\'s thesis is titled ["Effects of Personalization on Participation in Crowd-civic Systems"](https://www.kixlab.org/files/theses/thesis-ms-2018-paul.pdf).',
  }),

  dynamicslide2018: new Post({
    title: 'DynamicSlide paper accepted to UIST 2018 poster track && ACM MM workshop',
    date: new Date('2018-08-03'),
    categories: ['publication'],
    summary:
      '"DynamicSlide: Reference-based Interaction Techniques for Slide-based Lecture Videos" led by Hyeungshik Jung is accepted to [UIST 2018](https://uist.acm.org/uist2018/)\'s poster track as well as [MAHCI 2018 Workshop](http://lmc.hfut.edu.cn/MAHCI2018/home.html) @ [ACM Multimedia](http://www.acmmm.org/2018/).',
  }),

  foureyes2018: new Post({
    title: 'FourEyes paper accepted to ACM TIIS',
    date: new Date('2018-08-04'),
    categories: ['publication'],
    summary:
      'Our paper "FourEyes: Leveraging Tool Diversity as a Means to Improve Aggregate Accuracy in Crowdsourcing" led by Jean Song with collaborators at Michigan is accepted to [ACM Transactions on Interactive Intelligent Systems (TIIS)](https://tiis.acm.org/).',
  }),

  CSCW2018: new Post({
    title: 'Many Ideas paper accepted to CSCW 2018',
    date: new Date('2018-08-08'),
    categories: ['publication'],
    summary:
      'Our paper "Personalized Motivation-supportive Messages for Increasing Participation in Crowd-civic Systems" led by Paul Grau is accepted to [CSCW 2018](https://cscw.acm.org/2018/).',
  }),

  adobeintern2018: new Post({
    title: 'Research Internships at Adobe Research',
    date: new Date('2018-09-30'),
    categories: ['news'],
    summary:
      "Minsuk Chang and Hyungyu Shin spent the summer as research interns at Adobe's Creative Intelligence Lab. Minsuk worked on voice interfaces for how-to video navigation in Seattle with Oliver Wang and Anh Truong, and Hyungyu worked on slide authoring tools in Cambridge with Valentina Shin.",
  }),

  internwinter2018: new Post({
    title: 'Winter 2019 Undergraduate Research Internship',
    date: new Date('2018-10-21'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find the details on [Prof. Juho Kim's website](https://juhokim.com/2019-winter-internship-call.html).",
    endsAt: new Date('2018-10-28'),
  }),

  autodeskintern2018: new Post({
    title: "Minsuk's Research Internship at Autodesk Research",
    date: new Date('2018-11-30'),
    categories: ['news'],
    summary:
      'Minsuk Chang started his research internship at Autodesk Research, working with Ben Lafreniere and Tovi Grossman (U of Toronto).',
  }),

  iui2019: new Post({
    title: 'Popup paper accepted to IUI 2019',
    date: new Date('2018-12-08'),
    categories: ['publication'],
    summary:
      'Our paper ["Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate Crowd Responses"](https://www.kixlab.org/files/2019/iui2019-2D3DReconstruction-paper.pdf) led by Jean Song with collaborators at Michigan is accepted to [IUI 2019](https://iui.acm.org/2019/).',
  }),

  voice2018: new Post({
    title: 'Voice video navigation paper accepted to CHI 2019',
    date: new Date('2018-12-11'),
    categories: ['publication'],
    summary:
      'Our paper ["How to Design Voice Based Navigation for How-To Videos"](https://www.kixlab.org/files/2019/chi2019-VoiceVideoNavigation-paper.pdf) led by Minsuk Chang with collaborators at Adobe and Stanford is accepted to [CHI 2019](https://chi2019.acm.org/).',
  }),

  msdefense2018fall: new Post({
    title: 'Hyeungshik and Hyungyu successfully defended their Master thesis',
    date: new Date('2018-12-17'),
    categories: ['news'],
    summary:
      'Both [Hyeungshik](https://hyeungshikjung.com/) and [Hyungyu](https://hyungyu.com/) successfully defended their Master thesis. Congrats! Hyeungshik\'s thesis is titled ["DynamicLecture: Enabling Direct Revision of Slide-based Lecture Videos"](https://www.kixlab.org/files/theses/thesis-ms-2019-hyeungshik.pdf). Hyungyu\'s thesis is titled ["Understanding the Effect of In-Video Prompting on Learners and Instructors"](https://www.kixlab.org/files/theses/thesis-ms-2019-hyungyu.pdf).',
  }),

  chilbw2019: new Post({
    title: 'Two CHI 2019 late-breaking work (LBW) papers accepted',
    date: new Date('2019-02-09'),
    categories: ['publication'],
    summary:
      'Two late breaking work papers to [CHI 2019](http://chi2019.acm.org) have been accepted: "Crowdsourcing Perspectives on Public Policy from Stakeholders" led by Hyunwoo Kim and "SolveDeep: A System for Supporting Subgoal Learning in Online Math Problem Solving" led by Hyoungwook Jin.',
  }),

  hyeungshik2019: new Post({
    title: 'Hyeungshik & Hyungyu get their MS degrees; Hyungyu gets a thesis award!',
    date: new Date('2019-02-23'),
    categories: ['news', 'award'],
    summary:
      'Hyeungshik and Hyungyu officially completed their MS degrees. Hyeungshik joins NAVER as a software engineer, and Hyungyu continues as a Ph.D. student in KIXLAB. Hyungyu wins an outstanding MS thesis award from the department!',
  }),

  internsummer2019: new Post({
    title: 'Summer 2019 Undergraduate Research Internship',
    date: new Date('2019-04-11'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2019-summer-internship-call.html).",
    endsAt: new Date('2019-04-14'),
  }),

  saelyne2019: new Post({
    title: 'Saelyne wins a prestigious Kwanjeong scholarship',
    date: new Date('2019-04-25'),
    categories: ['award'],
    summary:
      'Saelyne wins a prestigious Kwanjeong scholarship awarded to outstanding grad students in the nation in all of science and engineering. She was the one candidate selected by the department and among ~6 recipients from KAIST.',
  }),

  sigchi2019: new Post({
    title: 'SIGCHI Local Chapter pre-CHI Workshop',
    date: new Date('2019-04-26'),
    categories: ['news'],
    summary:
      'The ACM SIGCHI Korea Local Chapter held a pre-CHI workshop for researchers in Korea. Juho and Yoonseo organized the event as local co-chairs. At the workshop, researchers presented 12 full papers and 12 posters that were accepted to CHI 2019.',
  }),

  minsuk2019: new Post({
    title: 'Minsuk wins the Best Talk Award at pre-CHI Workshop',
    date: new Date('2019-04-26'),
    categories: ['award'],
    summary:
      'Minsuk wins the Best Talk Award from SIGCHI Local Chapter pre-CHI Workshop at KAIST. He gave an outstanding talk on his paper ["How to Design Voice Based Navigation for How-To Videos"](https://www.kixlab.org/files/2019/chi2019-VoiceVideoNavigation-paper.pdf).',
  }),

  chi2019: new Post({
    title: 'KIXLAB at CHI 2019',
    date: new Date('2019-05-06'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present one full paper and two late-breaking-work posters at CHI 2019. Nine members of KIXLAB will be attending CHI.',
    contentMdFilePath: '2019-05-06-chi2019.md',
  }),

  minsukinternship2019: new Post({
    title: 'Minsuk starts an internship at Microsoft Research',
    date: new Date('2019-06-03'),
    categories: ['news'],
    summary:
      'Minsuk will be spending the summer at Microsoft Research in Redmond, US, to work on conversational interfaces.',
  }),

  msdefense2019: new Post({
    title: 'Hyunwoo and Mathias successfully defended their MS theses',
    date: new Date('2019-06-17'),
    categories: ['news'],
    summary:
      'Both Hyunwoo and Mathias successfully defended their Master\'s theses. Congrats! Hyunwoo\'s thesis is titled ["PolicyScape: Crowdsourcing Perspectives on Public Policies from Stakeholders"](https://www.kixlab.org/files/theses/thesis-ms-2019-hyunwoo.pdf). Hyunwoo is continuing as a Ph.D. student in KIXLAB. Mathias\'s thesis is titled ["Improving Learning Plans with Peer Goal Revision"](https://www.kixlab.org/files/theses/thesis-ms-2019-mathias.pdf). Mathias will be working as a software engineer in Copenhagen.',
  }),

  cscwacceptance2019: new Post({
    title: 'CSCW 2019: 2 papers accepted',
    date: new Date('2019-07-31'),
    categories: ['publication'],
    summary:
      'We’re happy to share that two papers from KIXLAB and collaborators have been conditionally accepted to CSCW2019.',
  }),

  uist2019: new Post({
    title: "UIST 2019: Minsuk's Doctoral Symposium submission is accepted.",
    date: new Date('2019-08-05'),
    categories: ['news'],
    summary:
      "Minsuk's Doctoral Symposium submission to UIST 2019 have been accepted: Data Structures for Designing Interactions with Contextual Task Support.",
  }),

  cscwaward2019: new Post({
    title: 'CSCW 2019: ManyThoughts paper wins a Best Paper Honorable Mention award.',
    date: new Date('2019-09-28'),
    categories: ['award'],
    summary:
      'Our "Efficient Elicitation Approaches to Estimate Collective Crowd Answers" paper wins a Best Paper Honorable Mention Award for CSCW 2019. This project started as John\'s internship project in KIXLAB and evolved into a collaboration with colleagues at the University of Michigan.',
  }),

  byulbyul2019: new Post({
    title: 'We launched the byulbyul.kr <별별생각> system!',
    date: new Date('2019-10-23'),
    categories: ['news'],
    summary:
      'In collaboration with SBS (Korean national TV network), we recently launched an experimental online platform called [“별별생각”](http://byulbyul.kr), where people can share their characteristics as well as their opinions on social issues, and see the distribution of opinions and search for people with shared characteristics.',
  }),

  internwinter2019: new Post({
    title: 'Winter 2020 Undergraduate Research Internship',
    date: new Date('2019-10-23'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2020-winter-internship-call.html).",
    endsAt: new Date('2019-11-03'),
  }),

  cscw2019: new Post({
    title: 'KIXLAB at CSCW 2019',
    date: new Date('2019-11-10'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present two full papers and participate in two workshops at CSCW 2019. Three of us will be there.',
    contentMdFilePath: '2019-11-10-cscw2019.md',
  }),

  cscwwinterschool2019: new Post({
    title: 'CSCW Asia Winter School',
    date: new Date('2019-12-09'),
    categories: ['news'],
    summary:
      'Seoyoung, Jibon, Hoon, and Juho are attending the [CSCW Asia Winter School](https://cf-collaborator.github.io/cscw-aws2019/) held in Kyoto, Japan, on December 13-14, 2019. Seoyoung, Jibon, and Hoon will be presenting their posters. Juho is one of the organizers.',
  }),

  chi2020: new Post({
    title: 'Three CHI 2020 papers conditionally accepted',
    date: new Date('2019-12-10'),
    categories: ['publication'],
    summary:
      'Three KIXLAB papers have been conditionally accepted to [CHI 2020](https://chi2020.acm.org/): “SolutionChat: Real-time Moderator Support for Chat-based Structured Discussion” (led by Sung-Chul), “Snapstream: Snapshot-based Interaction in Live Streaming for Visual Art”(led by Saelyne), and “Understanding Users’ Perception Towards Automated Personality Detection with Group-specific Behavioral Data” (led by Seoyoung).',
  }),

  chilbw2020: new Post({
    title: 'Two CHI 2020 late-breaking work (LBW) papers accepted',
    date: new Date('2020-02-09'),
    categories: ['publication'],
    summary:
      'Two late breaking work papers to [CHI 2020](http://chi2020.acm.org) have been accepted: ["Leveraging the Crowd to Support the Conversation Design Process"](/publications) led by Yoonseo Choi and ["Consensus Building in Collaborative Sequencing with Visual Awareness"](/publications) led by Tae Soo Kim.',
  }),

  internsummer2020: new Post({
    title: 'Summer 2020 Undergraduate Research Internship',
    date: new Date('2020-04-26'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2020-summer-internship-call.html).",
    endsAt: new Date('2020-04-30'),
  }),

  urp2020: new Post({
    title: 'Mina wins a the grand prize at the 2020 URP',
    date: new Date('2020-08-27'),
    categories: ['award'],
    summary:
      'Mina won the grand prize at the 2020 Winter/Spring URP (Undergraduate Research Program) Program Workshop. She was mentored by Minsuk and Juho.',
  }),

  defense2020: new Post({
    title: 'Minsuk successfully defended his Ph.D. thesis',
    date: new Date('2020-09-09'),
    categories: ['news'],
    summary:
      'Minsuk Chang successfully defended his Ph.D. thesis titled "Mining Sequential Knowledge for Interaction Design". His thesis committee included Alice Oh, Mia Cha, Elena Glassman, Mira Dontcheva, and Juho Kim (chair). He\'s the first student to get a Ph.D. from KIXLAB. Congratulations!',
  }),

  cscw2020: new Post({
    title: 'Two CSCW 2020 papers presented',
    date: new Date('2020-10-15'),
    categories: ['publication'],
    summary:
      'Two papers led by KIXLAB members will be presented at [CSCW 2020](https://cscw.acm.org/2020/): [“C-Reference: Improving 2D to 3D Object Pose Estimation Accuracy via Crowdsourced Joint Object Estimation”](https://www.kixlab.org/files/2020/cscw2020-CReference-paper.pdf) (led by Jean) and [“ProtoChat: Supporting the Conversation Design Process with Crowd Feedback”](https://www.kixlab.org/files/2020/cscw2020-Protochat-paper.pdf) (led by Yoonseo).',
  }),

  hcomp2020: new Post({
    title: 'A paper accepted to DEW 2020 @ HCOMP',
    date: new Date('2020-10-23'),
    categories: ['publication'],
    summary:
      '"Reducing Annotation Artifacts in Crowdsourcing Datasets for Natural Language Processing" led by Hoon is accepted to [DEW(Data Excellence Workshop) 2020](http://eval.how/dew2020/).',
  }),

  internwinter2020: new Post({
    title: 'Winter 2021 Undergraduate Research Internship',
    date: new Date('2020-11-01'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2021-winter-internship-call.html).",
    endsAt: new Date('2020-11-06'),
  }),

  msdefense2020: new Post({
    title: 'Saelyne, Yoonseo and Hoon successfully defended their M.S. Thesis.',
    date: new Date('2020-12-22'),
    categories: ['news'],
    summary:
      'Saelyne Yang, Yoonseo Choi and Donghoon Han successfully defended their Master\'s theses. Saelyne\'s thesis is titled ["Snapstream: Snapshot-based Interaction in Live Streaming for Visual Art"](https://www.kixlab.org/files/theses/thesis-ms-2021-saelyne.pdf). Yoonseo\'s thesis is titled ["ProtoChat: Supporting the Iterative Conversation Design Process with Crowd Feedback"](https://www.kixlab.org/files/theses/thesis-ms-2021-yoonseo.pdf). Saelyne and Yoonseo are continuing as a Ph.D. student in KIXLAB. Hoon\'s thesis is titled ["Reducing Annotation Artifacts in Crowdsourcing Datasets for Natural Language Processing"](https://www.kixlab.org/files/theses/thesis-ms-2021-hoon.pdf).',
  }),

  aaai2021: new Post({
    title: 'A paper accepted to AAAI 2021 Workshop',
    date: new Date('2021-01-16'),
    categories: ['publication'],
    summary:
      '“FitVid: Towards Development of Responsive and Fluid Video Content Adaptation” led by Jeongyeon is accepted to [AAAI 2021 Workshop on Imagining Post-COVID Education with AI](https://sites.google.com/view/tipce-2021).',
  }),

  chi2021acceptance: new Post({
    title: 'Three CHI 2021 papers accepted',
    date: new Date('2021-01-21'),
    categories: ['publication'],
    summary:
      'Three KIXLAB papers have been accepted to [CHI 2021](https://chi2021.acm.org/): “RubySlippers: Supporting Content-based Voice Navigation for How-to Videos” (led by Minsuk), “Personalizing Ambience and Illusionary Presence: How People Use “Study with Me” Videos to Create Effective Studying Environments”(led by Yoonjoo), and “Winder: Linking Speech and Visual Objects to Support Communication in Asynchronous Collaboration” (led by Tae Soo).',
  }),

  cscw2021: new Post({
    title: 'Two CSCW 2021 papers accepted',
    date: new Date('2021-01-26'),
    categories: ['publication'],
    summary:
      'Two KIXLAB papers have been accepted to [CSCW 2021](https://cscw.acm.org/2021): “Supporting Collaborative Sequencing of Small Groups through Visual Awareness” (led by Tae Soo) and “StarryThoughts: Facilitating Diverse Opinion Exploration on Social Issues” (led by Hyunwoo).',
  }),

  thesisaward2021: new Post({
    title: 'Minsuk, Saelyne, and Yoonseo won the department’s Outstanding Thesis Award',
    date: new Date('2021-01-29'),
    categories: ['award'],
    summary:
      'Minsuk, Saelyne, and Yoonseo won the department’s Outstanding Thesis Award. KIXLAB rocked this year with three awardees out of twelve total.',
  }),

  taaward2020fall: new Post({
    title: 'Hyungyu was selected as an Outstanding TA of SoC in fall 2020',
    date: new Date('2021-02-18'),
    categories: ['award'],
    summary:
      'Hyungyu worked excellently as a TA in the CS492 course, and was selected as an Outstanding TA of SoC in fall 2020.',
  }),

  internsummer2021: new Post({
    title: 'Summer 2021 Undergraduate Research Internship',
    date: new Date('2021-04-20'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2021-summer-internship-call.html).",
    endsAt: new Date('2021-04-30'),
  }),

  kixlab2021: new Post({
    title: 'KIXLAB receives a Star Lab grant',
    date: new Date('2021-04-22'),
    categories: ['news'],
    summary:
      'KIXLAB has received a "Star Lab" grant from the Korean government. The grant will support our research on "object-oriented video interaction" for the next 8 years. What if we can author and watch videos with objects, relationships, and contexts than with pixels and frames? We plan to design and build next-generation interactive technologies for video authoring, watching, and analytics. Press Release: [SoC website](https://cs.kaist.ac.kr/board/view?bbs_id=news&bbs_sn=9662&menu=83) | [ZDNet](https://zdnet.co.kr/view/?no=20210421153521&fbclid=IwAR1Vm-HhebDfvrDIroeZ6kbTQoDh2z_XATc6WDgRe86Sx5kcluF9FW8k7jA)',
  }),

  chi2021: new Post({
    title: 'KIXLAB at CHI 2021',
    date: new Date('2021-05-10'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present three full papers and one late-breaking-work poster at CHI 2021. Most KIXLAB members will be attending CHI.',
    contentMdFilePath: '2021-05-10-chi2021.md',
  }),

  taaward2021: new Post({
    title: 'Haesoo, Yoonseo, Saelyne, and Hyungyu were selected as Outstanding TAs of SoC in Spring 2021',
    date: new Date('2021-08-20'),
    categories: ['award'],
    summary:
      'Haesoo, Yoonseo, Saelyne, and Hyungyu served as TAs for Intro to HCI (Haesoo, Yoonseo, and Saelyne) and Human-AI Interaction (Hyungyu) courses in the spring, and were selected as Outstanding TAs of SoC in Spring 2021.',
  }),

  hcomp2021: new Post({
    title: 'A paper accepted to HCOMP 2021 WiP (Works-in-Progress)',
    date: new Date('2021-09-27'),
    categories: ['publication'],
    summary:
      'Our paper ["Supporting Dynamic Construction of Datasets with Annotator Suggestions"](https://kixlab.github.io/website-files/2021/hcomp2021-wip-dynamiclabels-paper.pdf) led by Jeongeon is accepted to [HCOMP 2021](https://www.humancomputation.com/index.html) Works-in-Progress.',
  }),

  kinewsletter2021: new Post({
    title: 'KIXLAB in the 2021 fall issue of the KI news letter',
    date: new Date('2021-10-12'),
    categories: ['news'],
    summary:
      'KIXLAB was featured in the 2021 Fall Issue of the KI (KAIST Institute) news letter as a member of ["KI for Artificial Intelligence"](https://kmatrix.kaist.ac.kr/ki-for-artificial-intelligence/), which is supporting our work on AI-mediated communication.',
  }),

  ms2021: new Post({
    title: 'KIXLAB has positions for MS students',
    date: new Date('2021-10-26'),
    categories: ['position'],
    summary:
      'KIXLAB has a few open positions for MS students in SoC KAIST for Spring 2022. If interested, please follow the instructions in the <a href="https://juhokim.com/students.html#ms_process">MS Student Selection Process</a> Application deadline: Nov. 2nd, 2021.',
    endsAt: new Date('2021-11-02'),
  }),

  internwinter2021: new Post({
    title: 'Winter 2022 Undergraduate Research Internship',
    date: new Date('2021-10-27'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2022-winter-internship-call.html).",
    endsAt: new Date('2021-11-03'),
  }),

  chi2022acceptance: new Post({
    title: 'Six CHI 2022 papers conditionally accepted',
    date: new Date('2021-11-16'),
    categories: ['publication'],
    summary:
      'Six KIXLAB papers have been conditionally accepted with minor revision and two papers received revise & resubmit at [CHI 2022](https://chi2022.acm.org/).',
    contentMdFilePath: '2021-11-16-chi2022.md',
  }),

  neurips2021: new Post({
    title: 'A paper accepted to NeurIPS 2021 Workshop (Human Centered AI workshop)',
    date: new Date('2021-11-25'),
    categories: ['publication'],
    summary:
      'Our paper ["How Does Netflix "Understand" Me?: Exploring End-user Needs to Design Human-centered Explanations"](https://kixlab.github.io/website-files/2021/neurips2021-workshop-HumanCenteredExplanation-paper.pdf) led by Yoonseo and Eun Jeong is accepted to NeurIPS 2021 Workshop on [Human Centered AI](https://sites.google.com/view/hcai-human-centered-ai-neurips/home).',
  }),

  lak2021: new Post({
    title: 'A paper accepted to LAK 2022',
    date: new Date('2021-12-03'),
    categories: ['publication'],
    summary:
      'Our paper ["Understanding Distributed Tutorship in Online Language Tutoring"](https://kixlab.github.io/website-files/2021/lak2022-fullresearchpaper-DistributedTutorship-paper.pdf) led by Meng is accepted to LAK 2022.',
  }),

  openkaist2021: new Post({
    title: 'This year KIXLAB is representing the School of Computing in Open KAIST event!',
    date: new Date('2021-12-04'),
    categories: ['news'],
    summary:
      '[“Open KAIST”](https://www.openkaist.ac.kr/bbs/board.php?bo_table=m234) is an annual outreach event of KAIST that tries to communicate the science and research happening on campus to the public. [Open KAIST video](https://www.youtube.com/watch?v=GgvkmXXPFPI ) of KIXLAB (as a representative of SoC) is up!',
  }),

  iui2022: new Post({
    title: 'A paper accepted to IUI 2022',
    date: new Date('2021-12-21'),
    categories: ['publication'],
    summary:
      'Our paper ["SoftVideo: Improving the Learning Experience of Software Tutorial Videos with Collective Interaction Data"](https://kixlab.github.io/website-files/2022/iui2022-SoftVideo-paper.pdf) led by Saelyne is accepted to IUI 2022.',
  }),

  thewebconf2022: new Post({
    title: 'A paper accepted to TheWebConf 2022',
    date: new Date('2022-01-24'),
    categories: ['publication'],
    summary:
      'Our paper ["Capturing Diverse and Precise Reactions to a Comment with User-Generated Labels"](https://kixlab.github.io/website-files/2022/www2022-user-generated-labels-paper.pdf) led by Eunyoung and Eunseo is accepted to [TheWebConf 2022](https://www2022.thewebconf.org/).',
  }),

  taaward2022: new Post({
    title: 'Seoyoung’s team won the outstanding paper award at KSC',
    date: new Date('2022-02-07'),
    categories: ['award'],
    summary:
      'Seoyoung, Seokhun Jeong, Seulgi Choi, and Juhoon Lee won the outstanding paper award at KSC for their work: “Data-Driven and Personalized Vocabulary Recommendation for English Learners”.',
  }),

  chi2022acceptanceadd: new Post({
    title: 'One more CHI 2022 paper accepted',
    date: new Date('2022-02-08'),
    categories: ['news'],
    summary:
      'One more KIXLAB paper ["CatchLive: Real-time Summarization of Live Streams with Stream Content and Interaction Data"](https://kixlab.github.io/website-files/2022/chi2022-CatchLive-paper.pdf) led by Saelyne has been accepted to [CHI 2022](https://chi2022.acm.org/).',
  }),

  taaward2021fall: new Post({
    title: 'Taesoo and Jeongyeon won the department’s Outstanding MS Thesis Award',
    date: new Date('2022-02-09'),
    categories: ['award'],
    summary:
      'Taesoo and Jeongyeon won the department’s Outstanding MS Thesis Award. KIXLAB rocked this year again with two awardees out of the six awardees for MS theses.',
  }),

  edutaaward2021fall: new Post({
    title: 'Haesoo was selected as an Outstanding Education 4.0Q TA in fall 2021',
    date: new Date('2022-02-11'),
    categories: ['award'],
    summary:
      'Haesoo worked excellently as a TA in the CS473 course, and was selected as an outstanding Education 4.0Q TA in fall 2021.',
  }),

  icls2022: new Post({
    title: 'A paper accepted to ICLS 2022',
    date: new Date('2022-03-11'),
    categories: ['publication'],
    summary:
      'Our paper ["ReviewAid: A Scaffolded Approach to Supporting Readers’ Evaluation of Health News"](https://kixlab.github.io/website-files/2022/icls2022-ReviewAid-paper.pdf) led by Eunyoung is accepted to [ICLS 2022](https://2022.isls.org/).',
  }),

  chiworkshop2022: new Post({
    title: 'A paper accepted to CHI 2022 Workshop',
    date: new Date('2022-03-21'),
    categories: ['publication'],
    summary:
      'Our paper "Techniques for Semantic Search and Comparison for Robotic Surgery Videos" led by Jeongyeon is accepted to CHI 2022 Workshop on [Integration of Human Factors in Surgery: Interdisciplinary Collaboration in Design, Development, and Evaluation of Surgical Technologies](https://turtle2007.github.io/CHI22-ihfs/). The camera-ready version will be updated soon.',
  }),

  chiworkshop2022add: new Post({
    title: 'A paper accepted to CHI 2022 Workshop',
    date: new Date('2022-03-21'),
    categories: ['publication'],
    summary:
      'Our paper ["Improving Video Interfaces by Presenting Informational Units of Videos"](https://kixlab.github.io/website-files/2022/chi2022-workshop-StarLab-paper.pdf) led by Saelyne is accepted to CHI 2022 Workshop on [Computational Approaches for Understanding, Generating, and Adapting User Interfaces](https://sites.google.com/nd.edu/computational-uichi22).',
  }),

  las2022: new Post({
    title: 'A paper accepted to Learning at Scale 2022',
    date: new Date('2022-03-23'),
    categories: ['publication'],
    summary:
      'Our paper "RLens: A Computer-aided Visualization System for Supporting Reflection on Language Learning under Distributed Tutorship" led by Meng is accepted to [Learning at Scale 2022](https://learningatscale.acm.org/las2022/).',
  }),

  chiaward2022: new Post({
    title: 'One Best Paper Award and one Honorable Mention Award for CHI 2022',
    date: new Date('2022-04-06'),
    categories: ['award'],
    summary:
      'Our paper ["Mobile-Friendly Content Design for MOOCs: Challenges, Requirements, and Design Opportunities"](https://kixlab.github.io/website-files/2022/chi2022-mMOOC-paper.pdf) led by Jeongyeon wins a Best Paper Award for [CHI 2022](https://chi2022.acm.org/). Also, our paper ["Stylette: Styling the Web with Natural Language"](https://kixlab.github.io/website-files/2022/chi2022-stylette-paper.pdf) led by Taesoo wins an Honorable Mention Award for [CHI2022](https://chi2022.acm.org/).',
  }),

  kaistilp2022: new Post({
    title: 'KIXLAB in the second issue of the KAIST ILP',
    date: new Date('2022-04-06'),
    categories: ['news'],
    summary:
      "Hyungyu and Juho's article on the [second issue of KAIST ILP](https://ilp.kaist.ac.kr/ebook/220325/index.html) is published. The article is about a successful AI application design process based on our cumulative teaching / research / industry collaboration experiences, and introduces three projects: RubySlippers, SolutionChat, and Stylette.",
  }),

  acl2022: new Post({
    title: 'A paper accepted to ACL 2022 Workshop',
    date: new Date('2022-04-20'),
    categories: ['publication'],
    summary:
      'Our paper ["Interactive Children’s Story Rewriting Through Parent-Children Interaction"](https://kixlab.github.io/website-files/2022/acl2022-workshop-childrenstory-paper.pdf) led by Yoonjoo is accepted to ACL 2022 Workshop on [Intelligent and Interactive Writing Assistants](https://in2writing.glitch.me/).',
  }),

  internsummer2022: new Post({
    title: 'Summer 2022 Undergraduate Research Internship',
    date: new Date('2022-04-24'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2022-summer-internship-call.html).",
    endsAt: new Date('2022-04-30'),
  }),

  cscw2022: new Post({
    title: 'A paper accepted to CSCW 2022',
    date: new Date('2022-05-22'),
    categories: ['publication'],
    summary:
      'Our paper ["When Does it Become Harassment?: An Investigation of Online Criticism and Calling Out in Twitter"](https://kixlab.github.io/website-files/2022/cscw2022-callout-paper.pdf) led by Haesoo is accepted to [CSCW 2022](https://cscw.acm.org/2022/).',
  }),

  lasworkshop2022: new Post({
    title: 'Two papers accepted to L@S 2022 Workshop',
    date: new Date('2022-05-25'),
    categories: ['publication'],
    summary:
      'Our paper ["Learnersourcing Modular and Dynamic Multiple Choice Questions"](https://kixlab.github.io/website-files/2022/l@s2022-workshop-Kuiz-paper.pdf) led by Haesoo and Inhwa, and ["Learnersourcing Subgoal Hierarchies of Code Examples"](https://kixlab.github.io/website-files/2022/l@s2022-workshop-Subgoal-paper.pdf) led by Hyoungwook is accepted to L@S 2022 Workshop on [Learnersourcing: Student-generated Content @ Scale](https://sites.google.com/andrew.cmu.edu/learnersourcing/home).',
  }),

  internfall2022: new Post({
    title: 'Fall 2022 Undergraduate Research Internship',
    date: new Date('2022-09-01'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this fall. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2022-fall-internship-call.html).",
    endsAt: new Date('2022-09-07'),
  }),

  internwinter2022: new Post({
    title: 'Winter 2023 Undergraduate Research Internship',
    date: new Date('2022-11-08'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2023-winter-internship-call.html).",
    endsAt: new Date('2022-11-14'),
  }),

  msdefense2022: new Post({
    title: 'Haesoo successfully defended her M.S. Thesis.',
    date: new Date('2022-12-12'),
    categories: ['news'],
    summary:
      'Haesoo Kim successfully defended her Master\'s thesis titled "An Observation of Online Call-out Culture: Motivations, Repercussions and Solutions to Online Harassment". Congratulations!',
  }),

  saelynefellowship2022: new Post({
    title: 'Saelyne received a NAVER PhD Fellowship Award',
    date: new Date('2022-12-13'),
    categories: ['award'],
    summary:
      'Saelyne received a NAVER PhD Fellowship Award. She is one of the six Ph.D. students awarded for outstanding research in the department.',
  }),

  iui2023: new Post({
    title: 'A paper accepted to IUI 2023',
    date: new Date('2023-01-04'),
    categories: ['news'],
    summary:
      'Our paper ["Large-scale Text-to-Image Generation Models for Visual Artists\'Creative Works"](https://kixlab.github.io/website-files/2023/iui2023-LTGMs-paper.pdf) led by Hyung-Kwon is accepted to [IUI 2023](https://iui.acm.org/2023/).',
  }),

  neuripskeynote2023: new Post({
    title: "Juho's NeurIPS keynote",
    date: new Date('2023-01-14'),
    categories: ['news'],
    summary:
      'Prof. Juho Kim, KIXLAB\'s director, gave a keynote talk titled "Interaction-Centric AI" at [NeurIPS 2022](https://nips.cc/Conferences/2022).  The video of the keynote is available at [https://slideslive.com/38996064/](https://slideslive.com/38996064/).',
  }),

  chi2023acceptance: new Post({
    title: 'Six papers accepted to CHI 2023',
    date: new Date('2023-01-17'),
    categories: ['publication'],
    summary: 'Six papers from KIXLAB have been accepted to [CHI 2023](https://chi2023.acm.org/).',
    contentMdFilePath: '2023-01-17-chi2023.md',
  }),

  chiworkshop2023: new Post({
    title: 'Four papers accepted to CHI 2023 Workshop',
    date: new Date('2023-03-15'),
    categories: ['publication'],
    summary: 'Four papers from KIXLAB have been accepted to two CHI 2023 Workshops.',
    contentMdFilePath: '2023-03-15-chiworkshop.md',
  }),

  chi2023: new Post({
    title: 'KIXLAB at CHI 2023',
    date: new Date('2023-04-21'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present six full papers and four workshop papers at CHI 2023. Six KIXLAB members will be attending CHI.',
    contentMdFilePath: '2023-04-21-chi2023.md',
  }),

  internsummer2023: new Post({
    title: 'Summer 2023 Undergraduate Research Internship',
    date: new Date('2023-04-24'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2023-summer-internship-call.html).",
    endsAt: new Date('2023-04-30'),
  }),

  cscwsig2023: new Post({
    title: 'CSCW 2023 SIG on "Designing for AI-Powered Social Computing Systems',
    date: new Date('2023-06-16'),
    categories: ['publication'],
    summary:
      'Our proposal for a CSCW 2023 SIG on ["Designing for AI-Powered Social Computing Systems"](https://kixlab.github.io/website-files/2023/cscw23-sig-CSCW2023SIG-workshop.pdf), led by Gionnieve, Hyunwoo, and Yoonseo, has been accepted.',
  }),

  vis2023: new Post({
    title: 'A paper accepted to IEEE VIS 2023',
    date: new Date('2023-07-16'),
    categories: ['publication'],
    summary:
      'Our paper ["EmphasisChecker: A Tool for Guiding Chart and Caption Emphasis"](https://dhkim16.github.io/emphasis-checker/) led by Dae Hyun is accepted to [IEEE VIS 2023](https://ieeevis.org/year/2023/welcome).',
  }),

  uist2023: new Post({
    title: 'A paper accepted to UIST 2023',
    date: new Date('2023-08-06'),
    categories: ['publication'],
    summary:
      'Our paper ["Cells, Generators, and Lenses: Design Framework for Object-Oriented Interaction with Large Language Models"](https://kixlab.github.io/website-files/2023/uist2023-llmobjects-paper.pdf) led by Tae Soo is accepted to [UIST 2023](https://uist.acm.org/2023/).',
  }),

  cscw2024: new Post({
    title: 'Two papers accepted to CSCW 2024',
    date: new Date('2023-09-26'),
    categories: ['publication'],
    summary:
      'Two KIXLAB papers "CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples" led by Hyoungwook and "Re:SPect: Enabling Active and Scalable Responses to Networked Online Harassment" led by Haesoo and Juhoon have been accepted at [CSCW 2024](https://cscw.acm.org/2024/).',
  }),

  ms2023: new Post({
    title: 'KIXLAB has positions for MS students',
    date: new Date('2023-10-13'),
    categories: ['position'],
    summary:
      'KIXLAB has one or two open positions for MS students in SoC KAIST for Spring 2024. If interested, please follow the instructions in the [MS Student Selection Process](https://juhokim.com/students.html#ms_process) Application deadline: Oct. 20th, 2023.',
    endsAt: new Date('2023-10-20'),
  }),

  internwinter2023: new Post({
    title: 'Winter 2024 Undergraduate Research Internship',
    date: new Date('2023-10-22'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2024-winter-internship-call.html).",
    endsAt: new Date('2023-10-28'),
  }),

  uistsicaward2023: new Post({
    title: 'Jeongeon and DaEun received an Honorable Mention in the UIST 2023 Student Innovation Contest (SIC)',
    date: new Date('2023-11-02'),
    categories: ['award'],
    summary:
      'Jeongeon and DaEun received an Honorable Mention in the UIST 2023 Student Innovation Contest (SIC) for their project, ["AudiLens: Configurable LLM-Generated Audiences for Public Speech Practice"](https://dl.acm.org/doi/10.1145/3586182.3625114). Congratulations!',
  }),

  iui2024: new Post({
    title: 'Four papers accepted to IUI 2024',
    date: new Date('2023-12-18'),
    categories: ['publication'],
    summary: 'Four papers from KIXLAB have been accepted to [IUI 2024](https://iui.acm.org/2024/).',
    contentMdFilePath: '2023-12-18-iui2024.md',
  }),

  chi2024acceptance: new Post({
    title: 'Eight papers conditionally accepted to CHI 2024',
    date: new Date('2024-01-19'),
    categories: ['publication'],
    summary: 'Eight papers from KIXLAB have been conditionally accepted to [CHI 2024](https://chi2024.acm.org/).',
    contentMdFilePath: '2024-01-19-chi2024.md',
  }),

  hcikorea2024: new Post({
    title: 'Yoonjoo received Outstanding Presentation Award at HCI Korea 2024',
    date: new Date('2024-01-25'),
    categories: ['award'],
    summary:
      'Yoonjoo Lee received the Outstanding Presentation Award at HCI Korea 2024 for her talk on [DAPIE: Interactive Step-by-Step Explanatory Dialogues to Answer Children’s Why and How Questions](https://dapie.kixlab.org/). Congratulations!',
    contentMdFilePath: '2024-hcikorea-yoonjoo.md',
  }),

  cscw2024add: new Post({
    title: 'One more paper accepted to CSCW 2024',
    date: new Date('2024-04-01'),
    categories: ['publication'],
    summary:
      'Our paper "EduLive: Re-Creating Cues for Instructor-Learner Interaction in Educational Live Streams with Learners’ Transcript-Based Annotations" has been accepted at [CSCW 2024](https://cscw.acm.org/2024/). Congratulations!',
  }),

  facct2024: new Post({
    title: 'A paper accepted to FAccT 2024',
    date: new Date('2024-04-08'),
    categories: ['publication'],
    summary:
      'Our paper "One vs. Many: Comprehending Accurate Information from Multiple Erroneous and Inconsistent AI Generations" led by Yoonjoo has been accepted to [FAccT 2024](https://facctconference.org/2024/). Congratulations!',
  }),

  internsummer2024: new Post({
    title: 'Summer 2024 Undergraduate Research Internship',
    date: new Date('2024-04-18'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this summer. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2024-summer-internship-call.html).",
    endsAt: new Date('2024-04-29'),
  }),

  chi2024: new Post({
    title: 'KIXLAB at CHI 2024',
    date: new Date('2024-05-11'),
    categories: ['news'],
    summary:
      'Members of KIXLAB and collaborators will present 9 full papers and 6 workshop papers at CHI 2024, with 12 KIXLAB members attending in person.',
    contentMdFilePath: '2024-05-11-chi2024.md',
  }),

  dis2024: new Post({
    title: 'Three papers accepted to DIS 2024',
    date: new Date('2024-06-01'),
    categories: ['publication'],
    summary: 'Three papers from KIXLAB and collaborators have been accepted to [DIS 2024](https://dis.acm.org/2024/).',
    contentMdFilePath: '2024-06-01-dis2024.md',
  }),

  interspeech2024: new Post({
    title: 'A paper accepted to Interspeech 2024',
    date: new Date('2024-06-04'),
    categories: ['publication'],
    summary:
      'A paper from KIXLAB and collaborators have been accepted to [Interspeech 2024](https://interspeech2024.org/).',
  }),
} as const

export const POSTS = Object.values(POST)
export default Post
