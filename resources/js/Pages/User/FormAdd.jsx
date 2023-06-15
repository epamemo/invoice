import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function FormView() {
    const [formState, setFormState] = useState({ name: "", phone: "" });
    const [printedData, setPrintedData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        setPrintedData((prevState) => [...prevState, formState]);
        setFormState({ name: "", phone: "" });
    };

    return (
        <div>
            <h1>Form View</h1>
            <div>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                />
            </div>
            <button onClick={handleSubmit}>Add Entry</button>
            <div>
                {printedData.map((entry, index) => (
                    <div key={index}>
                        Name: {entry.name}, Phone: {entry.phone}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormAdd() {
    return (
        <div>
            <FormView />
        </div>
    );
}

export default FormAdd;
