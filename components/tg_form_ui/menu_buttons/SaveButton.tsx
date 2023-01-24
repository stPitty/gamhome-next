import styled from "styled-components";
import { TFormData } from "../../../redux/slicers/types";
import { clearFormData } from "../../../redux/slicers/formDataSlicer";
import { handlePushClick } from "./helpers";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../common/context/AppContext";

const SaveButton = () => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const { isCityOpen, isDistrictOpen, isMetroOpen, isMapOpen } =
    useContext(AppContext);

  const isModalOpened =
    isCityOpen || isDistrictOpen || isMetroOpen || isMapOpen;

  const { data } = useAppSelector<TFormData>((state) => state.formData);

  const dispatch = useAppDispatch();

  const handleClearClick = () => {
    dispatch(clearFormData());
  };

  const handleSendClick = () => {
    if (disabled) return;
    handlePushClick(data);
  };

  useEffect(() => {
    if (!data.type || !data.category || !data.city.id) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [data.type, data.category, data.city]);

  return (
    <Wrapper
      style={{
        maxHeight: isModalOpened ? "0" : "",
      }}
      isModalOpened={!!isModalOpened}
    >
      <Container>
        <ShadowContainer />
        <BtnContainer>
          <SendBtn isDisabled={disabled} onClick={handleSendClick}>
            Отправить
          </SendBtn>
          <ClearBtn onClick={handleClearClick}>Сбросить</ClearBtn>
        </BtnContainer>
      </Container>
    </Wrapper>
  );
};

const ShadowContainer = styled.div`
  height: 19px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 100%;
`;

const BtnContainer = styled.div`
  column-gap: 5px;
  display: flex;
  width: 100%;
  background-color: white;
  padding: 0 5px 5px;
`;

const Button = styled.div`
  display: flex;
  flex-grow: 1;
  height: 44px;
  border-radius: 100px;
  font-size: 15px;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;
`;

const SendBtn = styled(Button)<{ isDisabled: boolean }>`
  background-color: ${({ isDisabled }) =>
    isDisabled ? "rgba(189,82,255,0.5)" : "#bd52ff"};
  cursor: ${({ isDisabled }) => isDisabled && "default"};
`;

const ClearBtn = styled(Button)`
  background-color: #676a71;
`;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const Wrapper = styled.div<{ isModalOpened: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

export default SaveButton;
