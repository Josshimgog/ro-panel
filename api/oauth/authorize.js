// /api/oauth/authorize.js

export default function handler(req, res) {
    const clientId = '5580485567721980784';
    const redirectUri = encodeURIComponent('https://jvstlink.ink/api/oauth/callback');
    const scope = 'openid';
    const responseType = 'code';
  
    const url = `https://apis.roblox.com/oauth/v1/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`;
    res.redirect(url);
  }