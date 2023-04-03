import {useAppSelector} from "../../../store";
import {selectedForm} from "../formSlice";
import {selectedOrders} from "../../orderSlice/orderSlice";

export const getTotalPrice = () => {
    const {isPartner} = useAppSelector(selectedForm)
    const {selectedOrders: orders} = useAppSelector(selectedOrders)
    let sum = orders.reduce((acc, order) => {
        return acc + order.price;
    }, 0);

    if (orders.length === 4) {
        sum -= 150;
    } else if (orders.length === 3) {
        sum -= 50;
    }

    if (isPartner) {
        sum = sum - sum / 100 * 5;
    }

    return sum;
};
