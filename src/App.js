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
const consultantProfile = lazy(() => import('./js/views/ConsultantProfile/ConsultantProfile'));

function App() {

  const [homeUrl] = useState('https://iwash-react.herokuapp.com/');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [backen_url] = useState('https://headquarter-backend.herokuapp.com/');
  
  const [consultantData, setconsultantData] = useState();
  
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let tokenAuth = localStorage.getItem('token');

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  useEffect(() => {
    fetch(backen_url+'/consultant')
      .then(res => res.json())
      .then(res => setconsultantData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])
  

  const providerValue = useMemo(() => ({ user, setUser, Auth, setAuth, consultantData, backen_url, windowHeight, homeUrl }), [user, setUser, Auth, setAuth, consultantData, backen_url, windowHeight, homeUrl]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <HeadquarterNav/>
          <section style={{minHeight: windowHeight}}>
            <Switch>
              {!tokenAuth ? <Route exact path="/" component={Login} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route path="/consultant-profile/:CID" component={consultantProfile} />
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