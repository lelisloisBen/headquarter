import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import styles from './Tab1.module.css';

const Tab1 = () => {

    const {consultantData} = useContext(UserContext);

    console.log(consultantData);

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
                            to={"/consultant-profile/"+item.id}
                            className="list-group-item list-group-item-action"
                        >
                            <b><i class="fas fa-user"></i> &nbsp; {item.lastname} {item.lastname}</b>
                            <span className="float-right"><i class="fas fa-phone"></i> &nbsp; {item.phone}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
};

export default Tab1;
