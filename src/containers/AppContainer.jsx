import React from "react";
import { reboot } from "../styles/reboot";
import { styles } from "../styles/styles";
import { Global, css } from "@emotion/react";
import { FlexContainer } from "../styles/FlexContainer";

const AppContainer = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${reboot};
          ${styles};
        `}
      />
      <FlexContainer
        minHeight="100vh"
        width="100%"
        justifyContent="center"
        padding="32px 16px"
      >
        <FlexContainer maxWith="100%" width="1136px" flexDirection="column">
          {children}
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

export default AppContainer;
