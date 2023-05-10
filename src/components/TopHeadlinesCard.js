import React from "react";
import "./TopHeadlinesCard.css";
function TopHeadlinesCard() {
  const news = [
    {
      news_image:
        "https://ik.imagekit.io/c7syb8qpjp/oc/tr:h-373/oc-dashboard/news-images-prod/1682881783129_359144.jpg",
      news_title:
        "Everytime Someone Missed The Yorker…, Tim David After Explosive Run-Chase vs RR",
      news_published: "25min ago",
    },
    {
      news_image:
        "https://ik.imagekit.io/c7syb8qpjp/oc/tr:h-373/oc-dashboard/news-images-prod/1682883944206_a.jpg",
      news_title:
        "Organised Life Outside Cricket… Yashasvi Jaiswal after Sparkling Ton against MI",
      news_published: "55min ago",
    },
    {
      news_image:
        "https://ik.imagekit.io/c7syb8qpjp/oc/tr:h-373/oc-dashboard/news-images-prod/1682883630380_AP23117541926991.jpg",
      news_title:
        "Ended on The Wrong Side..., Sanju Samson Feels Bad For Rajasthans Youngster",
      news_published: "7hrs ago",
    },
    {
      news_image:
        "https://ik.imagekit.io/c7syb8qpjp/oc/tr:h-373/oc-dashboard/news-images-prod/1682886404454_AP23108650368545%20(3).jpg",
      news_title:
        "He Has Been Struggling With Lots of Injuries... Rohit Sharma after a Historic Win Over RR in the 1000th IPL Game",
      news_published: "8hrs ago",
    },
    {
      news_image:
        "https://ik.imagekit.io/c7syb8qpjp/oc/tr:h-373/oc-dashboard/news-images-prod/1682882811755_MI%20win.jpg",
      news_title: "News IPL 1000th Match | Records Shatter in MI-RR Thriller",
      news_published: "9hrs ago",
    },
  ];
  return (
    <>
    {news.map((events) => (
    <div className="top_headlines__cards">
          <div className="left__content">
            <img src={events.news_image} alt="" />
          </div>
          <div className="right__content">
            <p>{events.news_title}</p>
            <span>{events.news_published}</span>
          </div>
        </div>
     
     ))}
     </>
  );
}

export default TopHeadlinesCard;
