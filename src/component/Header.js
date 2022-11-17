import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section id="Top">
            <div className="black_nav">
                <Link to="/"><div className="Title"> Title </div></Link>
                <Link to="/operate"><div className="Login"> Login </div></Link>
            </div>
        </section>
    );
}