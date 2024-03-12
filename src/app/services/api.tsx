// services/api.js
const apiUrl = 'http://localhost:3001/api'; // Update with your back-end URL

const sendImageToAPI = async (imageData:any) => {
  try {
    const response = await fetch(`${apiUrl}/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageData }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending image to API:', error);
    throw error;
  }
};

export const getAllReport = async () => {
    try {
      const response = await fetch(`${apiUrl}/get-all-report`, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending image to API:', error);
      throw error;
    }
  };

export const getReport = async (id:Number) => {
    try {
      const response = await fetch(`${apiUrl}/get-report/${id}`, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending image to API:', error);
      throw error;
    }
  };

export { sendImageToAPI };
