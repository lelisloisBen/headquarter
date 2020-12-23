import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import styles from './Tab4.module.css';

const Tab4 = () => {

    const {studentsData} = useContext(UserContext);

    return (
        <div className="container py-5" >
            <h1>Students List in Progress</h1>

            <div className="list-group">

                {!studentsData 
                ? "Empty list of interviews..."
                : studentsData.map((item, index) => {
                    return (
                        <Link 
                            key={index} 
                            to={"/student-details/"+item.id}
                            className="list-group-item list-group-item-action"
                        >
                            <b><i className="fas fa-user"></i> &nbsp; {item.firstname} {item.lastname} </b>
                            <span className="float-right">Courses: &nbsp; {item.courses}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Tab4;
