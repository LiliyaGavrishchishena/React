import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const {  email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />


        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <button>SignIn</button>
      </form>
    );
  }
}
