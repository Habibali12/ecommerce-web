import React from "react";
import "../styles/css/search_dropdown.scss";
import { useState, useRef, useEffect } from "react";

export const SearchDropdown = ({ data, placeholder, icon }) => {
  const [searchName, setsearchName] = useState(placeholder);
  const [dropdownVisible, setdropdownVisible] = useState(false);
  const [selectCategory, setselectCategory] = useState(placeholder);
  const [inputChange, setInputChange] = useState(data);
  const [inputChange2, setInputChange2] = useState(data);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setdropdownVisible((prev) => !prev);
  };

  const setNameHandle = (searchItem) => {
    setsearchName(searchItem);
    setselectCategory(searchItem);
    setdropdownVisible(false);
  };

  const handleInputChange = (event) => {
    const searchedValue = event.target.value.toLowerCase();

    const inputFilter = inputChange2.filter((inputValue) => {
      return inputValue.toLowerCase().includes(searchedValue);
    });

    const inputFilter2 = inputFilter.filter(
      (item, index) => inputFilter.indexOf(item) === index
    );

    setInputChange(inputFilter2);
  };

  const handleDropdownRef = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setdropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDropdownRef);

    return () => {
      document.removeEventListener("mousedown", handleDropdownRef);
    };
  }, []);

  return (
    <div
      className="search-wrapper-container position-relative w-100"
      ref={dropdownRef}
    >
      <div
        className="search-heading position-relative d-flex justify-content-between align-items-center"
        onClick={() => handleDropdown()}
      >
        <div className="search-heading-wrapper d-flex align-items-center">
          {icon !== false && (
            <span
              dangerouslySetInnerHTML={{ __html: icon }}
              className="me-2"
            ></span>
          )}
          <h6>
            {searchName.length > 16
              ? searchName.substr(0, 16) + "..."
              : searchName}
          </h6>
        </div>
        <i className="fa-solid fa-chevron-down down-icon"></i>
      </div>
      {dropdownVisible && (
        <div className="dropdown-visibile w-100">
          <div className="visibile-container">
            <input
              type="text"
              placeholder="Search Here..."
              className="w-100 mb-2"
              onChange={handleInputChange}
            />
            <ul className="search-dropdown-wrapper w-100 mt-2">
              <li
                key={0}
                onClick={() => setNameHandle(placeholder)}
                className={selectCategory === placeholder ? "selected" : ""}
              >
                {placeholder}
              </li>
              {inputChange.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setNameHandle(category)}
                  className={selectCategory === category ? "selected" : ""}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
