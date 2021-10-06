import { dashboard } from "../actions";
const initialState = {
  isApiOnline: true,
  activeStep: 0,
  showTimeline: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case dashboard.SET_DATA: {
      return {
        ...state,
        isApiOnline: true,
      };
    }
    default: {
      return state;
    }
  }
}
