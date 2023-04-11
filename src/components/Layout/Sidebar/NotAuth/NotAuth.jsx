import { NavLink, useLocation } from "react-router-dom";

export const NotAuth = () => {
  const location = useLocation();
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <NavLink
          to="/"
          end
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary mb-2" : "btn btn-light mb-2"
          }
        >
          Home page
        </NavLink>

        <NavLink
          to="/articles"
          end
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary mb-2" : "btn btn-light mb-2"
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/login"
          state={{ ...location.state, fromLogin: location }}
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary mb-2" : "btn btn-light mb-2"
          }
        >
          Log In
        </NavLink>

        <NavLink
          to="/register"
          state={{ ...location.state, fromLogin: location }}
          style={{ textAlign: "left", marginLeft: "-10px" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary mb-2" : "btn btn-light mb-2"
          }
        >
          Join
        </NavLink>
      </div>
    </div>
  );
};
