import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './ConsultantProfile.module.css';
// import swal from 'sweetalert';



const ConsultantProfile = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {consultantData} = useContext(UserContext);

    let ConsultantID = props.match.params.CID - 1;

    // console.log(consultantData[ConsultantID].firstname  );

    return (
        <div className={styles.section}>
            <div className="container text-center">
                <h1>Consultant Profile</h1>

                <div class="card text-white bg-warning mb-3">
                    <div class="card-header">{consultantData[ConsultantID].firstname}</div>
                    <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultantProfile;