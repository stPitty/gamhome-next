import styled from "styled-components";
import { photos } from "../../mock";
import { Dispatch, memo, SetStateAction } from "react";
import { BrandColor } from "../../common/enums";

type Props = {
  position: number;
  setPosition: Dispatch<SetStateAction<number>>;
};

const PreviewStack: React.FC<Props> = ({ position, setPosition }) => {
  const handelPreviewClick = (index: number) => () => {
    setPosition(index);
  };

  return (
    <Container>
      <ImagesWrapper count={position}>
        {photos.map((el, index) => (
          <Image
            onClick={handelPreviewClick(index)}
            outline={position === index}
            key={el + index}
            image={el}
          />
        ))}
      </ImagesWrapper>
    </Container>
  );
};

const ImagesWrapper = styled.div<{ count: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateX(
    ${({ count }) => count > 4 && `-${Math.floor(count / 5) * 5 * 176}px`}
  );
`;

const Image = styled.div<{ image: string; outline: boolean }>`
  background: url(${({ image }) => image}) no-repeat border-box;
  background-size: cover;
  min-width: 160px;
  height: 130px;
  border-radius: 12px;
  margin: 16px 16px 0 0;
  cursor: pointer;
  transition: 0s;
  border: ${({ outline }) => outline && `2px solid ${BrandColor.BRAND}`};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 864px;
  overflow: hidden;
`;

export default memo(PreviewStack);
