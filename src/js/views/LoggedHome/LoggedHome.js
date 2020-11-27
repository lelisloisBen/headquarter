import React, { useContext } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './LoggedHome.module.css';

import Tab1 from '../../components/Tab1/Tab1';

const LoggedHome = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <>
        <section className={["container-fluid", styles.section].join(' ')} style={{minHeight: windowHeight}}>
        
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
                        Add Consultant
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a  className={["nav-link", styles.tab3Color].join(' ')} 
                        id="newInterview-tab" 
                        data-toggle="tab" 
                        href="#newInterview" 
                        role="tab" 
                        aria-controls="newInterview" 
                        aria-selected="false"
                    >
                        New Interview
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a  className={["nav-link", styles.tab4Color].join(' ')} 
                        id="employees-tab" 
                        data-toggle="tab" 
                        href="#employees" 
                        role="tab" 
                        aria-controls="employees" 
                        aria-selected="false"
                    >
                        Employees
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a  className={["nav-link", styles.tab5Color].join(' ')} 
                        id="board-tab" 
                        data-toggle="tab" 
                        href="#board" 
                        role="tab" 
                        aria-controls="board" 
                        aria-selected="false"
                    >
                        Board of Directors
                    </a>
                </li>
            </ul>

            <div className={["tab-content", styles.tabContent].join(' ')} id="myTabContent">

                <div 
                    className="tab-pane fade show active" 
                    id="consultant" 
                    role="tabpanel" 
                    aria-labelledby="consultant-tab"
                >
                    <Tab1/>
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
                    id="newInterview" 
                    role="tabpanel" 
                    aria-labelledby="newInterview-tab"
                >
                    New Interview Form
                </div>

                <div 
                    className="tab-pane fade" 
                    id="employees" 
                    role="tabpanel" 
                    aria-labelledby="employees-tab"
                >
                    Employees infos
                </div>

                <div 
                    className="tab-pane fade" 
                    id="board" 
                    role="tabpanel" 
                    aria-labelledby="board-tab"
                >
                    board of directors informations
                </div>

            </div> 

        </section>
        </>
    );
};

export default LoggedHome;