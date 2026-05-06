import type { ReactNode } from "react";
import { ButtonLink, Card, CardHeader, CardText, Icon, Stack, StatusPill } from "@/components/ui/primitives";

export function Callout({
  title = "Note",
  children,
  tone = "default",
}: {
  title?: string;
  children: ReactNode;
  tone?: "default" | "warning" | "success";
}) {
  return (
    <aside className={`mdx-callout mdx-callout-${tone}`}>
      <div className="mdx-callout-title">
        <Icon name={tone === "success" ? "check" : "spark"} />
        {title}
      </div>
      <div className="mdx-callout-body">{children}</div>
    </aside>
  );
}

export function ArchitectureDiagram({
  title = "Architecture",
  steps,
}: {
  title?: string;
  steps: string[];
}) {
  return (
    <figure className="mdx-diagram">
      <figcaption>{title}</figcaption>
      <div className="mdx-diagram-flow">
        {steps.map((step, index) => (
          <div className="mdx-diagram-step" key={step}>
            <span>{index + 1}</span>
            {step}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function Tabs({
  items,
}: {
  items: Array<{ label: string; children: ReactNode }>;
}) {
  return (
    <div className="mdx-tabs">
      {items.map((item) => (
        <section className="mdx-tab" key={item.label}>
          <div className="mdx-tab-label">{item.label}</div>
          <div>{item.children}</div>
        </section>
      ))}
    </div>
  );
}

export function Expandable({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="mdx-expandable">
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}

export function EmbeddedDemo({
  title = "Synthetic demo",
  description = "Open the synthetic demo environment. Do not enter real company data or credentials.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Card accent>
      <CardHeader title={title} status="Synthetic" />
      <Stack>
        <CardText>{description}</CardText>
        <div>
          <ButtonLink href="/demo">Open demo <Icon name="arrowRight" /></ButtonLink>
        </div>
      </Stack>
    </Card>
  );
}

export function CodeBlock({
  filename,
  children,
}: {
  filename?: string;
  children: ReactNode;
}) {
  return (
    <div className="mdx-codeblock">
      {filename ? <div className="mdx-codeblock-filename">{filename}</div> : null}
      <pre>{children}</pre>
    </div>
  );
}

export function MdxStatus({ children }: { children: ReactNode }) {
  return <StatusPill>{children}</StatusPill>;
}
