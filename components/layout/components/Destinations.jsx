"use client";

import { useState, useEffect, useRef } from "react";

const buttonData = [
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Africa",
  "Oceania",
  "Polar",
  "Regions",
];

const tabContent = [
  {
    heading: "Europe",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Asia",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "North America",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "South America",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Africa",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Oceania",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Polar",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Regions",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
];

export default function Destinations() {
  const [currentdestinationTab, setCurrentdestinationTab] = useState("Europe");
  const [currentdd, setCurrentdd] = useState("");
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={dropDownContainer}
      className="headerDropdown lg:d-none js-form-dd"
    >
      <div
        className="headerDropdown__button "
        onClick={() =>
          setCurrentdd((pre) => (pre == "destination" ? "" : "destination"))
        }
      >
        Destinations
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd == "destination" ? "is-active" : ""
        } `}
      >
        <div className="tabsMenu">
          <div className="tabsMenu__container">
            <div className="tabs js-tabs">
              <div className="tabsMenu__tabs">
                <div className="tabs__controls js-tabs-controls">
                  {buttonData.map((elm, i) => (
                    <button
                      onClick={() => setCurrentdestinationTab(elm)}
                      key={i}
                      className={`tabs__button js-tabs-button ${
                        currentdestinationTab == elm ? "is-tab-el-active" : ""
                      } `}
                      data-tab-target=".-tab-item-1"
                    >
                      {elm}
                    </button>
                  ))}
                </div>
              </div>

              <div className="tabsMenu__content">
                <div className="tabs__content js-tabs-content">
                  <div className="tabs__pane -tab-item-1 is-tab-el-active">
                    <div className="tabsMenu__lists">
                      {tabContent
                        .filter(
                          (elm) => elm.heading == currentdestinationTab,
                        )[0]
                        .tours.map((elm2, i2) => (
                          <div key={i2} className="tabsMenu-list">
                            <div className="tabsMenu-list__title">
                              {
                                tabContent.filter(
                                  (elm) => elm.heading == currentdestinationTab,
                                )[0].heading
                              }{" "}
                              Travel Guide
                            </div>
                            <div className="tabsMenu-list__content">
                              {elm2.map((elm3, i3) => (
                                <div key={i3} className="tabsMenu-list__item">
                                  <a href={elm3.href}>{elm3.name}</a>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
