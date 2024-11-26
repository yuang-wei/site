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
  OrderedListFeature
} from "@payloadcms/richtext-lexical";

export default lexicalEditor({
  features: ({ rootFeatures }) => ([
    ...rootFeatures,
    HeadingFeature({
      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }),
    // BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
    FixedToolbarFeature(),
    InlineToolbarFeature(),
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
    UploadFeature()
  ])
})