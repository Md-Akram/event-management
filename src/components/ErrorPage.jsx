import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="w-full h-screen flex gap-5 flex-col items-center justify-center">
            <h1 className="text-5xl">Oops!</h1>
            <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}