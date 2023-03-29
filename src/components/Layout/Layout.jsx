import { PropTypes } from "prop-types";
import { AuthProvider } from "../../context/AuthContext";

import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div className="d-flex h-100">
        <Sidebar />

        <main
          className="tab-content p-5 h-100 w-100"
          style={{ minHeight: "100vh" }}
        >
          <div className="tab-pane fade show active">{children}</div>
        </main>
      </div>
    </AuthProvider>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
