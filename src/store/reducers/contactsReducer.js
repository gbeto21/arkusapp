import * as actionTypes from "../actions/actionsType";

const initialState = {
  contacts: [],
  contactDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };

    case actionTypes.GET_CONTACT:
      return {
        ...state,
        contactDetail: action.payload,
      };

    case actionTypes.PUT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.add(action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
