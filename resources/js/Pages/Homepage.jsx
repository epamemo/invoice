import Navbar from "@/Components/Layout/Navbar";
import Sidebar from "@/Components/Layout/Sidebar";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.news);
    return (
        <>
            <Head title={props.title} />
            <Sidebar>
                <Navbar user={props.auth.user} />
            </Sidebar>
        </>
    );
}
