import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "boxicons";
import CardDashboard from "@/Components/Layout/CardDashboard";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function Dashboard(props) {
    useEffect(() => {
        if (!props.invoice) {
            router.get("/404");
        }
        console.log("props", props);
    }, []);

    // setInterval(setNotification(false), 2000);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="Dashboard">
            <Head title="Dashboard" />

            <div className="pl-2 pr-4 ">
                <div className="flex gap-3 mb-3">
                    <CardDashboard
                        data={props.invoice.length}
                        name="Total Data Penerimaan Barang"
                    />
                    <CardDashboard
                        // data={props.grpo.data.length}
                        name="Total Data Customer"
                    />
                    <CardDashboard
                        // data={props.grpo.data.length}
                        name="Total Data Kwitansi"
                    />
                </div>
                <div className="overflow-x-auto h-96 rounded-2xl border-2">
                    <table className="table table-pin-rows table-pin-cols">
                        <thead>
                            <tr className="z-0">
                                <th>No</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.invoice.map((gr, i) => {
                                return (
                                    <tr key={i} className="hover bg-gray-100">
                                        <th>{i + 1}</th>
                                        <td>{gr.DocNum}</td>
                                        <td>{gr.CardName}</td>
                                        <td>{gr.NumAtCard}</td>
                                        <td>
                                            <FormatRupiah value={gr.DocTotal} />
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
