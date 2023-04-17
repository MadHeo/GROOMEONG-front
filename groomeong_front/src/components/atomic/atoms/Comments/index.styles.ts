import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IButtonStateProps {
  buttonState?: boolean;
}

export const CommentsBoxModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${`${GS.Spacing[16]}px`};
  margin-bottom: 32px;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 0px 20px;
  }
`;

export const CommentsHeaderModalTitleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${GS.border.borderPrimary};
  width: 996px;
  padding: ${`${GS.Spacing[8]}px`};
  gap: ${`${GS.Spacing[32]}px`};

  & > h1 {
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${GS.Heading.XXXL};
    color: ${GS.contents.contentPrimary};

    ${mediaQueries("tablet")} {
      ${GS.Heading.XXL};
    }

    ${mediaQueries("phone")} {
      ${GS.Heading.Large};
    }
  }

  ${mediaQueries("tablet")} {
    flex-direction: column;
    width: 100%;
    gap: 0px;
  }
`;

export const CommentsHeaderModalStyles = styled.div`
  width: 1124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${`${GS.Spacing[20]}px ${GS.Spacing[20]}px 0 0 `};
  padding: 0;
`;
export const ShopIconStyles = styled(StoreSharpIcon)`
  width: 45px;
  height: 45px;

  ${mediaQueries("tablet")} {
    display: none;
  }
`;
export const CommentsFooterModalStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentsFooterModalLabelStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${`${GS.Spacing[16]}px`};
`;
export const FooterLabelNameStyles = styled.span`
  display: flex;
  flex-direction: column;
  & > label {
    ${GS.Paragraph.Medium}
    margin-bottom: 8px;

    ${mediaQueries("phone")} {
      ${GS.Paragraph.Small}
    }
  }
`;
export const FooterModalButtonBox = styled.div`
  display: ${(props: IButtonStateProps) =>
    props.buttonState === null ? "flex" : "none"};
  align-items: flex-end;
`;
