import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect } from "react";
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
    return (
        <AuthenticatedLayout2 user={props.auth.user} header="Dashboard">
            <Head title="Dashboard" />
            <div className="pl-2 pr-4 ">
                <div className="grid grid-cols-3 gap-4 mb-3">
                    <CardDashboard
                        data={props.invoice.length}
                        name="Total Data Penerimaan Barang"
                        icon="package"
                        color="bg-green-400"
                    />
                    <CardDashboard
                        data={props.customer.length}
                        name="Total Data Customer"
                        icon="group"
                        color="bg-blue-400"
                    />
                    <CardDashboard
                        data={props.invoiceit.length}
                        name="Total Data Kwitansi"
                        icon="spreadsheet"
                        color="bg-rose-400"
                    />
                </div>
                <div className="h-96 mt-8">
                    <h1 className="font-bold text-lg mb-4">
                        Riwayat Data Invoice Terakhir
                    </h1>
                    <div className="overflow-x-auto">
                        <table className="table table-pin-rows table-zebra table-pin-cols rounded-2xl">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
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
            </div>
        </AuthenticatedLayout2>
    );
}
