import React, { useState } from 'react';
import {
  Form,
  FormLayout,
  TextField,
  Page,
  Card,
  Button,
} from '@shopify/polaris';
import newProduct from './NewProduct';
import { observer } from 'mobx-react-lite';
import useValidateInputs from './ValidateInputs';

const ProductForm = observer(() => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await newProduct.submitForm();
  };

  const { errors, validateField } = useValidateInputs();

  return (
    <Page title="New Product">
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Title"
              type="text"
              value={newProduct.title}
              onChange={(value) => newProduct.setTitle(value)}
              onBlur={() => {
                validateField('title', newProduct.title);
              }}
              error={errors.title}
            />
            <TextField
              label="Price"
              type="number"
              value={newProduct.price}
              onChange={(value) => newProduct.setPrice(value)}
              onBlur={() => {
                validateField('price', newProduct.price);
              }}
              error={errors.price}
            />
            <TextField
              label="Stock Quantity"
              type="number"
              value={newProduct.quantity}
              onChange={(value) => newProduct.setQuantity(value)}
              onBlur={() => {
                validateField('quantity', newProduct.quantity);
              }}
              error={errors.quantity}
            />
            <TextField
              label="Description"
              type="text"
              value={newProduct.description}
              onChange={(value) => newProduct.setDescription(value)}
              onBlur={() => {
                validateField('description', newProduct.description);
              }}
              error={errors.description}
              multiline={4}
            />
            <Button submit primary>
              Add new product
            </Button>
          </FormLayout>
        </Form>
        {newProduct.status && <p>{newProduct.status}</p>}
      </Card>
    </Page>
  );
});

export default ProductForm;

// export default function ProductForm() {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [description, setDescription] = useState('');

//   const [titleError, setTitleError] = useState('');
//   const [priceError, setPriceError] = useState('');
//   const [quantityError, setQuantityError] = useState('');
//   const [descriptionError, setDescriptionError] = useState('');

//   const validateTitle = () => {
//     if (!title) {
//       setTitleError('Title is required');
//       return false;
//     }
//     setTitleError('');
//     return true;
//   };

//   const validatePrice = () => {
//     if (price <= 0) {
//       setPriceError('Enter price bigger that 0');
//       return false;
//     }
//     setPriceError('');
//     return true;
//   };

//   const validateQuantity = () => {
//     if (quantity <= 0) {
//       setQuantityError('Quantity is required');
//       return false;
//     }
//     setQuantityError('');
//     return true;
//   };

//   const validateDescription = () => {
//     if (!description) {
//       setDescriptionError('Description is required');
//       return false;
//     }
//     setDescriptionError('');
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isTitleValid = validateTitle();
//     const isPriceValid = validatePrice();
//     const isQuantityValid = validateQuantity();
//     const isDescriptionValid = validateDescription();

//     if (isTitleValid && isDescriptionValid && isQuantityValid && isPriceValid) {
//       console.log('All inputs are valid');
//       setTitle('');
//       setPrice('');
//       setQuantity('');
//       setDescription('');
//     } else {
//       console.log('Inputs are not valid');
//     }
//   };

//   return (
//     <Page title="New Product">
//       <Card sectioned>
//         <Form onSubmit={handleSubmit}>
//           <FormLayout>
//             <TextField
//               label="Title"
//               type="text"
//               value={title}
//               onChange={(value) => setTitle(value)}
//               onBlur={validateTitle}
//               error={titleError}
//             />
//             <TextField
//               label="Price"
//               type="number"
//               value={price}
//               onChange={(value) => setPrice(value)}
//               onBlur={validatePrice}
//               error={priceError}
//             />
//             <TextField
//               label="Stock Quantity"
//               type="number"
//               value={quantity}
//               onChange={(value) => setQuantity(value)}
//               onBlur={validateQuantity}
//               error={quantityError}
//             />
//             <TextField
//               label="Description"
//               type="text"
//               value={description}
//               onChange={(value) => setDescription(value)}
//               onBlur={validateDescription}
//               error={descriptionError}
//             />
//             <Button submit primary>
//               Add new product
//             </Button>
//           </FormLayout>
//         </Form>
//       </Card>
//     </Page>
//   );
// }
