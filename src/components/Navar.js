import User from "../images/user-icon.png"
import dashboard from "../images/dashboard.png"
import Project from "../images/edit-alt.png"
import Signout from "../images/sign-out-alt.png"
import Money from "../images/money.png"
import Tool from "../images/tool-box.png"
import "./navar.css"

function Navbar(){
    return(
        <div id ="menu" className="container">
            <ul className="items">
                <li className="profile menu-item">
                    <button className="item-list-link">
                    <img className="img-icon" src={User} alt=""></img>
                    <div className="item-text">Username</div>
                    </button>
                </li>
                <li className="dash-board menu-item">
                    <a className="item-list-link" href="#"> 
                        <img className="img-icon" src={dashboard} alt=""></img>
                        <div className="item-text">Dashboard</div>
                    </a>
                </li>
                <li className="expenses menu-item">
                    <a className="item-list-link" href="#">
                        <img className="img-icon" src={Money} alt=""></img>
                        <div className="item-text menu-item">Expenses</div>
                    </a>
                </li>
                <li className="project menu-item">
                    <a className="item-list-link" href="#">
                        <img className="img-icon" src={Project} alt=""></img>
                        <div className="item-text">Project</div>
                    </a>
                </li>
                <li className="tool menu-item">
                    <a className="item-list-link" href="#">
                        <img className="img-icon" src={Tool} alt=""></img>
                        <div className="item-text">Tools</div>
                    </a>
                </li>
            </ul>
            <li className="sign-out">
                <button className="item-link" >
                    <img className="img-icon-log" src={Signout} alt=""></img>
                    <div className="item-text">Log out</div>
                </button>
            </li>
        </div>
    );

}

export default Navbar;