import React, { Component } from 'react';

import SignUpView from './SignUpView';
import withAuth from '../../components/hoc/withAuth';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordRepeate: '',
};

class SignUpContainer extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <SignUpView
        {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default withAuth(SignUpContainer);
