import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './InterviewDetails.module.css';



const InterviewDetails = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {interviewsData} = useContext(UserContext);

    let InterviewID = props.match.params.IID - 1;
    let I = interviewsData[InterviewID];

    // console.log(consultantData[ConsultantID].firstname  );

    return (
        <div className={styles.section}>
            <div className="container mx-auto">

                <div class="card text-white bg-warning mb-3">
                    <div class="card-header text-center"> <h1>Interview Detail</h1> </div>
                    <div class="card-body">
                        <h5 class="card-title text-center"> 
                            <b>{I.firstname} {I.lastname}</b> 
                        </h5>
                        <ul class="list-group list-group-flush" style={{color: "black"}}>
                        
                            <li class="list-group-item">
                                <b>email: </b> {I.email}
                            </li>
                            <li class="list-group-item">
                                <b>Interview Time: </b> {I.time}
                            </li>
                            <li class="list-group-item">
                                <b>Client: </b> {I.client}
                            </li>
                            <li class="list-group-item">
                                <b>Vendor: </b> {I.vendor}
                            </li>
                            <li class="list-group-item">
                                <b>Implementation Partner: </b> {I.implementationpartner}
                            </li>
                            <li class="list-group-item">
                                <b>Mode: </b> {I.mode}
                            </li>
                            <li class="list-group-item">
                                <b>Call Type: </b> {I.calltype}
                            </li>
                            <li class="list-group-item">
                                <b>First Assistant: </b> {I.assist1}
                            </li>
                            <li class="list-group-item">
                                <b>Second Assistant: </b> {I.assist2}
                            </li>
                            <li class="list-group-item">
                                <b>Sale Associate: </b> {I.saleassociate}
                            </li>
                            <li class="list-group-item">
                                <b>Manager: </b> {I.manager}
                            </li>
                            <li class="list-group-item">
                                <b>Live Coding: </b> {I.livecoding}
                            </li>
                            <li class="list-group-item">
                                <b>Position Title: </b> {I.positiontitle}
                            </li>
                            <li class="list-group-item">
                                <b>Job Description: </b> 
                                <br/>
                                <br/>
                                {I.jobdescription}
                            </li>
                            <li class="list-group-item">
                                <b>Project Duration: </b> {I.projectduration}
                            </li>
                            <li class="list-group-item">
                                <b>Project Location: </b> {I.projectlocation}
                            </li>
                            <li class="list-group-item">
                                <b>Client Website: </b> {I.clientwebsite}
                            </li>
                            <li class="list-group-item">
                                <b>Vendor Website: </b> {I.vendorwebsite}
                            </li>
                            <li class="list-group-item">
                                <b>Interviewer Name: </b> {I.interviewername}
                            </li>
                            <li class="list-group-item">
                                <b>Interviewer LinkedIn: </b> {I.interviewerlinkedIn}
                            </li>
                            <li class="list-group-item">
                                <b>Vendor Notes: </b> {I.vendornotes}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewDetails;