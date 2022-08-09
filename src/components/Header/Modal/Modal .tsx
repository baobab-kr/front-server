import React, { useEffect, useRef, Dispatch, SetStateAction, ReactNode } from "react";

type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
export default function Modal({ open, setOpen, children }: tOpen): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = (e: any) => {
    if (open && (!wrapperRef.current || !wrapperRef.current.contains(e.target))) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="modal">
      {children}
    </div>
  );
}
