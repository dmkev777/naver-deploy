import "./Sidebar.css"
import homeicon from '../assets/homeicon.svg'
import settings_icon from '../assets/settings_icon.svg'
import { NavLink } from "react-router-dom"
function Sidebar ({theme}) {
    return (
        <div className={`${theme} sidebar`}>
            <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
            >
                <button className={`${theme} home_button`}>
                <img className="home_icon"  src={homeicon}/>
                </button>
            </NavLink>
            <NavLink
            to="/settings"
            className={({ isActive }) => isActive ? "active" : ""}
            >
            <button className={`${theme} graph_button`}>
            <img className="graph_icon"  src={settings_icon}/>
            </button>
            </NavLink>
            
            
        </div>
    )
}
export default Sidebar