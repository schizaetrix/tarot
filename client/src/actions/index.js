import readings from '../apis/readings'

import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_READING,
    FETCH_READINGS,
    FETCH_READING,
    DELETE_READING,
    EDIT_READING
} from './types'


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createReading = (formValues) => async (dispatch) => {
    const response = await readings.post('/readings', formValues)
    dispatch({
        type: CREATE_READING,
        payload: response.data
    })
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

export const editReading = (id, formValues) => async (dispatch) => {
    const response = await readings.patch(`/readings/${id}`, formValues)
    dispatch({
        type: EDIT_READING,
        payload: response.data
    })
}

export const deleteReading = (id) => async (dispatch) => {
    await readings.delete(`/readings/${id}`)
    dispatch({
        type: DELETE_READING,
        payload: id
    })
}