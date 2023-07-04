import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function History(props) {
    const [notification, setNotification] = useState({
        show: null,
        statusNotif: null,
    });

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
                            <tr>
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
                                            <Link
                                                className="btn btn-accent"
                                                href={route("print.invoice")}
                                                method="get"
                                                data={{ id: inv.id }}
                                                as="button"
                                            >
                                                Print
                                            </Link>
                                            <Link
                                                className="btn btn-accent"
                                                href={route("edit.invoice")}
                                                method="get"
                                                data={{ id: inv.id }}
                                                as="button"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                className="btn btn-ghost"
                                                href={route("delete.invoice")}
                                                method="post"
                                                data={{ id: inv.id }}
                                                as="button"
                                            >
                                                Delete
                                            </Link>
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
