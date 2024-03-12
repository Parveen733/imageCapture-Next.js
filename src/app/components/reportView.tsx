import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

interface ReportData {
  crop: string; // Crop selected
  // Other report data fields based on your analysis
  error?: string; // Optional error message for failed image processing
}

const ReportView: React.FC<ReportData> = ({ crop, ...reportData }) => {

  const styles = StyleSheet.create({
    page: { padding: 20, fontFamily: 'Helvetica' },
    image: { width: 150, height: 150 },
    errorContainer: { border: '1px solid red', padding: 10, margin: 20 },
  });

  console.log("imaa")
  return (
    <Document>
      <Page style={styles.page}>
        {reportData.error ? (
          <View style={styles.errorContainer}>
            <Text>Error: {reportData.error}</Text>
          </View>
        ) : (
          <>
            <Text>Crop: {crop}</Text>
            {/* Display other report data fields here */}
            <View style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              <Image src="data:image/jpeg;base64,YOUR_ENCODED_IMAGE_DATA"  style={styles.image} />
            </View>
          </>
        )}
      </Page>
    </Document>
  );
};

export default ReportView;
