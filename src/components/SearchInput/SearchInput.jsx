import SearchIcon from "../icons/SearchIcon"
import ClearIcon from "../icons/ClearIcon";
import { useState } from "react";
import "./searchInput.css";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleClear = () => {
    setSearch("");
  };
  return (
    <div className="searchInputContainer">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        name="search"
        id="searchInput"
        onChange={handleChange}
        value={search}
      />
      <ClearIcon handleClear={handleClear} />
    </div>
  );
};

export default SearchInput;
