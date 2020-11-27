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
                    <a  className={["nav-link active", styles.tab1Color].join(' ')} 
                        id="consultant-tab"
                        data-toggle="tab" 
                        href="#consultant" 
                        role="tab" 
                        aria-controls="consultant" 
                        aria-selected="true"
                    >
                        Consultant
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a  className={["nav-link", styles.tab2Color].join(' ')} 
                        id="addNewConsultant-tab" 
                        data-toggle="tab" 
                        href="#addNewConsultant" 
                        role="tab" 
                        aria-controls="addNewConsultant" 
                        aria-selected="false"
                    >
                        + Consultant
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a  className={["nav-link", styles.tab3Color].join(' ')} 
                        id="contact-tab" 
                        data-toggle="tab" 
                        href="#contact" 
                        role="tab" 
                        aria-controls="contact" 
                        aria-selected="false"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">

                <div 
                    className="tab-pane fade show active" 
                    id="consultant" 
                    role="tabpanel" 
                    aria-labelledby="consultant-tab"
                >
                    consultant informations
                </div>

                <div 
                    className="tab-pane fade" 
                    id="addNewConsultant" 
                    role="tabpanel" 
                    aria-labelledby="addNewConsultant-tab"
                >
                    add New Consultant
                </div>

                <div 
                    className="tab-pane fade" 
                    id="contact" 
                    role="tabpanel" 
                    aria-labelledby="contact-tab"
                >
                    tab 3
                </div>

            </div> 

        </section>
        </>
    );
};

export default LoggedHome;