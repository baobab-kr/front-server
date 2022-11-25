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
  setValue: (location: string) => void;
};

export default function LocationSelector({ setValue }: tValue): JSX.Element {
  const siGroup: tProps[] = Object.keys(Location).map((_si, index) => {
    return { value: `si_${index}`, label: _si };
  });
  const guGroupDefault: tProps[] = Location[siGroup[0].label].map((_gu, index) => {
    return { value: `gu_${index}`, label: _gu };
  });
  const [guGroup, setGuGroup] = useState<tProps[]>(guGroupDefault);
  const [si, setSi] = useState<tProps>();
  const [gu, setGu] = useState<tProps>();

  const siHandler = (props: any) => {
    setSi(props);
  };
  const guHandler = (props: any) => {
    setGu(props);
  };

  useEffect(() => {
    if (si !== undefined) {
      const newGroup: tProps[] = Location[si!.label].map((_gu, index) => {
        return { value: `gu_${index}`, label: _gu };
      });

      setGuGroup(newGroup);
      setGu(newGroup[0]);
    }
  }, [si]);

  useEffect(() => {
    if (si !== undefined && gu !== undefined) {
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
