import React, { useState } from 'react';
// import swal from 'sweetalert';
// import styles from './Tab2.module.css';

import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';

const Tab3 = () => {

    const [msgError, setmsgError] = useState('');
 
    const [consultantfirstName, setconsultantfirstName] = useState('');
    const [consultantlastName, setconsultantlastName] = useState('');
   
    const [c_Consultant, setc_Consultant] = useState('Select a Consultant');
    

    const allData = JSON.stringify({
        "firstname": consultantfirstName,
        "lastname": consultantlastName,
        "gender": c_Consultant
    });

    const submitForm = () => {
        // console.log(allData)
        if ( !consultantfirstName || !consultantlastName || !c_Consultant ) {
            setmsgError("Please Check all the field, something is missing !")
        } else {
            setmsgError('');
            console.log(allData);
        }
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
                    value={} 
                    onChange={(e) => set(e.target.value)}
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
                    value={} 
                    onChange={(e) => set(e.target.value)}
                />
                <FormInput
                    col="col-md-4"
                    for="inputSalesAssociate"
                    labelName="Sales Associate Name"
                    type="text"
                    class="form-control"
                    id="inputSalesAssociate"
                    name="SalesAssociate"
                    placeholder="Mark Jones"
                    value={} 
                    onChange={(e) => set(e.target.value)}
                />
            </div>
        
            <div className="form-row">

                <FormInput
                    col="col-md-4"
                    for="inputClient"
                    labelName="Client"
                    type="text"
                    class="form-control"
                    id="inputClient"
                    name="Client"
                    placeholder="Google"
                    value={} 
                    onChange={(e) => set(e.target.value)}
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
                    value={} 
                    onChange={(e) => set(e.target.value)}
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
                    value={} 
                    onChange={(e) => set(e.target.value)}
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
