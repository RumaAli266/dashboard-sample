// src/features/customization/customizationSlice.ts
import { createSlice ,PayloadAction } from '@reduxjs/toolkit';
import config from '../../config';

export interface customizationType{
  isOpen: number[]
  defaultId: number;
  fontFamily: string;
  borderRadius: number;
  opened: boolean,
  navType:string;
};

const initialState:customizationType= {
    isOpen: [], // for active default menu
    defaultId: 0,
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    navType:"light"
  }



const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    menuOpen: (state, action:PayloadAction<number>) => {
      const id = action.payload;
      state.isOpen = [id];
    },
    setMenu: (state, action) => {
      state.opened = action.payload;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  menuOpen,
  setMenu,
  setFontFamily,
  setBorderRadius,
} = customizationSlice.actions;

export default customizationSlice.reducer;
