import { ActionTypes } from "../contants/action-types"

const initialState = {
    products: [

    ],
};


export const productReducer = (state = initialState, { type, payload }) => {
    console.log(payload)
    switch (type) {

        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }

}
console.log(productReducer.state)