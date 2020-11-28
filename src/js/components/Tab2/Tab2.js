import React from 'react';
// import styles from './Tab2.module.css';

const Tab2 = () => {

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

    return (
        <div className="container py-5">
            <h1>Add Consultant</h1>

            <div className="form-row">

                <div className="form-group col-md-6">
                    <label for="inputFirstname">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputFirstname" 
                        name="firstname" 
                        placeholder="John"
                    />
                </div>

                <div className="form-group col-md-6">
                    <label for="inputLastname">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastname" 
                        name="lastname" 
                        placeholder="Doe"
                    />
                </div>

            </div>

            <div className="form-row">
                <div className="form-group col-md-2">
                    <label for="month">Birthdate</label>
                    <select class="form-control" id="month">
                        <option value="" selected="selected">Select a Month</option>
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
                    <label for="day">&nbsp;</label>
                    <select class="form-control" id="day">
                        <option value="" selected="selected">Select a Day</option>
                        {days}
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="year">&nbsp;</label>
                    <select class="form-control" id="year">
                        <option value="" selected="selected">Select a Year</option>
                        {years}
                    </select>
                </div>

                <div className="form-group col-md-6">
                    <label for="inputGender">Gender</label>
                    <select class="form-control" id="inputGender">
                        <option value="" selected="selected">Select a Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputAddress" 
                    placeholder="1234 Main St Apartment 501" 
                />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputCity"
                        placeholder="Miami Beach"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select className="form-control" name="state" id="inputState">
                        <option value="" selected="selected">Select a State</option>
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
                    <label for="inputZip">Zip</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputZip" 
                        placeholder="33139"
                    />
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                    <label for="inputPersoEmail">Personal Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputPersoEmail"  
                        placeholder="name@gmail.com"
                    />
                </div>

                <div className="form-group col-md-6">
                    <label for="inputConsultantEmail">Consultant Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputConsultantEmail" 
                        placeholder="firstname.lastname@datavault.com"
                    />
                </div>

            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="phone">Phone Number</label>
                    <input 
                        className="form-control" 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required 
                        placeholder="(123)456-7890"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label for="skype">Skype ID</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="skype" 
                        name="skype"
                        placeholder="live:skypeID"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="bank">Bank Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="bank" 
                        placeholder="Chase Bank"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="bankRouting">Routing Number</label>
                    <input 
                        className="form-control" 
                        type="number" 
                        id="bankRouting" 
                        placeholder="267084131"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="bankAccount">Account Number</label>
                    <input 
                        className="form-control" 
                        type="number" 
                        id="bankAccount" 
                        placeholder="000034986475"
                    />
                </div>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Save Consultant
            </button>
        </div>
    )
};

export default Tab2;
