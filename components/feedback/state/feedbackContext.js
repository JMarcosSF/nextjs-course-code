import { createContext, useReducer } from "react";
import { feedbackReducer } from "./feedbackReducer";
import { ACTIONS } from "../actions";

const initialState = {
  feedbackList: [],
  feedbackItem: null,
};

const initializer = (initialState) => {
  return {
    feedbackList: initialState.feedbackList,
    feedbackItem: initialState.feedbackItem,
  };
};

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState, initializer);

  const value = {
    feedbackList: state.feedbackList,
    feedbackItem: state.feedbackItem,
    createFeedback: async (feedbackItem) => {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(feedbackItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      feedbackItem = data.feedback;

      dispatch({ type: ACTIONS.CREATE_FEEDBACK, feedbackItem });
    },
    getAllFeedback: async () => {
      const response = await fetch("/api/feedback");
      if (!response.ok) {
        // TODO Dispatch error
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const feedbackList = data.feedback;

      dispatch({ type: ACTIONS.GET_ALL_FEEDBACK, feedbackList });
    },
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};