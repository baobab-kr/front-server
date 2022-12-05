import React, { useState, useEffect } from "react";

import { Editor } from "@toast-ui/react-editor";
import * as E from "./editorStyle";
import ReactTagInput from "@pathofdev/react-tag-input";

import { ICreateBoard, IEditBoard } from "Types/main";
import { CreateBoard, EditBoard } from "api/board";
import { useLocation, useNavigate } from "react-router-dom";

import ThumbnailImg from "assets/ThumbnailImg.png";

// Toast Editor
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import API from "api";
import Swal from "sweetalert2";

type props = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  data: ICreateBoard;
  setData: React.Dispatch<React.SetStateAction<ICreateBoard>>;
  boardId: string;
};
function Popup({ onClose, data, setData, boardId }: props) {
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [description, setDescription] = useState<string>("");
  const [fileImage, setFileImage] = useState<string>("");
  const [fileList, setFileList] = useState<FileList>();

  const navigate = useNavigate();

  const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileLists = e.target.files;
    if (fileLists !== null) {
      // setFileImage(fileImage);
      setFileImage(URL.createObjectURL(fileLists[0]));
      setFileList(fileLists);
      console.log("asd", fileList);
    }
  };

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
    if (isPublic) {
      onSave();
    } else {
      onOnlyMe();
    }
  };
  const onSave = () => {
    if (description === "") {
      Swal.fire("필수입력", "설명을 입력해주세요!", "error");
    }
    const formData: any = new FormData();
    formData.append("title", data.title);
    formData.append("description", description);
    formData.append("content", data.content);
    formData.append("board_status", isPublic ? 0 : 1);
    if (fileList) formData.append("thumbnail", fileList![0]);
    console.log("data", data.tag_name);
    if (data.tag_name.length === 1) {
      formData.append("tag_name[0]", data.tag_name[0]);
    } else {
      for (let i = 0; i < data.tag_name.length; i++) {
        formData.append("tag_name", data.tag_name[i]);
      }
    }
    console.log("_createBoard", formData.get("tag_name"));

    CreateBoard(formData)
      .then((res) => {
        console.log("Board 생성 성공", res);

        navigate("/");
      })
      .catch((err) => {
        console.log("Board 생성 실패", err);
      });
  };

  const onEdit = () => {
    const formData: any = new FormData();
    formData.append("board_id", boardId.toString());
    formData.append("title", data.title);
    formData.append("description", description);
    formData.append("content", data.content);
    formData.append("board_status", isPublic ? 0 : 1);
    if (fileList) formData.append("thumbnail", fileList![0]);
    console.log("data", data.tag_name);
    if (data.tag_name.length === 1) {
      formData.append("tag_name[0]", data.tag_name[0]);
    } else {
      for (let i = 0; i < data.tag_name.length; i++) {
        formData.append("tag_name", data.tag_name[i]);
      }
    }
    console.log("_createBoard", formData.get("tag_name"));
    console.log(typeof formData.get("board_id"));
    EditBoard(formData)
      .then((res) => {
        console.log("Board 수정 성공", res);

        navigate("/");
      })
      .catch((err) => {
        console.log("Board 수정 실패", err);
        Swal.fire("Board 수정 실패 하였습니다.");
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

  return (
    <>
      <E.popup>
        <E.popupInner>
          <E.Position>
            <div>
              <E.PopupTitle>포스트 썸네일</E.PopupTitle>
              <input type="file" id="imgUpload" style={{ display: "none" }} onChange={imageSelectHandler}></input>
              <label htmlFor="imgUpload">
                <E.ThumbnailArea>
                  <img src={fileImage === "" ? ThumbnailImg : fileImage} alt="이미지 등록하기" />
                </E.ThumbnailArea>
              </label>
            </div>
            <E.PopupBtnArea>
              <E.PopuoButton active={isPublic} onClick={() => setIsPublic(true)}>
                전체 공개
              </E.PopuoButton>
              <E.PopuoButton active={!isPublic} onClick={() => setIsPublic(false)}>
                나만 보기
              </E.PopuoButton>
            </E.PopupBtnArea>
          </E.Position>
          <E.Position>
            <div>
              <E.PopupTitle>포스트 설명</E.PopupTitle>
              <E.Textarea placeholder="설명을 입력하세요!" maxLength={4000} value={description} onChange={(e) => setDescription(e.target.value)}></E.Textarea>
            </div>
            <E.PopupBtnArea>
              <E.PopuoButton active={false} onClick={onClick}>
                취소
              </E.PopuoButton>
              {boardId === "" ? (
                <E.PopuoButton active={true} onClick={onSave}>
                  저장
                </E.PopuoButton>
              ) : (
                <E.PopuoButton active={true} onClick={onEdit}>
                  수정
                </E.PopuoButton>
              )}
            </E.PopupBtnArea>
          </E.Position>
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

  const tagHandler = (tag: string[]) => {
    setEditor({ ...editor, tag_name: [...tag] });
  };

  const onClickEvent = () => {
    if (editor.title.replace(" ", "") === "") {
      alert("제목을 입력해주세요");
      return;
    }
    setEditor({ ...editor, content: editorRef.current.getInstance().getHTML() });
    setShowPopup(true);
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("location.state", location.state);
    if (location.state !== null && location.state.data.content) {
      editorRef.current?.getInstance().setHTML(location.state.data.content);
      tagHandler(location.state.data.tags.map((q: any) => q.tag_name));
    }

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
          <E.TagSelectorArea>
            <ReactTagInput
              tags={editor.tag_name}
              placeholder="태그를 입력하세요"
              editable={true}
              readOnly={false}
              removeOnBackspace={true}
              maxTags={14}
              onChange={(newTags) => tagHandler(newTags)}
            />
          </E.TagSelectorArea>
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
        ref={editorRef}
        placeholder="당신의 바오밥 나무에 가지를 추가해보세요..."
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
        hooks={{
          addImageBlobHook: (blob, callback) => {
            const formData = new FormData();
            formData.append("ToastImage", blob);

            console.log("add", blob);

            API({
              method: "post",
              url: "/jobs/UploadToastUiImage",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            })
              .then(async function (response) {
                callback(`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${response.data}`, "image");
              })
              .catch(function (response) {
                console.log("err", response);
                callback("image_load_fail", "image");
              });
          },
        }}
      />
      {showPopup ? <Popup onClose={setShowPopup} data={editor} setData={setEditor} boardId={location.state !== null ? location.state.id : ""} /> : null}
    </>
  );
}
