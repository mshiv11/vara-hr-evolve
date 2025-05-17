
import { useEffect } from "react";
import MainLayout from "@/components/MainLayout";

const RequestDemo = () => {
  useEffect(() => {
    // Use Cal.com to open the scheduling dialog when the page loads
    if (window.Cal) {
      window.Cal.ns.vara("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
      
      // Open the Cal.com modal programmatically
      window.Cal.ns.vara("showModal", {
        calLink: "mshiv/vara",
        config: {
          layout: "month_view"
        }
      });
    }
  }, []);

  return (
    <MainLayout>
      <div className="container py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Request a Demo</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo to see how VaraHR can transform your recruitment process.
        </p>
        
        <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-sm">
          <p className="mb-4">
            If the calendar doesn't open automatically, please click the button below:
          </p>
          <button 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
            data-cal-link="mshiv/vara" 
            data-cal-namespace="vara" 
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestDemo;
