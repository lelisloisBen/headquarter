import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Tab1.module.css';

const Tab1 = () => {
    return (
        <div className="container py-5" >
            <h1>Consultant informations</h1>

            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
                <Link to="/" className="list-group-item list-group-item-action">Name Lastname </Link>
            </div>
        </div>
    )
};

export default Tab1;
