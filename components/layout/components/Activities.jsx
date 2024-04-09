"use client";

import { useState, useEffect, useRef } from "react";

const buttonData = [
  "Top world landmarks",
  "Food and Nightlife",
  "Adventure and Sport",
  "Landscapes and Nature",
  "Boat Tours",
  "Water Sports",
  "Air Tours",
  "Road Trips",
];

const tabContent = [
  {
    heading: "Top world landmarks",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Food and Nightlife",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Adventure and Sport",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Landscapes and Nature",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Boat Tours",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Water Sports",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Air Tours",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Road Trips",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
];

export default function Activities() {
  const [currentdd, setCurrentdd] = useState("");
  const [currentdestinationTab, setCurrentdestinationTab] = useState(
    "Top world landmarks",
  );
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
          setCurrentdd((pre) => (pre == "activities" ? "" : "activities"))
        }
      >
        Activities
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd == "activities" ? "is-active" : ""
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
                        ?.items.map((elm2, i2) => (
                          <div key={i2} className="tabsMenu-list">
                            <div className="tabsMenu-list__title">
                              {
                                tabContent.filter(
                                  (elm) => elm.heading == currentdestinationTab,
                                )[0].heading
                              }
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
