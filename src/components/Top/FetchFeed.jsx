{
  /* fetching top feed*/
}
import "../NewsFeed.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "../NewsFeed";
const FetchFeed = () => {
  const [articles, setArticels] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=gb&apiKey=294af604a73448ed8929cdfad2e2a1ea`
        )
        .catch(function (error) {
          if (error) {
            alert("check internet connection");
          }
        });
      setArticels(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsFeed
            key={article.url}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default FetchFeed;
