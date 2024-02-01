export const CareerTypes = [
  'Associate Professor',
  'Postdoc Researcher',
  'Ph.D. Student',
  'M.S. Student',
  'Visiting Researcher',
  'Undergrad Intern',
  'Staff',
  'Alumni',
] as const

export type CareerType = (typeof CareerTypes)[number]

interface Props {
  firstName: string
  lastName: string
  email: string
  career: CareerType
  img: string
  site: string
}

interface Member extends Props {}
class Member {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
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
  hyoungwookjin: new Member({
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'hyoungwookjin.jpg',
    site: 'https://jhw123.github.io',
  }),
  alexsuryapranata: new Member({
    firstName: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'alexsurya.jpg',
    site: '',
  }),
} as const

export const MEMBERS = Object.values(MEMBER)
export default Member
