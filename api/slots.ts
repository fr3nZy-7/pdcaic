import type { VercelRequest, VercelResponse } from '@vercel/node';

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const API_KEY = process.env.CALCOM_API_KEY;

// Cal.com API helper
const calcomApiCall = async (endpoint: string) => {
  const response = await fetch(`${CALCOM_API_BASE}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'cal-api-version': '2024-06-14',
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
    const { eventTypeId, date } = req.query;

    if (!eventTypeId || !date) {
      return res.status(400).json({
        success: false,
        error: 'eventTypeId and date are required'
      });
    }

    if (!API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Cal.com API key not configured'
      });
    }

    // Get available slots from Cal.com
    const response = await calcomApiCall(
      `/slots/available?eventTypeId=${eventTypeId}&startTime=${date}T00:00:00.000Z&endTime=${date}T23:59:59.000Z`
    );

    // Format slots for frontend
    const slots = (response.slots || []).map((slot: any) => {
      const time = new Date(slot.time);
      return {
        time: time.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata'
        }),
        available: true,
        iso: slot.time
      };
    });

    return res.status(200).json({
      success: true,
      data: slots
    });

  } catch (error) {
    console.error('Slots API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch available slots'
    });
  }
}
