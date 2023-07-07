import Modal from "@/Components/Modal";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function History(props) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.attributeName === "data-theme") {
                    const newTheme =
                        document.documentElement.getAttribute("data-theme");
                    setTheme(newTheme);
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true });

        const initialTheme =
            document.documentElement.getAttribute("data-theme");
        setTheme(initialTheme);

        return () => {
            observer.disconnect();
        };
    }, []);

    const [notification, setNotification] = useState({
        show: null,
        statusNotif: null,
    });

    const hanldeClick = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="card w-96 bg-base-100 border-2">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cookies!</h2>
                            <p>We are using cookies for no reason.</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.handleClickDelete();
                                        onClose();
                                    }}
                                >
                                    Accept
                                </button>
                                <button
                                    className="btn btn-ghost"
                                    onClick={onClose}
                                >
                                    Deny
                                </button>
                            </div>
                        </div>
                    </div>
                    // <div className="bg-base-100 rounded-xl border-2 p-8">
                    //     <h1>Are you sure?</h1>
                    //     <p>You want to delete this file?</p>
                    //     <button onClick={onClose}>No</button>
                    //     <button
                    //         onClick={() => {
                    //             this.handleClickDelete();
                    //             onClose();
                    //         }}
                    //     >
                    //         Yes, Delete it!
                    //     </button>
                    // </div>
                );
            },
        });
    };

    useEffect(() => {
        if (!props.invoice) {
            router.get("history.invoice");
        }
        if (props.notification !== null) {
            setNotification({ ...props.notification });
            if (props.notification.show) {
                setInterval(() => setNotification({ show: false }), 2000);
            }
        }
    }, []);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="History">
            {notification.show && (
                <div
                    onClick={() => setNotification(false)}
                    className={`alert alert-${notification.statusNotif} shadow-lg w-auto z-10`}
                >
                    <div className="flex gap-2">
                        <box-icon name="party" />

                        <span> {notification.message}</span>
                    </div>
                </div>
            )}
            <Head title="History" />

            <div className="pl-2 pr-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>Nama Customer</th>
                                <th>Tanggal</th>
                                <th>Total Nilai</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.invoice.map((inv, i) => {
                                return (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{inv.name}</td>
                                        <td>{inv.date}</td>
                                        <td>
                                            <FormatRupiah
                                                value={inv.total_price}
                                            />
                                        </td>
                                        <td>{inv.status}</td>
                                        <td className="flex gap-3">
                                            <div className="join rounded-xl">
                                                <Link
                                                    className="btn btn-accent join-item"
                                                    href={route(
                                                        "print.invoice"
                                                    )}
                                                    method="get"
                                                    data={{ id: inv.id }}
                                                    as="button"
                                                >
                                                    <box-icon
                                                        name="printer"
                                                        color={
                                                            theme === "light"
                                                                ? "#000000"
                                                                : "#ffffff"
                                                        }
                                                    ></box-icon>
                                                </Link>
                                                <Link
                                                    className="btn btn-ghost join-item"
                                                    href={route("edit.invoice")}
                                                    method="get"
                                                    data={{ id: inv.id }}
                                                    as="button"
                                                >
                                                    <box-icon
                                                        name="edit"
                                                        color={
                                                            theme === "light"
                                                                ? "#000000"
                                                                : "#ffffff"
                                                        }
                                                    ></box-icon>
                                                </Link>
                                                <Link
                                                    className="btn btn-ghost join-item"
                                                    // href={route("delete.invoice")}
                                                    href=""
                                                    onClick={hanldeClick}
                                                    data={{ id: inv.id }}
                                                    as="button"
                                                >
                                                    <box-icon
                                                        name="trash"
                                                        color={
                                                            theme === "light"
                                                                ? "#000000"
                                                                : "#ffffff"
                                                        }
                                                    ></box-icon>
                                                </Link>
                                            </div>
                                        </td>
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
