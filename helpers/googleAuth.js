const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

async function fetchGoogleUser(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.CLIENT_ID,
  });

  return ticket.getPayload();
}

module.exports = fetchGoogleUser;
