const regexpList = [
  {
    regexp: /всего комнат/i,
    priority: 1,
  },
  {
    regexp: /количество комнат/i,
    priority: 1,
  },
  {
    regexp: /^площадь$/i,
    priority: 2,
  },
  {
    regexp: /площадь дома/i,
    priority: 3,
  },
  {
    regexp: /площадь участка/i,
    priority: 4,
  },
  {
    regexp: /общая площадь/i,
    priority: 5,
  },
  {
    regexp: /жилая площадь/i,
    priority: 6,
  },
  {
    regexp: /площадь комнаты/i,
    priority: 7,
  },
  {
    regexp: /площадь кухни/i,
    priority: 8,
  },
  {
    regexp: /статус участка/i,
    priority: 9,
  },
  {
    regexp: /^этаж$/i,
    priority: 10,
  },
  {
    regexp: /этажей в доме/i,
    priority: 11,
  },
  {
    regexp: /планировка/i,
    priority: 12,
  },
  {
    regexp: /год постройки/i,
    priority: 13,
  },
];

export { regexpList };
