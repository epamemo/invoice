import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Test from "@/Pages/User/Test";

export default function CreateInvoice(props) {
    // const [searchQuery, setSearchQuery] = useState("");
    // const [filteredData, setFilteredData] = useState([]);
    const [title, setTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [notification, setNotification] = useState(false);

    // const handleSubmit = () => {
    //     const data = {
    //         title,
    //         phone,
    //         name,
    //     };
    //     router.post("/createNews", data);
    //     setNotification(true);
    //     setTitle("");
    //     setPhone("");
    //     setName("");
    // };

    const [formState, setFormState] = useState({ name: "", phone: "", po: "" });
    const [printedData, setPrintedData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleAddRow = () => {
        if (formState.name && formState.phone && inputRef) {
            setPrintedData((prevState) => [...prevState, formState]);
            setFormState({ name: "", phone: "", po: "" });
        }
    };

    const handleSubmit = () => {
        console.log("S", formState);
        const data = { ...formState };
        router.post("/createphone", data);
        setFormState({ name: "", phone: "" });
    };

    const handleDeleteRow = (index) => {
        setPrintedData((prevState) => prevState.filter((_, i) => i !== index));
    };

    const handleEditRow = (index) => {
        const editedEntry = printedData[index];
        setFormState(editedEntry);
        setPrintedData((prevState) => prevState.filter((_, i) => i !== index));
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // const handleInputChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };
    const resetSelected = () => {
        setSelectedOption(null);
    };

    const inputRef = useRef(null);

    const handleOptionClick = (data) => {
        // setFormState((prevState) => ({ ...prevState, name: data }));
        setSelectedOption(data);
        console.log("data", data);
        console.log("name", name);
        console.log("formstate", formState);
        console.log("search", searchQuery);
        setSearchQuery("");
        console.log("selectedOpt", selectedOption);
    };

    // console.log("outslect", selectedOption);

    const filteredOptions = props.grpo.data.filter((data) =>
        data.NumAtCard?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const handleSearch = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);

    //     const filtered = data.filter((item) =>
    //         item.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilteredData(filtered);
    // };
    // setInterval(setNotification(false), 2000);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            <Head title={props.title} />
            {notification && (
                <div
                    onClick={() => setNotification(false)}
                    className="alert alert-success shadow-lg absolute w-auto"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span> {props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="bg-white  mb-4 ml-2 mr-4 rounded-2xl">
                <div className="p-6 text-gray-900 prose-h1:font-bold prose-h1:text-2xl">
                    <h1 className="text-center">Tanda Terima</h1>
                    <div className="grid grid-flow-col gap-4">
                        <div className="my-4 relative">
                            {selectedOption != null ? (
                                <div>
                                    <InputLabel htmlFor="name">name</InputLabel>
                                    <div className="input-group">
                                        <TextInput
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                            placeholder="Ketik No.GRPO"
                                            value={selectedOption.NumAtCard}
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
                                    <InputLabel htmlFor="name">name</InputLabel>
                                    <TextInput
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Ketik No.GRPO"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}

                            {searchQuery && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                    {filteredOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                            onClick={handleOptionClick(
                                                option.NumAtCard
                                            )}
                                        >
                                            {option.NumAtCard}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="form-control my-4">
                            <Test
                                data={props.grpo.data}
                                nameInpt="phone"
                                id="phone"
                                type="number"
                                label="Phone"
                                placeholder="+62841627113"
                                value={formState.phone}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                data={props.grpo.data}
                                nameInpt="PO"
                                id="po"
                                type="text"
                                label="PO"
                                placeholder="SMP/A/31/"
                                ref={inputRef}
                            ></Test>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-primary mx-3"
                        onClick={handleAddRow}
                    >
                        Tambah Data
                    </button>
                </div>
                {/* <div>
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
                    <button onClick={handleAddRow}>Add Entry</button>
                </div> */}
                <div>
                    {printedData.map((entry, index) => (
                        <div key={index}>
                            Name: {entry.name}, Phone: {entry.phone}
                            <button onClick={() => handleDeleteRow(index)}>
                                Delete
                            </button>
                            <button onClick={() => handleEditRow(index)}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
