"use client"

import { useEffect, useRef } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditorComponent = ({ onChange, value }) => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      // Access Suneditor instance through editorRef.current
    }
  }, [editorRef]);

  return (
    <SunEditor
      ref={editorRef}
      onChange={onChange}
      setContents={value}
      setOptions={{
        // Suneditor options go here
      }}
    />
  );
};

export default SunEditorComponent;
