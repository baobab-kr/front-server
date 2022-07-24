import React, { useState, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
import * as E from "./editorStyle";
import cancleImg from "./img/cancleBtn.png";
import ReactTagInput from "@pathofdev/react-tag-input";

import { ICreateBoard, IEditBoard } from "@src/Types/main";
import { CreateBoard, EditBoard } from "../../api/board";
import { useLocation, useNavigate } from "react-router-dom";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Switch } from "antd";

type props = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  data: ICreateBoard;
  setData: React.Dispatch<React.SetStateAction<ICreateBoard>>;
  boardId: string;
};
function Popup({ onClose, data, setData, boardId }: props) {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  const navigate = useNavigate();

  const saveFileImage = (e: any) => {
    setData({ ...data, thumbnail: e.target.files[0] });
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(data.thumbnail);
    setData({ ...data, thumbnail: "" });
  };

  const descriptionHandle = (e: any) => {
    setData({ ...data, description: e.target.value });
  };

  const onClick = () => {
    onClose(false);
  };
  const onSaveClick = () => {
    if (toggle) {
      onSave();
    } else {
      onOnlyMe();
    }
  };
  const onSave = () => {
    setData({ ...data, board_status: 0 });
    CreateBoard(data)
      .then((res) => {
        console.log("Board 생성 성공", res);

        navigate("/");
      })
      .catch((err) => {
        console.log("Board 생성 실패", err);
      });
  };

  const onEdit = (data: IEditBoard) => {
    console.log(data);
    EditBoard(data)
      .then((res) => {
        console.log("Board 수정 성공", res);

        navigate("/");
      })
      .catch((err) => {
        console.log("Board 수정 실패", err);
      });
  };

  const onOnlyMe = () => {
    setData({ ...data, board_status: 1 });
    CreateBoard(data)
      .then((res) => {
        console.log("Board 생성 성공", res);

        navigate("/");
      })
      .catch((err) => {
        console.log("Board 생성 실패", err);
      });
  };
  const editdata = { title: data.title, content: data.content, description: data.description, tag_name: data.tag_name, board_id: parseInt(boardId) };
  return (
    <>
      <E.popup>
        <E.popupInner>
          <E.postImage>
            <div className="title imageTitle">포스트 미리보기</div>
            <div>
              {data.thumbnail ? (
                <img className="image" alt="sample" src={data.thumbnail} />
              ) : (
                <div className="defaultImageBg">
                  <div className="defaultImage">포스트 이미지</div>
                </div>
              )}
              <div>
                <input className="imgUpload" name="imgUpload" type="file" accept="image/*" onChange={saveFileImage} />

                <button className="imgDeleteBtn" onClick={() => deleteFileImage()}>
                  삭제
                </button>
              </div>
            </div>
          </E.postImage>

          <E.description>
            <div className="title descriptionTitle">설명</div>
            <textarea className="descriptionInput" value={data.description} onChange={descriptionHandle} />
          </E.description>

          <img className="cancleBtn" onClick={onClick} src={cancleImg} alt="cancle" />

          {boardId === "" ? (
            <E.btnBox>
              <Switch checkedChildren="공개" unCheckedChildren="비공개" defaultChecked onChange={clickedToggle} />
              <button className="saveBtn" onClick={onSaveClick}>
                저장
              </button>
            </E.btnBox>
          ) : (
            <E.btnBox>
              <button className="saveBtn" onClick={() => onEdit(editdata)}>
                수정
              </button>
            </E.btnBox>
          )}
        </E.popupInner>
      </E.popup>
    </>
  );
}

export default function EditorPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const editorRef: any = React.createRef();

  const location: any = useLocation();
  const [editor, setEditor] = useState<ICreateBoard>({
    title: location.state !== null ? location.state.data.title : "",
    description: location.state !== null ? location.state.data.description : "",
    content: location.state !== null ? location.state.data.content : "",
    board_status: 0,
    thumbnail: "",
    tag_name: [],
  });

  const titleHandler = (e: any) => {
    setEditor({ ...editor, title: e.target.value });
  };

  const handleChange = () => {
    setEditor({ ...editor, content: editorRef.current.getInstance().getHTML() });
  };

  const tagHandler = (tag: string[]) => {
    setEditor({ ...editor, tag_name: [...tag] });
  };

  const onClickEvent = () => {
    console.log(editor);
    if (editor.title.replace(" ", "") === "") {
      alert("제목을 입력해주세요");
      return;
    }
    setShowPopup(true);
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <E.TitleWrpper>
        <E.titleInput placeholder="제목을 입력하세요." onChange={titleHandler} value={editor.title}></E.titleInput>
        <div style={{ display: "flex", gap: "10px", width: "100%", justifyContent: "space-between" }}>
          <div style={{ width: "50%" }}>
            <ReactTagInput
              tags={editor.tag_name}
              placeholder="태그를 입력하세요"
              editable={true}
              readOnly={false}
              removeOnBackspace={true}
              onChange={(newTags) => tagHandler(newTags)}
            />
          </div>
          {location.state !== null ? (
            <E.saveBtn className="btn_edit" onClick={onClickEvent}>
              Edit
            </E.saveBtn>
          ) : (
            <E.saveBtn className="btn_save" onClick={onClickEvent}>
              SAVE
            </E.saveBtn>
          )}
        </div>
      </E.TitleWrpper>
      <Editor
        previewStyle={windowWidth > 720 ? "vertical" : "tab"}
        theme={localStorage.getItem("Theme") === "dark" ? "dark" : "light"}
        height={`${Math.max(windowHeight - 250, 300)}px`}
        initialEditType="markdown"
        initialValue={location.state !== null ? location.state.data.content : ""}
        ref={editorRef}
        onChange={handleChange}
        placeholder="당신의 바오밥 나무에 가지를 추가해보세요..."
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
      />
      {showPopup ? <Popup onClose={setShowPopup} data={editor} setData={setEditor} boardId={location.state !== null ? location.state.id : ""} /> : null}
    </>
  );
}
