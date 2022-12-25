import React from "react";
import FilmsEntertainmentFeed from "../components/Entertainment/FilmsEntertainmentFeed";

import "./PagesCSS/pages.css";
const FilmsEntertainment = () => {
  return (
    <div className="p-5">
      <div className="div-film">Entertainment</div>
      <FilmsEntertainmentFeed />
    </div>
  );
};

export default FilmsEntertainment;

