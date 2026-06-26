const profile = {
  name: "Brian Too",
  title: "AI / ML Software Engineer",
  label: "AI engineer · robotics · full-stack",
  location: "Howard University · Washington, DC",
  email: "briantoo2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/brian-too-1b7638250/",
  github: "https://github.com/Brian-Two",
  intro:
    "I build practical AI systems, robotics workflows, and full-stack products. I am a Computer Science student at Howard University focused on machine learning, autonomy, LLM integrations, and software that solves real user problems.",
};

const navigationItems = [
  ["Work", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Community", "community"],
];

const education = [
  {
    school: "Howard University",
    degree: "B.S. in Computer Science, Minor in Applied Mathematics",
    dates: "Aug 2023 - May 2027",
    details: [
      "GPA: 4.0/4.0",
      "Coursework: Mathematics of Machine Learning, Mathematical Research in AI, Probability & Statistics, Operating Systems, Discrete Math, Linear Algebra, Calculus, Physics",
      "Awards: Dean's List (4x), CodePath/Amazon Next Achievement Award",
    ],
  },
  {
    school: "Google Tech Exchange Program",
    degree: "Sponsored Scholar",
    dates: "Jan 2025 - May 2025",
    details: [
      "Completed Google-led software engineering program.",
      "Built projects with Streamlit, BigQuery-backed pipelines, Dockerized microservices, LLM APIs, Git, CI testing, and peer review.",
    ],
  },
  {
    school: "Bergen County Academies",
    degree: "Academy of Technology and Computer Science",
    dates: "2019 - 2023",
    details: [
      "Attended while Bergen County Academies was ranked the #1 public high school in America for academics by Niche's 2021 Best Schools rankings.",
    ],
  },
];

const experience = [
  {
    company: "Hive",
    role: "AI Software Engineer Intern",
    dates: "Jun 2025 - Aug 2025",
    location: "New York, NY · Hybrid",
    bullets: [
      "Built MCP-powered integrations connecting Hive's AI chatbot to external apps through backend APIs and admin tooling.",
      "Launched secure Shared Buzz Chat links used by customers with signed and revocable URLs, permission-aware access, and cross-browser testing.",
      "Improved the image-generation pipeline and agent instructions, significantly reducing response latency.",
    ],
    links: [
      {
        label: "Hive blog",
        href: "https://hive.com/blog/adding-mcp-server/",
      },
    ],
  },
  {
    company: "Morgan State University",
    role: "AI Robotics Autonomy Intern",
    dates: "May 2024 - May 2025",
    location: "Baltimore, MD · On-site",
    bullets: [
      "Worked on autonomous wheelchair technology for Baltimore/Washington International Thurgood Marshall Airport.",
      "Built SLAM-based navigation and improved perception workflows for real-world indoor mobility assistance.",
      "Debugged localization and sensor-fusion issues on embedded hardware to improve mapping reliability.",
    ],
    links: [
      {
        label: "Project page",
        href: "https://brian-two.github.io/about-my-project.html",
      },
      {
        label: "News video",
        href: "https://www.youtube.com/watch?v=b9aJA9C0Q6w&source_ve_path=MjE0Mjgz&embeds_referring_euri=https%3A%2F%2Fbrian-two.github.io%2F",
      },
      {
        label: "Demo video",
        href: "https://vimeo.com/1197814380?fl=pl&fe=sh",
      },
    ],
  },
  {
    company: "Bucephalus Tech",
    role: "Software Engineer Intern",
    dates: "Oct 2022 - May 2023",
    location: "New York, NY · On-site",
    bullets: [
      "Selected as 1 of 3 high school interns to help develop Bucephalus' inventory-forecasting technology.",
      "Shipped full-stack features for Shopify workflows using SQL, Node.js/Express, and React.",
      "Worked with graduate-level interns to improve backend reliability across inventory and product data flows.",
    ],
    links: [],
  },
];

const projects = [
  {
    name: "ASTAR",
    period: "Aug 2025 - Present",
    summary:
      "A gamified learning experience designed to cultivate collaborative problem-solving through culturally relevant, time-boxed missions enhanced with multi-agent AI.",
    tech: ["React", "TypeScript", "Supabase", "MCP", "LLM APIs", "RAG"],
    links: [
      { label: "Website", href: "https://astar.inc" },
      { label: "GitHub", href: "https://github.com/Brian-Two/astar" },
    ],
  },
  {
    name: "MarsMap Pathfinder",
    period: "2025",
    summary:
      "A systems-design and algorithm study modeling a Mars-rover mapper under a 20-step battery limit, comparing BFS ring exploration against A* with a Manhattan heuristic.",
    tech: ["Python", "A*", "BFS", "Systems Design", "Robotics Algorithms"],
    links: [],
  },
  {
    name: "AI Shoe App",
    period: "2025",
    summary:
      "A web fitness platform where users join running challenges, track progress, earn points, and compete on leaderboards with social features and secure authentication.",
    tech: ["Streamlit", "Auth0", "BigQuery", "Google Cloud Storage", "Python"],
    links: [],
  },
  {
    name: "Google Meet Email Helper",
    period: "2025",
    summary:
      "A Chrome extension that streamlines networking during Google Meet sessions with one-click email sharing, collection, and copy-all follow-up workflows.",
    tech: ["JavaScript", "Chrome Extension APIs", "Python"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/google-meet-email-helper/enebolmmiooalmlmambfjpkoipmjiand",
      },
      { label: "GitHub", href: "https://github.com/Brian-Two/clipon_gme" },
    ],
  },
  {
    name: "Analyzing Bias in ML Facial Recognition",
    period: "Jan 2024 - May 2024",
    summary:
      "A machine learning research project analyzing bias in supervised facial recognition using eigenfaces, PCA, and a linear SVM over a NIST mugshot dataset.",
    tech: ["Python", "scikit-learn", "NumPy", "pandas", "Jupyter", "LaTeX"],
    links: [],
  },
];

