import React from 'react';
import styles from './calendar.module.css';

const Calendar = () => {

    let urlCalendar = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&src=dW1hc3Rlcml0bGxjQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=MmtjNGI1ZXBqZTg1aWxuMnB1Y2RqdTJwcmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZGFubnkubmlldmVzNDExQGdtYWlsLmNvbQ&src=c2FtaXJiZW56YWRhQGdtYWlsLmNvbQ&color=%23039BE5&color=%2333B679&color=%237986CB&color=%230B8043&color=%23EF6C00&color=%237CB342"
    
    let ggcal = () => {
        window.open('https://calendar.google.com/calendar/u/0/r?tab=cc', '_blank');
    }

    return (
        <div className="container py-5" >
            <button 
                onClick={ggcal}
                className={styles.blue}>Add Event</button>
            <iframe 
                className={styles.cal}
                src={urlCalendar}
                title='google calendar'
            ></iframe>
        </div>
    )
};

export default Calendar;
