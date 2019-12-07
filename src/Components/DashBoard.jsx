import React from 'react';
import { Table } from 'reactstrap';
import NavigationBar from './Navbar';
import Details from './Details';

const DashBoard = (props) => {
	return (
		<div className="section_container">
			<NavigationBar />
			<Details />
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
							<th colSpan="2">Action</th>
							<th> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Travel Insurance</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>
								<buton>completed</buton>
							</td>
							<td>Make a Claim</td>
							<td>More Action</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Life Insurance</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>
								<i>completed</i>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Health Insurance</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>
								<i>completed</i>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Motor Insurance</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>
								<i>completed</i>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Third Party Motor Insurance</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>
								<i>completed</i>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
							<td>
								<i>completed</i>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default DashBoard;
