// public/assets/assets.js
//profile.jpg:
import profile from './profile.jpg';

//nav bar icon: 
import house from './house.svg';
import house_dark from './house-dark.svg';
import cap from './graduation-cap.svg';
import cap_dark from './graduation-cap_dark.svg';
import blog from './newspaper.svg';
import blog_dark from './newspaper-dark.svg';
import project from './project.svg';
import project_dark from './project-dark.svg';

//dark & light mode icon : 
import sun from './sun-solid.svg';
import sun_dark from './sun-solid_dark.svg';
import moon from './moon-solid.svg';
import moon_dark from './moon-solid-dark.svg';

//contact icons :
import mail from './mail.svg';
import mail_dark from './mail-dark.svg';
import phone from './phone.svg';
import phone_dark from './phone-dark.svg';
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
    location_dark
}

export const MyInfo = {
    name: "Mellal Rida",
    title: "Full-Stack Developer",
    description: "I am a graduate in Automation and Industrial Computing, with a deep interest in technology and software engineering. Over time, I have developed a strong passion for full-stack web development, allowing me to bring creative ideas to life through clean, scalable, and user-friendly applications. I focus on delivering modern digital solutions with attention to detail, performance, and user experience. Whether working on the frontend or backend, I aim to build reliable systems that solve real-world problems. I am always open to new challenges and continuously strive to grow both personally and professionally in the tech field."
};

export const projects = [
    {
        title: 'Frontend project',
        description: 'Modern responsive website built with React.js and Next.js, featuring sleek design, smooth performance, and interactive animations.',
        bgImage: '...', 
    },
    {
        title: 'Geo based app',
        description: 'Location-based mobile app with real-time GPS, interactive maps, geofencing, offline support, and smart notifications.',
        bgImage: '...', 
    },
    {
        title: 'AI-Powered Web Design',
        description: 'AI-powered web platform with automated design, smart content optimization, and personalized experiences using machine learning',
        bgImage: '..', 
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX design project with user research, wireframing, prototyping, and testing, focused on intuitive, accessible, and branded user experiences.',
        bgImage: '..', 
    },
    {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce app built with React, Node.js, and MongoDB, featuring secure payments, inventory, order tracking, admin dashboard, and responsive design.',
        bgImage: '..', 
    },
    {
        title: 'Dashboard Analytics',
        description: 'Interactive real-time analytics dashboard with customizable charts, advanced filters, data export, and responsive design for business intelligence.',
        bgImage: '..' 
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