import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './MessageDetail.module.css';



const MessageDetail = (props) => {

    const {messagesData} = useContext(UserContext);

    let MessageID = props.match.params.MID - 1;
    let M = messagesData[MessageID];
    const messageID = M.id

    const messageProcessing = () => {
        console.log("id: ", messageID)
    } 

    return (
        <div className={styles.section}>
            <div className="container mx-auto">

                <div className="card text-white bg-warning mb-3">
                    <div className="card-header text-center"> <h1>Message Detail</h1> </div>
                    <div className="card-body">
                        <h5 className="card-title text-center"> 
                            <b>{M.full_name}</b> 
                        </h5>
                        <ul className="list-group list-group-flush" style={{color: "black"}}>
                        
                            <li className="list-group-item">
                                <b>email: </b> {M.email_address}
                            </li>
                            <li className="list-group-item">
                                <b>Time: </b> {M.dt}
                            </li>
                            
                            <li className="list-group-item">
                                <b>Message: </b>
                                <br/>
                                {M.contact_message}
                            </li>
                            <li className="list-group-item">
                                <b>Status: </b>
                                <br/>
                                {M.read_flag === 0 ? "Message not processed yet!" : "Message processed."}
                            </li>

                        </ul>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={messageProcessing}
                        >
                            Message Read and Processed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetail;