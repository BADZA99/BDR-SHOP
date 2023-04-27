// import action
import { actions } from './actions';

const initialState = {
    items: []
}

export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return Object.assign({}, state, { items: [...state.items, action.playload] });
        case actions.UPDATE_CART:
            console.log(state.items);
            return Object.assign({}, state, {
                 items: state.items.map(item => {
                    return item.id === action.playload.id ? 
                    Object.assign({}, item, { 
                        quantity: action.playload.quantity 
                    }) : item;
                })
            });


        case actions.REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items : state.items.filter(item => {
                    return item.id != action.playload.id
                })
           });


        default:  return state;

}
}

