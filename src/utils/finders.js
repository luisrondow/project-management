export const findColumnById = (list, id) => list.find((item) => item.id === id);

export const findColumnIndexById = (list, id) =>
  list.findIndex((item) => item.id === id);

export const findCardsByColumnId = (cards, column_id) =>
  cards.filter((card) => card.column_id === column_id);

export const findCardById = (list, id) => list.find((item) => item.id === id);

export const findCardIndexById = (list, id) =>
  list.findIndex((item) => item.id === id);
