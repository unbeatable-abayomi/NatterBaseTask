import React, { Component } from 'react';
import image3 from '../NatterImages/InkedTotal amountjpg.jpg';
import image4 from '../NatterImages/InkedTotal Insurance Claimsjpg.jpg';
import image5 from '../NatterImages/file.jpg';
import image6 from '../NatterImages/file2.jpg';

export default class Details extends Component {
	render() {
		return (
            <div className="container">
            <div className="name_date">
            <h2>Welcome, Lois!</h2>
				<p>Monday July 11 2019</p>
            </div>
				
				<div className="image-details">
					<div className="images">
						<div className="info">
							<h1>06</h1>
							<p>Total Insurance Bought</p>
						</div>
						<img src={image5} className="logo" alt="logo" />
					</div>
					<div className="images">
						<div className="info_2">
							<h1>#21,400,00</h1>
							<p>Total Amount of Insurance</p>
						</div>
						<img src={image6} className="logo" alt="logo" />
					</div>
					<div className="images">
						<div className="info_3">
							<h1>03</h1>
							<p>Total Insurance Claims</p>
						</div>
						<img src={image4} className="logo" alt="logo" />
					</div>
					<div className="images">
						<div className="info_4">
							<h1>#1,400,000</h1>
							<p>Total Amount of Claims</p>
						</div>

						<img src={image3} className="logo" alt="logo" />
					</div>
				</div>
			</div>
		);
	}
}
