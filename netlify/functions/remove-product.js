const https = require('https');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request.' }) };
  }

  if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Incorrect password.' }) };
  }

  if (!body.id) {
    return { statusCode: 400, body: JSON.stringify({ error: 'No product ID provided.' }) };
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error. Contact Yash.' }) };
  }

  const REPO = 'YashNirwan/Raivana';
  const FILE = 'products-extra.json';
  const BRANCH = 'main';

  try {
    const fileData = await githubGet(`/repos/${REPO}/contents/${FILE}?ref=${BRANCH}`, token);
    const currentProducts = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf8'));

    const filtered = currentProducts.filter(p => p.id !== body.id);
    if (filtered.length === currentProducts.length) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Product not found.' }) };
    }

    const newContent = Buffer.from(JSON.stringify(filtered, null, 2) + '\n').toString('base64');
    await githubPut(`/repos/${REPO}/contents/${FILE}`, token, {
      message: `Remove product ID: ${body.id}`,
      content: newContent,
      sha: fileData.sha,
      branch: BRANCH
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not remove product. Try again or contact Yash.' })
    };
  }
};

function githubGet(path, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname: 'api.github.com', path, method: 'GET',
        headers: { Authorization: `token ${token}`, 'User-Agent': 'Raivana-Admin', Accept: 'application/vnd.github.v3+json' } },
      res => { let d = ''; res.on('data', c => d += c); res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { reject(e); } }); }
    );
    req.on('error', reject);
    req.end();
  });
}

function githubPut(path, token, body) {
  return new Promise((resolve, reject) => {
    const str = JSON.stringify(body);
    const req = https.request(
      { hostname: 'api.github.com', path, method: 'PUT',
        headers: { Authorization: `token ${token}`, 'User-Agent': 'Raivana-Admin', Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(str) } },
      res => { let d = ''; res.on('data', c => d += c); res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { reject(e); } }); }
    );
    req.on('error', reject);
    req.write(str);
    req.end();
  });
}
