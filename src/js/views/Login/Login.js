import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Login.module.css';
import swal from 'sweetalert';

import vault from '../../../img/vault.png';

const Login = () => {

    const {windowHeight} = useContext(UserContext);
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setAuth} = useContext(UserContext);
    const {backen_url} = useContext(UserContext);
    
    // console.log("Endpoint: ", backen_url+'login');

    const loginFormHandler = () => {
        let userLoginData = JSON.stringify({
            "email": email,
            "password": password
        });
        fetch(backen_url+'loginDatavaultCourses', {
            method: 'POST',
            body: userLoginData,
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                let email = response.email;
                let fname = response.firstname;
                let lname = response.lastname;
                if (!email && !fname ) {
                    swal("Sorry we couldn't find an account with that email.", "Try to register first.!", "error", {
                        button: "TRY AGAIN!",
                      })
                    // alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
                } else {
                    localStorage.setItem('email', email);
                    localStorage.setItem('firstname', fname);
                    localStorage.setItem('lastname', lname);
                    setAuth({
                        'email': email,
                        'firstname': fname,
                        'lastname': lname
                    })
                    swal("LOGIN SUCCESSFUL!", "Welcome to Headquarter", "success", {
                        button: "Let's do that",
                      }).then(() => {
                            history.push('/');
                          });
                    
                }
            })
            .catch(error => {
                swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                    button: "OK",
                  })
            });
    }

    return (
        <section className={styles.section} style={{minHeight: windowHeight}} >
                <img className="my-3"  src={vault} alt="logo" width="200px" height="200px" />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="on"
                />
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={(e) => { if (e.key === 'Enter'){ loginFormHandler() }}}
                />
                <br/>
                
                <button 
                    className={styles.buttLogin}
                    onClick={loginFormHandler}
                >
                    <b>UIT Admin Login</b>
                </button>           

        </section>
    );
};

export default Login;
