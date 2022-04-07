import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./styles/MyDatePicker.css";

function MyDatePicker(props) {
    const [value, onChange] = useState(new Date());

    return <DatePicker locale="en-US" minDate={new Date()} onChange={onChange} value={value} {...props} />;
}
export default MyDatePicker;
