// Function to add an item to a JSON array stored in localStorage.
function addToLocalStorage(item) {
  // Retrieve the existing data from localStorage or initialize with an empty array if no data exists.
  let storedData = localStorage.getItem("cart") || "[]";

  // Parse the JSON string from localStorage into a JavaScript array.
  storedData = JSON.parse(storedData);

  // Add the new item to the array.
  storedData.push(item);

  // Save the updated array back to localStorage by converting it back to a JSON string.
  localStorage.setItem("cart", JSON.stringify(storedData));
}

// Usage example:
// const newItem = { id: 1, name: 'Example Item' };
// addItemToArrayInLocalStorage('myData', newItem);

// Function to remove an item with a specific ID from a JSON array in localStorage.
function removeFromLocalStorage(itemId) {
  // Retrieve the existing data from localStorage or initialize with an empty array if no data exists.
  let storedData = localStorage.getItem("cart") || "[]";

  // Parse the JSON string from localStorage into a JavaScript array.
  storedData = JSON.parse(storedData);

  // Remove the item with the specified ID from the array using the filter method.
  const updatedData = storedData.filter((item) => item.id !== itemId);

  // Save the updated array back to localStorage by converting it back to a JSON string.
  localStorage.setItem("cart", JSON.stringify(updatedData));
}

// Usage example:
// const itemIdToRemove = 1;
// removeItemFromArrayInLocalStorage('myData', itemIdToRemove);

// Function to get items from a JSON array stored in localStorage.
function getFromLocalStorage(key) {
  // Retrieve the existing data from localStorage or initialize with an empty array if no data exists.
  const storedData = localStorage.getItem(key) || "[]";

  // Parse the JSON string from localStorage into a JavaScript array and return it.
  return JSON.parse(storedData);
}

// Usage example:
// const retrievedData = getItemsFromArrayInLocalStorage('myData');
// console.log(retrievedData);
