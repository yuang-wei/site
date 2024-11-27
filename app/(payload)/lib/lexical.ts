import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  BoldFeature,
  lexicalEditor,
  ParagraphFeature,
  IndentFeature,
  UnorderedListFeature,
  ChecklistFeature,
  LinkFeature,
  RelationshipFeature,
  BlockquoteFeature,
  UploadFeature,
  OrderedListFeature,
  UnderlineFeature,
  StrikethroughFeature,
  InlineCodeFeature,
  SuperscriptFeature,
  AlignFeature,
  TreeViewFeature
} from "@payloadcms/richtext-lexical";

export default lexicalEditor({
  features: ({ rootFeatures }) => ([
    ...rootFeatures,
    HeadingFeature({
      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }),
    // BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
    // FixedToolbarFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    InlineToolbarFeature(),
    InlineCodeFeature(),
    SuperscriptFeature(),
    AlignFeature(),
    HorizontalRuleFeature(),
    BoldFeature(),
    ParagraphFeature(),
    IndentFeature(),
    OrderedListFeature(),
    UnorderedListFeature(),
    ChecklistFeature(),
    LinkFeature(),
    RelationshipFeature(),
    BlockquoteFeature(),
    InlineToolbarFeature(),
    UploadFeature(),
  ])
})