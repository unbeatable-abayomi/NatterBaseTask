import React from 'react';
import AccountSettings from './Components/AccountSettings';
import DashBoard from './Components/DashBoard';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
        <Route exact path='/' component={DashBoard} />
        <Route path='/accountSetting' component={AccountSettings}/>
       
      
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
