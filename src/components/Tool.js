import Navbar from "./Navar";
import './tool.css';
import Back from '../images/arrow.png';
import Link from "antd/es/typography/Link"

function Tool(){
    return(
        <>
            <div className="layout-3">
                <div className="navar-3">
                    <Navbar />
                </div>
                <div className="main-content-3">
                    <div className="sections-content-3">
                        <div className="main-content-section-1-3">
                            <div className="section-items">
                                <Link className="back-arrow" to="/">
                                    <img  className="arrow-icon" src={Back}/>
                                </Link>
                            </div>
                            <div className="logo">Company Logo</div>
                        </div>
                        <div className="main-content-section-3-3">
                            <h1>Welcome to the Tools' page!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tool;