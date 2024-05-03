import { useState } from "react";

const useFormMultipart = (initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [photos, setPhotos] = useState([]);

  const handleChangeFiles = (files) => {
    setPhotos(files);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(evt.target);
    setData({
      ...data,
      [name]: value,
    });
  };

  return { handleChangeFiles, handleChange, data, photos };
};

export default useFormMultipart;
