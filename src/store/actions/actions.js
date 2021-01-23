import axios from "axios";
import * as ACTIONS from "./actionsType";

export const getContacts = () => async (dispatch) => {
  try {
    const contacts = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({ type: ACTIONS.GET_CONTACTS, payload: contacts.data.data });
  } catch (error) {}
};
