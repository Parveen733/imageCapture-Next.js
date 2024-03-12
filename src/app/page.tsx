'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import CropSelection from './components/cropSelection';
import ImageCapture from './components/imageCapture';
import PastReport from './components/pastReport';
// import LoadingAnimation from '../components/LoadingAnimation';
import ReportView from './components/reportView';
import {sendImageToAPI} from './services/api';


interface PageData {
  selectedCrop: string; // Currently selected crop
  isProcessing: boolean; // Flag indicating image processing status
  reportData?: any; // Holds report data if available
  error?: string; // Optional error message for API calls or image processing
}

export default function Home()  {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [reportData, setReportData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle crop selection, image capture, and report generation logic here
  // (would involve API calls and state updates)
  const handleImageCapture = async (imageData: string | Blob) => {
      setIsProcessing(true);
      setError(null); // Clear any previous error
  
      try {
        // Replace with your actual API endpoint and data formatting
        const response = await sendImageToAPI(
          imageData, // Adjust based on image data type (base64 or Blob)
        );
  
        setReportData(response.data);
      } catch (error) {
        console.error('Error generating report:', error);
        setError('Failed to generate report. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    };

  return (
    <div>
      <header>
        {/* Header component */}
      </header>
      <main>
        <CropSelection crops={['show Data','crop']} onSelectCrop={(value:any)=>setSelectedCrop(value)} />
        {selectedCrop=="crop" ? (
          <>
            <ImageCapture onImageCaptured={handleImageCapture} />
            {isProcessing}
            {reportData && <ReportView crop={selectedCrop} {...reportData} />}
          </>
        ):<PastReport/>}
        
      </main>
      <footer>
        {/* Footer component */}
      </footer>
    </div>
  );

}