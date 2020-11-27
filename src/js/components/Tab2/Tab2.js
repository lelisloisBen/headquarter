import React from 'react';
// import styles from './Tab2.module.css';

const Tab2 = () => {
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
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Save Consultant</button>
        </div>
    )
};

export default Tab2;
