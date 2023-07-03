import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import Sidebar from "@/Components/Layout/Sidebar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 ">
            <Head title={header} />
            <Sidebar user={user} header={header}>
                <main className="bg-white p-6 mb-4 ml-2 mr-4 rounded-2xl">
                    {header && (
                        <header className="ml-2 mr-4 mt-2 mb-4">
                            <div className="text-5xl font-bold">{header}</div>
                        </header>
                    )}
                    {children}
                </main>
            </Sidebar>
        </div>
    );
}
