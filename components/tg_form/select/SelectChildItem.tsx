import styled from "styled-components";
import React, { FC, memo, useEffect, useState } from "react";
import { Cities, Metros, TFormData } from "../../../redux/slicers/types";

import { handleSetDataPoint, setActive } from "./helpers";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Done } from "@styled-icons/material/Done";
import AreaRow from "../../tg_form_ui/area_row_ui/AreaRow";
import CheckBox from "../../tg_form_ui/checkbox_ui/CheckBox";

type Props = {
  data: Cities | Metros;
  type: "cities" | "districts" | "metros";
};

const SelectChildItem: FC<Props> = ({ data, type }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    data: { metros },
  } = useAppSelector<TFormData>((state) => state.formData);

  useEffect(() => {
    setActive(setChecked, metros, data);
  }, [metros]);

  return (
    <Row
      onClickHandler={handleSetDataPoint(
        dispatch,
        type,
        data,
        type === "metros"
      )}
    >
      <Text>{data?.name}</Text>
      {type === "metros" && <CheckBox>{checked && <DoneIcon />}</CheckBox>}
    </Row>
  );
};

const DoneIcon = styled(Done)`
  color: green;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Row = styled(AreaRow)`
  margin-left: 20px;
`;

export default memo(SelectChildItem);
