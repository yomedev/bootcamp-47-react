import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";

import { Header, Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <Header title="Hello world!" />
      <Counter />
      <Timer />
      <Button onClick={() => setIsModalOpen((prev) => !prev)}>Login</Button>
      {isModalOpen && (
        <Modal onModalClose={() => setIsModalOpen((prev) => !prev)}>
          <LoginForm onCloseModal={() => setIsModalOpen((prev) => !prev)} />
        </Modal>
      )}
      <ToastContainer />
    </Layout>
  );
};

// Counter()
