import {FaPhoneAlt, FaFigma, FaEnvelope, FaMapMarkerAlt, FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaNext, FaBootstrap, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {SiTailwindcss, SiWebflow, SiNextdotjs, SiPhp, SiMysql,} from 'react-icons/si'

export const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Service",
        path: "/service"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Project",
        path: "/project"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]
export const contactInfo = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+234) 906 159 0498"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "inalegwusam2@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "FCT, Abuja, Nigeria"
    },
    {
        icon: <FaGithub />,
        title: "Github",
        description: "https://github.com/inidash"
        
    }
]

export const aboutMe = {
    title: "About Me",
    description: "Just a piece of me.",
    items: [
        {
            fieldName: 'Name',
            fieldValue: "Samson Inalegwu Emmanuel"
        },
        {
            fieldName: 'Phone',
            fieldValue: "(+234) 906 159 0498"
        },
        {
            fieldName: 'Experience',
            fieldValue: "5+ years"
        },
        {
            fieldName: 'Skype',
            fieldValue: "Samson Inalegwu Emmanuel"
        },
        {
            fieldName: 'Nationality',
            fieldValue: "Nigerian"
        },
        {
            fieldName: 'Email',
            fieldValue: "inalegwusam2@gmail.com"
        },
        {
            fieldName: 'Freelance',
            fieldValue: "Available"
        },
        {
            fieldName: 'Languages',
            fieldValue: "Idoma, English & Hausa"
        }

    ]
}

export const experience = {
    icon: "image",
    title: "My Experience",
    description: "Developed and maintained user-facing features using modern front end technologies, sometimes involved in mobile app development, developed a web-based investment platform user both front & back end technologies, developed a web-based hospital management system using both front & backend technologies, internship experience with a long list of projects etc.",
    items: [
        {
            company: "Wrahi Nigeria",
            position: "Full stack Developer",
            duration: "2024"
        },
        {
            company: "Geotice Services Limited",
            position: "Front-end Developer",
            duration: "2024"
        },
        {
            company: "The Charts Investment",
            position: "Full stack Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Godkelv Construction Company",
            position: "Front-end Freelance Developer",
            duration: "2023"
        },
        {
            company: "Apex Specialist Hospital",
            position: "Full stack Developer",
            duration: "2021"
        },
        {
            company: "5AM Technologies",
            position: "Full stack Developer Intern",
            duration: "2019 - 2020"
        }
    ]
}

export const education = {
    icon: "image",
    title: "My Education",
    description: "I ",
    items: [
        {
            institution: "ALX Africa",
            degree: "AI Essentials",
            duration: "Feb 2024 - April 2024"
        },
        {
            institution: "Abubarkar Tafawa Balewa University",
            degree: "B.Tech Mgt. Information Tech.",
            duration: "2016 - 2021"
        },
        {
            institution: "5AM Technologies",
            degree: "Certified Full stack Developer",
            duration: "2019 - 2020"
        },
        
    ]
}

export const skills = {
    title: "My Skills",
    description: "I am a Tech enthusiast with a passion for development. I constantly try to improve my tech stack",
    items: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaBootstrap />,
            name: "bootstrap",
        },
        {
            icon: <FaReact />,
            name: "React js",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwindcss",
        },
        {
            icon: <SiMysql />,
            name: "My Sql",
        },
        {
            icon: <SiPhp />,
            name: "PHP",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiWebflow />,
            name: "Webflow",
        }
        
    ]
}
export const socialMedia = [
    {
        icons: <FaGithub />,
        path: "https://www.gitub.com/inidash"
    },
    {
        icons: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/samson-emmanuel-4725b4296"
    },
    {
        icons: <FaTwitter />,
        path: "https://www.gitub.com/inidash"
    },
]

export const services = [
    {
        num: '01',
        title: "Front end Web Developer",
        description: "I have been in the business of front end development for over 4 years and i have always put my client satisfaction in the fore front of my design",
        href: ""
    },
    {
        num: '02',
        title: "Back end Web Developer",
        description: "I have been coding back end logics for over 3 years. I am familiar with core PHP, MySql, SANITY, and Next.js. I have always put my client satisfaction in the fore front of my design",
        href: ""
    },
    {
        num: '03',
        title: "Mobile App Developer",
        description: "I have good experience with React.js and ReactNative. i have worked on great projects using ReactNative",
        href: ""
    },

    {
        num: '04',
        title: "UI/UX Designer",
        description: "I have Good experience using Figma in development.",
        href: ""
    },
    {
        num: '05',
        title: "SEO",
        description: "Ofcourse SEO  & performance optimization is what makes a developer complete",
        href: ""
    },
    {
        num: '07',
        title: "Management",
        description: "I have held managerial positions in organizations that has made me to value time management and  organization's goals and objectives.",
        href: ""
    }
]

