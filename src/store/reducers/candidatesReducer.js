import { FETCH_CANDIDATES, SIGN_UP } from "../actions/actionTypes";
const initialState = {
  candidates: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES:
      const candidates = action.payload;
      return { ...state, candidates: candidates };

    case SIGN_UP:
      const newCandidate = action.payload;
      return {
        ...state,
        candidates: [...state.candidates, newCandidate],
        user: newCandidate,
      };

    default:
      return state;
  }
};

export default reducer;
