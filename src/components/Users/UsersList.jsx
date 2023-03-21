import { UsersItem } from './UsersItem';

export const UsersList = ({users}) => {
  return (
    <div className="mb-5">

      {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  );
};