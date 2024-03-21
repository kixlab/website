export const CareerTypes = [
  'Associate Professor',
  'Postdoc Researcher',
  'Ph.D. Student',
  'M.S. Student',
  'Visiting Researcher',
  'Undergraduate Intern',
  'Administrative Staff',
  'Alumni',
] as const

export type CareerType = (typeof CareerTypes)[number]

export interface Props {
  firstName: string
  lastName: string
  email: string
  career: CareerType
  img: string
  site?: string
}

interface Member extends Props {}
class Member {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }

  get fullName() {
<<<<<<< HEAD
    return `${this.firstName} ${this.lastName}`
=======
    return `${this.name} ${this.lastName}`
>>>>>>> renewal
  }
}

export const MEMBER = {
  juhokim: new Member({
    firstName: 'Juho',
    lastName: 'Kim',
    email: 'juhokim@kaist.ac.kr',
    career: 'Associate Professor',
    img: 'juhokim.jpg',
    site: 'http://juhokim.com/',
  }),
  daehyunkim: new Member({
    firstName: 'Daehyun',
    lastName: 'Kim',
    email: 'dhkim16@cs.stanford.edu',
    career: 'Postdoc Researcher',
    img: 'daehyun.jpg',
    site: 'https://dhkim16.github.io',
  }),
  daeunchoi: new Member({
    firstName: 'DaEun',
    lastName: 'Choi',
    email: 'daeun.choi@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'daeun.jpg',
    site: 'https://daeunchoi.com',
  }),
  yoonseochoi: new Member({
    firstName: 'Yoonseo',
    lastName: 'Choi',
    email: 'yoon0u0@gmail.com',
    career: 'Ph.D. Student',
    img: 'yoonseo.jpeg',
    site: 'https://www.yoonseochoi.com',
  }),
  hyunwookim: new Member({
    firstName: 'Hyunwoo',
    lastName: 'Kim',
    email: 'khw0726@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'hyunwoo.png',
    site: 'https://hyunwoo.me',
  }),
  seoyoungkim: new Member({
    firstName: 'Seoyoung',
    lastName: 'Kim',
    email: 'youthskim@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'seoyoung.jpg',
    site: 'https://sites.google.com/view/seoyoung/',
  }),
  taesookim: new Member({
    firstName: 'Taesoo',
    lastName: 'Kim',
    email: 'kimts0830@gmail.com',
    career: 'Ph.D. Student',
    img: 'taesoo.jpg',
    site: 'https://taesookim.com',
  }),
  yoonsookim: new Member({
    firstName: 'Yoonsu',
    lastName: 'Kim',
    email: 'yoonsu16@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'yoonsu.jpg',
    site: 'https://yoonsu0816.github.io',
  }),
  eunyoungko: new Member({
    firstName: 'Eunyoung',
    lastName: 'Ko',
    email: 'eunyoung4444@gmail.com',
    career: 'Ph.D. Student',
    img: 'eunyoung.jpg',
    site: 'https://eunyoungko.com',
  }),
  sungchullee: new Member({
    firstName: 'Sungchul',
    lastName: 'Lee',
    email: 'leesungchul@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'sclee.png',
  }),
  yoonjoolee: new Member({
    firstName: 'Yoonjoo',
    lastName: 'Lee',
    email: 'yjl7436@gmail.com',
    career: 'Ph.D. Student',
    img: 'yoonjoo.jpg',
    site: 'https://yoonjoolee.com',
  }),
  hyungyushin: new Member({
    firstName: 'Hyungyu',
    lastName: 'Shin',
    email: 'hyungyu.sh@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'hyungyu.jpg',
    site: 'https://hyungyu.com',
  }),
  kihoonson: new Member({
    firstName: 'Kihoon',
    lastName: 'Son',
    email: 'kihoon.son@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'kihoon.jpg',
    site: 'https://kihoonson.com',
  }),
  saelyneyang: new Member({
    firstName: 'Saelyne',
    lastName: 'Yang',
    email: 'saelyne@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'saelyne.jpg',
    site: 'https://www.saelyne.com',
  }),
  seulgi: new Member({
    firstName: 'Seulgi',
    lastName: 'Choi',
    email: 'igules8925@gmail.com',
    career: 'M.S. Student',
    img: 'seulgi.jpg',
    site: 'https://csg17.github.io/cv/index.html',
  }),
  jihyeonghong: new Member({
    firstName: 'Jihyeong',
    lastName: 'Hong',
    email: 'z.hyeong@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'jihyeong.jpg',
    site: 'https://harmonious-prune-381.notion.site/Jihyeong-Hong-44f4f7033cbb480e944eeaf8fb22b30a',
  }),
  hyoungwookjin: new Member({
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'hyoungwook.jpg',
    site: 'https://jhw123.github.io',
  }),
<<<<<<< HEAD
  juhoonlee: new Member({
    firstName: 'Juhoon',
    lastName: 'Lee',
    email: 'juhoonlee@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'juhoon.jpg',
  }),
  junhomyung: new Member({
    firstName: 'Junho',
    lastName: 'Myung',
    email: 'junho00211@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'junhomyung.jpg',
  }),
  yeonsupark: new Member({
    firstName: 'Yeonsu',
    lastName: 'Park',
    email: 'yeonsupark@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'yeonsupark.jpg',
  }),
  alexsuryapranata: new Member({
    firstName: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'alex.webp',
  }),
  bekzattilekbay: new Member({
    firstName: 'Bekzat',
    lastName: 'Tilekbay',
    email: 'tlekbay.b@gmail.com',
    career: 'M.S. Student',
    img: 'bekzat_tilekbay.jpg',
  }),
  heachankim: new Member({
    firstName: 'Heachan',
    lastName: 'Kim',
    email: 'rlagocks1125@gmail.com',
    career: 'Visiting Researcher',
    img: 'haechan.jpg',
  }),
  jiangnanxu: new Member({
    firstName: 'Jiangnan',
    lastName: 'Xu',
    email: 'xnangua@gmail.com',
    career: 'Visiting Researcher',
    img: 'jiangnan.jpg',
    site: 'https://www.jiangnanxu.net',
  }),
  jaesangyu: new Member({
    firstName: 'Jaesang',
    lastName: 'Yu',
    email: 'jaesangyu22@gmail.com',
    career: 'Visiting Researcher',
    img: 'jaesang.jpg',
  }),
  haeseulcha: new Member({
    firstName: 'Haeseul',
    lastName: 'Cha',
    email: 'jjchs1@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'haeseul.jpg',
  }),
  yumincho: new Member({
    firstName: 'Yumin',
    lastName: 'Cho',
    email: 'dbals1184@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'yumincho.png',
  }),
  daeheonjeong: new Member({
    firstName: 'Daeheon',
    lastName: 'Jeong',
    email: 'neohgeek@gmail.com',
    career: 'Undergraduate Intern',
    img: 'daeheon.jpg',
  }),
  dongyunjung: new Member({
    firstName: 'Dongyun',
    lastName: 'Jung',
    email: 'djung2023@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'dongyun.jpeg',
  }),
  chanyoungkim: new Member({
    firstName: 'Chanyoung',
    lastName: 'Kim',
    email: 'itnoj15@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'chanyoung.jpg',
  }),
  jinhyeonkwon: new Member({
    firstName: 'Jinhyeon',
    lastName: 'Kwon',
    email: 'athexplorer@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'jhkwon.jpg',
    site: 'https://jinhyeonkwon.github.io',
  }),
  yokyunglee: new Member({
    firstName: 'Yokyung',
    lastName: 'Lee',
    email: 'ykleeee@kaist.ac.kr',
    career: 'Undergraduate Intern',
    img: 'yokyung.png',
  }),
  yoonahpark: new Member({
    firstName: 'Yoonah',
    lastName: 'Park',
    email: 'wisdomsword21@snu.ac.kr',
    career: 'Undergraduate Intern',
    img: 'yoonah.jpg',
  }),
  shahnozayadgarova: new Member({
    firstName: 'Shahnoza',
    lastName: 'Yadgarova',
    img: 'noza.jpeg',
    email: 'yadgarova@kaist.ac.kr',
    career: 'Undergraduate Intern',
  }),
  taehyunyang: new Member({
    firstName: 'Taehyun',
    lastName: 'Yang',
    email: '0705danny@snu.ac.kr',
    career: 'Undergraduate Intern',
    img: 'taehyun.png',
  }),
  oaksilkim: new Member({
    firstName: 'Oaksil',
    lastName: 'Kim',
    email: 'oksil@kaist.ac.kr',
    career: 'Administrative Staff',
    img: 'oaksil.jpg',
  }),
} as const satisfies Record<string, Member>
=======
  alexsuryapranata: new Member({
    name: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'alexsurya.jpg',
    site: '',
  }),
} as const
>>>>>>> renewal

export const MEMBERS_KEY = Object.keys(MEMBER)
export const MEMBERS = MEMBER as Record<string, Member>
export default Member
