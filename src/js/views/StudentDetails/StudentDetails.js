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
                            <option value="18">Access to all courses</option>
                            <optgroup label="Week 1">
                                <option value="1">Introduction</option>
                                <option value="2">What is Big Data</option>
                                <option value="3">MySQL</option>
                                <option value="4">MongoDB</option>
                                <option value="5">Hadoop Ecosystem</option>
                            </optgroup>
                            <optgroup label="Week 2">
                                <option value="6">HDFS</option>
                                <option value="7">Hadoop MapReduce</option>
                                <option value="8">Sqoop</option>
                            </optgroup>
                            <optgroup label="Week 3">
                                <option value="9">Flume</option>
                                <option value="10">Kafka</option>
                                <option value="11">Hive</option>
                            </optgroup>
                            <optgroup label="Week 4">
                                <option value="12">HBase</option>
                                <option value="13">Spark</option>
                            </optgroup>
                            <optgroup label="Week 5">
                                <option value="14">Nifi</option>
                                <option value="15">HortonWorks</option>
                            </optgroup>
                            <optgroup label="Week 6">
                                <option value="16">Airflow</option>
                                <option value="17">AWS</option>
                            </optgroup>
                            <optgroup label="Week 8">
                                <option value="18">Shell Script</option>
                            </optgroup>
                        </select>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;