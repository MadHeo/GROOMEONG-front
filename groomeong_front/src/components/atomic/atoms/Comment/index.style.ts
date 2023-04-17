import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export interface ICommentProps {
  contents?: string;
  date?: string;
  name?: string;
  iconView?: boolean;
}

export const TextArea_Wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
  margin-bottom: 32px;

  ${mediaQueries("tablet")} {
    width: 92%;
    padding: 0px 20px;
    margin-bottom: 12px;
  }
`;

export const TextArea_TopBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderTransparent};
  margin-bottom: 8px;
`;

export const TextArea_TopBox_Profile = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${GS.Paragraph.Medium}
    margin-right: 32px;

    ${mediaQueries("phone")} {
      ${GS.Paragraph.Small}
      margin-right: 2px;
      width: 65%;
    }
  }
  ${mediaQueries("phone")} {
    ${GS.Paragraph.Small}
    margin-right: 8px;
  }
`;

export const TextArea_Profile_Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 50px;
  background-color: ${GS.white};
  margin-right: 20px;

  img {
    width: 40px;
    height: 40px;
    /* border: 1px solid ${GS.border.borderTransparent}; */
    border-radius: 50px;
    object-fit: contain;
  }

  ${mediaQueries("phone")} {
    display: none;
  }
`;

export const TextArea_TopBox_Rate = styled.div`
  width: 208px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${mediaQueries("phone")} {
    width: 100px;
  }

  .ant-rate-disabled {
    ${mediaQueries("tablet")} {
      font-size: 20px;
    }
  }

  .ant-rate-disabled {
    ${mediaQueries("phone")} {
      font-size: 12px;
    }
  }
`;

export const TextArea_TopBox_Date = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${GS.Paragraph.Medium}
  color: ${GS.contents.contentTertiary};

  ${mediaQueries("phone")} {
    ${GS.Paragraph.Small}
    justify-content:center;
  }
`;

export const TextArea_ContentBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${GS.Paragraph.Medium};
  color: ${GS.black};
  resize: none;
  border: 0px;
  padding: 16px 28px;
  margin-bottom: 8px;

  ${mediaQueries("phone")} {
    ${GS.Paragraph.Small}
  }
`;
