import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Layout/Navbar";

function Sidebar({ children, user }) {
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
                <label htmlFor="my-drawer-2" className="drawer-overlay">
                    assafdgfssa
                </label>
                <ul className="menu lg:mr-2 lg:ml-4 text-white lg:my-4 p-4 w-80 text-base-content bg-sky-800 rounded-2xl">
                    <div className="btn btn-ghost ">
                        <a className="normal-case text-xl">A/P Invoice</a>
                    </div>

                    <li>
                        <Link
                            className="justify-between"
                            href={route("my.news")}
                            as="button"
                        >
                            Dashboard
                        </Link>
                        {/* <a>Sidebar Item 1</a> */}
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
