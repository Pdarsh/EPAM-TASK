const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const bookisbn = state.carts.findIndex(
        (book) => book.isbn === action.payload.isbn
      );

      if (bookisbn >= 0) {
        if (state.carts[bookisbn].qty < state.carts[bookisbn].instock) {
          state.carts[bookisbn].qty += 1;
          return {
            ...state,
            carts: [...state.carts],
          };
        }
      } else {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload, qty: 1 }],
        };
      }
      break;

    case "CHANGE_CART_QTY":
      return {
        ...state,
        carts: state.carts.filter((book) =>
          book.isbn === action.payload.isbn
            ? (book.qty = action.payload.qty)
            : book.qty
        ),
      };

    case "DEL_SINGLE_ITEM":
      console.log(action.payload.isbn)
      const updatedCart = state.carts.filter((book) => {
        return book.isbn !== action.payload.isbn
      })
      console.log(updatedCart)
      return {
        ...state,
        carts : updatedCart
      }
      case "CLEAR_CART":
      return INIT_STATE;
    
    default:
      return state;
  }
};
