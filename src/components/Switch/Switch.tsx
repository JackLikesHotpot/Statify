import React, { useState } from 'react';


interface SwitchProps {
  isChecked: boolean; // State controlled by the parent
  onToggle: (isChecked: boolean) => void; // Function to update the state in the parent
}

const Switch: React.FC<SwitchProps> = ({isChecked, onToggle}) => {
  const handleCheckboxChange = () => {
    onToggle(!isChecked); // Notify the parent to update the state
  };
  return (
    <div className="flex text-center items-center mt-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label>{isChecked ? 'Tracks' : 'Artists'}</label>
    </div>
  );
}

export default Switch;