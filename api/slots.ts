import type { VercelRequest, VercelResponse } from '@vercel/node';

const CALCOM_API_BASE = 'https://api.cal.com/v2';
const API_KEY = process.env.CALCOM_API_KEY;

const calcomApiCall = async (endpoint: string) => {
  const url = `${CALCOM_API_BASE}${endpoint}`;

  console.log('Cal.com v2 API call URL:', url);

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'cal-api-version': '2024-09-04',
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

    // Use v2 endpoint with both start and end parameters
    const response = await calcomApiCall(
      `/slots?eventTypeId=${eventTypeId}&start=${date}&end=${date}`
    );

    console.log('Cal.com slots response:', JSON.stringify(response, null, 2));

    // Cal.com v2 returns slots in this format: { data: { "2025-09-29": [slot1, slot2] } }
    const slotsData = response.data || {};
    const dateKey = Object.keys(slotsData)[0]; // Get first date key
    const slotsArray = dateKey ? slotsData[dateKey] : [];

    console.log('Slots array:', JSON.stringify(slotsArray.slice(0, 2), null, 2)); // Log first 2 slots

    // Format slots for frontend - try different possible slot properties
    const slots = slotsArray.map((slot: any) => {
      console.log('Processing slot:', slot);
      
      // Try different possible time properties
      const timeValue = slot.time || slot.start || slot.startTime || slot.dateTime;
      
      if (!timeValue) {
        console.error('No time property found in slot:', slot);
        return {
          time: "No time data",
          available: slot.available !== false,
          iso: null
        };
      }

      try {
        const time = new Date(timeValue);
        return {
          time: time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
          }),
          available: slot.available !== false,
          iso: timeValue
        };
      } catch (error) {
        console.error('Error parsing time:', timeValue, error);
        return {
          time: `Invalid: ${timeValue}`,
          available: slot.available !== false,
          iso: timeValue
        };
      }
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
