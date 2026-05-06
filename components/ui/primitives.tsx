import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import styles from "./primitives.module.css";

type Tone = "default" | "surface";
type Width = "default" | "small";
type GridColumns = 2 | 3 | 4;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ContentPage({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <main className={cx(styles.contentPage, className)} {...props}>
      {children}
    </main>
  );
}

export function Page({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <main className={cx(styles.page, className)} {...props}>
      {children}
    </main>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  width = "default",
  center = false,
  split = false,
  ...props
}: HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  width?: Width;
  center?: boolean;
  split?: boolean;
}) {
  const body = (
    <div
      className={cx(
        width === "small" ? styles.sectionSmall : styles.section,
        center && styles.center,
        split && styles.split,
        className,
      )}
    >
      {children}
    </div>
  );

  return (
    <section className={tone === "surface" ? styles.surface : undefined} {...props}>
      {body}
    </section>
  );
}

export function DocsLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.docsLayout, className)}>{children}</div>;
}

export function DocsNav({
  links,
  className,
}: {
  links: Array<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <nav className={cx(styles.docsNav, className)} aria-label="Documentation sections">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(styles.header, className)}>
      {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      {children}
    </div>
  );
}

export function Grid({
  children,
  columns = 3,
  className,
}: {
  children: ReactNode;
  columns?: GridColumns;
  className?: string;
}) {
  const gridClass = columns === 2 ? styles.grid2 : columns === 4 ? styles.grid4 : styles.grid3;

  return <div className={cx(gridClass, className)}>{children}</div>;
}

export function Card({
  children,
  className,
  accent = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { accent?: boolean }) {
  return (
    <div className={cx(styles.card, accent && styles.cardAccent, className)} {...props}>
      {children}
    </div>
  );
}

export function CardLink({
  children,
  className,
  accent = false,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { accent?: boolean }) {
  return (
    <a className={cx(styles.card, styles.cardLink, accent && styles.cardAccent, className)} {...props}>
      {children}
    </a>
  );
}

export function CardHeader({
  title,
  status,
  className,
}: {
  title: ReactNode;
  status?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(styles.cardHead, className)}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {status ? <StatusPill>{status}</StatusPill> : null}
    </div>
  );
}

export function CardText({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx(styles.cardDesc, className)} {...props}>
      {children}
    </p>
  );
}

export function Stack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.stack, className)}>{children}</div>;
}

export function StatusPill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cx(styles.statusPill, className)}>{children}</span>;
}

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.prose, className)}>{children}</div>;
}

export function Note({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.note, className)}>{children}</div>;
}

export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.highlight, className)}>{children}</div>;
}
