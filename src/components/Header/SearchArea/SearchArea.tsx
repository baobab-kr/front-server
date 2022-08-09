import React, { Dispatch, SetStateAction, useState } from "react";
import { SearchOverlay, SearchContainer, SearchWrapper, CustomInput } from "./style";
import { BsSearch, BsXSquareFill } from "react-icons/bs";

type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SearchArea({ open, setOpen }: tOpen): JSX.Element {
  const [searchWord, setSearchWord] = useState<string>("");

  const closeOverlay = () => {
    setOpen(false);
  };

  const prevet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const cancle = () => {
    setSearchWord("");
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
          />
          <BsXSquareFill color="#99999" size={30} onClick={cancle} style={{ margin: "8px" }} />
        </SearchWrapper>
      </SearchContainer>
    </SearchOverlay>
  );
}
