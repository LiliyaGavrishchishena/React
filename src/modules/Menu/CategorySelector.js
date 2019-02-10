import React from 'react';
import Select from 'react-select';
import styles from './CategorySelector.module.css';

const CategorySelector = props => {
  const { categories, category, onChange, history, location } = props;

  const options = [];
  categories.map(option =>
    options.push({ value: option.name, label: option.name }),
  );
  const selectedCategory = category
    ? {
        value: category,
        label: category,
      }
    : null;
  return (
    <Select
      className={styles.select}
      options={options}
      onChange={option => onChange(option.value, history, location)}
      value={selectedCategory}
      placeholder="Select Category..."
    />
  );
};
export default CategorySelector;
