import React from "react";
import "./NewsFeed.css";

const NewsFeed = ({ title, url, urlToImage, description }) => {
  return (
    <div className="cont">
      <img className="img" src={urlToImage} />

      <div>
        <a className="text-a" href={url}>
          <div className="div-text1">{title}</div>
          <div className="div-text2">{description}</div>
        </a>
      </div>
    </div>
  );
};

export default NewsFeed;
