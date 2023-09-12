function addToLocalStorage(item) {
  let storedData = localStorage.getItem("cart") || "[]";

  storedData = JSON.parse(storedData);

  storedData.push(...item);

  localStorage.setItem("cart", JSON.stringify(storedData));
}

function removeFromLocalStorage(itemId) {
  let storedData = localStorage.getItem("cart") || "[]";

  storedData = JSON.parse(storedData);

  const updatedData = storedData.filter((item) => item.id !== itemId);

  localStorage.setItem("cart", JSON.stringify(updatedData));
}

function getFromLocalStorage(key) {
  const storedData = localStorage.getItem(key) || "[]";

  return JSON.parse(storedData);
}

export { addToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
