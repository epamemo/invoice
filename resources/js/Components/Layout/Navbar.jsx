import { Link } from "@inertiajs/react";
import "boxicons";
// import profile from "public/fa";

const Navbar = ({ user, children }) => {
    return (
        <div className="pb-2  pl-2 pr-4 sticky">
            <div className="navbar bg-base-100 dark:bg-slate-700 rounded-2xl">
                <div className="navbar-start">{children}</div>
                <div className="navbar-center">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <div className="navbar-end">
                    {!user ? (
                        <>
                            <Link
                                className="mx-4"
                                href={route("login")}
                                as="button"
                            >
                                Login
                            </Link>

                            <Link
                                className="mx-4"
                                href={route("register")}
                                as="button"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img src="../storage/images/90.jpg" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link
                                        className="justify-between"
                                        href={route("my.news")}
                                        as="button"
                                    >
                                        <box-icon name="home"></box-icon>
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        as="button"
                                    >
                                        <box-icon name="user-circle"></box-icon>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        <box-icon name="log-out-circle"></box-icon>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
