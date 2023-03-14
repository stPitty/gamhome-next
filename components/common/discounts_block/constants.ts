import { CardData } from "./types";
import { Hook } from "../../../common/routes";

const cardsData: CardData[] = [
  {
    id: 1,
    header: "Грузоперевозки",
    subHeader: "со скидкой 15%",
    desc: "Компания \u00ABГрузовичкоф\u00BB\u00A0— перевозчик, которому можно доверять. Работаем на\u00A0рынке транспортных услуг 17\u00A0лет",
    tags: [
      {
        id: 1,
        text: "Перевозки грузов любой сложности",
        xlPriority: 1,
        lgPriority: 3,
        mdPriority: 8,
        smPriority: 7,
        xsPriority: 3,
      },
      {
        id: 2,
        text: "Вывоз строительного мусора",
        xlPriority: 2,
        lgPriority: 7,
        mdPriority: 4,
        smPriority: 9,
        xsPriority: 5,
      },
      {
        id: 3,
        text: "Оперативно предоставим авто",
        xlPriority: 3,
        lgPriority: 5,
        mdPriority: 1,
        smPriority: 8,
        xsPriority: 4,
      },
      {
        id: 4,
        text: "Надёжные грузоперевозки",
        xlPriority: 4,
        lgPriority: 2,
        mdPriority: 9,
        smPriority: 10,
        xsPriority: 6,
      },
      {
        id: 5,
        text: "Разборка/сборка мебели",
        xlPriority: 5,
        lgPriority: 2,
        mdPriority: 2,
        smPriority: 4,
        xsPriority: 7,
      },
      {
        id: 6,
        text: "Дачный переезд",
        xlPriority: 6,
        lgPriority: 6,
        mdPriority: 7,
        smPriority: 6,
        xsPriority: 10,
      },
      {
        id: 7,
        text: "Услуги грузчиков",
        xlPriority: 7,
        lgPriority: 8,
        mdPriority: 5,
        smPriority: 5,
        xsPriority: 1,
      },
      {
        id: 8,
        text: "Упаковка имущества",
        xlPriority: 8,
        lgPriority: 10,
        mdPriority: 3,
        smPriority: 2,
        xsPriority: 9,
      },
      {
        id: 9,
        text: "Выгодная цена",
        xlPriority: 9,
        lgPriority: 4,
        mdPriority: 6,
        smPriority: 3,
        xsPriority: 2,
      },
      {
        id: 10,
        text: "Квартирный переезд",
        xlPriority: 10,
        lgPriority: 9,
        mdPriority: 10,
        smPriority: 1,
        xsPriority: 8,
      },
    ],
    primaryButtonText: "Заказать грузоперевозку",
    image: "/images/delivery.webp",
    cardType: "delivery",
    contentId: Hook.DELIVERY_CONTENT,
    link: "https://gruzovichkof.ru",
  },
  {
    id: 2,
    header: "Уборка в вашей квартире",
    subHeader: "со\u00A0скидкой\u00A010%",
    desc: "Домовёнок тщательно отбирает и\u00A0обучает исполнителей и отправляет их к\u00A0вам в\u00A0нужное время",
    tags: [
      {
        id: 1,
        text: "Высокое качество",
        xlPriority: 1,
        lgPriority: 3,
        mdPriority: 2,
        smPriority: 3,
        xsPriority: 4,
      },
      {
        id: 2,
        text: "100% материальная ответственность",
        xlPriority: 2,
        lgPriority: 5,
        mdPriority: 5,
        smPriority: 5,
        xsPriority: 1,
      },
      {
        id: 3,
        text: "Передача ключей",
        xlPriority: 3,
        lgPriority: 1,
        mdPriority: 1,
        smPriority: 1,
        xsPriority: 3,
      },
      {
        id: 4,
        text: "Мобильное приложение",
        xlPriority: 4,
        lgPriority: 2,
        mdPriority: 3,
        smPriority: 2,
        xsPriority: 2,
      },
      {
        id: 5,
        text: "Оплата картой",
        xlPriority: 5,
        lgPriority: 4,
        mdPriority: 4,
        smPriority: 4,
        xsPriority: 5,
      },
    ],
    primaryButtonText: "Заказать уборку",
    image: "/images/cleaning.webp",
    cardType: "cleaning",
    contentId: Hook.CLEANING_CONTENT,
    link: "https://www.domovenok.ru/promo?promocode=GAMHOME",
  },
];

export { cardsData };
