import React from "react";
import "./search-box.css";

const SearchBox = (props) => {
  return <input className="search-box" type="search" placeholder="Search robots" onChange={props.onSearchChange} />;
};

export default SearchBox;
