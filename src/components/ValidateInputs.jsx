import { useState } from 'react';

function useValidateInputs() {
  const [errors, setErrors] = useState({
    title: '',
    price: '',
    quantity: '',
    description: '',
  });

  function validateField(iName, field) {
    let error = '';

    if (iName == 'title') {
      if (!field.trim()) {
        error = 'Title is required';
      }
    } else if (iName == 'price') {
      if (field <= 0) {
        error = 'Price must be bigger than 0';
      }
    } else if (iName == 'quantity') {
      if (field <= 0) {
        error = 'Quantity must be bigger than 0';
      }
    } else if (iName == 'description') {
      if (!field.trim()) {
        error = 'Description is required';
      }
    }
    setErrors((prevState) => ({ ...prevState, [iName]: error }));
  }
  return { errors, validateField };
}

export default useValidateInputs;
