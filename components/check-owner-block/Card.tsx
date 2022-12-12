import React from "react";
import styled from "styled-components";
import { BlackColor, BrandColor, Font, WhiteColor } from "../../common/enums";
import { TabBodyData, TabContentType } from "./types";

type Props = {
  data: TabBodyData;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <MainContentWrapper background={data.image} contentType={data.contentType}>
      <ContentTextContainer>
        <HeaderContainer contentType={data.contentType}>
          <HeaderText>{data.name}</HeaderText>
          <DescText>{data.desc}</DescText>
        </HeaderContainer>
        <PointsContainer contentType={data.contentType}>
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
    </MainContentWrapper>
  );
};

const HeaderContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 592px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) =>
      contentType === "checkOwner" ? "593px" : "444px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 302px;
  }
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

const PointsContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
  width: 485px;
  row-gap: 24px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) => contentType === "checkObject" && "444px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ contentType }) =>
      contentType === "checkObject" ? "592px" : "485px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 301px;
    margin: 0;
  }
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
  @media screen and (max-width: 1023px) and (min-width: 375px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 767px) and (min-width: 375px) {
    row-gap: 155px;
  }
`;

const MainContentWrapper = styled.div<{
  background: string;
  contentType: TabContentType;
}>`
  display: flex;
  justify-content: flex-start;
  background: no-repeat ${WhiteColor.WHITE} right;
  border-radius: 24px;
  padding: 48px 0 48px;
  column-gap: 24px;
  width: 1312px;
  background-image: url(${({ background }) => background});
  background-size: 648px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    background-size: 436px;
    width: 952px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    background-size: ${({ contentType }) =>
      contentType === "checkObject" ? "240px" : "220px"};
    width: 688px;
    background-position: right
      ${({ contentType }) => (contentType === "checkObject" ? "46px" : "67px")};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 24px;
    width: 349px;
    background-position: ${({ contentType }) =>
      contentType === "checkObject" ? "center 200px" : "center 245px"};
    background-size: 235px;
  }
`;

export default Card;
