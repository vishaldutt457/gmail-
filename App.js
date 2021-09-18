import React, {useEffect}  from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Login from './components/Login';
import {useDispatch} from "react-redux";
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import {login} from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user){
           dispatch(login({
               displayName: user.displayName,
               email: user.email,
               photoURL: user.photoURL
           }))
        }

    })

    }, [])


  return (
    <Router>
        {!user ? (
            <Login/>
        ): (
            <div className="App">
                 <Header/>
            <div className="app_body">

                  <Sidebar/>
                <Switch>
                    <Route path="/mail">
                        <Mail/>
                    </Route>

                    <Route path="/">
                        <EmailList/>
                    </Route>

                </Switch>
            </div>
            {sendMessageIsOpen && <SendMail/> }
        </div>

        )}

    </Router>

);
}

export default App;
