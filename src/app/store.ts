// // src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/rootReducer';

export const store = configureStore({
  reducer: {
    rootReducer: rootReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// // src/app/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../features/rootReducer'; // Create a root reducer to combine all feature-specific reducers

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
