import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Header, Layout } from './components/Layout';
// import { LoginForm } from './components/LoginForm';
import { Users } from './components/Users';
import { UsersList } from './components/Users/UsersList';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <LoginForm /> */}
      <Users />
      <ToastContainer />
    </Layout>
  );
};


