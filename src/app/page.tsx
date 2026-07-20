import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Grid,
  Card,
  Media,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, calendlyLink, whatsappLink } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const services = [
  {
    title: "Dashboards & Reporting",
    description:
      "See sales, spend, and operations in one live dashboard that updates itself. Power BI or web. No more manual Excel reports.",
  },
  {
    title: "Data Pipelines & ETL",
    description:
      "Reliable pipelines that move data from your tools into one clean place. Built on Azure, AWS, or GCP. Tested, monitored, and documented.",
  },
  {
    title: "Automation",
    description:
      "Reports that build themselves. Reconciliation that runs at night. I turn tasks that take days into jobs that take minutes.",
  },
  {
    title: "AI for Your Business",
    description:
      "Chatbots that answer from your documents. AI that reads invoices, drafts reports, and sorts leads. We start with a small, safe pilot.",
  },
];

const steps = [
  {
    step: "1",
    title: "Free 20 minute call",
    description: "You tell me what is slow, manual, or messy. I tell you honestly if I can fix it.",
  },
  {
    step: "2",
    title: "Fixed-scope pilot",
    description: "A small first project with a clear price and timeline, usually 1 to 3 weeks.",
  },
  {
    step: "3",
    title: "Scale when it works",
    description: "Happy with the pilot? We extend it, or I support you on an ongoing basis.",
  },
];

export default function Home() {
  const featuredSlugs = [
    "end-to-end-marketing-data-pipelines-on-azure",
    "agama-shastra-rag",
    "zto-payflow",
    "european-energy-market-data-extractor",
  ];

  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const orderedFeaturedProjects = featuredSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" s={{ direction: "column" }} horizontal="center">
              <Button
                id="book-call"
                data-border="rounded"
                href={calendlyLink}
                variant="primary"
                size="m"
                weight="default"
                prefixIcon="calendar"
                arrowIcon
              >
                Book a free intro call
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  About me
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="24" marginBottom="l">
        <Column fillWidth paddingX="20" gap="8">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            What I can do for you
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            I work with founders, operations teams, and agencies in the US, Europe, and India.
          </Text>
        </Column>
        <Row fillWidth gap="24" marginTop="16" s={{ direction: "column" }}>
          <Grid columns="2" s={{ columns: 1 }} fillWidth gap="20" paddingX="20">
            {services.map((service) => (
              <Card
                key={service.title}
                fillWidth
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ minHeight: "9rem" }}
              >
                <Column gap="8">
                  <Text variant="heading-strong-s" onBackground="brand-weak">
                    {service.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>
        </Row>
        <Row fillWidth gap="20" paddingX="20" marginTop="16" s={{ direction: "column" }}>
          {steps.map((item) => (
            <Column key={item.step} flex={1} gap="4">
              <Text variant="heading-strong-s" onBackground="brand-weak">
                {item.step}. {item.title}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Row>
        <Column paddingX="20" gap="16">
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            Fixed-scope pilots start at $100 for US and EU clients, or ₹10,000 in India. The
            first call is free. If I cannot help you, I will say so on the call.
          </Text>
          <Row gap="12" s={{ direction: "column" }}>
            <Button
              href={calendlyLink}
              variant="primary"
              size="m"
              weight="default"
              prefixIcon="calendar"
              data-border="rounded"
            >
              Book the free call
            </Button>
            <Button
              href={whatsappLink}
              variant="secondary"
              size="m"
              weight="default"
              prefixIcon="whatsapp"
              data-border="rounded"
            >
              Message me on WhatsApp
            </Button>
          </Row>
        </Column>
      </Column>
      <Column fillWidth gap="24" marginBottom="l">
        <Column fillWidth paddingX="20" gap="8">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Selected work
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Real systems I have built. Enterprise pipelines, AI tools, and data products.
          </Text>
        </Column>
        <Row fillWidth gap="24" marginTop="16" s={{ direction: "column" }}>
          <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16" paddingX="20">
            {orderedFeaturedProjects.map(
              (project) =>
                project && (
                  <Card
                    key={project.slug}
                    fillWidth
                    padding="0"
                    radius="l"
                    background="surface"
                    border="neutral-alpha-weak"
                  >
                    <Column gap="0">
                      {project.metadata.images?.[0] && (
                        <Media
                          src={project.metadata.images[0]}
                          alt={project.metadata.title}
                          aspectRatio="16 / 9"
                          radius="l"
                          sizes="(max-width: 768px) 100vw, 420px"
                          style={{ width: "100%" }}
                        />
                      )}
                      <Column fillWidth gap="8" padding="20">
                        <Heading as="h3" variant="heading-strong-m" wrap="balance">
                          {project.metadata.title}
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {project.metadata.summary}
                        </Text>
                        <Row gap="20" wrap>
                          <SmartLink href={`/work/${project.slug}`} suffixIcon="arrowRight">
                            <Text variant="body-default-s">Read case study</Text>
                          </SmartLink>
                          {project.metadata.link && (
                            <SmartLink
                              href={project.metadata.link}
                              suffixIcon="arrowUpRightFromSquare"
                            >
                              <Text variant="body-default-s">View project</Text>
                            </SmartLink>
                          )}
                        </Row>
                      </Column>
                    </Column>
                  </Card>
                ),
            )}
          </Grid>
        </Row>
        <Row paddingX="20">
          <SmartLink href="/work" suffixIcon="arrowRight">
            <Text variant="body-default-m">View all projects</Text>
          </SmartLink>
        </Row>
      </Column>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 1]} columns="1" thumbnail direction="row" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
    </Column>
  );
}
