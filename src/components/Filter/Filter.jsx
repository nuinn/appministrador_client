import React, { useState } from 'react';
import './Filter.css';

function FilterComponent({ data, onApplyFilters, onClearFilters }) {
  const [filters, setFilters] = useState({});
  
  const handleChange = (propertyName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [propertyName]: value
    }));
  };

  function handleApplyFilters(){
    onApplyFilters(filters);
  };

  function handleClearFilters(){
    setFilters({});
    onClearFilters();
  };

  return (
    <div div className="filter-container">
      {Object.keys(data).map(propertyName => (
        <div key={propertyName}>
          <h3>{data[propertyName].title}</h3>
          {data[propertyName].type === 'select' ? (
            <select
              value={filters[propertyName] || ''}
              onChange={e => handleChange(propertyName, e.target.value)}
            >
              <option value="">Todos</option>
              {data[propertyName].options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : data[propertyName].type === 'checkbox' ? (
            <div className='checkbox'>
              {data[propertyName].options.map(option => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={filters[propertyName] && filters[propertyName][option]}
                    onChange={e => handleChange(propertyName, {
                      ...filters[propertyName],
                      [option]: e.target.checked
                    })}
                  />
                  {option}
                </label>
              ))}
            </div>
          ) :
           data[propertyName].type === 'date' ? (
            <input
              type="date"
              value={filters[propertyName] || ''}
              onChange={e => handleChange(propertyName, e.target.value)}
              placeholder={`Filter ${propertyName}`}
            />
          ) : (
            <input
              type="text"
              value={filters[propertyName] || ''}
              onChange={e => handleChange(propertyName, e.target.value)}
              placeholder={`Filter ${propertyName}`}
            />
          )}
        </div>
      ))}
      <div className='buttons'>
      <button className="filterbutton" onClick={handleApplyFilters}>Apply Filters</button>
      <button className="filterbutton"onClick={handleClearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}

export default FilterComponent;
