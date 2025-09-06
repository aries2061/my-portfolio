'use client';
import Image from "next/image";

import React, { useState, useEffect, JSX } from 'react';
import TextType from '@components/TextType';

// This is a single-file Next.js application that renders a portfolio
// based on the provided resume content.
// It uses Tailwind CSS for styling and react-icons for icons.
// All components are defined within this single file.

const portfolioData = {
  name: "Aung Thura",
  title: "Full Stack Developer",
  summary: "I am a Full Stack Developer with extensive experience in building scalable, high-quality web applications using modern JavaScript frameworks and technologies. With hands-on expertise in the MERN stack Node.js, Express.js, React/Next.js-and proficiency in MySQL and MongoDB, I have successfully developed and deployed CRM systems, learning platforms, and content management solutions. My background includes integrating RESTful APIs and microservices, deploying applications on AWS, Digital Ocean, and GCP, and implementing responsive frontends with HTML5, CSS3, Bootstrap, and Tailwind CSS. I bring strong problem-solving skills, a passion for clean and efficient code, and proven experience leading Agile teams to deliver impactful software solutions.",
  contact: {
    phone: "+66 814473616",
    email: "aungthura.bece@gmail.com",
    linkedin: "https://www.linkedin.com/in/aung-thura-atr",
    location: "Bangkok, Thailand"
  },
  technicalExpertise: {
    frontend: ["Node.js", "Next.js", "TypeScript", "JavaScript", "jQuery", "CSS", "Bootstrap", "Tailwind CSS"],
    backend: ["Express.js", "Python", "PHP", "Go"],
    databases: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "GraphQL"],
    mobile: ["React Native"],
    versionControl: ["Git", "Bitbucket", "Sourcetree"],
    platforms: ["JIRA", "Moodle LMS", "WordPress", "Appsheet", "Microsoft 365"],
    cloud: ["AWS", "Digital Ocean", "Google Cloud Platform", "Linux"]
  },
  workExperience: [
    {
      title: "Digital Solutions Specialist",
      company: "Proximity Designs",
      years: "2024 - Present",
      bullets: [
        "Developing CRM web application using Next.js, Tailwind CSS, Bootstrap, to enhance user interaction and experience",
        "Developing fast and robust RESTFUL APIs using .NET, MySQL",
        "Developing an Android App using React Native for the organization",
        "Deploying web applications on AWS and Digital Ocean, ensuring scalability and reliability.",
        "Developing Python programs for seamless data syncing with Zoho Inventory System and Data Management",
        "Provided customer support for Zoho Inventory System and CRM, resolving technical issues efficiently"
      ]
    },
    {
      title: "Senior IT Developer",
      company: "Zabai Myanmar",
      years: "2019-2023",
      bullets: [
        "Developed and integrated Learning Management Systems (LMS) based on Moodle, improving educational delivery.",
        "Built APIs for Android and iOS applications, enabling cross-platform functionality.",
        "Led development team using Agile (Scrum) methodology, increasing project delivery efficiency.",
        "Trained junior developers and interns, fostering skill development and team growth.",
        "Innovated internet-less offline e-learning servers, expanding access to education in remote areas."
      ]
    },
    {
      title: "Web Developer",
      company: "Hello World IT Solution",
      years: "2018-2019",
      bullets: [
        "Developed CMS websites for organizations, streamlining content management.",
        "Created Library Management System and Student Registration/Management web applications, improving operational efficiency."
      ]
    },
    {
      title: "Web Developer & Mentor",
      company: "University of Technology(Yatanarpon Cyber City)",
      years: "2017-2019",
      bullets: [
        "Developed the university website, enhancing online presence and accessibility.",
        "Built web-based online voting systems for project shows and activities, improving engagement.",
        "Trained junior developers and IoT engineering students, building a skilled technical team."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      school: "University of Technology (Yatanarpon Cyber City), Myanmar"
    }
  ],
  certifications: [
    "MongoDB Node.js Developer Path",
    "Scrum Certification for Web Developers",
    "JIRA Fundamentals",
    "JIRA Service Management Fundamentals",
    "Confluence Fundamentals",
    "Google Cloud Essentials"
  ]
};

const iconStyle = "w-6 h-6 text-blue-400";
const inlineSvgStyle = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
};

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.93-4.93A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 2.18 15.28 15.28 0 0 0 .79 2.84 2 2 0 0 1-.72 2.13l-1.95 1.95a15.26 15.26 0 0 0 4.93 4.93l1.95-1.95a2 2 0 0 1 2.13-.72 15.28 15.28 0 0 0 2.84.79A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <path d="M22 6l-10 7-10-7"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
);

const LaptopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.95 1.45H3.67a1 1 0 0 1-.95-1.45L4 16m2 0h12"></path>
    </svg>
);

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <rect x="3" y="1" width="18" height="22" rx="2" ry="2"></rect>
        <line x1="12" y1="22" x2="12" y2="11"></line>
        <path d="M17 6h3"></path>
        <path d="M17 10h3"></path>
        <path d="M17 14h3"></path>
        <path d="M17 18h3"></path>
        <path d="M7 6h3"></path>
        <path d="M7 10h3"></path>
        <path d="M7 14h3"></path>
        <path d="M7 18h3"></path>
    </svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M21.42 12.42a2 2 0 0 0-.25-2.22l-8.4-8.4a2 2 0 0 0-2.22-.25 2.14 2.14 0 0 0-.25.25L3.83 10.14a2 2 0 0 0 0 2.83l7.35 7.35a2 2 0 0 0 2.83 0l8.4-8.4a2 2 0 0 0 .25-2.22z"></path>
        <line x1="14.5" y1="12.5" x2="12" y2="15"></line>
        <line x1="14.5" y1="12.5" x2="18.5" y2="8.5"></line>
    </svg>
);

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} viewBox="0 0 24 24" style={inlineSvgStyle}>
        <path d="M12 21.6c-.3 0-.6-.1-.9-.2-2.1-1.1-3.6-2.9-4.8-5-1.4-2.5-1.6-4.9-.6-6.4 1.2-1.8 3.5-2.6 6.5-2.6s5.3.8 6.5 2.6c1 1.5.8 3.9-.6 6.4-1.2 2.1-2.7 3.9-4.8 5-.3.1-.6.2-.9.2z"></path>
        <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
        <path d="M16.5 4.5l-2 2"></path>
        <path d="M7.5 4.5l2 2"></path>
        <path d="M4.5 16.5l2-2"></path>
        <path d="M19.5 16.5l-2-2"></path>
    </svg>
);

const SectionHeader = ({ title, icon: Icon }: { title: string; icon?: () => JSX.Element }) => (
  <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-6 text-gray-100">
    {Icon && <Icon />}
    {title}
  </h2>
);

const ExperienceItem = ({ title, company, years, bullets }: { title: string; company: string; years: string; bullets: string[] }) => (
  <div className="mb-8 p-6 bg-gray-800 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
      <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
      <span className="text-sm font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
        {years}
      </span>
    </div>
    <p className="text-blue-400 font-medium mb-4">{company}</p>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      {bullets.map((bullet, index) => (
        <li key={index} className="pl-2">{bullet}</li>
      ))}
    </ul>
  </div>
);

const SkillPill = ({ skill }: { skill: string }) => (
  <span className="bg-blue-900 text-blue-200 text-sm font-medium px-4 py-2 rounded-full border border-blue-700 hover:bg-blue-800 transition-colors duration-200">
    {skill}
  </span>
);

export default function Home() {
  // Use a simple state to handle any future interactive elements, if needed.
  const [activeSection, setActiveSection] = useState('summary');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-8 md:p-12">
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #111827;
        }
      `}</style>
      <div className="container mx-auto max-w-5xl">
        <header className="text-center py-12 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 mb-2">
            <TextType 
              text={[portfolioData.name]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="|"
            />
          </h1>
          <div className="text-xl sm:text-2xl font-light text-gray-300 mt-3">
            <TextType 
              text={[portfolioData.title]}
              typingSpeed={10}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="|"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-300">
            <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
              <PhoneIcon />
              <span className="hidden sm:inline">{portfolioData.contact.phone}</span>
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
              <MailIcon />
              <span className="hidden sm:inline">{portfolioData.contact.email}</span>
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
              <LinkedinIcon />
              <span className="hidden sm:inline">LinkedIn Profile</span>
            </a>
          </div>
        </header>

        <main className="space-y-16">
          <section id="summary" className="p-6 bg-gray-800 border border-gray-700">
            <SectionHeader title="Summary" icon={FileTextIcon} />
            <p className="text-lg text-gray-300 leading-relaxed">{portfolioData.summary}</p>
          </section>

          <section id="technical-expertise" className="p-6 bg-gray-800 border border-gray-700">
            <SectionHeader title="Technical Expertise" icon={LaptopIcon} />
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">FrontEnd Development</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.technicalExpertise.frontend.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">BackEnd Development</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.technicalExpertise.backend.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.technicalExpertise.databases.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.technicalExpertise.cloud.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">Other Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.technicalExpertise.mobile.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                  {portfolioData.technicalExpertise.versionControl.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                  {portfolioData.technicalExpertise.platforms.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work-experience" className="p-6 bg-gray-800 border border-gray-700">
            <SectionHeader title="Work Experience" icon={BuildingIcon} />
            <div className="space-y-8">
              {portfolioData.workExperience.map((job, index) => (
                <ExperienceItem
                  key={index}
                  title={job.title}
                  company={job.company}
                  years={job.years}
                  bullets={job.bullets}
                />
              ))}
            </div>
          </section>

          <section id="education" className="p-6 bg-gray-800 border border-gray-700">
            <SectionHeader title="Education" icon={GraduationCapIcon} />
            <div className="space-y-4 text-gray-300">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h4 className="text-lg font-semibold text-gray-200">{edu.degree}</h4>
                  <p className="text-sm sm:text-base font-medium text-gray-400">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="p-6 bg-gray-800 border border-gray-700">
            <SectionHeader title="Certifications" icon={AwardIcon} />
            <ul className="list-none space-y-3 text-gray-300">
              {portfolioData.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-400 text-xl">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="text-center py-12 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aung Thura. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
