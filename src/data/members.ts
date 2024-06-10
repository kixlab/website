export const PositionType = [
  'Associate Professor',
  'Postdoc Researcher',
  'Ph.D. Student',
  'M.S. Student',
  'Visiting Researcher',
  'Undergrad Intern',
  'Staff',
  'Alumni',
] as const

export type PositionType = (typeof PositionType)[number]

export interface Member {
  firstName: string
  lastName: string
  email?: string
  position: PositionType
  img?: string
  site?: string
  thesis?:string
  affiliation?: string
  alumniCurrentPosition?: string
  period?: string
}

export const MEMBER = {
  juhokim: {
    firstName: 'Juho',
    lastName: 'Kim',
    email: 'juhokim@kaist.ac.kr',
    position: 'Associate Professor',
    img: 'juhokim.jpg',
    site: 'http://juhokim.com/'
  },
  daehyunkim: {
    firstName: 'Dae Hyun',
    lastName: 'Kim',
    email: 'dhkim16@cs.stanford.edu',
    position: 'Postdoc Researcher',
    img: 'daehyun.jpg',
    site: 'https://dhkim16.github.io/',
  },
  daeunchoi: {
    firstName: 'DaEun',
    lastName: 'Choi',
    email: 'daeun.choi@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'daeun.jpg',
    site: 'https://daeunchoi.com/', 
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2024-daeun.pdf'
  },
  yoonseochoi: {
    firstName: 'Yoonseo',
    lastName: 'Choi',
    email: 'yoon0u0@gmail.com',
    position: 'Ph.D. Student',
    img: 'yoonseo.jpeg',
    site: 'https://www.yoonseochoi.com/',
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2021-yoonseo.pdf'
  },
  hyunwookim: {
    firstName: 'Hyunwoo',
    lastName: 'Kim',
    email: 'khw0726@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'hyunwoo.png',
    site: 'https://hyunwoo.me/', 
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2019-hyunwoo.pdf'
  },
  seoyoungkim: {
    firstName: 'Seyoung',
    lastName: 'Kim',
    email: 'youthskim@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'seoyoung.jpg',
    site: 'https://sites.google.com/view/seoyoung/',
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2018-seoyoung.pdf'
  },
  taesookim: {
    firstName: 'Tae Soo',
    lastName: 'Kim',
    email: 'kimts0830@gmail.com',
    position: 'Ph.D. Student',
    img: 'taesoo.jpg',
    site: 'https://taesookim.com/',
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2022-taesoo.pdf'
  },
  yoonsukim: {
    firstName: 'Yoonsu',
    lastName: 'Kim',
    email: 'yoonsu16@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'yoonsu.jpg',
    site: 'https://yoonsu0816.github.io/', 
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2024-yoonsu.pdf'
  },
  eunyoungko: {
    firstName: 'Eunyoung',
    lastName: 'Ko',
    email: 'eunyoung4444@gmail.com',
    position: 'Ph.D. Student',
    img: 'eunyoung.jpg',
    site: 'https://eunyoungko.com/'
  },
  sungchullee: {
    firstName: 'Sung-Chul',
    lastName: 'Lee',
    email: 'leesungchul@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'sclee.png',
  },
  yoonjoolee: {
    firstName: 'Yoonjoo',
    lastName: 'Lee',
    email: 'yjl7436@gmail.com',
    position: 'Ph.D. Student',
    img: 'yoonjoo.jpg',
    site: 'https://yoonjoolee.com/'
  },
  hyungyushin: {
    firstName: 'Hyungyu',
    lastName: 'Shin',
    email: 'hyungyu.sh@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'hyungyu.jpg',
    site: 'https://hyungyu.com/',
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2019-hyungyu.pdf'
  },
  kihoonson: {
    firstName: 'Kihoon',
    lastName: 'Son',
    email: 'kihoon.son@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'kihoon.jpg',
    site: 'https://kihoonson.com/'
  },
  saelyneyang: {
    firstName: 'Saelyne',
    lastName: 'Yang',
    email: 'saelyne@kaist.ac.kr',
    position: 'Ph.D. Student',
    img: 'saelyne.jpg',
    site: 'https://www.saelyne.com/',
    thesis: 'https://kixlab.github.io/website-files/theses/thesis-ms-2021-saelyne.pdf'
  },
  seulgichoi: {
    firstName: 'Seulgi',
    lastName: 'Choi',
    email: 'igules8925@gmail.com',
    position: 'M.S. Student',
    img: 'seulgi.jpg',
    site: 'https://csg17.github.io/cv/index.html'
  },
  jihyeonghong: {
    firstName: 'Jihyeong',
    lastName: 'Hong',
    email: 'z.hyeong@kaist.ac.kr',
    position: 'M.S. Student',
    img: 'jihyeong.jpg',
    site: 'https://harmonious-prune-381.notion.site/Jihyeong-Hong-44f4f7033cbb480e944eeaf8fb22b30a'
  },
  hyoungwookjin: {
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    position: 'M.S. Student',
    img: 'hyoungwook.jpg',
    site: 'https://jhw123.github.io/'
  },
  junhomyung: {
    firstName: 'Junho',
    lastName: 'Myung',
    email: 'junho00211@kaist.ac.kr',
    position: 'M.S. Student',
    img: 'junhomyung.jpg',
  },
  yeonsupark: {
    firstName: 'Yeon Su',
    lastName: 'Park',
    email: 'yeonsupark@kaist.ac.kr',
    position: 'M.S. Student',
    img: 'yeonsupark.jpg',
  },
  alexsuryapranata: {
    firstName: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    position: 'M.S. Student',
    img: 'alex.webp',
  },
  bekzattilekbay: {
    firstName: 'Bekzat',
    lastName: 'Tilekbay',
    email: 'tlekbay.b@gmail.com',
    position: 'M.S. Student',
    img: 'bekzattilekbay.jpg',
  },
  jiangnanxu: {
    firstName: 'Jiangnan',
    lastName: 'Xu',
    email: 'xnangua@gmail.com',
    position: 'Visiting Researcher',
    img: 'jiangnan.jpg',
    site: 'https://www.jiangnanxu.net/',
    affiliation: 'IRT'
  },
  jaesangyu: {
    firstName: 'Jaesang',
    lastName: 'Yu',
    email: 'jaesangyu22@gmail.com',
    position: 'Visiting Researcher',
    img: 'jaesang.jpg',
  },
  daeheonjeong: {
    firstName: 'Daeheon',
    lastName: 'Jeong',
    email: 'neohgeek@gmail.com',
    position: 'Visiting Researcher',
    img: 'daeheon.jpg',
    affiliation: 'Sogang'
  },
  haeseulcha: {
    firstName: 'Haeseul',
    lastName: 'Cha',
    email: 'jjchs1@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'haeseul.jpg',
    affiliation: 'KAIST'
  },
  dongyunjung: {
    firstName: 'Dong Yun',
    lastName: 'Jung',
    email: 'djung2023@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'dongyun.jpeg',
    affiliation: 'KAIST'
  },
  chanyoungkim: {
    firstName: 'Chanyoung',
    lastName: 'Kim',
    email: 'itnoj15@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'chanyoung.jpg',
    affiliation: 'KAIST'
  },
  jinhyeonkwon: {
    firstName: 'Jinhyeon',
    lastName: 'Kwon',
    email: 'athexplorer@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'jhkwon.jpg',
    site: 'https://jinhyeonkwon.github.io/',
    affiliation: 'KAIST'
  },
  yokyunglee: {
    firstName: 'Yokyung',
    lastName: 'Lee',
    email: 'athexplorer@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'yokyung.png',
    affiliation: 'KAIST'
  },
  yoonahpark: {
    firstName: 'Yoonah',
    lastName: 'Park',
    email: 'wisdomsword21@snu.ac.kr',
    position: 'Undergrad Intern',
    img: 'yoonah.jpg',
    affiliation: 'SNU'
  },
  shahnoza: {
    firstName: 'Shahnoza',
    lastName: 'Yadgarova',
    email: 'yadgarova@kaist.ac.kr',
    position: 'Undergrad Intern',
    img: 'noza.jpeg',
    affiliation: 'KAIST'
  },
  taehyunyang: {
    firstName: 'Taehyun',
    lastName: 'Yang',
    email: '0705danny@snu.ac.kr',
    position: 'Undergrad Intern',
    img: 'taehyun.png',
    affiliation: 'SNU'
  },
  oaksilkim: {
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    position: 'Staff',
    img: 'oaksil.jpg'
  },
  juhoonlee: {
    firstName: 'Juhoon',
    lastName: 'Lee',
    position: 'Alumni',
    affiliation: 'M.S. Student',
    alumniCurrentPosition: 'Ph.D. Student at CSTL KAIST',
    period: "Spring 2022 - Winter 2024",
    thesis: "https://kixlab.github.io/website-files/theses/thesis-ms-2024-juhoon.pdf"
  },
  jeongeonpark: {
    firstName: 'Jeongeon',
    lastName: 'Park',
    position: 'Alumni',
    alumniCurrentPosition: 'Researcher at DGIST',
    affiliation: 'M.S. Student', 
    period: "Fall 2019 - Summer 2023",
    site: "https://jeongeonpark.com/",
    thesis: "https://kixlab.github.io/website-files/theses/thesis-ms-2023-jeongeon.pdf"
  },
  haesookim: {
    firstName: 'Haesoo',
    lastName: 'Kim',
    position: 'Alumni',
    period: "Summer 2019 - Winter 2023", 
    affiliation: 'M.S. Student',
    site: "https://haesookim.info/",
    thesis: "https://kixlab.github.io/website-files/theses/thesis-ms-2023-haesoo.pdf",
    alumniCurrentPosition: "Ph.D. Student at Cornell University"

  },
  Hyungkwonko: {
    firstName: 'Hyung-Kwon',
    lastName: 'Ko',
    position: 'Alumni',
    period: "Summer 2022 - Fall 2022",
    affiliation: 'Visiting Researcher',
  },

  eunjeongkang: {
    firstName: 'Eun Jeong',
    lastName: 'Kang',
    position: 'Alumni',
    alumniCurrentPosition: 'Ph.D. Student at Cornell University',
    affiliation: 'M.S. Student',
    period: "Summer 2020 - Winter 2022"
  },
  jeongyeonkim: {
    firstName: 'Jeongyeon',
    lastName: 'Kim',
    position: 'Alumni',
    alumniCurrentPosition: ' Ph.D. Student at Stanford University', 
    affiliation: 'M.S. Student',
    period: "Summer 2019 - Winter 2022",
    thesis: "https://kixlab.github.io/website-files/theses/thesis-ms-2022-jeongyeon.pdf"

  },
  blah7: {
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    position: 'Alumni',
    img: 'oaksil.jpg',
    alumniCurrentPosition: 'something',
    affiliation: 'Postdoct Researcher',

  },
  blah8: {
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    position: 'Alumni',
    img: 'oaksil.jpg',
    alumniCurrentPosition: 'something',
    affiliation: 'Postdoct Researcher',
  },
  blah9: {
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    position: 'Alumni',
    img: 'oaksil.jpg',
    alumniCurrentPosition: 'something',
    affiliation: 'Postdoct Researcher',
  },
} as const satisfies Record<string, Member>

export const MEMBERS_KEY = Object.keys(MEMBER)
export const MEMBERS = MEMBER as Record<string, Member>
export default Member