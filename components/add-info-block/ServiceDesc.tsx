import styled from "styled-components";
import Button from "../UI/button/Button";
import { ButtonSize } from "../UI/button/enums";
import { BlackColor, Font } from "../../common/enums";
import React, { memo } from "react";
import { Concierge, Owner } from "./enums";

type Props = {
  headerText: Concierge | Owner;
  desc: Concierge | Owner;
  image: Concierge | Owner;
  height: Concierge | Owner;
};

const ServiceDesc: React.FC<Props> = ({ headerText, desc, image, height }) => {
  return (
    <Container>
      <InfoWrapper>
        <HeaderText>{headerText}</HeaderText>
        <DescText>{desc}</DescText>
        <Button width={123} buttonSize={ButtonSize.MEDIUM}>
          Подробнее
        </Button>
      </InfoWrapper>
      <Image height={height} image={image} />
    </Container>
  );
};

const Image = styled.div<{
  image: Concierge | Owner;
  height: Concierge | Owner;
}>`
  width: 336px;
  height: ${({ height }) => height + "px"};
  background: url(${({ image }) => image}) center no-repeat;
  background-size: cover;
`;

const DescText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  width: 448px;
  margin: 0 0 24px;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  width: 864px;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
`;

export default memo(ServiceDesc);
