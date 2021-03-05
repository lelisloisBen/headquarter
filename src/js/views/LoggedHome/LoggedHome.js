import React, { useContext, useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

// import styles from './LoggedHome.module.css';

import Tab1 from '../../components/Tab1/Tab1';
import Tab2 from '../../components/Tab2/Tab2';
// import Tab3 from '../../components/Tab3/Tab3';
// import Tab4 from '../../components/Tab4/Tab4';
// import Tab5 from '../../components/Tab5/Tab5';
// import Tab6 from '../../components/Tab6/Tab6';
// import Tab7 from '../../components/Tab7/Tab7';

const LoggedHome = () => {

    const {windowHeight} = useContext(UserContext);
    const [theTab, setTheTab] = useState(<Tab1/>);

    return (
    <div class="container-fluid">
        <div class="row">
            <div id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a 
                            class="nav-link active" aria-current="page" href="#">
                            1. Introduction
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={() => setTheTab(<Tab2/>)} >
                            2. Big Data
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            3. MySQL
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            4. MongoDB
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            5. Hadoop-Ecosystem
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            6. HDFS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            7. Hadoop-MapReduce
                        </a>
                    </li>
                </ul>
        
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a class="link-secondary" href="#" aria-label="Add a new report">
                            <i class="fas fa-plus-circle"></i>
                        </a>
                    </h6>
                    <ul class="nav flex-column mb-2">

                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Current month
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
    
            <div class="col-md-9 col-lg-10 ms-sm-auto  px-md-4">
                { theTab }
            </div>
        </div>
    </div>
    );
};

export default LoggedHome;