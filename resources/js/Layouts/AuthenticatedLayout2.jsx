import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Layout/Sidebar";
import Navbar from "@/Components/Layout/Navbar";
import { useRecoilState } from "recoil";
import { textState } from "@/Helpers/TextState";

export default function Authenticated({ user, header, children }) {
    const [theme, setTheme] = useState("");
    const [search, setSearch] = useRecoilState(textState);

    const searchChange = (e) => {
        setSearch(e.target.value);
    };

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

    console.log(header);

    return (
        <div className="min-h-screen bg-base-300 ">
            <Head title={header} />
            <Sidebar user={user} header={header} theme={theme}>
                <Navbar user={user} theme={theme} onchange={searchChange}>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </Navbar>
                <main className="bg-base-100 p-6 mb-4 ml-2 mr-4 rounded-2xl">
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
