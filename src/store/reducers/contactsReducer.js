import * as actionTypes from "../actions/actionsType";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Contact1",
    },
    {
      id: 2,
      name: "Contact2",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };

    case actionTypes.GET_CONTACT:
      return {};

    case actionTypes.PUT_CONTACT:
      return {};

    default:
      return state;
  }
};

export default reducer;
