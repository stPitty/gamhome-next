import React from "react";
import styled from "styled-components";
import { BlackColor, BrandColor, Font, WhiteColor } from "../../common/enums";
import { TabBodyData } from "./types";

type Props = {
  data: TabBodyData;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <MainContentWrapper>
      <ContentTextContainer>
        <HeaderContainer>
          <HeaderText>{data.name}</HeaderText>
          <DescText>{data.desc}</DescText>
        </HeaderContainer>
        <PointsContainer>
          {data.points.map((el) => {
            return (
              <PointWrapper key={el.id}>
                <PointNum>{el.id}</PointNum>
                <PointTextContainer>
                  <PointHeader>{el.header}</PointHeader>
                  <DescText>{el.desc}</DescText>
                </PointTextContainer>
              </PointWrapper>
            );
          })}
        </PointsContainer>
      </ContentTextContainer>
      <Image background={data.image} />
    </MainContentWrapper>
  );
};

const Image = styled.div<{ background: string }>`
  width: 466px;
  height: 294px;
  transition: none;
  background: no-repeat url(${({ background }) => background});
  background-size: cover;
  position: relative;
  right: 0;
  margin-right: 32px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 592px;
`;

const PointTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 8px;
`;

const PointHeader = styled.p`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 5px 0 0;
`;

const PointNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  min-width: 32px;
  height: 32px;
  border: 2px solid ${BrandColor.BRAND};
  border-radius: 100px;
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: ${BrandColor.BRAND};
`;

const PointWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  column-gap: 12px;
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
  width: 485px;
  row-gap: 24px;
`;

const DescText = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 16px;
`;

const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${WhiteColor.WHITE};
  border-radius: 24px;
  padding: 48px;
  column-gap: 126px;
`;

export default Card;
