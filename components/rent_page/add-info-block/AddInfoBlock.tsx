import Divider from "../../UI/divider/Divider";
import Description from "./Description";
import ServiceDesc from "./ServiceDesc";
import { Concierge, Owner } from "./enums";
import MapBlock from "./MapBlock";
import { Hook } from "../../../common/routes";

const AddInfoBlock = () => {
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
      <ServiceDesc
        cardType={Owner.CARD_TYPE}
        desc={Owner.DESC}
        image={Owner.IMAGE}
        headerText={Owner.HEADER}
        btnLink={Hook.USEFUL_DOCS}
      />
      <Divider />
      <MapBlock />
    </>
  );
};

export default AddInfoBlock;
