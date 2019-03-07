import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// -------------------------------------------------
import authReducer from './authReducer'
import readingReducer from './readingReducer'
// -------------------------------------------------

// -------------------------------------------------
export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    readings: readingReducer
})
// -------------------------------------------------