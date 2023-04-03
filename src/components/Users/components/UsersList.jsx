import { UsersItem } from "./UsersItem";
import { NotFound } from "./NotFound";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const UsersList = ({ onDeleteUser }) => {

  const users = useSelector(state => state.users.data)
  const search = useSelector(state => state.users.search) 

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  if (!users.length) {
    return <NotFound />;
  }

  return (
    <div className="mb-5">
      {filteredUsers.map((user) => (
        <UsersItem key={user.id} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </div>
  );
};
