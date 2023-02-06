import { FC, memo, useState } from "react";
import Image from "next/image";
import { ButtonSize, ButtonType } from "../../../UI/button/enums";
import styled from "styled-components";
import Button from "../../../UI/button/Button";
import { CardProp } from "./types";

type Props = {
  cardData: CardProp;
};
const Card: FC<Props> = ({
  cardData: { imgSrc, imgAlt, descriptionShort, descriptionFull, header },
}) => {
  const [isDescFull, setIsDescFull] = useState<boolean>(false);

  const handleAddClick = () => {
    setIsDescFull(true);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <ImageContainer>
          <Image src={imgSrc} alt={imgAlt} fill loading="lazy" />
        </ImageContainer>
      </ImageWrapper>

      <CardInformationContainer>
        <CardHeader>{header}</CardHeader>
        {descriptionShort && !isDescFull ? (
          <CardDesc>
            {descriptionShort}
            <DeployDescBtn onClick={handleAddClick}>Еще</DeployDescBtn>
          </CardDesc>
        ) : (
          <CardDesc>{descriptionFull}</CardDesc>
        )}
        <StyledAdditionInformationBtn
          buttonType={ButtonType.FLAT}
          buttonSize={ButtonSize.MEDIUM}
        >
          Подробнее
        </StyledAdditionInformationBtn>
      </CardInformationContainer>
    </CardWrapper>
  );
};

const StyledAdditionInformationBtn = styled(Button)`
  padding: 9px 0;
  width: fit-content;
`;

const CardDesc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 36, 36, 0.8);
  margin: 0;
`;

const DeployDescBtn = styled.span`
  color: #0086ff;
  cursor: pointer;
`;

const CardHeader = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #242424;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
`;

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const ImageWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  width: 416px;
  height: 180px;
  @media screen and (max-width: 1439px) {
    width: 296px;
  }
`;

const ImageContainer = styled.div`
  min-width: 416px;
  height: 180px;
  position: relative;
  @media screen and (max-width: 1439px) {
    right: 60px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 416px;
  @media screen and (max-width: 1439px) {
    max-width: 296px;
  }
`;

export default memo(Card);
