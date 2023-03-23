import { UsersItem } from "./UsersItem";
import { NotFound } from "./NotFound";

export const UsersList = ({ users, onDeleteUser }) => {
  if (!users.length) {
    return <NotFound />;
  }

  return (
    <div className="mb-5">
      {users.map((user) => (
        <UsersItem key={user.id} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </div>
  );
};
