import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { position, company, industry } = req.body;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        position,
        company,
        industry,
        lastUpdated: new Date(),
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error('LinkedIn data update error:', error);
    return res.status(500).json({ error: 'Failed to update LinkedIn data' });
  }
}