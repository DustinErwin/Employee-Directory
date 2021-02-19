import React from "react";
import Wrapper from "./components/Wrapper/";
import SearchBar from "./components/SearchBar/";
import CheckBox from "./components/CheckBox/";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Wrapper>
        <SearchBar />
      </Wrapper>
      <Table />
    </div>
  );
}

export default App;
