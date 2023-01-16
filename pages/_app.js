import "../styles/globals.css";
import { FeedbackProvider } from "../components/feedback/state/feedbackContext";

function MyApp({ Component, pageProps }) {
  return (
    <FeedbackProvider>
      <Component {...pageProps} />
    </FeedbackProvider>
  );
}

export default MyApp;
