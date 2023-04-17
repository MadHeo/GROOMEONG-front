import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IProps {
  disabledState: boolean | undefined;
}

export const EmailAuthWrapper = styled.div`
  width: 1124px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    width: 100% !important;
    padding: 0px 32px;
  }
`;

export const EmailAuthTop = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderOpaque};
  margin: 32px 0px 64px 0px;
  padding-bottom: 10px;
  ${GS.Heading.XXXL};
`;

export const EmailAuthTopImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 32px;
`;

export const EmailAuthTopText = styled.div``;

export const EmailAuthMiddle = styled.div`
  width: 697px;
  display: flex;
  flex-direction: column;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const EmailAuthMiddleLabel = styled.label`
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-bottom: 32px;
`;

export const EmailAuthMiddleTextButtonWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries("tablet")} {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const EmailAuthMiddleButton = styled.button<IProps>`
  cursor: pointer;
  border: none;
  width: 165px;
  height: 42px;
  background-color: ${(props) =>
    props.disabledState !== undefined
      ? `${GS.state.disabled}`
      : `${GS.base.primary}`};
  color: ${(props) =>
    props.disabledState !== undefined ? `${GS.gray[200]}` : "white"};
`;

export const EmailAuthMiddleTime = styled.span`
  margin-top: 72px;
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-bottom: 32px;
`;

export const EmailAuthMiddleTimeButton = styled.button`
  cursor: pointer;
  border: none;
  width: 92px;
  height: 42px;
  background-color: ${GS.base.primary};
  color: white;
`;

export const EmailAuthBottom = styled.button`
  margin: 32px 0px 32px 0px;
  width: 92px;
  height: 42px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;
