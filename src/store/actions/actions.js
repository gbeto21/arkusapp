import axios from "axios";
import * as ACTIONS from "./actionsType";

const URL = "https://reqres.in/api/users";

export const getContacts = () => async (dispatch) => {
  try {
    const contacts = await axios.get(`${URL}?page=1`);
    dispatch({ type: ACTIONS.GET_CONTACTS, payload: contacts.data.data });
  } catch (error) {}
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const contactAdded = await axios.post(`${URL}`, contact);
    const contactAddedObject = JSON.parse(contactAdded);
    dispatch({ type: ACTIONS.POST_CONTACT, payload: contactAddedObject });
  } catch (error) {}
};

export const getContact = (id) => async (dispatch) => {
  try {
    const contactDetail = await axios.get(`${URL}/${id}`);
    dispatch({ type: ACTIONS.GET_CONTACT, payload: contactDetail.data.data });
  } catch (error) {}
};
