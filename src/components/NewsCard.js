import React from "react";
import "./NewsCard.css";
function NewsCard() {
  return (
    <div className="news__card">
      <div className="leftside__newscard">
        <div className="news__image">
          <img
            src="https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1681997881940_MS_Dhoni.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="rightside__newscard">
        <div className="header__tags">
          <a href="">CHENNAI SUPER KINGS</a>
          <a href="">ROYAL CHALLERGERS BANGALORE</a>
          <a href="">INDIAN PREMIER LEAGUE 2023</a>
        </div>

        <div className="news__heading">
          <h3>
            IPL 2023 | Key Players Battles To Watch Out For CSK vs SRH CSK vs
            SRH: Fantasy Tips
          </h3>
        </div>

        <div className="news__content">
          <p>
            Chennai will host Sunrisers Hyderabad in the 29th match of the
            Indian Premier League.
          </p>
        </div>

        <div className="news__pusblished">
          <span>22 minutes ago</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
