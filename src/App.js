import React from 'react';
import AccountSettings from './Components/AccountSettings';
import DashBoard from './Components/DashBoard';
import {BrowserRouter, Route} from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path='/' component={DashBoard} />
        <Route path='/accountSetting' component={AccountSettings}/>
       
      
    </div>
    </BrowserRouter>
  );
}

export default App;
