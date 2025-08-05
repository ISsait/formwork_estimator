"use client";

import React from "react";

type WallFormworkProps = {
  wallHeight: string;
  wallLength: string;
  wallThickness: string;
};

export default function WallFormwork(
  props: WallFormworkProps
): React.JSX.Element {
  const { wallHeight, wallLength, wallThickness } = props;

  const ties = Math.ceil(
    ((parseFloat(wallHeight) * parseFloat(wallLength)) / 0.16537778) * 1.15
  );
  const camlocks = ties * 2;
  const walers =
    Math.ceil(
      ((parseFloat(wallHeight) * parseFloat(wallLength) * 9.40607364) / 12) *
        1.15
    ) * 2;

  return (
    <div className="flex flex-col text-sm/6 sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong className="bg-amber-950">&#8226; {parseFloat(wallThickness) * 1000}(mm) Ties ( @ 16&quot; ) o/c:</strong>
        <span className="text-right">{ties}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Camlocks:</strong>
        <span className="text-right">{camlocks}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Walers ( 2x4x12 @ 16&quot; ) o/c:</strong>
        <span className="text-right">{walers}</span>
      </div>
    </div>
  );
}