export const stats = [
    {
        num: 5,
        text: 'Years of experience',
        
    },
    {
        num: 9,
        text: 'Technologies mastered',
    },
    {
        num: 10,
        text: 'projects completed',
    }
]

export const projects =[
    {
        num: "01",
        title: "Geotice services limited",
        category: "frontend",
        description: "Designed and developed the company's website and subdomain, includes homepage, about-page, services-page, contact-page, signup-page login-page, subdomain, etc",
        stack: [
            {name: "HTML5"},
            {name: "CSS"},
            {name: "Bootstrap"},
            {name: "JavaScript"},
        ],
        video: "/assets/Screenshots/geotice.mp4",
        github: ""
    },
    {
        num: "02",
        title: "Wrahi nigeria",
        category: "full stack",
        description: "Designed and development the company's website with some backend functionality. Includes homepage, about-page, project-page, dynamic blog-page,contact-page, signup page, login-page user/admin dashboard, etc",
        stack: [
            {name: "HTML"},
            {name: "Tailwindcss"},
            {name: "JavaScript"},
            {name: "PHP"},
            {name: "MySql"},
        ],
        video: "/assets/Screenshots/wrahinigeria.mp4",
        github: ""
    },
    {
        num: "03",
        title: "The Charts Investment Nigeria Limited",
        category: "front end",
        description: "Designed and developed the company's website. Includes homepage, about-page, investment-plan page, contact-page, signup-page, signin-page, etc",
        stack: [
            {name: "HTML"},
            {name: "CSS"},
            {name: "Bootstrap"},
            {name: "JavaScript"},
            {name: "PHP"},
            {name: "MySql"},
        ],
        video: "/assets/Screenshots/chart.mp4",
        github: ""
    },
    {
        num: "04",
        title: "The Charts Investment Limited",
        category: "full stack",
        description: "Designed and development the company's user investment management system with a lot of backend functionalities. includes user dashboard, deposit page, withdrawal page, investment page profile page, password reset page, etc",
        stack: [
            {name: "HTML"},
            {name: "CSS"},
            {name: "Bootstrap"},
            {name: "JavaScript"},
            {name: "PHP"},
            {name: "MySql"},
        ],
        video: "/assets/Screenshots/chart-user.mp4",
        github: ""
    },
    {
        num: "05",
        title: "The Charts Investment Limited",
        category: "full stack",
        description: "Designed and development the company's admin investment management system with a lot of backend functionalities. includes admin dashboard, users page, investors page, plan page, referrals page, etc.",
        stack: [
            {name: "HTML"},
            {name: "CSS"},
            {name: "Bootstrap"},
            {name: "JavaScript"},
            {name: "PHP"},
            {name: "MySql"},
        ],
        video: "/assets/Screenshots/chart-admin.mp4",
        github: ""
    },
    {
        num: "06",
        title: "Restaurant webpage",
        category: "front end",
        description: "A simple restaurant webpage inspired by one of the leading on eatries around the world, indludes about section, custom image carousel, background video etc",
        stack: [
            {name: "React"},
            {name: "CSS"},
        ],
        video: "/assets/Screenshots/restaurant.mp4",
        github: "https://github.com/inidash/restaurant-website"
    },
    {
        num: "07",
        title: "apple IPhone webpage",
        category: "front end",
        description: "A simple apple Iphone webpage inspired by apple inc. includes custom video carousel slide, 3D image interaction, Gsap animations",
        stack: [
            {name: "React"},
            {name: "CSS"},
            {name: "Tailwindcss"},
            {name: "Three Js"},
            {name: "Gsap Animation"},
        ],
        video: "/assets/Screenshots/apple-record.mp4",
        github: "https://github.com/inidash/iPhone-16"
    },
    {
        num: "08",
        title: "Webflow Ecommerce Store",
        category: "full stack",
        description: "An ecommerce store designed with the webflow ecommerce template. Includes homepage, product page, add to cart, categories page checkout page, order page etc.",
        stack: [
            {name: "HTML"},
            {name: "CSS"},
            {name: "JavaScript"},
            {name: "Webflow Ecommerce CMS"},
        ],
        video: "/assets/Screenshots/ecommerce.mp4",
        github: ""
    }
]

export const approach = [
    {
        title: "planning & strategy",
        description: "I collaborate to map out your website's goals, target audience, and key functionalities. i discuss things like site structure, navigation and content requirement"
    },
    {
        title: "development & progress update",
        description: "Once we arrive at a plan i cue my playlist and dive into coding. From initial sketches to polished code, i keep you updated every step of the way."
    },
    {
        title: "development & launch",
        description: "This is where the magic happens! Based on the approved design, i will translate everything intoo functional code, building your website from ground up."
    }
]