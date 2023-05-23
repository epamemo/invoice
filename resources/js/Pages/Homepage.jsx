import Navbar from "@/Components/Layout/Navbar";
import Sidebar from "@/Components/Layout/Sidebar";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.news);
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <Sidebar />
            <h1>{props.title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.news ? (
                        props.news.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{data.title}</td>
                                    <td>{data.category}</td>
                                    <td>{data.author}</td>
                                    <td>{data.description}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <p>Data belum tersedia</p>
                    )}
                </tbody>
            </table>
        </>
    );
}
