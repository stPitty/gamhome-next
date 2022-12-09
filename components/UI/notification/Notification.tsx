import React, { useMemo } from "react";
import styled from "styled-components";
import NotificationBody from "./NotificationBody";

type Props = {
  message: string;
  quantity: number;
};

const Notification: React.FC<Props> = ({ message, quantity = 0 }) => {
  const notifications = useMemo(() => {
    const arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push(i);
    }
    return arr;
  }, [quantity]);

  return (
    <Wrapper>
      {notifications?.map((el) => {
        return <NotificationBody key={el} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  position: fixed;
  left: calc(50% + 350px);
  top: 125px;
  row-gap: 10px;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    top: 100px;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    left: calc(50% + 180px);
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    left: calc(50% + 48px);
  }
`;

export default Notification;
