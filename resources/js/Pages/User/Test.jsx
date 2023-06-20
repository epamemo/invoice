import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React, { useState } from "react";

export default function SelectInput({
    data,
    id,
    nameInpt,
    label,
    type,
    placeholder,
    onchange,
    value,
}) {
    const options = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "durian", label: "Durian" },
        { value: "elderberry", label: "Elderberry" },
        { value: "fig", label: "Fig" },
        { value: "grape", label: "Grape" },
        { value: "honeydew", label: "Honeydew" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleOptionClick = (data) => {
        setSelectedOption(data);
        setSearchQuery("");
    };

    const resetSelected = () => {
        setSelectedOption(null);
    };

    // const filteredOptions = options.filter((option) =>
    //     option.label.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredOptions = data.filter((data) =>
        data.NumAtCard?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative">
            {selectedOption != null ? (
                <div>
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                    <div className="input-group">
                        <TextInput
                            type={type}
                            id={id}
                            name={nameInpt}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            value={selectedOption}
                            readOnly
                        />
                        <button
                            className="btn btn-warning relative"
                            onClick={() => resetSelected()}
                        >
                            reset
                        </button>
                    </div>
                </div>
            ) : (
                <div className="">
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                    <TextInput
                        type={type}
                        id={id}
                        name={nameInpt}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder={placeholder}
                        value={value ? value : searchQuery}
                        onChange={onchange ? onchange : handleInputChange}
                    />
                </div>
            )}

            {searchQuery && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {filteredOptions.map((option, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                            onClick={() => handleOptionClick(option.NumAtCard)}
                        >
                            {option.NumAtCard}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
