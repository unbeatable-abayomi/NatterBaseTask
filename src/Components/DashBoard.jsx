import React from 'react';
import { Table } from 'reactstrap';
import NavigationBar from './Navbar';
// import Details from './Details';
import DetailsOne from './DetailsOne';

const DashBoard = (props) => {
	return (
		<div className="section_container">
			<NavigationBar />
			<DetailsOne />
			<div className="container table-div">
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th colSpan="7">Insurance Application</th>
						</tr>
						<tr>
							<th>S.N</th>
							<th>Insurance Type</th>
							<th>Amount</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Travel Insurance</td>
							<td>#21,4999</td>
							<td>Oct 20 2019</td>
							<td>
								<i>completed</i>
							</td>
							<td>
								<p className="claim-button">Make a claim</p>
							</td>
							<td>More Action</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Life Insurance</td>
							<td>#21,4999</td>
							<td>Oct 20 2019</td>
							<td>
								<i>completed</i>
							</td>
							<td>
								<p className="claim-button">Make a claim</p>
							</td>
							<td>More Action</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Health Insurance</td>
							<td>#21,4900</td>
							<td>Oct 20 2019</td>
							<td>
								<i>completed</i>
							</td>
							<td>
								<p className="claim-button">Make a claim</p>
							</td>
							<td>More Action</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Motor Insurance</td>
							<td>#21,4999</td>
							<td>Oct 20 2019</td>
							<td>
								<i>completed</i>
							</td>
							<td>
								<p className="claim-button">Make a claim</p>
							</td>
							<td>More Action</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Third Party Motor Insurance</td>
							<td>#21,4999</td>
							<td>Oct 20 2019</td>
							<td>
								<i><span className="completed"><span className="completed_dot">.</span>completed</span></i>
							</td>
							<td>
								<p className="claim-button">Make a claim</p>
							</td>
							<td>More Action</td>
						</tr>
						
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default DashBoard;
