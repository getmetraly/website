import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import {
  ArchitectureDiagram,
  Callout,
  CodeBlock,
  EmbeddedDemo,
  Expandable,
  MdxStatus,
  Tabs,
} from "@/components/mdx/mdx-components";
import { Prose } from "@/components/ui/primitives";

type MDXComponents = Record<string, ComponentType<any> | string>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children?: ReactNode }) => <Prose>{children}</Prose>,
    h1: (props: ComponentPropsWithoutRef<"h1">) => <h1 {...props} />,
    h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 {...props} />,
    h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 {...props} />,
    p: (props: ComponentPropsWithoutRef<"p">) => <p {...props} />,
    ul: (props: ComponentPropsWithoutRef<"ul">) => <ul {...props} />,
    ol: (props: ComponentPropsWithoutRef<"ol">) => <ol {...props} />,
    li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => <blockquote {...props} />,
    code: (props: ComponentPropsWithoutRef<"code">) => <code {...props} />,
    pre: (props: ComponentPropsWithoutRef<"pre">) => <pre {...props} />,
    Callout,
    ArchitectureDiagram,
    Tabs,
    Expandable,
    EmbeddedDemo,
    CodeBlock,
    MdxStatus,
    ...components,
  };
}
