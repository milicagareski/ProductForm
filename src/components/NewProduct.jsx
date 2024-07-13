import { makeAutoObservable } from 'mobx';

class NewProduct {
  title = '';
  price = '';
  quantity = '';
  description = '';
  status = '';

  validateTitle = '';
  validatePrice = '';
  validateQuantity = '';
  validateDescription = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }

  setPrice(price) {
    this.price = price;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  setDescription(description) {
    this.description = description;
  }

  validateForm() {
    return (
      this.title.trim() !== '' &&
      this.price.trim() !== '' &&
      this.quantity.trim() !== '' &&
      this.description.trim() !== ''
    );
  }

  async submitForm() {
    if (!this.validateForm()) {
      this.status = 'Fill out all fields';
      return;
    }
    this.status = 'Submitting';
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.status = 'New product added';
    } catch (error) {
      this.status = 'Error creating product';
    }
  }
}

const newProduct = new NewProduct();
export default newProduct;
console.log(newProduct);
