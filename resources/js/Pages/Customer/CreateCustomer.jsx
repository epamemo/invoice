import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
import { Head, router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import Test from "@/Pages/User/Test";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function CreateInvoice(props) {
    const [notification, setNotification] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
    });

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
                        <span>{props.flash.message}</span>
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
                                label="Nama Customer"
                                placeholder="Nama Customer"
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                nameInpt="phone"
                                id="phone"
                                type="number"
                                label="Phone"
                                placeholder="+62841627113"
                            ></Test>
                        </div>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary mx-3">
                        Tambah Data
                    </button>
                </div>
                <div>
                    <table className="table table-zebra">
                        <thead>
                            <th>No.</th>
                            <th>Nama Customer</th>
                            <th>Kontak</th>
                        </thead>
                        <tbody>
                            {props.customer.map((cs, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{cs.name}</td>
                                        <td>{cs.phone}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
