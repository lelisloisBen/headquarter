import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import HeadquarterNav from './js/components/Navbar/Navbar';
import Footer from './js/components/Footer/Footer';
import NotFound from './js/components/NotFound/NotFound';


// const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));

function App() {

  const [homeUrl] = useState('https://iwash-react.herokuapp.com/');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [backen_url] = useState('https://iwash-backend.herokuapp.com/');
  const [mapBoxPublicToken] = useState('pk.eyJ1Ijoic2FtaXJiZW56YWRhIiwiYSI6ImNrMnV1MG9vYjB6aW4zZXFjNGs1aHkxbmkifQ.rXgK6pv70xZsGs-NwOmodw');

  const [washersData, setWashersData] = useState();
  const [dryersData, setDryersData] = useState();
  const [valuesData, setValuesData] = useState();
  const [currentWashing, setCurrentWashing] = useState();
  const [historyWashing, setHistoryWashing] = useState();
  
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let tokenAuth = localStorage.getItem('token');
  let userId = localStorage.getItem('userID');
  let userEmail = localStorage.getItem('email');

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  useEffect(() => {
    fetch(backen_url+'/washers')
      .then(res => res.json())
      .then(res => setWashersData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/dryers')
      .then(res => res.json())
      .then(res => setDryersData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/values')
      .then(res => res.json())
      .then(res => setValuesData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/user_wash', {
      method: 'POST',
      cors: '*cors',
      body: JSON.stringify({
        user_id: userId,
        user_email: userEmail
      }),
      headers:{
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setCurrentWashing(res))
      .catch(error => console.log('error: ', error) );
  // },[])
  },[userId, userEmail, currentWashing, backen_url])

  useEffect(() => {
    fetch(backen_url+'/wash_history', {
      method: 'POST',
      cors: '*cors',
      body: JSON.stringify({
        user_id: userId,
        user_email: userEmail
      }),
      headers:{
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setHistoryWashing(res))
      .catch(error => console.log('error: ', error) );
  // },[])
  },[userId, userEmail, historyWashing, backen_url])

  const providerValue = useMemo(() => ({ user, setUser, Auth, setAuth, washersData, dryersData, valuesData, setValuesData, currentWashing, backen_url, windowHeight, mapBoxPublicToken, historyWashing, homeUrl }), [user, setUser, Auth, setAuth, washersData, dryersData, valuesData, setValuesData, currentWashing, backen_url, windowHeight, mapBoxPublicToken, historyWashing, homeUrl]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <HeadquarterNav/>
          <section style={{minHeight: windowHeight}}>
            <Switch>
              {!tokenAuth ? <Route exact path="/" component={Login} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route render={() => <NotFound/>} />
            </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;