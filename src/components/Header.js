import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import DropDownCards from "./DropDownCards";
import { useLocation } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="header">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 1 }}
        className="Left__header"
      >
        <img src="https://crex.live/assets/logo/logo2.webp" alt="" />
        <h1>CREX</h1>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: -40 }}
        transition={{ duration: 1 }}
        className="right__header"
      >
        <a href="/" className={location.pathname === "/" ? "active" : ""}>Home</a>

        <div className="dropdown">
          <a
            className={
              location.pathname === "/series"
                ? "series active"
                : "series"
            }
            href="/series"
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            Series{" "}
            {location.pathname === "/" && FontAwesomeIcon && (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </a>
          {location.pathname === "/" && showDropdown && (
            <div
              className="dropdown__cards"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <DropDownCards />
            </div>
          )}
        </div>

        <a href="/fixtures"  className={location.pathname === "/fixtures" ? "active" : ""}>Fixtures</a>
        <a href="/stats_corner" className={
            location.pathname === "/stats_corner" ? "active" : "stats_corner"
          }>🏏Stats Corner</a>
        <a href="/rankings"  className={location.pathname === "/rankings" ? "active" : ""}>Rankings</a>
      </motion.div>
    </div>
  );
}

export default Header;
