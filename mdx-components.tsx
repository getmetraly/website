import type { MDXComponents } from "mdx/types";
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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <Prose>{children}</Prose>,
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    p: (props) => <p {...props} />,
    ul: (props) => <ul {...props} />,
    ol: (props) => <ol {...props} />,
    li: (props) => <li {...props} />,
    blockquote: (props) => <blockquote {...props} />,
    code: (props) => <code {...props} />,
    pre: (props) => <pre {...props} />,
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
