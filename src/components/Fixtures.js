import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FixturesHeader from "./FixturesHeader";
import "./Fixtures.css";

function Fixtures() {
  return (
    <div className="fixtures">
      <Header />
      <FixturesHeader/>
      <Footer />
    </div>
  );
}

export default Fixtures;
