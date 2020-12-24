import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import styles from './Tab1.module.css';

const Tab7 = () => {

    const {consultantData} = useContext(UserContext);
    const studentPassword = "An4th!ng";

    return (
        <div className="container py-5" >
            <h1>Add Student form</h1>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputConsultant">Consultant List</label>
                    <select className="form-control" id="inputConsultant" onChange={(e) => setc_Consultant(e.target.value)}>
                        <option value="" defaultValue="selected">{c_Consultant}</option>
                        {!consultantData ? "Empty list of consultants..." : consultantData.map((item, index) => {
                            return (
                                <option key={index} value={item.firstname+','+item.lastname+','+item.emailWork} >{item.firstname + ' ' + item.lastname}</option>
                            )
                        })
                        }
                    </select>
                </div>
            </div>

        </div>
    )
};

export default Tab7;
