import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Layout/Navbar";
import Sidebar from "@/Components/Layout/Sidebar";
import TextInput from "@/Components/TextInput";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.news);
    return (
        <>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Sidebar>

            </Sidebar>
        </>
    );
}
