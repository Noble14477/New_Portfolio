import {
  mobile,
  backend,
  creator,
  web,
  aiSummarizer,
  safeBay,
  automation,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
const works = [
  {
    title: "Ai Summarizer",
    desc: "Ai Summarizer helps users get a full summary of the content of a web page, by just using the url, using openAi Api.",
    image: aiSummarizer,
    status: "Completed",
    tech: [
      {
      name:"ReactJs",
      color: "text-blue-800"
    },
      {
      name:"Tailwind css",
      color: "text-blue-500"
    },
      
      {
      name:"Redux Tool Kit",
      color: "text-pink-800"
    },
  ]
  },
  {
    title: "Safe Bay",
    desc: "Safe Bay was born out of a simple idea to provide people with a better way to find parking and car wash services. Making use of the users current location and finding the nearest car lot/ car park.",
    image: safeBay,
    status: "In Progress",
    tech: [
      {
      name:"ReactJs",
      color: "text-blue-800"
    },
      {
      name:"Tailwind css",
      color: "text-blue-500"
    },
      {
      name:"NodeJs",
      color: "text-green-800"
    },
      {
      name:"Express",
      color: "text-green-500"
    },
      {
      name:"Mysql",
      color: "text-blue-800"
    },
      {
      name:"Redux Tool Kit",
      color: "text-pink-800"
    },
  ]
  },
  {
    title: "Social Media Automation",
    desc: "This web application connects users to diffrent social media accounts. While generating posts for users using openAi api. It allows users automate posts for days, weeks and even months.",
    image: automation,
    status: "In Progress",
    tech: [
      {
      name:"ReactJs",
      color: "text-blue-800"
    },
      {
      name:"Tailwind css",
      color: "text-blue-500"
    },
      {
      name:"Python",
      color: "text-green-800"
    },
      {
      name:"Django",
      color: "text-gray-800"
    },
      {
      name:"Redux Tool Kit",
      color: "text-pink-800"
    },

      
      
      
      
      
      
    ],
  },
];

const skills = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "Design",
  },
  {
    title: "JavaScript",
  },
  {
    title: "React",
  },
  {
    title: "GIT",
  },
  {
    title: "Github",
  },
  {
    title: "Responsive",
  },
  {
    title: "SEO",
  },
];

export { services, skills, works };
