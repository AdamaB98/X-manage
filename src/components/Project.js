import Navbar from "./Navar";
import Back from '../images/arrow.png';
import Link from "antd/es/typography/Link"
import './project.css';

function Project(){
    return(
        <>
            <div className="layout-2">
                <div className="navar-2">
                    <Navbar />
                </div>
                <div className="main-content-2">
                    <div className="sections-content-2">
                        <div className="main-content-section-1-2">
                            <div className="section-items">
                                <Link className="back-arrow" to="/">
                                    <img  className="arrow-icon" src={Back}/>
                                </Link>
                            </div>
                            <div className="logo">Company Logo</div>
                        </div>
                        <div className="main-content-section-3-2">
                            <h1>Welcome to the Projects' page!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Project;