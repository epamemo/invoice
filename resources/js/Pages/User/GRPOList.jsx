import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    console.log(props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [notification, setNotification] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/dashboard", data);
        setNotification(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("history.invoice");
        }
        console.log("props", props);
    }, []);

    // setInterval(setNotification(false), 2000);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header="Dashboard">
            <Head title="Dashboard" />

            <div className="pl-2 pr-4">
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
                <div className="bg-white  mb-4  rounded-2xl">
                    <div className="p-6 text-gray-900 prose-h1:font-bold prose-h1:text-2xl">
                        <h1>Buat A/P Invoice</h1>
                        <div className="form-control my-4">
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <TextInput
                                type="text"
                                placeholder="Title"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                            />
                        </div>
                        <div className="form-control my-4">
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <TextInput
                                type="text"
                                placeholder="Category"
                                name="category"
                                id="category"
                                value={category}
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                            />
                        </div>
                        <div className="form-control my-4">
                            <InputLabel htmlFor="description">
                                Description
                            </InputLabel>
                            <TextInput
                                type="text"
                                placeholder="Description"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
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
        </AuthenticatedLayout2>
    );
}
