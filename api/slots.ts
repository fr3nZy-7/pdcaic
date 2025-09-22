import type { VercelRequest, VercelResponse } from '@vercel/node';

const CALCOM_API_BASE = 'https://api.cal.com/v2'; // Changed to v2
const API_KEY = process.env.CALCOM_API_KEY;

const calcomApiCall = async (endpoint: string) => {
  const url = `${CALCOM_API_BASE}${endpoint}`;

  console.log('Cal.com v2 API call URL:', url);

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`, // Changed to Bearer auth
      'Content-Type': 'application/json',
      'cal-api-version': '2024-09-04', // Updated version
    },
  });

  console.log('Cal.com API response status:', response.status);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'Cal.com API call failed' }));
    console.error('Cal.com API error response:', errorBody);
    throw new Error(errorBody.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { eventTypeId, date } = req.query;

    console.log('Fetching slots for eventTypeId:', eventTypeId, 'date:', date);

    if (!eventTypeId || !date || Array.isArray(eventTypeId) || Array.isArray(date)) {
      return res.status(400).json({
        success: false,
        error: 'eventTypeId and date are required and must be single strings'
      });
    }

    if (!API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Cal.com API key not configured'
      });
    }

    // Use v2 endpoint with correct parameters
    const response = await calcomApiCall(
      `/slots?start=${date}&eventTypeId=${eventTypeId}`
    );

    // Format slots for frontend (v2 API returns different structure)
    const slots = Object.values(response.data || {}).flat().map((slot: any) => {
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