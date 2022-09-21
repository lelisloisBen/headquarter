import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import styles from './Tab1.module.css';

const Tab1 = () => {

    const {consultantData} = useContext(UserContext);

    // console.log(consultantData);

    return (
        <div className="container py-5" >
            <h1>Consultant informations</h1>

            <div className="list-group">

                {!consultantData 
                ? "Empty list of consultants..."
                : consultantData.map((item, index) => {
                    return (
                        <Link 
                            key={index} 
                            to={{
                                pathname: "/consultant-profile/"+item.id,
                                state: {
                                    consultantDetailData: item
                                }
                            }}
                            className="list-group-item list-group-item-action"
                        >
                            <b><i className="fas fa-user"></i> &nbsp; {item.firstname} {item.lastname}</b>
                            <span className="float-right"><i className="fas fa-phone"></i> &nbsp; {item.phone}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Tab1;
