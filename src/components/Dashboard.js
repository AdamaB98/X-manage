import Navbar from "./Navar";

function Dashboard(){
    return(
        <>
        <Navbar />
        <div>
            <div className="search-bar"></div>
            <div className="dashboard-container-box">
                <div className="container-box-1"></div>
                <div className="container-box-2"></div>
                <div className="container-box-3"></div>
                <div className="container-box-4"></div>
            </div>
            <div className="logo-holder">
                <h3>Company Logo</h3>

            </div>
        </div>
        </>


    );
}

export default Dashboard;