import { useDispatch, useSelector } from "react-redux";
import { changeSearchAction } from "../../../redux/users/usersSlice";

export const SearchInput = () => {
  const search = useSelector((state) => state.users.search);
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    dispatch(changeSearchAction(event.target.value));
  };

  const handleResetSearch = () => {
    dispatch(changeSearchAction(""));
  };

  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={search}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        onChange={handleChangeValue}
      />
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
