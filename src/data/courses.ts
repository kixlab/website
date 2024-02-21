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
    title: 'Introduction to Human-Computer Interaction',
    code: 'CS374',
    image: 'cs374.png',
    description:
      'Designing useful and usable user interfaces is much more than designing fancy and beautiful things. This course introduces fundamental principles, techniques, and methods for designing, prototyping, and evaluating user interfaces. Through this course, you’ll master the skills to design useful and usable interfaces that are carefully catered to users’ needs.',
    url: 'https://kixlab.org/courses/hci/',
    editions: [
      { semester: 'Spring 2021', url: 'https://kixlab.org/courses/cs374-spring-2021/' },
      { semester: 'Spring 2020', url: 'https://kixlab.org/courses/cs374-spring-2020/' },
      { semester: 'Spring 2019', url: 'https://kixlab.org/courses/cs374-spring-2019/' },
      { semester: 'Spring 2018', url: 'https://kixlab.org/courses/cs374-spring-2018/' },
      { semester: 'Spring 2017', url: 'https://kixlab.org/courses/cs374-spring-2017/' },
    ],
  }),

  cs474: new Course({
    title: 'Introduction to Social Computing',
    code: 'CS474',
    image: 'cs374.png',
    description:
      'Human-computer interaction no longer only concerns a single user in front of their computer. An increasing number of modern systems are inherently social, involving a large group of users to collaborate, discuss, ideate, solve problems, and make decisions together via social interaction. This course focuses on crowdsourcing and social computing, two of the most important concepts in the era of interaction at scale. This course will cover major design issues and computational techniques in building crowdsourcing and social computing systems.',
    url: 'https://kixlab.org/courses/hci/',
    editions: [
      { semester: 'Fall 2021', url: 'https://kixlab.org/courses/cs473-fall-2021/' },
      { semester: 'Fall 2020', url: 'https://kixlab.org/courses/cs473-fall-2020/' },
      { semester: 'Fall 2019', url: 'https://kixlab.org/courses/cs473-fall-2019/' },
      { semester: 'Fall 2018', url: 'https://kixlab.org/courses/cs473-fall-2018/' },
      { semester: 'Fall 2017', url: 'https://kixlab.org/courses/cs473-fall-2017/' },
      { semester: 'Fall 2016', url: 'https://kixlab.org/courses/cs473-fall-2016/' },
    ],
  }),

  cs492: new Course({
    title: 'Human-AI Interaction',
    code: 'CS492',
    image: 'cs374.png',
    description:
      'Humans and AI are more closely interacting than ever before, in all areas of our work, education, and life. As more intelligent machines are entering our lives, their accuracy and performance are not the only important factor that matters. As designers of such technology, we have to carefully consider the user experience of AI in order for AI to be of practical value. In this course, we will explore various dimensions of human-AI interaction, including ethics, explainability, design process involving AI, visualization, human-AI collaboration, recommender systems, and a few notable application areas.',
    url: 'https://kixlab.org/courses/hci/',
    editions: [
      { semester: 'Spring 2021', url: 'https://human-ai.kixlab.org/' },
      { semester: 'Fall 2020', url: 'https://www.kixlab.org/courses/cs492-fall-2020/' },
    ],
  }),

  cs492d: new Course({
    title: 'Introduction to Research',
    code: 'CS492D',
    image: 'cs374.png',
    description:
      'Many (undergraduate) students at KAIST consider having a research career. Although there are research opportunities such as URP or lab internships, it is still difficult to assess whether research is right for oneself with such short research experience. Moreover, mentoring and guidelines for research beginners are not always available. This course is designed for students who want to understand which activities and tasks are involved in research and what characteristics and attitude are required to be great researchers. This course will provide students with a taste of various aspects of research, including how to find the right research area, how to approach your potential research advisor, how to identify papers to read, how to create good research ideas, how to write and present papers, how to interact with peers, and how to write a good CV.',
    url: 'https://kixlab.org/courses/hci/',
    editions: [
      { semester: 'Spring 2020', url: 'https://www.kixlab.org/courses/cs492d-spring-2020/' },
      { semester: 'Spring 2019', url: 'https://nmsl.kaist.ac.kr/courses/i2r/' },
      { semester: 'Spring 2018', url: 'https://www.kixlab.org/courses/cs492c-fall-2018/' },
    ],
  }),
} as const

export const COURSES = Object.values(COURSE)
export default Course
