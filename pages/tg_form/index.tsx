import dynamic from "next/dynamic";
import Spinner from "../../components/UI/spinner/Spinner";

const TgForm = dynamic(() => import("../../components/tg_form/TgForm"), {
  loading: () => <Spinner />,
});

const TgFormPage = () => {
  return <TgForm />;
};

export default TgFormPage;
