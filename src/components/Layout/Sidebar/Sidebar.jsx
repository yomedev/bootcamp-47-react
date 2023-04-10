import { useState } from "react";
import { LoginForm } from "../../LoginForm/LoginForm";
import { Modal } from "../../Modal/Modal";
import { Nav } from "./Nav";
import { NotAuth } from "./NotAuth";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../../constants/fetch-status";

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const status = useSelector(state => state.auth.status)

  return (
    <aside
      className="nav nav-pills p-3 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {status === fetchStatus.Success ? <Nav /> : <NotAuth />}

        {isModalOpen && (
          <Modal onModalClose={() => setIsModalOpen((prev) => !prev)}>
            <LoginForm onCloseModal={() => setIsModalOpen((prev) => !prev)} />
          </Modal>
        )}
      </div>
    </aside>
  );
};
