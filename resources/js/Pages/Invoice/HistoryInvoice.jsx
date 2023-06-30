import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function History(props) {
    console.log(props);

    useEffect(() => {
        if (!props.invoice) {
            router.get("history.invoice");
        }
        console.log("props", props);
    }, []);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="History">
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
                                console.log(inv);
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
