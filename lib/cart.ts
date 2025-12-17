export const cart = {
  items: [
    {
      id: "product1",
      name: "Product 1",
      price: 100,
      quantity: 1,
      description: "Product 1 description",
    },
    {
      id: "product2",
      name: "Product 2",
      price: 200,
      quantity: 1,
      description: "Product 2 description",
    },
    {
      id: "product3",
      name: "Product 3",
      price: 300,
      quantity: 1,
      description: "Product 3 description",
    },
    {
      id: "product4",
      name: "Product 4",
      price: 400,
      quantity: 1,
      description: "Product 4 description",
    },
  ],
};

export const getCart = async () => {
  return cart;
};

export const getProductById = async (id: string) => {
  return cart.items.find((item) => item.id === id);
};
