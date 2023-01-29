import dynamic from "next/dynamic";
import Spinner from "../../components/UI/spinner/Spinner";

const TgForm = dynamic(() => import("../../components/tg_form/TgForm"), {
  loading: () => <Spinner />,
  ssr: false,
});

const TgFormPage = () => {
  return <TgForm />;
};

export default TgFormPage;
