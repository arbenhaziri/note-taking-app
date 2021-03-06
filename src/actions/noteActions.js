export const SEARCH_NOTES = "SEARCH_NOTES";
export const doSearchNotes = (keyword) => ({
  type: SEARCH_NOTES,
  payload: { keyword },
});

export const ADD_NOTE = "ADD_NOTE";
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: { note },
});

export const EDIT_NOTE = "EDIT_NOTE";
export const editNote = (note) => ({
  type: EDIT_NOTE,
  payload: { note },
});

export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (note) => ({
  type: DELETE_NOTE,
  payload: { note },
});

export const SELECT_NOTE = "SELECT_NOTE";
export const selectNote = (index) => ({
  type: SELECT_NOTE,
  payload: { index },
});

export const FETCH_DATA_LOCAL_STORAGE = "FETCH_DATA_LOCAL_STORAGE";
export const fetchDataFromLocalStorage = () => {
  const localData = JSON.parse(localStorage.getItem("data"));
  if (localData) {
    return {
      type: FETCH_DATA_LOCAL_STORAGE,
      payload: localData,
    };
  }
  return {
    type: FETCH_DATA_LOCAL_STORAGE,
    payload: [],
  };
};
