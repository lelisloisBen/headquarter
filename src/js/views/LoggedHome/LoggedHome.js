import React, { useContext } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './LoggedHome.module.css';

import Tab1 from '../../components/Tab1/Tab1';
import Tab2 from '../../components/Tab2/Tab2';
import Tab3 from '../../components/Tab3/Tab3';
import Tab4 from '../../components/Tab4/Tab4';
import Tab5 from '../../components/Tab5/Tab5';

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
                    <Tab2/>
                </div>

                <div 
                    className="tab-pane fade" 
                    id="newInterview" 
                    role="tabpanel" 
                    aria-labelledby="newInterview-tab"
                >
                    <Tab3/>
                </div>

                <div 
                    className="tab-pane fade" 
                    id="employees" 
                    role="tabpanel" 
                    aria-labelledby="employees-tab"
                >
                    <Tab4/>
                </div>

                <div 
                    className="tab-pane fade" 
                    id="board" 
                    role="tabpanel" 
                    aria-labelledby="board-tab"
                >
                    <Tab5/>
                </div>

            </div> 

        </section>
        </>
    );
};

export default LoggedHome;