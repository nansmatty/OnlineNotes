import {
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_RESET,
  NOTE_CREATE_SUCCESS,
  NOTE_DELETE_FAIL,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_RESET,
  NOTE_LIST_SUCCESS,
} from '../constants/noteConstants';

export const noteListReducer = (state = { notesList: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { loading: true, notesList: [] };
    case NOTE_LIST_SUCCESS:
      return { loading: false, notesList: action.payload };
    case NOTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case NOTE_LIST_RESET:
      return { notesList: [] };
    default:
      return state;
  }
};

export const noteCreateReducer = (state = { note: {} }, action) => {
  switch (action.type) {
    case NOTE_CREATE_REQUEST:
      return { loading: true };
    case NOTE_CREATE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case NOTE_CREATE_RESET:
      return { note: {} };
    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_DELETE_REQUEST:
      return { loading: true };
    case NOTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NOTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
