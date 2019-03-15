import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// -------------------------------------------------
import authReducer from './authReducer'
import cardReducer from './cardReducer'
import readingReducer from './readingReducer'
import filterReducer from './filterReducer'
// -------------------------------------------------

// -------------------------------------------------
export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    card: cardReducer,
    readings: readingReducer,
    filter: filterReducer
})
// -------------------------------------------------