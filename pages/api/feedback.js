// We do not export a react component in API Routes
// Here, we can execute ANY server-side code. It will never end up in the client-side code bundle
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: randomUUID(),
      email,
      text,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({ message: "This works!!!", feedback: data });
  }
};

export default handler;
