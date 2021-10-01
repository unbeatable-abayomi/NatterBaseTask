import React from 'react';
import image1 from '../NatterImages/main/Total amount of claims.png';
import image2 from '../NatterImages/main/Total Amout of Insurance.png';
import image3 from '../NatterImages/main/Total insurance bought.png';
import image4 from '../NatterImages/main/Total Insurance Claims.png';

export default function DetailsOne() {
	return (
		<div className="container">
			<div className="name_date">
				<h2>Welcome, Lois!</h2>
				<p>Monday July 11 2019</p>
			</div>

			<div className="row center">
				<div className="col-md-3 col-sm-12">
					<img src={image3} alt="some" className="imagesOne" />
				</div>
				<div className="col-md-3 col-sm-12">
					<img src={image2} alt="some" className="imagesOne" />
				</div>
				<div className="col-md-3 col-sm-12">
					<img src={image4} alt="some" className="imagesOne" />
				</div>
				<div className="col-md-3 col-sm-12">
					<img src={image1} alt="some" className="imagesOne" />
				</div>
			</div>
		</div>
	);
}