const community = [
  {
    organization: "Society for Industrial and Applied Mathematics",
    role: "Treasurer",
    dates: "Sep 2023 - May 2025",
    description:
      "Managed budgeting, financial reporting, and event support while tutoring students at Howard Middle School of Math and Science.",
  },
  {
    organization: "Howard National Society of Black Engineers",
    role: "Chapter Member",
    dates: "Ongoing",
    description:
      "Part of a community focused on academic excellence, technical growth, leadership, and support for Black engineers.",
  },
  {
    organization: "ColorStack",
    role: "Member",
    dates: "Ongoing",
    description:
      "Connected to a national network supporting Black and Latinx computer science students in reaching academic and career goals.",
  },
];

const certifications = [
  {
    name: "CodePath Intermediate Technical Interview Prep",
    issuer: "CodePath",
    date: "Issued Jun 2024",
  },
];

const externalProps = (href) =>
  href.startsWith("http")
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

const TextLink = ({ href, children }) => (
  <a className="text-link" href={href} {...externalProps(href)}>
    {children} <span aria-hidden="true">↗</span>
  </a>
);

const SectionHeader = ({ kicker, title, action }) => (
  <div className="section-header">
    <span className="kicker">{kicker}</span>
    <div className="section-title-row">
      <h2>{title}</h2>
      {action}
    </div>
  </div>
);

const DetailText = ({ children }) => (
  <p className="max-w-[760px] text-sm leading-7 text-neutral-500">{children}</p>
);

const DetailList = ({ items }) => (
  <ul className="mt-4 grid gap-2">
    {items.map((item) => (
      <li key={item} className="detail-bullet">
        {item}
      </li>
    ))}
  </ul>
);

const InlineLinks = ({ links }) =>
  links.length ? (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <TextLink key={link.label} href={link.href}>
          {link.label}
        </TextLink>
      ))}
    </div>
  ) : null;

const Row = ({ kicker, title, meta, children }) => (
  <article className="content-row">
    <div className="row-meta">
      <span>{kicker}</span>
      <span>{meta}</span>
    </div>
    <div className="row-body">
      <h3>{title}</h3>
      {children}
    </div>
  </article>
);

export default function BrianTooPortfolio() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#0a0a0a]">
      <header className="site-shell flex items-center justify-between py-6 sm:py-8">
        <a href="#" className="flex items-center gap-3" aria-label="Brian Too portfolio home">
          <span className="avatar-mark">BT</span>
          <span className="hidden text-[15px] font-medium tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav className="flex items-center gap-4 sm:gap-7">
          {navigationItems.map(([label, id]) => (
            <a key={id} className="nav-link" href={`#${id}`}>
              {label}
            </a>
          ))}
          <a className="hello-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            Connect with me
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="site-shell pb-20 pt-10 sm:pb-24 sm:pt-12">
            <div className="flex max-w-[860px] flex-col items-start gap-8">
              <span className="kicker">{profile.label}</span>
              <p className="max-w-[620px] text-lg leading-8 text-neutral-500">{profile.intro}</p>
              <div className="flex flex-wrap items-center gap-6 pt-1">
                <TextLink href={profile.github}>GitHub</TextLink>
                <TextLink href={profile.linkedin}>LinkedIn</TextLink>
                <a className="text-link" href={`mailto:${profile.email}`}>
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="site-shell pb-16">
          <div className="grid gap-8 border-t border-neutral-200 py-8 md:grid-cols-[0.9fr_1.5fr] md:gap-16">
            <span className="kicker">Current focus</span>
            <div className="grid gap-5">
              <h2 className="text-2xl font-medium leading-snug tracking-tight text-[#0a0a0a]">ACE Collection</h2>
              <p className="max-w-[620px] text-lg leading-8 text-neutral-500">
                Taking the summer to work on three ambitious projects.
              </p>
              <div className="flex flex-wrap gap-5">
                <TextLink href="https://astar.inc">ASTAR</TextLink>
                <TextLink href="https://cosquared.astar.inc">CoSquared</TextLink>
                <TextLink href="https://eternalbeing.io">EternalBeing.io</TextLink>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="site-shell pb-20">
          <SectionHeader kicker="Work" title="Experience" />
          <div>
            {experience.map((job) => (
              <Row key={`${job.company}-${job.role}`} kicker={job.company} title={job.role} meta={job.dates}>
                <p className="mb-4 text-sm text-neutral-400">{job.location}</p>
                <DetailList items={job.bullets} />
                <InlineLinks links={job.links} />
              </Row>
            ))}
          </div>
        </section>

        <section id="projects" className="site-shell pb-20">
          <SectionHeader
            kicker="Selected work"
            title="Projects"
            action={<TextLink href={profile.github}>More on GitHub</TextLink>}
          />
          <div>
            {projects.map((project) => (
              <Row key={project.name} kicker={project.period} title={project.name} meta={project.tech.slice(0, 3).join(" · ")}>
                <DetailText>{project.summary}</DetailText>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <InlineLinks links={project.links} />
              </Row>
            ))}
          </div>
        </section>

        <section id="education" className="site-shell pb-20">
          <SectionHeader kicker="Education" title="Academic foundation" />
          <div>
            {education.map((item) => (
              <Row key={item.school} kicker={item.school} title={item.degree} meta={item.dates}>
                <DetailList items={item.details} />
              </Row>
            ))}
          </div>
        </section>

        <section id="community" className="site-shell pb-20">
          <SectionHeader kicker="Community" title="Organizations" />
          <div>
            {community.map((item) => (
              <Row key={item.organization} kicker={item.role} title={item.organization} meta={item.dates}>
                <DetailText>{item.description}</DetailText>
              </Row>
            ))}
          </div>
        </section>

        <section className="site-shell pb-24">
          <div className="grid gap-8 border-t border-neutral-200 py-8 md:grid-cols-[0.9fr_1.5fr] md:gap-16">
            <span className="kicker">Certification</span>
            <div>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h2 className="text-2xl font-medium tracking-tight">{cert.name}</h2>
                  <p className="mt-3 text-sm text-neutral-500">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <footer className="flex flex-col gap-5 border-t border-neutral-200 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium tracking-tight">{profile.name}</p>
              <p className="mt-1 text-sm text-neutral-500">{profile.title}</p>
            </div>
            <div className="flex flex-wrap gap-5">
              <TextLink href={profile.github}>GitHub</TextLink>
              <TextLink href={profile.linkedin}>LinkedIn</TextLink>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
