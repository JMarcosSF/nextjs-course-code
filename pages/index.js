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
// getStaticProps() WILL NOT render on the client side.
export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // ISR: Incremental Static Generation
  // revalidate here states that the page should NOT be regenerated UNLESS
  // it's already been 10 seconds since it was LAST generate ON PRODUCTION!!!
  return {
    props: {
      events: data.events
    },
    revalidate: 10,
    // notFound: true  // Can use this if we want to programmatically render the 404 page
    // redirect:
  };
}
