// lib/Thingsboard.js
const BASE_URL ='https://demo.thingsboard.io';
const USERNAME='divyansh05j@gmail.com'; // 👈 replace with your actual login
const PASSWORD='Divyansh@05';   // 👈 replace with your password
let token = null;

async function authenticate() {
  if (token) return token;
  console.log('hello',BASE_URL);
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });

  const data = await res.json();
  token = data.token;
  return token;
}

export async function fetchTelemetry(deviceId, keys) {
  const jwt = await authenticate();
  const keysParam = keys.join(',');
  const res = await fetch(
    `${BASE_URL}/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=${keysParam}`,
    {
      headers: { 'X-Authorization': `Bearer ${jwt}` },
    }
  );
  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  const data = await res.json();
  return data;
}
