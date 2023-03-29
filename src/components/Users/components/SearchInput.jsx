import { useState } from "react";

export const SearchInput = ({ onChangeSearch, onResetSearch, search }) => {
  const [value, setValue] = useState(search);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={value}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        onChange={handleChangeValue}
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => onChangeSearch(value)}
      >
        Submit
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          setValue("");
          onResetSearch();
        }}
      >
        Reset
      </button>
    </div>
  );
};
