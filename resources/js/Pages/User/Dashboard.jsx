import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "boxicons";
import CardDashboard from "@/Components/Layout/CardDashboard";

export default function Dashboard(props) {
    console.log(props);

    useEffect(() => {
        if (!props.myNews) {
            router.get("error");
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
                        data={props.myNews.length}
                        name="Total Data GRPO"
                    />
                    <CardDashboard
                        data={props.myNews.length}
                        name="Total Data GRPO"
                    />
                    <CardDashboard
                        data={props.myNews.length}
                        name="Total Data GRPO"
                    />
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
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
                                {props.myNews.map((news, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td>{news.title}</td>
                                            <td>{news.category}</td>
                                            <td>{news.description}</td>
                                            <td>{news.description}</td>
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
