// We do not export a react component in API Routes
// Here, we can execute ANY server-side code. It will never end up in the client-side code bundle
const handler = (req, res) => {
  res.status(200).json({message: 'This works!!!'});
}

export default handler;