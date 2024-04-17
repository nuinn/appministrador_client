import React, { useState } from 'react';
import useToggle from '../../hooks/useToggle.js'
import './Filter.css';
import downArrow from '../../assets/stepperIcons/downArrow.png'

function FilterComponent({ data, onApplyFilters, onClearFilters, refreshFilter }) {
  const [filters, setFilters] = useState({})
  const [showFilter, toggleShowFilter] = useToggle(false)

  function handleChange(propertyName, value){
      const updatedFilters = {
        ...filters,
        [propertyName]: value
      }

      if (typeof value === 'object') { // (checkbox)
        const isAllUnchecked = Object.values(value).every(val => !val);
        if (isAllUnchecked && updatedFilters.hasOwnProperty(propertyName)) {
          delete updatedFilters['status'];
        }
      }
      if(typeof value === 'string' && updatedFilters.hasOwnProperty(propertyName) && updatedFilters[propertyName] == ''){
        delete updatedFilters[propertyName];
      }
      setFilters(updatedFilters);
      refreshFilter(updatedFilters);
      onApplyFilters(updatedFilters);
    };

  function handleApplyFilters(){
    onApplyFilters(filters);
  };

  function handleClearFilters(){
    setFilters({});
    onClearFilters();
  };

  return (
    <div className={ showFilter ? "filter-container" : "filter-container hidden"}>
      {!showFilter && <p>Filtrar</p>}
      <div
      onClick={toggleShowFilter}
      className="arrowContainer">
        <img className={ showFilter ? "upsideDown" : "" } src={downArrow} />
      </div>
      {showFilter &&
      <>
      {Object.keys(data).map(propertyName => (
        <div key={propertyName} className='inputContainer'>
          <h3>{data[propertyName].title === 'Fecha' ? 'Desde' : data[propertyName].title}</h3>
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
      {/* <button className="filterbutton" onClick={handleApplyFilters}>Apply Filters</button> */}
      <button className="filterbutton"onClick={handleClearFilters}>Limpiar Filtros</button>
      </div>
      </>}
    </div>
  );
}

export default FilterComponent;
