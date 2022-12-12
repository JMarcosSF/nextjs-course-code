import { useRouter } from "next/router";

function ClientProjectPage() {
  const { query } = useRouter();
  console.log(query)

  return (
    <div>
      <h1>A Client's Project</h1>
      {query.id ? <div>Client id: {query.id}</div> : null}
    </div>
  );
}

export default ClientProjectPage;
