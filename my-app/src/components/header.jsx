import "./header.css";

function Header({quote, theme}) {
    return (
        <div className={`${theme} header`}>
            <div className="hello-user"> Welcome back! </div>
            <div className="motivate">{quote}</div>
        </div>
    )
}
export default Header;