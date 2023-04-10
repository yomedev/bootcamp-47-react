import { NavLink } from "react-router-dom";
import { Button } from "../../../Button";
import { UserCard } from "../../../UserCard/UserCard";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../redux/auth/authSlice";

export const Nav = () => {

  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <UserCard />
      <div className="d-flex flex-column justify-content-between">
        <NavLink
          to="/"
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
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

      <Button className="btn-danger mt-auto" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};
