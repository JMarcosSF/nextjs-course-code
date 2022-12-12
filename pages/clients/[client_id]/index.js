import { useRouter } from "next/router";

function ClientProjectPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>A Client's Project</h1>
      {query.client_id ? <div>Client id: {query.client_id}</div> : null}
    </div>
  );
}

export default ClientProjectPage;
