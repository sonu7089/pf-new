# Nitish Songara
## Data Engineer

📍 **Location:** Asia/Kolkata  
📧 **Email:** [nitishsongara75@gmail.com](mailto:nitishsongara75@gmail.com)  
📞 **Phone:** +91 98277 32220  
🔗 **LinkedIn:** [linkedin.com/in/nitishsongara1](https://www.linkedin.com/in/nitishsongara1/)  
💻 **GitHub:** [github.com/sonu7089](https://github.com/sonu7089)  
🏆 **LeetCode:** [leetcode.com/u/sonu7089](https://leetcode.com/u/sonu7089/)  
📅 **Schedule a Meeting:** [Calendly](https://calendly.com/nitishsongara75/new-meeting)  
📄 **Resume:** [Download PDF](/NitishSongaraResume.pdf)

---

## About Me

Data Engineer with 5+ years of experience building scalable ETL/ELT pipelines, analytics-ready datasets, and cloud-based data solutions across ad-tech and enterprise environments. I specialize in solving complex data problems and designing practical, scalable solutions using Python, SQL, PySpark, Databricks, Airflow, and cloud platforms. My work includes ingesting data from files, databases, and APIs, transforming it into reliable data models, and enabling reporting, optimization, and business decision-making.

I also use AI to accelerate solution design, troubleshoot pipelines, improve SQL and Python productivity, and speed up testing and documentation. Combined with strong engineering judgment, data quality checks, monitoring, and performance optimization, this allows me to deliver maintainable, production-ready data systems with measurable business impact.

I enjoy solving complex data problems end to end, from ingestion and transformation to modeling and delivery, with a focus on scalability, maintainability, and measurable business impact.

---

## Work Experience

### Data Engineer
**[Insight Global (Walmart)](https://www.insightglobal.com/)** | Remote  
*September 2025 - Present*

Built and maintained data normalization systems for large-scale enterprise IoT telemetry:

- Normalized large-scale IoT telemetry sensor data for the Canada market, transforming vendor and store-specific inputs into standardized datasets used by downstream alarm workflows.
- Built a normalization framework from scratch with rules and configuration separated from code, reducing the need for code changes when business logic evolves across vendors and stores.
- Created a CI/CD workflow so rule updates committed in GitHub automatically propagate to Azure SQL, improving change traceability and auditability.
- Set up email alerts, unit tests, and monitoring to ensure reliable delivery across a stack including BigQuery, Azure SQL, PySpark, Dataproc, Airflow, Jenkins, and Docker.
- Partnered with business teams to translate operational requirements into complex normalization rules and data models.

**Key Technologies:** Python, BigQuery, Azure SQL, PySpark, Dataproc, Apache Airflow, Docker, Jenkins, GitHub, CI/CD, Rule Engines

---

### Associate Data Engineer
**[Ascendeum](https://ascendeum.com/)** | Remote  
*June 2025 - Present*

Building and optimizing data platforms for large-scale ad-tech and analytics use cases:

- Built and automated end-to-end ETL pipelines processing 500M+ ad-tech events per month from Amazon S3 into MongoDB, powering analytics dashboards used by 50+ stakeholders.
- Re-architected batch processing workflows from Pandas to PySpark, achieving nearly 5x faster processing on 200GB+ daily datasets while improving stability at scale.
- Designed a reusable multi-client ingestion framework for similar datasets across multiple external APIs, reducing onboarding effort and accelerating delivery for new clients.
- Orchestrated pipelines using Apache Airflow with dependencies, retries, scheduling, and backfills to ensure reliable delivery across environments.
- Modeled raw event and ad auction data into analytics-ready datasets and derived KPIs to support campaign reporting and recommendations, contributing to a 12% to 15% increase in client ROI.

**Key Technologies:** Python, SQL, PySpark, Apache Airflow, MongoDB, AWS, ETL/ELT, Data Modeling, External APIs, Data Quality, Performance Optimization

---

### Data Engineer
**[Deloitte](https://www.deloitte.com/in)** | Bengaluru, India  
*August 2021 - May 2025*

Delivered enterprise-scale Azure and Databricks solutions for reporting, analytics, and operational reliability:

- Designed and maintained Azure Data Factory and Azure Databricks pipelines to ingest and transform data from 10+ sources, processing 20M+ records weekly and around 1TB per month.
- Built reusable PySpark and SQL components, including standardized transformations and parameterized logic, reducing pipeline development time by 30%.
- Developed curated SQL models and reporting views for dashboards used by 200+ users, improving query performance by 40%.
- Tuned SQL Server reporting workloads through query optimization, indexing, and statistics maintenance, reducing report runtimes by 20% to 25%.
- Improved pipeline reliability to 99.9% uptime using automated data quality checks, proactive monitoring and alerting, and schema evolution handling.

**Key Technologies:** Azure Data Factory, Azure Databricks, PySpark, SQL, SQL Server, Power BI, ETL/ELT, Data Quality, Monitoring, Performance Tuning

---

## Featured Projects & Case Studies

### [How I Fixed a Failing Spark Job and Backfilled 500M Events](https://magic-portfolio-alpha.vercel.app/blog/how-i-fixed-a-failing-spark-job-and-backfilled-500m-ad-tech-events)
A production incident story about stabilizing a failing Airflow-orchestrated Spark pipeline, cutting runtime sharply, and safely backfilling high-volume ad-tech data without breaking downstream reporting.

- Stabilized a fragile 200GB+ daily pipeline, reducing runtime from 2h 45m to 58m.
- Reduced failure rates from 25% to below 2%.
- Safely backfilled 500M+ ad-tech events through controlled, validated batches.
- Restored business trust in the downstream analytics and reporting layer.

---

### [Bathroom Pricing Engine](https://github.com/sonu7089/Bathroom-Pricing-Engine)
Developed an AI-assisted pricing engine that converts natural language renovation requirements into structured cost estimates:

- Integrated OpenRouter API to parse user requirements and generate structured JSON outputs for materials, labor, and VAT.
- Built modular pricing logic to handle 1300+ materials, labor complexity, and country-specific taxation rules.
- Designed the system to support future local AI enhancements, vendor comparisons, and faster quote generation.

**Tech Stack:** Python, OpenRouter API, JSON, NLP, REST API Integration

---

### [Bathroom Materials Scraper & API](https://github.com/sonu7089/Bathroom-Materials-Scraper)
Created a multi-source scraping and API solution for extracting and serving product data from e-commerce websites:

- Built scrapers using both requests-based and browser-automation approaches to handle bot protection.
- Developed a FastAPI backend with pagination, filtering, and fuzzy search capabilities.
- Implemented configurable parsing logic and robust handling for inconsistent HTML structures.

**Tech Stack:** Python, BeautifulSoup, Selenium, FastAPI, YAML, REST APIs, Pytest

---

### [European Energy Market Data Extractor](https://github.com/sonu7089/European-Energy-Market-Data-Extractor)
Built a pipeline for extracting daily and historical European electricity market data:

- Integrated ENTSO-E APIs to support both near real-time monitoring and bulk historical extraction.
- Stored hourly electricity pricing data in PostgreSQL for downstream analytics and research.
- Added retry logic, validation, and rate-limit-aware processing for reliable ingestion.

**Tech Stack:** Python, PostgreSQL, REST APIs, Batch Processing, Data Validation

---

### [India News Sentiment Dashboard and Scraper](https://github.com/sonu7089/India-News-Sentiment-Dashboard-and-Scraper)
Developed a desktop dashboard for scraping, classifying, and exploring sentiment from Indian news sources:

- Aggregated data from multiple news websites and RSS feeds.
- Integrated Google Gemini API for automated sentiment analysis and keyword-based filtering.
- Used SQLite for local storage and trend analysis.

**Tech Stack:** Python, Tkinter, BeautifulSoup, Google Gemini API, SQLite, RSS Parsing, Sentiment Analysis

---

## Technical Skills

### Languages & Processing
- Python
- SQL
- PySpark
- Java
- Pandas

### Data Engineering
- ETL/ELT
- Batch Processing
- Data Pipeline Development
- Data Modeling
- Analytics-Ready Datasets
- Data Quality
- Schema Evolution
- External API Integration
- Data Validation
- Performance Optimization
- Query Optimization

### Platforms & Tools
- Databricks
- Apache Airflow
- MongoDB
- SQL Server
- BigQuery
- Snowflake
- AWS
- Azure
- GCP
- Docker
- Git
- Jenkins
- Dataproc

### Analytics & Reporting
- Power BI
- KPI Development
- Reporting Views
- Dashboard Enablement
- Business Analytics
- Looker

### AI-Assisted Development
- Claude Code
- Antigravity
- AI tools in development workflow
- Prompt-driven prototyping
- SQL and Python productivity acceleration
- Debugging support and root-cause exploration
- Documentation and test generation
- LLM API integration
- AI-assisted solution design

### Core Strengths
- Problem Solving
- Stakeholder Communication
- Requirement Gathering
- Ownership
- Fast Learning
- Maintainable System Design

---

## Education

### Master of Business Administration - Finance
**Lakshmi Narain College of Technology, Bhopal**  
*October 2021 - August 2023*  
Completed alongside a full-time role at Deloitte.

### Bachelor of Engineering - Information Technology
**Institute of Engineering & Technology (IET DAVV), Indore**  
*July 2017 - July 2021*

---

## Certifications

### Microsoft Certified: Azure Data Engineer Associate
**Microsoft** | *February 2023*

### Microsoft Certified: Azure Database Administrator Associate
**Microsoft** | *May 2023*

### Microsoft Certified: Azure Data Fundamentals
**Microsoft** | *June 2023*

---

## Contact

Open to data engineering, analytics engineering, and platform-focused opportunities involving scalable pipelines, modern cloud data stacks, and AI-enabled engineering workflows.

- **Email:** [nitishsongara75@gmail.com](mailto:nitishsongara75@gmail.com)
- **LinkedIn:** [linkedin.com/in/nitishsongara1](https://www.linkedin.com/in/nitishsongara1/)
- **GitHub:** [github.com/sonu7089](https://github.com/sonu7089)
- **Schedule a Call:** [Book a meeting on Calendly](https://calendly.com/nitishsongara75/new-meeting)