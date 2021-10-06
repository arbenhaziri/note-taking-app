import { datas } from "../actions";

const initialState = {
  data: [],
  filteredData: [],
  isLoading: false,
  selectedNote: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case datas.SEARCH_NOTES: {
      let filteredData = state.data.filter((note) =>
        note.text.toLowerCase().includes(action.payload.keyword.toLowerCase())
      );
      return {
        ...state,
        filteredData: filteredData,
        isLoading: false,
      };
    }
    case datas.ADD_NOTE: {
      state.data.push(action.payload.note);
      return {
        ...state,
        filteredData: state.data,
      };
    }
    case datas.EDIT_NOTE: {
      const updatedNote = state.data.find(
        (item) => item.id === action.payload.note.id
      );
      updatedNote.text = action.payload.note.text;
      return {
        ...state,
        filteredData: state.data,
      };
    }
    case datas.SELECT_NOTE: {
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
