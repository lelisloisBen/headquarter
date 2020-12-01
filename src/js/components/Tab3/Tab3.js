import React, { useState } from 'react';
// import swal from 'sweetalert';
// import styles from './Tab2.module.css';

import FormInput from '../FormInput/FormInput';

const Tab3 = () => {

    const [msgError, setmsgError] = useState('');
 
    
   
    const [c_Consultant, setc_Consultant] = useState('Select a Consultant');
    const [Time, setTime] = useState('');
    const [Client, setClient] = useState('');
    const [Vendor, setVendor] = useState('');
    const [ImplementationPartner, setImplementationPartner] = useState('');
    const [Mode, setMode] = useState('');
    const [Type, setType] = useState('');
    const [assist1, setassist1] = useState('Select Assistant 1');
    const [assist2, setassist2] = useState('Select Assistant 2');
    const [SA, setSA] = useState('');
    const [Manager, setManager] = useState('');
    const [LiveCoding, setLiveCoding] = useState('');
    const [PositionTitle, setPositionTitle] = useState('');
    const [JD, setJD] = useState('');
    const [ProjectDuration, setProjectDuration] = useState('');
    const [ProjectLocation, setProjectLocation] = useState('');
    const [ClientWebsite, setClientWebsite] = useState('');
    const [VendorWebsite, setVendorWebsite] = useState('');
    const [InterviewerName, setInterviewerName] = useState('');
    const [InterviewerLinkedIn, setInterviewerLinkedIn] = useState('');
    const [VendorNotes, setVendorNotes] = useState('');
    

    const allData = JSON.stringify({
        "gender": c_Consultant
    });

    const submitForm = () => {
        // console.log(allData)
        // if ( !consultantfirstName || !consultantlastName || !c_Consultant ) {
        //     setmsgError("Please Check all the field, something is missing !")
        // } else {
        //     setmsgError('');
        //     console.log(allData);
        // }
        //     fetch('https://headquarter-backend.herokuapp.com/add-consultant', {
        //         method: 'POST',
        //         body: allData,
        //         cors: 'no-cors',
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //         }).then(res => res.json())
        //         .then(response => {
        //             console.log(JSON.stringify(response));
        //             swal("SAVED SUCCESSFULLY!", "Consultants added", "success", {
        //                 button: "Continue your day...",
        //             }).then(() => {
        //                     window.location.reload();
        //                 });
        //         })
        //         .catch(error => {
        //             swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
        //                 button: "OK",
        //             })
        //         });
        //     }
    }


    return (
        <div className="container py-5">
            <h1 className="text-center">New Interview Form</h1>

            Consultant name
            Time
            Client
            Vendor
            Implementation Partner
            Mode (Inbound or Outbound)
            Type (Phone, skype)
            Tech assist1 (Samir)
            Tech assist2 (Eric)
            Sales associate
            Manager
            Live coding (yes, no)
            Position Title
            Job Description
            Project duration
            Project location
            client website
            vendor website
            Interviewer name 
            Interviewer LinkedIn
            Vendor notes

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputConsultant">Consultant</label>
                    <select className="form-control" id="inputConsultant" onChange={(e) => setc_Consultant(e.target.value)}>
                        <option value="" defaultValue="selected">{c_Consultant}</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-4"
                    for="inputTime"
                    labelName="Time"
                    type="text"
                    class="form-control"
                    id="inputTime"
                    name="time"
                    placeholder="november 12th 2020 at 4pm"
                    value={Time} 
                    onChange={(e) => setTime(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputClient"
                    labelName="Client"
                    type="text"
                    class="form-control"
                    id="inputClient"
                    name="Client"
                    placeholder="Google"
                    value={Client} 
                    onChange={(e) => setClient(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputVendor"
                    labelName="Vendor"
                    type="text"
                    class="form-control"
                    id="inputVendor"
                    name="Vendor"
                    placeholder="iData"
                    value={Vendor} 
                    onChange={(e) => setVendor(e.target.value)}
                />
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-4"
                    for="ImplementationPartner"
                    labelName="Implementation Partner"
                    type="text"
                    class="form-control"
                    id="ImplementationPartner"
                    name="ImplementationPartner"
                    placeholder="Data Partner LLC"
                    value={ImplementationPartner} 
                    onChange={(e) => setImplementationPartner(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputMode"
                    labelName="Mode"
                    type="text"
                    class="form-control"
                    id="inputMode"
                    name="Mode"
                    placeholder="Inbound or Outbound"
                    value={Mode} 
                    onChange={(e) => setMode(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputType"
                    labelName="Type"
                    type="text"
                    class="form-control"
                    id="inputType"
                    name="Type"
                    placeholder="Phone, skype"
                    value={Type} 
                    onChange={(e) => setType(e.target.value)}
                />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputassist1">Technical Assistant 1</label>
                    <select className="form-control" id="inputassist1" onChange={(e) => setassist1(e.target.value)}>
                        <option value="" defaultValue="selected">{assist1}</option>
                        <option value="Samir">Samir</option>
                        <option value="Eric">Eric</option>
                        <option value="Mohsen">Mohsen</option>
                        <option value="Abdel">Abdel</option>
                        <option value="Mehdi">Mehdi</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputassist2">Technical Assistant 2</label>
                    <select className="form-control" id="inputassist2" onChange={(e) => setassist2(e.target.value)}>
                        <option value="" defaultValue="selected">{assist2}</option>
                        <option value="Samir">Samir</option>
                        <option value="Eric">Eric</option>
                        <option value="Mohsen">Mohsen</option>
                        <option value="Abdel">Abdel</option>
                        <option value="Mehdi">Mehdi</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-4"
                    for="inputSalesAssociate"
                    labelName="Sales Associate Name"
                    type="text"
                    class="form-control"
                    id="inputSalesAssociate"
                    name="SalesAssociate"
                    placeholder="Mark Jones"
                    value={SA} 
                    onChange={(e) => setSA(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputManager"
                    labelName="Manager"
                    type="text"
                    class="form-control"
                    id="inputManager"
                    name="manager"
                    placeholder="samir"
                    value={Manager} 
                    onChange={(e) => setManager(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputLiveCoding"
                    labelName="Live Coding ?"
                    type="text"
                    class="form-control"
                    id="inputLiveCoding"
                    name="LiveCoding"
                    placeholder="yes, Python and SQL"
                    value={LiveCoding} 
                    onChange={(e) => setLiveCoding(e.target.value)}
                />
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-12"
                    for="inputPositionTitle"
                    labelName="Position Title"
                    type="text"
                    class="form-control"
                    id="inputPositionTitle"
                    name="PositionTitle"
                    placeholder="Big Data Engineer"
                    value={PositionTitle} 
                    onChange={(e) => setPositionTitle(e.target.value)}
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="textareaJD">Job Description</label>
                    <textarea 
                        className="form-control"
                        rows="10"
                        name="jobdescription" 
                        id="textareaJD"
                        placeholder="Description of the position..."
                        value={JD} 
                        onChange={(e) => setJD(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-3"
                    for="inputProjectDuration"
                    labelName="Project Duration"
                    type="text"
                    class="form-control"
                    id="inputProjectDuration"
                    name="Project Duration"
                    placeholder="6 month +"
                    value={ProjectDuration} 
                    onChange={(e) => setProjectDuration(e.target.value)}
                />
                <FormInput
                    col="col-md-3"
                    for="inputProjectLocation"
                    labelName="Project Location"
                    type="text"
                    class="form-control"
                    id="inputProjectLocation"
                    name="ProjectLocation"
                    placeholder="Miami, Florida"
                    value={ProjectLocation} 
                    onChange={(e) => setProjectLocation(e.target.value)}
                />
                <FormInput
                    col="col-md-3"
                    for="inputClientWebsite"
                    labelName="Client Website"
                    type="text"
                    class="form-control"
                    id="inputClientWebsite"
                    name="ClientWebsite"
                    placeholder="www.clientWebsite.com"
                    value={ClientWebsite} 
                    onChange={(e) => setClientWebsite(e.target.value)}
                />
                <FormInput
                    col="col-md-3"
                    for="inputVendorWebsite"
                    labelName="Vendor Website"
                    type="text"
                    class="form-control"
                    id="inputVendorWebsite"
                    name="VendorWebsite"
                    placeholder="www.VendorWebsite.com"
                    value={VendorWebsite} 
                    onChange={(e) => setVendorWebsite(e.target.value)}
                />
            </div>

            <div className="form-row">
                <FormInput
                    col="col-md-4"
                    for="inputInterviewerName"
                    labelName="Interviewer Name(s)"
                    type="text"
                    class="form-control"
                    id="inputInterviewerName"
                    name="InterviewerName"
                    placeholder="John, mark, marguerite"
                    value={InterviewerName} 
                    onChange={(e) => setInterviewerName(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputInterviewerLinkedIn"
                    labelName="Interviewer LinkedIn(s)"
                    type="text"
                    class="form-control"
                    id="inputInterviewerLinkedIn"
                    name="InterviewerLinkedIn"
                    placeholder="https://www.linkedin.com/in/marguerite-3343223ma/"
                    value={InterviewerLinkedIn} 
                    onChange={(e) => setInterviewerLinkedIn(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputVendorNotes"
                    labelName="Vendor Notes"
                    type="text"
                    class="form-control"
                    id="inputVendorNotes"
                    name="VendorNotes"
                    placeholder="The interview will be 20 minutes, not technical"
                    value={VendorNotes} 
                    onChange={(e) => setVendorNotes(e.target.value)}
                />
            </div>
            
        
            

            

            <h4 > {msgError} </h4>

            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={submitForm}
            >
                Save Consultant
            </button>
        </div>
    )
};

export default Tab3;
