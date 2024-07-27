export const KixlabPositionTypes = [
  'Faculty',
  'Postdoc Researcher',
  'Ph.D. Student',
  'M.S. Student',
  'Visiting Researcher',
  'Undergrad Intern',
  'Staff',
] as const
export type KixlabPositionTypes = (typeof KixlabPositionTypes)[number]

export const SeasonTypes = ['Winter', 'Spring', 'Summer', 'Fall'] as const
export type SeasonType = (typeof SeasonTypes)[number]

export interface IMember {
  firstName: string
  lastName: string
  email?: string
  kixlabPosition: KixlabPositionTypes
  img?: string
  site?: string
  affiliation?: string
  // TODO: combine startYear and startSeason into a single Date field: startDate
  startYear?: number
  startSeason?: SeasonType
}

export const MEMBERS = {
  juhokim: {
    firstName: 'Juho',
    lastName: 'Kim',
    email: 'juhokim@kaist.ac.kr',
    kixlabPosition: 'Faculty',
    img: 'juhokim.jpg',
    site: 'http://juhokim.com/',
    startYear: 2016,
    startSeason: 'Summer',
  },
  daehyunkim: {
    firstName: 'Dae Hyun',
    lastName: 'Kim',
    email: 'dhkim16@cs.stanford.edu',
    kixlabPosition: 'Postdoc Researcher',
    img: 'daehyun.jpg',
    site: 'https://dhkim16.github.io/',
  },
  daeunchoi: {
    firstName: 'DaEun',
    lastName: 'Choi',
    email: 'daeun.choi@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'daeun.jpg',
    site: 'https://daeunchoi.com/',
  },
  yoonseochoi: {
    firstName: 'Yoonseo',
    lastName: 'Choi',
    email: 'yoon0u0@gmail.com',
    kixlabPosition: 'Ph.D. Student',
    img: 'yoonseo.jpeg',
    site: 'https://www.yoonseochoi.com/',
  },
  hyunwookim: {
    firstName: 'Hyunwoo',
    lastName: 'Kim',
    email: 'khw0726@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'hyunwoo.png',
    site: 'https://hyunwoo.me/',
  },
  seoyoungkim: {
    firstName: 'Seoyoung',
    lastName: 'Kim',
    email: 'youthskim@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'seoyoung.jpg',
    site: 'https://sites.google.com/view/seoyoung/',
  },
  taesookim: {
    firstName: 'Tae Soo',
    lastName: 'Kim',
    email: 'kimts0830@gmail.com',
    kixlabPosition: 'Ph.D. Student',
    img: 'taesoo.jpg',
    site: 'https://taesookim.com/',
  },
  yoonsukim: {
    firstName: 'Yoonsu',
    lastName: 'Kim',
    email: 'yoonsu16@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'yoonsu.jpg',
    site: 'https://yoonsu0816.github.io/',
  },
  eunyoungko: {
    firstName: 'Eunyoung',
    lastName: 'Ko',
    email: 'eunyoung4444@gmail.com',
    kixlabPosition: 'Ph.D. Student',
    img: 'eunyoung.jpg',
    site: 'https://eunyoungko.com/',
  },
  yoonjoolee: {
    firstName: 'Yoonjoo',
    lastName: 'Lee',
    email: 'yjl7436@gmail.com',
    kixlabPosition: 'Ph.D. Student',
    img: 'yoonjoo.jpg',
    site: 'https://yoonjoolee.com/',
  },
  hyungyushin: {
    firstName: 'Hyungyu',
    lastName: 'Shin',
    email: 'hyungyu.sh@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'hyungyu.jpg',
    site: 'https://hyungyu.com/',
  },
  kihoonson: {
    firstName: 'Kihoon',
    lastName: 'Son',
    email: 'kihoon.son@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'kihoon.jpg',
    site: 'https://kihoonson.com/',
  },
  saelyneyang: {
    firstName: 'Saelyne',
    lastName: 'Yang',
    email: 'saelyne@kaist.ac.kr',
    kixlabPosition: 'Ph.D. Student',
    img: 'saelyne.jpg',
    site: 'https://www.saelyne.com/',
  },
  seulgichoi: {
    firstName: 'Seulgi',
    lastName: 'Choi',
    email: 'igules8925@gmail.com',
    kixlabPosition: 'M.S. Student',
    img: 'seulgi.jpg',
    site: 'https://csg17.github.io/cv/index.html',
  },
  jihyeonghong: {
    firstName: 'Jihyeong',
    lastName: 'Hong',
    email: 'z.hyeong@kaist.ac.kr',
    kixlabPosition: 'M.S. Student',
    img: 'jihyeong.jpg',
    site: 'https://harmonious-prune-381.notion.site/Jihyeong-Hong-44f4f7033cbb480e944eeaf8fb22b30a',
  },
  hyoungwookjin: {
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    kixlabPosition: 'M.S. Student',
    img: 'hyoungwook.jpg',
    site: 'https://jhw123.github.io/',
  },
  junhomyung: {
    firstName: 'Junho',
    lastName: 'Myung',
    email: 'junho00211@kaist.ac.kr',
    kixlabPosition: 'M.S. Student',
    img: 'junhomyung.jpg',
  },
  yeonsupark: {
    firstName: 'Yeon Su',
    lastName: 'Park',
    email: 'yeonsupark@kaist.ac.kr',
    kixlabPosition: 'M.S. Student',
    img: 'yeonsupark.jpg',
  },
  alexsuryapranata: {
    firstName: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    kixlabPosition: 'M.S. Student',
    img: 'alex.webp',
  },
  bekzattilekbay: {
    firstName: 'Bekzat',
    lastName: 'Tilekbay',
    email: 'tlekbay.b@gmail.com',
    kixlabPosition: 'M.S. Student',
    img: 'bekzattilekbay.jpg',
  },
  jiangnanxu: {
    firstName: 'Jiangnan',
    lastName: 'Xu',
    email: 'xnangua@gmail.com',
    kixlabPosition: 'Visiting Researcher',
    img: 'jiangnan.jpg',
    site: 'https://www.jiangnanxu.net/',
    affiliation: 'RIT',
  },
  jaesangyu: {
    firstName: 'Jaesang',
    lastName: 'Yu',
    email: 'jaesangyu22@gmail.com',
    kixlabPosition: 'Visiting Researcher',
    img: 'jaesang.jpg',
  },
  daeheonjeong: {
    firstName: 'Daeheon',
    lastName: 'Jeong',
    email: 'neohgeek@gmail.com',
    kixlabPosition: 'Visiting Researcher',
    img: 'daeheon.jpg',
    affiliation: 'Sogang',
  },
  haeseulcha: {
    firstName: 'Haeseul',
    lastName: 'Cha',
    email: 'jjchs1@kaist.ac.kr',
    kixlabPosition: 'Undergrad Intern',
    img: 'haeseul.jpg',
    affiliation: 'KAIST',
  },
  dongyunjung: {
    firstName: 'Dong Yun',
    lastName: 'Jung',
    email: 'djung2023@kaist.ac.kr',
    kixlabPosition: 'Undergrad Intern',
    img: 'dongyun.jpeg',
    affiliation: 'KAIST',
  },
  chanyoungkim: {
    firstName: 'Chanyoung',
    lastName: 'Kim',
    email: 'itnoj15@kaist.ac.kr',
    kixlabPosition: 'Undergrad Intern',
    img: 'chanyoung.jpg',
    affiliation: 'KAIST',
  },
  shahnoza: {
    firstName: 'Shahnoza',
    lastName: 'Yadgarova',
    email: 'yadgarova@kaist.ac.kr',
    kixlabPosition: 'Undergrad Intern',
    img: 'noza.jpeg',
    affiliation: 'KAIST',
  },
  oaksilkim: {
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    kixlabPosition: 'Staff',
    img: 'oaksil.jpg',
  },
} as const satisfies Record<string, IMember>

export const MEMBERS_VALUES = Object.values(MEMBERS)
// export const MEMBERS = MEMBER as Record<string, IMember>
