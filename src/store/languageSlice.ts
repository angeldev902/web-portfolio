import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = 'es' | 'en';

const initialState = {
  lang: 'es' as Language,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
