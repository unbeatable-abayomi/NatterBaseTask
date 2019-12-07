import React from 'react';
import Navbar from './Navbar';
import imageIcon from '../NatterImages/Vector.svg';
import imageIcon2 from '../NatterImages/Avatar.svg';

export default function AccountSettings() {
	return (
		<div className="container-fluid">
			<Navbar />

			<div className="personal_information container">
				<h3>Account Settings</h3>
				<div className="container">
					<form>
						<img src={imageIcon} alt="vector" className="vector-image" />
						<h5 className="vector-image">Personal Information</h5>
						<p>Use this page to update your contact information and change your password</p>
                      <img src={imageIcon2} alt="toDo"/>
						<div class="form-group">
							<label for="pwd">EMAIL ADDRESS:</label>
							<input type="email" placeholder="smartdev@gmail.com" />
							<div className="fullname_username_DoB">
								<div className="fullname">
									<label for="pwd">FullName:</label>

									<input type="text" placeholder="Olatunji Joesph" />
								</div>
								<div className="username">
									<label for="pwd">UserName:</label>

									<input type="text" placeholder="Kayode" />
								</div>
								<div className="dateOfBirth">
									<label for="pwd">BIRTH DATE:</label>

									<input type="text" placeholder="07/12/19" />
                                </div>
                               
                            </div>
                            <input type='submit' value="save changes" />
                            <div className="fullname_username_DoB password">
								<div className="currentPassword">
									<label for="pwd">CURRENT PASSWORD:</label>

									<input type="text" placeholder="********" />
								</div>
								<div className="newPassword">
									<label for="pwd">NEW PASSWORD:</label>

									<input type="text" placeholder="" />
								</div>
								<div className="confirmPassword">
									<label for="pwd">CONFIRM PASSWORD:</label>

									<input type="text" placeholder="" />
                                </div>
                               
                            </div>
                            <input type='submit' value="save changes" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
