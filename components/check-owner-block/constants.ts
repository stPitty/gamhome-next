import { TabTitle } from "../UI/tab/types";
import { TabBodyData } from "./types";

const tabTitle: TabTitle[] = [
  {
    id: 1,
    title: "Проверить объект",
  },
  {
    id: 2,
    title: "Проверить собственника",
  },
];

const objData: TabBodyData = {
  name: "Проверка объекта",
  desc: "Как обезопасить себя от мошенников? Соберите сведения об объекте и участниках сделки, чтобы узнать о потенциальных рисках",
  points: [
    {
      id: 1,
      header: "Узнайте кадастровый номер объекта",
      desc: "На просмотре квартиры спросите необходимую информацию у собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на почту",
      desc: "Проверка занимает от 30 минут до 3 дней. Если не хотите упустить квартиру, оставьте залог собственнику на время проверки",
    },
  ],
  image: "/images/man-in-home.jpg",
  additionalInfo: {
    header: "Какие риски исключаете",
    points: [
      "Сдача квартиры по поддельным документам",
      "Сдача квартиры без ведома остальных собственников",
      "Наличие обременения, запретов",
      "История перехода прав с 1998 г",
      "Информация о доме и управляющей компании",
    ],
    cost: 799,
  },
};

const ownerData: TabBodyData = {
  name: "Проверка собственника",
  desc: "Как обезопасить себя от мошенников? Соберите сведения об объекте и участниках сделки, чтобы узнать о потенциальных рисках",
  points: [
    {
      id: 1,
      header:
        "Узнайте данные собственника (ФИО, дату рождения, серию и номер паспорта, дату выдачи паспорта и код подразделения)",
      desc: "На просмотре квартиры спросите необходимую информацию у собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на почту",
      desc: "Проверка занимает от 30 минут до 3 дней. Если не хотите упустить квартиру, оставьте залог собственнику на время проверки",
    },
  ],
  image: "/images/woman-searches.jpg",
  additionalInfo: {
    header: "Какую информацию получаете",
    points: [
      "Проверка в списке недействительных паспортов",
      "Судебные дела и Исполнительные производства",
      "Налоговые задолженности по годам и категориям",
      "Информация о банкротстве",
      "Участие в экстремистской и террористической деятельности",
    ],
    cost: 799,
  },
};

const tabsData: [TabBodyData, TabBodyData] = [objData, ownerData];

export { tabTitle, tabsData };
