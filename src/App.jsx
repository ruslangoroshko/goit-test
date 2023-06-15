import React from "react";
import { FlexContainer } from "./styles/FlexContainer";
import AppContainer from "./containers/AppContainer";
import InputSearch from "./components/InputSearch";
import Pagination from "./components/Pagination";

import RepoList from "./components/RepoList";

function App() {
  return (
    <AppContainer>
      <InputSearch />

      <RepoList />

      <FlexContainer width="100%" justifyContent="center" padding="16px 0 0">
        <Pagination />
      </FlexContainer>
    </AppContainer>
  );
}

export default App;
