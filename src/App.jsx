import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Header, Layout } from "./components/Layout";
// import { Users } from "./components/Users/Users";
// import { Articles } from "./components/Articles";
// import { ReactQueryArticles } from "./components/Articles/ReactQueryArticles";
import { LoginForm } from "./components/LoginForm/LoginForm";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header title="Hello world!" />
        <LoginForm />
        {/* <Users /> */}
        {/* <ReactQueryArticles /> */}
        <ToastContainer />
      </Layout>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
