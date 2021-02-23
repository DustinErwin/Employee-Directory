import React, { Component } from "react";
import FilterButton from "./components/FilterButton";
import "./style.css";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    search: "",
  };

  clearResults = () => {
    this.setState({ search: "" });
  };

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
    return (
      <div>
        <Wrapper>
          <input
            value={this.state.search}
            name="search"
            type="input"
            placeholder="Filter by Name"
            className="search"
            onChange={this.handleOnchange}
          ></input>
          <FilterButton clear={this.clearResults} />
        </Wrapper>
        <Table search={this.state.search} />
      </div>
    );
  }
}

export default App;
