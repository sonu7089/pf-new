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
import { home, about, person, baseURL, routes } from "@/resources";
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

export default function Home() {
  const featuredProjects = getPosts(["src", "app", "work", "projects"]).filter((post) =>
    [
      "end-to-end-marketing-data-pipelines-on-azure",
      "european-energy-market-data-extractor",
    ].includes(post.slug),
  );

  const orderedFeaturedProjects = [
    "end-to-end-marketing-data-pipelines-on-azure",
    "european-energy-market-data-extractor",
  ]
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
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
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="24" marginBottom="l">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Grid columns="3" s={{ columns: 1 }} fillWidth gap="20" paddingX="20">
            <Card
              fillWidth
              padding="l"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{ minHeight: "12rem" }}
            >
              <Column gap="8">
                <Text variant="heading-strong-s" onBackground="brand-weak">
                  Pipeline Engineering
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Build scalable ETL/ELT workflows across cloud data stacks.
                </Text>
              </Column>
            </Card>
            <Card
              fillWidth
              padding="l"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{ minHeight: "12rem" }}
            >
              <Column gap="8">
                <Text variant="heading-strong-s" onBackground="brand-weak">
                  AI-Enabled Engineering
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Use AI to accelerate design, debugging, documentation, and practical delivery
                  without losing engineering rigor.
                </Text>
              </Column>
            </Card>
            <Card
              fillWidth
              padding="l"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{ minHeight: "12rem" }}
            >
              <Column gap="8">
                <Text variant="heading-strong-s" onBackground="brand-weak">
                  Analytics Enablement
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Turn raw sources into models, dashboards, and decision-ready data teams can
                  trust and act on.
                </Text>
              </Column>
            </Card>
          </Grid>
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
      <Column fillWidth gap="24" marginBottom="l">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
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
      </Column>
      <Mailchimp />
    </Column>
  );
}
