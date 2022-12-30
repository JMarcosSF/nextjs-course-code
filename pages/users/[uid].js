const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

// Will NOT pre-generate. ONLY runs on the server.
// Happens on EVERY request.
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  console.log(params);
  return {
    props: { username: params.uid },
  };
};
