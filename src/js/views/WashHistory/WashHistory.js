import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './WashHistory.module.css';

const WashHistory = () => {

    const {windowHeight} = useContext(UserContext);
    const {historyWashing} = useContext(UserContext); 

    console.log(historyWashing);

    return (
        <section className={styles.section} style={{minHeight: windowHeight}}>
            <table class="table container">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Cycle</th>
                    <th scope="col">Time</th>
                    <th scope="col">Number</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Complete?</th>
                    </tr>
                </thead>
                <tbody>

                {!historyWashing ? 'Loading...' : historyWashing.map((item,index) => {
                    var timestamp = item.start;
                    var date = new Date(timestamp);
                    var startDate = date.toDateString();
                    return (
                        <tr key={index} >
                            <th scope="row">{item.cicle}</th>
                            <td>{item.time}</td>
                            <td>{item.machineNumber}</td>
                            <td>{item.price}</td>
                            <td>{startDate}</td>
                            <td>{item.cycleComplete}</td>
                        </tr>
                    )
                }).reverse()}
                </tbody>
            </table>

        </section>
    );
};

export default WashHistory;