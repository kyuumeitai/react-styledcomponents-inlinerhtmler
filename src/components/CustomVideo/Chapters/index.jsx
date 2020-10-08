import React from "react";
import { WrapMenu } from "../style.css";
import Chapter from "../Chapter";

const Chapters = ({ chapters, show = "top", filter }) => {
  return (
    <WrapMenu>
      <div
        className={`hero-chapters ${filter ? "withchapters-" + filter : ""}`}
      >
        {chapters.map((chapter, index) => {
          return <Chapter chapter={chapter} key={index} />;
        })}
      </div>
    </WrapMenu>
  );
};

export default Chapters;
