import { CardData } from "./types";
import { CardType } from "./enums";
import {
  agentForContract,
  conciergeService,
  keySearch,
} from "../../../redux/slicers/modalStateSlicer";
import { ButtonType } from "../../UI/button/enums";

const cardsData: CardData[] = [
  {
    id: 1,
    cardType: CardType.UNFILLED,
    buttonType: ButtonType.OUTLINE,
    headerText: "Агент на договор",
    cost: "3 000 ₽",
    descText: "Единоразовый выезд агента для проверки и подписания договора",
    buttonAction: agentForContract,
    points: [
      {
        id: 1,
        text: "Осмотр объекта перед подписанием договора",
      },
      {
        id: 2,
        text: "Проверка правоустанавливающих документов и собственника",
      },
      {
        id: 3,
        text: "Заполнение договора",
      },
      {
        id: 4,
        text: "Составление описи имущества",
      },
    ],
  },
  {
    id: 2,
    cardType: CardType.UNFILLED,
    buttonType: ButtonType.OUTLINE,
    headerText: "Консьерж сервис",
    cost: "14 890 ₽",
    descText:
      "Найдём то что вам нужно, договоримся о просмотрах. Поиск длительностью 21 день",
    buttonAction: conciergeService,
    points: [
      {
        id: 1,
        text: "Чат с персональным менеджером",
      },
      {
        id: 2,
        text: "Подбор объявлений по выбранным параметрам",
      },
      {
        id: 3,
        text: "Сами позвоним по объявлениям и договоримся о просмотрах",
      },
      {
        id: 4,
        text: "Спланируем график просмотров в удобное для вас время",
      },
      {
        id: 5,
        text: "Проверка объекта и собственника",
      },
      {
        id: 6,
        text: "Чек-листы и документы для аренды в подарок",
      },
    ],
    tagText: "70% заселяется в первую неделю поиска",
  },
  {
    id: 3,
    cardType: CardType.FILLED,
    buttonType: ButtonType.PRIMARY_WHITE,
    headerText: "Поиск под ключ",
    cost: "От 20 000 ₽",
    descText:
      "Персональное сопровождение от поиска до заселения в новую квартиру",
    buttonAction: keySearch,
    points: [
      {
        id: 1,
        text: "Выезд менеджера на все просмотры",
      },
      {
        id: 2,
        text: "Онлайн просмотр, если вы не можете присутствовать на объекте",
      },
      {
        id: 3,
        text: "Проведение торга",
      },
      {
        id: 4,
        text: "Осмотр объекта перед подписанием договора",
      },
      {
        id: 5,
        text: "Проверка правоустанавливающих документов и собственника",
      },
      {
        id: 6,
        text: "Заполнение договора",
      },
      {
        id: 7,
        text: "Составление описи имущества",
      },
      {
        id: 8,
        text: "Поддержка после заключения договора",
      },
    ],
    plusService: "Все услуги Консьерж сервиса плюс:",
    tagText: "Подарок от нашей компании к новоселью",
  },
];

export { cardsData };
