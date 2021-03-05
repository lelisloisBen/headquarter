import React from 'react';
// import styles from './Tab5.module.css';

const Tab5 = () => {
    return (
        <div className="p-3">
            Board of directors informations
            <p>
                <a 
                    className="btn btn-warning" 
                    href="http://umasterit.com/"
                    target="_blank" 
                    rel="noreferrer"
                >
                    UmasterIT
                </a>
            </p>
            <p>
                <a 
                    className="btn btn-primary" 
                    href="http://student.umasterit.com/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Student-UmasterIT
                </a>
            </p>
        </div>
    )
};

export default Tab5;
