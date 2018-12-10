import React, { Component } from 'react';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import styles from './Tab.module.css';

export default class Tab extends Component {
  state = {
    on: false,
  };

  handleCheckSingIn = () => {
    this.setState({ on: true });
  };

  handleCheckSingUp = () => {
    this.setState({ on: false });
  };

  render() {
    const { on } = this.state;
    return (
      <div className={styles.tab}>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleCheckSingIn}
        >
          Sign in
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleCheckSingUp}
        >
          Sign up
        </button>
        {on ? <SignInForm /> : <SignUpForm />}
      </div>
    );
  }
}
