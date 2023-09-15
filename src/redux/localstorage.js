// localStorage.js

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("items");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("items", serializedState);
    } catch (err) {
      // Handle errors, if any
    }
  };
  