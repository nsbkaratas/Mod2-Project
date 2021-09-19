import { CAKE_URL_START, CAKE_URL_SUCCESS, CAKE_URL_FAIL } from '../actions'

const initialState = {
    cakeURL: '',
    error: '',
    isFetching: false,
}
function cakeRecipesReducer(state = initialState, action) {
    switch (action.type) {
        case CAKE_URL_START:
            return { ...state, isFetching: true }

        case CAKE_URL_SUCCESS:
            return { ...state, cakeURL: action.payload, isFetching: false }

        case CAKE_URL_FAIL:
			return { ...state, error: action.payload, isFetching: false }

        default:
            return state;
    }
}

export default cakeRecipesReducer
// const [cakes, setCakeURL]= useState([])