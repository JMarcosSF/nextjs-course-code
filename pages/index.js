// import styles from "../styles/Home.module.css";
import fs from "fs/promises";
import path from "path";
export default function Home(props) {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  );
}

// getStaticProps get's executed FIRST before the component function
// The below ALL happens on the server side IN ADVANCE
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  console.log(jsonData)
  const data = JSON.parse(jsonData);

  return {
    props: {
      events: data.events
    },
  };
}
