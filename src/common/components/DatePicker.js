import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * @param {object} value - selected date
 * @param {(string) => {}} onChange - func called whenever the date changes
 */
export const DatePicker = ({ value, onChange }) => (
  <ReactDatePicker selected={value} onChange={onChange} />
);
