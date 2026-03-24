const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

const navigationItems = [
  ["Education", "education"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Community", "community"],
];

const coreStack = ["Python", "TypeScript", "React", "Node.js", "GraphQL", "LLMs", "RAG", "Docker", "C++", "SQL"];

const projectLabels = {
  ASTAR: "Flagship build",
  "MarsMap Pathfinder: A* vs. BFS under Battery Constraints": "Systems research",
  "AI Shoe App": "Product platform",
  "Google Meet Email Helper": "Chrome utility",
  "Analyzing Bias in ML Facial Recognition": "ML study",
};

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4">
      <span className="section-kicker">{eyebrow}</span>
      <span className="eyebrow-line" />
    </div>
    <h2 className="mt-4 text-3xl font-semibold text-metal md:text-4xl">{title}</h2>
    {subtitle ? <p className="section-copy mt-4">{subtitle}</p> : null}
  </div>
);

const DetailList = ({ items }) => (
  <ul className="tech-list mt-6">
    {items.map((item) => (
      <li key={item} className="tech-list-item">
        <span aria-hidden="true" className="tech-list-bullet" />
        <span className="text-body">{item}</span>
      </li>
    ))}
  </ul>
);

const Pill = ({ children }) => <span className="tech-pill">{children}</span>;

const LinkButton = ({ href, children, secondary = false }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={joinClasses("tech-button", secondary && "tech-button--secondary")}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default function BrianTooPortfolio() {
  const profile = {
    name: "Brian Too",
    title: "AI / ML Software Engineer",
    tagline:
      "Building intelligent systems, human-centered products, and applied AI experiences across robotics, platforms, and full-stack web apps.",
    location: "Howard University • Washington, DC",
    email: "briantoo2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/brian-too-1b7638250/",
    github: "https://github.com/Brian-Two",
    intro:
      "I’m a Computer Science student at Howard University with a strong focus on AI, machine learning, robotics, and product-minded software engineering. My work spans LLM integrations, autonomous systems, pathfinding research, and full-stack tools that solve real user problems.",
  };

  const education = [
    {
      school: "Howard University",
      degree: "B.S. in Computer Science, Minor in Applied Mathematics",
      dates: "Aug 2023 – May 2027",
      details: [
        "GPA: 4.0/4.0",
        "Relevant coursework: Mathematics of Machine Learning, Mathematical Research in AI, Probability & Statistics, Operating Systems, Discrete Math, Linear Algebra, Calculus, Physics",
        "Awards: Dean’s List (4×), CodePath/Amazon Next Achievement Award",
      ],
    },
    {
      school: "Google Tech Exchange Program",
      degree: "Sponsored Scholar",
      dates: "Jan 2025 – May 2025",
      details: [
        "Completed Google-led software engineering program",
        "Built projects with Streamlit, BigQuery-backed pipelines, Dockerized microservices, LLM APIs, Git, CI testing, and peer review",
      ],
    },
    {
      school: "Bergen County Academies",
      degree: "Academy of Technology and Computer Science",
      dates: "2019 – 2023",
      details: [
        "Attended while Bergen County Academies was ranked the #1 public high school in America for academics by Niche’s 2021 Best Schools rankings.",
      ],
    },
  ];

  const experience = [
    {
      company: "Hive",
      role: "AI Software Engineer Intern",
      dates: "Jun 2025 – Aug 2025",
      location: "New York, NY · Hybrid",
      bullets: [
        "Built MCP-powered integrations connecting Hive’s AI chatbot to external apps through backend APIs and admin tooling.",
        "Launched secure Shared Buzz Chat links used by customers with signed and revocable URLs, permission-aware access, and cross-browser testing.",
        "Improved the image-generation pipeline and agent instructions, significantly reducing response latency.",
      ],
      links: [
        {
          label: "Hive blog: Adding a Hosted MCP Server to Buzz",
          href: "https://hive.com/blog/adding-mcp-server/",
        },
      ],
    },
    {
      company: "Morgan State University",
      role: "AI Robotics Autonomy Intern",
      dates: "May 2024 – May 2025",
      location: "Baltimore, MD · On-site",
      bullets: [
        "Worked on autonomous wheelchair technology for Baltimore/Washington International Thurgood Marshall Airport.",
        "Built SLAM-based navigation and improved perception workflows for real-world indoor mobility assistance.",
        "Debugged localization and sensor-fusion issues on embedded hardware to improve mapping reliability.",
      ],
      links: [
        {
          label: "Autonomous Chair project page",
          href: "https://brian-two.github.io/about-my-project.html",
        },
      ],
    },
    {
      company: "Bucephalus Tech",
      role: "Software Engineer Intern",
      dates: "Oct 2022 – May 2023",
      location: "New York, NY · On-site",
      bullets: [
        "Selected as 1 of 3 high school interns to help develop Bucephalus’ inventory-forecasting technology; shipped full-stack features for Shopify workflows using SQL, Node.js/Express, and React.",
        "Worked with graduate-level interns to implement backend logic and API integrations, improving reliability of inventory and product data flows across the web app.",
      ],
      links: [],
    },
  ];

  const projects = [
    {
      name: "ASTAR",
      period: "Aug 2025 – Present",
      summary:
        "A gamified learning experience designed to cultivate collaborative problem-solving through culturally relevant, time-boxed missions enhanced with multi-agent AI.",
      impact: [
        "Uses contextual multi-agent AI and retrieval-augmented generation to guide players through challenges.",
        "Combines product iteration, demos, and user feedback into rapid full-stack improvements.",
      ],
      tech: ["React", "TypeScript", "Supabase", "MCP", "LLM APIs", "RAG"],
      links: [
        { label: "astar.inc", href: "https://astar.inc" },
        { label: "GitHub Repo", href: "https://github.com/Brian-Two/astar", kind: "repo" },
      ],
    },
    {
      name: "MarsMap Pathfinder: A* vs. BFS under Battery Constraints",
      period: "2025",
      summary:
        "A systems-design and algorithm study modeling a Mars-rover mapper under a 20-step battery limit. Compared BFS ring exploration against A* with a Manhattan heuristic to analyze path efficiency and exploration depth.",
      impact: [
        "Showed how BFS guarantees broad exploration but wastes steps on equal-cost detours.",
        "Switching to A* reduced path lengths by over 30%, enabling deeper exploration per charge.",
        "Highlights practical tradeoffs in robotics pathfinding and energy-aware navigation.",
      ],
      tech: ["Python", "A*", "BFS", "Systems Design", "Robotics Algorithms"],
      links: [],
    },
    {
      name: "AI Shoe App",
      period: "2025",
      summary:
        "A web-based fitness platform where users join running challenges, track progress, earn points, and compete on leaderboards with social features and secure authentication.",
      impact: [
        "Built with Streamlit and Auth0 for secure login and seamless user onboarding.",
        "Used BigQuery for challenge data and Google Cloud Storage for uploads.",
        "Added social and gamification features to improve user motivation and retention.",
      ],
      tech: ["Streamlit", "Auth0", "BigQuery", "Google Cloud Storage", "Python"],
      links: [],
    },
    {
      name: "Google Meet Email Helper",
      period: "2025",
      summary:
        "A Chrome extension built to streamline networking during Google Meet sessions by making email sharing and collection frictionless.",
      impact: [
        "One-click send or keyboard shortcut to paste your email into chat.",
        "Automatically collects shared addresses and supports copy-all for fast follow-up.",
        "Created from a real pain point observed in Tech Exchange breakout rooms.",
      ],
      tech: ["JavaScript", "Chrome Extension APIs", "Python"],
      links: [
        {
          label: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/google-meet-email-helper/enebolmmiooalmlmambfjpkoipmjiand",
        },
        {
          label: "GitHub Repo",
          href: "https://github.com/Brian-Two/clipon_gme",
          kind: "repo",
        },
      ],
    },
    {
      name: "Analyzing Bias in ML Facial Recognition",
      period: "Jan 2024 – May 2024",
      summary:
        "A machine learning research project analyzing bias in supervised facial recognition using eigenfaces, PCA, and a linear SVM over a NIST mugshot dataset.",
      impact: [
        "Trained an eigenfaces-based model on 3,248 mugshots and achieved 82% accuracy.",
        "Investigated how feature representation, model parameters, and training techniques contribute to bias.",
        "Combined research, implementation, and technical writing into one end-to-end ML study.",
      ],
      tech: ["Python", "scikit-learn", "NumPy", "pandas", "Jupyter", "LaTeX"],
      links: [{ label: "Project write-up: Mathematics and Applications of Eigenfaces", href: "#" }],
    },
  ];

  const community = [
    {
      organization: "Society for Industrial and Applied Mathematics (SIAM)",
      role: "Treasurer",
      dates: "Sep 2023 – May 2025",
      description:
        "Managed budgeting, financial reporting, and event support while also tutoring students at Howard Middle School of Math and Science in mathematics.",
      highlights: [
        "Led financial operations and helped support chapter programming and events.",
        "Gave back through math tutoring for middle school students in the Howard community.",
      ],
    },
    {
      organization: "Howard National Society of Black Engineers (NSBE)",
      role: "Chapter Member",
      dates: "Ongoing",
      description:
        "Part of a community focused on academic excellence, technical growth, leadership, and support for Black engineers.",
      highlights: [
        "Engages with peers committed to engineering excellence and professional development.",
      ],
    },
    {
      organization: "ColorStack",
      role: "Member",
      dates: "Ongoing",
      description:
        "Part of a national community supporting Black and Latinx computer science students in reaching their academic and career goals.",
      highlights: [
        "Connected to a broader network centered on representation, mentorship, and opportunity in tech.",
      ],
    },
  ];

  const certifications = [
    {
      name: "CodePath Intermediate Technical Interview Prep",
      issuer: "CodePath",
      date: "Issued Jun 2024",
    },
  ];

  return (
    <div className="page-shell min-h-screen text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(151,71,255,0.14),transparent_56%)]"
      />

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10 lg:px-12">
        <div className="sticky top-4 z-50 mb-8 flex justify-center">
          <div className="floating-nav flex w-full max-w-3xl flex-wrap items-center gap-2 rounded-full px-3 py-3 md:w-auto md:max-w-fit">
            {navigationItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <section className="tech-panel tech-panel--hero">
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:p-12">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="signal-tag">AI • ML • Robotics • Full-Stack</span>
                <span className="micro-tag">Portfolio / 2026</span>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <span className="eyebrow-line" />
                <span className="meta-label">Built for impact, not noise</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-none text-metal md:text-7xl lg:text-[5.4rem]">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-3xl text-xl font-medium text-accent md:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-3xl text-base leading-7 text-body md:text-lg">{profile.tagline}</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted">{profile.intro}</p>

              <div className="accent-divider mt-8 max-w-3xl" />

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
                <LinkButton href={profile.github} secondary>
                  GitHub
                </LinkButton>
                <LinkButton href={`mailto:${profile.email}`} secondary>
                  Email Me
                </LinkButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="meta-card p-4">
                  <div className="meta-label">Base</div>
                  <div className="meta-value mt-3 text-sm font-semibold">{profile.location}</div>
                </div>
                <div className="meta-card p-4">
                  <div className="meta-label">Current Lens</div>
                  <div className="meta-value mt-3 text-sm font-semibold">AI systems, autonomy, product engineering</div>
                </div>
                <div className="meta-card p-4">
                  <div className="meta-label">Reach</div>
                  <div className="meta-value mt-3 text-sm font-semibold">{profile.email}</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="tech-panel tech-panel--soft lift-panel p-6">
                <div className="meta-label">Current Focus</div>
                <div className="mt-4 text-xl font-semibold text-metal">
                  Applied AI systems, intelligent interfaces, human-centered autonomy, and product engineering.
                </div>
              </div>

              <div className="tech-panel tech-panel--soft lift-panel p-6">
                <div className="meta-label">Core Stack</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coreStack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>

              <div className="tech-panel tech-panel--soft lift-panel p-6">
                <div className="meta-label">Education</div>
                <div className="mt-4 text-xl font-semibold text-metal">Howard University</div>
                <div className="mt-2 text-body">B.S. Computer Science • Minor in Applied Mathematics</div>
                <div className="mt-4 inline-flex items-center rounded-full border border-[rgba(214,194,255,0.18)] bg-[rgba(140,78,255,0.08)] px-3 py-2 text-sm font-semibold text-accent">
                  GPA 4.0
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mt-20 md:mt-24">
          <SectionTitle
            eyebrow="Education"
            title="Academic Foundation"
            subtitle="A strong computer science and mathematics background powering work in AI, systems design, and product engineering."
          />
          <div className="grid gap-5">
            {education.map((item) => (
              <article key={item.school} className="tech-panel tech-panel--soft lift-panel p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-metal">{item.school}</h3>
                    <p className="mt-2 text-lg text-accent">{item.degree}</p>
                  </div>
                  <div className="micro-tag">{item.dates}</div>
                </div>
                <DetailList items={item.details} />
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20 md:mt-24">
          <SectionTitle
            eyebrow="Experience"
            title="Internships & Leadership"
            subtitle="Hands-on work across AI platforms, robotics autonomy, and software engineering focused on solving real problems with production-minded systems."
          />
          <div className="grid gap-5">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="tech-panel tech-panel--soft lift-panel p-6 md:p-8">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="project-chip">{job.company}</div>
                    <h3 className="mt-4 text-2xl font-semibold text-metal">{job.role}</h3>
                    <p className="mt-2 text-accent">{job.location}</p>
                  </div>
                  <div className="micro-tag">{job.dates}</div>
                </div>
                <DetailList items={job.bullets} />
                {job.links.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {job.links.map((link) => (
                      <LinkButton key={link.label} href={link.href} secondary>
                        {link.label}
                      </LinkButton>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20 md:mt-24">
          <SectionTitle
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A mix of applied AI, algorithms, intelligent product design, and research-driven engineering."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => {
              const isFeatured = project.name === "ASTAR";

              return (
                <article
                  key={project.name}
                  className={joinClasses(
                    "tech-panel lift-panel p-6 md:p-8",
                    isFeatured ? "tech-panel--featured" : "tech-panel--soft",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={joinClasses("project-chip", isFeatured && "project-chip--featured")}>
                        {projectLabels[project.name]}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-metal">{project.name}</h3>
                    </div>
                    <span className="micro-tag">{project.period}</span>
                  </div>

                  <p className="mt-4 leading-7 text-body">{project.summary}</p>
                  <DetailList items={project.impact} />

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Pill key={tech}>{tech}</Pill>
                    ))}
                  </div>

                  {project.links.length ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <LinkButton key={link.label} href={link.href} secondary>
                          {link.label}
                        </LinkButton>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section id="community" className="mt-20 md:mt-24">
          <SectionTitle
            eyebrow="Community"
            title="Organizations & Community"
            subtitle="Communities that have shaped my leadership, service, and growth as an engineer."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {community.map((item) => (
              <article key={item.organization} className="tech-panel tech-panel--soft lift-panel p-6">
                <div>
                  <div className="project-chip">{item.role}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-metal">{item.organization}</h3>
                  <p className="mt-2 text-accent">{item.dates}</p>
                </div>
                <p className="mt-5 leading-7 text-body">{item.description}</p>
                <DetailList items={item.highlights} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:mt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="tech-panel tech-panel--soft p-6 md:p-8">
            <SectionTitle
              eyebrow="Certifications"
              title="Recognition"
              subtitle="Coursework and technical training that complement practical engineering experience."
            />
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="meta-card p-5">
                  <div className="meta-label">Issued Credential</div>
                  <h3 className="mt-4 text-xl font-semibold text-metal">{cert.name}</h3>
                  <p className="mt-3 text-accent">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-muted">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-panel cta-panel p-6 md:p-8">
            <div className="signal-tag">Let&apos;s connect</div>
            <h3 className="mt-5 text-3xl font-semibold text-metal">Open to impactful AI and software opportunities.</h3>
            <p className="mt-4 leading-7 text-body">
              I’m especially interested in AI/ML engineering, intelligent product development, human-centered autonomy, and systems that create measurable real-world value.
            </p>
            <div className="accent-divider mt-8" />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
              <LinkButton href={`mailto:${profile.email}`} secondary>
                {profile.email}
              </LinkButton>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-[rgba(224,208,255,0.1)] py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-semibold text-metal">Brian Too</div>
              <div className="mt-1 text-sm text-muted">AI / ML portfolio</div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a className="footer-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="footer-link" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="footer-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
