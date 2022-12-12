import React, { Dispatch, SetStateAction, useState, KeyboardEvent } from "react";
import { SearchOverlay, SearchContainer, SearchWrapper, CustomInput, XBtn } from "./style";
import { BsSearch, BsXSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SearchArea({ open, setOpen }: tOpen): JSX.Element {
  const [searchWord, setSearchWord] = useState<string>("");
  const navigate = useNavigate();
  const closeOverlay = () => {
    setOpen(false);
    setSearchWord("");
  };

  const prevet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const cancle = () => {
    setSearchWord("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?title=${searchWord}`);
      setOpen(false);
      setSearchWord("");
    }
  };

  return (
    <SearchOverlay open={open} onClick={closeOverlay}>
      <SearchContainer onClick={prevet}>
        <SearchWrapper>
          <BsSearch color="#99999" size={30} style={{ margin: "8px" }} />
          <CustomInput
            type="text"
            placeholder="어떤 걸 찾고 계세요?"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <XBtn>
            <BsXSquareFill color="#99999" size={30} onClick={cancle} />
          </XBtn>
        </SearchWrapper>
      </SearchContainer>
    </SearchOverlay>
  );
}
