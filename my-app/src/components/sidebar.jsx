import "./Sidebar.css"
import homeicon from '../assets/homeicon.svg'
import graph_icon from '../assets/graph_icon.svg'
import { NavLink } from "react-router-dom"
function Sidebar () {
    return (
        <div className="sidebar">
            <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
            >
                <button className="home_button">
                <img className="home_icon"  src={homeicon}/>
                </button>
            </NavLink>
            <NavLink
            to="/report"
            className={({ isActive }) => isActive ? "active" : ""}
            >
            <button className="graph_button">
            <img className="graph_icon"  src={graph_icon}/>
            </button>
            </NavLink>
            
            
        </div>
    )
}
export default Sidebar