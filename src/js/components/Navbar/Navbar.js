import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './Navbar.module.css';
// import vault from '../../../img/vault.png';

const IwashNavBar = () => {

    const {countMessagesData} = useContext(UserContext);

    let emailAuth = localStorage.getItem('email');
    let fnameAuth = localStorage.getItem('firstname');
    let lnameAuth = localStorage.getItem('lastname');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container-fluid">
                <Link className="navbar-brand mobile btn btn-danger text-white" to="/">
                    <span className={styles.brandName}><b>{fnameAuth} {lnameAuth}</b></span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {!emailAuth ?
                        <li>
                            {/* <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                                Login
                            </Link> */}
                        </li>
                    : 
                    <>
                        <li>
                            <Link to="/messages" className="icon-wrapper">
                                <i className="fa fa-envelope fa-2x icon-grey"></i>
                                {countMessagesData === 0 ? "" :  <span className="badge">{countMessagesData}</span>}
                            </Link>
                        </li>
                        <li>
                            <button 
                                className="btn btn-danger ml-3" 
                                onClick={async () => {
                                    localStorage.clear();
                                    window.location.href = "/";
                                }}
                            >
                                <b>
                                    Logout
                                    &nbsp;  
                                    <i className="fas fa-power-off"></i>
                                </b>
                            </button>  
                        </li>
                    </>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;