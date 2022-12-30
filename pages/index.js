// import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// getStaticProps get's executed FIRST before the component function
// The below ALL happens on the server side IN ADVANCE
export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
        { id: 3, title: "Product 3" },
      ],
    },
  };
}
