"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      border="neutral-alpha-weak"
      background="surface"
      padding="0"
      radius="l"
    >
      <Row fillWidth vertical="stretch" s={{ direction: "column" }}>
        <Column fillWidth paddingY="24" paddingX="l" gap="20" vertical="center">
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {formatDate(post.metadata.publishedAt, false)}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
        {post.metadata.image && thumbnail && (
          <Column minWidth={14} style={{ width: "14rem", flexShrink: 0 }}>
            <Media
              priority
              sizes="(max-width: 768px) 100vw, 320px"
              cursor="interactive"
              radius="l"
              src={post.metadata.image}
              alt={"Thumbnail of " + post.metadata.title}
              aspectRatio="16 / 9"
              style={{ width: "100%", height: "100%" }}
            />
          </Column>
        )}
      </Row>
    </Card>
  );
}
