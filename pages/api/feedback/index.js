// We do not export a react component in API Routes
// Here, we can execute ANY server-side code. It will never end up in the client-side code bundle
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
}
export const getFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};

const handler = (req, res) => {
  const filePath = buildFeedbackPath();
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: randomUUID(),
      email,
      text,
    };

    const data = getFeedbackData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(buildFeedbackPath(), JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const data = getFeedbackData(filePath);
    res.status(200).json({ message: "This works!!!", feedback: data });
  }
};

export default handler;
