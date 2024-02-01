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

export interface Member {
  firstName: string
  lastName: string
  email: string
  career: CareerType
  img: string
  site?: string
}

export const MEMBER = {
  juhokim: {
    firstName: 'Juho',
    lastName: 'Kim',
    email: 'juhokim@kaist.ac.kr',
    career: 'Associate Professor',
    img: 'juhokim.jpg',
    site: 'http://juhokim.com/',
  },
  hyoungwookjin: {
    firstName: 'Hyoungwook',
    lastName: 'Jin',
    email: 'jinhw@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'hyoungwookjin.jpg',
    site: 'https://jhw123.github.io',
  },
  yumincho: {
    firstName: 'Yumin',
    lastName: 'Cho',
    email: 'dbals1184@kaist.ac.kr',
    career: 'Undergrad Intern',
    img: 'yumincho.png',
  },
  example1: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },

  example2: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
  example3: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
  example4: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
  example5: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'example.png',
  },
  example6: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'Ph.D. Student',
    img: 'example.png',
  },
  example7: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
  example8: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
  example9: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@kaist.ac.kr',
    career: 'M.S. Student',
    img: 'example.png',
  },
} as const satisfies Record<string, Member>

export const MEMBERS_KEY = Object.keys(MEMBER)
export const MEMBERS = MEMBER as Record<string, Member>
export default Member
