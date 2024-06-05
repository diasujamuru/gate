import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl">
            <Head title={props.title} />
            <div>
                <p> {props.description} </p>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black"
                            >
                                <p className="text-2xl">
                                    {" "}
                                    Title : {data.title}{" "}
                                </p>
                                <p className="text-sm">
                                    {" "}
                                    Descrition : {data.description}{" "}
                                </p>
                                <p> Category : {data.category} </p>
                                <p> Author : {data.author} </p>
                            </div>
                        );
                    })
                ) : (
                    <p>There's no news right now</p>
                )}
            </div>
        </div>
    );
}
