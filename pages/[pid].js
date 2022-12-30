import fs from "fs/promises";
import path from "path";

export default function EventDetailsPage(props) {
  const { event } = props;

  // THIS is the fallback content which is rendered
  // while NextJS is loading the event.
  if (!event) {
    return <p>loading...</p>
  }
  return (
    <>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </>
  );
}

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}
export async function getStaticProps(context) {
  const { params } = context;

  const eventId = params.pid;

  const data = await getData();

  const event = data.events.find((event) => event.id === eventId);
  return {
    props: {
      event: event,
    },
    revalidate: 10,
  };
}

// Telling NextJS WHICH instances of this dynamic page should be generated
// With "fallback: true", we tell NextJS
// can also use fallback: blocking
export async function getStaticPaths() {
  const data = await getData();

  const ids = data.events.map(event => event.id)

  const params = ids.map(id => ({params: {pid: id}}));
  return {
    paths: params,
    // paths: [
    //   // { params: { pid: "e1" } },
    //   // { params: { pid: "e2" } },
    //   // { params: { pid: "e3" } },
    // ],
    fallback: true,
  };
}
