import { ACTIONS } from "../actions";

export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_FEEDBACK:
      return {
        feedbackList: [...state.feedbackList, action.feedbackItem],
      };
    case ACTIONS.GET_ALL_FEEDBACK: {
      return { feedbackList: action.feedbackList };
    }
    case ACTIONS.GET_FEEDBACK_BY_ID: {
      // TODO
    }
    case ACTIONS.API_CALL_ERROR: {
      // TODO
    }
    case ACTIONS.API_CALL_SUCCESS: {
      // TODO
    }
    default:
      return state;
  }
};
