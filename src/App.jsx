import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header, Layout } from "./components/Layout";
import { Memo } from "./components/Memo/Memo";
import { Posts } from "./components/Posts/Posts";
import { Rerender } from "./components/Rerender/Rerender";
import { Users } from "./components/Users/Users";
import { AuthProvider } from "./context/AuthContext";

export const App = () => {

  return (
    <AuthProvider>
      <Layout>
        <Header title="Hello world!" />
        <Rerender />
        {/* <Users /> */}
        {/* <Memo />
        <Posts /> */}
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );
};

// const a = 5

// function name(params) {
//   console.log(a)
// }

// function func(a, b) {
//   return () => {
//     return a + b
//   }
// }

// const func2 = func(2, 3)

// const result = func2()
// console.log(result);
