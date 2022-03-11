import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type InitialState = {
	status: 'idle' | 'loading' | 'failed';
	step: string;
};

const initialState: InitialState = {
	status: 'idle',
	step: 'Place your bid (1/4 Step)',
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload;
		},
	},
});

// exporting reducer so that we can dispatch this in desired page(s) which then will trigger associated action with the reducer
export const { setStep } = appSlice.actions;

// exporting the app data object for consumption by page(s)
export const appDataInReduxStore = (state: RootState) => state.app;

// exporting the entire slice
export default appSlice.reducer;
