import {Link} from "react-router-dom";

export default function Posts() {
    return (
        <>
            <h1>Welcome pages page</h1>
            <Link to="/">
                <div>Go to  Home Page</div>
            </Link>
        </>
    )
}