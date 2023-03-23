import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Layout } from './components/Layout';
import { Users } from './components/Users';
import {Timer} from './components/Timer'
import {Rerender} from './components/Rerender'

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Rerender />
      <Timer />
      <Users />
      <ToastContainer />
    </Layout>
  );
};

