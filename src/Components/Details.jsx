import React, { Component } from 'react';
import image3 from '../NatterImages/InkedTotal amountjpg.jpg';
import image4 from '../NatterImages/InkedTotal Insurance Claimsjpg.jpg';
import image5 from '../NatterImages/file.jpg';
import image6 from '../NatterImages/file2.jpg';

export default class Details extends Component {
    render() {
        return (
            <div className="container">
              <h1>Welcome, Lois!</h1>  
              <p>Monday July 11 2019</p> 
              <div className='image-details'>
              <img src={image5} className="logo" alt="logo" />
              <img src={image6} className="logo" alt="logo" />
              <img src={image4} className="logo" alt="logo" />
              <img src={image3} className="logo" alt="logo" />
              
              
              </div> 
            </div>
        )
    }
}
