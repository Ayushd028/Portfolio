export const hashRoutes = [
  ["Home", "/#intro"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
  ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
  "Tech Enthusiast",
  "Full-Stack Developer",
  "Code Artist",
  "Strategic Gamer",
  "Writer"
];
export const myName = "Ayush Dwivedi";
export const shortDescription = "MERN STACK DEVELOPER";
export const longDescription = "Full Stack Development Apprentice at AccioJob with a strong interest in technology. Experienced in Web Development, now actively working on Web Development using Full Stcak Development. Always curious to learn and explore new tools and frameworks. Feel free to check out my portfolio!"
export const socialMediaDetails = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ayushd028',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/-ayushdwivedi',
  },
  {
    name: 'Email',
    url: 'mailto:dwivediayush028@gmail.com',
  }
];

export const skills = [
  "C", "C++", "HTML/CSS", "Javascript", "MySQL",
  "MongoDB", "Redux", "Tailwind", "React", "Node", "RestAPI",
  "ExpressJs", "MUI", "Git", "Github", "VSCode",
  "Postman", "Vercel"
];


export const projectsData = [
  {
    title: ' Messenger ',
    desciption: 'Developed a real-time chat application that allows users to send and receive messages instantly. The app uses Firebase for authentication, real-time database, and hosting, while React powers the front-end for a seamless and responsive user experience.',
    tech: ['ReactJS', 'Firebase', 'HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Ayushd028/messenger',
    image: '/projects/messenger.png'
  },
  {
    title: 'Portfolio',
    desciption: 'Developed an interactive portfolio using Next.js and Three.js, integrating dynamic 3D visuals. Enhanced user engagement with a custom serverless feedback system via API, ensuring real-time communication and seamless user experience across devices.',
    tech: ['NodeJS', 'NextJS', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap'],
    github: 'https://github.com/Ayushd028/Portfolio',
    image: '/projects/portfolio.png'
  },
  {
    title: 'Bookly',
    desciption: 'Books App Frontend delivers a smooth and intuitive user experience for reading and managing books, featuring responsive design, easy navigation, and interactive elements that make book discovery and organization effortless across all devices.',
    tech: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
    github: 'https://github.com/Ayushd028/Books',
    image: '/projects/bookly.png'
  },
  {
    title: 'WeatherWise',
    desciption: "A responsive and user-friendly web application that displays real-time weather information for any city using data from the OpenWeatherMap API. It features search functionality, temperature, humidity, wind speed, and condition descriptions.",
    tech: ['ReactJS', 'HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Ayushd028/weather-details',
    image: '/projects/weatherwise.png'
  }
];

export const contactData = {
  imagesrc: '/stars/StarBackground.png',
  imagealt: 'Star Background Image',
};
