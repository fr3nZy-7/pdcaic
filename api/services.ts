import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;



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
    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'Supabase configuration missing' 
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get active services for booking dropdown
    const { data: services, error } = await supabase
      .from('services')
      .select('id, title, short_description, duration_minutes')
      .eq('is_active', true)
      .order('title');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch services'
      });
    }

    return res.status(200).json({
      success: true,
      data: services || []
    });

  } catch (error) {
    console.error('Services API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}


console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY);
