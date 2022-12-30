import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedEvent } = props;
  return (
    <>
      <h1>{loadedEvent.title}</h1>
      <p>{loadedEvent.description}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const eventId = params.id;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const event = data.events.find((event) => event.id === eventId);

  return {
    props: {
      loadedEvent: event,
    },
  };
}

export default ProductDetailPage;
