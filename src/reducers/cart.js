export default function CartReducer(state = [], action) {
    // console.log(state, action);
    let newState = [...state]
    switch (action.type) {
        case "ADD":
            newState = [
                ...state,
                {
                    id: action.id,
                    title: action.info.title,
                    price: action.info.price,
                    thumbnail: action.info.thumbnail,
                    quantity: 1
                }
            ]
            return newState;
        case "REMOVE_ALL":
            return [];
        case "UPDATE":
            const index = newState.findIndex(item => item.id === action.id);
            newState[index].quantity = action.quantity;
            console.log(action.quantity);
            return newState;
        case "REMOVE":
            // const new2State = state.filter(item => item.id === state.id);
            return newState.filter(item => item.id !== action.id);
        default: return state;
    }
}