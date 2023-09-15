import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { loadState, saveState } from "./localstorage"; // Import your localStorage utility

// Load persisted state from localStorage
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
  preloadedState: persistedState, // Set the preloaded state
});

// Subscribe to store changes to save the state
store.subscribe(() => {
  saveState(store.getState());
});
