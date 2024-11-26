import { type SerializedEditorState } from 'lexical';

type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
  format?: number;
  version?: number;
  style?: string;
  mode?: string;
  direction?: string;
  url?: string;
};

export function lexicalToMarkdown(data: SerializedEditorState): string {
  if (!data) return '';

  const rootNode = data.root;
  return processNode(rootNode);
}

function processNode(node): string {
  if (!node) return '';

  switch (node.type) {
    case 'root':
      return processChildren(node);

    case 'text':
      let text = node.text || '';

      // 处理文本格式
      if (node.format) {
        if (node.format & 1) text = `**${text}**`; // 粗体
        if (node.format & 2) text = `*${text}*`;   // 斜体
        if (node.format & 4) text = `~~${text}~~`; // 删除线
        if (node.format & 8) text = `\`${text}\``; // 代码
      }
      return text;

    case 'paragraph':
      const content = processChildren(node);
      return `${content}\n\n`;

    case 'heading':
      const level = (node as any).tag?.replace('h', '') || '1';
      const headingContent = processChildren(node);
      return `${'#'.repeat(parseInt(level))} ${headingContent}\n\n`;

    case 'list':
      const listItems = processChildren(node);
      const listType = (node as any).listType === 'number' ? '1. ' : '- ';
      return listItems
        .split('\n')
        .filter(Boolean)
        .map(item => `${listType}${item}`)
        .join('\n') + '\n\n';

    case 'listitem':
      return processChildren(node) + '\n';

    case 'quote':
      const quoteContent = processChildren(node);
      return `> ${quoteContent}\n\n`;

    case 'code':
      const codeContent = processChildren(node);
      const language = (node as any).language || '';
      return `\`\`\`${language}\n${codeContent}\n\`\`\`\n\n`;

    case 'link':
      const linkText = processChildren(node);
      return `[${linkText}](${node.url})`;

    case 'image':
      const alt = (node as any).altText || '';
      return `![${alt}](${node.url})\n\n`;

    default:
      return processChildren(node);
  }
}

function processChildren(node: LexicalNode): string {
  if (!node.children) return '';
  return node.children.map(child => processNode(child)).join('');
}