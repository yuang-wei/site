import { visit } from "unist-util-visit";

export function remarkObsidianImages() {
  return (tree) => {
    visit(tree, "text", (node) => {
      const regex = /!\[\[(.*?)\]\]/g;
      const value = node.value;
      const matches = value.match(regex);

      if (matches) {
        matches.forEach((match) => {
          const imageName = match.slice(3, -2);
          node.type = "image";
          node.url = `attachments/${imageName}`;
          node.alt = imageName;
          delete node.value;
        });
      }
    });
  };
}