// src/features/rootReducer.ts
import { combineReducers } from 'redux';
import customizationReducer from './customization/customizationSlice';

const rootReducer = combineReducers({
  customization: customizationReducer,
});

export default rootReducer;
