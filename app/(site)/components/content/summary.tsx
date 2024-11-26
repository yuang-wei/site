export function getSummary(content: string, maxLength: number = 100): string {
  const plainText = content
    // 移除代码块（包括语言标识）
    .replace(/```[\s\S]*?```/g, "")
    // 移除行内代码
    .replace(/`.*?`/g, "")

    // 移除 Obsidian 特殊语法
    // 移除 Wiki 式链接 [[Page]] 或 [[Page|Alias]]
    .replace(/\[\[([^\]|]*\|)?([^\]]*)\]\]/g, "$2")
    // 移除嵌入语法 ![[image.png]]
    .replace(/!\[\[.*?\]\]/g, "")
    // 移除标签 #tag
    .replace(/#[\w/-]+/g, "")
    // 移除 callout 块 > [!note]
    .replace(/>\s*\[!.*?\][\s\S]*?(?=\n\n|\n$|$)/g, "")

    // 移除传统 Markdown 语法
    // 移除图片 ![alt](url)
    .replace(/!\[.*?\]\(.*?\)/g, "")
    // 移除链接 [text](url)
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    // 移除标题标记
    .replace(/^#{1,6}\s+/gm, "")
    // 移除强调标记 (* _ ~)
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // 粗体
    .replace(/(\*|_)(.*?)\1/g, "$2") // 斜体
    .replace(/~~(.*?)~~/g, "$1") // 删除线

    // 移除待办标记（包括嵌套的）
    .replace(/^[\s-]*\[[x ]\]\s*/gim, "")

    // 移除列表标记
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")

    // 移除表格语法
    .replace(/\|.*?\|/g, "")
    .replace(/^[-:|]+$/gm, "")

    // 移除引用标记
    .replace(/^>\s+/gm, "")

    // 移除水平分割线
    .replace(/^[-*_]{3,}\s*$/gm, "")

    // 移除 URL
    .replace(/https?:\/\/\S+/g, "")

    // 处理换行和空白
    .replace(/\n+/g, " ") // 将换行替换为空格
    .replace(/\s+/g, " ") // 将多个空格替换为单个空格
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // 在最后一个完整词处截断
  return plainText.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}
