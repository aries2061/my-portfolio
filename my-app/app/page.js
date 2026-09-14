"use client";

import { useState } from "react";
import "./globals.css";

const skills = [
  "PHP", "Laravel", ".NET Core", "Python", "TypeScript", "React",
  "React Native", "Node.js", "Next.js", "Express.js", "Tailwind CSS",
  "Bootstrap", "MySQL", "MongoDB", "GraphQL", "Git", "Bitbucket",
  "JIRA", "Moodle", "AWS", "DigitalOcean", "Google Cloud Platform", "Linux"
];

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["impact", "Impact"],
  ["contact", "Contact"],
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">AT</span>
          <span>AUNG THURA</span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="mailto:aungthura.bece@gmail.com" onClick={closeMenu}>
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FULLSTACK DEVELOPER <span>|</span> DIGITAL SOLUTIONS SPECIALIST</p>
          <h1>Hi, I&apos;m <span>Aung Thura</span>.</h1>
          <h2>Building practical digital solutions that create measurable impact.</h2>
          <p className="hero-text">
            Results-driven software developer experienced in full-stack development,
            mobile applications, API integration, automation, and cloud deployment.
            I build scalable solutions that improve operations, digital access, and user experience.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#impact">View My Work <span>→</span></a>
            <a className="btn secondary" href="/AungThura_FullStack_CV.pdf" download>
              Download CV <span>↓</span>
            </a>
          </div>

          <div className="hero-contact">
            <a href="mailto:aungthura.bece@gmail.com">✉ aungthura.bece@gmail.com</a>
            <a href="tel:+66814473616">☎ +66 814473616</a>
            <span>● Huai Khwang, Bangkok, Thailand</span>
          </div>

          <div className="social-row">
            <a href="https://www.linkedin.com/in/aung-thura-atr" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://wa.me/+66814473616" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-badge">Bangkok, Thailand</div>
          {/* Professional headshot of Aung Thura. */}
          <img
            src="/headshot-placeholder.png"
            alt="Professional headshot of Aung Thura"
            className="hero-photo"
          />
          <div className="photo-card">
            <strong>Fullstack Developer</strong>
            <span>Web • Mobile • API • Cloud</span>
          </div>
        </div>
      </section>

      <section className="stats section-shell" aria-label="Career highlights">
        <article><strong>50%</strong><span>Faster workflows</span><small>with custom CRM</small></article>
        <article><strong>40%</strong><span>Cost reduction</span><small>vs. third-party platforms</small></article>
        <article><strong>10K+</strong><span>Daily API requests</span><small>handled reliably</small></article>
        <article><strong>2019+</strong><span>Professional journey</span><small>software & digital solutions</small></article>
      </section>

      <section className="section section-shell split" id="about">
        <div>
          <p className="section-kicker">ABOUT ME</p>
          <h2 className="section-title">I build technology around real operational needs.</h2>
          <p className="body-copy">
            My work spans custom CRM systems, cross-platform mobile applications, RESTful APIs,
            learning platforms, automation tools, and cloud deployment. I have also led Agile teams,
            mentored junior developers, and delivered systems for low-connectivity and remote environments.
          </p>
          <a href="#contact" className="text-link">Get in touch →</a>
        </div>

        <div className="strength-list">
          <article>
            <Icon>⌘</Icon>
            <div><strong>Full-Stack Development</strong><span>Web, mobile, backend APIs and integrations</span></div>
          </article>
          <article>
            <Icon>☁</Icon>
            <div><strong>Cloud & DevOps</strong><span>AWS, DigitalOcean, GCP and Linux environments</span></div>
          </article>
          <article>
            <Icon>◎</Icon>
            <div><strong>Team Leadership</strong><span>Agile delivery, mentoring and technical guidance</span></div>
          </article>
          <article>
            <Icon>⚙</Icon>
            <div><strong>Problem Solving</strong><span>Turning business needs into maintainable systems</span></div>
          </article>
        </div>
      </section>

      <section className="section alt" id="skills">
        <div className="section-shell">
          <p className="section-kicker">TECHNICAL EXPERTISE</p>
          <div className="section-heading-row">
            <h2 className="section-title">Technologies I Work With</h2>
            <span>Always learning. Always building.</span>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-shell" id="experience">
        <p className="section-kicker">PROFESSIONAL EXPERIENCE</p>
        <div className="section-heading-row">
          <h2 className="section-title">My Career Journey</h2>
          <span>Building. Learning. Growing.</span>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">2024 — Present</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Digital Solutions Specialist</h3>
              <h4>PROXIMITY DESIGNS — Yangon, Myanmar</h4>
              <ul>
                <li>Architected and delivered a custom CRM using Next.js, MySQL and Bootstrap, accelerating workflows by 50% and reducing third-party platform costs by 40%.</li>
                <li>Engineered scalable, secure RESTful APIs using .NET and MySQL, handling 10K+ daily requests.</li>
                <li>Built an offline-first React Native Android application with automated data synchronization for rural teams.</li>
                <li>Deployed and maintained web applications across AWS and DigitalOcean.</li>
                <li>Developed Python automation and integration tools for the Data Management team.</li>
              </ul>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">2019 — 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Senior IT Developer</h3>
              <h4>ZABAI — Yangon, Myanmar</h4>
              <ul>
                <li>Architected and customized Moodle-based LMS platforms with proprietary features that improved user retention and supported new client acquisition.</li>
                <li>Developed RESTful APIs using PHP for Android and iOS applications.</li>
                <li>Led development teams through the SDLC using Agile Scrum methodologies.</li>
                <li>Mentored junior developers and interns to improve onboarding and code quality.</li>
                <li>Designed offline-capable e-learning infrastructure for air-gapped and remote environments.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt" id="impact">
        <div className="section-shell">
          <p className="section-kicker">SELECTED IMPACT</p>
          <div className="section-heading-row">
            <h2 className="section-title">Solutions That Delivered Results</h2>
            <span>Technology for people, not just code.</span>
          </div>

          <div className="project-grid">
            <article>
              <span className="project-no">01</span>
              <h3>Custom CRM Platform</h3>
              <p>Next.js, MySQL and Bootstrap application that accelerated organizational workflows by 50% while reducing third-party platform costs by 40%.</p>
              <div className="tags"><span>Next.js</span><span>MySQL</span><span>Bootstrap</span></div>
            </article>
            <article>
              <span className="project-no">02</span>
              <h3>Offline-First Mobile App</h3>
              <p>React Native Android application designed for internal teams operating in low-connectivity rural areas, with automated synchronization.</p>
              <div className="tags"><span>React Native</span><span>Offline-first</span><span>Sync</span></div>
            </article>
            <article>
              <span className="project-no">03</span>
              <h3>Scalable REST APIs</h3>
              <p>Secure .NET and MySQL APIs supporting web and mobile applications while handling more than 10,000 requests per day.</p>
              <div className="tags"><span>.NET</span><span>MySQL</span><span>REST</span></div>
            </article>
            <article>
              <span className="project-no">04</span>
              <h3>Offline Learning Infrastructure</h3>
              <p>Localized Moodle and progressive web solutions deployed on lightweight physical infrastructure for air-gapped and remote environments.</p>
              <div className="tags"><span>Moodle</span><span>PWA</span><span>Linux</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-shell credentials">
        <article>
          <p className="section-kicker">EDUCATION</p>
          <h3>Bachelor of Engineering<br />(Computer Engineering)</h3>
          <p>University of Technology<br />(Yatanarpon Cyber City)</p>
          <p>Pyin Oo Lwin, Myanmar</p>
          <strong>2019 • GPA 4.33/5.0</strong>
        </article>

        <article>
          <p className="section-kicker">CERTIFICATIONS</p>
          <ul className="check-list">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>AWS Cloud Technical Essentials</li>
            <li>MongoDB Node.js Developer Path</li>
            <li>Scrum Certification for Web Developer</li>
          </ul>
        </article>

        <article>
          <p className="section-kicker">LANGUAGES</p>
          <div className="language">
            <strong>English</strong><span>Working Proficiency</span><div><i style={{width:"78%"}}></i></div>
          </div>
          <div className="language">
            <strong>Burmese</strong><span>Native</span><div><i style={{width:"100%"}}></i></div>
          </div>
        </article>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="section-kicker">GET IN TOUCH</p>
          <h2>Let&apos;s Build Something Together</h2>
          <p>I&apos;m open to discussing software opportunities, useful products, and digital solutions that create meaningful impact.</p>
        </div>
        <div className="contact-list">
          <a href="mailto:aungthura.bece@gmail.com">✉ aungthura.bece@gmail.com</a>
          <a href="tel:+66814473616">☎ +66 814473616</a>
          <span>● Huai Khwang, Bangkok, Thailand</span>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/aung-thura-atr" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://wa.me/+66814473616" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <div>
            <strong className="footer-brand">AT <span>AUNG THURA</span></strong>
            <p>Fullstack Developer | Digital Solutions Specialist</p>
            <p>Building technology for practical impact.</p>
          </div>
          <div className="footer-nav">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <small>© {new Date().getFullYear()} Aung Thura. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}
