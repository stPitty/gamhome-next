import dynamic from "next/dynamic";
import Spinner from "../../../components/UI/spinner/Spinner";

const Photos = dynamic(() => import("../../../components/photos/Photos"), {
  loading: () => <Spinner />,
  ssr: false,
});

const FullscreenCarousel: React.FC = () => {
  return <Photos />;
};

export default FullscreenCarousel;
