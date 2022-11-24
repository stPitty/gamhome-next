import styled from "styled-components";
import { menuItems } from "./constants";
import React from "react";
import { useRouter } from "next/router";
import { BlackColor } from "../../../common/enums";
import Link from "next/link";

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <MenuWrapper>
      {menuItems.map((item) => (
        <Link key={item.id} href={"#" + item.link} scroll={false}>
          <Text>{item.name}</Text>
        </Link>
      ))}
    </MenuWrapper>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  margin: 0 185px 0 144px;
`;

export default MenuItems;
