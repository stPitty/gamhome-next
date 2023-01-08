import React from "react";
import styled from "styled-components";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import { TabBodyData, TabContentType } from "./types";
import GiftSVG from "../../../public/assets/svg/GiftSVG";

type Props = {
  data: TabBodyData;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <MainContentWrapper background={data.image} contentType={data.contentType}>
      <ContentTextContainer contentType={data.contentType}>
        <HeaderContainer contentType={data.contentType}>
          <HeaderText>{data.name}</HeaderText>
          <DescText isHeader={true} contentType={data.contentType}>
            {data.desc}
          </DescText>
        </HeaderContainer>
        <PointsContainer contentType={data.contentType}>
          {data.points.map((el) => {
            return (
              <PointWrapper contentType={data.contentType} key={el.id}>
                <PointNum>{el.gift ? <GiftSVG /> : el.id}</PointNum>
                <PointTextContainer>
                  <PointHeader>{el.header}</PointHeader>
                  <DescText contentType={data.contentType}>{el.desc}</DescText>
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
    width: ${({ contentType }) => {
      switch (contentType) {
        case "checkOwner":
          return "593px";
        case "jurAnalysis":
          return "704px";
        default:
          return "444px";
      }
    }};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ contentType }) => {
      switch (contentType) {
        case "jurAnalysis":
          return "370px";
        default:
          return "400px";
      }
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 302px;
  }
  @media screen and (max-width: 374px) {
    width: 240px;
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

const PointWrapper = styled.div<{ contentType: TabContentType }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  column-gap: 12px;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) => contentType === "jurAnalysis" && "423px"};
  }
`;

const PointsContainer = styled.div<{ contentType: TabContentType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;
  width: 485px;
  row-gap: 24px;
  flex-wrap: wrap;
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType }) => contentType === "checkObject" && "444px"};
    height: ${({ contentType }) => contentType === "jurAnalysis" && "266px"};
    column-gap: ${({ contentType }) => contentType === "jurAnalysis" && "32px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ contentType }) =>
      contentType === "checkObject" ? "592px" : "485px"};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: 301px;
    margin: 0;
  }
  @media screen and (max-width: 374px) {
    width: 240px;
    margin: 0;
  }
`;

const DescText = styled.p<{ contentType?: TabContentType; isHeader?: boolean }>`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_64};
  margin: 0;
  width: ${({ contentType, isHeader }) => {
    if (contentType === "jurAnalysis") {
      if (isHeader) return "704px";
      return "468px";
    }
  }};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    width: ${({ contentType, isHeader }) => {
      if (contentType === "jurAnalysis") {
        if (isHeader) return "704px";
        return "340px";
      }
    }};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: ${({ contentType, isHeader }) => {
      if (contentType === "jurAnalysis") {
        if (isHeader) return "390px";
        return "548px";
      }
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    width: ${({ contentType, isHeader }) => {
      if (contentType === "jurAnalysis") {
        if (isHeader) return "301px";
        return "250px";
      }
    }};
  }
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 16px;
  @media screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const ContentTextContainer = styled.div<{
  contentType: TabContentType;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    row-gap: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "180px" : "155px"};
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
  padding: 48px;
  column-gap: 24px;
  width: 1312px;
  background-image: url(${({ background }) => background});
  background-size: ${({ contentType }) =>
    contentType === "jurAnalysis" ? "555px" : "648px"};
  background-position: ${({ contentType }) =>
    contentType === "jurAnalysis" && "672px 259px"};
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    background-size: ${({ contentType }) =>
      contentType === "jurAnalysis" ? "368px" : "436px"};
    width: 952px;
    height: ${({ contentType }) => contentType === "jurAnalysis" && "846px"};
    background-position: ${({ contentType }) =>
      contentType === "jurAnalysis" && "center 554px"};
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    background-size: ${({ contentType }) => {
      switch (contentType) {
        case "checkOwner":
          return "240px";
        case "jurAnalysis":
          return "195px";
        default:
          return "220px";
      }
    }};
    width: 688px;
    background-position: ${({ contentType }) => {
      switch (contentType) {
        case "checkOwner":
          return "right 46px";
        case "jurAnalysis":
          return "453px 56px";
        default:
          return "right 67px";
      }
    }};
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    padding: 24px;
    width: 349px;
    background-position: ${({ contentType }) => {
      if (contentType === "checkObject") {
        return "center 200px";
      }
      if (contentType === "jurAnalysis") {
        return "center 384px";
      }
      return "center 245px";
    }};
    background-size: ${({ contentType }) => {
      if (contentType === "jurAnalysis") {
        return "195px";
      }
      return "235px";
    }};
  }
  @media screen and (max-width: 374px) {
    padding: 24px;
    width: 288px;
    background-position: ${({ contentType }) =>
      contentType === "checkObject" ? "center 290px" : "center 285px"};
    background-size: 235px;
  }
`;

export default Card;
