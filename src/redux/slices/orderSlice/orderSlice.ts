import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store";

export type ordersId = 'Базовий пакет' | 'Recruiter' | "Initiator" | "Get to know"

export interface IOffer {
    title: string;
    id: ordersId;
    price: number;
    list: string[];
}

interface OrderState {
    selectedOrders: IOffer[]; // Array of selected orders
}

const initialState: OrderState = {
    selectedOrders: [{
        title: 'Базовий пакет',
        id: 'Базовий пакет',
        price: 300,
        list: [
            'Логотип компанії на бренд-волі та на сайті проєкту',
            'Промоція в соціальних мережах',
            'Фото та відео звіт',
            'Логотип та згадка про компанію у пост відео',
            'Транслювання відео компанії під час Хакатону',
            'Участь у нетворкінгу',
            'Участь в благодійному зборі-розіграші для ЗСУ (За вашим бажанням)',
        ],
    }],
};

const orderSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        selectOrder(state, action: PayloadAction<IOffer>) {
            if (action.payload.id !== 'Базовий пакет') {
                // If the selected order is not the base package
                const index = state.selectedOrders.findIndex(
                    (order) => order.id === action.payload.id
                );
                if (index === -1) {
                    // If the order is not already selected, add it to the selectedOrders array
                    state.selectedOrders.push(action.payload);
                } else {
                    // If the order is already selected, remove it from the selectedOrders array
                    state.selectedOrders.splice(index, 1);
                }
            }
        },
    },
});

export const {selectOrder} = orderSlice.actions;
export const selectedOrders = (state: RootState) => state.order
export default orderSlice.reducer;

