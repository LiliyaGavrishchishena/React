import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />

          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br />
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
