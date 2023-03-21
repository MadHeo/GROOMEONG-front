import React from "react";
import {
  ContentInfoContent,
  ContentInfoWrapper,
  ContetnInfoLabel,
} from "./index.style";

interface IContentInfoProps {
  label: string;
  content?: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  badge?: React.ReactElement;
}

const ContentInfo = (props: IContentInfoProps) => {
  return (
    <ContentInfoWrapper
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      top={props.top}
    >
      <ContetnInfoLabel>{props.label}</ContetnInfoLabel>
      <ContentInfoContent>{props.badge ?? props.content}</ContentInfoContent>
    </ContentInfoWrapper>
  );
};

export default ContentInfo;