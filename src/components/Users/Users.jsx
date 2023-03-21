import { Component } from "react";
import { UsersFilters } from "./UsersFilters";
import { UsersList } from "./UsersList";
import usersJson from "../../data/users.json";

export class Users extends Component {
  state = {
    users: usersJson,
    filters: {
      isAvailableChecked: true,
      skill: "",
      search: "",
    },
    submitSearch: ''
  };

  handleChangeAvailability = () => {
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        isAvailableChecked: !prev.filters.isAvailableChecked,
      },
    }));
  };

  handleChangeSkill = (event) => {
    const { value } = event.target;
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        skill: value,
      },
    }));
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        search: value,
      },
    }));
  };

  handleResetSearch = () => {
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        search: "",
      },
    }));
  };

  handleSubmitSearch = () => {
    this.setState((prev) => ({
      submitSearch: prev.filters.search
    }));
  };

  getFilteredUser = () => {
    const {users, submitSearch} = this.state
    // const {search} = filters
    return users.filter(user => user.name.toLowerCase().includes(submitSearch.toLowerCase()))
  }

  render() {
    const { filters } = this.state;
    return (
      <>
        <UsersFilters
          filters={filters}
          onChangeAvailabiity={this.handleChangeAvailability}
          onChangeSkill={this.handleChangeSkill}
          onChangeSearch={this.handleChangeSearch}
          onResetSearch={this.handleResetSearch}
          onSubmitSearch={this.handleSubmitSearch}
        />
        <UsersList users={this.getFilteredUser()} />
      </>
    );
  }
}

// export const Users = () => {
//   return (
//     <>
//       <UsersFilters />
//       <UsersList />
//     </>
//   );
// };
