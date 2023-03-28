import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "../../Button";
import { LoginForm } from "../../LoginForm/LoginForm";
import { Modal } from "../../Modal/Modal";
import { Nav } from "./Nav";

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuth } = useAuth();

  return (
    <aside
      className="nav nav-pills p-5 bg-light col-2"
      style={{ height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{ position: "sticky", top: 30, left: 0, height: "88vh" }}
      >
        {isAuth ? (
          <Nav />
        ) : (
          <Button
            className="btn-primary"
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            Log in
          </Button>
        )}
        {isModalOpen && (
          <Modal onModalClose={() => setIsModalOpen((prev) => !prev)}>
            <LoginForm onCloseModal={() => setIsModalOpen((prev) => !prev)} />
          </Modal>
        )}
      </div>
    </aside>
  );
};
