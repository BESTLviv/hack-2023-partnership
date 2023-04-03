import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface FormState {
    companyName: string;
    email: string;
    isPartner: boolean;
}

const initialState: FormState = {
    companyName: '',
    email: '',
    isPartner: false,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateCompanyName(state, action: PayloadAction<string>) {
            state.companyName = action.payload;
        },
        updateEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        togglePartner(state) {
            state.isPartner = !state.isPartner;
        },
        resetForm() {
            return initialState;
        },
    },
});

export const {
    updateCompanyName,
    updateEmail,
    togglePartner,
    resetForm,
} = formSlice.actions;

export const selectedForm = (state: RootState) => state.form

export default formSlice.reducer;
