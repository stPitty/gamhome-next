import Divider from "../../UI/divider/Divider";
import Description from "./Description";
import ServiceDesc from "./ServiceDesc";
import { Concierge, Owner, SafetyDeal } from "./enums";
import MapBlock from "./MapBlock";
import { Hook, Route } from "../../../common/routes";
import { useAppSelector } from "../../../redux/hooks";
import { TPathName } from "../../../redux/slicers/types";

const AddInfoBlock = () => {
  const { pathName } = useAppSelector<TPathName>((state) => state.pathName);

  return (
    <>
      <ServiceDesc
        cardType={Concierge.CARD_TYPE}
        desc={Concierge.DESC}
        image={Concierge.IMAGE}
        headerText={Concierge.HEADER}
        btnLink={Hook.SERVICES}
      />
      <Divider />
      <Description />
      <Divider />
      {pathName === Route.RENT ? (
        <ServiceDesc
          cardType={Owner.CARD_TYPE}
          desc={Owner.DESC}
          image={Owner.IMAGE}
          headerText={Owner.HEADER}
          btnLink={Hook.USEFUL_DOCS}
        />
      ) : (
        <ServiceDesc
          cardType={SafetyDeal.CARD_TYPE}
          desc={SafetyDeal.DESC}
          image={SafetyDeal.IMAGE}
          headerText={SafetyDeal.HEADER}
          btnLink={Hook.WEBINAR}
        />
      )}
      <Divider />
      <MapBlock />
    </>
  );
};

export default AddInfoBlock;
