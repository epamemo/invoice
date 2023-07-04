import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import LogoSimetri from "@/Img/logo-simetri.jpg";
import { Head, router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import Test from "@/Pages/User/Test";
import { formatPhone } from "@/Helpers/FormatInput";

export default function EditInvoice(props) {
    const [notification, setNotification] = useState({
        show: false,
        statusNotif: "",
    });
    const [customer, setCustomer] = useState({
        id: props.customer.id,
        name: props.customer.name,
        phone: props.customer.phone,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setCustomer({ ...customer, [name]: value.toUpperCase() });
        } else {
            const formattedValue = formatPhone(value);
            setCustomer({ ...customer, [name]: formattedValue });
        }
        console.log(customer);
    };

    const handleSubmit = () => {
        router.post("/customer/edit", customer);
    };

    // const handleSubmit = () => {
    //     if (customer.id === null) {
    //         if (customer.name && customer.phone) {
    //             router.post("/customer/create", customer);
    //             setCustomer({ name: "", phone: "" });
    //         } else {
    //             setNotification({ show: true, statusNotif: "warning" });
    //             props.flash.message = "Isi Nama Customer";
    //         }
    //     } else router.post(`/edit-customer/${customer.id}`, customer);
    // };

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            {notification.show && (
                <div
                    onClick={() => setNotification(false)}
                    className={`alert alert-${notification.statusNotif} shadow-lg w-auto`}
                >
                    <div className="flex gap-2">
                        <box-icon name="error" />

                        <span> {props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="">
                <div className="text-gray-900">
                    <div className="grid grid-flow-col gap-4">
                        <div className="my-4 relative">
                            <Test
                                nameInpt="name"
                                type="text"
                                id="name"
                                label="Nama Customer"
                                placeholder="Nama Customer"
                                value={customer.name}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                        <div className="form-control my-4">
                            <Test
                                nameInpt="phone"
                                id="phone"
                                type="text"
                                label="Phone"
                                placeholder="+62841627113"
                                value={customer.phone}
                                onchange={handleInputChange}
                            ></Test>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        <box-icon name="save" color="#B4BFFE" />
                        Submit
                    </button>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
