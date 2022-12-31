import { buildFeedbackPath, getFeedbackData } from '.';

function handler(req, res) {
  // Could also handle different request types here with
  // if (req.method === "POST" or "DELETE" or whatever
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = getFeedbackData(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
