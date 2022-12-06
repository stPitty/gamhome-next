import styled from "styled-components";
import { menuItems } from "./constants";
import React, { memo } from "react";
import { BlackColor } from "../../../common/enums";
import Link from "next/link";

type Props = {
  isUnderFooter?: boolean;
};

const MenuItems: React.FC<Props> = ({ isUnderFooter }) => {
  return (
    <MenuWrapper isUnderFooter={!!isUnderFooter}>
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
  transition: 0.1s all linear;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const MenuWrapper = styled.div<{ isUnderFooter: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    display: ${({ isUnderFooter }) => !isUnderFooter && "none"};
    padding-left: 36px;
  }
`;

export default memo(MenuItems);
