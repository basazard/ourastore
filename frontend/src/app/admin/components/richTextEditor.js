"use client";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../richTextEditor.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export const RichTextEditor = ({ onContentChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (newState) => {
    setEditorState(newState);
    const rawContentState = convertToRaw(newState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    onContentChange(htmlContent);
  };

  return (
    <>
      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
    </>
  );
};
