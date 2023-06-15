import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "../stores/repositorySlice";
import Card from "./Card";
import { FlexContainer } from "../styles/FlexContainer";
import { PrimaryTextSpan } from "../styles/TextsElements";
import { useDebounce } from "usehooks-ts";

const RepoList = React.memo(() => {
  const items = useSelector((store) => store.repos.items);
  const page = useSelector((state) => state.repos.page);
  const isLoading = useSelector((store) => store.repos.isLoading);
  const serachValue = useSelector((store) => store.repos.serachValue);
  const dispatch = useDispatch();

  const debouncedValue = useDebounce(serachValue, 600);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [debouncedValue, page]);

  return (
    <FlexContainer
      flexDirection="column"
      flex="1"
      overflow="auto"
      maxHeight="calc(100vh - 192px)"
      padding="0 16px"
    >
      {isLoading && (
        <FlexContainer justifyContent="center">
          <PrimaryTextSpan>loading...</PrimaryTextSpan>
        </FlexContainer>
      )}

      {!isLoading && serachValue && !items.length ? (
        <PrimaryTextSpan>
          По Вашому запиту не знайдено жодного репозиторія
        </PrimaryTextSpan>
      ) : (
        items.map((repo) => <Card key={repo.node_id} repo={repo} />)
      )}
    </FlexContainer>
  );
}, []);

export default RepoList;
