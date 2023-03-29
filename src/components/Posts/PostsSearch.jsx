import { Component } from "react";

import { Button } from "../Button";

export class PostsSearch extends Component {
  state = {
    search: "",
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSubmitSearch = () => {
    this.props.onSubmit(this.state.search)
  }

  render() {
    const { search } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          onChange={this.handleChangeSearch}
          type="text"
          value={search}
          className="form-control"
          placeholder="Type to search..."
        />
        <Button onClick={this.handleSubmitSearch}>Search</Button>
      </div>
    );
  }
}
