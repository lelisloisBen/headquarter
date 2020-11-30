import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './ConsultantProfile.module.css';
// import swal from 'sweetalert';



const ConsultantProfile = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {consultantData} = useContext(UserContext);

    let ConsultantID = props.match.params.CID;

    // console.log(consultantData[ConsultantID].firstname  );

    return (
        <div className={styles.section}>
            <div className="container text-center">
                <h1>hey</h1>
                {consultantData[ConsultantID].firstname}
            </div>
        </div>
    );
};

export default ConsultantProfile;