import Navbar from "./Navar";
import "./dashboard.css";
import Glass from "../images/glass.png";
import Exp from "../images/money.png";
import Tool from "../images/tool-box.png";
import Link from "antd/es/typography/Link";
import Plus from "../images/plus.png";
import Back from "../images/arrow.png";

function Card(){
    return(
        <div className="card-link" href="#">
            <h5>Project Name</h5>
            <div className="progress-bar"></div>
            <h6>Responsable: </h6>
            <img className="img-icon" src={Exp}/>
            <img className="img-icon" src={Tool}/>
        </div>
    );
}

function Search(){
    return(
        <div className="search-content">
            <input className="search-bar" type="text" placeholder="Search "/>
            {/* <img className="search-icon" src={Glass}/> */}
        </div>
    );
}

function Dashboard(){
    return(
        <>
            <div className="layout">
                <div className="navar">
                    <Navbar />
                </div>
                <div className="main-content">
                    <div className="sections-content">
                        <div className="main-content-section-1">
                            <div className="section-items">
                                <Link className="back-arrow" to="/">
                                    <img  className="arrow-icon" src={Back}/>
                                </Link>
                            </div>
                            <div className="logo">Company Logo</div>
                        </div>
                        <div className="main-content-section-2">
                            <div className="sub-section">
                                <div className="link">
                                <img className="icon-add project-m1" src={Plus}/> 
                                <Link className="add-project project-m1" to= "/">Add a Project</Link>
                                </div>
                            </div>
                            <div className="sub-section">
                                <Search />
                            </div>
                        </div>
                        <div className="main-content-section-3">
                          <Card />
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}
export default Dashboard;