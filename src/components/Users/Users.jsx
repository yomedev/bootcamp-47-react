import { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { FaBeer } from 'react-icons/fa';
import { AvailabilityFilter, SearchInput, SkillsFilter } from "./UsersFilters";
import { UsersList } from "./UsersList";
import { Spinner } from "../Spinner";

import usersJson from "../../data/users.json";
import { Button } from "../Button/Button";

const ALL_SKILLS_VALUE = "all";

export class Users extends Component {
  state = {
    users: [],
    isLoading: false,
    isAvailable: false,
    skills: ALL_SKILLS_VALUE,
    search: "",
  };

  handleChangeSkills = (event) => {
    const { value } = event.target;
    this.setState({ skills: value });
  };

  handleChangeAvailability = () => {
    this.setState((prevState) => ({ isAvailable: !prevState.isAvailable }));
  };

  handleChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleResetSearch = () => {
    this.setState({ search: "" });
  };

  applyFilters = () => {
    const { users, search } = this.state;

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  handleGetUsers = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ users: usersJson.slice(0, 2), isLoading: false });
    }, 1000);
  };

  render() {
    const { users, isAvailable, skills, search, isLoading } = this.state;

    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <AvailabilityFilter
            isAvailable={isAvailable}
            onChangeAvailability={this.handleChangeAvailability}
          />
          <SkillsFilter
            skillValue={skills}
            onChangeSkill={this.handleChangeSkills}
          />
          <button type="button" className="btn btn-primary btn-lg ms-auto">
            <FiPlus />
          </button>
        </div>
        <SearchInput
          search={search}
          onResetSearch={this.handleResetSearch}
          onChangeSearch={this.handleChangeSearch}
        />

        {/* {!isLoading ? <button className="btn btn-primary" onClick={this.handleGetUsers}>Get users</button> : null}
        {isLoading && <Spinner />} */}
        {users?.length ? <UsersList users={users} /> : null}

        {isLoading ? (
          <Spinner />
        ) : (
          <Button test='test'>asdfasdfsdf<FaBeer /></Button>
        )}
      </>
    );
  }
}

// Button({test: 'test', children: 'Get users'})
