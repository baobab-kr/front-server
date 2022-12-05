import React, { useState, useEffect } from "react";
import { Location } from "constants/index";
import Select from "react-select";
import { Title } from "./style";
type tProps = { value: string; label: string };
const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

type tValue = {
  value: string;
  setValue: (location: string) => void;
};

export default function LocationSelector({ value, setValue }: tValue): JSX.Element {
  const siGroup: tProps[] = Object.keys(Location).map((_si, index) => {
    return { value: `si_${index}`, label: _si };
  });
  const guGroupDefault: tProps[] = [];
  const [guGroup, setGuGroup] = useState<tProps[]>(guGroupDefault);
  const [si, setSi] = useState<tProps | null>();
  const [gu, setGu] = useState<tProps | null>();

  const siHandler = (props: any) => {
    setSi(props);
  };
  const guHandler = (props: any) => {
    setGu(props);
  };

  useEffect(() => {
    console.log("value", value);
    if (value === "") {
      guHandler(null);
      siHandler(null);
      setGuGroup([]);
    }
  }, [value]);

  useEffect(() => {
    if (si) {
      const newGroup: tProps[] = Location[si!.label].map((_gu, index) => {
        return { value: `gu_${index}`, label: _gu };
      });

      setGuGroup(newGroup);
      setGu(newGroup[0]);
    }
  }, [si]);

  useEffect(() => {
    if (si && gu) {
      setValue(`${si!.label} ${gu!.label}`);
    }
  }, [gu]);

  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center", fontSize: "14px" }}>
      <div style={{ minWidth: "35px" }}>
        <Title>시/도:</Title>
      </div>
      <Select options={siGroup} formatOptionLabel={formatOptionLabel} onChange={siHandler} value={si} />
      <Title>구:</Title>
      <Select options={guGroup} formatOptionLabel={formatOptionLabel} onChange={guHandler} value={gu} />
    </div>
  );
}
