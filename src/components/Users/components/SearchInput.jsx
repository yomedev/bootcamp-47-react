import { useState } from "react";

export const SearchInput = ({ onChangeSearch, onResetSearch }) => {
  const [search, setSearch] = useState('')


  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={search}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={() => onChangeSearch(search)}>
        Submit
      </button>
      <button className="btn btn-outline-secondary" type="button" onClick={onResetSearch}>
        Reset
      </button>
    </div>
  );
};
