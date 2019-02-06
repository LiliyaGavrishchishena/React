import React from 'react';
import Select from 'react-select';
import styles from './CategorySelector.module.css';

// const CategorySelector = ({ value, categories, onChange }) => (
//   <>
//     <h4 className={styles.category}>Check category:</h4>
//     <select value={value} onChange={({ target }) => onChange(target.value)}>
//       <option value="all" key="check" disabled label="check" />
//       {categories.map(({ id, name }) => (
//         <option key={id} value={name}>
//           {name}
//         </option>
//       ))}
//     </select>
//   </>
// );
const CategorySelector = props => {
  const {
    categories,
    category,
    onChange,
    resetCategory,
    history,
    location,
  } = props;

  const options = [];
  categories.map(option =>
    options.push({ value: option.name, label: option.name }),
  );

  return (
    <>
      {category && (
        <div>
          <button
            className={styles.button__clearFilter}
            type="button"
            onClick={() => resetCategory(history)}
          >
            X
          </button>

          <p>
            Selected Category: <span>{category}</span>
          </p>
        </div>
      )}
      <Select
        className={styles.select}
        options={options}
        onChange={option => onChange(option.value, history, location)}
        value={category}
        placeholder="Select Category..."
      />
    </>
  );
};
export default CategorySelector;
