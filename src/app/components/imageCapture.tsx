import React, { useState, useRef } from 'react';
import Webcam,{WebcamProps} from 'react-webcam';


const ImageCapture = function ImageCapture(props:any){
  
  
  const webcamRef = useRef<Webcam>(null);
  const [isCapturing, setIsCapturing] = useState(true);

  const handleCapture = async () => {
    setIsCapturing(false);
    const image = await webcamRef.current?.getScreenshot();
    console.log("=====================ImageCapture=======================",image)
    console.log();
    
    props.onImageCaptured(image); // Pass base64-encoded image data
    setIsCapturing(true);
  };

  return (
    <div>
    
        <button onClick={handleCapture}>Capture Image</button>
      
      {isCapturing && <Webcam audio={false} ref={webcamRef} />}
    </div>
  );
};

export default ImageCapture;
