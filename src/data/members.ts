import { ResearchTopicType } from "./publications"

interface Props {
  name: string
  lastName: string
  email: string
  career: string
  img: string
  site?: string
  researchTopics?: ResearchTopicType[]
}

interface Member extends Props {}
class Member {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }

  get fullName() {
    return `${this.name} ${this.lastName}`
  }

  get imgPath() {
    let dirPath = '/images/members/'
    return `${dirPath}${this.img}`
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
    researchTopics: ["datamining", "crowdsourcing", "learning", "civics", "visualization", "social", "human-ai-interaction"]
  }),
  hyoungwookjin: new Member({
    name: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'hyoungwookjin.jpg',
    site: 'https://jhw123.github.io',
    researchTopics: ["learning"]
  }),
  alexsuryapranata: new Member({
    name: 'Alex',
    lastName: 'Suryapranata',
    email: 'alextio@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'alexsurya.jpg',
  }),
} as const

export const MEMBERS = Object.values(MEMBER)
export default Member
