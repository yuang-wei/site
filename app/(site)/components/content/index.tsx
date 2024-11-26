import { Code } from "lucide-react";


import { TweetComponent } from "./tweet";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import { remarkObsidianImages } from "./remark-plugins";
import { Callout, createHeading, CustomLink, RoundedImage, Strikethrough, Table } from "./components";
import "katex/dist/katex.min.css";



let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  ImageGrid,
  a: CustomLink,
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
};


export function ContentRender(props) {
  return null
}
