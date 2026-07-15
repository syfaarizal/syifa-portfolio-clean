const DEFAULT_TO_EMAIL = 'syifairgi@gmail.com'
const DEFAULT_FROM_EMAIL = 'Syifa Portfolio <onboarding@resend.dev>'

function isValidFromField(value) {
  if (typeof value !== 'string') {
    return false
  }
  const trimmed = value.trim()
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ||
    /^.+ <[^\s@<>]+@[^\s@<>]+>$/.test(trimmed)
  )
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function parseBody(body) {
  if (!body) return {}
  if (typeof body === 'string') return JSON.parse(body)
  return body
}

function buildHtml({ name, email, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:Arial,sans-serif;">
  <div style="max-width:640px;margin:40px auto;background:#fff;border:1px solid #e8ddd9;border-radius:20px;overflow:hidden;">
    <div style="background:#7A0F16;padding:16px 28px;">
      <p style="margin:0;color:#fff;font-size:11px;letter-spacing:.18em;text-transform:uppercase;">New Contact Message</p>
    </div>
    <div style="padding:28px;">
      <h1 style="margin:0 0 24px;font-size:26px;color:#111827;">You have a new message from ${safeName}</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr><td style="padding:8px 0;color:#6b7280;width:80px;">Name</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:${safeEmail}" style="color:#7A0F16;">${safeEmail}</a></td></tr>
      </table>
      <div style="border-top:1px solid #f0e4e0;padding-top:18px;">
        <p style="margin:0 0 8px;color:#6b7280;font-size:13px;">Message</p>
        <div style="font-size:15px;line-height:1.7;color:#374151;">${safeMessage}</div>
      </div>
    </div>
  </div>
</body>
</html>`
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured.' })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL
  const fromEmail = isValidFromField(process.env.CONTACT_FROM_EMAIL)
    ? process.env.CONTACT_FROM_EMAIL.trim()
    : DEFAULT_FROM_EMAIL

  let payload
  try {
    payload = parseBody(req.body)
  } catch {
    return res.status(400).json({ error: 'Invalid request body.' })
  }

  const name = String(payload?.name ?? '').trim()
  const email = String(payload?.email ?? '').trim()
  const message = String(payload?.message ?? '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email address is invalid.' })
  }

  let response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject: `New contact message from ${name}`,
        html: buildHtml({ name, email, message }),
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    })
  } catch (fetchErr) {
    return res.status(502).json({ error: 'Failed to reach email service. Please try again.' })
  }

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    return res.status(502).json({
      error: result?.message || result?.error || 'Failed to send email.',
    })
  }

  return res.status(200).json({
    message: "Message sent successfully. I'll get back to you as soon as I can!",
    id: result?.id ?? null,
  })
}
