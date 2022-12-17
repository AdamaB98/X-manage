import "./add.css";

function AddProject(){
    return (
        <div className="main-container-project">
            <div className="container">
                <div className="banderole">
                    <h3>ADD PROJECT</h3>
                    </div>
                <div className="input-container">
                    <div className="content">
                        <input className="project-name" type="text" placeholder="Project Name"></input>
                    </div> 
                    <div className="content">
                        <input className="client-name" type="text" placeholder="Client Name"></input>
                    </div>
                    <div className="content" >
                        <input className="client-email" type="email" placeholder="Client Email"></input>
                    </div>
                    <div className="content">
                        <input className="client-phone" type="text" placeholder="Client Phone"></input>
                    </div>
                    <div className="content">
                        <input className="acquisition-date" type="date" placeholder="Aquisition Date"></input>
                    </div>
                    <div className="content">
                        <input className="estimated-amount" type="float" placeholder="Esmtimated amount"></input>
                    </div>
                    <div className="content">
                        <input className="amount" type="float" placeholder="Project amount"></input>
                    </div>
                    <div className="content">
                        <input className="company-name" type="text" placeholder="Company Name"></input>
                    </div>
                    <div className="content">
                        <input className="starting-date" type="date" placeholder="Starting Date"></input>
                    </div>
                    <div className="content">
                        <input className="duration" type="number" placeholder="Project Duration"></input>
                    </div>
                    <div className="content">
                        <input className="responsible" type="text" placeholder="Responsible Name"></input>
                    </div>
                    <div className="content">
                        <input className="expenses" type="number" placeholder="Expenses Number"></input>
                    </div>
                    <div className="content">
                        <input className="used-tool" type="number" placeholder="Tools Number"></input>
                    </div>
                    <div className="content">
                        <input className="status" type="text" placeholder="Status"></input>
                    </div>
                </div>
        
                <div className="submission">
                    <button className="cancel">Cancel</button>
                    <button className="submit">Submit</button>
                </div>
            </div>
    </div>
    );

}

export default AddProject;