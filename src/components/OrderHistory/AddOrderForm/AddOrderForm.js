import React, { Component } from 'react';
import styles from './AddOrderForm.module.css';

const INITIAL_STATE = {
  address: '',
  price: '',
  rating: '',
};

export default class AddOrderForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;
    const { onClose, onAddingOrder } = this.props;
    onAddingOrder({ address, price, rating });
    this.setState({ ...INITIAL_STATE });
    onClose();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { address, price, rating } = this.state;
    const { onClose } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modalWindow}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Address of delivery:
              <input
                className={styles.input}
                type="text"
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="address"
              />
            </label>
            <br />
            <label>
              Price:
              <input
                className={styles.input}
                type="text"
                name="price"
                value={price}
                onChange={this.handleChange}
                placeholder="price"
              />
            </label>
            <br />
            <label>
              Rating:
              <input
                className={styles.input}
                type="text"
                name="rating"
                value={rating}
                onChange={this.handleChange}
                placeholder="rating"
              />
            </label>
            <br />
            <button type="submit">Add</button>
            <button onClick={onClose} type="Button">
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
}
