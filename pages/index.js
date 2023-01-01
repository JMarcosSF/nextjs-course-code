import { useRef, useState } from "react";
import { FeedbackProvider } from "../components/feedback/state/feedbackContext";
import FeedbackForm from "../components/feedback/FeedbackForm";

function HomePage() {
  return (
    <FeedbackProvider>
      <div>
        <h1>The Home Page</h1>
        <FeedbackForm />
      </div>
    </FeedbackProvider>
  );
}

export default HomePage;
