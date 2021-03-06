import {createStore} from 'redux';

const initialState = {
    fullName:'',
    phone:'',
    email:'',
    photo:'',
    id:''
}

const reducer = (state = initialState, action) =>{
    if (action.type === 'SET_DATA') {
        return{
            ...state,
            fullName:action.value.fullName,
            phone:action.value.phone,
            email:action.value.email,
            photo:action.value.photo,
            balance:action.value.balance,
            id:action.value.id,
        }
    }
    // if (action.type === 'NAME') {
    //     return{
    //         ...state,
    //         fullName:action.value
    //     }
    // }

    return state;
}

const store = createStore(reducer);

export default store;