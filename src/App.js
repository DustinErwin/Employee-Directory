import React, { Component } from "react";
import FilterButton from "./components/FilterButton";
import "./style.css";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    search: "",
    inputValue: "",
  };

  clearResults = (event) => {
    this.setState({ inputValue: "" });
  };

  handleOnchange = (event) => {
    this.setState({ ...this.state, search: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <Wrapper>
          <input
            type="input"
            placeholder="Filter by Name"
            className="search"
            onChange={this.state.handleOnchange}
          ></input>
          <FilterButton clear={this.state.clearResults} />
        </Wrapper>
        <Table search={this.state.search} />
      </div>
    );
  }
}

export default App;
