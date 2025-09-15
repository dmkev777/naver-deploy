import "./Header.css";

function Header({quote}) {
    return (
        <div className="header">
            <div className="hello-user"> Welcome back! </div>
            <div className="motivate">{quote}</div>
        </div>
    )
}
export default Header;