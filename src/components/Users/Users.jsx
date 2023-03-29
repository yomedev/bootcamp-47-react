import { useMemo, useReducer, useState } from "react";

import { FiPlus } from "react-icons/fi";

import usersJson from "../../data/users.json";
import { Modal } from "../Modal/Modal";

import { NewUserForm } from "./components/NewUserForm/NewUserForm";
import { SearchInput } from "./components/SearchInput";
import { UsersList } from "./components/UsersList";

// const USERS_LOCALE_STORAGE_KEY = "users";

export const Users = () => {
  const [users, setUsers] = useState(usersJson);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleDeleteUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleCreateNewUser = (user) => {
    setUsers((prev) => [{ ...user, id: Date.now() }, ...prev]);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleChangeSearch = (value) => {
    setSearch(value);
  };

  const handleResetSearch = () => {
    setSearch("");
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

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

      <UsersList users={filteredUsers} onDeleteUser={handleDeleteUser} />
    </>
  );
};
