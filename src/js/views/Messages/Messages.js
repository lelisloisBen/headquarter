import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

// import styles from './Messages.module.css';

const Messages = () => {

    const {messagesData} = useContext(UserContext);

    return (
        <div className="container py-5" >
            <h1>Consultant informations</h1>

            <div className="list-group">

                {!messagesData 
                ? "Empty list of consultants..."
                : messagesData.map((item, index) => {
                    let flagg = item.read_flag;
                    return (
                        <Link 
                            key={index} 
                            to={"/consultant-profile/"+item.id}
                            className = { flagg === 0 ? "list-group-item list-group-item-action not_read" : "list-group-item list-group-item-action"}
                        >
                            <b><i className="fas fa-user"></i> &nbsp; {item.full_name}</b>
                            <span className="float-right"><i className="fas fa-at"></i> &nbsp; {item.email_address}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Messages;