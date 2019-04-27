import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../css/custom.css';
import '../css/animate-landing.css';
import './slideshow.css';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      

      <div className="landing">

      <div className="container">

      <ul className="landing-slideshow">
            <li><span>Image 01</span><div><h3>until the</h3></div></li>
            <li><span>Image 02</span><div><h3>world ends</h3></div></li>
            <li><span>Image 03</span><div><h3>we will still act</h3></div></li>
            <li><span>Image 04</span><div><h3>like</h3></div></li>
            <li><span>Image 05</span><div><h3>it</h3></div></li>
            <li><span>Image 06</span><div><h3>spins on</h3></div></li>
        </ul>

      
      </div>
      </div>
 
      
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
