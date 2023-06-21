import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
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
            <div className="">
                <div className="text-gray-900">
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
                <div className="border-2 p-8 mt-4">
                    <div className="grid grid-flow-col justify-between prose max-w-none">
                        <div className="">
                            <div className="flex flex-wrap  items-center mb-5 h-fit">
                                <img
                                    src={LogoSimetri}
                                    alt="logo-simetri"
                                    className="h-16 mr-4"
                                />
                                <h2 className="m-0">
                                    PT. SINAR METRINDO PERKASA
                                </h2>
                            </div>
                            <h4 className="">Head Office</h4>
                            <p>
                                Aries Niaga Blok A1 No. 3A-3B, Jalan Taman
                                Aries, Meruya Utara, Kembangan, Jakarta Barat,
                                DKI 11620, Indonesia
                            </p>
                            <h4>Workshop</h4>
                            <p>
                                Aries Niaga Blok A1 No. 3A-3B, Jalan Taman
                                Aries, Meruya Utara, Kembangan, Jakarta Barat,
                                DKI 11620, Indonesia
                            </p>
                        </div>
                        <div className="">
                            <h1 className="text-center">INVOICE</h1>
                        </div>
                        <div>
                            <h4>Kepada</h4>
                            <p>Customer Name</p>
                        </div>
                    </div>
                    <div>
                        <p>Bersama ini kami kirimkan kepada / terima dari : </p>
                        <p>
                            Kwitansi-kwitansi / faktur-faktur sebagai berikut :
                        </p>
                        <div>
                            <div className="overflow-x-auto mt-4">
                                <table className="table table-zebra border-2">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>No. Kwitansi</th>
                                            <th>Tanggal</th>
                                            <th>Nominal</th>
                                            <th>Opsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>Quality Control Specialist</td>
                                            <td>Rp. 10.000.000,-</td>
                                            <td>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Hart Hagerty</td>
                                            <td>Desktop Support Technician</td>
                                            <td>Rp. 10.000.000,-</td>
                                            <td>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Brice Swyre</td>
                                            <td>Tax Accountant</td>
                                            <td>Rp. 10.000.000,-</td>
                                            <td>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>
                                Pembayaran setiap hari Jum'at, 2 minggu sekali
                            </p>
                            <p>Mulai jam 13.00 s/d 15.00</p>
                        </div>
                        <div>
                            <div>
                                <h4>Subtotal</h4>
                                <p>Rp. 30.000.000,-</p>
                            </div>
                            <div>
                                <h4>Pajak (11%)</h4>
                                <p>Rp. 3.300.000,-</p>
                            </div>
                            <div>
                                <h4>Diskon</h4>
                                <p>Rp. 300.000,-</p>
                            </div>
                            <div>
                                <h2>Total</h2>
                                <p>Rp. 33.000.000,-</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Jakarta, 21 Juni 2023</p>
                        <div>
                            <div>
                                <p>Penerima Barang</p>
                                <p>Nama Penerima</p>
                            </div>
                            <div>
                                <p>Nama Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
