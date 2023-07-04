import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
import { Head, router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import Test from "@/Pages/User/Test";
import { FormatRupiah } from "@arismun/format-rupiah";
import "boxicons";
import { formatRupiah } from "@/Helpers/FormatInput";

export default function CreateInvoice(props) {
    const [notification, setNotification] = useState({
        show: false,
        statusNotif: "",
    });
    const [formState, setFormState] = useState({
        nokw: "",
        date: "",
        price: 0,
    });

    const [customerState, setCustomerState] = useState();

    const [printedData, setPrintedData] = useState([]);
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    let dateNow = new Date();
    const { auth } = usePage().props;
    // const handleInputChange = (e) => {
    //     if (e.target.name == "price") {
    //         const { name, value } = e.target;
    //         setFormState((prevState) => ({
    //             ...prevState,
    //             [name]: parseInt(value),
    //         }));
    //     } else {
    //         const { name, value } = e.target;
    //         setFormState((prevState) => ({ ...prevState, [name]: value }));
    //     }
    // };

    const handleInputChange = (e) => {
        if (e.target.name === "price") {
            const { name, value } = e.target;
            const formattedValue = formatRupiah(value, "Rp. ");
            setFormState((prevState) => ({
                ...prevState,
                [name]: formattedValue,
            }));
        } else {
            const { name, value } = e.target;
            setFormState((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleAddRow = () => {
        console.log(formState);
        if (formState.nokw && formState.date && formState.price) {
            const unformattedPrice = formState.price.replace(/[^0-9]/g, ""); // Remove non-digit characters
            const newRow = {
                nokw: formState.nokw,
                date: formState.date,
                price: parseInt(unformattedPrice),
            };
            setPrintedData((prevState) => [...prevState, newRow]);
            setFormState({ nokw: "", date: "", price: 0 });
        } else if (condition) {
            setNotification({ show: true, statusNotif: "warning" });
            props.flash.message = "Isi Nama Customer";
        }
    };

    console.log(customerState);

    const handleSubmit = () => {
        const data = { ...printedData };
        if (customerState && total > 0) {
            const all = {
                customer_id: customerState.id,
                data,
                total_price: total,
            };
            router.post("/invoice", all);
            setFormState({ nokw: "", date: "", price: 0 });
        } else {
            setNotification({ show: true, statusNotif: "warning" });
            props.flash.message = "Isi Nama Customer";
        }
    };
    console.log(notification);
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

    const resetSelected = () => {
        setSelectedOption(null);
    };

    const handleOptionClick = (data) => {
        setSelectedOption(data.name);
        setCustomerState(data);
        console.log("data", data);
        console.log("name", data.name);
        console.log("search", searchQuery);
        setSearchQuery("");
    };

    let total = 0;
    if (printedData.length != 0) {
        total = printedData.reduce(
            (total, currentItem) => (total = total + currentItem.price),
            0
        );

        console.log(printedData.reduce((a, v) => (a = a + v.price), 0));
        console.log(total);
    }

    const filteredOptions = props.customer.filter((data) =>
        data.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);
    };

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
            {notification.show && (
                <div
                    onClick={() => setNotification(false)}
                    className={`alert alert-${notification.statusNotif} shadow-lg w-auto`}
                >
                    <div className="flex gap-2">
                        <box-icon name="error" />

                        <span> {props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="">
                <div className="text-gray-900">
                    <div className="grid grid-flow-col gap-4">
                        <div className="my-4 relative">
                            <Test
                                nameInpt="nokw"
                                type="text"
                                id="nokw"
                                label="No. Kwitansi"
                                placeholder="Ketik No.Kwitansi"
                                value={formState.nokw}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                nameInpt="date"
                                id="date"
                                type="date"
                                label="Tanggal"
                                placeholder="01/12/2000"
                                value={formState.date}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                nameInpt="price"
                                id="price"
                                type="text"
                                label="Nilai Kwitansi"
                                value={formState.price}
                                onchange={handleInputChange}
                                placeholder="Rp. 000.000 ,-"
                            ></Test>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        <box-icon name="save" color="#B4BFFE" />
                        Submit
                    </button>
                    <button
                        className="btn btn-outline mx-3"
                        onClick={handleAddRow}
                    >
                        <box-icon name="plus" />
                        Tambah Data
                    </button>
                    <div className="form-control my-4">
                        {selectedOption != null ? (
                            <div>
                                <InputLabel htmlFor="nokw">Customer</InputLabel>
                                <div className="input-group">
                                    <TextInput
                                        id="customer"
                                        type="customer"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="PT. Nama Perusahaan"
                                        value={customerState.name}
                                        readOnly
                                    />
                                    <button
                                        className="btn btn-warning relative"
                                        onClick={() => resetSelected()}
                                    >
                                        <box-icon name="reset" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <InputLabel htmlFor="customer">
                                    Customer
                                </InputLabel>
                                <TextInput
                                    type="text"
                                    id="customer"
                                    name="customer"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="customer"
                                    onChange={handleSearch}
                                />
                            </div>
                        )}
                    </div>
                    {searchQuery && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {filteredOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

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
                                <p>{selectedOption}</p>
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
                                                    <td>{entry.date}</td>
                                                    <td className="text-right">
                                                        <FormatRupiah
                                                            value={entry.price}
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
                        <div className="grid grid-rows-1 grid-flow-col">
                            <h2 className="m-0">Total</h2>
                            <p className="m-0">
                                : <FormatRupiah value={total} />
                                ,-
                            </p>
                        </div>
                    </div>
                    <div className="prose flex justify-between">
                        <div>
                            <div>
                                <p>Penerima Barang</p>
                                <p>{auth.user.name}</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Jakarta, {dateNow.getDate()}{" "}
                                {months[dateNow.getMonth()]}{" "}
                                {dateNow.getFullYear()}
                            </p>
                            <div>
                                <p>{selectedOption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
