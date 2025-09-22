import type { VercelRequest, VercelResponse } from '@vercel/node';

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const API_KEY = process.env.CALCOM_API_KEY;

// Cal.com API helper
const calcomApiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${CALCOM_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'cal-api-version': '2024-06-14',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Cal.com API call failed' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    if (!API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Cal.com API key not configured'
      });
    }

    const response = await calcomApiCall('/event-types');
    const eventTypes = response.event_types || [];

    // Filter out "Visit to Other Clinic" from public booking
    const publicEventTypes = eventTypes.filter((event: any) => 
      !event.title.toLowerCase().includes('visit to other clinic') &&
      !event.title.toLowerCase().includes('other clinic')
    );

    return res.status(200).json({
      success: true,
      data: publicEventTypes
    });

  } catch (error) {
    console.error('Cal.com event types error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch event types from Cal.com'
    });
  }
}
