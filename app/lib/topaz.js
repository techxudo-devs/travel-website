import "server-only";

const topazBaseUrl = process.env.TOPAZ_BASE_URL;
const topazClientId = process.env.TOPAZ_CLIENT_ID;
const topazPassword = process.env.TOPAZ_PASSWORD;

let cachedToken = null;
let tokenExpiresAt = 0;

function assertTopazConfig() {
  if (!topazBaseUrl || !topazClientId || !topazPassword) {
    throw new Error("Topaz configuration missing in environment variables.");
  }
}

async function requestTopazToken() {
  assertTopazConfig();

  const response = await fetch(`${topazBaseUrl}/TLService/api/AuthenticateUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      clientID: topazClientId,
      Password: topazPassword,
      grant_type: "password",
    }),
  });

  if (!response.ok) {
    throw new Error("Topaz authentication failed.");
  }

  const data = await response.json();
  if (!data?.access_token || !data?.expires_in) {
    throw new Error("Topaz authentication response invalid.");
  }

  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + Number(data.expires_in) * 1000;

  return cachedToken;
}

export async function getTopazToken() {
  if (cachedToken && Date.now() < tokenExpiresAt - 30000) {
    return cachedToken;
  }

  return requestTopazToken();
}

export async function processTopazPayment(payload) {
  assertTopazConfig();
  const token = await getTopazToken();

  const response = await fetch(
    `${topazBaseUrl}/api/Integration/ProcessPayment`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.MessageDescription || "Topaz payment failed.");
  }

  return data;
}
