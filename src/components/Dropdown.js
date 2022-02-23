import React from 'react';

const Dropdown = ({ handleDropdown, setInfo, setAlgorithm }) => {
  return (
    <>
      <div className="dropdown">
        <label className="label" htmlFor="algorithm">
          Algorithm:
        </label>
        <select
          name="algorithm"
          id="algorithm"
          onChange={event => {
            handleDropdown(event, setInfo, setAlgorithm);
          }}
        >
          <option value="BubbleSort">Bubble Sort</option>
          <option value="SelectionSort">Selection Sort</option>
          <option value="InsertionSort">Insertion Sort</option>
          <option value="QuickSort">Quick Sort</option>
          <option value="MergeSort">Merge Sort</option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
