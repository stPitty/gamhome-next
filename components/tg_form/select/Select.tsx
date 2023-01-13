import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import styled from "styled-components";
import { City, MetroLines } from "../../../redux/slicers/types";
import SelectItem from "./SelectItem";
import Spinner from "../../UI/spinner/Spinner";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
  handleClickClose,
  handleFilterData,
  handleValueChange,
} from "./helpers";
import BadgesGroup from "../../tg_form_ui/badge_ui/BadgesGroup";
import ModalWrapper from "../../tg_form_ui/wrapper_ui/ModalWrapper";
import SectionHeader from "../../tg_form_ui/section_header_ui/SectionHeader";
import Input from "../../tg_form_ui/input_ui/Input";
import { Done } from "@styled-icons/material/Done";

type Props = {
  data: City[] | MetroLines[] | Params[] | null;
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>> | undefined;
  targetItem: Params | Params[];
  handleClearAction: () => void;
  type: "cities" | "districts" | "metros";
  header: string;
  placeholder: string;
  mode?: "single" | "multi";
};

const Select: FC<Props> = ({
  data,
  isOpen,
  setIsOpen,
  targetItem,
  handleClearAction,
  type,
  header,
  placeholder,
  mode = "single",
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filtering, setFiltering] = useState<boolean>(false);

  const currValue = useMemo(
    handleFilterData(data, filtering, inputValue, type, setFiltering),
    [inputValue, data]
  );

  return (
    <StyledWrapper isOpen={isOpen}>
      <ModalContainer>
        <HeaderContainer>
          <StyledHeader>{header}</StyledHeader>
          <CloseContainer onClick={handleClickClose(setIsOpen)}>
            Готово <DoneIcon />
          </CloseContainer>
        </HeaderContainer>
        <Input
          placeholder={placeholder}
          onChangeHandler={handleValueChange(setFiltering, setInputValue)}
          value={inputValue}
        />
        {mode === "multi"
          ? targetItem.length !== 0 && (
              <BadgesGroup
                onClickHandler={handleClearAction}
                quantity={targetItem.length}
                text={(targetItem as any[])[0].name}
              />
            )
          : (targetItem as Params)?.id && (
              <BadgesGroup
                text={(targetItem as Params)?.name}
                onClickHandler={handleClearAction}
              />
            )}
        <Wrapper>
          {filtering ? (
            <Spinner />
          ) : (
            currValue &&
            currValue?.map((el, i) => {
              return (
                <SelectItem
                  type={type}
                  mode={mode}
                  data={el}
                  key={`${el?.name}${i}`}
                />
              );
            })
          )}
        </Wrapper>
      </ModalContainer>
    </StyledWrapper>
  );
};

const ModalContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: white;
  width: 500px;
  overflow: auto;
  row-gap: 10px;
`;

const StyledHeader = styled(SectionHeader)`
  padding: 0;
  color: black;
`;

const HeaderContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(0, 128, 0, 0.5);
  border-radius: 5px;
  cursor: pointer;
  height: 24px;
  width: 82px;
  font-size: 14px;
  line-height: 18px;
  color: green;
  font-weight: 700;
  padding: 3px;
`;

const DoneIcon = styled(Done)`
  color: green;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  row-gap: 1px;
`;

const StyledWrapper = styled(ModalWrapper)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 15;
  background-color: #fdfdfd;
`;

export default memo(Select);
