import {FETCH_START, FETCH_SUCCESS} from '../actions/quoteActions';

const initialState = {
    title: 'You must do the thing you think you cannot do.',
    // author: 'Eleanor Roosevelt',
    loading: false,
    error: ''
};

export const quoteReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                title: action.payload,
                // author: action.payload,
                loading: false
            }
        default:
            return state;
    }
}