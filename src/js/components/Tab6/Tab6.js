import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import styles from './Tab1.module.css';

const Tab6 = () => {

    const {interviewsData} = useContext(UserContext);

    // console.log(consultantData);

    return (
        <div className="container py-5" >
            <h1>Interviews List</h1>

            <div className="list-group">

                {!interviewsData 
                ? "Empty list of interviews..."
                : interviewsData.map((item, index) => {
                    return (
                        <Link 
                            key={index} 
                            to={"/interview-details/"+item.id}
                            className="list-group-item list-group-item-action"
                        >
                            <b><i className="fas fa-user"></i> &nbsp; {item.firstname} {item.lastname} </b> VS <span style={{color:"red"}}>{item.client}</span>
                            <span className="float-right"><i className="fas fa-clock"></i> &nbsp; {item.time}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Tab6;
