import React, { useRef } from 'react'
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditorCore from 'suneditor/src/lib/core';
const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

export default function PostEditor() {
    const editorRef = useRef<SunEditorCore>();

    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editorRef.current = sunEditor;
    }

  return (
    <div>
        <SunEditor
        setAllPlugins
            setOptions={{
                buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize', 'formatBlock'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor', 'textStyle'],
                    '/', // Line break
                    ['removeFormat'],
                    ['outdent', 'indent'],
                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                    ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                    ['fullScreen', 'showBlocks', 'codeView'],
                    ['preview', 'print'],
                    ['save']
                ],
                imageUploadSizeLimit: 1024 * 1024 * 10,
                defaultTag: 'div',
                showPathLabel: false,
                resizingBar: false,
                charCounter: true,
                width: '100%',
                height: '100%',
                placeholder: '내용을 입력해주세요',
                imageWidth: "240px",
                imageHeight: "auto",
                imageAccept: 'image/*',
            }}
            
            onImageUpload={(targetImgElement: HTMLImageElement, index: number, state: string, size ) => {
                console.log(targetImgElement, index, state, size);
            }}
            getSunEditorInstance={getSunEditorInstance}
            lang="ko"
            defaultValue='<p>Hello world!</p>'
            setContents='<p>Hello world!</p>'
            autoFocus
            
            
        />
    </div>
  )
}
