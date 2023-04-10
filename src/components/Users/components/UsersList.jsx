import { UsersItem } from "./UsersItem";
import { NotFound } from "./NotFound";
import { useSelector } from "react-redux";
import {
  selectFilteredUsers,
  selectUsersOpenToWorkTotal,
} from "../../../redux/users/usersSelectors";

export const UsersList = () => {
  // const [counter, setCounter] = useState(0);
  const filteredUsers = useSelector(selectFilteredUsers);
  const openToWorkTotal = useSelector(selectUsersOpenToWorkTotal);

  if (!filteredUsers.length) {
    return <NotFound />;
  }

  return (
    <>
      {/* <p>{counter}</p>
      <button
        className="btn btn-primary my-4"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +1
      </button> */}
      <p>Open to work: {openToWorkTotal}</p>
      <div className="mb-5">
        {filteredUsers.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
