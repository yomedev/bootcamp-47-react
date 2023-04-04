import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchAction } from "../../../redux/users/usersSlice";

export const SearchInput = () => {
  const search = useSelector((state) => state.users.search);
  const dispatch = useDispatch();

  const [value, setValue] = useState(search);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(changeSearchAction(value));
  };

  const handleResetSearch = () => {
    setValue("");
    dispatch(changeSearchAction(""));
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
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleResetSearch}
      >
        Reset
      </button>
    </div>
  );
};
