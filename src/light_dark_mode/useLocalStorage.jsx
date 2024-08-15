import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Initialize state with a function to get the initial value from localStorage
  // If there's no value in localStorage, fall back to initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Retrieve the item from localStorage
      const item = window.localStorage.getItem(key);
      // If item exists, parse it as JSON; otherwise, use initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Log any errors and fall back to initialValue
      console.error("Error retrieving localStorage item:", error);
      return initialValue;
    }
  });

  // Use useEffect to update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      // Convert storedValue to JSON and save it to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Log any errors that occur while setting localStorage
      console.error("Error setting localStorage item:", error);
    }
  }, [key, storedValue]); // Dependency array ensures effect runs on key or storedValue change

  // Return the current value and a function to update it
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
