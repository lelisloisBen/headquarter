import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ConsultantProfile.module.css';


const ConsultantProfile = (props) => {

    // console.log(props.location.state.data);

    let C = props.location.state.consultantDetailData;
    
    return (
        <div className={styles.section}>
            <div className="container mx-auto">
                <Link to="/">
                    <i className="fas fa-chevron-left"></i> 
                    &nbsp; Back
                </Link>

                <div className="card text-white bg-primary mb-3">
                    <div className="card-header text-center"> <h1>Consultant Profile</h1> </div>
                    <div className="card-body">
                        <h5 className="card-title text-center"> 
                            <b>{C.firstname} {C.lastname}</b> 
                            <Link to="/" className={["float-right", styles.editProfile].join(' ')}>
                                <span ><i className="fas fa-user-edit"></i></span>
                            </Link>
                        </h5>
                        <ul className="list-group list-group-flush" style={{color: "black"}}>

                            <li className="list-group-item">
                                <b>Birthdate: </b> {C.birthdate}
                            </li>
                            <li className="list-group-item">
                                <b>Gender: </b> {C.gender}
                            </li>
                            <li className="list-group-item">
                                <b>Phone: </b> {C.phone}
                            </li>
                            
                            <li className="list-group-item">
                                <b>Address: </b> <br/>
                                {C.address} <br/>
                                {C.city}, {C.state} {C.zipCode}
                            </li>
                            <li className="list-group-item">
                                <b>Personal Email: </b> {C.emailPerso}
                            </li>
                            <li className="list-group-item">
                                <b>Work Email: </b> {C.emailWork}
                            </li>
                            <li className="list-group-item">
                                <b>Skype ID: </b> {C.skype}
                            </li>

                            <li className="list-group-item">
                                <b>Last 4 Digit SSN: </b> {C.last4ssn} 
                            </li>
                            <li className="list-group-item">
                                <b>Started Training on: </b> {C.trainingstart} 
                            </li>
                            <li className="list-group-item">
                                <b>Cohort: </b> {C.cohort}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultantProfile;