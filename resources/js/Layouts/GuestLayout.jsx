import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import SvgData from "@/Img/Data Process_Outline.svg";
import SvgOnline from "@/Img/Online report_Outline.svg";
import { BoxIconElement } from "boxicons";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center pt-6 sm:pt-0 bg-gray-100">
            <div className="grid grid-cols-2">
                <div className="flex h-screen col-auto">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div className="mr-2 ml-4 my-4 p-4 w-full bg-slate-200 text-base-content  rounded-2xl">
                        <div className="flex align-middle items-center h-fit mb-12">
                            <box-icon
                                name="chart"
                                type="solid"
                                color="#343DF5"
                                size="md"
                            ></box-icon>

                            <p className="ml-2 normal-case text-xl  font-bold">
                                A/P Invoice.
                            </p>
                        </div>
                        <div className="text-center px-8">
                            {/* <img src={SvgData} alt="" /> */}
                            <img
                                src={SvgOnline}
                                className="w-full m-auto"
                                alt="online-report-image"
                            />
                            <p className="normal-case text-3xl mb-4 font-bold">
                                Sederhana dan Profesional
                            </p>
                            <p className="lg:block hidden">
                                Selamat datang di Aplikasi A/P Invoice! Ciptakan
                                invoice profesional dengan mudah, kelola
                                pembayaran dan pengeluaran bisnis Anda, serta
                                nikmati kemudahan otomatisasi invoice berulang.
                                Akses invoice Anda di mana saja, kapan saja, dan
                                pantau kesehatan keuangan perusahaan dengan
                                cepat dan akurat.
                            </p>
                            <p className="lg:hidden block">
                                Selamat datang di Aplikasi A/P Invoice! Akses
                                invoice Anda di mana saja, kapan saja, dan
                                pantau kesehatan keuangan perusahaan dengan
                                cepat dan akurat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap m-4 bg-white rounded-2xl p-12 align-middle">
                    <div className="m-auto  ">{children}</div>
                </div>
            </div>
        </div>
    );
}
