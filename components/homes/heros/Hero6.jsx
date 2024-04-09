"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero6() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-6">
      <div className="hero__bg">
        <Image
          width="1920"
          height="1386"
          src="/img/hero/6/bg.svg"
          alt="background"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="hero__content">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__title"
              >
                Travel Memories
                <br className="md:d-none" />
                You'll Never <span className="text-accent-1">Forget</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="250" className="mt-20">
                From local escapes to far-flung adventures, find what makes you
                happy
                <br className="md:d-none" />
                anytime, anywhere
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="hero__filter mt-60 md:mt-30"
              >
                <div
                  ref={dropDownContainer}
                  className="searchForm -type-1 shadow-1 rounded-200"
                >
                  <div className="searchForm__form">
                    <div className="searchFormItem js-select-control js-form-dd">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "location" ? "" : "location",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
                          <i className="text-20 icon-pin"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>Where</h5>
                          <div className="js-select-control-chosen">
                            {location ? location : "Search destinations"}
                          </div>
                        </div>
                      </div>

                      <Location
                        setLocation={setLocation}
                        active={currentActiveDD === "location"}
                      />
                    </div>

                    <div className="searchFormItem js-select-control js-form-dd js-calendar">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "calender" ? "" : "calender",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
                          <i className="text-20 icon-calendar"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>When</h5>
                          <div>
                            <span className="js-first-date">
                              <Calender
                                active={currentActiveDD === "calender"}
                              />
                            </span>
                            <span className="js-last-date"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="searchFormItem js-select-control js-form-dd">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "tourType" ? "" : "tourType",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
                          <i className="text-20 icon-flag"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>Tour Type</h5>
                          <div className="js-select-control-chosen">
                            {tourType ? tourType : "All tour"}
                          </div>
                        </div>
                      </div>

                      <TourType
                        setTourType={setTourType}
                        active={currentActiveDD === "tourType"}
                      />
                    </div>
                  </div>

                  <div className="searchForm__button">
                    <button
                      onClick={() => router.push("/tour-list-8")}
                      className="button -dark-1 size-60 bg-accent-1 rounded-200 text-white"
                    >
                      <i className="icon-search text-16"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
