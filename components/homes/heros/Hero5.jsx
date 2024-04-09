"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero5() {
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
    <section className="hero -type-5">
      <div className="hero__bg">
        <Image
          width={1920}
          height={760}
          src="/img/hero/5/bg.png"
          alt="background"
        />
      </div>

      <div className="hero__image">
        <Image
          width="40"
          height="760"
          src="/img/hero/5/shape.svg"
          style={{ height: "100%", width: "auto" }}
          alt="image"
        />
        <Image width={716} height={760} src="/img/hero/5/1.jpg" alt="image" />
        <Image
          width="760"
          height="40"
          src="/img/hero/5/mobile.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero__content">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__subtitle mb-10"
              >
                Search, compare and book 15,000+ multiday tours all over the
                world.
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="hero__title"
              >
                Search Your Next
                <br className="md:d-none" />
                <span className="text-accent-2">Holiday</span>
              </h1>

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
                        <div className="searchFormItem__icon size-50 rounded-full bg-accent-2-03 flex-center">
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
                        <div className="searchFormItem__icon size-50 rounded-full bg-accent-2-03 flex-center">
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
                        <div className="searchFormItem__icon size-50 rounded-full bg-accent-2-03 flex-center">
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
                      onClick={() => router.push("/tour-list-3")}
                      className="button -dark-1 bg-accent-2 rounded-200 text-white"
                    >
                      <i className="icon-search text-16 mr-10"></i>
                      Search
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
