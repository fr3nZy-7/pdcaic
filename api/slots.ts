import type { VercelRequest, VercelResponse } from '@vercel/node';

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const API_KEY = process.env.CALCOM_API_KEY;

const calcomApiCall = async (endpoint: string) => {
    const url = `${CALCOM_API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}apiKey=${API_KEY}`;
  
    console.log('Cal.com slot API call URL:', url);
  
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'cal-api-version': '2024-06-14',
      },
    });
  
    if (!response.ok) {
      // Log full error response body for debugging
      const errorBody = await response.json().catch(() => ({ message: 'Cal.com API call failed' }));
      console.error('Cal.com API error response:', errorBody);
      throw new Error(errorBody.message || `HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  };

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
