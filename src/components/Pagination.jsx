import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { FlexContainer } from "../styles/FlexContainer";
import { useDispatch, useSelector } from "react-redux";
import { DOTS, usePagination } from "../hooks/usePagination";
import {
  fetchRepositories,
  nextPage,
  prevPage,
  selectPage,
} from "../stores/repositorySlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.repos.totalCount);
  const page = useSelector((state) => state.repos.page);
  const isLoading = useSelector((state) => state.repos.isLoading);

  const paginationRange = usePagination({
    totalCount,
    currentPage: page,
    pageSize: 20,
  });

  return !totalCount && !isLoading || (!totalCount && isLoading) ? null : (
    <PaginationWrap gap="12px">
      {page !== 1 && (
        <SelectPageBtn onClick={() => dispatch(prevPage())}>
          Previous
        </SelectPageBtn>
      )}

      {paginationRange?.map((pageItem) =>
        pageItem === DOTS ? (
          DOTS
        ) : (
          <SelectPageBtn
            isActive={pageItem === page}
            key={`page-num-${pageItem}`}
            onClick={() => {
              dispatch(selectPage(pageItem));
            }}
          >
            {pageItem}
          </SelectPageBtn>
        )
      )}

      {page !== paginationRange.at(-1) && (
        <SelectPageBtn onClick={() => dispatch(nextPage())}>Next</SelectPageBtn>
      )}
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled(FlexContainer)`
  font-family: "Archivo", sans-serif;
`;

const SelectPageBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 12px 6px 20px;
  height: 30px;
  min-width: 30px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid transparent;
  border-color: ${(props) => (props.isActive ? "#65B79A" : "transparent")};
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;
