interface Props {
  title: string
  code: string
  image: string
  description: string
  url: string
  editions: { semester: string; url: string }[]
}

interface Course extends Props {}
class Course {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const COURSE = {
  cs374: new Course({
    title: 'Introduction to HCI',
    code: 'CS374',
    image: 'cs374.png',
    description:
      'This course introduces fundamental principles, techniques, and methods for designing, prototyping, and evaluating user interfaces.',
    url: 'https://kixlab.org/courses/hci/',
    editions: [
      { semester: 'Spring 2021', url: 'https://kixlab.org/courses/cs374-spring-2021/' },
      { semester: 'Spring 2020', url: 'https://kixlab.org/courses/cs374-spring-2020/' },
      { semester: 'Spring 2019', url: 'https://kixlab.org/courses/cs374-spring-2019/' },
      { semester: 'Spring 2018', url: 'https://kixlab.org/courses/cs374-spring-2018/' },
      { semester: 'Spring 2017', url: 'https://kixlab.org/courses/cs374-spring-2017/' },
    ],
  }),
} as const

export const COURSES = Object.values(COURSE)
export default Course
