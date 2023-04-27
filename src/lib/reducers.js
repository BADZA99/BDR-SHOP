// import action
import { actions } from './actions';

const saveLocalStorage=object =>{
    localStorage.setItem('items',JSON.stringify(object))
}

const initialState = {
  items: JSON.parse(localStorage.getItem("items"))!==null
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};



export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return Object.assign({}, state, { items: [...state.items, action.payload] });
        case actions.UPDATE_CART:
            console.log(state.items);
            return Object.assign({}, state, {
                 items: state.items.map(item => {
                    return item.id === action.payload.id ? 
                    Object.assign({}, item, { 
                        quantity: action.payload.quantity 
                    }) : item;
                })
            });


        case actions.REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items : state.items.filter(item => {
                    return item.id != action.payload.id
                })
           });
        case actions.SAVE_CART:
            saveLocalStorage(action.payload.items);
            return state


        default:  return state;

}
}

