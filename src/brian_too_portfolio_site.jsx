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

  const SectionTitle = ({ eyebrow, title, subtitle }) => (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p> : null}
    </div>
  );

  const Pill = ({ children }) => (
    <span className="rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur">
      {children}
    </span>
  );

  const LinkButton = ({ href, children, secondary = false }) => (
    <a
      href={href}
      className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-medium transition ${
        secondary
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      }`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_28%)]" />

      <main className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="sticky top-4 z-50 mb-8">
          <div className="mx-auto flex w-fit flex-wrap items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-3 shadow-2xl backdrop-blur-xl">
            {[
              ["Education", "education"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Community", "community"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                AI • ML • Robotics • Full-Stack
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl text-cyan-300 md:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                {profile.tagline}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">{profile.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
                <LinkButton href={profile.github} secondary>
                  GitHub
                </LinkButton>
                <LinkButton href={`mailto:${profile.email}`} secondary>
                  Email Me
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="text-sm text-slate-400">Current Focus</div>
                <div className="mt-3 text-lg font-medium text-white">
                  Applied AI systems, intelligent interfaces, human-centered autonomy, and product engineering.
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="text-sm text-slate-400">Core Stack</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "TypeScript", "React", "Node.js", "GraphQL", "LLMs", "RAG", "Docker", "C++", "SQL"].map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="text-sm text-slate-400">Education</div>
                <div className="mt-3 text-lg font-medium text-white">Howard University</div>
                <div className="text-slate-300">B.S. Computer Science • Minor in Applied Mathematics</div>
                <div className="mt-2 text-sm text-cyan-300">GPA 4.0</div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mt-20">
          <SectionTitle
            eyebrow="Education"
            title="Academic Foundation"
            subtitle="A strong computer science and mathematics background powering work in AI, systems design, and product engineering."
          />
          <div className="grid gap-5">
            {education.map((item) => (
              <div key={item.school} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.school}</h3>
                    <p className="mt-1 text-cyan-300">{item.degree}</p>
                  </div>
                  <div className="text-sm text-slate-400">{item.dates}</div>
                </div>
                {item.details.length > 0 ? (
                  <ul className="mt-5 space-y-2 text-slate-300">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20">
          <SectionTitle
            eyebrow="Experience"
            title="Internships & Leadership"
            subtitle="Hands-on work across AI platforms, robotics autonomy, and software engineering—focused on solving real problems with production-minded systems."
          />
          <div className="grid gap-5">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-cyan-300">{job.company}</p>
                    <p className="mt-1 text-sm text-slate-400">{job.location}</p>
                  </div>
                  <div className="text-sm text-slate-400">{job.dates}</div>
                </div>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {job.links.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {job.links.map((link) => (
                      <LinkButton key={link.label} href={link.href} secondary>
                        {link.label}
                      </LinkButton>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <SectionTitle
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A mix of applied AI, algorithms, intelligent product design, and research-driven engineering."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`rounded-3xl border p-6 md:p-8 ${
                  project.name === "ASTAR"
                    ? "border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-violet-500/10 to-purple-500/15 shadow-[0_0_40px_rgba(34,197,94,0.12)]"
                    : project.name === "Google Meet Email Helper"
                      ? "border-blue-400/30 bg-gradient-to-br from-blue-500/15 via-red-500/10 via-yellow-400/10 to-green-500/15 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
                      : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-2xl font-semibold ${
                      project.name === "ASTAR"
                        ? "text-emerald-200"
                        : project.name === "Google Meet Email Helper"
                          ? "text-blue-200"
                          : "text-white"
                    }`}>“
                      {project.name}
                    </h3>
                    <p className={`mt-2 text-sm ${
                      project.name === "ASTAR"
                        ? "text-violet-200"
                        : project.name === "Google Meet Email Helper"
                          ? "text-yellow-200"
                          : "text-cyan-300"
                    }`}>
                      {project.period}
                    </p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                <ul className="mt-5 space-y-2 text-slate-300">
                  {project.impact.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
                {project.links.length ? (
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-3">
                      {project.links
                        .filter((link) => link.kind !== "repo")
                        .map((link) => (
                          <LinkButton key={link.label} href={link.href} secondary>
                            {link.label}
                          </LinkButton>
                        ))}
                    </div>
                    {project.links.some((link) => link.kind === "repo") ? (
                      <div className="ml-auto">
                        {project.links
                          .filter((link) => link.kind === "repo")
                          .map((link) => (
                            <LinkButton key={link.label} href={link.href} secondary>
                              {link.label}
                            </LinkButton>
                          ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="community" className="mt-20">
          <SectionTitle
            eyebrow="Community"
            title="Organizations & Community"
            subtitle="Communities that have shaped my leadership, service, and growth as an engineer."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {community.map((item) => (
              <div key={item.organization} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.organization}</h3>
                  <p className="mt-1 text-cyan-300">{item.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.dates}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                <ul className="mt-5 space-y-2 text-slate-300">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <SectionTitle
              eyebrow="Certifications"
              title="Recognition"
              subtitle="Coursework and technical training that complement practical engineering experience."
            />
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <p className="mt-2 text-cyan-300">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-slate-400">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Let’s connect</div>
            <h3 className="mt-3 text-3xl font-semibold text-white">Open to impactful AI and software opportunities.</h3>
            <p className="mt-4 leading-7 text-slate-300">
              I’m especially interested in AI/ML engineering, intelligent product development, human-centered autonomy, and systems that create measurable real-world value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
              <LinkButton href={`mailto:${profile.email}`} secondary>
                {profile.email}
              </LinkButton>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-medium text-white">Brian Too</div>
              <div className="text-sm text-slate-400">AI / ML portfolio</div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a className="hover:text-cyan-300" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="hover:text-cyan-300" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="hover:text-cyan-300" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
