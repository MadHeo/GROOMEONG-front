import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import MenuIcon from "@mui/icons-material/Menu";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export interface ITopBarDefault {
  loggedIn: boolean;
}

export const TopBarBox = styled.div`
  width: 80%;
  height: 112px;
  margin-bottom: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("tablet")} {
    transition: identifier;
    width: 100%;
    animation-name: identifier;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    height: 88px;
    margin-bottom: 12px;
  }

  @keyframes identifier {
    0% {
      width: 65%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const TopBarLogo = styled.div`
  width: 228px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TopBarButtons = styled.div`
  width: ${(props: ITopBarDefault) => (props.loggedIn ? "476px" : "352px")};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("tablet")} {
    display: none;
  }
`;

export const HamBurger = styled(MenuIcon)`
  display: none;

  ${mediaQueries("tablet")} {
    display: block;
    width: 44px;
    height: 44px;
    cursor: pointer;
    animation: buttonsOpa 1s ease-in-out 1 alternate;
  }

  @keyframes buttonsOpa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MenuBox = styled.div`
  display: none;

  ${mediaQueries("tablet")} {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.867);
    position: absolute;
    right: 0px;
    top: 112px;
    display: flex;
    flex-direction: column;
  }
`;

export const MenuButton = styled.button`
  ${mediaQueries("tablet")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    ${GS.Label.Large}
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    color: ${GS.white};
    width: 100%;
    height: 88px;
    cursor: pointer;
  }
`;

export const TopBarProfile = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 50px;
  background-color: ${GS.white};

  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
  }
`;
