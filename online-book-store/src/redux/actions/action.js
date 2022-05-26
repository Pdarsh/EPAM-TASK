export const ADD = (book) => {
  return {
    type: "ADD_CART",
    payload: book,
  };
};

export const CART_QTY = (qty,isbn) => {
  return {
    type: "CHANGE_CART_QTY",
    payload: {
        qty:qty,
        isbn:isbn,
    }
}
};

export const DEL_ITEM = (isbn) => {
  console.log(isbn)
  return {
    type: "DEL_SINGLE_ITEM",
    payload: {
      isbn:isbn
    },
  }
};

export const EMPTY_CART = () => {
  return {
    type: "CLEAR_CART",
    payload: []
}
};
