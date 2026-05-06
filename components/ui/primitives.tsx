import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode, SVGProps } from "react";
import styles from "./primitives.module.css";

type Tone = "default" | "surface";
type Width = "default" | "small";
type GridColumns = 2 | 3 | 4;
type IconName = "arrowRight" | "external" | "github" | "spark" | "check";
type ButtonVariant = "primary" | "ghost";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const iconPaths: Record<IconName, ReactNode> = {
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
  external: <path d="M7 17 17 7M9 7h8v8" />,
  github: (
    <path d="M12 2.75C6.9 2.75 2.75 6.9 2.75 12c0 4.08 2.65 7.54 6.32 8.77.46.09.63-.2.63-.45v-1.58c-2.57.56-3.11-1.1-3.11-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.82 1.4 2.15 1 2.68.76.08-.6.32-1 .59-1.23-2.05-.23-4.21-1.02-4.21-4.55 0-1 .36-1.83.95-2.47-.1-.23-.41-1.18.09-2.46 0 0 .77-.25 2.53.94A8.76 8.76 0 0 1 12 6.38c.78 0 1.57.1 2.31.31 1.76-1.19 2.53-.94 2.53-.94.5 1.28.19 2.23.09 2.46.59.64.95 1.47.95 2.47 0 3.54-2.17 4.32-4.23 4.55.33.28.62.84.62 1.69v2.5c0 .25.17.54.64.45A9.26 9.26 0 0 0 21.25 12c0-5.1-4.15-9.25-9.25-9.25Z" />
  ),
  spark: <path d="m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z" />,
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({ name, className, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg className={cx(styles.icon, className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {iconPaths[name]}
    </svg>
  );
}

export function ButtonLink({ href, children, variant = "primary", external = false, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: ButtonVariant; external?: boolean }) {
  const buttonClass = variant === "primary" ? "btn-primary" : "btn-ghost btn-large";
  const body = <>{children}{external ? <Icon name="external" /> : null}</>;

  if (href.startsWith("/")) {
    return <Link href={href} className={cx(buttonClass, className)} {...props}>{body}</Link>;
  }

  return <a href={href} className={cx(buttonClass, className)} target={external ? "_blank" : props.target} rel={external ? "noopener noreferrer" : props.rel} {...props}>{body}</a>;
}

export function Callout({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx(styles.callout, className)} {...props}>{children}</div>;
}

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cx("skeleton", className)} aria-hidden="true" {...props} />;
}

export function SkeletonCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("skeleton-card", className)} aria-hidden="true" {...props} />;
}

export function ContentPage({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={cx(styles.contentPage, className)} {...props}>{children}</main>;
}

export function Page({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={cx(styles.page, className)} {...props}>{children}</main>;
}

export function Section({ children, className, tone = "default", width = "default", center = false, split = false, hero = false, ...props }: HTMLAttributes<HTMLElement> & { tone?: Tone; width?: Width; center?: boolean; split?: boolean; hero?: boolean }) {
  const body = <div className={cx(hero ? styles.heroSection : width === "small" ? styles.sectionSmall : styles.section, center && styles.center, split && styles.split, className)}>{children}</div>;
  return <section className={tone === "surface" ? styles.surface : undefined} {...props}>{body}</section>;
}

export function DocsLayout({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.docsLayout, className)}>{children}</div>;
}

export function DocsNav({ links, className }: { links: Array<{ href: string; label: string }>; className?: string }) {
  return <nav className={cx(styles.docsNav, className)} aria-label="Documentation sections">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>;
}

export function SectionHeader({ eyebrow, title, description, children, className }: { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode; children?: ReactNode; className?: string }) {
  return <div className={cx(styles.header, className)}>{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}<h2 className={styles.title}>{title}</h2>{description ? <p className={styles.description}>{description}</p> : null}{children}</div>;
}

export function Grid({ children, columns = 3, className }: { children: ReactNode; columns?: GridColumns; className?: string }) {
  const gridClass = columns === 2 ? styles.grid2 : columns === 4 ? styles.grid4 : styles.grid3;
  return <div className={cx(gridClass, className)}>{children}</div>;
}

export function Card({ children, className, accent = false, ...props }: HTMLAttributes<HTMLDivElement> & { accent?: boolean }) {
  return <div className={cx(styles.card, accent && styles.cardAccent, className)} {...props}>{children}</div>;
}

export function CardLink({ children, className, accent = false, featured = false, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { accent?: boolean; featured?: boolean }) {
  return <a className={cx(styles.card, styles.cardLink, accent && styles.cardAccent, featured && styles.cardFeatured, className)} {...props}>{children}</a>;
}

export function CardHeader({ title, status, className }: { title: ReactNode; status?: ReactNode; className?: string }) {
  return <div className={cx(styles.cardHead, className)}><h3 className={styles.cardTitle}>{title}</h3>{status ? <StatusPill>{status}</StatusPill> : null}</div>;
}

export function CardText({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx(styles.cardDesc, className)} {...props}>{children}</p>;
}

export function Stack({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.stack, className)}>{children}</div>;
}

export function StatusPill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx(styles.statusPill, className)}>{children}</span>;
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.prose, className)}>{children}</div>;
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.note, className)}>{children}</div>;
}

export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.highlight, className)}>{children}</div>;
}
