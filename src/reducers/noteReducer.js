import { noteActions } from "../actions";

const initialState = {
  data: [],
  filteredData: [],
  isLoading: false,
  selectedNote: null,
};

const _updateLocalStorage = (data) => {
  var notes = JSON.stringify(data);
  localStorage.setItem("data", notes);
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case noteActions.SEARCH_NOTES: {
      let filteredData = state.data.filter((note) =>
        note.name.toLowerCase().includes(action.payload.keyword.toLowerCase())
      );
      return {
        ...state,
        filteredData: filteredData,
        isLoading: false,
      };
    }
    case noteActions.ADD_NOTE: {
      state.data.push(action.payload.note);
      _updateLocalStorage(state.data);
      return {
        ...state,
        filteredData: state.data,
      };
    }
    case noteActions.EDIT_NOTE: {
      const updatedNote = state.data.find(
        (item) => item.id === action.payload.note.id
      );
      updatedNote.text = action.payload.note.text;
      updatedNote.name = action.payload.note.name;
      _updateLocalStorage(state.data);
      return {
        ...state,
        filteredData: state.data,
      };
    }
    case noteActions.DELETE_NOTE: {
      let filteredData = state.data.filter(
        (note) => note.id !== action.payload.note.id
      );
      _updateLocalStorage(filteredData);
      return {
        ...state,
        data: filteredData,
        filteredData: filteredData,
      };
    }
    case noteActions.SELECT_NOTE: {
      return {
        ...state,
        selectedNote: action.payload.index,
      };
    }
    case noteActions.FETCH_DATA_LOCAL_STORAGE: {
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
