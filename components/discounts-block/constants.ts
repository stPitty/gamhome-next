import { CardData } from "./types";

const cardsData: CardData[] = [
  {
    id: 1,
    header: "Грузоперевозки",
    subHeader: "со скидкой 15%",
    desc: "Компания «Грузовичкоф» — перевозчик, которому можно доверять. Работаем на рынке транспортных услуг 17 лет. За это время открыли более 100 филиалов в разных регионах России и продолжаем открывать новые не только в нашей стране, но и в странах СНГ",
    tags: [
      {
        id: 1,
        text: "Перевозки грузов любой сложности",
        xlPriority: 1,
        lgPriority: 3,
        mdPriority: 3,
      },
      {
        id: 2,
        text: "Выгодная цена",
        xlPriority: 2,
        lgPriority: 1,
        mdPriority: 1,
      },
      {
        id: 3,
        text: "Оперативно предоставим авто",
        xlPriority: 3,
        lgPriority: 4,
        mdPriority: 4,
      },
      {
        id: 4,
        text: "Надёжные грузоперевозки",
        xlPriority: 4,
        lgPriority: 2,
        mdPriority: 2,
      },
    ],
    primaryButtonText: "Заказать грузоперевозку",
    image: "/images/man-gets-box.webp",
    cardType: "delivery",
  },
  {
    id: 2,
    header: "Уборка в вашей квартире",
    subHeader: "со скидкой 10%",
    desc: "Домовёнок тщательно отбирает и обучает исполнителей и отправляет их к вам в нужное время",
    tags: [
      {
        id: 1,
        text: "Высокое качество",
        xlPriority: 1,
        lgPriority: 3,
        mdPriority: 5,
      },
      {
        id: 2,
        text: "100% материальная ответственность",
        xlPriority: 2,
        lgPriority: 5,
        mdPriority: 4,
      },
      {
        id: 3,
        text: "Передача ключей",
        xlPriority: 3,
        lgPriority: 1,
        mdPriority: 1,
      },
      {
        id: 4,
        text: "Мобильное приложение",
        xlPriority: 4,
        lgPriority: 2,
        mdPriority: 3,
      },
      {
        id: 5,
        text: "Оплата картой",
        xlPriority: 5,
        lgPriority: 4,
        mdPriority: 2,
      },
    ],
    primaryButtonText: "Заказать уборку",
    image: "/images/cleaning.webp",
    cardType: "cleaning",
  },
];

export { cardsData };
