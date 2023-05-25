import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    console.log(auth);
    return (
        <AuthenticatedLayout2
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg prose">
                        <h1>Buat A/P Invoice</h1>
                        <div className="p-6 text-gray-900">
                            <div className="form-control my-4">
                                <InputLabel htmlFor="vendor">Vendor</InputLabel>
                                <TextInput
                                    type="text"
                                    placeholder="Siemens"
                                    name="vendor"
                                    id="vendor"
                                />
                            </div>
                            <div className="form-control my-4">
                                <InputLabel htmlFor="vendor">Vendor</InputLabel>
                                <TextInput
                                    type="text"
                                    placeholder="Siemens"
                                    name="vendor"
                                    id="vendor"
                                />
                            </div>
                            <div className="form-control my-4">
                                <InputLabel htmlFor="vendor">Vendor</InputLabel>
                                <TextInput
                                    type="text"
                                    placeholder="Siemens"
                                    name="vendor"
                                    id="vendor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
