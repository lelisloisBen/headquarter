// import React, { useContext, useState } from 'react';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../../UserContext';

import styles from './LoggedHome.module.css';

const LoggedHome = () => {

    return (
        <>
        <section className={["container-fluid", styles.section].join(' ')}>
        
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">tab 1</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">tab 2</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">tab 3</div>
            </div> 

        </section>
        </>
    );
};

export default LoggedHome;