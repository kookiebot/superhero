import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="col-md-4 col-xs-6">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-12">
              <Link to={`/profile/${profile.handle}`}>
                <h3 className="text-center">{profile.handle}</h3>
                <img src={profile.user.avatar} alt="" className="rounded-circle" />
              </Link>
            </div>
            <div className="col-12">
              <p>
                {isEmpty(profile.bio) ? null : (
                <span><i className="fa fa-comment"></i> {profile.bio}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span><i className="fa fa-map-pin"></i> {profile.location}</span>
                )}
              </p>

            </div>
            <div className="col-md-12">
              <ul className="list-group">
                {profile.skills.slice(0, 1).map((skill, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-bolt pr-1" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
