import styled from "styled-components";
import LogoSVG from "../../../public/assets/svg/LogoSVG";
import { BlackColor, Font, OtherColor } from "../../../common/enums";
import Button from "../../UI/button/Button";
import { ButtonSize, ButtonType } from "../../UI/button/enums";
import { ChildrenProp } from "../../../common/form_utils/types";
import React, { FC, useEffect, useState } from "react";
import HamburgerSVG from "../../../public/assets/svg/HamburgerSVG";
import ScrollTopBtn from "../../UI/scroll_top_btn/ScrollTopBtn";
import CookiesPopup from "../../layout/cookies-popup/CookiesPopup";
import SideMenu from "../../UI/side_menu/SideMenu";
import MobileMenu from "../../UI/mobile_menu/MobileMenu";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { openMenu } from "../../../redux/slicers/sideMenuSlicer";
import { menuItems } from "./constants";
import Link from "next/link";
import { Hook } from "../../../common/routes";
import { TModalState } from "../../../redux/slicers/types";
import Modal from "../../UI/modal/Modal";
import { freeConsult } from "../../../redux/slicers/modalStateSlicer";
import AdaptiveTextDivider from "../../UI/adaptive_text_divider/AdaptiveTextDivider";
import Head from "next/head";
import Script from "next/script";

