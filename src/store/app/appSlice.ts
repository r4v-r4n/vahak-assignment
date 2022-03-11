import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type InitialState = {
	status: 'idle' | 'loading' | 'failed';
	step: string;
	activeStepNumber: number;
	journeyDetails: {
		source: string;
		destination: string;
		travellers: string;
		carType: string;
	};
	bidDetails: {
		name: string;
		mobile: string;
		price: string;
		remarks: string;
	};
};

const initialState: InitialState = {
	status: 'idle',
	activeStepNumber: 0,
	step: 'Place your bid (1/4 Step)',
	journeyDetails: { source: '', destination: '', travellers: '', carType: '' },
	bidDetails: { name: '', mobile: '', price: '', remarks: '' },
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		stepReducer: (state, action) => {
			state.step = action.payload;
		},

		incrementStep: (state) => {
			state.activeStepNumber = state.activeStepNumber + 1;
		},

		decrementStep: (state) => {
			state.activeStepNumber = state.activeStepNumber - 1;
		},

		journeyDetailsReducer: (state, action) => {
			state.journeyDetails = action.payload;
		},

		bidDetailsReducer: (state, action) => {
			state.bidDetails = action.payload;
		},
	},
});

// exporting reducer so that we can dispatch this in desired page(s) which then will trigger associated action with the reducer
export const { stepReducer, journeyDetailsReducer,incrementStep,decrementStep,bidDetailsReducer } = appSlice.actions;

// exporting the app data object for consumption by page(s)
export const appDataInReduxStore = (state: RootState) => state.app;

// exporting the entire slice
export default appSlice.reducer;
