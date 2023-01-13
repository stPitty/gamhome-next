import React, { useEffect } from "react";
import { FieldName, TFormData } from "../../../redux/slicers/types";
import SimpleForm from "./SimpleForm";
import { useGetParametersByIdQuery } from "../../../redux/APIs/parametersApi";
import styled from "styled-components";
import { AddParameters, Refs } from "../../../common/form_utils/types";
import { setActiveParams } from "../../../common/form_utils/helpers";
import TagsSection from "./TagsSection";
import { useGetRefs } from "../../../common/custom_hooks/useGetRefs";
import {
  ParamType,
  RefType,
  RoomsInFlatQuantity,
} from "../../../common/form_utils/enums";
import {
  floorsInHouseValues,
  houseTypeValues,
  repairValues,
  roomsInFlatQuantityValues,
  roomsQuantityValues,
  wallMaterialValues,
} from "../../../common/form_utils/constants";
import { useAppSelector } from "../../../redux/hooks";

const Parameters = () => {
  const {
    data: { category },
  } = useAppSelector<TFormData>((state) => state.formData);

  const { data } = useGetParametersByIdQuery(category);

  const {
    data: { params },
  } = useAppSelector<TFormData>((state) => state.formData);

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

  const floorParamArr = useGetRefs(
    floorsInHouseValues,
    RefType.PARAMS,
    ParamType.FLOOR_PARAM
  );

  const currentTagParams = (id: number): Refs | undefined => {
    if (id === 1) return repairRefsArr;
    if (id === 13) return roomsInFlatQuantityArr;
    if (id === 8) return houseTypeRefsArr;
    if (id === 5) return roomsQuantityArr;
    if (id === 14) return houseTypeRefsArr;
    if (id === 18) return wallMaterialRefsArr;
  };

  useEffect(() => {
    if (params?.repair) {
      setActiveParams(repairRefsArr.refs, params?.repair);
    }
  }, [params?.repair, data]);

  useEffect(() => {
    if (params?.houseType) {
      setActiveParams(houseTypeRefsArr.refs, params?.houseType);
    }
  }, [params?.houseType, data]);

  useEffect(() => {
    if (params?.wallMaterial) {
      setActiveParams(wallMaterialRefsArr.refs, params?.wallMaterial);
    }
  }, [params?.wallMaterial, data]);

  useEffect(() => {
    if (params?.roomsInFlatQuantity) {
      setActiveParams(roomsInFlatQuantityArr.refs, params?.roomsInFlatQuantity);
    }
  }, [params?.roomsInFlatQuantity, data]);

  useEffect(() => {
    if (params?.roomsQuantity) {
      setActiveParams(roomsQuantityArr.refs, params?.roomsQuantity);
    }
  }, [params?.roomsQuantity, data]);

  useEffect(() => {
    // if (params?.floorParam) {
    setActiveParams(floorParamArr.refs, params?.floorParam);
    // }
  }, [params?.floorParam, data]);

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
              <StyledTags refs={currentTagParams(el.id)} header={el.name} />
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
  row-gap: 15px;
  padding: 20px 20px 10px;
`;

const StyledTags = styled(TagsSection)`
  & > div {
    padding: 0;
  }
  row-gap: 10px;
`;

const StyledForm = styled(SimpleForm)`
  & > div {
    padding: 0;
  }
  row-gap: 10px;
`;

export default Parameters;
