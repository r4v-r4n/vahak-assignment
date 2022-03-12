import { createSlice } from '@reduxjs/toolkit';
import { BidDetailsTypes, JourneyDetailsTypes } from 'components/form/FormTypes';
import { RootState } from '..';

type InitialState = {
	status: 'idle' | 'loading' | 'failed';
	step: { stepNumber: number; message: string };
	journeyDetails: JourneyDetailsTypes;
	bidDetails: BidDetailsTypes;
};

const initialState: InitialState = {
	status: 'idle',
	step: {
		stepNumber: 1,
		message: 'Place your Bid',
	},
	journeyDetails: { source: '', destination: '', travellers: '', carType: '' },
	bidDetails: { name: '', mobile: '', price: '', remarks: '', isRateNegotiable: false, getUpdates: false },
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		stepReducer: (state, action) => {
			state.step = action.payload;
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
export const {
	stepReducer,
	journeyDetailsReducer,

	bidDetailsReducer,
} = appSlice.actions;

// exporting the app data object for consumption by page(s)
export const appDataInReduxStore = (state: RootState) => state.app;

// exporting the entire slice
export default appSlice.reducer;
