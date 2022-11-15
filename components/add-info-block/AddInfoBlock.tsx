import Divider from "../UI/divider/Divider";
import Description from "./Description";
import ServiceDesc from "./ServiceDesc";
import { Concierge, Owner } from "./enums";
import MapBlock from "./MapBlock";

const AddInfoBlock = () => {
  return (
    <>
      <ServiceDesc
        height={Concierge.IMAGE_HEIGHT}
        desc={Concierge.DESC}
        image={Concierge.IMAGE}
        headerText={Concierge.HEADER}
      />
      <Divider />
      <Description />
      <Divider />
      <ServiceDesc
        height={Owner.IMAGE_HEIGHT}
        desc={Owner.DESC}
        image={Owner.IMAGE}
        headerText={Owner.HEADER}
      />
      <Divider />
      <MapBlock />
    </>
  );
};

export default AddInfoBlock;
