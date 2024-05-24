import {useState } from "react";

const useFormMultipart = (initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState(null);

  const handleChangeFiles = (files) => {
    if (!Array.isArray(files)) {
      setPhotos([...files]);
    } else {
      setPhotos(files);
    }
  };

  const handleDateChange = (date) => {
    let day = date.day;
    let month = date.month - 1;
    const year = date.year;
    const newDate = new Date(year, month, day);
    setDate(newDate);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const clearForm = () => {
    setData(initialState);
  };

  return {
    handleChangeFiles,
    handleChange,
    handleDateChange,
    clearForm,
    data,
    photos,
    date,
    setData,
    setDate
  };
};

export default useFormMultipart;
