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
  if (!body) {
    return {}
  }

  if (typeof body === 'string') {
    return JSON.parse(body)
  }

  return body
}

function buildHtml({ name, email, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #fffdfc; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e8ddd9; border-radius: 20px; padding: 28px;">
        <p style="margin: 0 0 12px; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; color: #7a0f16;">New Contact Message</p>
        <h1 style="margin: 0 0 20px; font-size: 28px; line-height: 1.1; color: #111827;">You have a new message from ${safeName}</h1>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px 0; width: 120px; color: #6b7280;">Name</td>
            <td style="padding: 10px 0; font-weight: 600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; width: 120px; color: #6b7280;">Email</td>
            <td style="padding: 10px 0; font-weight: 600;">${safeEmail}</td>
          </tr>
        </table>
        <div style="border-top: 1px solid #f0e4e0; padding-top: 18px;">
          <p style="margin: 0 0 10px; color: #6b7280;">Message</p>
          <div style="font-size: 15px; white-space: normal;">${safeMessage}</div>
        </div>
      </div>
    </div>
  `
}

export default async function handler(req, res) {
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

  const response = await fetch('https://api.resend.com/emails', {
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

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    return res.status(502).json({
      error: result?.message || result?.error || 'Failed to send email.',
    })
  }

  return res.status(200).json({
    message: 'Pesan berhasil dikirim ke email tujuan.',
    id: result?.id ?? null,
  })
}
