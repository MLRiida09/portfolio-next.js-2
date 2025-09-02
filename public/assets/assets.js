// public/assets/assets.js
//profile.jpg:
import profile from './profile.jpg';

//nav bar icon: 
import house from './house.svg';
import house_dark from './house-dark-mode.svg';
import cap from './graduation-cap.svg';
import cap_dark from './graduation-cap-dark-mode.svg';
import blog from './newspaper.svg';
import blog_dark from './newspaper-dark.svg';
import project from './folder.svg';
import project_dark from './folder-dark-mode.svg';
import download from './download.svg';
import download_dark from './download-dark.svg';
import rocket from './rocket.svg';
import rocket_dark from './rocket-dark.svg';
import close from './close.svg';
import close_dark from './close-dark.svg';
import starts from './stars.svg';



//dark & light mode icon : 
import sun from './sun-solid.svg';
import sun_dark from './sun-solid-dark.svg';
import moon from './moon-solid.svg';
import moon_dark from './moon-solid-dark.svg';

//contact icons :
import mail from './envelope-solid.svg';
import mail_dark from './envelope-solid-dark.svg';
import phone from './phone-solid.svg';
import phone_dark from './phone-solid-dark.svg';
import location from './earth-africa-solid.svg';
import location_dark from './earth-africa-solid.svg';

export const assets = { 
    profile,
    house,
    house_dark,
    cap,
    cap_dark, 
    blog,
    blog_dark,
    project, 
    project_dark,
    sun,
    sun_dark,
    moon,
    moon_dark,
    mail,
    mail_dark,
    phone,
    phone_dark,
    location,
    location_dark,
    download,
    download_dark,
    rocket,
    rocket_dark,
    close,
    close_dark,
    starts,
   
}

export const MyInfo = {
    name: "Mellal Rida",
    description: "I am a graduate in Automation and Industrial Computing, with a deep interest in technology and software engineering. Over time, I have developed a strong passion for full-stack web development, allowing me to bring creative ideas to life through clean, scalable, and user-friendly applications. I focus on delivering modern digital solutions with attention to detail, performance, and user experience. Whether working on the frontend or backend, I aim to build reliable systems that solve real-world problems. I am always open to new challenges and continuously strive to grow both personally and professionally in the tech field."
};


export  const greetings = [
    { text: "I create with code and design with care", lang: "en" },
    { text: "Every project I build tells its own story", lang: "en" },
    { text: "From idea to product I craft the journey", lang: "en" },
    { text: "Technology and creativity working as one", lang: "en" },
    { text: "I turn concepts into modern digital experiences", lang: "en" }
  ];


