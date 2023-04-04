import { FiPlus } from "react-icons/fi";

import { Modal } from "../../../components/Modal";

import { NewUserForm } from "../../../components/Users/components/NewUserForm";
import { SearchInput } from "../../../components/Users/components/SearchInput";
import { UsersList } from "../../../components/Users/components/UsersList";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModalAction,
  createUserAction,
} from "../../../redux/users/usersSlice";

export const UsersPage = () => {
  const { isModalOpen } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleCreateNewUser = (user) => {
    dispatch(createUserAction(user));
    dispatch(toggleModalAction());
  };

  const toggleModal = () => {
    dispatch(toggleModalAction());
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

      <SearchInput />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm
            onSubmit={handleCreateNewUser}
            onModalClose={toggleModal}
          />
        </Modal>
      )}

      <UsersList />
    </>
  );
};
