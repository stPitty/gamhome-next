import React, { useEffect } from "react";
import { FieldName, TFormData } from "../../../redux/slicers/types";
import SimpleForm from "./SimpleForm";
import { useGetParametersByIdQuery } from "../../../redux/APIs/parametersApi";
import styled from "styled-components";
import { AddParameters, Refs } from "../../../common/form_utils/types";
import { setActiveParams } from "../../../common/form_utils/helpers";
import TagsSection from "./TagsSection";
import { useGetRefs } from "../../../common/custom_hooks/useGetRefs";
import { ParamType, RefType } from "../../../common/form_utils/enums";
import {
  dealTypeValues,
  floorsInHouseValues,
  houseTypeValues,
  objTypeHomeValues,
  objTypeValues,
  repairValues,
  roomsInFlatQuantityValues,
  roomsQuantityValues,
  typeOfPartValues,
  wallMaterialValues,
} from "../../../common/form_utils/constants";
import { useAppSelector } from "../../../redux/hooks";

const Parameters = () => {
  const {
    data: { params, type, category, lastFloor },
  } = useAppSelector<TFormData>((state) => state.formData);

  const { data } = useGetParametersByIdQuery(category);

  const repairRefsArr = useGetRefs(
    repairValues,
    RefType.PARAMS,
    ParamType.REPAIR
  );
  const houseTypeRefsArr = useGetRefs(
    houseTypeValues,
    RefType.PARAMS,
    ParamType.HOUSE_TYPE
  );

  const wallMaterialRefsArr = useGetRefs(
    wallMaterialValues,
    RefType.PARAMS,
    ParamType.WALL_MATERIAL
  );

  const roomsInFlatQuantityArr = useGetRefs(
    roomsInFlatQuantityValues,
    RefType.PARAMS,
    ParamType.ROOMS_IN_FLAT
  );

  const roomsQuantityArr = useGetRefs(
    roomsQuantityValues,
    RefType.PARAMS,
    ParamType.ROOMS_QUANTITY
  );

  const floorParamArr = useGetRefs(floorsInHouseValues, RefType.LAST_FLOORS);

  const typeOfPartArr = useGetRefs(
    typeOfPartValues,
    RefType.PARAMS,
    ParamType.PART_TYPE
  );

  const dealTypeArr = useGetRefs(
    dealTypeValues,
    RefType.PARAMS,
    ParamType.DEAL_TYPE
  );

  const objTypeArr = useGetRefs(
    objTypeValues,
    RefType.PARAMS,
    ParamType.OBJ_TYPE
  );

  const objHomeTypeArr = useGetRefs(
    objTypeHomeValues,
    RefType.PARAMS,
    ParamType.OBJ_TYPE
  );

  const currentTagParams = (id: number): Refs | undefined => {
    if (id === 1) return repairRefsArr;
    if (id === 13) return roomsInFlatQuantityArr;
    if (id === 8) return houseTypeRefsArr;
    if (id === 5) return roomsQuantityArr;
    if (id === 14) return houseTypeRefsArr;
    if (id === 18) return wallMaterialRefsArr;
    if (id === 19) return typeOfPartArr;
    if (id === 21) return dealTypeArr;
    if (id === 22) return objTypeArr;
    if (id === 23) return objHomeTypeArr;
  };

  useEffect(() => {
    setActiveParams(repairRefsArr.refs, params?.repair);
  }, [params?.repair, data]);

  useEffect(() => {
    setActiveParams(houseTypeRefsArr.refs, params?.houseType);
  }, [params?.houseType, data]);

  useEffect(() => {
    setActiveParams(wallMaterialRefsArr.refs, params?.wallMaterial);
  }, [params?.wallMaterial, data]);

  useEffect(() => {
    setActiveParams(roomsInFlatQuantityArr.refs, params?.roomsInFlatQuantity);
  }, [params?.roomsInFlatQuantity, data]);

  useEffect(() => {
    setActiveParams(roomsQuantityArr.refs, params?.roomsQuantity);
  }, [params?.roomsQuantity, data]);

  useEffect(() => {
    setActiveParams(floorParamArr.refs, lastFloor);
  }, [lastFloor]);

  useEffect(() => {
    setActiveParams(typeOfPartArr.refs, params?.partType);
  }, [params?.partType, data]);

  useEffect(() => {
    setActiveParams(dealTypeArr.refs, params?.dealType);
  }, [params?.dealType, data]);

  useEffect(() => {
    setActiveParams(objTypeArr.refs, params?.objType);
  }, [params?.objType, data]);

  useEffect(() => {
    setActiveParams(objHomeTypeArr.refs, params?.objType);
  }, [params?.objType, data]);

  return (
    <ParametersContainer>
      {data?.map((el: any) => {
        return (
          <div key={el.id}>
            {el.type === "input" ? (
              <>
                <StyledForm
                  header={el.name}
                  minType={("min" + el.paramType) as FieldName | AddParameters}
                  maxType={("max" + el.paramType) as FieldName | AddParameters}
                  isParam={true}
                />
                {el.paramType === "Floor" && (
                  <StyledTags
                    nullable={true}
                    refs={floorParamArr}
                    header={""}
                  />
                )}
              </>
            ) : (
              ((el.id !== 19 && el.id !== 21 && el.id !== 22) ||
                ((el.id === 19 || el.id === 21 || el.id === 22) &&
                  type === 1)) && (
                <StyledTags
                  nullable={true}
                  refs={currentTagParams(el.id)}
                  header={el.name}
                />
              )
            )}
          </div>
        );
      })}
    </ParametersContainer>
  );
};

const ParametersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px;
`;

const StyledTags = styled(TagsSection)`
  margin-top: 15px;
  & > div {
    padding: 0;
  }
  row-gap: 10px;
`;

const StyledForm = styled(SimpleForm)`
  margin-top: 15px;
  & > div {
    padding: 0;
  }
  row-gap: 10px;
`;

export default Parameters;
