import styled from "styled-components";
import { menuItems } from "./constants";
import { handleRedirClick } from "../../../common/helpers";
import React from "react";
import { useRouter } from "next/router";

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <MenuWrapper>
      {menuItems.map((item, i) => (
        <Text onClick={handleRedirClick(router, item.link)} key={item.name + i}>
          {item.name}
        </Text>
      ))}
    </MenuWrapper>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${(props) => props.theme.color.blackSecondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.blueSecondary};
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  margin-right: 45px;
`;

export default MenuItems;
