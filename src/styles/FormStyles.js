import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 16px;
  width: 100%;
  background: #ffffff;
  appearance: none;
  border: none;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
  border-radius: 4px;

  &::placeholder {
    color: rgba(17, 17, 17, 0.48);
  }
`;
