import { Add_To_Cart, Remove_From_Cart } from "../actions/Action"

const initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {
    switch (action.type) {
        case Add_To_Cart:
            // console.warn("reducer",action);
            return [
                ...state,
                {cardData: action.data}
            ]
            case Remove_From_Cart:
                 // console.warn("reducer",action);
                state.pop();
                return[
                    ...state,
                ]
                break
        default:
            return state
    }
}