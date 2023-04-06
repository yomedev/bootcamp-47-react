import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { Button } from "../../../Button";
import styles from './Nav.module.css'



export const Nav = () => {
  const { logout } = useAuth();

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? `btn ${styles.active}` : "btn btn-light"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/articles"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/new-article"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Create article
        </NavLink>
        <NavLink
          to="/exercises"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Exercises
        </NavLink>
      </div>

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log out
      </Button>
    </div>
  );
};
