import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
         <div className="container">
            <p> 
               © 2020 Haedquarter. All Rights Reserved | Design by Samir Benzada
            </p>
         </div>
      </footer>
    );
};

export default Footer;