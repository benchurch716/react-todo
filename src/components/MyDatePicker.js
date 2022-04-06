import React, { useState } from "react";
import DatePicker from "react-date-picker";

function MyDatePicker(props) {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <DatePicker minDate={new Date()} onChange={onChange} value={value} {...props} />
        </div>
    );
}
export default MyDatePicker;
