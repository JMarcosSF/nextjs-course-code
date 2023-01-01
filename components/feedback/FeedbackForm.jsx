import { useRef, useContext, useEffect } from "react";
import { FeedbackContext } from "./state/feedbackContext";

const FeedbackForm = (props) => {
  const { feedbackList, getAllFeedback, createFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    getAllFeedback();
  }, []);


  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const newFeedback = { email: enteredEmail, text: enteredFeedback };

    createFeedback(newFeedback);
  }

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={getAllFeedback}>Load Feedback</button>
      <ul>
        {feedbackList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackForm;
