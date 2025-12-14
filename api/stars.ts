import type { VercelRequest, VercelResponse } from '@vercel/node';

// Using CountAPI - a free service for persistent counters
// Replace 'kasfi-portfolio' with your unique namespace
const COUNT_API_NAMESPACE = 'kasfi-portfolio';
const COUNT_API_KEY = 'portfolio-stars';

const COUNT_API_URL = `https://api.countapi.xyz`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Get current star count from CountAPI
      const response = await fetch(
        `${COUNT_API_URL}/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
      );
      
      if (!response.ok) {
        // If counter doesn't exist, return 0
        return res.status(200).json({ count: 0 });
      }

      const data = await response.json();
      return res.status(200).json({ count: data.value || 0 });
    }

    if (req.method === 'POST') {
      // Increment star count via CountAPI
      const response = await fetch(
        `${COUNT_API_URL}/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
      );

      if (!response.ok) {
        // If counter doesn't exist, create it and set to 1
        const createResponse = await fetch(
          `${COUNT_API_URL}/create?namespace=${COUNT_API_NAMESPACE}&key=${COUNT_API_KEY}&value=1`
        );
        
        if (createResponse.ok) {
          return res.status(200).json({ count: 1, success: true });
        }
        
        throw new Error('Failed to create counter');
      }

      const data = await response.json();
      return res.status(200).json({ count: data.value || 0, success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('CountAPI error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}

