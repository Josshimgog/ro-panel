// /api/oauth/callback.js

export default async function handler(req, res) {
    const code = req.query.code;
    if (!code) return res.status(400).send('Missing code.');
  
    const clientId = '5580485567721980784';
    const clientSecret = 'RBX-TG2miGjG0UeYfokGwIui4LdW3ILFMsbiGawnmzqZxuPOobS9eR6SHweuZN4D-oFM';
    const redirectUri = 'https://jvstlink.ink/api/oauth/callback';
  
    try {
      const response = await fetch('https://apis.roblox.com/oauth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
        }),
      });
  
      const data = await response.json();
  
      if (data.access_token) {
        // Example: redirect to dashboard or send token
        return res.status(200).json({ success: true, data });
      } else {
        return res.status(400).json({ error: data });
      }
    } catch (error) {
      return res.status(500).json({ error: 'OAuth callback failed', details: error.message });
    }
  }