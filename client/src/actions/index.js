import readings from '../apis/readings'
import history from '../history'
import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_READING,
    FETCH_READINGS,
    FETCH_READING,
    DELETE_READING,
    EDIT_READING,
    SAVE_READING
} from './types'
// -------------------------------------------------

export const signIn = (userId) => {
    history.push('/')
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    history.push('/')
    return {
        type: SIGN_OUT
    }
}

export const createReading = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth

    let cardImage = null
    let cardTitle = null
    let cardId = null
    
    let date = new Date()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = mm + '/' + dd + '/' + yyyy

    const response = await readings.post('/readings', { 
        ...formValues, 
        userId,
        cardImage,
        cardTitle,
        cardId,
        date })
    
        dispatch({
        type: CREATE_READING,
        payload: response.data
    })

    const formObj = await getState().readings
    const id = Object.keys(formObj)[Object.keys(formObj).length - 1]
    history.push(`/readings/${id}`)
}

export const fetchReadings = () => async (dispatch) => {
    const response = await readings.get('/readings')
    dispatch({
        type: FETCH_READINGS,
        payload: response.data
    })
}

export const fetchReading = (id) => async (dispatch) => {
    const response = await readings.get(`/readings/${id}`)
    dispatch({
        type: FETCH_READING,
        payload: response.data
    })
}

export const saveReading = (id, state) => async (dispatch, getState) => {
    let { cardImage, cardTitle, cardId } = getState().readings[id]
    
    cardImage = state.cardImage
    cardTitle = state.cardTitle
    cardId = state.cardId

    const response = await readings.patch(`/readings/${id}`, {
        cardImage,
        cardTitle,
        cardId
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
}

export const editReading = (id, formValues) => async (dispatch) => {
    const response = await readings.patch(`/readings/${id}`, formValues)
    dispatch({
        type: EDIT_READING,
        payload: response.data
    })
    history.push(`/readings/${id}`)
}

export const deleteReading = (id) => async (dispatch) => {
    await readings.delete(`/readings/${id}`)
    dispatch({
        type: DELETE_READING,
        payload: id
    })
}
// -------------------------------------------------