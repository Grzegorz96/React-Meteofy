import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div
            style={{
                border: "2px solid black",
                padding: 15,
                borderRadius: 6,
                margin: "auto auto",
                backdropFilter: "blur(5px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
            }}
        >
            <h1>404 - Not Found!</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
