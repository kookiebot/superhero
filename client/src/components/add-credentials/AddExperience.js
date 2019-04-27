import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;
 
    return (

      <div className="add-experience">
        <div className="container fade-in" id="mainarticle">

          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-primary">
                <i class="fa fa-angle-left"></i> Back to Dashboard
               
              </Link>
              
              <h2 className="display-4 text-center text-avengersred mt-4 mb-4">Share Your Experience</h2>
              <p className="text-center">Let others know more about you. Add as many experience as you can!</p>
           
              <form onSubmit={this.onSubmit}>
           
                
              <label class="label-input">Association<span class="label-required">*</span></label>
                
                <TextFieldGroup
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  
                />

                <label class="label-input">Status<span class="label-required">*</span></label>
                <TextFieldGroup
                  //placeholder="* Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />

                <label class="label-input">location<span class="label-required">*</span></label>
                <TextFieldGroup
                  //placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <div className="row">
                <div className="col-md-6">
                <label class="label-input">STARTING FROM<span class="label-required">*</span></label>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                </div>
                <div className="col-md-6">
                <label class="label-input">UNTIL<span class="label-required">*</span></label>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                </div>
                </div>
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input btn btn-default"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label text-primary">
                    It's my current role!
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us about the the position"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-danger btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
