import {
  mobile,
  backend,
  creator,
  web,
  aiSummarizer,
  safeBay,
  automation,
  swizzfunds,
  hotel,
  NobleDevWorks,
  NobleDevWorks2,
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
    title: "Hotel Management Platform",
    type: "web",
    image: hotel,
    desc: "A comprehensive platform that allows hotel managers to post listings, manage room availability, and accept online bookings. Users can search hotels, filter by location and price, and make seamless reservations.",
    tech: [
      { name: "Next.js", color: "text-gray-600" },
      { name: "Firebase", color: "text-yellow-600" },
      { name: "MongoDB", color: "text-green-600" },
      { name: "TailwindCSS", color: "text-blue-600" },
      { name: "Cloudinary", color: "text-purple-600" }
    ],
    gitHub: "https://github.com/Noble14477/Lodgnet",
    webLink: "https://reserinn.vercel.app/",
    status: "In-Progress"
  },
  {
    title: "Ai Summarizer",
    desc: "Ai Summarizer helps users get a full summary of the content of a web page, by just using the url, using openAi Api.",
    image: aiSummarizer,
    status: "Completed",
    webLink: "https://aiblogsummarizer.netlify.app",
    gitHub: "https://github.com/Noble14477/Ai_Summarizer",
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
    type: "web",
    desc: "Safe Bay was born out of a simple idea to provide people with a better way to find parking and car wash services. Making use of the users current location and finding the nearest car lot/ car park.",
    image: safeBay,
    status: "In Progress",
    webLink: "",
    gitHub: "",
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
    type: "web",
    desc: "This web application connects users to diffrent social media accounts. While generating posts for users using openAi api. It allows users automate posts for days, weeks and even months.",
    image: automation,
    status: "In Progress",
    webLink: "https://www.socialmediaautomation.uxlivinglab.online/",
    gitHub: "https://github.com/LL03-Identity-Dowell/100007-Social-Media-Automation",
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
  {
    title: "Swizzfunds",
    type: "web",
    desc: "A web application that helps users manage their investments, eg. Crypto Currencies, Real Eastate, Forex Trading etc.",
    image: swizzfunds,
    status: "Completed",
    webLink: "https://new-nextapp-amber.vercel.app/",
    gitHub: "",
    tech: [
      {
      name:"Next.Js",
      color: "text-blue-800"
    },
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
      name:"Coudinar (Cloud Storage)",
      color: "text-blue-800"
    },
      {
      name:"Mongodb",
      color: "text-pink-800"
    },

    ],
  },
  {
    title: "Graphics Design Promo Flyer",
    type: "graphics",
    image: NobleDevWorks,
    desc: "Promotional flyer for advertising design training and services.",
    tech: [
      { name: "Photoshop", color: "bg-blue-200" },
      { name: "CorelDraw", color: "bg-green-200" },
    ],
    gitHub: "",
    webLink: "",
    status: "Completed",
  },
  {
    title: "Web Development Promo Flyer",
    type: "graphics",
    image: NobleDevWorks2,
    desc: "Promotional flyer for advertising web developmet training and services.",
    tech: [
      { name: "Photoshop", color: "bg-blue-200" },
      { name: "CorelDraw", color: "bg-green-200" },
    ],
    gitHub: "",
    webLink: "",
    status: "Completed",
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
    title: "Next.Js",
  },
  {
    title: "Node.Js",
  },
  {
    title: "Mongodb.Js",
  },
  {
    title: "Express.Js",
  },
  {
    title: "Firbase",
  },
  {
    title: "Cloudinary (Cloud Storage)",
  },
  {
    title: "Tailwind Css",
  },
  {
    title: "Websockets",
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
