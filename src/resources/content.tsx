import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nitish",
  lastName: "Songara",
  name: `Nitish Songara`,
  role: "Data Engineer",
  avatar: "/images/pfp.jpg",
  email: "nitishsongara75@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's Connect!</>,
  description: <></>,
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Reliable Pipelines and Analytics Systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Nitish Songara</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Data Engineer
        </Text>
      </Row>
    ),
  },
  subline: (
    <>
      I'm Nitish, a data engineer and I design and optimize data workflows that turn raw, messy data into scalable, business-ready insights.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/nitishsongara75/new-meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Data Engineer with 5+ years of experience building scalable ETL/ELT pipelines, analytics-ready datasets, and cloud-based data solutions across ad-tech and enterprise environments. I specialize in solving complex data problems and designing practical, scalable solutions using Python, SQL, PySpark, Databricks, Airflow, and cloud platforms. My work includes ingesting data from files, databases, and APIs, transforming it into reliable data models, and enabling reporting, optimization, and business decision-making.

        </p>
        <p>
          I also use AI to accelerate solution design, troubleshoot pipelines, improve SQL and Python productivity, and speed up testing and documentation. Combined with strong engineering judgment, data quality checks, monitoring, and performance optimization, this allows me to deliver maintainable, production-ready data systems with measurable business impact.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Insight Global (Walmart)",
        timeframe: "September 2025 - Present",
        role: "Data Engineer · Contract / Remote",
        achievements: [
          <>
            Work with the data normalization team to normalize large-scale IoT telemetry sensor
            data for the Canada market, transforming vendor and store-specific inputs into
            standardized datasets used by downstream alarm workflows.
          </>,
          <>
            Built the normalization framework from scratch with rules and configuration separated from code,
            making config and rule tuning easier and reducing the need for code changes when business logic
            evolves across vendors, stores, and telemetry scenarios.
          </>,
          <>
            Created a CI/CD workflow so rule updates committed in GitHub automatically propagate to
            Azure SQL, improving change traceability and making it clear who updated normalization
            rules and when.
          </>,
          <>
            Set up email alerts, added unit tests to protect existing functionality, and supported
            reliable delivery across a stack including BigQuery, Azure SQL, PySpark, Dataproc,
            Airflow, Jenkins, Docker, GitHub, and Looker for internal monitoring.
          </>,
          <>
            Partner closely with the business side to translate operational requirements into
            normalization rules, requiring deep domain understanding in addition to pipeline and
            platform engineering.
          </>,
        ],
        images: [],
      },
      {
        company: "Ascendeum",
        timeframe: "June 2025 - Present",
        role: "Associate Data Engineer",
        achievements: [
          <>
            Built and automated end-to-end ETL pipelines processing 500M+ ad-tech events per month
            from Amazon S3 into MongoDB, creating reliable analytics foundations for dashboards used
            by 50+ stakeholders across campaign and business reporting workflows.
          </>,
          <>
            Re-architected batch processing workloads from Pandas to PySpark, delivering nearly 5x
            faster execution on 200GB+ daily datasets while improving resilience and scalability for
            production volumes.
          </>,
          <>
            Designed a reusable multi-client ingestion framework for similar API-based datasets,
            reducing onboarding effort for new clients and accelerating delivery through shared
            pipeline patterns, configuration, and orchestration logic.
          </>,
          <>
            Orchestrated pipelines in Apache Airflow with retries, dependencies, scheduling, and
            backfills, then modeled raw event and ad auction data into analytics-ready datasets
            that supported reporting and recommendations contributing to a 12% to 15% increase in
            client ROI.
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
            Designed and maintained Azure Data Factory and Azure Databricks pipelines to ingest and
            transform data from 10+ enterprise sources, processing 20M+ records weekly and roughly
            1TB per month for downstream reporting and analytics use cases.
          </>,
          <>
            Built reusable PySpark and SQL components with standardized transformations and
            parameterized logic, reducing pipeline development time by 30% and making delivery more
            consistent across projects.
          </>,
          <>
            Developed curated SQL models and reporting views for dashboards used by 200+ users,
            improving query performance by 40% and making analytics consumption faster and more
            reliable for business teams.
          </>,
          <>
            Tuned SQL Server reporting workloads through query optimization, indexing, and
            statistics maintenance to reduce report runtimes by 20% to 25%, while improving
            overall pipeline reliability to 99.9% uptime through automated data quality checks,
            proactive monitoring and alerting, and schema evolution handling.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Processing",
        description: (
          <>
            Core languages and data-processing tools I use to write transformation logic, build
            pipelines, and work through large datasets efficiently.
          </>
        ),
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
            End-to-end pipeline work focused on reliable ingestion, transformation, validation, and
            performance tuning for analytics-ready data products.
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
        ],
        images: [],
      },
      {
        title: "Platforms & Tools",
        description: (
          <>
            Cloud and data platforms I have used to build, orchestrate, store, and deliver
            production workloads across multiple environments.
          </>
        ),
        tags: [
          { name: "Databricks" },
          { name: "Apache Airflow" },
          { name: "MongoDB" },
          { name: "SQL Server" },
          { name: "BigQuery" },
          { name: "Snowflake" },
          { name: "AWS" },
          { name: "Azure" },
          { name: "GCP" },
          { name: "Docker" },
          { name: "Git" },
        ],
        images: [],
      },
      {
        title: "Analytics & Reporting",
        description: (
          <>
            Reporting and analytics skills used to turn curated datasets into dashboards, KPIs,
            and decision-support views for business stakeholders.
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
        title: "AI-Assisted Development",
        description: (
          <>
            AI-enabled workflows that speed up prototyping, debugging, documentation, test
            generation, and solution design without losing engineering judgment.
          </>
        ),
        tags: [
          { name: "AI tools in workflow" },
          { name: "Claude Code" },
          { name: "Codex" },
          { name: "Antigravity" },
          { name: "OpenCode" },
          { name: "Kilo" },
          { name: "AI skills" },
          { name: "Prompt-driven prototyping" },
          { name: "SQL and Python acceleration" },
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
            The working habits and collaboration skills that support delivery, reliability, and
            maintainability across projects.
          </>
        ),
        tags: [
          { name: "Problem Solving" },
          { name: "Stakeholder Communication" },
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
  title: "Writing about Data Engineering, AI and Tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
