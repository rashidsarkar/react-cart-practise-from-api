const getStoredCard = () => {
  const storedString = localStorage.getItem("cart");
  if (storedString) {
    return JSON.parse(storedString);
  } else {
    return [];
  }
};
const saveCart = (item) => {
  const itemToString = JSON.stringify(item);
  localStorage.setItem("cart", itemToString);
};
const addItem = (item) => {
  const oldItem = getStoredCard();
  oldItem.push(item);
  saveCart(oldItem);
};

export { getStoredCard, saveCart, addItem };
