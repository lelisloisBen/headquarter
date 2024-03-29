import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './MessageDetail.module.css';

const MessageDetail = (props) => {

    const {windowHeight} = useContext(UserContext);
    let history = useHistory();

    let M = props.location.state.messageData;

    const messageData = JSON.stringify({
        "id": M.id,
        "read": 1
    });
    const messageDataMarkNotRead = JSON.stringify({
        "id": M.id,
        "read": 0
    });
    const messageDataDelete = JSON.stringify({
        "id": M.id
    });

    const messageProcessing = () => {
        // console.log("datas", messageData);
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
                            history.push('/messages');
                        });
                })
                .catch(error => {
                    swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                        button: "OK",
                    })
                });
    } 

    const messageAsNotRead = () => {
        fetch('https://headquarter-backend.herokuapp.com/messageProcessed', {
                method: 'PUT',
                body: messageDataMarkNotRead,
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
                            history.push('/messages');
                        });
                })
                .catch(error => {
                    swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                        button: "OK",
                    })
                });
    }

    const messageDelete = () => {
        // console.log(messageDataDelete)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this message!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
         .then((willDelete) => {
              if (willDelete) {
                fetch('https://headquarter-backend.herokuapp.com/messageProcessed', {
                    method: 'POST',
                    body: messageDataDelete,
                    cors: 'no-cors',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).then(res => res.json())
                    .then(response => {
                        console.log(JSON.stringify(response));
                        swal("MESSAGE DELETED!", "Message will be no longer available", "success", {
                            button: "Good job boss",
                        }).then(() => {
                                history.push('/messages');
                            });
                    })
                    .catch(error => {
                        swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                            button: "OK",
                        })
                    });
              } else {
                     swal("Your message is safe!");
          }
       });
    }

    return (
        <div className={styles.section} style={{minHeight: windowHeight}}>
            <div className="container mx-auto">
                <Link to="/messages">
                    <i className="fas fa-chevron-left"></i> 
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
                                    &nbsp;
                                    <i className="fas fa-check"></i>
                                </button>
                                : 
                                <button
                                    className="btn btn-info mt-3 float-right"
                                    onClick={messageAsNotRead}
                                >
                                    Mark as not read
                                    &nbsp;
                                    <i className="fas fa-ban"></i>
                                </button>}
                            </div>
                            <div className="col">
                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={messageDelete}
                                >
                                    Delete Message
                                    &nbsp;
                                    <i className="fas fa-trash-alt"></i>
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