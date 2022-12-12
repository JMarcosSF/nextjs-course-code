import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My First Next Project!</h1>
      <ul>
        <li>
          <a href="/portfolio">
            Portfolio * this sends a new http request *BAD*
          </a>
        </li>
        <li>
          <Link href="/portfolio">Use Next JS Link instead</Link>
        </li>
        <li>
          <Link href="/clients">Clients with Next JS Link</Link>
        </li>
      </ul>
    </div>
  );
}
