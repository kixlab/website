/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: '/courses/cs374-spring-2023',
        destination: 'https://cs374-spring-2023.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs374-spring-2021',
        destination: 'https://cs374-spring-2021.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs374-spring-2020',
        destination: 'https://cs374-spring-2020.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs374-spring-2019',
        destination: 'https://cs374-spring-2019.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs374-spring-2018',
        destination: 'https://cs374-spring-2018.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs374-spring-2017',
        destination: 'https://cs374-spring-2017.netlify.app',
        permanent: true,
      },

      {
        source: '/courses/cs473-fall-2023',
        destination: 'https://cs473-fall-2023.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs473-fall-2021',
        destination: 'https://cs473-fall-2021.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs473-fall-2020',
        destination: 'https://cs473-fall-2020.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs473-fall-2019',
        destination: 'https://cs473-fall-2019.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs473-fall-2018',
        destination: 'https://cs473-fall-2018.netlify.app',
        permanent: true,
      },

      {
        source: '/courses/cs473-fall-2017',
        destination: 'https://cs492-fall-2017.netlify.app/', //social computing was cs492 back then
        permanent: true,
      },
      {
        source: '/courses/cs473-fall-2016',
        destination: 'https://cs492-fall-2016.netlify.app', //social computing was cs492 back then
        permanent: true,
      },

      {
        source: '/courses/cs492-fall-2023',
        destination: 'https://cs492-fall-2023.netlify.app',
        permanent: true,
      },
      {
        source: '/courses/cs492-spring-2021',
        destination: 'https://human-ai.kixlab.org/',
        permanent: true,
      },
      {
        source: '/courses/cs492-fall-2020',
        destination: 'https://cs492-fall-2020.netlify.app',
        permanent: true,
      },

      {
        source: '/courses/cs492d-spring-2020',
        destination: 'https://cs492d-spring-2020.netlify.app/',
        permanent: true,
      },
      {
        source: '/courses/cs492c-fall-2018',
        destination: 'https://i2r.netlify.app/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
