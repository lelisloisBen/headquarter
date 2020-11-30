import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
// import swal from 'sweetalert';



const ConsultantProfile = (props) => {

    // const {backen_url} = useContext(UserContext);
    // let history = useHistory();

    const {consultantData} = useContext(UserContext);

    let ConsultantID = props.match.params.CID;

    return (
        <div className="container text-center">
            {consultantData[ConsultantID].firstname}
        </div>
    );
};

export default ConsultantProfile;