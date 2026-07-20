import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nitish",
  lastName: "Songara",
  name: `Nitish Songara`,
  role: "Data & AI Engineer",
  avatar: "/images/pfp.jpg",
  email: "nitishsongara75@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const calendlyLink = "https://calendly.com/nitishsongara75/new-meeting";
const whatsappLink = "https://wa.me/919827732220";

const newsletter: Newsletter = {
  display: true,
  title: <>Have a data or AI problem? Let's talk.</>,
  description: (
    <>
      Tell me what is slow, manual, or messy in your business. I will reply within 24 hours
      with a clear next step. The first call is free and there is no sales pressure.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sonu7089",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nitishsongara1/",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: whatsappLink,
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Download Resume",
    icon: "document",
    link: "/NitishSongaraResume.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Nitish Songara | Data & AI Engineer`,
  description:
    "I help businesses in the US, Europe, and India build data pipelines, dashboards, automation, and AI tools. Clear scope, fixed price, fast delivery.",
  headline: <>Data pipelines, dashboards, and AI tools that save your team hours every week</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Open for freelance projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          US · EU · India
        </Text>
      </Row>
    ),
    href: calendlyLink,
  },
  subline: (
    <>
      I am Nitish. I spent 5+ years building data systems for Deloitte clients and ad tech
      platforms. Now I help businesses clean up their data, automate manual reports, and put
      AI to work. You get clear scope, a fixed price, and fast delivery.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About | ${person.name}`,
  description: `Meet ${person.name}, a data and AI engineer working with clients in the US, Europe, and India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: calendlyLink,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I am a data and AI engineer with 5+ years of experience. I worked at Deloitte for
          almost four years, then in high-scale ad tech, where I built pipelines that process
          500M+ events every month. Today I work on Walmart data systems through Insight
          Global, and I hold three Microsoft Azure certifications.
        </p>
        <p>
          Today I also work directly with businesses in the US, Europe, and India. I build
          data pipelines, automate manual reports, create dashboards, and add practical AI
          tools like document chatbots and smart workflows. On the side, I train and evaluate
          large language models for AI labs through Turing, Revelo, and Toloka. That work
          shows me every day what AI can and cannot do, so I only recommend AI where it
          actually helps.
        </p>
        <p>
          The best way to start is a free 20 minute call. Tell me what is slow or manual in
          your business. I will tell you honestly if I can fix it, what it costs, and how long
          it takes.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Insight Global (Client: Walmart)",
        timeframe: "September 2025 - Present",
        role: "Data Engineer (Contract)",
        achievements: [
          <>
            Normalize IoT sensor data from Walmart Canada stores. Vendor-specific and
            store-specific inputs become one standard dataset that downstream alarm systems
            rely on.
          </>,
          <>
            Built the normalization framework from scratch, with business rules kept in
            configuration instead of code. When the rules change, no code change is needed.
          </>,
          <>
            Set up CI/CD so rule updates committed in GitHub deploy automatically to Azure
            SQL, backed by unit tests, email alerts, and monitoring. Stack: Python, BigQuery,
            Azure SQL, PySpark, Dataproc, Airflow, Jenkins, Docker.
          </>,
        ],
        images: [],
      },
      {
        company: "Ascendeum",
        timeframe: "June 2025 - July 2026",
        role: "Associate Data Engineer",
        achievements: [
          <>
            Built and automated ETL pipelines that process 500M+ ad tech events per month
            from Amazon S3 into MongoDB. They power analytics dashboards used by 50+
            stakeholders.
          </>,
          <>
            Moved batch processing from Pandas to PySpark. Jobs now run about 5x faster on
            200GB+ daily data and handle production volumes with far fewer failures.
          </>,
          <>
            Designed one reusable ingestion framework for many client APIs, so new clients
            onboard faster using shared pipeline patterns and configuration.
          </>,
          <>
            Run everything on Apache Airflow with retries, dependencies, and backfills. The
            modeled data supports campaign decisions that raised client ROI by 12% to 15%.
          </>,
        ],
        images: [],
      },
      {
        company: "Deloitte",
        timeframe: "August 2021 - May 2025",
        role: "Data Engineer",
        achievements: [
          <>
            Designed and maintained Azure Data Factory and Azure Databricks pipelines that
            ingest 10+ sources and process 20M+ records weekly, about 1TB per month.
          </>,
          <>
            Built reusable PySpark and SQL components with parameterized logic, cutting
            pipeline development time by 30% across projects.
          </>,
          <>
            Created SQL models and reporting views for dashboards used by 200+ people, making
            queries 40% faster.
          </>,
          <>
            Kept pipelines at 99.9% uptime with automated data quality checks, monitoring,
            alerts, and schema change handling. Tuned SQL Server workloads to cut report
            runtimes by 20% to 25%.
          </>,
        ],
        images: [],
      },
    ],
  },
  aiTraining: {
    display: true,
    title: "AI Training Experience",
    description: (
      <>
        I train and evaluate large language models for AI labs and training platforms. This
        work keeps me close to how modern AI really behaves, which helps me build AI tools
        for clients that hold up in the real world.
      </>
    ),
    experiences: [
      {
        company: "Mindrift (Toloka AI)",
        timeframe: "April 2026 - May 2026",
        role: "STEM Computer Science Expert & QA Expert",
        achievements: [
          <>
            Designed research-level computer science challenges across algorithms, data
            structures, distributed systems, and databases to test the limits of LLM
            reasoning.
          </>,
          <>
            Reviewed model-generated solutions line by line, wrote reference solutions with
            Python verification scripts, and audited tasks from other experts before
            submission.
          </>,
        ],
      },
      {
        company: "Revelo",
        timeframe: "December 2025 - April 2026",
        role: "Agentic Coding Trainer, Python",
        achievements: [
          <>
            Evaluated competing AI coding agents on complex GitHub repository tasks, reviewing
            their pull requests for correctness, architecture fit, maintainability, and
            regression risk.
          </>,
          <>
            Reproduced agent environments with Docker to verify real behavior, and delivered
            structured ratings across correctness, security, and performance.
          </>,
        ],
      },
      {
        company: "Turing",
        timeframe: "Dec 2024 - Apr 2025 · Jul 2025 - Aug 2025",
        role: "RLHF Trainer, Java & Python",
        achievements: [
          <>
            Evaluated and ranked model-generated Java and Python code for correctness, edge
            cases, and production quality, creating training signal for frontier models.
          </>,
          <>
            Designed and scored multi-step agentic tasks, evaluated complete agent runs end to
            end, and wrote corrective interventions that steered agents back to the intended
            outcome.
          </>,
        ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Processing",
        description: <>The languages and processing tools I use every day.</>,
        tags: [
          { name: "Python" },
          { name: "SQL" },
          { name: "PySpark" },
          { name: "Java" },
          {
            name: "Pandas",
          },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: (
          <>
            Moving data reliably from source systems to reports people can trust.
          </>
        ),
        tags: [
          { name: "ETL/ELT" },
          { name: "Batch Processing" },
          { name: "Data Pipeline Development" },
          { name: "Data Modeling" },
          { name: "Data Quality" },
          { name: "Schema Evolution" },
          { name: "Data Validation" },
          { name: "Performance Optimization" },
          { name: "Query Optimization" },
          { name: "Web Scraping" },
        ],
        images: [],
      },
      {
        title: "Platforms & Tools",
        description: (
          <>
            Cloud and data platforms I have shipped production work on.
          </>
        ),
        tags: [
          { name: "Databricks" },
          { name: "Apache Airflow" },
          { name: "MongoDB" },
          { name: "SQL Server" },
          { name: "PostgreSQL" },
          { name: "BigQuery" },
          { name: "Snowflake" },
          { name: "AWS" },
          { name: "Azure" },
          { name: "GCP" },
          { name: "Dataproc" },
          { name: "Docker" },
          { name: "Jenkins" },
          { name: "Git" },
        ],
        images: [],
      },
      {
        title: "Analytics & Reporting",
        description: (
          <>
            Turning clean data into dashboards and KPIs people actually use.
          </>
        ),
        tags: [
          { name: "Power BI" },
          { name: "KPI Development" },
          { name: "Reporting Views" },
          { name: "Dashboard Enablement" },
          { name: "Business Analytics" },
        ],
        images: [],
      },
      {
        title: "AI Engineering & Training",
        description: (
          <>
            I build AI features for real business use, and I train the models behind them for
            AI labs.
          </>
        ),
        tags: [
          { name: "RAG Systems" },
          { name: "Document Chatbots" },
          { name: "LLM APIs (Claude, GPT, Gemini)" },
          { name: "RLHF" },
          { name: "LLM Code Evaluation" },
          { name: "Agentic Task Design" },
          { name: "Trajectory Evaluation" },
          { name: "Prompt Design" },
          { name: "ChromaDB" },
          { name: "OpenRouter" },
        ],
        images: [],
      },
      {
        title: "AI-Assisted Development",
        description: (
          <>
            AI tools I use to design, build, test, and document faster without losing
            engineering judgment.
          </>
        ),
        tags: [
          { name: "Claude Code" },
          { name: "Codex" },
          { name: "Antigravity" },
          { name: "OpenCode" },
          { name: "Kilo" },
          { name: "Prompt-driven prototyping" },
          { name: "Debugging support" },
          { name: "Documentation and tests" },
          { name: "LLM API integration" },
        ],
        images: [],
      },
      {
        title: "Core Strengths",
        description: (
          <>
            How I work with clients and teams.
          </>
        ),
        tags: [
          { name: "Problem Solving" },
          { name: "Clear Communication" },
          { name: "Requirement Gathering" },
          { name: "Ownership" },
          { name: "Fast Learning" },
          { name: "Maintainable Design" },
        ],
        images: [],
      },
    ],
  },
  education: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Master of Business Administration - Finance",
        description: (
          <>
            Lakshmi Narain College of Technology, Bhopal
            <br />
            <em>October 2021 - August 2023</em>
            <br />
            Completed alongside a full-time role at Deloitte.
          </>
        ),
      },
      {
        name: "Bachelor of Engineering - Information Technology",
        description: (
          <>
            Institute of Engineering & Technology (IET DAVV), Indore
            <br />
            <em>July 2017 - July 2021</em>
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    certifications: [
      {
        name: "Microsoft Certified: Azure Data Engineer Associate",
        description: (
          <>
            Microsoft
            <br />
            <em>February 2023</em>
            <br />
            <a
              href="https://learn.microsoft.com/en-us/training/courses/dp-203t00"
              target="_blank"
              rel="noreferrer"
            >
              View Certification
            </a>
          </>
        ),
      },
      {
        name: "Microsoft Certified: Azure Database Administrator Associate",
        description: (
          <>
            Microsoft
            <br />
            <em>May 2023</em>
            <br />
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/azure-database-administrator-associate/?practice-assessment-type=certification"
              target="_blank"
              rel="noreferrer"
            >
              View Certification
            </a>
          </>
        ),
      },
      {
        name: "Microsoft Certified: Azure Data Fundamentals",
        description: (
          <>
            Microsoft
            <br />
            <em>June 2023</em>
            <br />
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/?practice-assessment-type=certification"
              target="_blank"
              rel="noreferrer"
            >
              View Certification
            </a>
          </>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on data engineering and AI",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects | ${person.name}`,
  description: `Real projects by ${person.name}: data pipelines, scrapers, dashboards, and AI tools.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work, calendlyLink, whatsappLink };
