import React, { useEffect, useState } from 'react';

const ConfirmationDate: React.FC = () => {
    const [formattedValue, setFormattedValue] = useState<string | null>(null);

  useEffect(() => {
    const getLastItemFromLocalStorage = () => {
      const localStorageData = localStorage.getItem("posted");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          return parsedData[parsedData.length - 1];
        }
      }
      return null;
    };

    const lastItem = getLastItemFromLocalStorage();

    if (lastItem && lastItem.hasOwnProperty("start")) {
      const date = new Date(lastItem["start"]);
      const formattedDate = `${date.toISOString().slice(0, 10)} ${date.toTimeString().slice(0, 5)}`;
      setFormattedValue(formattedDate);
    }
  }, []);

  return (
    <div>
        <p>{formattedValue}</p>
    </div>
  );
};

export default ConfirmationDate;
