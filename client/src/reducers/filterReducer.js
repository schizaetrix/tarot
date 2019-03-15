import Cards from '../images/cardsDB'
import { 
    FILTER_CARDS_A, 
    FILTER_CARDS_B,
    FILTER_CARDS_R
} from '../actions/types'
// -------------------------------------------------

const INITIAL_STATE = {
    filteredCards: Cards
}

// -------------------------------------------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILTER_CARDS_A:
            return { 
                ...state, 
                filteredCards: action.payload
            }
        case FILTER_CARDS_B:
            return { 
                ...state, 
                filteredCards: action.payload
            }
        case FILTER_CARDS_R:
            return {
                ...state,
                filteredCards: action.payload
            }
        default:
            return state
    }
}
// -------------------------------------------------