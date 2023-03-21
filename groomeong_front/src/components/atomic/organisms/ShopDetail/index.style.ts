import styled from "@emotion/styled";
import { Modal } from "antd";

export const ShopDetailModal = styled(Modal)`
  .ant-modal-content {
    width: 1124px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 72px;
  }

  .ant-modal-footer {
    display: none;
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
`;
