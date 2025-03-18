import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { registerForEvent } from '../../../lib/api';

export default withApiAuthRequired(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const session = getSession(req, res);
    const { eventId, additionalInfo } = req.body;
    
    if (!eventId) {
      return res.status(400).json({ error: 'Event ID is required' });
    }
    
    const result = await registerForEvent({
      userId: session.user.sub,
      eventId,
      additionalInfo,
    });
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Event registration error:', error);
    return res.status(500).json({ error: 'Failed to register for event' });
  }
});