export const certificates = [
    {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta (Facebook)",
    date: "2024",
    category: "web",
    description: "Complete full-stack development program covering React, Node.js, databases.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    credentialId: "ABC123XYZ",
    verifyLink: "https://coursera.org/verify/ABC123XYZ"
    },
    {
    id: 2,
    title: "React Developer",
    issuer: "Meta (Facebook)",
    date: "2024",
    category: "frontend",
    description: "Advanced React development including hooks, context, and modern React patterns.",
    skills: ["React", "JavaScript", "JSX", "Hooks"],
    credentialId: "DEF456ABC",
    verifyLink: "https://coursera.org/verify/DEF456ABC"
    },
    {
    id: 3,
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2023",
    category: "data",
    description: "Comprehensive data analytics program covering data collection, analysis, and visualization.",
    skills: ["SQL", "Tableau", "R", "Python"],
    credentialId: "GHI789DEF",
    verifyLink: "https://coursera.org/verify/GHI789DEF"
    },
    {
    id: 4,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    category: "cloud",
    description: "Cloud computing fundamentals and AWS services overview.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3"],
    credentialId: "JKL012GHI",
    verifyLink: "https://aws.amazon.com/verification/JKL012GHI"
    },
    {
    id: 5,
    title: "JavaScript Algorithms",
    issuer: "FreeCodeCamp",
    date: "2023",
    category: "programming",
    description: "Advanced JavaScript algorithms and data structures certification.",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    credentialId: "MNO345JKL",
    verifyLink: "https://freecodecamp.org/certification/MNO345JKL"
    },
    {
    id: 6,
    title: "UI/UX Design",
    issuer: "Google",
    date: "2022",
    category: "design",
    description: "User experience design principles and design thinking methodology.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    credentialId: "PQR678MNO",
    verifyLink: "https://coursera.org/verify/PQR678MNO"
    }
  ];

 export const categories = [
    { id: 'all', name: 'All Certificates', count: certificates.length },
    { id: 'web', name: 'Web Development', count: certificates.filter(cert => cert.category === 'web').length },
    { id: 'frontend', name: 'Frontend', count: certificates.filter(cert => cert.category === 'frontend').length },
    { id: 'data', name: 'Data Analytics', count: certificates.filter(cert => cert.category === 'data').length },
    { id: 'cloud', name: 'Cloud Computing', count: certificates.filter(cert => cert.category === 'cloud').length },
    { id: 'programming', name: 'Programming', count: certificates.filter(cert => cert.category === 'programming').length },
    { id: 'design', name: 'Design', count: certificates.filter(cert => cert.category === 'design').length }
  ];



 export const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks: A Complete Guide",
      excerpt: "Learn how to use React Hooks effectively in your projects. From useState to custom hooks, this comprehensive guide covers everything you need to know.",
      content: `
        <p>React Hooks have revolutionized how we write React components. They allow us to use state and other React features without writing a class component.</p>
        
        <h2>What are React Hooks?</h2>
        <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have become the standard way to write React components.</p>
        
        <h3>The Most Common Hooks</h3>
        <p><strong>useState:</strong> Allows you to add state to functional components.</p>
        <p><strong>useEffect:</strong> Lets you perform side effects in function components.</p>
        <p><strong>useContext:</strong> Allows you to consume React context in functional components.</p>
        
        <h3>Example: Using useState</h3>
        <pre><code>const [count, setCount] = useState(0);</code></pre>
        
        <p>This is just the beginning. React Hooks provide a powerful way to manage state and side effects in your applications.</p>
      `,
      author: "Mellal Rida",
      date: "2024-03-15",
      category: "react",
    },
    {
      id: 2,
      title: "Building Responsive Web Applications with CSS Grid",
      excerpt: "Discover the power of CSS Grid for creating modern, responsive layouts. Learn advanced techniques and best practices for grid-based designs.",
      content: `
        <p>CSS Grid has changed the way we approach web layout design. It provides a powerful system for creating complex, responsive layouts with minimal code.</p>
        
        <h2>Why CSS Grid?</h2>
        <p>Unlike Flexbox, which is designed for one-dimensional layouts, CSS Grid is designed for two-dimensional layouts, making it perfect for complex page designs.</p>
        
        <h3>Basic Grid Setup</h3>
        <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>
        
        <p>This creates a simple three-column grid with equal-width columns and a 20px gap between items.</p>
        
        <h3>Advanced Techniques</h3>
        <p>Learn about grid areas, auto-placement, and responsive design patterns that will take your layouts to the next level.</p>
      `,
      author: "Mellal Rida",
      date: "2024-03-10",
      category: "css",
    },
    {
      id: 3,
      title: "Node.js Best Practices for Production Applications",
      excerpt: "Essential best practices for building robust, scalable Node.js applications that are ready for production environments.",
      content: `
        <p>Building production-ready Node.js applications requires careful attention to performance, security, and maintainability.</p>
        
        <h2>Performance Optimization</h2>
        <p>Performance is crucial for production applications. Here are key strategies:</p>
        
        <ul>
          <li>Use clustering to take advantage of multi-core systems</li>
          <li>Implement proper caching strategies</li>
          <li>Optimize database queries</li>
          <li>Use compression middleware</li>
        </ul>
        
        <h3>Security Considerations</h3>
        <p>Security should be built into your application from the ground up:</p>
        
        <pre><code>// Example: Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});</code></pre>
        
        <p>Always validate input, use HTTPS, and keep dependencies updated.</p>
      `,
      author: "Mellal Rida",
      date: "2024-03-05",
      category: "backend",
    },
    {
      id: 4,
      title: "Modern JavaScript: ES2024 Features You Should Know",
      excerpt: "Explore the latest JavaScript features that will improve your code quality and development experience in 2024.",
      content: `
        <p>JavaScript continues to evolve with new features that make development more efficient and enjoyable. Let's explore what's new in ES2024.</p>
        
        <h2>New Array Methods</h2>
        <p>ES2024 introduces several new array methods that provide more intuitive ways to work with arrays:</p>
        
        <h3>Array.prototype.findLast()</h3>
        <pre><code>const numbers = [1, 2, 3, 4, 5, 4, 3];
const lastEven = numbers.findLast(n => n % 2 === 0);
console.log(lastEven); // 4</code></pre>
        
        <h3>Object.hasOwn()</h3>
        <p>A safer alternative to hasOwnProperty():</p>
        <pre><code>const obj = { name: 'John' };
console.log(Object.hasOwn(obj, 'name')); // true</code></pre>
        
        <p>These features help write more readable and maintainable code.</p>
      `,
      author: "Mellal Rida",
      date: "2024-02-28",
      category: "javascript",
    },
    {
      id: 5,
      title: "Database Design Patterns for Modern Web Applications",
      excerpt: "Learn essential database design patterns that will help you build scalable and maintainable web applications.",
      content: `
        <p>Good database design is the foundation of any successful web application. The right patterns can make the difference between a system that scales gracefully and one that becomes a maintenance nightmare.</p>
        
        <h2>Normalization vs Denormalization</h2>
        <p>Understanding when to normalize and when to denormalize is crucial for performance and maintainability.</p>
        
        <h3>Normalization Benefits:</h3>
        <ul>
          <li>Reduces data redundancy</li>
          <li>Improves data integrity</li>
          <li>Makes updates easier</li>
        </ul>
        
        <h3>When to Denormalize:</h3>
        <p>Denormalization can improve read performance in scenarios with heavy read workloads:</p>
        
        <pre><code>-- Example: Denormalized user profile
CREATE TABLE user_profiles (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  full_name VARCHAR(100),
  post_count INT, -- Denormalized from posts table
  last_login_date TIMESTAMP
);</code></pre>
        
        <h2>Indexing Strategies</h2>
        <p>Proper indexing is essential for query performance. Learn when and how to create effective indexes.</p>
      `,
      author: "Mellal Rida",
      date: "2024-02-20",
      category: "database",
    },
    {
      id: 6,
      title: "Building Accessible Web Applications: A Developer's Guide",
      excerpt: "Learn how to build web applications that are accessible to all users, including those with disabilities.",
      content: `
        <p>Web accessibility is not just a legal requirement—it's a moral imperative. Building accessible applications ensures that everyone can use your product, regardless of their abilities.</p>
        
        <h2>The WCAG Guidelines</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for accessibility. The four main principles are:</p>
        
        <ul>
          <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
          <li><strong>Operable:</strong> Interface components must be operable</li>
          <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
          <li><strong>Robust:</strong> Content must be robust enough to work with various assistive technologies</li>
        </ul>
        
        <h3>Semantic HTML</h3>
        <p>Using semantic HTML elements is the foundation of accessibility:</p>
        
        <pre><code>&lt;button&gt;Click me&lt;/button&gt; <!-- Good -->
&lt;div onclick="handleClick()"&gt;Click me&lt;/div&gt; <!-- Bad --&gt;</code></pre>
        
        <h3>ARIA Labels and Roles</h3>
        <p>When semantic HTML isn't enough, ARIA attributes help provide context:</p>
        
        <pre><code>&lt;div role="button" aria-label="Close dialog" onclick="closeDialog()"&gt;
  ×
&lt;/div&gt;</code></pre>
        
        <p>Remember: accessibility benefits everyone, not just users with disabilities.</p>
      `,
      author: "Mellal Rida",
      date: "2024-02-15",
      category: "accessibility",
    }
  ];


export const contactme = [
    {
        icon: assets.mail, 
        title: "Email",
        description: "mellala@gmail.com",
        link: "mailto:mellala@gmail.com"
    },
    {
        icon: assets.phone,
        title: "Phone", 
        description: "+213 (xxx) xxx-xxxx",
        link: "tel:+213xxxxxxxxx"
    },
    {
        icon: assets.location,
        title: "Location",
        description: "Blida, Algeria",
        link: "#"
    }
];