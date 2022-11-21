import styled from "styled-components";
import { BlackColor, Font } from "../../common/enums";

const Description = () => {
  return (
    <Container>
      <HeaderText>Описание</HeaderText>
      <Text>
        Уникательный объект с видом на Москву-реку, боковой вид на парк Зарядье,
        с камином и ванной в спальне. Проектировался для себя. В отделке
        использован натуральный камень и дерево, установлена техника Miele,
        мебель из Италии и Голландии.
        <br />
        <br /> Огромная спальня с панорамными окнами, ванной, гардеробной
        и комфортным санузлом. Гостевой санузел. Постирочная комната.
        Гардеробная для верхней одежды и полки для размещения коллекции обуви.
        Кухня, совмещённая с гостиной и столовой, формирующие комфортное
        пространство для жизни. Зону столовой при помощи специальной перегородки
        можно превратить в дополнительную, гостевую либо детскую, спальню.
        <br />
        <br /> Камин работает на две зоны — гостиную и спальню с ванной.
        <br />
        <br />
        Квартира полностью укомплектована посудой и техникой, готова
        к проживанию. Машиноместо на подземном паркинге включено в стоимость.
        <br />
        <br />
        Собственник.
      </Text>
    </Container>
  );
};

const Text = styled.p`
  font-family: ${Font.ROBOTO};
  font-size: 16px;
  line-height: 24px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${BlackColor.BLACK_SECONDARY};
  margin: 0 0 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 48px 0;
`;

export default Description;
