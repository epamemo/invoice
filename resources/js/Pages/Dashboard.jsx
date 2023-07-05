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
    console.log(props.invoice);
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
                        data={props.customer.length}
                        name="Total Data Customer"
                    />
                    <CardDashboard
                        data={props.invoiceit.length}
                        name="Total Data Kwitansi"
                    />
                </div>
                <div className="overflow-x-auto h-96 rounded-2xl border-2">
                    <table className="table table-pin-rows table-pin-cols">
                        {/* head */}
                        <thead>
                            <tr className="z-0">
                                <th>No</th>
                                <th>Nama Customer</th>
                                <th>Tanggal</th>
                                <th>Total Nilai</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.invoice.map((inv, i) => {
                                console.log(inv);
                                return (
                                    <tr key={i} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{inv.name}</td>
                                        <td>{inv.date}</td>
                                        <td>
                                            <FormatRupiah
                                                value={inv.total_price}
                                            />
                                        </td>
                                        <td>{inv.status}</td>
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
