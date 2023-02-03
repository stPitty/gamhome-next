import { TabTitle } from "../../UI/tab/types";
import { TabBodyData } from "./types";
import {
  checkObjInputNum,
  checkOwnerInputInfo,
  law,
} from "../../../redux/slicers/modalStateSlicer";

const rentTabTitle: TabTitle[] = [
  {
    id: 1,
    title: "Проверить объект",
  },
  {
    id: 2,
    title: "Проверить собственника",
  },
];

const buyTabTitle = [
  {
    id: 1,
    title: "Правовое заключение",
  },
  {
    id: 2,
    title: "Проверить объект",
  },
  {
    id: 3,
    title: "Проверить собственника",
  },
];

const objData: TabBodyData = {
  name: "Проверка объекта",
  desc: "Как обезопасить себя от\u00A0мошенников? Соберите сведения об\u00A0объекте и\u00A0участниках сделки, чтобы\u00A0узнать о\u00A0потенциальных рисках",
  points: [
    {
      id: 1,
      header: "Узнайте кадастровый номер объекта",
      desc: "На\u00A0просмотре квартиры спросите необходимую информацию у\u00A0собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на\u00A0сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на\u00A0почту",
      desc: "Проверка занимает от 30 минут до\u00A03\u00A0дней. Если не\u00A0хотите упустить квартиру, оставьте залог собственнику на\u00A0время проверки",
    },
  ],
  image: "/images/man-in-home.webp",
  additionalInfo: {
    header: "Какие риски исключаете",
    points: [
      {
        id: 1,
        text: "Сдача квартиры по\u00A0поддельным документам",
        xlPriority: 1,
        lgPriority: 1,
        mdPriority: 1,
        smPriority: 1,
      },
      {
        id: 2,
        text: "Сдача квартиры без ведома остальных собственников",
        xlPriority: 2,
        lgPriority: 2,
        mdPriority: 2,
        smPriority: 2,
      },
      {
        id: 3,
        text: "Наличие обременения, запретов",
        xlPriority: 3,
        mdPriority: 3,
        smPriority: 3,
      },
      {
        id: 4,
        text: "История перехода прав с\u00A01998\u00A0г.",
        xlPriority: 4,
        lgPriority: 5,
        mdPriority: 5,
        smPriority: 5,
      },
      {
        id: 5,
        text: "Информация о\u00A0доме и\u00A0управляющей компании",
        xlPriority: 5,
        lgPriority: 4,
        mdPriority: 4,
        smPriority: 4,
      },
    ],
    cost: 799,
  },
  contentType: "checkObject",
  btnAction: checkObjInputNum,
};

