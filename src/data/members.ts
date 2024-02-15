interface Props {
  name: string
  lastName: string
  email: string
  career: string
  img: string
  site: string
}

interface Member extends Props {}
class Member {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const MEMBER = {
  juhokim: new Member({
    name: 'Juho',
    lastName: 'Kim',
    email: 'juhokim@kaist.ac.kr',
    career: 'Associate Professor',
    img: 'juhokim.jpg',
    site: 'http://juhokim.com/',
  }),
  hyoungwookjin: new Member({
    name: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'hyoungwookjin.jpg',
    site: 'https://jhw123.github.io',
  }),
  alexsuryapranata: new Member({
    name: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'alexsurya.jpg',
    site: '',
  }),
} as const

export const MEMBERS = Object.values(MEMBER)
export default Member
