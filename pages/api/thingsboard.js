export default async function handler(req, res) {
    const { deviceId, keys } = req.query;
  
    try {
      // 1. Login to ThingsBoard
      const loginRes = await fetch('https://demo.thingsboard.io/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'Your Username Here',
          password: 'your password Here',
        }),
      });
      const loginData = await loginRes.json();
      const token = loginData.token;
      // 2. Fetch Telemetry
      const telemetryRes = await fetch(
        `https://demo.thingsboard.io/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=${keys}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `Bearer ${token}`,
          },
        }
      );
  
      if (!telemetryRes.ok) {
        throw new Error(`Telemetry fetch failed: ${telemetryRes.status}`);
      }
  
      const telemetryData = await telemetryRes.json();
      res.status(200).json(telemetryData);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  }
  