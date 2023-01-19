import React, { memo, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FieldName, TFormData } from "../../../redux/slicers/types";
import { setPrimitiveField } from "../../../redux/slicers/formDataSlicer";

import SectionHeader from "../section_header_ui/SectionHeader";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  BlackColor,
  BrandColor,
  Font,
  WhiteColor,
} from "../../../common/enums";
import DoneSVG from "../../../public/assets/svg/DoneSVG";

type Props = {
  label: string;
  header: string;
  fieldType: FieldName;
};

const RadioButton: React.FC<Props> = ({ label, header, fieldType }) => {
  const [activeCheckbox, setActiveCheckbox] = useState<boolean>(false);

  const { data } = useAppSelector<TFormData>((state) => state.formData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setActiveCheckbox(!!(data as any)[fieldType]);
  }, [(data as any)[fieldType]]);

  const handleSetActiveClick = () => {
    dispatch(setPrimitiveField({ name: fieldType, value: !activeCheckbox }));
  };

  return (
    <>
      <SectionHeader>{header}</SectionHeader>
      <CheckboxContainer>
        <StyledRadioButton
          isActive={activeCheckbox}
          onClick={handleSetActiveClick}
        >
          {activeCheckbox && <DoneIcon />}
        </StyledRadioButton>
        <StyledLabel>{label}</StyledLabel>
      </CheckboxContainer>
    </>
  );
};

const DoneIcon = styled(DoneSVG)`
  & path {
    fill: ${WhiteColor.WHITE};
  }
`;

const StyledLabel = styled.div`
  font-family: ${Font.ROBOTO};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_PRIMARY};
`;

const CheckboxContainer = styled.div`
  display: flex;
  padding: 0 20px 20px;
  gap: 32px;
  align-items: center;
`;

const StyledRadioButton = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s linear;
  ${({ isActive }) => {
    switch (isActive) {
      case true:
        return css`
          background: ${BrandColor.BRAND};
          border: none;
          &:hover {
            background: ${BrandColor.BRAND_ACTIVE};
          }
        `;
      case false:
        return css`
          border: 2px solid ${BrandColor.BRAND_24};
          background: ${BrandColor.BRAND_12};
          &:hover {
            background: ${BrandColor.BRAND_24};
          }
        `;
    }
  }};
`;

export default memo(RadioButton);
