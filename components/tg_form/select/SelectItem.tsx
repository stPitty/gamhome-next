import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Cities,
  City,
  MetroLines,
  Metros,
  TFormData,
} from "../../../redux/slicers/types";

import SelectChildItem from "./SelectChildItem";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { Done } from "@styled-icons/material/Done";
import { handleSetDataPoint, setActive } from "./helpers";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import AreaRow from "../../tg_form_ui/area_row_ui/AreaRow";
import CheckBox from "../../tg_form_ui/checkbox_ui/CheckBox";

type Props = {
  data: City | MetroLines | Params | undefined;
  mode: "single" | "multi";
  type: "cities" | "districts" | "metros";
};

const CityItem: FC<Props> = ({ data, mode, type }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    data: { districts },
  } = useAppSelector<TFormData>((state) => state.formData);

  useEffect(() => {
    setActive(setChecked, districts, data);
  }, [districts]);

  return (
    <Container>
      <AreaRow
        onClickHandler={handleSetDataPoint(dispatch, type, data, false, true)}
      >
        <Text>{data?.name}</Text>
        {type === "districts" && <CheckBox>{checked && <DoneIcon />}</CheckBox>}
      </AreaRow>
      {data &&
        (data as any)?.[type]?.map((el: Metros | Cities, i: number) => {
          return (
            <SelectChildItem type={type} data={el} key={`${el.name}${i}`} />
          );
        })}
    </Container>
  );
};

const DoneIcon = styled(Done)`
  color: green;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1px;
`;

const Text = styled.div`
  font-size: 14px;
`;

export default CityItem;
