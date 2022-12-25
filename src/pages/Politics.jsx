import React from "react";
import PoliticsFeed from "../components/Politics/PoliticsFeed";
import "./PagesCSS/pages.css";
const Politics = () => {
  return (
    <div className="p-5">
      <div className="div-pol">POLITICS</div>
      <PoliticsFeed />
    </div>
  );
};

export default Politics;
