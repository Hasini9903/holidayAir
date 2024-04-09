import React from "react";
import Faq from "./Faq";
import Tabs from "./Tabs";
import Table from "./Table";
import MessageBoxes from "./MessageBoxes";
import Buttons from "./Buttons";
import Form from "./Form";
import TypoGraphy from "./TypoGraphy";

export default function UiElements() {
  return (
    <>
      <main>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-30">
              <Faq />

              <Tabs />
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-30">
              <Table />

              <MessageBoxes />
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-30">
              <Buttons />
            </div>
          </div>
        </section>

        <Form />

        <TypoGraphy />
      </main>
    </>
  );
}
