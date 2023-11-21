import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Michael Moore',
  title: "Hi all, I'm Michael",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework. Also I have much experience about Game development with C#, 2D/3D game design, Game optimization.",
  resumeLink:
    'https://drive.google.com/file/d/1mHT-5ZrBmfjQC6X0A7JTYkhZHivzUO6j/view?usp=drive_link',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/1hanzla100/',
  github: 'https://github.com/1hanzla100',
  instagram: 'https://www.instagram.com/__hanzla100',
  facebook: 'https://www.facebook.com/1hanzla100',  
  twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Tsinghua University',
    subHeader: 'Bachelor of Engineering in Computer Science',
    duration: 'September 2013 - April 2017',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Trust Recruit Pte. Ltd ',
    companyLogo: '/img/icons/common/trust.png',
    date: 'July 2017 – Jun 2019',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'Blockchain Developer',
    company: 'Vegas One Realty',
    companyLogo: '/img/icons/common/VEGAS.png',
    date: 'Dec 2020 – Jun 2022',
    desc: 'Utilized coding, cryptography, and security skills to ensure the secure andseamless operation of the NFT Deployer, resulting in a 90% decrease in the number of security incidents reported by users.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Overflow',
    companyLogo: '/img/icons/common/overflow.png',
    date: 'Jun 2022 - Feb 2023',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'HBLAB JSC',
    companyLogo: '/img/icons/common/HBL.png',
    date: 'July 2019 - Dec 2020',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'SUPERMARKET',
    desc: 'I have full experience in designing supermarket website',
    link: 'https://supermarket.kanbkam.com/',
  },
  {
    name: 'Cotton Graphics',
    desc: 'Full experience of wordpress',
    link: 'https://www.cottongraphics.co.uk/',
  },
  {
    name: 'Transloadit(full-stack developer)',
    desc: 'Get hands-on experience in technical skills with this project',
    link: 'https://transloadit.com',
  },
  {
    name: 'Blundstone website(Australia)',
    desc: '',
    link: 'https://www.blundstone.com.au/',
  },
  {
    name: 'Blockchain experience',
    desc: 'Full experience about Blockchain, High assessment of Client, Client suprising,',
    github: 'https://github.com/Harry319193?tab=repositorie'
  },
  {
    name: 'Chatbot ChatGpt',
    desc: 'Artificial intelligence',
    github: 'https://github.com/Harry319193?tab=repositories'
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Yashwant Singh',
    feedback:
      'Amazing work and excellent team player. Michael continued to support me after the first phase of the project was over. He has very strong knowledge on WordPress and UI design. You find very few WordPress professionals who can design well and implement the design in WordPress with minimal plugins. I will hire him again. A++++',
  },
  {
    name: 'Ron Currie',
    feedback:
      'Michael was an excellent developer to work with. He communicated effectively, managed his time well, and delivered high-quality work on schedule. His technical skills were impressive, and he was able to solve complex problems with ease. John was also responsive to feedback and made sure to address any concerns we had. We would definitely recommend him for future projects..',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Michael Moore',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Michael Moore',
  image: '',
  url: 'https://portofolio-nu-mocha.vercel.app/',
  keywords: [
    'Hanzla',
    'Michael Moore',
    '@1Michael100',
    '1Michael100',
    'Portfolio',
    'Michael Portfolio ',
    'Michael Moore Portfolio',
  ],
};
