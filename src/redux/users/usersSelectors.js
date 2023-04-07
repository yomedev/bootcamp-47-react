import { createSelector } from "reselect";

export const selectUsers = (state) => state.users.data;
export const selectUsersSearch = (state) => state.users.search;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectUsersSearch],
  (users, search) => {
    console.log("filter");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);

export const selectUsersOpenToWorkTotal = createSelector(
  selectFilteredUsers,
  (users) => {
    console.log("reduce");
    return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
  }
);

// export const selectFilteredUsers = (state) => {
//   console.log('filter');
//   const users = selectUsers(state);
//   const search = selectUsersSearch(state);
//   return users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );
// };

// export const selectUsersOpenToWorkTotal = (state) => {
//   const users = selectFilteredUsers(state);
//   return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
// };