const ownerData: TabBodyData = {
  name: "Проверка собственника",
  desc: "Как обезопасить себя от\u00A0мошенников? Соберите сведения об\u00A0участниках сделки, чтобы узнать о\u00A0потенциальных рисках",
  points: [
    {
      id: 1,
      header:
        "Узнайте данные собственника (ФИО, дату рождения, серию\u00A0и\u00A0номер паспорта, дату выдачи паспорта и\u00A0код\u00A0подразделения)",
      desc: "На\u00A0просмотре квартиры спросите необходимую информацию у\u00A0собственника или агента",
    },
    {
      id: 2,
      header: "Закажите проверку на\u00A0сайте",
    },
    {
      id: 3,
      header: "Результаты проверки пришлём на\u00A0почту",
      desc: "Проверка занимает от\u00A030\u00A0минут до\u00A03\u00A0дней. Если не\u00A0хотите упустить квартиру, оставьте залог собственнику на\u00A0время проверки",
    },
  ],
  image: "/images/woman-searches.webp",
  additionalInfo: {
    header: "Какую информацию получаете",
    points: [
      {
        id: 1,
        text: "Проверка в\u00A0списке недействительных паспортов",
        xlPriority: 1,
        lgPriority: 1,
        mdPriority: 1,
      },
      {
        id: 2,
        text: "Судебные дела и\u00A0Исполнительные производства",
        xlPriority: 2,
        lgPriority: 2,
        mdPriority: 2,
      },
      {
        id: 3,
        text: "Налоговые задолженности по\u00A0годам\u00A0и\u00A0категориям",
        xlPriority: 3,
        lgPriority: 4,
        mdPriority: 4,
      },
      {
        id: 4,
        text: "Информация о\u00A0банкротстве",
        xlPriority: 4,
        lgPriority: 3,
        mdPriority: 3,
      },
      {
        id: 5,
        text: "Участие в\u00A0экстремистской и\u00A0террористической деятельности",
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

const jurData: TabBodyData = {
  name: "Юридический анализ с\u00A0письменным заключением",
  desc: "Получите правовое заключение с\u00A0детальным анализом истории объекта недвижимости и\u00A0собственников. Юристы составят письменные рекомендации, как избежать до\u00A020 основных рисков утраты права собственности",
  points: [
    {
      id: 1,
      header: "Сбор информации об\u00A0объекте и\u00A0собственнике",
      desc: "Скажем какие дополнительные документы нужно запросить у\u00A0продавца, чтобы снизить риски утраты жилья",
    },
    {
      id: 2,
      header: "Юридическая проверка",
      desc: "Анализ по\u00A0предоставленной информации и\u00A0документам, а\u00A0также закажем сведения по\u00A0объекту и\u00A0собственникам объекта из\u00A0баз\u00A0данных и\u00A0реестров",
    },
    {
      id: 3,
      header: "Консультация юриста",
      desc: "Консультация с\u00A0юристом в\u00A0чате в\u00A0течение трёх дней после\u00A0проверки",
    },
    {
      id: 4,
      header: "Подарок договор купли-продажи",
      desc: "Подготовка договора купли-продажи недвижимости \nсделки с\u00A0расширенными гарантиями",
      gift: true,
    },
  ],
  additionalInfo: {
    header: "Какие риски исключаете",
    points: [
      {
        id: 1,
        text: "Приватизация и\u00A0право пожизненного проживания",
        xlPriority: 1,
        lgPriority: 1,
        mdPriority: 1,
        smPriority: 1,
        xsPriority: 1,
      },
      {
        id: 2,
        text: "Признание продавца квартиры недееспособным или ограниченно дееспособным",
        xlPriority: 2,
        lgPriority: 2,
        mdPriority: 2,
        smPriority: 2,
        xsPriority: 2,
      },
      {
        id: 3,
        text: "Материнский капитал без наделения долями",
        xlPriority: 3,
        lgPriority: 5,
        mdPriority: 4,
        smPriority: 4,
        xsPriority: 4,
      },
      {
        id: 4,
        text: "Нарушение прав несовершеннолетних или лиц находящихся под опекой и\u00A0попечительством",
        xlPriority: 4,
        lgPriority: 6,
        mdPriority: 5,
        smPriority: 5,
        xsPriority: 5,
      },
      {
        id: 5,
        text: "Продажа без согласия супруги/супруга",
        xlPriority: 5,
        lgPriority: 7,
        mdPriority: 3,
        smPriority: 3,
        xsPriority: 3,
      },
      {
        id: 6,
        text: "Неучтенные наследники",
        xlPriority: 6,
        lgPriority: 4,
        mdPriority: 7,
        smPriority: 7,
        xsPriority: 7,
      },
      {
        id: 7,
        text: "Незаконная перепланировка",
        xlPriority: 7,
        lgPriority: 3,
        mdPriority: 6,
        smPriority: 6,
        xsPriority: 6,
      },
    ],
    cost: "24 990",
  },
  image: "/images/perfect-candidate.webp",
  contentType: "jurAnalysis",
  btnAction: law,
};

const rentTabsData: TabBodyData[] = [objData, ownerData];

const buyTabsData: TabBodyData[] = [jurData, objData, ownerData];

export { rentTabTitle, buyTabTitle, rentTabsData, buyTabsData };
