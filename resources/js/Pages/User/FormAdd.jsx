import { router } from "@inertiajs/react";
import React, { useState } from "react";

function FormView() {
    const [formState, setFormState] = useState([{ name: "", phone: "" }]);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFormState = [...formState];
        updatedFormState[index][name] = value;
        setFormState(updatedFormState);
    };

    const handleAddRow = () => {
        const newRow = { name: "", phone: "" };
        setFormState([...formState, newRow]);
        console.log(formState);
    };

    const handleSubmit = () => {
        console.log("S", formState);
        const data = { ...formState };
        router.post("/createphone", data);
        setFormState({ name: "", phone: "" });
    };

    return (
        <div>
            <h1>Form View</h1>
            <button onClick={() => handleSubmit()}>Submit</button>
            {formState.map((row, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="name"
                        value={row.name}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={row.phone}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Phone"
                    />
                </div>
            ))}
            <button onClick={handleAddRow}>Add Row</button>
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
