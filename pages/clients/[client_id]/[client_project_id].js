import { useRouter } from "next/router";

/** This is a nested dynamic route */
function SelectedClientProjectPage() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Selected Client Project Page</h1>
      <div>Client ID: {query.client_id}</div>
      {query.client_project_id ? (
        <div>Client Project ID: {query.client_project_id}</div>
      ) : null}
    </div>
  );
}

export default SelectedClientProjectPage;
