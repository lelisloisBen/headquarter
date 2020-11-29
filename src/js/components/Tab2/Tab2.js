import React, { useState } from 'react';
import swal from 'sweetalert';
// import styles from './Tab2.module.css';

const Tab2 = () => {

    let history = useHistory();
    const [msgError, setmsgError] = useState('');
 
    const [consultantfirstName, setconsultantfirstName] = useState('');
    const [consultantlastName, setconsultantlastName] = useState('');
    const [consultantBmonth, setconsultantBmonth] = useState('Select a Month');
    const [consultantBday, setconsultantBday] = useState('Select a Day');
    const [consultantByear, setconsultantByear] = useState('Select a Year');
    const FullBirthdate = consultantBmonth + ' ' + consultantBday + ', ' + consultantByear;
    const [c_gender, setc_gender] = useState('Select a Gender');
    const [c_address, setc_address] = useState('');
    const [c_city, setc_city] = useState('');
    const [c_state, setc_state] = useState('Select a State');
    const [c_zip, setc_zip] = useState('');
    const [c_persEmail, setc_persEmail] = useState('');
    const [c_workEmail, setc_workEmail] = useState('');
    const [c_phone, setc_phone] = useState('');
    const [c_skypeID, setc_skypeID] = useState('');
    const [c_bank, setc_bank] = useState('');
    const [c_routing, setc_routing] = useState('');
    const [c_account, setc_account] = useState('');

    const days = [];
    for (let i=1; i<32; i++) {
        days.push(<option key={i} value={i}>{i}</option>)
    }
    const dateObj = new Date();
    const todaysyear = dateObj.getFullYear();
    const startyear = todaysyear - 120;
    const years = [];
    for (let i=startyear; i<todaysyear; i++) {
        years.push(<option key={i} value={i}>{i}</option>)
    }

    const allData = JSON.stringify({
        "firstname": consultantfirstName,
        "lastname": consultantlastName,
        "birthdate": FullBirthdate,
        "gender": c_gender,
        "address": c_address,
        "city": c_city,
        "state": c_state,
        "zipCode": c_zip,
        "emailPerso": c_persEmail,
        "emailWork": c_workEmail,
        "phone": c_phone,
        "skype": c_skypeID,
        "bankName": c_bank,
        "routing": c_routing,
        "account": c_account
    });

    const submitForm = () => {
        if ( !consultantfirstName || !consultantlastName || !FullBirthdate || !c_gender || !c_address || !c_city || !c_state || !c_zip || !c_persEmail || !c_workEmail || !c_phone || !c_skypeID || !c_bank || !c_routing || !c_account ) {
            setmsgError("Please Check all the field, something is missing !")
        } else {
            setmsgError('');
            console.log(allData);
            fetch('https://headquarter-backend.herokuapp.com/add-consultant', {
                method: 'POST',
                body: allData,
                cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => {
                    console.log(JSON.stringify(response));
                    swal("SAVED SUCCESSFULLY!", "Consultants added", "success", {
                        button: "Continue your day...",
                    }).then(() => {
                            window.location.reload();
                        });
                })
                .catch(error => {
                    swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                        button: "OK",
                    })
                });
            }
    }


    return (
        <div className="container py-5">
            <h1 className="text-center">New Consultant Form</h1>
        
            <div className="form-row">

                <div className="form-group col-md-6">
                    <label htmlFor="inputFirstname">First Name </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputFirstname" 
                        name="firstname" 
                        placeholder="John"
                        value={consultantfirstName} 
                        onChange={(e) => setconsultantfirstName(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="inputLastname">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastname" 
                        name="lastname" 
                        placeholder="Doe"
                        value={consultantlastName} 
                        onChange={(e) => setconsultantlastName(e.target.value)}
                    />
                </div>

            </div>

            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="month">Birthdate</label>
                    <select className="form-control" id="month" onChange={(e) => setconsultantBmonth(e.target.value)}>
                        <option value="" defaultValue="selected">{consultantBmonth}</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="day">&nbsp;</label>
                    <select className="form-control" id="day" onChange={(e) => setconsultantBday(e.target.value)}>
                        <option value="" defaultValue="selected">{consultantBday}</option>
                        {days}
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="year">&nbsp;</label>
                    <select className="form-control" id="year" onChange={(e) => setconsultantByear(e.target.value)}>
                        <option value="" defaultValue="selected">{consultantByear}</option>
                        {years}
                    </select>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="inputGender">Gender</label>
                    <select className="form-control" id="inputGender" onChange={(e) => setc_gender(e.target.value)}>
                        <option value="" defaultValue="selected">{c_gender}</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputAddress" 
                    placeholder="1234 Main St Apartment 501"
                    value={c_address} 
                    onChange={(e) => setc_address(e.target.value)}
                />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputCity"
                        placeholder="Miami Beach"
                        value={c_city} 
                        onChange={(e) => setc_city(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select className="form-control" name="state" id="inputState" onChange={(e) => setc_state(e.target.value)}>
                        <option value="" defaultValue="selected">{c_state}</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputZip" 
                        placeholder="33139"
                        value={c_zip} 
                        onChange={(e) => setc_zip(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                    <label htmlFor="inputPersoEmail">Personal Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputPersoEmail"  
                        placeholder="name@gmail.com"
                        value={c_persEmail} 
                        onChange={(e) => setc_persEmail(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="inputConsultantEmail">Consultant Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputConsultantEmail" 
                        placeholder="firstname.lastname@datavault.com"
                        value={c_workEmail} 
                        onChange={(e) => setc_workEmail(e.target.value)}
                    />
                </div>

            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        className="form-control" 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required 
                        placeholder="(123)456-7890"
                        value={c_phone} 
                        onChange={(e) => setc_phone(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="skype">Skype ID</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="skype" 
                        name="skype"
                        placeholder="live:skypeID"
                        value={c_skypeID} 
                        onChange={(e) => setc_skypeID(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="bank">Bank Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="bank" 
                        placeholder="Chase Bank"
                        value={c_bank} 
                        onChange={(e) => setc_bank(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="bankRouting">Routing Number</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="bankRouting" 
                        placeholder="267084131"
                        maxLength="12"
                        value={c_routing} 
                        onChange={(e) => setc_routing(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="bankAccount">Account Number</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="bankAccount" 
                        placeholder="000034986475"
                        maxLength="12"
                        value={c_account} 
                        onChange={(e) => setc_account(e.target.value)}
                    />
                </div>
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

export default Tab2;
