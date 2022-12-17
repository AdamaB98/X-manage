import "./expense.css";
import Navbar from "./Navar";
import Back from '../images/arrow.png';
import Link from "antd/es/typography/Link";



function Expense(){
    return(
        <>
            <div className="layout-1">
                <div className="navar-1">
                    <Navbar />
                </div>
                <div className="main-content-1">
                    <div className="sections-content-1">
                        <div className="main-content-section-1-1">
                            <div className="section-items">
                                <Link className="back-arrow" to="/">
                                    <img  className="arrow-icon" src={Back}/>
                                </Link>
                            </div>
                            <div className="logo">Company Logo</div>
                        </div>
                        <div className="main-content-section-3-1">
                            <h1>Welcome to the Expenses' page!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Expense;