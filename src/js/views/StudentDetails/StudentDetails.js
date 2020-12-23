import React, { useContext, useState } from 'react';
import { UserContext } from '../../../UserContext';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './StudentDetails.module.css';



const StudentDetails = (props) => {

    // const {backen_url} = useContext(UserContext);
    let history = useHistory();
    const [studentcourses, setstudentcourses] = useState(0);

    const {windowHeight} = useContext(UserContext);
    const {studentsData} = useContext(UserContext);

    let databaseID = props.match.params.SID;
    let StudentID = databaseID - 1;
    let S = studentsData[StudentID];

    const allData = JSON.stringify({
        "id": databaseID,
        "course": studentcourses
    });

    const submitAccess = () => {
        fetch('https://headquarter-backend.herokuapp.com/updateCourses', {
                method: 'PUT',
                body: allData,
                cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => {
                    console.log(JSON.stringify(response));
                    swal("UPDATED SUCCESSFULLY!", "Courses updated", "success", {
                        button: "You are the best",
                    }).then(() => {
                        history.push('/');
                        });
                })
                .catch(error => {
                    swal("Something Went Wrong!", JSON.stringify("Error: "+ error), "error", {
                        button: "OK",
                    })
                });
        }

    return (
        <div className={styles.section} style={{minHeight: windowHeight}}>
            <div className="container mx-auto">
                <Link to="/">
                    <i className="fas fa-chevron-left"></i> 
                    &nbsp; Back
                </Link>

                <div className="card text-white bg-warning mb-3">
                    <div className="card-header text-center"> <h1>Teacher/Student Details</h1> </div>
                    <div className="card-body">
                        <h2 className="card-title text-center"> 
                            <b>{S.firstname} {S.lastname}</b> 
                        </h2>
                        <div className="row">
                            <div className="col">
                                <h4>{S.email}</h4>
                            </div>
                            <div className="col">
                                <h4 className="float-right">
                                    Course access number: {S.courses}
                                </h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <select className="form-control my-3" onChange={(e) => setstudentcourses(e.target.value)}>
                                    <option defaultValue="selected">Give access to courses?</option>
                                    <option value="18">FULL ACCESS (Teachers)</option>
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

                        <div className="row">
                            <div className="col text-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    onClick={submitAccess}
                                >
                                    Change Acces Courses
                                </button>
                            </div>
                        </div>
                        

                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;