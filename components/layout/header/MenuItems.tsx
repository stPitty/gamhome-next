import styled, { keyframes } from "styled-components";
import { menuItems } from "./constants";
import { handleRedirClick } from "../../../common/helpers";
import React from "react";
import { useRouter } from "next/router";
import { BlackColor } from "../../../common/enums";

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <MenuWrapper>
      {menuItems.map((item, i) => (
        <TextContainer key={item.name + i}>
          <Text onClick={handleRedirClick(router, item.link)}>{item.name}</Text>
          <Divider />
        </TextContainer>
      ))}
    </MenuWrapper>
  );
};

const Divider = styled.div`
  width: 0;
  position: relative;
  top: 5px;
  height: 1px;
  background: ${BlackColor.BLACK_64};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    & p {
      color: ${BlackColor.BLACK_80};
    }
    & :last-child {
      width: 100%;
    }
  }
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  margin-right: 45px;
`;

export default MenuItems;
