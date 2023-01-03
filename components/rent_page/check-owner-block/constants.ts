import { TabTitle } from "../../UI/tab/types";
import { TabBodyData } from "./types";
import {
  checkObjInputNum,
  checkOwnerInputInfo,
} from "../../../redux/slicers/modalStateSlicer";

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
  desc: "Как обезопасить себя от мошенников? Соберите сведения об объекте и участниках сделки, чтобы узнать о потенциальных рисках",
  points: [
    {
      id: 1,
      header: "Узнайте кадастровый номер объекта",
      desc: "На просмотре квартиры спросите необходимую информацию у собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на почту",
      desc: "Проверка занимает от 30 минут до 3 дней. Если не хотите упустить квартиру, оставьте залог собственнику на время проверки",
    },
  ],
  image: "/images/man-in-home.webp",
  additionalInfo: {
    header: "Какие риски исключаете",
    points: [
      {
        id: 1,
        text: "Сдача квартиры по поддельным документам",
        xlPriority: 1,
        lgPriority: 1,
        mdPriority: 1,
      },
      {
        id: 2,
        text: "Сдача квартиры без ведома остальных собственников",
        xlPriority: 2,
        lgPriority: 2,
        mdPriority: 2,
      },
      {
        id: 3,
        text: "Наличие обременения, запретов",
        xlPriority: 3,
        mdPriority: 3,
      },
      {
        id: 4,
        text: "История перехода прав с 1998 г",
        xlPriority: 4,
        lgPriority: 5,
        mdPriority: 5,
      },
      {
        id: 5,
        text: "Информация о доме и управляющей компании",
        xlPriority: 5,
        lgPriority: 4,
        mdPriority: 4,
      },
    ],
    cost: 799,
  },
  contentType: "checkObject",
  btnAction: checkObjInputNum,
};

const ownerData: TabBodyData = {
  name: "Проверка собственника",
  desc: "Как обезопасить себя от мошенников? Соберите сведения об объекте и участниках сделки, чтобы узнать о потенциальных рисках",
  points: [
    {
      id: 1,
      header:
        "Узнайте данные собственника (ФИО, дату рождения, серию и номер паспорта, дату выдачи паспорта и код подразделения)",
      desc: "На просмотре квартиры спросите необходимую информацию у собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на почту",
      desc: "Проверка занимает от 30 минут до 3 дней. Если не хотите упустить квартиру, оставьте залог собственнику на время проверки",
    },
  ],
  image: "/images/woman-searches.webp",
  additionalInfo: {
    header: "Какую информацию получаете",
    points: [
      {
        id: 1,
        text: "Проверка в списке недействительных паспортов",
        xlPriority: 1,
        lgPriority: 1,
        mdPriority: 1,
      },
      {
        id: 2,
        text: "Судебные дела и Исполнительные производства",
        xlPriority: 2,
        lgPriority: 2,
        mdPriority: 2,
      },
      {
        id: 3,
        text: "Налоговые задолженности по годам и категориям",
        xlPriority: 3,
        lgPriority: 4,
        mdPriority: 4,
      },
      {
        id: 4,
        text: "Информация о банкротстве",
        xlPriority: 4,
        lgPriority: 3,
        mdPriority: 3,
      },
      {
        id: 5,
        text: "Участие в экстремистской и террористической деятельности",
        xlPriority: 5,
        lgPriority: 5,
        mdPriority: 5,
      },
    ],
    cost: 549,
  },
  contentType: "checkOwner",
  btnAction: checkOwnerInputInfo,
};

const tabsData: [TabBodyData, TabBodyData] = [objData, ownerData];

export { tabTitle, tabsData };
