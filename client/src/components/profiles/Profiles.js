import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.slice(0,3).map(profile => (
          <ProfileItem key={profile._id} profile={profile}/>
        ));
      } else {
        profileItems = <h4>No profiles found.</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container fade-in" id="mainarticle">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-4 text-center text-avengersred">Featured Heroes</h2>
              <p className="lead text-center">
              
                Browse and connect with newly registered heroes.
                <br />

              </p>
              <div className="row">
                {profileItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
