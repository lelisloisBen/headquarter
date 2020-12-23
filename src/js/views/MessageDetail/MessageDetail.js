import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './MessageDetail.module.css';



const MessageDetail = (props) => {

    const {windowHeight} = useContext(UserContext);
    const {messagesData} = useContext(UserContext);

    let MessageID = props.match.params.MID - 1;
    let M = messagesData[MessageID];
    const messageID = M.id

    const messageData = JSON.stringify({
        "id": messageID
    });

    const messageProcessing = () => {
        fetch('https://headquarter-backend.herokuapp.com/messageProcessed', {
                method: 'PUT',
                body: messageData,
                cors: 'no-cors',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(response => {
                    console.log(JSON.stringify(response));
                    swal("MESSAGE PROCESSED!", "Message read and processed", "success", {
                        button: "Good job boss",
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

    return (
        <div className={styles.section} style={{minHeight: windowHeight}}>
            <div className="container mx-auto">
                <Link to="/messages">
                    <i class="fas fa-chevron-left"></i> 
                    &nbsp; Back
                </Link>

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
                        <div className="row">
                            <div className="col">
                                {M.read_flag === 0 
                                ?
                                <button
                                    className="btn btn-success mt-3 float-right"
                                    onClick={messageProcessing}
                                >
                                    Message Processed
                                </button>
                                : ""}
                            </div>
                            <div className="col">
                                <button
                                    className="btn btn-danger mt-3"
                                >
                                    Delete Message
                                </button>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetail;