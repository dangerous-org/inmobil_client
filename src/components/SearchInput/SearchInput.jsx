/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import ClearIcon from "../icons/ClearIcon";
import postStore from "../../store/postStore";
import "./searchInput.css";

const SearchInput = () => {
  const currentPath = useLocation();

  const getPostFiltered = postStore((state) => state.getPostFiltered);

  const [search, setSearch] = useState("");

  const debouncedHandleSubmit = useCallback(
    debounce(
      async (query) => {
        await getPostFiltered(query);
      },
      1000,
      { maxWait: 3000 }
    ),
    []
  );

  const handleChange = (evt) => {
    setSearch(evt.target.value);
    debouncedHandleSubmit(evt.target.value);
  };

  const handleClear = () => {
    if (search == "" || search == null) return;
    setSearch("");
    getPostFiltered("");
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
        disabled={currentPath.pathname != "/feed" ? true : false}
      />
      <ClearIcon handleClear={handleClear} />
    </div>
  );
};

export default SearchInput;
