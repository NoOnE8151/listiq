import { verifyWebhook } from '@clerk/backend/webhooks'

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req)
    console.log("web hook event: ", evt)

    if (evt.type === 'user.created') {
      const { id, email_addresses, first_name, last_name } = evt.data

      console.log(`New user created: ${id}`)
    }

    return new Response('Webhook processed', { status: 200 })
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return new Response('Invalid webhook', { status: 400 })
  }
}