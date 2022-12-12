import Link from "next/link";

export default function NestedAndDynamicRouteExample() {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/clients`}>Clients</Link>
        </li>
        <li>
          <Link href={`/portfolio`}>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
