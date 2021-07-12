import React from "react";
import { Wrap } from "../style.css";

import Player from "../Player";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";

import { data } from "../Data/tocarlacopa";

const VideoHome = () => {
  const chapter = data[5];

  return (
    <Wrap>
      <Header posmode="fixed" />

      <Player chapter={chapter} />
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  );
};

export default VideoHome;
