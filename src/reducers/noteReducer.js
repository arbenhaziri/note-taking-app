import { noteActions } from "../actions";

const initialState = {
  data: [],
  filteredData: [],
  isLoading: false,
  selectedNote: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case noteActions.SEARCH_NOTES: {
      let filteredData = state.data.filter((note) =>
        note.text.toLowerCase().includes(action.payload.keyword.toLowerCase())
      );
      return {
        ...state,
        filteredData: filteredData,
        isLoading: false,
      };
    }
    case noteActions.ADD_NOTE: {
      state.data.push(action.payload.note);
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
      return {
        ...state,
        filteredData: state.data,
      };
    }
    case noteActions.DELETE_NOTE: {
      let filteredData = state.data.filter(
        (note) => note.id !== action.payload.note.id
      );
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
    default: {
      return state;
    }
  }
}
