import PropTypes from "prop-types";

export const UsersList = ({ users, title }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      <div className="mb-5">
        {users?.map((user) => (
          <p key={user?.id}>{user?.name}</p>
        ))}
      </div>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};

// import { UsersItem } from './UsersItem';

// export const UsersList = ({users}) => {
//   return (
//     <div className="mb-5">

//       {users.map(user => (
//         <UsersItem key={user.id} user={user} />
//       ))}
//     </div>
//   );
// };
