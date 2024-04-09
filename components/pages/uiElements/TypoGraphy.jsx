import { learningContents, requirements } from "@/data/uiElements";
import React from "react";

export default function TypoGraphy() {
  return (
    <section className="layout-pt md layout-pb-lg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-20 fw-500 mb-30">Typography</div>

            <div className="text-18 fw-500 mb-20">Course Description</div>
            <p className="text-15 text-dark-1">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
              Curabitur this is a text link libero tempus congue.
              <br />
              <br />
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros
              porttitor mattis. Curabitur massa magna, tempor in blandit id,
              porta in ligula. Aliquam laoreet nisl massa, at interdum mauris
              sollicitudin et.
            </p>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-lg-9">
            <div className="text-20 fw-500 mb-30">What you'll learn</div>
            <div className="row x-gap-100 justfiy-between">
              <div className="col-lg-4">
                <div className="y-gap-15">
                  {learningContents.map((elm, i) => (
                    <div key={i} className="d-flex">
                      <div className="d-flex justify-center items-center rounded-full bg-green-1 size-24 mr-10 mt-2">
                        <i className="icon-check text-10 text-green-2"></i>
                      </div>
                      <p className="text-15 text-dark-1">{elm}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-12">
            <div className="text-20 fw-500 mb-30">Requirements</div>
            <ul className="list-disc y-gap-15">
              {requirements.map((elm, i) => (
                <li key={i}>{elm}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
