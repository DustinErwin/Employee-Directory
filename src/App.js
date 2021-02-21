import React, { Component } from "react";
import Wrapper from "./components/Wrapper/";
import SearchBar from "./components/SearchBar/";

import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <SearchBar />
        </Wrapper>
        <Table />
      </div>
    );
  }
}

export default App;
