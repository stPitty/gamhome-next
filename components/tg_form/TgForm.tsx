import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  handleClearSelect,
  handleGetData,
} from "../../common/helpers/formHelpers";
import { TFormData } from "../../redux/slicers/types";
import SimpleForm from "./simple_sections/SimpleForm";
import {
  setDisabled,
  setEnabled,
} from "../../redux/slicers/disableSelectsSlicer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SaveButton from "../tg_form_ui/menu_buttons/SaveButton";
import { useGetRefs } from "../../common/custom_hooks/useGetRefs";
import { RefType } from "../../common/form_utils/enums";
import {
  categoryValues,
  feeValues,
  typeValues,
} from "../../common/form_utils/constants";
import {
  fetchCitiesData,
  setFormData,
  setPrimitiveField,
} from "../../redux/slicers/formDataSlicer";
import TagsSection from "./simple_sections/TagsSection";
import GeneralWrapper from "../tg_form_ui/wrapper_ui/GeneralWrapper";
import { AppContext } from "../../common/context/AppContext";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { setActiveParams } from "../../common/form_utils/helpers";
import HeaderContainer from "../tg_form_ui/container_ui/HeaderContainer";
import Select from "./select/Select";
import Divider from "../tg_form_ui/divider_ui/Divider";
import RadioButton from "../tg_form_ui/radio_button_ui/RadioButton";
import Location from "./location/Location";
import Parameters from "./simple_sections/Parameters";
import Map from "./location/Map";

const TgForm = () => {
  const [showType, setShowType] = useState<boolean>(false);

  const { data, citiesData, isLoading, isError } = useAppSelector<TFormData>(
    (state) => state.formData
  );

  const {
    isCityOpen,
    setIsCityOpen,
    isDistrictOpen,
    setIsDistrictOpen,
    isMetroOpen,
    setIsMetroOpen,
  } = useContext(AppContext);

  const dispatch = useAppDispatch();

  const districts = useMemo(
    handleGetData(
      data,
      citiesData,
      "districts",
      "isDistrictsDisabled",
      dispatch
    ),
    [data.city, citiesData]
  );

  const metros = useMemo(
    handleGetData(data, citiesData, "metroLines", "isMetrosDisabled", dispatch),
    [data.city, citiesData]
  );

  const categoryRefsArr = useGetRefs(categoryValues, RefType.CATEGORY);
  const typeArr = useGetRefs(typeValues, RefType.TYPE);
  const feeArr = useGetRefs(feeValues, RefType.FEE);

  useEffect(() => {
    setActiveParams(feeArr.refs, data.fee);
  }, [data.fee]);

  useEffect(() => {
    if (!data.city.id) {
      dispatch(setPrimitiveField({ name: "districts", value: [] }));
      dispatch(setPrimitiveField({ name: "metros", value: [] }));
    }
  }, [data.city]);

  useEffect(() => {
    setActiveParams(categoryRefsArr.refs, data.category);
  }, [data.category]);

  useEffect(() => {
    setActiveParams(typeArr.refs, data.type);
    if (data.type === 2) {
      dispatch(
        setPrimitiveField({ name: "params", value: "", addType: "partType" })
      );
      dispatch(
        setPrimitiveField({ name: "params", value: "", addType: "dealType" })
      );
      dispatch(
        setPrimitiveField({ name: "params", value: "", addType: "objType" })
      );
    }
  }, [data.type]);

  useEffect(() => {
    dispatch(fetchCitiesData());

    const prevData = localStorage.getItem("formData");

    if (prevData) {
      dispatch(setFormData(JSON.parse(prevData)));
    }
  }, []);

  useEffect(() => {
    if (isLoading || isError) {
      dispatch(setDisabled("isCitiesDisabled"));
    } else {
      dispatch(setEnabled("isCitiesDisabled"));
    }
  }, [isLoading, isError]);

  useEffect(() => {
    if (data.type === 1 && data.category === 2) {
      setShowType(true);
    } else {
      setShowType(false);
      dispatch(setPrimitiveField({ name: "typeOfPart", value: "" }));
    }
  }, [data.type, data.category]);

  return (
    <>
      <GeneralWrapper>
        <HeaderContainer>Настроить параметры поиска</HeaderContainer>
        <Divider />
        <TagsSection
          isRequired={true}
          refs={categoryRefsArr}
          header="Тип жилья"
        />
        <Divider />
        <TagsSection isRequired={true} refs={typeArr} header="Тип услуги" />
        <Divider />
        <SimpleForm
          header="Стоимость ₽"
          minType="minPrice"
          maxType="maxPrice"
        />
        <Divider />
        <SimpleForm
          header="Год постройки"
          minType="minYear"
          maxType="maxYear"
        />
        <Divider />
        {/*<RadioButton header="Без комиссии" label="Да" fieldType="fee" />*/}
        <TagsSection refs={feeArr} header="Комиссия" nullable={true} />
        <Divider />
        <SimpleForm
          header="Расстояние до метро в минутах"
          minType="minKmMetro"
          maxType="maxKmMetro"
        />
        <Divider />
        <Location />
        <Divider />
        {data?.category && <Parameters />}
      </GeneralWrapper>
      <Select
        data={citiesData}
        type="cities"
        targetItem={data.city}
        isOpen={isCityOpen}
        setIsOpen={setIsCityOpen}
        handleClearAction={handleClearSelect("city", dispatch)}
        header="Пожалуйста, выберите город"
        placeholder="Введите название города"
      />
      <Select
        data={districts as Params[]}
        type="districts"
        targetItem={data.districts}
        isOpen={isDistrictOpen}
        setIsOpen={setIsDistrictOpen}
        handleClearAction={handleClearSelect("districts", dispatch)}
        header="Пожалуйста, выберите район"
        placeholder="Введите название района"
        mode="multi"
      />
      <Select
        data={metros as Params[]}
        type="metros"
        targetItem={data.metros}
        isOpen={isMetroOpen}
        setIsOpen={setIsMetroOpen}
        handleClearAction={handleClearSelect("metros", dispatch)}
        header="Пожалуйста, выберите станцию метро"
        placeholder="Введите название станции метро"
        mode="multi"
      />
      <SaveButton />
      <Map />
    </>
  );
};

export default TgForm;
