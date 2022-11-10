import React, { useState, useEffect } from "react";
import { Location } from "constants/index";
import Select from "react-select";

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
  const [si, setSi] = useState<tProps>(siGroup[0]);
  const [gu, setGu] = useState<tProps>(guGroup[0]);

  const siHandler = (props: any) => {
    setSi(props);
  };
  const guHandler = (props: any) => {
    setGu(props);
  };

  useEffect(() => {
    const newGroup: tProps[] = Location[si.label].map((_gu, index) => {
      return { value: `gu_${index}`, label: _gu };
    });

    setGuGroup(newGroup);
    setGu(newGroup[0]);
  }, [si]);

  useEffect(() => {
    setValue(`${si.label} ${gu.label}`);
  }, [gu]);

  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <div style={{ minWidth: "70px" }}>광역시/도:</div>
      <div style={{ minWidth: "160px" }}>
        <Select defaultValue={si} options={siGroup} formatOptionLabel={formatOptionLabel} onChange={siHandler} value={si} />
      </div>
      <div style={{ minWidth: "70px" }}>시/군/구:</div>
      <div style={{ minWidth: "160px" }}>
        <Select defaultValue={gu} options={guGroup} formatOptionLabel={formatOptionLabel} onChange={guHandler} value={gu} />
      </div>
    </div>
  );
}
