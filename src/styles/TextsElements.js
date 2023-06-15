import styled from "@emotion/styled";

export const PrimaryTextSpan = styled.span`
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "25px"};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign};
  text-overflow: ${(props) => props.textOverflow};
  overflow: ${(props) => props.overflow};
  max-width: ${(props) => props.maxWidth};
  letter-spacing: ${(props) => props.letterSpacing};
  word-break: ${(props) => props.wordBreak};

  a {
    color: ${(props) => props.color || props.theme.primary};
  }
`;
