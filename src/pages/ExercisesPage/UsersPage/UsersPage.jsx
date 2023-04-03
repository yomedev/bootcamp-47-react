import { FiPlus } from "react-icons/fi";

import { Modal } from "../../../components/Modal";

import { NewUserForm } from "../../../components/Users/components/NewUserForm";
import { SearchInput } from "../../../components/Users/components/SearchInput";
import { UsersList } from "../../../components/Users/components/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchAction, createUserAction, deleteUserAction, toggleModalAction } from "../../../redux/users/usersActions";

export const UsersPage = () => {
  const {
    isModalOpen,
    search,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    // dispatch({ type: DELETE_USER, payload: userId });
    dispatch(deleteUserAction(userId))
  };

  const handleCreateNewUser = (user) => {
    // dispatch({ type: CREATE_USER, payload: { ...user, id: Date.now() } });
    // dispatch({ type: TOGGLE_MODAL });
    dispatch(createUserAction(user))
    dispatch(toggleModalAction())
  };

  const toggleModal = () => {
    // dispatch({ type: TOGGLE_MODAL });
    dispatch(toggleModalAction())
  };

  const handleChangeSearch = (value) => {
    // dispatch({type: CHANGE_SEARCH, payload: value})
    dispatch(changeSearchAction(value))
  };

  const handleResetSearch = () => {
    // setSearch("");
  };

 

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={toggleModal}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput
        search={search}
        onResetSearch={handleResetSearch}
        onChangeSearch={handleChangeSearch}
      />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm
            onSubmit={handleCreateNewUser}
            onModalClose={toggleModal}
          />
        </Modal>
      )}

      <UsersList onDeleteUser={handleDeleteUser} />
    </>
  );
};
