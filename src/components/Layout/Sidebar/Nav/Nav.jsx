import { useAuth } from "../../../../context/AuthContext";
import { Button } from "../../../Button";

export const Nav = () => {
  const { logout } = useAuth();
  return (
    <>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-light">
        Home
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Profile
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Messages
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Settings
      </a>

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log out
      </Button>
    </>
  );
};
