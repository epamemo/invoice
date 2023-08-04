import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Layout/Navbar";
import "boxicons";
function Sidebar({ children, user, header, theme }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content h-full py-4 rounded-3xl">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu h-full lg:pr-2 lg:pl-4 lg:py-4 w-80">
                    <div className="p-4 flex flex-col text-base-content bg-base-100 h-full rounded-2xl">
                        <div className="btn btn-ghost no-animation h-fit py-12 mb-4">
                            <div className="boxicon-color">
                                <box-icon
                                    size="md"
                                    color={
                                        theme === "light"
                                            ? "#570DF8"
                                            : "#ffffff"
                                    }
                                    name="chart"
                                    type="solid"
                                ></box-icon>
                            </div>
                            <Link
                                href={route("dashboard")}
                                as="button"
                                className="normal-case text-3xl"
                            >
                                A/P Invoice
                            </Link>
                        </div>
                        <ul className="grid gap-y-2">
                            <li>
                                <Link
                                    className="justify-center hover:bg-blue-400 content-center h-14 btn btn-primary mb-5 no-animation text-white"
                                    href={route("index.invoice")}
                                    as="button"
                                >
                                    <box-icon
                                        name="plus"
                                        color="#ffffff"
                                    ></box-icon>
                                    Buat Invoice
                                </Link>
                                {/* <a>Sidebar Item 1</a> */}
                            </li>
                            <p className="text-slate-400 font-semibold">
                                Data Invoice
                            </p>
                            <li>
                                {header == "Dashboard" ? (
                                    <>
                                        <Link
                                            className="btn-active btn-ghost "
                                            href={route("dashboard")}
                                            as="button"
                                        >
                                            <box-icon
                                                name="home"
                                                color={
                                                    theme === "light"
                                                        ? "#000000"
                                                        : "#ffffff"
                                                }
                                            />
                                            Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            className="btn-ghost"
                                            href={route("dashboard")}
                                            as="button"
                                        >
                                            <box-icon
                                                name="home"
                                                color={
                                                    theme === "light"
                                                        ? "#000000"
                                                        : "#ffffff"
                                                }
                                            />
                                            Dashboard
                                        </Link>
                                    </>
                                )}
                                {/* <a>Sidebar Item 1</a> */}
                            </li>
                            <li>
                                {header == "History" ? (
                                    <>
                                        <Link
                                            className="btn-active btn-ghost "
                                            href={route("history.invoice")}
                                            as="button"
                                        >
                                            <box-icon
                                                name="file"
                                                color={
                                                    theme === "light"
                                                        ? "#000000"
                                                        : "#ffffff"
                                                }
                                            ></box-icon>
                                            History
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        className="btn-ghost"
                                        href={route("history.invoice")}
                                        as="button"
                                    >
                                        <box-icon
                                            name="file"
                                            color={
                                                theme === "light"
                                                    ? "#000000"
                                                    : "#ffffff"
                                            }
                                        ></box-icon>
                                        History
                                    </Link>
                                )}
                                {/* <a>Sidebar Item 1</a> */}
                            </li>
                            <p className="text-slate-400 font-semibold">
                                Data Customer
                            </p>
                            <li>
                                {header == "Data Customer" ? (
                                    <Link
                                        className="btn-active btn-ghost "
                                        href={route("index.customer")}
                                        as="button"
                                    >
                                        <box-icon
                                            name="group"
                                            color={
                                                theme === "light"
                                                    ? "#000000"
                                                    : "#ffffff"
                                            }
                                        ></box-icon>
                                        Data Customer
                                    </Link>
                                ) : (
                                    <Link
                                        className="btn-ghost"
                                        href={route("index.customer")}
                                        as="button"
                                    >
                                        <box-icon
                                            name="group"
                                            color={
                                                theme === "light"
                                                    ? "#000000"
                                                    : "#ffffff"
                                            }
                                        ></box-icon>
                                        Data Customer
                                    </Link>
                                )}
                                {/* <a>Sidebar Item 1</a> */}
                            </li>
                            <li>
                                {header == "Pembuatan Customer" ? (
                                    <Link
                                        className="btn-active btn-ghost "
                                        href={route("create.customer")}
                                        as="button"
                                    >
                                        <box-icon
                                            name="user-plus"
                                            color={
                                                theme === "light"
                                                    ? "#000000"
                                                    : "#ffffff"
                                            }
                                        ></box-icon>
                                        Tambah Customer
                                    </Link>
                                ) : (
                                    <Link
                                        className="btn-ghost"
                                        href={route("create.customer")}
                                        as="button"
                                    >
                                        <box-icon
                                            name="user-plus"
                                            color={
                                                theme === "light"
                                                    ? "#000000"
                                                    : "#ffffff"
                                            }
                                        ></box-icon>
                                        Tambah Customer
                                    </Link>
                                )}
                                {/* <a>Sidebar Item 1</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
