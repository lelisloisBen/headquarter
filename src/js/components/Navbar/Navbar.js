import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import vault from '../../../img/vault.png';

const IwashNavBar = () => {
    
    let tokenAuth = localStorage.getItem('token');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <Link className="navbar-brand mobile" to="/">
                    <img src={vault} width="30" height="30" className="d-inline-block align-top" alt="coin"/>
                    &nbsp;
                    <i className="fas fa-info"></i>
                    <span className={styles.wash}>Headquarter | DataVault</span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            {/* <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                                Login
                            </Link> */}
                        </li>
                    : 
                        <li>
                            <button 
                                className="dropdown-item" 
                                onClick={async () => {
                                    localStorage.clear();
                                    window.location.href = "/";
                                }}
                            >
                                LogOut
                            </button>  
                        </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;