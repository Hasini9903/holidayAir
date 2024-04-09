import { roadmapData } from "@/data/tourSingleContent";
import React from "react";

export default function RoadMap() {
  return (
    <div className="roadmap">
      {roadmapData.map((elm, i) => (
        <div key={i} className="roadmap__item">
          {elm.icon ? (
            <div className="roadmap__iconBig">
              <i className={elm.icon}></i>
            </div>
          ) : (
            <div className="roadmap__icon"></div>
          )}
          <div className="roadmap__wrap">
            <div className="roadmap__title">{elm.title}</div>
            {elm.content && (
              <div className="roadmap__content">{elm.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
