import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Layout/Sidebar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen dark:bg-slate-900 bg-gray-100">
            <Sidebar user={user} header={header}>
                {header && (
                    <header className="ml-2 mr-4 mt-2 mb-4">
                        <div className="text-5xl font-bold">{header}</div>
                    </header>
                )}
                <main>{children}</main>
            </Sidebar>
        </div>
    );
}
