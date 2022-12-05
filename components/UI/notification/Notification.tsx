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
  right: 72px;
  top: 125px;
  row-gap: 10px;
`;

export default Notification;
