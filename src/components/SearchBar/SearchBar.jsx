import React, { useRef } from "react";
import { MdSearch } from "react-icons/md";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="searchBar-container">
      <div className="searchBar-wrapper">
        <button
          className="searchBar-icon-btn"
          onClick={handleIconClick}
          title="Buscar"
          type="button"
        >
          <MdSearch size={20} />
        </button>
        <input
          ref={inputRef}
          className="searchBar-input"
          type="text"
          placeholder="Buscar contacto"
          name="buscar-contacto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
