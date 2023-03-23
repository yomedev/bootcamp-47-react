export const SearchInput = ({ onChangeSearch, onResetSearch, search }) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={search}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        onChange={onChangeSearch}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={onResetSearch}>
        Reset
      </button>
    </div>
  );
};
