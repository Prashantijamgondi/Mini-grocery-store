import React from 'react';

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="category-filter">
    {categories.map(category => (
      <button
        key={category}
        className={category === selected ? 'active' : ''}
        onClick={() => onSelect(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;