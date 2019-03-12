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

    let cardImage1 = null
    let cardTitle1 = null
    let cardId1 = null
    let cardImage2 = null
    let cardTitle2 = null
    let cardId2 = null
    let cardImage3 = null
    let cardTitle3 = null
    let cardId3 = null
    let cardImage4 = null
    let cardTitle4 = null
    let cardId4 = null
    let cardImage5 = null
    let cardTitle5 = null
    let cardId5 = null
    
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
        ...formValues, userId, date,
        cardImage1, cardTitle1, cardId1,
        cardImage2, cardTitle2, cardId2,
        cardImage3, cardTitle3, cardId3,
        cardImage4, cardTitle4, cardId4,
        cardImage5, cardTitle5, cardId5
    })
    
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

export const saveReadingOne = (id, state) => async (dispatch, getState) => {
    let { cardImage1, cardTitle1, cardId1 } = getState().readings[id]
    
    cardImage1 = state.cardImage1
    cardTitle1 = state.cardTitle1
    cardId1 = state.cardId1

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
}

export const saveReadingThree = (id, state) => async (dispatch, getState) => {
    let { 
        cardImage1, cardTitle1, cardId1,
        cardImage2, cardTitle2, cardId2, 
        cardImage3, cardTitle3, cardId3
    } = getState().readings[id]
    
    cardImage1 = state.cardImage1
    cardTitle1 = state.cardTitle1
    cardId1 = state.cardId1
    cardImage2 = state.cardImage2
    cardTitle2 = state.cardTitle2
    cardId2 = state.cardId2
    cardImage3 = state.cardImage3
    cardTitle3 = state.cardTitle3
    cardId3 = state.cardId3

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1,
        cardImage2, cardTitle2, cardId2,
        cardImage3, cardTitle3, cardId3
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
}

export const saveReadingFive = (id, state) => async (dispatch, getState) => {
    let { 
        cardImage1, cardTitle1, cardId1,
        cardImage2, cardTitle2, cardId2, 
        cardImage3, cardTitle3, cardId3,
        cardImage4, cardTitle4, cardId4,
        cardImage5, cardTitle5, cardId5 
    } = getState().readings[id]
    
    cardImage1 = state.cardImage1
    cardTitle1 = state.cardTitle1
    cardId1 = state.cardId1
    cardImage2 = state.cardImage2
    cardTitle2 = state.cardTitle2
    cardId2 = state.cardId2
    cardImage3 = state.cardImage3
    cardTitle3 = state.cardTitle3
    cardId3 = state.cardId3
    cardImage4 = state.cardImage4
    cardTitle4 = state.cardTitle4
    cardId4 = state.cardId4
    cardImage5 = state.cardImage5
    cardTitle5 = state.cardTitle5
    cardId5 = state.cardId5

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1,
        cardImage2, cardTitle2, cardId2,
        cardImage3, cardTitle3, cardId3,
        cardImage4, cardTitle4, cardId4,
        cardImage5, cardTitle5, cardId5
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
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