function getFilename(meta = "") {
  const filenameMatch = meta.match(/filename="([^"]+)"|filename=([^\s]+)/);
  return filenameMatch?.[1] ?? filenameMatch?.[2] ?? undefined;
}

function transformNode(node) {
  if (!node || typeof node !== "object") {
    return node;
  }

  if (node.type === "code") {
    const attributes = [
      {
        type: "mdxJsxAttribute",
        name: "language",
        value: node.lang || "txt",
      },
      {
        type: "mdxJsxAttribute",
        name: "code",
        value: node.value || "",
      },
    ];

    const filename = getFilename(node.meta);

    if (filename) {
      attributes.unshift({
        type: "mdxJsxAttribute",
        name: "filename",
        value: filename,
      });
    }

    return {
      type: "mdxJsxFlowElement",
      name: "CodeBlock",
      attributes,
      children: [],
    };
  }

  if (Array.isArray(node.children)) {
    node.children = node.children.map(transformNode);
  }

  return node;
}

export function remarkCodeBlocks() {
  return (tree) => {
    transformNode(tree);
  };
}
