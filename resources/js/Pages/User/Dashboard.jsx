import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "boxicons";
import CardDashboard from "@/Components/Layout/CardDashboard";

export default function Dashboard(props) {
    console.log(props);

    useEffect(() => {
        if (!props.grpo.data) {
            router.get("error.404");
        }
        console.log("props", props);
    }, []);

    // setInterval(setNotification(false), 2000);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="Dashboard">
            <Head title="Dashboard" />

            <div className="pl-2 pr-4 ">
                <div className="flex gap-3">
                    <CardDashboard
                        data={props.grpo.data.length}
                        name="Total Data GRPO"
                    />
                    <CardDashboard
                        data={props.grpo.data.length}
                        name="Total Data grpo.data"
                    />
                    <CardDashboard
                        data={props.grpo.data.length}
                        name="Total Data grpo.data"
                    />
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.grpo.data.map((gr, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td>{gr.DocNum}</td>
                                            <td>{gr.CardName}</td>
                                            <td>{gr.NumAtCard}</td>
                                            <td>{gr.DocTotal}</td>
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
