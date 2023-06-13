import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center pt-6 sm:pt-0 bg-gray-100">
            <div className="grid grid-cols-2">
                <div className="flex h-screen col-auto">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div className="lg:mr-2 lg:ml-4 lg:my-4 p-4 w-full bg-trust-blue text-base-content  rounded-2xl">
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
                                A/P Invoice
                            </Link>
                        </div>
                        <div>
                            <h1>A/P Invoice</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-4 rounded-3xl mt-4">
                    <div className="m-auto">{children}</div>
                </div>
            </div>
        </div>
    );
}
