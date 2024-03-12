import React, { useState } from 'react';

const CropSelection = (props:any) => {
  const crops = ['Show', 'crop']; // Add your crop options

  const handleChange = (e:any) => {
    props.onSelectCrop(e.target.value);
  };

  return (
    <div>
      <label>Select Crop:</label>
      <select onChange={handleChange}>
        {crops.map((crop) => (
          <option key={crop} value={crop}>
            {crop}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CropSelection;
