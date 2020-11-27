import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <section className={styles.section}>

        <div class="container">
            <h1 className="text-center">Edit Profile</h1>
            <div class="row">
            <div class="col-md-3">
                <div class="text-center">
                <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
                <h6>Upload a different photo...</h6>
                
                <input type="file" class="form-control" />
                </div>
            </div>
            
            <div class="col-md-9 personal-info">
                
                
                <div class="form-group">
                    <div class="col-lg-8">
                    <input class="form-control" type="text" placeholder="First name" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-8">
                    <input class="form-control" type="text" placeholder="Last name" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-8">
                    <input class="form-control" type="text" placeholder="Company" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-8">
                    <input class="form-control" type="email" placeholder="Email" />
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-md-8">
                    <input class="form-control" type="text" placeholder="Username" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-8">
                    <input class="form-control" type="password" placeholder="Password"  />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-8">
                    <input class="form-control" type="password" placeholder="Confirm password" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-lg-3 control-label">Time Zone:</label>
                    <div class="col-lg-8">
                    <div class="ui-select">
                        <select id="user_time_zone" class="form-control">
                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                        <option value="Alaska">(GMT-09:00) Alaska</option>
                        <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                        <option value="Arizona">(GMT-07:00) Arizona</option>
                        <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                        <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                        <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                        <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label"></label>
                    <div class="col-md-8">
                        <Link to="/setting" class="btn btn-danger m-2" >Cancel</Link>
                        <Link to="/setting" class="btn btn-info m-2" >Save Changes</Link>
                    </div>
                </div>
                
                
            </div>
        </div>
        </div>

        </section>
    );
};

export default Profile;