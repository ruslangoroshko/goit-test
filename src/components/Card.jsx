import React from "react";
import { FlexContainer } from "../styles/FlexContainer";
import ReactLogo from "../assets/react_logo.svg";
import { PrimaryTextSpan } from "../styles/TextsElements";
import IconStar from "../assets/icon-star.svg";
import IconWather from "../assets/icon-watcher.svg";

const Card = ({ repo }) => {
  return (
    <FlexContainer
      borderRadius="16px"
      padding="40px"
      justifyContent="space-between"
      boxShadow="0px 24px 64px rgba(0, 0, 0, 0.04)"
      backgroundColor="#fff"
      marginBottom="36px"
      alignItems="flex-end"
    >
      <FlexContainer gap="32px">
        <FlexContainer
          width="128px"
          height="144px"
          background="linear-gradient(321.69deg, #4481EB 0%, #04BEFE 100%)"
          borderRadius="4px"
          justifyContent="center"
          alignItem="center"
        >
          <img src={ReactLogo} width={80} alt="" />
        </FlexContainer>

        <FlexContainer flexDirection="column" padding="8px 0 0">
          <PrimaryTextSpan
            color="#081F32"
            fontSize="22px"
            marginBottom="8px"
            className="dm-serif-font"
          >
            {repo.name}
          </PrimaryTextSpan>
          <PrimaryTextSpan color="#A5ADBB">{repo.owner.login}</PrimaryTextSpan>
          <PrimaryTextSpan color="#A5ADBB">{repo.language}</PrimaryTextSpan>
          <PrimaryTextSpan color="#6E798C">{repo.description}</PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>
      {/* // Left */}

      <FlexContainer flexDirection="column" gap="24px">
        <FlexContainer alignItems="center" gap="14px">
          <img src={IconStar} alt="" />
          <PrimaryTextSpan color="#A5ADBB">
            <PrimaryTextSpan color="#081F32" fontWeight={600}>
              {repo.stargazers_count}
            </PrimaryTextSpan>
            &nbsp;stars
          </PrimaryTextSpan>
        </FlexContainer>
        {/*  */}
        <FlexContainer alignItems="center" gap="14px">
          <img src={IconWather} alt="" />
          <PrimaryTextSpan color="#081F32" fontWeight={600}>
            {repo.watchers_count} watchers
          </PrimaryTextSpan>
        </FlexContainer>
      </FlexContainer>
      {/* // right */}
    </FlexContainer>
  );
};

export default Card;
