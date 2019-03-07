import _ from 'lodash'
// -------------------------------------------------
import {
    FETCH_READING,
    FETCH_READINGS,
    CREATE_READING,
    EDIT_READING,
    DELETE_READING
} from '../actions/types'
// -------------------------------------------------

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_READINGS:
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_READING:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_READING:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_READING:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_READING:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
// -------------------------------------------------