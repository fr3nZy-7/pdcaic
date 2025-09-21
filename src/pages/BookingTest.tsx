// src/pages/BookingTest.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from '@/components/BookingForm';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { 
  Calendar,
  TestTube,
  CheckCircle,
  XCircle,
  Settings
} from "lucide-react";
import { validateApiConnection, getEventTypes } from '@/lib/calcom-api';
import type { CalcomEventType, BookingSuccess } from '@/lib/types';

const BookingTest = () => {
  const [showModalForm, setShowModalForm] = useState(false);
  const [showPageForm, setShowPageForm] = useState(false);
  const [apiStatus, setApiStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [eventTypes, setEventTypes] = useState<CalcomEventType[]>([]);
  const [testResults, setTestResults] = useState<string[]>([]);

  // Test API connection
  const testApiConnection = async () => {
    setApiStatus('testing');
    setTestResults(['Testing Cal.com API connection...']);
    
    try {
      const isConnected = await validateApiConnection();
      
      if (isConnected) {
        setApiStatus('success');
        setTestResults(prev => [...prev, '✅ API connection successful']);
        
        // Get event types to show available events
        try {
          const types = await getEventTypes();
          setEventTypes(types);
          setTestResults(prev => [...prev, `✅ Found ${types.length} event types`]);
          
          if (types.length > 0) {
            setTestResults(prev => [...prev, 'Event types:', ...types.map(t => `  - ${t.title} (ID: ${t.id})`)]);
          }
        } catch (error) {
          setTestResults(prev => [...prev, '⚠️ Could not fetch event types']);
        }
      } else {
        setApiStatus('error');
        setTestResults(prev => [...prev, '❌ API connection failed']);
      }
    } catch (error) {
      setApiStatus('error');
      setTestResults(prev => [...prev, `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`]);
    }
  };

  // Handle successful booking
  const handleBookingSuccess = (booking: BookingSuccess) => {
    console.log('Booking successful:', booking);
    setTestResults(prev => [...prev, `✅ Booking created: ${booking.bookingId}`]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-shade">
              Booking System Test Page
            </h1>
            <p className="text-lg text-black/80">
              Test the booking form functionality and Cal.com API integration
            </p>
          </div>
        </div>
      </section>

      {/* Test Controls */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* API Test Section */}
            <GlassmorphismCard className="p-8 bg-primary/20 backdrop-blur-2xl shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-shade">
                  <Settings className="h-6 w-6" />
                  API Connection Test
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black/80">
                  First, test your Cal.com API connection and environment variables.
                </p>
                
                <Button
                  onClick={testApiConnection}
                  disabled={apiStatus === 'testing'}
                  className="bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold py-2 px-4 rounded-lg"
                >
                  {apiStatus === 'testing' ? (
                    <>
                      <TestTube className="h-4 w-4 mr-2 animate-pulse" />
                      Testing...
                    </>
                  ) : (
                    <>
                      <TestTube className="h-4 w-4 mr-2" />
                      Test API Connection
                    </>
                  )}
                </Button>

                {/* API Status */}
                {apiStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg border-l-4 ${
                    apiStatus === 'success' ? 'bg-green-50 border-green-500' :
                    apiStatus === 'error' ? 'bg-red-50 border-red-500' :
                    'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex items-center mb-2">
                      {apiStatus === 'success' && <CheckCircle className="h-5 w-5 text-green-600 mr-2" />}
                      {apiStatus === 'error' && <XCircle className="h-5 w-5 text-red-600 mr-2" />}
                      {apiStatus === 'testing' && <TestTube className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />}
                      
                      <span className={`font-medium ${
                        apiStatus === 'success' ? 'text-green-800' :
                        apiStatus === 'error' ? 'text-red-800' :
                        'text-blue-800'
                      }`}>
                        {apiStatus === 'success' && 'API Connected Successfully'}
                        {apiStatus === 'error' && 'API Connection Failed'}
                        {apiStatus === 'testing' && 'Testing Connection...'}
                      </span>
                    </div>
                    
                    <div className="text-sm space-y-1">
                      {testResults.map((result, index) => (
                        <div key={index} className="font-mono text-gray-700">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Environment Variables Check */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Environment Variables Status:</h4>
                  <div className="space-y-1 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      {import.meta.env.VITE_CALCOM_API_KEY ? 
                        <CheckCircle className="h-4 w-4 text-green-600" /> : 
                        <XCircle className="h-4 w-4 text-red-600" />
                      }
                      <span>VITE_CALCOM_API_KEY: {import.meta.env.VITE_CALCOM_API_KEY ? '✓ Set' : '✗ Missing'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {import.meta.env.VITE_CALCOM_EVENT_TYPE_ID ? 
                        <CheckCircle className="h-4 w-4 text-green-600" /> : 
                        <XCircle className="h-4 w-4 text-red-600" />
                      }
                      <span>VITE_CALCOM_EVENT_TYPE_ID: {import.meta.env.VITE_CALCOM_EVENT_TYPE_ID ? '✓ Set' : '✗ Missing'}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </GlassmorphismCard>

            {/* Form Test Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Modal Form Test */}
              <GlassmorphismCard className="p-6 bg-primary/30 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-shade">
                    <Calendar className="h-5 w-5" />
                    Modal Form Test
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-black/80">
                    Test the booking form as a modal popup (overlay).
                  </p>
                  
                  <Button
                    onClick={() => setShowModalForm(true)}
                    className="w-full bg-gradient-to-r from-[#23AAB9] to-[#0194C1] text-white font-semibold py-3 rounded-lg"
                  >
                    Open Modal Booking Form
                  </Button>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Pros:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>No page navigation</li>
                      <li>Overlay on current page</li>
                      <li>Good for quick bookings</li>
                    </ul>
                    <p><strong>Cons:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>Limited space on mobile</li>
                      <li>Can feel cramped</li>
                    </ul>
                  </div>
                </CardContent>
              </GlassmorphismCard>

              {/* Page Form Test */}
              <GlassmorphismCard className="p-6 bg-primary/30 backdrop-blur-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-shade">
                    <Calendar className="h-5 w-5" />
                    Page Form Test
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-black/80">
                    Test the booking form embedded in this page.
                  </p>
                  
                  <Button
                    onClick={() => setShowPageForm(!showPageForm)}
                    className="w-full bg-gradient-to-r from-[#0194C1] to-[#23AAB9] text-white font-semibold py-3 rounded-lg"
                  >
                    {showPageForm ? 'Hide' : 'Show'} Page Booking Form
                  </Button>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Pros:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>More space for form</li>
                      <li>Better mobile experience</li>
                      <li>Can add more context</li>
                    </ul>
                    <p><strong>Cons:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>Takes up page real estate</li>
                      <li>Might need scrolling</li>
                    </ul>
                  </div>
                </CardContent>
              </GlassmorphismCard>
            </div>

            {/* Page Form Display */}
            {showPageForm && (
              <div className="mt-8">
                <GlassmorphismCard className="bg-white/95 backdrop-blur-xl shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-shade">
                      Page-Embedded Booking Form
                    </CardTitle>
                    <p className="text-gray-600">
                      This is how the form looks when embedded directly in a page
                    </p>
                  </CardHeader>
                  <CardContent>
                    <BookingForm
                      showModal={false}
                      onSuccess={handleBookingSuccess}
                      onCancel={() => setShowPageForm(false)}
                    />
                  </CardContent>
                </GlassmorphismCard>
              </div>
            )}

            {/* Setup Instructions */}
            <GlassmorphismCard className="mt-8 p-6 bg-yellow-50/80 backdrop-blur-2xl shadow-lg border border-yellow-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-yellow-800">
                  Setup Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-yellow-800">
                <p><strong>1. Cal.com Setup:</strong></p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
                  <li>Go to cal.com and create account</li>
                  <li>Create "Dental Appointment" event type</li>
                  <li>Go to Settings → Developer → API Keys</li>
                  <li>Generate new API key</li>
                </ul>

                <p><strong>2. Find Event Type ID:</strong></p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
                  <li>Go to Event Types in your cal.com dashboard</li>
                  <li>Click on your "Dental Appointment" event</li>
                  <li>Look at the URL: /event-types/[NUMBER] ← that's your ID</li>
                </ul>

                <p><strong>3. Add to .env file:</strong></p>
                <div className="bg-yellow-100 p-3 rounded font-mono text-sm">
                  <div>VITE_CALCOM_API_KEY=your-api-key-here</div>
                  <div>VITE_CALCOM_EVENT_TYPE_ID=your-event-type-id-here</div>
                </div>

                <p className="text-sm">
                  <strong>Note:</strong> Restart your development server after adding environment variables!
                </p>
              </CardContent>
            </GlassmorphismCard>

          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showModalForm && (
        <BookingForm
          showModal={true}
          onSuccess={handleBookingSuccess}
          onCancel={() => setShowModalForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default BookingTest;