import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Layout/Navbar";
import "boxicons";

function Sidebar({ children, user, header }) {
    console.log(header);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mb-4 rounded-3xl mt-4">
                <Navbar user={user}>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </Navbar>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu lg:mr-2 lg:ml-4 lg:my-4 p-4 w-80 text-base-content bg-white rounded-2xl">
                    <div className="btn btn-ghost h-fit py-12 mb-4">
                        <box-icon
                            size="md"
                            color="#6366f1"
                            name="task"
                        ></box-icon>
                        <Link
                            href={route("dashboard")}
                            as="button"
                            className="normal-case text-3xl"
                        >
                            {" "}
                            A/P Invoice
                        </Link>
                    </div>
                    <ul className="grid gap-y-2">
                        <li>
                            <Link
                                className="justify-center h-14 dark:btn btn btn-primary mb-5 text-white"
                                href={route("page.news")}
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
                                        <box-icon name="home" />
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        className="  "
                                        href={route("dashboard")}
                                        as="button"
                                    >
                                        <box-icon name="home" />
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
                                        href={route("my.news")}
                                        as="button"
                                    >
                                        <box-icon name="file"></box-icon>
                                        History
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    className="  "
                                    href={route("my.news")}
                                    as="button"
                                >
                                    <box-icon name="file"></box-icon>
                                    History
                                </Link>
                            )}
                            {/* <a>Sidebar Item 1</a> */}
                        </li>
                        <p className="text-slate-400 font-semibold">
                            Data Customer
                        </p>
                        <li>
                            {header == "History" ? (
                                <Link
                                    className="btn-active btn-ghost "
                                    href={route("my.news")}
                                    as="button"
                                >
                                    History
                                </Link>
                            ) : (
                                <Link
                                    className="  "
                                    href={route("my.news")}
                                    as="button"
                                >
                                    History
                                </Link>
                            )}
                            {/* <a>Sidebar Item 1</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
