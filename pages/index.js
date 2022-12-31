import { useRef, useState } from "react";
import FeedbackForm from "../components/FeedbackForm";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <FeedbackForm />
    </div>
  );
}

export default HomePage;
