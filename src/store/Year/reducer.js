const initialState = {
    current: 2015
}

export default function year (state = initialState, action) {
    switch (action.type) {
        case 'SET_YEAR':
            return {...state, current: action.payload}
        default:
            return state;
    }
}