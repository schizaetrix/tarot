import { GET_CARD } from '../actions/types'
// -------------------------------------------------

const INITIAL_STATE = {
    image: null,
    title: null,
    id: null
}

// -------------------------------------------------
export default (state = INITIAL_STATE, action) => {
    if (action.type === GET_CARD) {
        return {
            ...state,
            image: action.payload.image,
            title: action.payload.title,
            id: action.payload.id
        }
    }
    return state
}
// -------------------------------------------------