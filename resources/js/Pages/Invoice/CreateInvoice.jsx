import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Test from "@/Pages/User/Test";

export default function createInvoice(props) {
    console.log(props);
    // const [searchQuery, setSearchQuery] = useState("");
    // const [filteredData, setFilteredData] = useState([]);
    const [title, setTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [notification, setNotification] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            phone,
            name,
        };
        router.post("/createNews", data);
        setNotification(true);
        setTitle("");
        setPhone("");
        setName("");
    };

    // const handleSearch = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);

    //     const filtered = data.filter((item) =>
    //         item.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilteredData(filtered);
    // };
    // setInterval(setNotification(false), 2000);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            <Head title={props.title} />
            {notification && (
                <div
                    onClick={() => setNotification(false)}
                    className="alert alert-success shadow-lg absolute w-auto"
                >
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span> {props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="bg-white  mb-4 ml-2 mr-4 rounded-2xl">
                <div className="p-6 text-gray-900 prose-h1:font-bold prose-h1:text-2xl">
                    <h1 className="text-center">Tanda Terima</h1>
                    <div className="grid grid-flow-col gap-4">
                        <div className="form-control my-4">
                            <Test data={props.grpo.data}></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test data={props.grpo.data}></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test data={props.grpo.data}></Test>
                        </div>
                    </div>
                    <div className="form-control my-4">
                        <TextInput
                            type="text"
                            placeholder="name"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(name) => setName(name.target.value)}
                        />
                    </div>
                    <div className="form-control my-4">
                        <InputLabel htmlFor="phone">phone</InputLabel>
                        <TextInput
                            type="text"
                            placeholder="phone"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(phone) => setPhone(phone.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
