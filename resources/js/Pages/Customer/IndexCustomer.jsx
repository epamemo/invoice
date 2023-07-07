import Notification from "@/Components/Notification";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function CreateInvoice(props) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.attributeName === "data-theme") {
                    const newTheme =
                        document.documentElement.getAttribute("data-theme");
                    setTheme(newTheme);
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true });

        const initialTheme =
            document.documentElement.getAttribute("data-theme");
        setTheme(initialTheme);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            <Notification props={props.notification} />

            <div className="">
                <div>
                    {props.customer.length !== 0 ? (
                        <table className="table table-zebra">
                            <thead>
                                <tr className="text-center">
                                    <th>No.</th>
                                    <th>Nama Customer</th>
                                    <th>Kontak</th>
                                    <th className="w-3">Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.customer.map((cs, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{cs.name}</td>
                                            <td>{cs.phone}</td>
                                            <td>
                                                <div className="join rounded-xl">
                                                    <Link
                                                        className="btn btn-accent join-item"
                                                        href={route(
                                                            "edit.customer"
                                                        )}
                                                        method="get"
                                                        data={{ id: cs.id }}
                                                        as="button"
                                                    >
                                                        <box-icon
                                                            name="edit"
                                                            color={
                                                                theme ===
                                                                "light"
                                                                    ? "#000000"
                                                                    : "#ffffff"
                                                            }
                                                        ></box-icon>
                                                    </Link>
                                                    <Link
                                                        className="btn btn-ghost join-item"
                                                        href={route(
                                                            "delete.customer"
                                                        )}
                                                        method="post"
                                                        data={{ id: cs.id }}
                                                        as="button"
                                                    >
                                                        <box-icon
                                                            name="trash"
                                                            color={
                                                                theme ===
                                                                "light"
                                                                    ? "#000000"
                                                                    : "#ffffff"
                                                            }
                                                        ></box-icon>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div>Data kosong</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
