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
  invoice,
  cssgridFlex,
  hooks,
  color,
  building,
  debugging,
  darkMode,
  outreachyFirefox,
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
      { name: "Cloudinary", color: "text-purple-600" },
    ],
    gitHub: "https://github.com/Noble14477/Lodgnet",
    webLink: "https://reserinn.vercel.app/",
    status: "In-Progress",
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
        name: "ReactJs",
        color: "text-blue-800",
      },
      {
        name: "Tailwind css",
        color: "text-blue-500",
      },

      {
        name: "Redux Tool Kit",
        color: "text-pink-800",
      },
    ],
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
        name: "ReactJs",
        color: "text-blue-800",
      },
      {
        name: "Tailwind css",
        color: "text-blue-500",
      },
      {
        name: "NodeJs",
        color: "text-green-800",
      },
      {
        name: "Express",
        color: "text-green-500",
      },
      {
        name: "Mysql",
        color: "text-blue-800",
      },
      {
        name: "Redux Tool Kit",
        color: "text-pink-800",
      },
    ],
  },
  {
    title: "Invoice Generator App",
    type: "web",
    desc: "This web application allows users to create, manage, and view invoices with ease. It features secure authentication using Firebase, real-time data handling with Firestore, and a user-friendly interface built with React and Tailwind CSS. Users can log in, generate invoices, and track their billing history. A demo account is also provided for quick testing.",
    image: invoice,
    status: "Completed",
    webLink: "https://newinvoiceapp.netlify.app/invoice",
    gitHub: "https://github.com/Noble14477/Invoice_app",
    tech: [
      {
        name: "ReactJs",
        color: "text-blue-800",
      },
      {
        name: "Tailwind CSS",
        color: "text-blue-500",
      },
      {
        name: "Firebase",
        color: "text-yellow-500",
      },
      {
        name: "Firestore",
        color: "text-orange-700",
      },
    ],
  },
  {
    title: "Social Media Automation",
    type: "web",
    desc: "This web application connects users to diffrent social media accounts. While generating posts for users using openAi api. It allows users automate posts for days, weeks and even months.",
    image: automation,
    status: "In Progress",
    webLink: "https://www.socialmediaautomation.uxlivinglab.online/",
    gitHub:
      "https://github.com/LL03-Identity-Dowell/100007-Social-Media-Automation",
    tech: [
      {
        name: "ReactJs",
        color: "text-blue-800",
      },
      {
        name: "Tailwind css",
        color: "text-blue-500",
      },
      {
        name: "Python",
        color: "text-green-800",
      },
      {
        name: "Django",
        color: "text-gray-800",
      },
      {
        name: "Redux Tool Kit",
        color: "text-pink-800",
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
        name: "Next.Js",
        color: "text-blue-800",
      },
      {
        name: "ReactJs",
        color: "text-blue-800",
      },
      {
        name: "Tailwind css",
        color: "text-blue-500",
      },
      {
        name: "NodeJs",
        color: "text-green-800",
      },
      {
        name: "Coudinar (Cloud Storage)",
        color: "text-blue-800",
      },
      {
        name: "Mongodb",
        color: "text-pink-800",
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

const blogPosts = [
  {
    id: 7,
    title: "What the Firefox Outreachy Contribution Period Was Actually Like",
    excerpt:
      "A practical look at navigating the Firefox Outreachy contribution period, from competing for bugs to discovering them and contributing beyond the deadline.",
    image: outreachyFirefox,
    date: "April 15, 2026",
    readTime: "5 min read",
    categories: ["Open-source", "Outreachy"],
    slug: "firefox-outreachy-contribution",
    content: `

## Starting out: it’s more competitive than you expect

When the contribution period started, one thing became clear very quickly:
Bugs don’t wait. You open Bugzilla, see something interesting, and before you fully understand it, someone else has already claimed it. That happened multiple times early on.

At first, it felt like I needed to move faster, claim quickly, figure things out later. That approach doesn’t last.

## The decision that changed things

Instead of chasing bugs, I paused. I started reading through the sidebar and Firefox View code more carefully:
- how components were structured  
- how data flowed  
- how similar problems were already being solved  

That slowed me down at first, but it changed how I approached everything after that. Instead of trying to find bugs to work on, I started to notice problems while reading the code. That’s how I began filing bugs myself.

## Moving from claiming bugs to finding them

One of the most important shifts for me was this:

- Before: waiting for bugs to appear  
- After: identifying issues directly in the codebase  

Examples included:
- a mismatched closing tag in a synced tabs component  
- inconsistent keyboard event handling using event.keyCode instead of event.code  

These weren’t assigned. They were discovered. That changed both my confidence and how I navigated the codebase.

## Not every bug gets finished

One of the bugs I filed, a max-width issue, had to be abandoned. Not because I didn’t understand the problem, but because of limitations in how CSS behaves in that part of Firefox.
That was an important lesson: Not every issue has a clean or immediate solution. Sometimes the correct decision is to step away instead of forcing a fix.

## Working through uncertainty

There were moments where I was stuck. Instead of staying blocked privately, I asked questions in the Matrix channel. That made a big difference. I also spent time helping other contributors when I could:
- guiding people on how to add reviewers  
- helping with setup issues  
- encouraging better context when asking for help  

That interaction helped me understand the workflow better.

## What I worked on

During the period, I contributed fixes in the sidebar and Firefox View areas, including:

- correcting type mismatches in JSDoc  
- adding missing UI data like timestamps for synced tabs  
- fixing structural issues in components  
- updating keyboard event handling logic  
- writing browser tests for UI behavior  

I also worked on a WebDriver-related issue that involved aligning Firefox behavior with web standards.

## What this period actually teaches you

It’s not just about writing code.
It’s about:
- knowing when to move fast and when to slow down  
- understanding existing patterns before making changes  
- asking the right questions  
- accepting that some problems are deeper than they look  

## Continuing beyond the contribution period

Even after the contribution period ended, the work didn’t really stop for me.
One of the WebDriver-related fixes I worked on led to further discussion, and I was assigned another bug in that area. I’m currently working on it.

That experience made something clear to me: contributing here isn’t limited to the Outreachy timeline. Once you understand the codebase and the workflow, you can keep going.
I plan to continue contributing to Firefox and building on what I’ve learned during this period.

## Final thought

The contribution period is short, but it’s intense.
If you try to rush through it, you’ll struggle.
If you take time to understand the codebase, even when it feels slow, things start to open up.
That shift made the difference for me.

## Acknowledgments

Thanks to Kelly Cochrane and Nikki Sharpley for their guidance during the Outreachy contribution period, and to Alexandra Borovova for support on WebDriver contributions. I also appreciate the feedback from reviewers who helped improve my patches.
`,
  },
  {
    id: 1,
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt:
      "Learn how to leverage React Hooks to simplify your components and manage state effectively.",
    image: hooks,
    date: "May 15, 2023",
    readTime: "8 min",
    categories: ["React", "Frontend"],
    slug: "mastering-react-hooks",
    content: `
# Mastering React Hooks: A Comprehensive Guide

React Hooks revolutionized how we write components by allowing us to use state and other React features without writing classes. In this guide, we'll explore the most important hooks and how to use them effectively.

## The Essential Hooks

### useState
The \`useState\` hook is your gateway to state management in functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect
For side effects in your components, \`useEffect\` is your go-to hook:

\`\`\`jsx
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // Only re-run if count changes
\`\`\`

## Advanced Hook Patterns

### Custom Hooks
You can build your own hooks to share stateful logic:

\`\`\`jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`

## Performance Considerations

- Use \`useMemo\` for expensive calculations
- Use \`useCallback\` to prevent unnecessary re-renders
- Split effects into multiple \`useEffect\` calls by concern

By mastering these hooks, you'll write cleaner, more maintainable React code.
`,
  },
  {
    id: 2,
    title: "The Psychology of Color in Web Design",
    excerpt:
      "How color choices impact user experience and conversion rates in modern web applications.",
    image: color,
    date: "April 28, 2023",
    readTime: "6 min",
    categories: ["Design", "UI/UX"],
    slug: "color-psychology-web-design",
    content: `
# The Psychology of Color in Web Design

Color is one of the most powerful tools in a designer's toolkit, influencing mood, perception, and even conversion rates.

## Color Meanings in Different Cultures

| Color  | Western Meaning | Eastern Meaning |
|--------|-----------------|-----------------|
| Red    | Danger, Love    | Luck, Prosperity|
| White  | Purity          | Mourning        |
| Blue   | Trust           | Immortality     |

## Practical Applications

### Call-to-Action Buttons
- Red: Creates urgency (great for "Sale" buttons)
- Green: Associated with positive action ("Go", "Submit")
- Blue: Builds trust (ideal for "Learn More")

### Background Colors
- Light backgrounds improve readability
- Dark backgrounds suggest luxury
- Gradients create modern, dynamic feels

## Tools for Color Selection

1. **Adobe Color** - Create harmonious color schemes
2. **Coolors** - Generate quick palettes
3. **ColorBox** - Build accessible color systems

> "Colors, like features, follow the changes of the emotions." - Pablo Picasso

Remember to test your color choices with real users to ensure they convey the right message.
`,
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt:
      "Practical techniques to ensure your web apps are usable by everyone, regardless of ability.",
    image: building,
    date: "April 10, 2023",
    readTime: "10 min",
    categories: ["Accessibility", "Frontend"],
    slug: "building-accessible-web-apps",
    content: `
# Building Accessible Web Applications

Web accessibility isn't just a legal requirement—it's a moral obligation that makes your products usable by everyone.

## Core Principles (POUR)

1. **Perceivable**: Available to the senses
2. **Operable**: Users can interact with all components
3. **Understandable**: Content and operation are clear
4. **Robust**: Works across browsers and devices

## Essential Techniques

### Semantic HTML
Always use the right element for the job:

\`\`\`html
<!-- Bad -->
<div onclick="submitForm()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### ARIA Attributes
When native HTML isn't enough:

\`\`\`html
<div 
  role="alert"
  aria-live="assertive"
>
  Your changes have been saved
</div>
\`\`\`

## Testing Accessibility

1. **Keyboard Navigation**: Try using your site with just Tab/Enter
2. **Screen Readers**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **Automated Tools**: axe DevTools or Lighthouse

Accessibility should be considered from the start of every project, not bolted on at the end.
`,
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A detailed comparison of CSS layout systems with practical examples for different use cases.",
    image: cssgridFlex,
    date: "March 22, 2023",
    readTime: "7 min",
    categories: ["CSS", "Frontend"],
    slug: "css-grid-vs-flexbox",
    content: `
# CSS Grid vs Flexbox: When to Use Each

Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes.

## The Key Differences

| Feature        | CSS Grid          | Flexbox           |
|---------------|-------------------|-------------------|
| Dimensionality | 2D (rows & columns) | 1D (row OR column) |
| Control       | Explicit placement | Content flow      |
| Use Case      | Overall page layout | Component layout  |

## When to Use Grid

### Perfect for:
- Complex page layouts
- Items that need precise positioning
- Both rows and columns need control

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}
\`\`\`

## When to Use Flexbox

### Ideal for:
- Navigation bars
- Centering elements
- Distributing space within a component

\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Pro Tip: Use Them Together!
\`\`\`css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.sidebar {
  display: flex;
  flex-direction: column;
}
\`\`\`
`,
  },
  {
    id: 5,
    title: "Effective Debugging Techniques in JavaScript",
    excerpt:
      "Professional debugging strategies that will save you hours of frustration in your JS projects.",
    image: debugging,
    date: "March 5, 2023",
    readTime: "9 min",
    categories: ["JavaScript", "Debugging"],
    slug: "effective-js-debugging",
    content: `
# Effective Debugging Techniques in JavaScript

Debugging is an essential skill that separates junior developers from seniors. Here's how to do it effectively.

## The Debugging Mindset

1. **Reproduce the Issue**: Can you consistently make it happen?
2. **Isolate the Problem**: Narrow down where it occurs
3. **Understand Why**: Don't just fix symptoms

## Powerful Tools

### Console Methods Beyond \`console.log\`

\`\`\`js
// Table for objects/arrays
console.table(users);

// Group related logs
console.group('User Details');
console.log('Name:', user.name);
console.log('Email:', user.email);
console.groupEnd();

// Trace call stack
console.trace('How did we get here?');
\`\`\`

## Chrome DevTools Tricks

1. **Conditional Breakpoints**: Right-click → Add conditional breakpoint
2. **XHR Breakpoints**: Pause when specific API calls happen
3. **Event Listener Breakpoints**: Debug specific interactions

## Common JavaScript Pitfalls

- **Async/Await Issues**: Remember to \`await\` promises
- **Scope Problems**: Watch for \`this\` binding
- **Type Coercion**: Use \`===\` instead of \`==\`

> "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements." - Brian Kernighan
`,
  },
  {
    id: 6,
    title: "The Complete Guide to Dark Mode Implementation",
    excerpt:
      "Step-by-step guide to implementing a perfect dark mode that respects user preferences.",
    image: darkMode,
    date: "February 18, 2023",
    readTime: "12 min",
    categories: ["CSS", "UI/UX"],
    slug: "dark-mode-implementation-guide",
    content: `
# The Complete Guide to Dark Mode Implementation

Dark mode has become an expected feature in modern web applications. Here's how to implement it properly.

## CSS Custom Properties Approach

### 1. Define Your Color Scheme
\`\`\`css
:root {
  --text-primary: #222;
  --bg-primary: #fff;
  /* ...other light mode vars */
}

[data-theme="dark"] {
  --text-primary: #eee;
  --bg-primary: #121212;
  /* ...dark mode overrides */
}
\`\`\`

### 2. Create a Theme Toggle
\`\`\`js
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
\`\`\`

## Respecting System Preferences

\`\`\`css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #eee;
    --bg-primary: #121212;
  }
}
\`\`\`

## Best Practices

1. **Test Contrast Ratios**: Aim for at least 4.5:1 for normal text
2. **Adjust Images**: Consider darker variants for dark mode
3. **Transition Smoothly**:
   \`\`\`css
   * {
     transition: background-color 0.3s, color 0.3s;
   }
   \`\`\`

## Accessibility Considerations

- Always provide a manual toggle
- Don't rely solely on color to convey information
- Test with various vision deficiencies

Dark mode done right enhances user experience and reduces eye strain.
`,
  },
];

export { services, skills, works, blogPosts };
