import { useState } from "react";

const useForm = (initialState = {}) => {
  const [data, setData] = useState(initialState);

  const resetForm = () => {
    setData(initialState);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return {data, handleInputChange, resetForm};
};

export default useForm;
