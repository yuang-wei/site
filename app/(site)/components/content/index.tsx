import React from "react";
import Link from "next/link";

function slugify(str) {
  if (typeof str !== 'string') return '';

  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}
const headerClassnameMap = {
  h1: 'scroll-m-20 text-3xl font-bold tracking-tight',
  h2: 'scroll-m-20 text-2xl font-medium tracking-tight'
}
const Heading = ({ tag = 'h1', children }) => {
  // 从children中提取文本内容
  const textContent = React.Children.toArray(children)
    .map(child => {
      if (typeof child === 'string') return child;
      // @ts-ignore
      if (child.props && child.props.text) return child.props.text;
      return '';
    })
    .join('');

  const slug = slugify(textContent);
  const level = parseInt(tag.substring(1), 10);

  return React.createElement(
    tag,
    { id: slug, className: headerClassnameMap[tag] },
    [
      React.createElement(
        "a",
        {
          key: `link-${slug}`,
          href: `#${slug}`,
          className: "anchor",
          "aria-hidden": true,
          tabIndex: -1,
        },
      ),
      ...React.Children.toArray(children)
    ]
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;

const Text = ({ text }) => text;

const CustomLink = ({ fields, children }) => {
  const { url, newTab, linkType } = fields;

  // 处理不同类型的链接
  let href = url;
  if (linkType === 'internal' && fields.doc) {
    href = `/${fields.doc.value.slug}`;
  }

  return (
    <Link
      href={href}
      target={newTab ? '_blank' : undefined}
      className="underline cursor-pointer"
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  );
};

const AutoLink = ({ fields, children }) => {
  const { url } = fields;
  return <a href={url} className="underline cursor-pointer">{children}</a>;
};

// 组件映射表
export const componentMap = {
  root: ({ children }) => <article className="prose prose-quoteless prose-neutral dark:prose-invert">{children}</article>,
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  link: CustomLink,
  autolink: AutoLink,
};


const Renderer = ({ node }) => {
  // 如果节点是字符串，直接返回
  if (typeof node === 'string') return node;

  // 如果节点是纯文本
  if (node.type === 'text') {
    return node.text;
  }
  // 获取对应的组件
  const Component = componentMap[node.type] || <></>;

  // 处理子节点
  const children = Array.isArray(node.children)
    ? node.children.map((child, index) => {
      return <Renderer key={index} node={child} />
    })
    : null;

  // 构建组件props
  const props = {
    ...node,
    children,
  };

  // 特殊处理heading组件
  if (node.type === 'heading') {
    props.tag = node.tag;
  }

  return <Component {...props} />;
};

export default Renderer;