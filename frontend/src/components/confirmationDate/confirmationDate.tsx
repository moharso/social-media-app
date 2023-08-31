import React, {useState, useEffect} from "react";

const ConfirmationDate: React.FC = () => {
  const [postDate, setPostDate] = useState<string | null>(null);

  useEffect(() => {
    const storedPostDate = localStorage.getItem('postDate');
    if (storedPostDate) {
      setPostDate(storedPostDate);
    }
  }, []);

  const formattedValue = postDate
    ? new Date(postDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
    : "";

  return <span>{formattedValue}</span>;
};

export default ConfirmationDate;
