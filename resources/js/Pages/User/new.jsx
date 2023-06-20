import React, { useState } from 'react';

const MyForm = () => {
  const [selectedData, setSelectedData] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [collectedData, setCollectedData] = useState([]);

  const handleSelectedDataChange = (e) => {
    setSelectedData(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddClick = () => {
    const newData = {
      selectedData,
      name,
      phone,
    };

    setCollectedData((prevData) => [...prevData, newData]);
    setSelectedData('');
    setName('');
    setPhone('');
  };

  return (
    <div>
      <select value={selectedData} onChange={handleSelectedDataChange}>
        {/* options for the select input */}
      </select>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={phone} onChange={handlePhoneChange} />
      <button onClick={handleAddClick}>Add</button>

      {/* Render the collected data */}
      {collectedData.map((data, index) => (
        <div key={index}>
          <p>Selected Data: {data.selectedData}</p>
          <p>Name: {data.name}</p>
          <p>Phone: {data.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default MyForm;
