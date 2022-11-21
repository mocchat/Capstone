import { Link } from "react-router-dom";
import wheel from './image/cogwheel.png';

export default function Header() {
    return (
        <section id="Top">
            <div className="black_nav">
                <Link to="/"><div className="Title"> Title </div></Link>
                <Link to="/operate"><div className="Login"><img className="wheel" src={wheel} alt="operate" /></div></Link>
            </div>
        </section>
    );
}