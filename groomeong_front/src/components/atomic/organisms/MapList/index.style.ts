import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as GS from "../../../../../theme/global";
import * as S from "../../../commons/style";

export const MapListWrapper = styled(S.Div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MapListSearchBarWrapper = styled(S.Div)`
  position: absolute;
  top: 0;
  width: 440px;
  padding: 8px;
  background-color: ${GS.base.secondary};
`;

export const MapListSearchBar = styled(motion.input)`
  ${GS.Label.Medium}
  outline: none;
  border: none;
  width: 100%;
  height: 52px;
  padding: 16px;
  border: 1px solid ${GS.gray[100]};
  background-color: ${GS.base.secondary};
`;

export const MapListSearchBarButton = styled(motion.button)`
  outline: none;
  border: none;
  background-color: ${GS.base.tertiary};
  width: 100px;
  height: 52px;
  background-image: url("/image/icon-magnify_white.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const MapListBodyWrapper = styled(S.Div)`
  position: absolute;
  top: 0;
`;

export const MapListContentsWrapper = styled(S.Div)`
  flex-direction: column;
  position: relative;
  top: 76px;
  width: 440px;
  height: calc(100vh - 76px);
  padding: 16px;
  background-color: ${GS.base.secondary};
  overflow: auto;
`;

export const MapListButton = styled(motion.button)`
  ${GS.Heading.Large}
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  top: 50%;
  left: 440px;
  position: absolute;
  width: 24px;
  height: 62px;
  background-color: ${GS.base.secondary};
`;

export const ImgDiv = styled(motion.image)`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("/image/img-character-dog.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 326px;
`;

export const Span = styled(S.Span)`
  ${GS.Label.Large}
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${GS.base.tertiary}
`