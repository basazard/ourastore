"use client";
import { transactionStep } from "../content-list/contentList";
import { useState } from "react";

export default function HowToTransaction(props) {
  const [closed, setClosed] = useState(false);

  const closeContent = (e) => {
    e.preventDefault();
    setClosed(!closed);
  };

  return (
    <div className="text-secondary-foreground flex flex-col gap-2 text-xs font-extralight">
      <button
        onClick={closeContent}
        type="button"
        className="px-3 py-2 rounded-md bg-muted flex flex-row gap-2 justify-between items-center w-full"
      >
        <span>Deskripsi dan cara melakukan transaksi</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </svg>
      </button>
      <div
        className={`w-full bg-muted rounded-md px-3 pt-2 pb-12 flex flex-col gap-2 ${
          closed ? "hidden" : ""
        }`}
      >
        <div
          className="service-instruction"
          dangerouslySetInnerHTML={{ __html: props.instruction }}
        />
      </div>
    </div>
  );
}
