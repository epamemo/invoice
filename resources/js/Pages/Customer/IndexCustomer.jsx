import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function CreateInvoice(props) {
    const [notification, setNotification] = useState({
        show: false,
        statusNotif: "",
    });

    const handleDelete = (id) => {
        router.get("/create-customers", id);
    };

    console.log(props.customer);

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
                <div>
                    {props.customer.length !== 0 ? (
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nama Customer</th>
                                    <th>Kontak</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.customer.map((cs, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{cs.name}</td>
                                            <td>{cs.phone}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-accent"
                                                    href={route(
                                                        "edit.customer"
                                                    )}
                                                    method="get"
                                                    data={{ id: cs.id }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    className="btn btn-ghost"
                                                    href={route(
                                                        "delete.customer"
                                                    )}
                                                    method="post"
                                                    data={{ id: cs.id }}
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
                    ) : (
                        <div>Data kosong</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
