"use client";

import { roadmapData2 } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function RoadMap2() {
  const [activeRoadmap, setActiveRoadmap] = useState(2);
  return (
    <div className="roadmap roadMap2">
      {roadmapData2.map((elm, i) => (
        <div key={i} className="roadmap__item">
          {elm.icon ? (
            <div
              className="roadmap__iconBig"
              onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
            >
              <i className={elm.icon}></i>
            </div>
          ) : (
            <div
              className="roadmap__icon"
              onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
            ></div>
          )}
          <div className="roadmap__wrap">
            <div
              className="roadmap__title "
              onClick={() => setActiveRoadmap((pre) => (pre == i ? -1 : i))}
            >
              {elm.title}
            </div>
            {elm.content && (
              <div
                className={`roadmap__content ${
                  activeRoadmap == i ? "active" : ""
                } `}
              >
                {elm.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
