import React from "react";
import "./LatestNews.css";
import NewsCard from "./NewsCard";
function LatestNews() {
  return (
    <div className="latest__news">
      <h4>LATEST HOT CRIC NEWS</h4>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <div className="read__more">
        <a href="">Read More</a>
      </div>
    </div>
  );
}

export default LatestNews;
