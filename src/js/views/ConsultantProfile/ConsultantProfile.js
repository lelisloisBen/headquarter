import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './ConsultantProfile.module.css';
// import swal from 'sweetalert';



const ConsultantProfile = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {consultantData} = useContext(UserContext);

    let ConsultantID = props.match.params.CID - 1;
    let C = consultantData[ConsultantID];

    // console.log(consultantData[ConsultantID].firstname  );

    return (
        <div className={styles.section}>
            <div className="container mx-auto">

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
                                <b>Bank Name: </b> {C.bankName} 
                                <br/>
                                <b>Account Number: </b> {C.account} 
                                <br/>
                                <b>Routing Number: </b> {C.routing}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultantProfile;