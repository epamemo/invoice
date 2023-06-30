import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
import { Head, router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import Test from "@/Pages/User/Test";
import { FormatRupiah } from "@arismun/format-rupiah";
import { formatRupiah } from "@/Helpers/FormatInput";
import { useReactToPrint } from "react-to-print";
import "boxicons";

export default function PrintInvoice(props) {
    const [notification, setNotification] = useState({
        show: false,
        statusNotif: "",
    });
    const [formState, setFormState] = useState({
        nokw: "",
        date: "",
        price: 0,
    });

    const [customerState, setCustomerState] = useState(props.cs);
    console.log("cs state", customerState);
    const [printedData, setPrintedData] = useState(props.invoice_item);
    console.log("printed", printedData);
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

    let dateNow = new Date(props.invoice.date);
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

    console.log(props);

    let total = 0;
    if (printedData.length != 0) {
        total = printedData.reduce(
            (total, currentItem) =>
                (total = total + parseInt(currentItem.price)),
            0
        );

        console.log(printedData.reduce((a, v) => (a = a + v.price), 0));
        console.log(total);
    }

    // const handleSearch = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);

    //     const filtered = data.filter((item) =>
    //         item.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilteredData(filtered);
    // };
    // setInterval(setNotification(false), 2000);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            <button onClick={handlePrint} className="btn btn-primary">
                Export PDF
            </button>
            <div ref={componentRef}>
                <div className=" p-8 ">
                    <div className="grid grid-flow-col gap-6 justify-between prose max-w-none mb-16">
                        <div className="w-full">
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
                            <div className="grid grid-flow-col gap-4 w-3/4">
                                <div>
                                    <h4 className="">Head Office</h4>
                                    <p className="text-sm">
                                        Aries Niaga Blok A1 No. 3A-3B, Jalan
                                        Taman Aries, Meruya Utara, Kembangan,
                                        Jakarta Barat, DKI 11620, Indonesia
                                    </p>
                                </div>
                                <div>
                                    <h4>Workshop</h4>
                                    <p className="text-sm">
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
                                <p>{customerState.name}</p>
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
                    <div className="prose max-w-none flex justify-between">
                        <div>
                            <div>
                                <p className="mb-24">Penerima Barang</p>
                                <p>{auth.user.name}</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-24">
                                Jakarta, {dateNow.getDate()}{" "}
                                {months[dateNow.getMonth()]}{" "}
                                {dateNow.getFullYear()}
                            </p>
                            <div>
                                <p>{customerState.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
