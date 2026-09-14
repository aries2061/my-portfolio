import Image from "next/image";

const expertise = [
  [
    "window",
    "Frontend",
    "Clear interfaces. Thoughtful experiences.",
    "React · Next.js · TypeScript · Tailwind CSS · Bootstrap",
  ],
  [
    "database",
    "Backend",
    "Reliable logic behind every interaction.",
    "PHP · Laravel · .NET Core · Node.js · Express.js",
  ],
  [
    "phone",
    "Mobile",
    "Practical software for the real world.",
    "React Native · Android · Offline-first sync",
  ],
  [
    "cloud",
    "Cloud & Data",
    "From structured data to production.",
    "AWS · DigitalOcean · GCP · Linux · MySQL · MongoDB · REST · GraphQL",
  ],
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Icon({ name }) {
  const paths = {
    window: (
      <>
        <rect x="3" y="4" width="26" height="23" rx="2" />
        <path d="M3 10h26M8 7h1m3 0h1" />
      </>
    ),
    database: (
      <>
        <ellipse cx="16" cy="7" rx="11" ry="4" />
        <path d="M5 7v17c0 6 22 6 22 0V7M5 15c0 6 22 6 22 0" />
      </>
    ),
    phone: (
      <>
        <rect x="8" y="2" width="16" height="28" rx="3" />
        <path d="M13 6h6m-4 20h2" />
      </>
    ),
    cloud: (
      <path d="M9 25h15a6 6 0 0 0 1-12 9 9 0 0 0-17-3 7.5 7.5 0 0 0 1 15Z" />
    ),
  };
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
function CrmPreview() {
  return (
    <div className="crm-preview" aria-hidden="true">
      <aside className="crm-sidebar">
        <b>AT / CRM</b>
        {["Overview", "Contacts", "Workflows", "Reports", "Settings"].map(
          (item, i) => (
            <span key={item} className={i === 0 ? "selected" : ""}>
              {item}
            </span>
          ),
        )}
        <small>WORK, CONNECTED.</small>
      </aside>
      <div className="crm-main">
        <div className="crm-top">
          <span>Workspace / Overview</span>
          <span className="avatar">AT</span>
        </div>
        <h4>A clearer view of your work.</h4>
        <p>Your people, processes, and progress. Together.</p>
        <div className="crm-metrics">
          <div>
            <small>WORKFLOWS</small>
            <b>Connected</b>
            <span>One shared workspace</span>
          </div>
          <div>
            <small>OPERATIONS</small>
            <b>Simplified</b>
            <span>Built around your team</span>
          </div>
        </div>
        <div className="chart">
          <div>
            <b>Workflow activity</b>
            <span>Illustrative data</span>
          </div>
          <svg viewBox="0 0 500 160" fill="none">
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#1251d8" stopOpacity=".18" />
                <stop offset="1" stopColor="#1251d8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 40H500M0 80H500M0 120H500" stroke="#e8edf6" />
            <path
              d="M0 140 50 120 100 125 150 85 200 100 250 58 300 65 350 30 400 45 450 15 500 5V160H0Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 140 50 120 100 125 150 85 200 100 250 58 300 65 350 30 400 45 450 15 500 5"
              stroke="#124bda"
              strokeWidth="3"
            />
          </svg>
          <div className="chart-months">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
        <div className="crm-bottom">
          <span>
            <i /> Teams in sync
          </span>
          <span>Less friction. More focus.</span>
        </div>
      </div>
    </div>
  );
}
function MobilePreview() {
  return (
    <div className="mobile-preview" aria-hidden="true">
      <div className="preview-copy">
        Work anywhere.
        <br />
        Keep moving
        <br />
        forward.<span>DESIGNED FOR THE FIELD</span>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-status">
          9:41 <span>••• ▰</span>
        </div>
        <b>Fieldwork</b>
        <p>Your work travels with you.</p>
        <div className="sync">
          <i /> Ready to work offline
        </div>
        {[
          "Capture field data",
          "View saved records",
          "Sync when connected",
        ].map((t, i) => (
          <div className="phone-row" key={t}>
            <span>{["＋", "▤", "↻"][i]}</span>
            {t}
          </div>
        ))}
        <div className="phone-bottom">
          Home <span>Records</span> Profile
        </div>
      </div>
    </div>
  );
}
function ApiPreview() {
  return (
    <div className="api-preview" aria-hidden="true">
      <div className="preview-copy">
        Secure.
        <br />
        Scalable.
        <br />
        Built to connect.
      </div>
      <div className="api-diagram">
        <div className="cloud-node">
          <Icon name="cloud" />
          <span>CLOUD</span>
        </div>
        <div className="connector" />
        <div className="api-nodes">
          <span>WEB</span>
          <b>API</b>
          <span>DATA</span>
        </div>
      </div>
    </div>
  );
}
function ProjectDetails({ children }) {
  return (
    <details className="project-details">
      <summary>
        Behind the project <span aria-hidden="true">＋</span>
      </summary>
      <div>{children}</div>
    </details>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Aung Thura, home">
          <strong>AT</strong>
          <span>Aung Thura</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">
            Contact <Arrow />
          </a>
        </nav>
      </header>
      <main id="main" className="shell">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="location-dot" /> FULLSTACK DEVELOPER · BANGKOK,
              THAILAND
            </p>
            <h1>
              Digital products.
              <br />
              Built with purpose.
            </h1>
            <p className="hero-intro">
              I’m Aung Thura. I build reliable web, mobile,
              <br className="desktop-break" /> and cloud solutions that make
              work simpler.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">
                View selected work <span aria-hidden="true">→</span>
              </a>
              <a
                className="cv-link"
                href="/AungThura_FullStack_CV.pdf"
                download
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/images/concept1-sculpture.png"
              alt=""
              fill
              sizes="(max-width: 700px) 100vw, 42vw"
              priority
            />
            <span className="art-note">
              IDEAS.
              <br />
              SYSTEMS.
              <br />
              PEOPLE.
            </span>
            <span className="art-caption">
              A LITTLE STRUCTURE. A LOT OF POSSIBILITY.
            </span>
          </div>
        </section>
        <section className="stats" aria-label="Career highlights">
          {[
            ["6+", "Years of experience"],
            ["50%", "Faster CRM workflows"],
            ["40%", "Lower platform costs"],
            ["10k+", "Daily API requests"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>
        <section className="work-section" id="work">
          <span id="impact" className="anchor-alias" />
          <div className="section-heading">
            <h2 className="eyebrow">SELECTED WORK</h2>
            <p>Real problems. Practical solutions.</p>
          </div>
          <div className="project-grid">
            <article className="project featured">
              <div className="project-visual">
                <CrmPreview />
              </div>
              <div className="project-title">
                <h3>Custom CRM Platform</h3>
                <span className="project-number">01 /</span>
              </div>
              <p className="project-tech">Next.js / MySQL / Bootstrap</p>
              <p className="project-description">
                One purpose-built workspace. 50% faster workflows.
                <br />
                40% lower third-party platform costs.
              </p>
              <ProjectDetails>
                <p>
                  At Proximity Designs, I architected a custom CRM around
                  internal operational needs, bringing workflows into a shared
                  Next.js and MySQL application.
                </p>
                <p>
                  <strong>My role:</strong> Architecture and full-stack
                  development.
                </p>
              </ProjectDetails>
            </article>
            <div className="secondary-projects">
              <article className="project">
                <div className="project-visual">
                  <MobilePreview />
                </div>
                <div className="project-title">
                  <h3>Offline-first Field App</h3>
                  <span className="project-number">02 /</span>
                </div>
                <p className="project-tech">
                  React Native / Android / Offline sync
                </p>
                <ProjectDetails>
                  <p>
                    Built an offline-first Android application for Proximity
                    Designs’ rural field teams, with automated synchronization
                    when connectivity returns.
                  </p>
                  <p>
                    <strong>My role:</strong> Mobile development and data
                    synchronization.
                  </p>
                </ProjectDetails>
              </article>
              <article className="project">
                <div className="project-visual">
                  <ApiPreview />
                </div>
                <div className="project-title">
                  <h3>Secure API Infrastructure</h3>
                  <span className="project-number">03 /</span>
                </div>
                <p className="project-tech">.NET Core / MySQL / AWS</p>
                <ProjectDetails>
                  <p>
                    Engineered secure REST APIs handling more than 10,000 daily
                    requests, with applications deployed and maintained across
                    AWS and DigitalOcean.
                  </p>
                  <p>
                    <strong>My role:</strong> Backend development and cloud
                    deployment.
                  </p>
                </ProjectDetails>
              </article>
            </div>
          </div>
          <div className="work-footnote">
            <span>Interface and architecture previews are illustrative.</span>
            <a href="#learning">
              Also built: offline learning infrastructure{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section className="expertise-section" id="skills">
          <div className="section-heading">
            <h2 className="eyebrow">EXPERTISE</h2>
            <p>From interface to infrastructure.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map(([icon, title, desc, tech]) => (
              <article key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>{tech}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div>
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Technology built around
              <br />
              real operational needs.
            </h2>
          </div>
          <div>
            <p>
              I’m a fullstack developer and digital solutions specialist based
              in Bangkok. My work spans enterprise operations, mobile field
              tools, and learning platforms for remote communities.
            </p>
            <p>
              I care about maintainable systems, clear interfaces, and making
              technology useful where it matters. Alongside development, I lead
              Agile delivery, mentor developers, and build automation with
              Python.
            </p>
            <p className="tool-note">
              Everyday tools: Git, Bitbucket, JIRA & Agile Scrum.
            </p>
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="section-heading">
            <h2 className="eyebrow">EXPERIENCE</h2>
            <a href="/AungThura_FullStack_CV.pdf" download>
              Full résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <article className="experience-row">
            <h3>Proximity Designs</h3>
            <div>
              <strong>Digital Solutions Specialist</strong>
              <p>
                Custom CRM, offline mobile applications, secure APIs, cloud
                deployment, and data automation.
              </p>
            </div>
            <span>2024 — Present</span>
          </article>
          <article className="experience-row" id="learning">
            <h3>Zabai</h3>
            <div>
              <strong>Senior IT Developer</strong>
              <p>
                Customized Moodle learning platforms and PHP APIs. Designed
                offline learning infrastructure for air-gapped environments, led
                Agile delivery, and mentored developers.
              </p>
            </div>
            <span>2019 — 2024</span>
          </article>
        </section>
        <section className="credentials" aria-label="Education and credentials">
          <div>
            <h2 className="eyebrow">EDUCATION</h2>
            <h3>B.E. Computer Engineering</h3>
            <p>
              University of Technology
              <br />
              (Yatanarpon Cyber City)
            </p>
            <small>2019 · GPA 4.33 / 5.0</small>
          </div>
          <div>
            <h2 className="eyebrow">CERTIFICATIONS</h2>
            <ul>
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>AWS Cloud Technical Essentials</li>
              <li>MongoDB Node.js Developer Path</li>
              <li>Scrum Certification for Web Developer</li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">LANGUAGES</h2>
            <p>
              English <span>Working proficiency</span>
            </p>
            <p>
              Burmese <span>Native</span>
            </p>
          </div>
        </section>
        <section className="contact" id="contact">
          <h2>
            Have a useful
            <br />
            problem to solve?
          </h2>
          <div className="contact-main">
            <p>
              Let’s build something that makes
              <br />a real difference.
            </p>
            <div className="actions">
              <a
                className="button primary"
                href="mailto:aungthura.bece@gmail.com"
              >
                Email me <Arrow />
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/aung-thura-atr"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
            </div>
            <a className="contact-email" href="mailto:aungthura.bece@gmail.com">
              aungthura.bece@gmail.com
            </a>
          </div>
          <div className="contact-meta">
            <p className="eyebrow">BANGKOK, THAILAND</p>
            <a href="tel:+66814473616">+66 814473616</a>
            <a
              href="https://wa.me/66814473616"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="shell">
        <span>© {new Date().getFullYear()} Aung Thura.</span>
        <span>Build thoughtfully. Make it useful.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
