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
  const spiders = Math.ceil((parseFloat(wallHeight) / 0.4 + 1) * (parseFloat(wallLength) / 1.8) * 1.15);
  const walers =
    Math.ceil(
      ((parseFloat(wallHeight) * parseFloat(wallLength) * 9.40607364) / 12) *
        1.15
    ) * 2;
  const strongbacks_Braces =
    Math.ceil(
      (parseFloat(wallHeight) * 2.41 * parseFloat(wallLength) /
        1.8 /
        0.305 /
        12
    ) * 1.45);

  return (
    <div className="flex flex-col text-sm/6 sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>
          &#8226; {parseFloat(wallThickness) * 1000}(mm) Ties ( @ 16&quot; )
          o/c:
        </strong>
        <span className="text-right">{ties}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Camlocks:</strong>
        <span className="text-right">{camlocks}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Spiders:</strong>
        <span className="text-right">{spiders}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Walers ( 2x4x12 @ 16&quot; ) o/c:</strong>
        <span className="text-right">{walers}</span>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Braces & SBs ( 2x4x12 @ 72&quot; ) o/c:</strong>
        <span className="text-right">{strongbacks_Braces}</span>
      </div>
    </div>
  );
}
