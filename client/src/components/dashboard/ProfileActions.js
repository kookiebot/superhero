import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-dark">
        <i className="fa fa-bolt text-primary mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-dark">
        <i className="fa fa-globe text-primary mr-1" />
         Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-dark disabled">
        <i className="fa fa-star text-warning mr-1" />
        Add Interest
      </Link>
    </div>
  );
};

export default ProfileActions;