const LandingLayout: FC<ChildrenProp> = ({ children }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { isOpened } = useAppSelector<TModalState>((state) => state.modalState);

  const dispatch = useAppDispatch();
  const handleWindowScroll = (e: any) => {
    if (e.currentTarget.scrollY > 0) {
      setScrolled(true);
    }
    if (e.currentTarget.scrollY === 0) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleWindowScroll);
    }
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleMenuBtnClick = () => {
    dispatch(openMenu());
  };

  const handleApplyBtnClick = () => {
    dispatch(freeConsult());
  };

  return (
    <>
      <Wrapper>
        {/*Yandex.Metrika*/}
        <Script type="text/javascript" id="yandex-metrika">
          {`(function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
              (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) {
                return;
              }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
          })
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(95615785, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95615785"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Container>
          <HeaderContainer isScrolled={scrolled}>
            <HeaderLeftBlock>
              <Link href={"#" + Hook.HOME} scroll={false}>
                <Logo />
              </Link>
              <XlMenu>
                <Link href={"#" + Hook.SELL_PROPERTY} scroll={false}>
                  <MenuItem>Продать</MenuItem>
                </Link>
                <Link href={"#" + Hook.RENT} scroll={false}>
                  <MenuItem>Сдать в аренду</MenuItem>
                </Link>
                <Link href={"#" + Hook.FIND_PROPERTY} scroll={false}>
                  <MenuItem>Найти жилье</MenuItem>
                </Link>
                <Link href={"#" + Hook.ABOUT_US} scroll={false}>
                  <MenuItem>О нас</MenuItem>
                </Link>
                <Link href={"#" + Hook.REPORTS} scroll={false}>
                  <MenuItem>Отзывы</MenuItem>
                </Link>
              </XlMenu>
            </HeaderLeftBlock>
            <HeaderRightBlock>
              <HeaderPhoneLink href="tel:+79260211033">
                +7&nbsp;926 021-10-33
              </HeaderPhoneLink>
              <HeaderButtonsContainer>
                <HeaderMenuButton
                  buttonSize={ButtonSize.MEDIUM}
                  buttonType={ButtonType.OUTLINE}
                  onClick={handleMenuBtnClick}
                >
                  <BurgerIconContainer>
                    <HamburgerSVG />
                  </BurgerIconContainer>
                  <MenuBtnText>Меню</MenuBtnText>
                </HeaderMenuButton>
                <StyledButton
                  buttonSize={ButtonSize.MEDIUM}
                  onClick={handleApplyBtnClick}
                >
                  Оставить заявку
                </StyledButton>
              </HeaderButtonsContainer>
            </HeaderRightBlock>
          </HeaderContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
          <FooterContainer>
            <FooterMenuContainer>
              <HeaderLeftBlock>
                <Logo />
                <XlMenu>
                  <Link href={"#" + Hook.SELL_PROPERTY} scroll={false}>
                    <MenuItem>Продать</MenuItem>
                  </Link>
                  <Link href={"#" + Hook.RENT} scroll={false}>
                    <MenuItem>Сдать в аренду</MenuItem>
                  </Link>
                  <Link href={"#" + Hook.FIND_PROPERTY} scroll={false}>
                    <MenuItem>Найти жилье</MenuItem>
                  </Link>
                  <Link href={"#" + Hook.ABOUT_US} scroll={false}>
                    <MenuItem>О нас</MenuItem>
                  </Link>
                  <Link href={"#" + Hook.REPORTS} scroll={false}>
                    <MenuItem>Отзывы</MenuItem>
                  </Link>
                </XlMenu>
              </HeaderLeftBlock>
              <FooterRightBlock>
                <PhoneLink href="tel:+79260211033">
                  +7&nbsp;926 021-10-33
                </PhoneLink>
                <StyledButton
                  buttonSize={ButtonSize.MEDIUM}
                  onClick={handleApplyBtnClick}
                >
                  Оставить заявку
                </StyledButton>
              </FooterRightBlock>
            </FooterMenuContainer>
            <Divider />
            <LgMenu>
              <Link href={"#" + Hook.SELL_PROPERTY} scroll={false}>
                <MenuItem>Продать</MenuItem>
              </Link>
              <Link href={"#" + Hook.RENT} scroll={false}>
                <MenuItem>Сдать в аренду</MenuItem>
              </Link>
              <Link href={"#" + Hook.FIND_PROPERTY} scroll={false}>
                <MenuItem>Найти жилье</MenuItem>
              </Link>
              <Link href={"#" + Hook.ABOUT_US} scroll={false}>
                <MenuItem>О нас</MenuItem>
              </Link>
              <Link href={"#" + Hook.REPORTS} scroll={false}>
                <MenuItem>Отзывы</MenuItem>
              </Link>
            </LgMenu>
            <Divider />
            <TextContainer>
              <ConditionsText>
                Использование сервиса означает согласие
                <AdaptiveTextDivider lg={true} sm={true} xs={true} /> с{" "}
                <TextLink href="/documents/user_agreement.pdf" target="_blank">
                  Пользовательским соглашением
                </TextLink>
                <AdaptiveTextDivider xs={true} /> и
                <TextLink href="/documents/privacy_policy.pdf" target="_blank">
                  {" "}
                  Политикой конфиденциальности
                </TextLink>
              </ConditionsText>
              <br />
              <Text>
                &copy;&nbsp;2023,{" "}
                <TextLink href="https://gamhome.ru" target="_blank">
                  gamhome.ru
                </TextLink>
                &nbsp;&mdash; интернет-сервис для поиска и&nbsp;проведения
                операций с&nbsp;недвижимостью. <br />
                ИП&nbsp;Гамолин Е.Д., ИНН: 463232652970, ОГРН: 322508100612708,
                <br />
                Фактический адрес: 141507, Московская обл., г.о. Солнечногорск,
                д. Тиминово
              </Text>
              <br />
              <Text>
                Иллюстрации взяты с{" "}
                <TextLink href="https://icons8.com" target="_blank">
                  icons8.com
                </TextLink>
              </Text>
            </TextContainer>
            {/*<FooterConditionsBlock>*/}
            {/*  <ConditionsText>*/}
            {/*    Использование сервиса означает согласие с&nbsp;*/}
            {/*    <ConditionsLink*/}
            {/*      href="/documents/privacy_policy.pdf"*/}
            {/*      target="_blank"*/}
            {/*    >*/}
            {/*      Политикой конфиденциальности*/}
            {/*    </ConditionsLink>{" "}*/}
            {/*    и&nbsp;*/}
            {/*    <ConditionsLink*/}
            {/*      href="/documents/user_agreement.pdf"*/}
            {/*      target="_blank"*/}
            {/*    >*/}
            {/*      Пользовательским соглашением*/}
            {/*    </ConditionsLink>*/}
            {/*  </ConditionsText>*/}
            {/*  <ConditionsText>*/}
            {/*    Иллюстраци взяты с&nbsp;icons8.com*/}
            {/*  </ConditionsText>*/}
            {/*</FooterConditionsBlock>*/}
          </FooterContainer>
        </Container>
      </Wrapper>
      {isOpened && <Modal />}
      <MobileMenu isLanding menuItems={menuItems} />
      <ScrollTopBtn />
      <CookiesPopup />
      <SideMenu isLanding menuItems={menuItems} />
    </>
  );
};

const TextLink = styled.a`
  color: ${OtherColor.LINK};
  cursor: pointer;
  &:hover {
    color: ${OtherColor.LINK_HOVER};
    transition: 0.1s linear all;
  }
`;

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  margin: 0;
  text-align: center;
  @media screen and (max-width: 1439px) {
    text-align: start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1439px) and (min-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (max-width: 1439px) and (min-width: 1024px) {
    //padding-left: 36px;
    //padding-right: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    width: 768px;
    //padding-left: 40px;
    //padding-right: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    margin-top: 6px;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) and (min-width: 375px) {
    //padding-left: 13px;
    //padding-right: 13px;
  }
  @media screen and (max-width: 374px) {
    width: 320px;
    //padding-left: 16px;
    //padding-right: 16px;
  }
`;

const MenuBtnText = styled.span`
  @media screen and (max-width: 374px) {
    display: none !important;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #dfe6ec;
  display: none;
  @media screen and (max-width: 1439px) {
    display: block;
  }
`;

const BurgerIconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderMenuButton = styled(Button)`
  display: none;
  @media screen and (max-width: 1439px) {
    display: flex;
    width: 113px;
    height: 44px;
    column-gap: 4px;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    padding: 0;
    width: 89px;
    height: 36px;
  }
  @media screen and (max-width: 374px) {
    width: 36px;
    height: 36px;
  }
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ConditionsLink = styled.a`
  color: #0086ff;
  cursor: pointer;
`;

const ConditionsText = styled.p`
  margin: 0;
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_80};
  text-align: center;
  @media screen and (max-width: 1439px) {
    max-width: 624px;
    text-align: start;
  }
  @media screen and (max-width: 1023px) {
    max-width: 328px;
  }
  @media screen and (max-width: 767px) {
    max-width: 349px;
  }
  @media screen and (max-width: 374px) {
    max-width: 288px;
  }
`;

const FooterConditionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (max-width: 1439px) {
    flex-direction: row;
    column-gap: 82px;
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    column-gap: 82px;
  }
`;

const FooterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 284px;
  @media screen and (max-width: 1439px) {
    column-gap: 442px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 178px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px 72px;
  row-gap: 48px;
  @media screen and (max-width: 1439px) {
    padding: 0 36px 40px;
    row-gap: 24px;
  }
  @media screen and (max-width: 1023px) {
    padding: 0 40px 32px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 13px 32px;
  }
  @media screen and (max-width: 374px) {
    padding: 0 16px 32px;
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 167px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const PhoneLink = styled.a`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  transition: 0.1s all linear;
  &:hover {
    color: ${BlackColor.BLACK_80};
  }
`;

const HeaderPhoneLink = styled(PhoneLink)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
`;

const HeaderRightBlock = styled(RightBlock)`
  @media screen and (max-width: 1439px) {
    column-gap: 24px;
  }
`;

const FooterRightBlock = styled(RightBlock)``;

const MenuItem = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  cursor: pointer;
  margin: 0;
`;

const MenuLayout = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const XlMenu = styled(MenuLayout)`
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

const LgMenu = styled(MenuLayout)`
  display: none;
  @media screen and (max-width: 1439px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
  }
`;

const Logo = styled(LogoSVG)``;

const HeaderLeftBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 56px;
`;

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 5;
  padding: 16px 24px;
  margin: 24px 40px;
  column-gap: 284px;
  border-radius: 100px;
  transition: 0.25s linear;
  background: ${({ isScrolled }) => isScrolled && "rgba(255, 255, 255, 0.64)"};
  backdrop-filter: ${({ isScrolled }) => isScrolled && "blur(5px)"};
  -webkit-backdrop-filter: ${({ isScrolled }) => isScrolled && "blur(5px)"};
  @media screen and (max-width: 1439px) {
    column-gap: 325px;
    margin-left: 12px;
    margin-right: 12px;
  }
  @media screen and (max-width: 1023px) {
    column-gap: 61px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
    column-gap: 68px;
    padding: 10px 13px;
    margin: 24px 0;
  }
  @media screen and (max-width: 374px) {
    column-gap: 60px;
    margin-left: 0;
    margin-right: 0;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: url("/assets/svg/Gradient_1.svg") calc(50% + 500px) -600px no-repeat,
    url("/assets/svg/Gradient_2.svg") calc(50% - 350px) calc(100% - 475px)
      no-repeat,
    url("/assets/svg/Gradient_3.svg") 50% calc(100% - 4100px) no-repeat;
  @media screen and (max-width: 1439px) {
    background-position: calc(50% + 350px) -275px,
      calc(50% - 125px) calc(100% - 550px), calc(50% + 50px) calc(100% - 4220px);
    background-size: 1000px, 1750px, 1400px;
  }
  @media screen and (max-width: 1023px) {
    background-position: calc(50% + 260px) -225px,
      calc(50% - 125px) calc(100% - 750px), calc(50% + 25px) calc(100% - 4250px);
    background-size: 850px, 1100px, 1400px;
  }
  @media screen and (max-width: 767px) {
    background-position: calc(50% + 75px) -250px, calc(50%) calc(100% - 1550px),
      calc(50% + 25px) calc(100% - 6500px);
    background-size: 850px, 800px, 1200px;
  }
  @media screen and (max-width: 374px) {
    background-position: calc(50% + 85px) -255px, calc(50%) calc(100% - 1575px),
      calc(50% + 25px) calc(100% - 6800px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  background: url("/images/landing/background.png") repeat;
`;

export default LandingLayout;
