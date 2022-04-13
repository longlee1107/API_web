import { Axios } from "./Axios";

function makeOrder(payload) {
    return Axios.get("user", payload);
}
export const userOrderService = {
    makeOrder
};