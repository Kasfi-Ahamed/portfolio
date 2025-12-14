import type { VercelRequest, VercelResponse } from '@vercel/node';
import { kv } from '@vercel/kv';

const STAR_COUNT_KEY = 'portfolio:star-count';

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
      // Get current star count from Vercel KV
      const count = await kv.get<number>(STAR_COUNT_KEY);
      return res.status(200).json({ count: count || 0 });
    }

    if (req.method === 'POST') {
      // Increment star count in Vercel KV
      // This is atomic - perfect for counters
      const newCount = await kv.incr(STAR_COUNT_KEY);
      return res.status(200).json({ count: newCount, success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Vercel KV error:', error);
    
    // Fallback: if KV is not set up, return error message
    if (error instanceof Error && error.message.includes('KV')) {
      return res.status(503).json({ 
        error: 'Database not configured. Please set up Vercel KV.',
        count: 0 
      });
    }
    
    return res.status(500).json({ error: 'Failed to process request', count: 0 });
  }
}

