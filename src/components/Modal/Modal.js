import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {}

  render() {
    const { onClose } = this.props;

    return (
      <div className={styles.backdrop}>
        <div className={styles.modalWindow}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur?
          </p>

          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
