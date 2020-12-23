import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';
import styles from './StudentDetails.module.css';



const StudentDetails = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {windowHeight} = useContext(UserContext);
    const {studentsData} = useContext(UserContext);

    let StudentID = props.match.params.SID - 1;
    let S = studentsData[StudentID];

    return (
        <div className={styles.section} style={{minHeight: windowHeight}}>
            <div className="container mx-auto">
                <Link to="/">
                    <i class="fas fa-chevron-left"></i> 
                    &nbsp; Back
                </Link>

                <div className="card text-white bg-warning mb-3">
                    <div className="card-header text-center"> <h1>Student Details</h1> </div>
                    <div className="card-body">
                        <h5 className="card-title"> 
                            <b>{S.firstname} {S.lastname}</b> 
                        </h5>
                        <h4>{S.email} - {S.courses}</h4>

                        <select className="form-control">
                            <option selected>Give access to courses?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;