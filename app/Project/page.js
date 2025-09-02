"use client";
import { useState, useEffect } from "react";
import Projects from "@/components/Projects";
import { assets } from "@/public/assets/assets";

export default function ProjectsPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Sample projects data - you can move this to your assets.js file later
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment processing, and admin dashboard.",
      fullDescription: "This comprehensive e-commerce platform provides a complete online shopping experience. The frontend is built with React and styled with modern CSS, while the backend uses Node.js with Express for API development. MongoDB serves as the database with proper indexing for optimal performance.",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "CSS3", "JavaScript"],
      year: "2024",
      status: "completed",
      image: "/api/placeholder/400/250",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/mellalrida/ecommerce-platform",
      features: [
        "User registration and authentication system",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history",
        "Responsive design for all devices",
        "Email notifications for orders"
      ],
      challenges: "The main challenges were implementing secure payment processing, optimizing database queries for large product catalogs, and ensuring responsive design across different screen sizes. I solved these by implementing proper validation, database indexing, and using CSS Grid and Flexbox for layouts.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Homepage with featured products"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Product detail page"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Admin dashboard"
        }
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      fullDescription: "This task management application helps teams organize their work efficiently. Built with React and Socket.io for real-time updates, it features an intuitive Kanban board interface with drag-and-drop functionality.",
      category: "frontend",
      technologies: ["React", "TypeScript", "Socket.io", "Tailwind CSS", "React DnD", "Context API"],
      year: "2024",
      status: "completed",
      image: "/api/placeholder/400/250",
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/mellalrida/task-manager",
      features: [
        "Kanban board with drag-and-drop functionality",
        "Real-time collaboration with Socket.io",
        "Team member assignment and notifications",
        "Project categorization and filtering",
        "Deadline tracking and reminders",
        "Progress analytics and reporting",
        "Dark/light theme support",
        "Offline functionality with sync"
      ],
      challenges: "Implementing real-time updates while maintaining performance was challenging. I used Socket.io for real-time communication and optimized re-renders using React.memo and useMemo hooks.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Kanban board view"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Task details modal"
        }
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard API",
      description: "A RESTful API service that aggregates weather data from multiple sources and provides detailed weather analytics and forecasts.",
      fullDescription: "This weather API service aggregates data from multiple weather services to provide comprehensive weather information. Built with Node.js and Express, it features caching, rate limiting, and detailed analytics.",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "Docker", "AWS", "OpenWeather API"],
      year: "2024",
      status: "completed",
      image: "/api/placeholder/400/250",
      liveUrl: "https://api.weather-dashboard.com",
      githubUrl: "https://github.com/mellalrida/weather-api",
      features: [
        "RESTful API with comprehensive endpoints",
        "Data aggregation from multiple weather services",
        "Redis caching for improved performance",
        "Rate limiting and API key authentication",
        "Historical weather data analysis",
        "Weather alerts and notifications",
        "Docker containerization",
        "Comprehensive API documentation"
      ],
      challenges: "Managing data from multiple APIs while ensuring consistency and handling rate limits was complex. I implemented a smart caching strategy and fallback mechanisms to ensure reliable service.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "API documentation"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Analytics dashboard"
        }
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js, featuring dark/light themes, smooth animations, and optimized performance.",
      fullDescription: "This portfolio website showcases my work and skills with a modern, responsive design. Built with Next.js for optimal performance and SEO, featuring smooth animations and a clean user interface.",
      category: "frontend",
      technologies: ["Next.js", "React", "CSS3", "JavaScript", "Vercel"],
      year: "2024",
      status: "completed",
      image: "/api/placeholder/400/250",
      liveUrl: "https://mellalrida.com",
      githubUrl: "https://github.com/mellalrida/portfolio",
      features: [
        "Responsive design for all devices",
        "Dark and light theme support",
        "Smooth scroll animations",
        "Optimized images and performance",
        "SEO optimization",
        "Contact form with validation",
        "Blog section with CMS integration",
        "Progressive Web App (PWA) features"
      ],
      challenges: "Achieving smooth animations while maintaining performance was key. I used CSS transforms and optimized images to ensure fast loading times across all devices.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Homepage hero section"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Projects showcase"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Contact section"
        }
      ]
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "An interactive data visualization dashboard built with D3.js and React, featuring real-time charts and comprehensive analytics.",
      fullDescription: "This data visualization dashboard provides interactive charts and analytics for business intelligence. Built with D3.js for custom visualizations and React for component management.",
      category: "data",
      technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Chart.js", "WebSocket"],
      year: "2023",
      status: "completed",
      image: "/api/placeholder/400/250",
      liveUrl: "https://example-dashboard.com",
      githubUrl: "https://github.com/mellalrida/data-dashboard",
      features: [
        "Interactive D3.js visualizations",
        "Real-time data updates via WebSocket",
        "Multiple chart types and filters",
        "Export functionality (PDF, CSV, PNG)",
        "Responsive design for mobile devices",
        "User role-based access control",
        "Custom dashboard builder",
        "Performance optimized for large datasets"
      ],
      challenges: "Handling large datasets while maintaining smooth interactions was challenging. I implemented virtual scrolling and data pagination to ensure optimal performance.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Main dashboard view"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Interactive charts"
        }
      ]
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description: "A React Native fitness tracking app with workout plans, progress tracking, and social features.",
      fullDescription: "This mobile fitness application helps users track their workouts, follow fitness plans, and connect with other fitness enthusiasts. Built with React Native for cross-platform compatibility.",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "React Navigation", "AsyncStorage"],
      year: "2023",
      status: "in-progress",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/mellalrida/fitness-app",
      features: [
        "Workout tracking and timer",
        "Custom workout plan builder",
        "Progress photos and measurements",
        "Social features and challenges",
        "Nutrition tracking integration",
        "Offline mode support",
        "Push notifications for reminders",
        "Integration with health apps"
      ],
      challenges: "Ensuring smooth performance on various mobile devices while managing complex state was challenging. I used Redux for state management and optimized components for better performance.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Workout tracking screen"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Progress dashboard"
        }
      ]
    },
    {
      id: 7,
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
      fullDescription: "This AI content generator uses machine learning to help users create various types of content quickly and efficiently. Built with Python and integrated with modern AI APIs.",
      category: "ai",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL", "Redis", "Docker"],
      year: "2024",
      status: "planning",
      image: "/api/placeholder/400/250",
      features: [
        "Multiple content type generation",
        "Custom tone and style settings",
        "Content optimization suggestions",
        "Plagiarism checking integration",
        "Team collaboration features",
        "Content scheduling and publishing",
        "Analytics and performance tracking",
        "Multi-language support"
      ],
      challenges: "Integrating AI APIs while ensuring content quality and managing costs effectively. Planning to implement smart caching and content optimization algorithms.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Content generation interface"
        }
      ]
    },
    {
      id: 8,
      title: "Blockchain Voting System",
      description: "A secure voting system built on blockchain technology ensuring transparency and immutability of votes.",
      fullDescription: "This blockchain-based voting system provides a secure and transparent way to conduct elections. Built with Solidity smart contracts and a React frontend.",
      category: "blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "Metamask", "Truffle", "IPFS"],
      year: "2023",
      status: "completed",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/mellalrida/blockchain-voting",
      features: [
        "Smart contract-based voting logic",
        "Transparent vote counting",
        "Voter identity verification",
        "Immutable voting records",
        "Real-time results dashboard",
        "Multi-candidate support",
        "Mobile-friendly interface",
        "Audit trail functionality"
      ],
      challenges: "Ensuring security and gas optimization while maintaining usability was complex. Implemented efficient smart contracts and thorough testing procedures.",
      screenshots: [
        {
          url: "/api/placeholder/300/200",
          caption: "Voting interface"
        },
        {
          url: "/api/placeholder/300/200",
          caption: "Results dashboard"
        }
      ]
    }
  ];

  return <Projects assets={assets} theme={theme} projects={projectsData} />;
}