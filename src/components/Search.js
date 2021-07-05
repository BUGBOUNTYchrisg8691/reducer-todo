import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search by tags..."
          onChange={this.handleOnChange}
        />
        <button>Search</button>
      </form>
    );
  }
}
