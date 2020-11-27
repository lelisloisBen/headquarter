import React from 'react';
// import styles from './Tab1.module.css';

const Tab1 = () => {
    return (
        <div className="container" >
            <h1>Consultant informations</h1>

            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                    Cras justo odio
                </a>
                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
            </div>
        </div>
    )
};

export default Tab1;
