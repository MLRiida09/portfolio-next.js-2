//profile.jpg:
import profile from '../asstes/profile.jpg';

//nav bar icon: 
import house from '../asstes/house.svg';
import house_dark from '../asstes/house-dark.svg';
import cap from '../asstes/graduation-cap.svg';
import cap_dark from '../asstes/graduation-cap_dark.svg';
import blog from '../asstes/newspaper.svg';
import blog_dark from '../asstes/newspaper-dark.svg';
import project from '../asstes/project.svg';
import project_dark from '../asstes/project-dark.svg';

//dark & light mode icon : 
import sun from '../asstes/sun-solid.svg';
import sun_dark from '../asstes/sun-solid_dark.svg';
import moon from '../asstes/moon-solid.svg';
import moon_dark from '../asstes/moon-solid-dark.svg';

//contact icons :
import mail from '../asstes/mail.svg';
import mail_dark from '../asstes/mail-dark.svg';
import phone from '../asstes/phone.svg';
import phone_dark from '../asstes/phone-dark.svg';
import location from '../asstes/earth-africa-solid.svg';
import location_dark from '../asstes/earth-africa-solid.svg';


export const asstes ={
    profile ,
    house,
    house_dark,
    cap,
    cap_dark, 
    blog ,
    blog_dark,
    project, 
    project_dark,
    sun,
    sun_dark,
    moon ,
    moon_dark,
    mail,
    mail_dark,
    phone,
    phone_dark,
    location,
    location_dark
}

export const projects = [
    {
        title: 'Frontend project',
        description:'Modern responsive website built with React.js and Next.js, featuring sleek design, smooth performance, and interactive animations. ',
        bgImage: '/....',
    },
    {
        title: 'Geo based app',
        description:'Location-based mobile app with real-time GPS, interactive maps, geofencing, offline support, and smart notifications.',
        bgImage: '/....',
    },
    {
        title: 'AI-Powered Web Design',
        description:'AI-powered web platform with automated design, smart content optimization, and personalized experiences using machine learning',
        bgImage: '/.....',
    },
    {
        title: 'UI/UX designing',
        description:'UI/UX design project with user research, wireframing, prototyping, and testing, focused on intuitive, accessible, and branded user experiences.',
        bgImage: '/....',
    },
    {
        title: 'E-commerce Platform',
        description:'Full-stack e-commerce app built with React, Node.js, and MongoDB, featuring secure payments, inventory, order tracking, admin dashboard, and responsive design..',
        bgImage: '/....',
    },
    {
        title: 'Dashboard Analytics',
        description:'Interactive real-time analytics dashboard with customizable charts, advanced filters, data export, and responsive design for business intelligence.',
        bgImage: '/....',
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

