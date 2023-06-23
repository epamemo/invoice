import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
import { Head, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Test from "@/Pages/User/Test";
import { FormatRupiah } from "@arismun/format-rupiah";

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

    const [formState, setFormState] = useState({
        nokw: "",
        tgl: "",
        nilai: 0,
    });
    const [printedData, setPrintedData] = useState([]);
    // console.log(printedData.length);
    const handleInputChange = (e) => {
        // console.log(e.target.name);
        if (e.target.name == "nilai") {
            const { name, value } = e.target;
            setFormState((prevState) => ({
                ...prevState,
                [name]: parseInt(value),
            }));
        } else {
            const { name, value } = e.target;
            setFormState((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleAddRow = () => {
        console.log(formState);
        if (formState.nokw && formState.tgl && formState.nilai) {
            setPrintedData((prevState) => [...prevState, formState]);
            setFormState({ nokw: "", tgl: "", nilai: 0 });
        }
    };

    const handleSubmit = () => {
        console.log("S", formState);
        const data = { ...formState };
        router.post("/createphone", data);
        setFormState({ nokw: "", tgl: "", nilai: 0 });
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
    let total = 0;
    if (printedData.length != 0) {
        total = printedData.reduce(
            (total, currentItem) => (total = total + currentItem.nilai),
            0
        );

        console.log(printedData.reduce((a, v) => (a = a + v.nilai), 0));
        console.log(total);
    }

    // console.log("outslect", selectedOption);

    // const filteredOptions = props.grpo.data.filter((data) =>
    //     data.NumAtCard?.toLowerCase().includes(searchQuery.toLowerCase())
    // );

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
                                    <InputLabel htmlFor="nokw">name</InputLabel>
                                    <div className="input-group">
                                        <TextInput
                                            type="text"
                                            id="nokw"
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                            placeholder="Ketik No.Kwitansi"
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
                                    <InputLabel htmlFor="nokw">name</InputLabel>
                                    <TextInput
                                        type="text"
                                        id="nokw"
                                        name="nokw"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Ketik No.Kwitansi"
                                        value={formState.nokw}
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
                                // data={props.grpo.data}
                                nameInpt="tgl"
                                id="tgl"
                                type="date"
                                label="Phone"
                                placeholder="+62841627113"
                                value={formState.tgl}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                // data={props.grpo.data}
                                nameInpt="nilai"
                                id="nilai"
                                type="number"
                                label="PO"
                                value={formState.nilai}
                                onchange={handleInputChange}
                                placeholder="122.000"
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
                {/* <div>
                    {printedData.map((entry, index) => (
                        <div key={index}>
                            Name: {entry.nokw}, Phone: {entry.tgl}
                            <button onClick={() => handleDeleteRow(index)}>
                                Delete
                            </button>
                            <button onClick={() => handleEditRow(index)}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div> */}
                <div className="border-2 p-8 mt-4">
                    <div className="grid grid-flow-col gap-6 justify-between prose max-w-none mb-16">
                        <div className="w-2/4">
                            <div className="flex flex-wrap items-center h-fit">
                                <img
                                    src={LogoSimetri}
                                    alt="logo-simetri"
                                    className="h-16 mr-4 mb-0 mt-0"
                                />
                                <h2 className="m-0">
                                    PT. SINAR METRINDO PERKASA
                                </h2>
                            </div>
                            <div className="grid grid-flow-col gap-4">
                                <div>
                                    <h4 className="">Head Office</h4>
                                    <p>
                                        Aries Niaga Blok A1 No. 3A-3B, Jalan
                                        Taman Aries, Meruya Utara, Kembangan,
                                        Jakarta Barat, DKI 11620, Indonesia
                                    </p>
                                </div>
                                <div>
                                    <h4>Workshop</h4>
                                    <p>
                                        Aries Niaga Blok A1 No. 3A-3B, Jalan
                                        Taman Aries, Meruya Utara, Kembangan,
                                        Jakarta Barat, DKI 11620, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-flow-row content-between ">
                            <h1 className="text-center">INVOICE</h1>{" "}
                            <div>
                                <h4>Kepada</h4>
                                <p>Customer Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="prose max-w-none">
                        <p className="m-0">
                            Kwitansi-kwitansi / faktur-faktur sebagai berikut :
                        </p>
                        <div className="m-0">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra border-2">
                                    <thead>
                                        <tr>
                                            <th className="bg-sim-red text-white text-center">
                                                No.
                                            </th>
                                            <th className="bg-sim-red text-white text-center">
                                                No. Kwitansi
                                            </th>
                                            <th className="bg-sim-red text-white text-center">
                                                Tanggal
                                            </th>
                                            <th className="bg-sim-blue text-white text-center">
                                                Nominal
                                            </th>
                                            <th className="bg-sim-blue text-white text-center">
                                                Opsi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {printedData.length != 0 ? (
                                            printedData.map((entry, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td>{entry.nokw},</td>
                                                    <td>{entry.tgl}</td>
                                                    <td className="text-right">
                                                        <FormatRupiah
                                                            value={entry.nilai}
                                                        />
                                                    </td>
                                                    <td className="grid grid-flow-col items-center gap-2">
                                                        <button
                                                            className="btn btn-accent"
                                                            onClick={() =>
                                                                handleEditRow(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="btn btn-ghost"
                                                            onClick={() =>
                                                                handleDeleteRow(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="text-center">
                                                <th colSpan={5}>
                                                    (Data belum ada)
                                                </th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="prose max-w-none grid grid-flow-col ">
                        <div>
                            <p className="m-0">
                                Pembayaran setiap hari Jum'at, 2 minggu sekali{" "}
                                <br></br>Mulai jam 13.00 s/d 15.00
                            </p>
                        </div>
                        <div className="grid grid-rows-4 grid-flow-col">
                            <h4 className="m-0">Subtotal</h4>
                            <h4 className="m-0">Pajak (11%)</h4>
                            <h4 className="m-0">Diskon</h4>
                            <h2 className="m-0">Total</h2>
                            <p className="m-0">
                                : <FormatRupiah value={total} />
                                ,-
                            </p>
                            <p className="m-0">
                                : <FormatRupiah value={(total * 11) / 100} />
                                ,-
                            </p>
                            <p className="m-0">: Rp. 300.000,-</p>
                            <p className="m-0">
                                :{" "}
                                <FormatRupiah
                                    value={total + (total * 11) / 100}
                                />
                                ,-
                            </p>
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
