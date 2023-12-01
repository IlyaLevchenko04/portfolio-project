import { nanoid } from 'nanoid';

type Project = {
  name: string;
  link: string;
  tech: string[];
  description: string;
  type: string;
  gitHubLink: string;
  id: string;
};

export const projectsArray: Project[] = [
  {
    id: nanoid(),
    type: 'front-end',
    name: 'Moviehelper',
    link: 'https://ilyalevchenko04.github.io/trustee-test',
    tech: [
      'HTML',
      'CSS',
      'React.js',
      'Tailwind',
      'React-router',
      'Google Calendar API',
      'React-hook-form',
      'Toastify',
    ],
    gitHubLink: 'https://github.com/IlyaLevchenko04/trustee-test',
    description:
      "This is a React single-page app designed for automatically determining the suitable time for visiting a cinema based on the user's meeting and event schedules in their calendar, as well as the movie showtimes. The application provides recommendations for the optimal time to watch a movie, taking into account the user's schedule and the movie showtimes.",
  },
  {
    id: nanoid(),
    gitHubLink: 'https://github.com/IlyaLevchenko04/todo-back',
    name: 'Todo API',
    link: 'https://todo-back-66y9.onrender.com/api-docs/',
    tech: [
      'Node.js',
      'Mongoose',
      'MongoDB',
      'jwt-token',
      'bcrypt',
      'HTML',
      'CSS',
      'Swagger',
    ],
    description:
      'This Node.js project is a robust Todo application that leverages the power of MongoDB through Mongoose for efficient data storage and retrieval. The project includes secure user authentication and authorization using JSON Web Tokens (JWT), ensuring a safe and personalized experience for users.',
    type: 'back-end',
  },
  {
    id: nanoid(),
    gitHubLink: 'https://github.com/IlyaLevchenko04/lampa-test-back',
    name: 'Products API',
    link: 'https://products-api-umhe.onrender.com/api-docs',
    tech: [
      'Node.js',
      'Mongoose',
      'MongoDB',
      'jwt-token',
      'bcrypt',
      'HTML',
      'CSS',
      'Monobank API',
      'Swagger',
    ],
    description:
      'This Node.js project is a robust Product Management API that utilizes MongoDB through Mongoose for efficient data storage and retrieval. The API incorporates JSON Web Tokens (JWT) for secure user authentication and authorization. ',
    type: 'back-end',
  },
  {
    id: nanoid(),
    gitHubLink: 'https://github.com/IlyaLevchenko04/lampa-test-front',
    name: 'Web store',
    link: 'https://ilyalevchenko04.github.io/lampa-test-front/',
    tech: [
      'HTML',
      'CSS',
      'React.js',
      'React-router',
      'React-hook-form',
      'Redux-Toolkit',
      'Typescript',
      'Toastify',
    ],
    description:
      'Developed using React.js and TypeScript, this Single Page Application (SPA) includes essential features such as product browsing, a user-friendly cart, user authentication, and registration forms. Utilizing a custom API and localStorage for order persistence, the project showcases state-of-the-art technologies like Redux Toolkit for centralized state management, React Hook Form for efficient form handling, and styled-components for a clean and modular styling approach. The code is available on GitHub, and the application is deployed using GitHub Pages.',
    type: 'front-end',
  },
];
