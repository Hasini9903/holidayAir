"use client";

import React, { useEffect, useState } from "react";
const tabs = [
  "Account & Payments",
  "Manage Orders",
  "Returns & Refunds",
  "COVID-19",
  "Other",
];
export default function Content() {
  const [currentTab, setCurrentTab] = useState("Account & Payments");
  useEffect(() => {
    const termsContainer = document.getElementById("termsContainer");
    if (termsContainer) {
      termsContainer.style.opacity = 0;
      setTimeout(() => {
        termsContainer.style.opacity = 1;
      }, 300); // Change the time (in milliseconds) as needed
    }
  }, [currentTab]);

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="tabs -terms js-tabs">
          <div className="row y-gap-30">
            <div className="col-lg-3">
              <div className="tabs__controls row y-gap-10 js-tabs-controls">
                {tabs.map((elm, i) => (
                  <div
                    key={i}
                    className="col-12"
                    onClick={() => setCurrentTab(elm)}
                  >
                    <button
                      className={`tabs__button relative pl-20 js-tabs-button ${
                        elm == currentTab ? "is-tab-el-active" : ""
                      } `}
                      data-tab-target=".-tab-item-1"
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-9">
              <div className="tabs__content js-tabs-content">
                <div
                  id="termsContainer"
                  style={{ transition: "0.1s" }}
                  className="tabs__pane -tab-item-1 is-tab-el-active"
                >
                  <h2 className="text-20 fw-500">1. Introduction</h2>
                  <p className="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 className="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p className="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 className="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p className="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
