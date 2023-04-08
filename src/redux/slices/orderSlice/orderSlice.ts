import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export type ordersId = 'Базовий пакет'; 

export interface IOffer {
    title: string;
    id: ordersId;
    price: number;
    list: string[];
}
 

interface OrderState {
    selectedOrders: IOffer[] // Array of selected orders
    popupTitle: ordersId | null; 
    audiencePopup: boolean;
}

const initialState: OrderState = {
    selectedOrders: [{
        title: 'Базовий пакет',
        id: 'Базовий пакет',
        price: 300,
        list: [
           'Промоція в соціальних мережах ',
           'Розміщення логотипу компанії на брендволі',
           'Поширення промо-продукції',
           'Логотип та згадка про компанію у постпроєктному відео',
           'Транслювання відео компанії під час Хакатону',
           'Розміщення банера на місці події',
           'Логотип на сайті проєкту',
           'Поширення інформації про вакансії внутрішніми каналами BEST Lviv'
        ],
    }],
    popupTitle: null,
    audiencePopup: false,
};

const orderSlice = createSlice({
    name: 'order',
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
        setPopupTitle(state, action: PayloadAction<ordersId | null>) {
            state.popupTitle = action.payload;
        },
        setAudiencePopup(state, action: PayloadAction<boolean>) {
            state.audiencePopup = action.payload;
        }
    },
});

export const { selectOrder, setPopupTitle, setAudiencePopup } = orderSlice.actions;
export const selectedOrders = (state: RootState) => state.order;
export default orderSlice.reducer;

