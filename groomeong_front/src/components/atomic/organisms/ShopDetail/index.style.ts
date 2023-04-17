import styled from "@emotion/styled";
import { Modal } from "antd";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const ShopDetailModal = styled(Modal)`
  .ant-modal-body {
    ${mediaQueries("tablet")} {
      width: 100%;
      padding: 0px;
    }
  }

  .ant-modal-content {
    width: 1124px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 72px;

    ${mediaQueries("tablet")} {
      width: 100%;
    }
  }

  .css-tepvo3 {
    ${mediaQueries("tablet")} {
      width: 100%;
    }
  }

  .ant-modal-footer {
    display: none;
  }

  :where(.css-dev-only-do-not-override-ph9edi).ant-modal .ant-modal-content {
    ${mediaQueries("tablet")} {
      padding: 72px 0px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShopDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShopImage = styled.img`
  width: 100%;
  height: 250px;
  padding-bottom: 24px;
  object-fit: cover;

  ${mediaQueries("tablet")} {
    width: 100%;
    height: 12rem;
    padding-bottom: 8px;
  }
`;

export const ShopReservationBtn = styled.div`
  position: absolute;
  top: 350px;
  right: 100px;

  ${mediaQueries("tablet")} {
    top: 51%;
    right: 4%;
  }

  ${mediaQueries("phone")} {
    top: 360px;
    right: 3%;
  }
`;
