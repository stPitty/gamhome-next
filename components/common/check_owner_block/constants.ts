import { TabTitle } from "../../UI/tab/types";
import { TabBodyData } from "./types";
import {
  checkObjInputNum,
  checkOwnerInputInfo,
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

const jurData: TabBodyData = {
  name: "Юридический анализ с письменным заключением",
  desc: "Получите правовое заключение с детальным анализом истории объекта недвижимости и собственников. Юристы составят письменные рекомендации, как избежать до 20 основных рисков утраты права собственности",
  points: [
    {
      id: 1,
      header: "Сбор информации об объекте и собственнике",
      desc: "Скажем какие дополнительные документы нужно запросить у продавца, чтобы снизить риски утраты жилья",
    },
    {
      id: 2,
      header: "Юридическая проверка",
      desc: "Анализ по предоставленной информации и документам, а также закажем сведения по объекту и собственникам объекта из баз данных и реестров",
    },
    {
      id: 3,
      header: "Консультация юриста",
      desc: "Консультация с юристом в чате в течение трёх дней после проверки",
    },
    {
      id: 4,
      header: "Подарок договор купли-продажи",
      desc: "Подготовка договора купли-продажи недвижимости сделки с расширенными гарантиями",
      gift: true,
    },
  ],
  additionalInfo: {
    header: "Какие риски исключаете",
    points: [
      {
        id: 1,
        text: "Приватизация и право пожизненного проживания",
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
        text: "Нарушение прав несовершеннолетних или лиц находящихся под опекой и попечительством",
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
  image: "/images/perfect-candidate-big.webp",
  contentType: "jurAnalysis",
  btnAction: checkOwnerInputInfo,
};

const rentTabsData: TabBodyData[] = [objData, ownerData];

const buyTabsData: TabBodyData[] = [jurData, objData, ownerData];

export { rentTabTitle, buyTabTitle, rentTabsData, buyTabsData };
