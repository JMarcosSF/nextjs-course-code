import Link from "next/link";

/** Navigating to dynamic routes */
function ClientsPage() {
  const clients = [
    { id: "abc", name: "ABC Co" },
    { id: "123", name: "123 Co" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
      <h1>The With pathname: Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{ pathname: "/clients/[client_id]", query: { client_id: client.id } }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
