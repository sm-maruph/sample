// Function to get an array from localStorage
export const getArrayFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  try {
    return data ? JSON.parse(data) : []; // Return an empty array if nothing is stored
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return []; // Return an empty array if parsing fails
  }
};

// Function to save an array to localStorage
export const saveArrayToLocalStorage = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
};

// Function to add a new object to the array in localStorage
export const addObjectToLocalStorage = (newObject) => {
  const key = 'myObjectsArray'; // Key to use for localStorage

  // Retrieve the current array of objects from localStorage
  const storedArrayOfObjects = getArrayFromLocalStorage(key);

  // Ensure the storedArrayOfObjects is an array
  if (!Array.isArray(storedArrayOfObjects)) {
    console.error("storedArrayOfObjects is not an array");
    return;
  }

  // Update the array by adding the new object
  const updatedArray = [...storedArrayOfObjects, newObject];

  // Save the updated array back to localStorage
  saveArrayToLocalStorage(key, updatedArray);

  // Log the updated array to verify
  console.log(getArrayFromLocalStorage(key)); 
};

// Function to delete an object from the array in localStorage based on the index
export const deleteObjectFromLocalStorage = (key, index) => {
  // Retrieve the current array of objects from localStorage
  const storedArrayOfObjects = getArrayFromLocalStorage(key);

  // Ensure the storedArrayOfObjects is an array
  if (!Array.isArray(storedArrayOfObjects)) {
    console.error("storedArrayOfObjects is not an array");
    return;
  }

  // Ensure index is within the array bounds
  if (index < 0 || index >= storedArrayOfObjects.length) {
    console.error(`Index ${index} is out of bounds`);
    return;
  }

  // Remove the object at the specified index
  const updatedArray = [
    ...storedArrayOfObjects.slice(0, index),
    ...storedArrayOfObjects.slice(index + 1),
  ];

  // Save the updated array back to localStorage
  saveArrayToLocalStorage(key, updatedArray);

  // Log the updated array to verify
  console.log(`Object at index: ${index} has been deleted.`);
  console.log(getArrayFromLocalStorage(key)); 
};

// Function to clear the array in localStorage and reload the page
export const clearArrayAndHardReload = (key) => {
  // Clear the array in localStorage
  localStorage.removeItem(key);
  
  console.log(`Array with key "${key}" has been cleared.`);

  // Reload the page with cache disabled
  window.location.reload(true); // True indicates to reload from the server
};
