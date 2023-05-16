import { BUY_ICECREAM } from "./iceCreamType"

export const buy_icecream = (n=1) => {
    return {
        type: BUY_ICECREAM,
        payload: n
    }
}