"use client";
import React, { useEffect } from "react";
import "./Rocket.css";

const Rocket = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const rocket = document.getElementById("rocket");
      rocket?.classList.add("lunch");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="">
      <div className="rocket">
        <div id="rocket">
          <div className="rocket-body">
            <div className="body">
              <span className="rotate-text">MetaLogic</span>
            </div>
            <div className="fin fin-left"></div>
            <div className="fin fin-right"></div>
            <div className="window"></div>
          </div>
          <div className="exhaust-flame"></div>
          <ul className="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ul className="exhaust-fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Rocket;
