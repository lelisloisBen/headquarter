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
const interviewDetails = lazy(() => import('./js/views/InterviewDetails/InterviewDetails'));
const MessagesView = lazy(() => import('./js/views/Messages/Messages'));
const messageDetail = lazy(() => import('./js/views/MessageDetail/MessageDetail'));
const StudentDetails = lazy(() => import('./js/views/StudentDetails/StudentDetails'));

function App() {

  // const [homeUrl] = useState('https://iwash-react.herokuapp.com/');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [backen_url] = useState('https://headquarter-backend.herokuapp.com/');
  
  const [consultantData, setconsultantData] = useState();
  const [interviewsData, setinterviewsData] = useState();
  const [messagesData, setmessagesData] = useState();
  const [countMessagesData, setcountMessagesData] = useState(0);
  const [studentsData, setstudentsDataData] = useState();
  
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let emailAuth = localStorage.getItem('email');

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  useEffect(() => {
    fetch(backen_url+'consultant')
      .then(res => res.json())
      .then(res => setconsultantData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'interviews')
      .then(res => res.json())
      .then(res => setinterviewsData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'students')
      .then(res => res.json())
      .then(res => setstudentsDataData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  // useEffect(() => {
  //   fetch(backen_url+'/checkToken')
  //     .then(res => res.json())
  //     .then(res => setcheckToken(res.token))
  //     .catch(error => console.log('error: ', error) );
  // })

  useEffect(() => {
    fetch(backen_url+'allWebsiteMessages')
      .then(res => res.json())
      .then(res => setmessagesData(res))
      .catch(error => console.log('error: ', error) );
  }, [backen_url])

  useEffect(() => {
    fetch(backen_url+'countMessage')
      .then(res => res.json())
      .then(res => setcountMessagesData(res))
      .catch(error => console.log('error: ', error) );
    }, [backen_url])
    
  

  const providerValue = useMemo(() => ({
    user, 
    setUser, 
    Auth, 
    setAuth, 
    consultantData, 
    interviewsData, 
    backen_url, 
    windowHeight, 
    messagesData, 
    countMessagesData, 
    studentsData 
  }), [
    user, 
    setUser, 
    Auth, 
    setAuth, 
    consultantData, 
    interviewsData, 
    backen_url, 
    windowHeight, 
    messagesData, 
    countMessagesData, 
    studentsData
  ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
        {(emailAuth === "" || emailAuth === null) ? "" : <HeadquarterNav/>}
          <section style={{minHeight: windowHeight}}>
            <Switch>
              {(emailAuth === "" || emailAuth === null) ? <Route exact path="/" component={Login} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route path="/consultant-profile/:CID" component={consultantProfile} />
              <Route path="/interview-details/:IID" component={interviewDetails} />
              <Route path="/messages" component={MessagesView} />
              <Route path="/message-detail/:MID" component={messageDetail} />
              <Route path="/student-details/:SID" component={StudentDetails} />
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