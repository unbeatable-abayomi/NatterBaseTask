import React from 'react';
import Navbar from './Navbar';
import imageIcon from '../NatterImages/Vector.svg';
import imageIcon2 from '../NatterImages/Avatar.svg';

export default function AccountSettings() {
	return (
		<div className="container-fluid">
			<Navbar />

			<div className="personal_information container">
				<h3 className="account_setting_text">Account Settings</h3>
				<div className="container">
                    <form>
                    <div className="fullname_username_DoB_main_div">
						<img src={imageIcon} alt="vector" className="vector-image" />
						<p className="personal_info_text">personal information</p>
						<p className="update_info">Use this page to update your contact information and change your password</p>
                        <img src={imageIcon2} alt="toDo" className="vector-image2" /> 
                        <div className="upload_image_div">
                        <p className='upload_image_text'> <a href="http">Upload a new profile image</a></p>
                        <p className='upload_image_text'>Maximum size allowed is 600kb of PNG,JPEG,JPG</p>
                        </div>
                        
						<div class="form-group">
							<div className="row">
								<div className="col-md-4 col-sm-12 email_address">
									<label for="pwd">EMAIL ADDRESS:</label>
									<input type="email" placeholder="smartdev@gmail.com" className="form-control input_tags" />
								</div>
							</div>

							<div className="row fullname_username_DoB">
								<div className="col-md-4 col-sm-12 fullname">
									<label for="pwd">FULL NAME</label>

									<input type="text" placeholder="Olatunji Joesph" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 username">
									<label for="pwd">USER NAME</label>

									<input type="text" placeholder="Kayode" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 dateOfBirth">
									<label for="pwd">BIRTH DATE:</label>

									<input type="text" placeholder="07/12/19" className="form-control input_tags" />
								</div>
                            </div>
                            </div>
                            <input type="submit" value="Save Changes" className="save_changes"/>
                            <hr/>
                            <div className="row fullname_username_DoB password">
                            
                                <div className="col-md-4 col-sm-12 currentPassword">
                                
									<label for="pwd">CURRENT PASSWORD:</label>

									<input type="text" placeholder="********" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 newPassword">
									<label for="pwd">NEW PASSWORD:</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 confirmPassword">
									<label for="pwd">CONFIRM PASSWORD:</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
							</div>
							<input type="submit" value="Save Changes" className="save_changes" />
						</div>
					</form>
					
                        <form>
                        <div className="change_stateOfResidence">
							<img src={imageIcon} alt="vector" className="vector-image" />
							<p className="change_of_state">CHANGE STATE OF RESIDENCE</p>
							<p className="update_state_residence">Use this page to update your state of Residence</p>
							<div className="row current_state">
								<div className="col-md-4 col-sm-12">
									<label for="pwd">CURRENT STATE</label>
									<input type="text" placeholder="Niger" className="form-control input_tags" />
								</div>
							</div>
							<div className="row state_Details">
								<div className="col-md-4 col-sm-12 newStateOfResidence">
									<label for="pwd">NEW STATE OF RESIDENCE:</label>

									<input type="text" placeholder="" className="form-control input_tags"/>
								</div>
								<div className="col-md-4 col-sm-12 username">
									<label for="pwd">WHAT LGA DO YOU LIVE IN:</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 dateOfBirth">
									<label for="pwd">FEDERAL CONSTITUENCIES:</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
								
                            </div>
                            <div className="row senetorial">
                            <div className="col-md-4 col-sm-12 username">
									<label for="pwd">SENETORIAL DISTRICT</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
								<div className="col-md-4 col-sm-12 dateOfBirth">
									<label for="pwd">STATE CONSTITUENCIES:</label>

									<input type="text" placeholder="" className="form-control input_tags" />
								</div>
                            </div>
                            <input type="submit" value="Save Changes" className="save_changes" />
                          </div>
                            </form>
					
				</div>
			</div>
		</div>
	);
}
