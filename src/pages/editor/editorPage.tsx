import React, { useState, useEffect, Component, Ref } from "react";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import { Editor } from "@toast-ui/react-editor";
import * as E from "./editorStyle";
import cancleImg from "./img/cancleBtn.png";

function Popup(props: any) {
  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    console.log(fileImage);
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  const [scrollY, setScrollY] = useState(0);
  console.log(props);
  const { onClose, data } = props;
  console.log(onClose);
  console.log(data);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.pageYOffset));
    window.scrollTo(0, 0);
  }, [scrollY]);

  console.log(window.scrollY);
  const onClick = () => {
    onClose(false);
  };
  const onSave = () => {
    //저장
    onClose(false);
  };
  const onOnlyMe = () => {};
  return (
    <>
      <E.popup>
        <E.popupInner>
          {/* <div>제목 : {data.title}</div>
          <div>내용 : {data.content}</div> */}
          <E.postImage>
            <div className="title imageTitle">포스트 미리보기</div>
            <div>
              {fileImage ? (
                <img className="image" alt="sample" src={fileImage} />
              ) : (
                <div className="defaultImageBg">
                  <div className="defaultImage">포스트 이미지</div>
                </div>
              )}
              <div>
                <input name="imgUpload" type="file" accept="image/*" onChange={saveFileImage} />

                <button onClick={() => deleteFileImage()}>삭제</button>
              </div>
            </div>
          </E.postImage>
          <E.tag>
            <div className="title tagTitle">태그</div>
            <textarea className="tagInput" />
          </E.tag>
          <E.description>
            <div className="title descriptionTitle">설명</div>
            <textarea className="descriptionInput" />
          </E.description>
          <img className="cancleBtn" onClick={onClick} src={cancleImg} />
          <E.btnBox>
            <button className="onlyMeBtn" onClick={onOnlyMe}>
              나만보기
            </button>
            <button className="saveBtn" onClick={onSave}>
              저장
            </button>
          </E.btnBox>
        </E.popupInner>
      </E.popup>
    </>
  );
}

export default function EditorPage() {
  const [editor, setEditor] = useState({ title: "", content: "" });
  const [showPopup, setShowPopup] = useState(false);

  const editorRef: any = React.createRef();

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
    setEditor({ title: e.target.value, content: editor.content });
  };

  const handleChange = (e: any) => {
    console.log(e);
    setEditor({
      title: editor.title,
      content: editorRef.current.getInstance().getHTML(),
    });
  };
  const onClickEvent = () => {
    console.log(editor);
    setShowPopup(true);
  };
  return (
    <>
      <div>
        <E.title className="contentTitle">제목</E.title>
        <E.titleInput placeholder="제목을 입력하세요." onChange={handleInputChange} value={editor.title}></E.titleInput>
      </div>
      <Editor previewStyle="tab" height="700px" initialEditType="markdown" initialValue="" ref={editorRef} onChange={handleChange} />
      <div id="toastUIEditor">
        <div id="Button">
          <E.saveBtn className="btn_save" onClick={onClickEvent}>
            저장하기
          </E.saveBtn>
        </div>
      </div>
      {showPopup ? <Popup onClose={setShowPopup} data={editor} /> : null}
    </>
  );
}
