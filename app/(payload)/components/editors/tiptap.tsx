"use client"

import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({ value, onChange }) {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
  ]
  return (
    <div>
      1122
      <EditorProvider extensions={extensions} content={value}></EditorProvider>
    </div>
  )
}