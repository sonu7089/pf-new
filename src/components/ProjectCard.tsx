"use client";

import {
  Card,
  Column,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Card
      fillWidth
      border="neutral-alpha-weak"
      background="surface"
      padding="0"
      radius="l"
    >
      <Row fillWidth vertical="stretch" s={{ direction: "column" }}>
        <Column fillWidth paddingY="24" paddingX="l" gap="16" vertical="center">
          {title && (
            <SmartLink
              href={href}
              style={{ margin: "0", width: "fit-content" }}
            >
              <Text variant="heading-strong-l" wrap="balance">
                {title}
              </Text>
            </SmartLink>
          )}
          {(description?.trim() || content?.trim()) && (
            <Column gap="12">
              {description?.trim() && (
                <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                  {description}
                </Text>
              )}
              <Row gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Text variant="body-default-s">Read case study</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
              </Row>
            </Column>
          )}
        </Column>
        {images?.[0] && (
          <Column minWidth={14} style={{ width: "14rem", flexShrink: 0 }}>
            <SmartLink
              href={href}
              style={{ margin: "0", width: "100%", height: "100%" }}
            >
              <Media
                src={images[0]}
                alt={title}
                aspectRatio="16 / 9"
                radius="l"
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ width: "100%", height: "100%" }}
              />
            </SmartLink>
          </Column>
        )}
      </Row>
    </Card>
  );
};
