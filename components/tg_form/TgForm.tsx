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
  authorValues,
  categoryValues,
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
  const authorArr = useGetRefs(authorValues, RefType.AUTHOR);

  useEffect(() => {
    if (!data.city.id) {
      dispatch(setPrimitiveField({ name: "districts", value: [] }));
      dispatch(setPrimitiveField({ name: "metros", value: [] }));
    }
  }, [data.city]);

  useEffect(() => {
    setActiveParams(categoryRefsArr.refs, data.category);
    setActiveParams(typeArr.refs, data.type);
    setActiveParams(authorArr.refs, data.author);
  }, [data]);

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

  return (
    <>
      <GeneralWrapper>
        <HeaderContainer>Настроить параметры поиска</HeaderContainer>
        <Divider />
        <TagsSection refs={categoryRefsArr} header="Тип жилья" />
        <Divider />
        <TagsSection refs={typeArr} header="Тип услуги" />
        <Divider />
        <TagsSection refs={authorArr} header="Автор объявления" />
        <Divider />
        <SimpleForm
          header="Стоимость ₽"
          minType="minPrice"
          maxType="maxPrice"
        />
        <Divider />
        <RadioButton header="Без комиссии" label="Да" fieldType="fee" />
        <Divider />
        <RadioButton
          header="Являетесь агентом?"
          label="Да"
          fieldType="isAgent"
        />
        <Divider />
        <SimpleForm
          header="Расстояние до метро, км."
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
