import "./sidebar.css"
import homeicon from '../assets/homeicon.svg'
import graph_icon from '../assets/graph_icon.svg'
function Sidebar () {
    return (
        <div className="sidebar">
            <button className="home_button">
            <img className="home_icon"  src={homeicon}/>
            </button>
            <button className="graph_button">
            <img className="graph_icon"  src={graph_icon}/>
            </button>
            
        </div>
    )
}
export default Sidebar