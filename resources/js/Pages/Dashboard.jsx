import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
    };

    console.log("props last: ", props);

    return (
        <AuthenticatedLayout
            user={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Your News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Title"
                            className="m-2 input input-bordered w-full"
                            onChange={(e) => setTitle(e.target.value)} // Perbaikan event handler
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="m-2 input input-bordered w-full"
                            onChange={(e) => setDescription(e.target.value)} // Perbaikan event handler
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="m-2 input input-bordered w-full"
                            onChange={(e) => setCategory(e.target.value)} // Perbaikan event handler
                        />
                        <button
                            className="m-2 btn btn-primary"
                            onClick={handleSubmit} // Perbaikan onClick
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
