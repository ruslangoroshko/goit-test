import { css } from "@emotion/react";

export const styles = css`
  * {
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #f1f1f1; /* or add it to the track */
    }
    &::-webkit-scrollbar-thumb {
      background: #d5d5dd;
      border-radius: 4px;
      height: 4px;
    }
  }
  body {
    font-family: "Open Sans", sans-serif;
  }
  .dm-serif-font {
    font-family: "DM Serif Display", serif;
  }
`;
