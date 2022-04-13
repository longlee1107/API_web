import { Axios } from "./Axios";

function signup(payload) {
    return Axios.post("signup", payload);
}
export const authService = {
    signup
};