import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import "boxicons";
import Lottie from "lottie-react";
import notFound from "@/lotties/notFound.json";

export default function Dashboard(props) {
    console.log(props);

    return (
        <GuestLayout user={props.auth.user} header="">
            <Head title="404 Not Found" />

            <div className="flex w-4/5 items-center m-auto">
                <Lottie animationData={notFound} />;
            </div>
        </GuestLayout>
    );
}
