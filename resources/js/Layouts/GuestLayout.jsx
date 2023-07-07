import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import SvgData from "@/Img/Data Process_Outline.svg";
import SvgOnline from "@/Img/Online report_Outline.svg";
import { Head } from "@inertiajs/react";
import { BoxIconElement } from "boxicons";

export default function Guest({ children, header }) {
    console.log(header);
    return (
        <div className="min-h-screen flex flex-col pt-0 bg-base-300">
            <div className="grid lg:grid-cols-2 grid-flow-row">
                <div className="flex lg:h-screen h-fit col-auto">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div className="lg:mr-2 lg:ml-4 lg:my-4 mx-4 mt-4 p-4 w-full bg-base-200 text-base-content rounded-2xl">
                        <div className="flex align-middle justify-center lg:justify-normal items-center h-fit lg:mb-12">
                            <box-icon
                                name="chart"
                                type="solid"
                                color="#343DF5"
                                size="md"
                            ></box-icon>

                            <p className="ml-2 normal-case text-xl  font-bold">
                                Penerimaan Barang.
                            </p>
                        </div>
                        <div className="text-center lg:px-8 lg:block hidden">
                            {/* <img src={SvgData} alt="" /> */}
                            <img
                                src={SvgOnline}
                                className="w-full m-auto"
                                alt="online-report-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap m-4 bg-white rounded-2xl p-12 align-middle">
                    <div className="m-auto">
                        <Head title={header} />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
