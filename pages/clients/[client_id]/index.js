import { useRouter } from "next/router";

/** Programmatic navigation */
function ClientProjectPage() {
  const { query, push, replace } = useRouter();

  const handleProjectButtonClick = () => {
    // do stuff here...
    push({
      pathname: "/clients/[client_id]/[client_project_id]",
      query: { client_id: "abc", client_project_id: "projectX" },
    });
    // push("/clients/abc/projectA");
    // replace("/clients/abc/projectA");
  };

  return (
    <div>
      <h1>A Client's Project</h1>
      {query.client_id ? <div>Client id: {query.client_id}</div> : null}
      <button onClick={handleProjectButtonClick}>Go To Client Projects</button>
    </div>
  );
}

export default ClientProjectPage;
