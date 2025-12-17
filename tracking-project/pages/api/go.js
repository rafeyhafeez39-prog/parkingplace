export default async function handler(req, res) {
  const trackingId = req.query.id || "unknown";

  const userAgent = req.headers["user-agent"] || "unknown";
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "unknown";

  const isMobile = /mobile/i.test(userAgent) ? "mobile" : "desktop";

  const data = {
    tracking_id: trackingId,
    time: new Date().toISOString(),
    ip,
    user_agent: userAgent,
    device: isMobile
  };

  console.log(data);

  res.writeHead(302, {
    Location: "https://example.com"
  });
  res.end();
}
