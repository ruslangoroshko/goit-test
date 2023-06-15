import React from "react";
import { FlexContainer } from "../styles/FlexContainer";
import { Input } from "../styles/FormStyles";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../stores/repositorySlice";

const InputSearch = () => {
  const value = useSelector((state) => state.repos.searchValue);
  const dispatch = useDispatch();

  return (
    <FlexContainer marginBottom="36px">
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => dispatch(setSearchValue(e.target.value.trim()))}
      />
    </FlexContainer>
  );
};

export default InputSearch;
