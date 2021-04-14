export default function handler(req, res) {
  const cookies = req.query.auth;
  res.writeHead(302, {
    Location: '/',
    'Set-Cookie': cookies,
  }).end();
}
