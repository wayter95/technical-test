export interface IProductCartModel {
  id: string,
  name: string,
  description: string,
  photoUrl: string,
  value: number,
  discountPercentage: number,
  freightValue: number,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
  amount?: number;
}

export const addToCart = (product: IProductCartModel) => {
  const cart = JSON.parse(localStorage.getItem('@TECHNICALTEST:cart') || '[]');

  const foundProduct = cart.find((item: IProductCartModel) => item.id === product.id);
  if (foundProduct) {
    foundProduct.amount += 1;
  } else {
    product.amount = 1;
    cart.push(product);
  }
  localStorage.setItem('@TECHNICALTEST:cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  const cart = JSON.parse(localStorage.getItem('@TECHNICALTEST:cart') || '[]');
  const newCart = cart.filter((item: IProductCartModel) => item.id !== productId);
  localStorage.setItem('@TECHNICALTEST:cart', JSON.stringify(newCart));
};

export const updateProductAmount = (productId: string, quantity: number) => {
  const cart = JSON.parse(localStorage.getItem('@TECHNICALTEST:cart') || '[]');
  const product = cart.find((item: IProductCartModel) => item.id === productId);
  if (product) {
    product.amount = quantity;
    localStorage.setItem('@TECHNICALTEST:cart', JSON.stringify(cart));
  }
};

export const getCart = (): IProductCartModel[] => {
  return JSON.parse(localStorage.getItem('@TECHNICALTEST:cart') || '[]');
};
