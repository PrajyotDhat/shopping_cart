import { Add_To_Cart } from "../Constants"

const initialState = {
    cardData: []
}

export default function cardItems(initialState, action) {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                cardData: action.data
            }
            break
            default:
                return state
    }
}