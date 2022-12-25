import React from "react";
import CryptoFeed from "../components/Crypto/CryptoFeed";
import "./PagesCSS/pages.css";
const Crypto = () => {
  return (
    <div className="p-5">
      <div className="div-cr">BITCOIN</div>
      <CryptoFeed />
    </div>
  );
};

export default Crypto;
