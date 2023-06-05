import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "boxicons";
import Lottie from "lottie-react";
import notFound from "@/lotties/notFound.json";

export default function Dashboard(props) {
    console.log(props);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="">
            <Head title="404 Not Found" />

            <div className="flex w-4/5 items-center m-auto">
                <Lottie animationData={notFound} />;
            </div>
        </AuthenticatedLayout2>
    );
}
