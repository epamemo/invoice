import React, { useState } from "react";

function FormAdd() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatCurrency(inputValue);
        setValue(formattedValue);
    };

    const formatCurrency = (value) => {
        // Remove non-digit characters
        const numericValue = value.replace(/[^0-9]/g, "");

        // Format the numeric value as currency
        const formattedValue = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(numericValue / 100);

        return formattedValue;
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="$0.00"
        />
    );
}

export default FormAdd;
