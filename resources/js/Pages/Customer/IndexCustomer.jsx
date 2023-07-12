import Notification from "@/Components/Notification";
import { textState } from "@/Helpers/TextState";
import AuthenticatedLayout2 from "@/Layouts/AuthenticatedLayout2";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import empty from "@/Lotties/empty.json";
import Lottie from "lottie-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CreateInvoice(props) {
    const [theme, setTheme] = useState("");
    const [search] = useRecoilState(textState);

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

    const hanldeClick = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="card w-96 bg-base-100 border-2">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cookies!</h2>
                            <p>We are using cookies for no reason.</p>
                            <div className="card-actions justify-end">
                                <Link
                                    className="btn btn-error"
                                    href={route("delete.customer")}
                                    onClick={onClose}
                                    method="post"
                                    as="button"
                                    data={{ id: id }}
                                >
                                    Accept {id}
                                </Link>
                                <button
                                    className="btn btn-ghost"
                                    onClick={onClose}
                                >
                                    Deny
                                </button>
                            </div>
                        </div>
                    </div>
                );
            },
        });
    };

    const filteredOptions = props.customer.filter(
        (data) =>
            data.name?.toLowerCase().includes(search.toLowerCase()) ||
            data.phone?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AuthenticatedLayout2 user={props.auth.user} header={props.title}>
            <Notification props={props.notification} />

            <div className="">
                <div>
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
                            {filteredOptions.length !== 0 ? (
                                filteredOptions.map((cs, i) => {
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
                                                        // href={route(
                                                        //     "delete.customer"
                                                        // )}
                                                        // method="post"
                                                        // data={{ id: cs.id }}
                                                        as="button"
                                                        onClick={() =>
                                                            hanldeClick(cs.id)
                                                        }
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
                                })
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="prose text-center"
                                    >
                                        <Lottie
                                            animationData={empty}
                                            className="h-64"
                                        />
                                        <h2 className="mt-0">Data tidak ada</h2>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout2>
    );
}
