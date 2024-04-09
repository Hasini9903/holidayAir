"use client";

import DatePicker, { Calendar } from "react-multi-date-picker";
export default function DateCalender() {
  return (
    <>
      <div className="calenderTourSongle">
        <Calendar
          numberOfMonths={2}
          range
          inputClass="custom_input-picker"
          containerClassName="custom_container-picker"
        />{" "}
      </div>
    </>
  );
}
