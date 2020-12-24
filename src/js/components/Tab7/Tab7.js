import React, { useContext, useState } from 'react';
import { UserContext } from '../../../UserContext';
import swal from 'sweetalert';

const Tab7 = () => {

    const {backen_url} = useContext(UserContext);
    const {consultantData} = useContext(UserContext);
    const [student, setStudent] = useState('');
    
    const splitedStudent = student.split(',');
    const firstname = splitedStudent[0];
    const lastname = splitedStudent[1];
    const email = splitedStudent[2];
    const studentPassword = "An4th!ng";

    const allData = JSON.stringify({
        "email": email,
        "firstname": firstname,
        "lastname": lastname,
        "password": studentPassword
    });

    const submitForm = () => {
        if ( !student || !firstname || !lastname || !email ) {
            swal("Something Went Wrong!", "Please select a consultant !", "error", {
                button: "OK",
            });
        } else {
            fetch(backen_url+'/registerDatavaultCourses', {
                method: 'POST',
                body: allData,
                cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => {
                    console.log(JSON.stringify(response));
                    swal("SAVED SUCCESSFULLY!", "Student saved and can access courses", "success", {
                        button: "Go teach now!",
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
        <div className="container py-5" >
            <h1 className="text-center" >Add a consulant as Student</h1>
            <h2 className="text-center">To give access to Datavault courses, select a consultant and submit.</h2>

            <div className="row">
                <div className="col">
                    <select className="form-control" onChange={(e) => setStudent(e.target.value)}>
                        <option value="" defaultValue="selected">Select a Consultant</option>
                        {!consultantData ? "Empty list of consultants..." : consultantData.map((item, index) => {
                            return (
                                <option key={index} value={item.firstname+','+item.lastname+','+item.emailWork} >{item.firstname + ' ' + item.lastname}</option>
                            )
                        })
                        }
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <button 
                        type="submit" 
                        className="btn btn-success my-3"
                        onClick={submitForm}
                    >
                        Save Student for Courses
                    </button>
                </div>
            </div>

            

        </div>
    )
};

export default Tab7;
