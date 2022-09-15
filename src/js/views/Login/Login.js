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
    
    console.log("Endpoint: ", backen_url+'/login');

    const loginFormHandler = () => {
        let userLoginData = JSON.stringify({
            "email": email,
            "password": password
        });
        fetch(backen_url+'/login', {
            method: 'POST',
            body: userLoginData,
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                let token = response.token;
                let email = response.email;
                let name = response.name;
                console.log("Token: ", token);
                console.log("Email: ", email);
                console.log("Name: ", name);
                if (!token && !email && !name ) {
                    swal("Sorry we couldn't find an account with that email.", "Try to register first.!", "error", {
                        button: "TRY AGAIN!",
                      })
                    // alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
                } else {
                    // alert('LOGIN SUCCESSFUL');
                    localStorage.setItem('token', token);
                    localStorage.setItem('email', email);
                    localStorage.setItem('name', name);
                    setAuth({
                        'token': token,
                        'email': email,
                        'name': name
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
                    className="btn btn-warning my-3"
                    onClick={loginFormHandler}
                >
                    <i class="fas fa-plug"></i>
                    &nbsp;
                    <b>Login</b>
                </button>           

        </section>
    );
};

export default Login;
