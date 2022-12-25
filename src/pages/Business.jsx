import React from "react";
import BusinessFeed from "../components/Business/BusinessFeed";
import "./PagesCSS/pages.css";
const Business = () => {
  return (
    <div className="p-5">
      <div className="div-bus">BUSINESS</div>

      <BusinessFeed />
    </div>
  );
};

export default Business;
