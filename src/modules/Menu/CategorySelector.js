import React from 'react';
import styles from './CategorySelector.module.css';

const CategorySelector = ({ value, categories, onChange }) => (
  <>
    <span className={styles.category}>Check category:</span>
    <select value={value} onChange={event => onChange(event.target.value)}>
      {categories.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  </>
);

export default CategorySelector;
