import readings from '../apis/readings'
import history from '../history'
import { 
    SIGN_IN, 
    SIGN_OUT,
    GET_CARD,
    CREATE_READING,
    FETCH_READINGS,
    FETCH_READING,
    DELETE_READING,
    EDIT_READING,
    SAVE_READING,
    NOTE_READING,
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

export const getCard = (image, title, id) => {
    return {
        type: GET_CARD,
        payload: {
            image,
            title,
            id
        }
    }
}

export const createReading = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth

    let cardImage1 = null
    let cardTitle1 = null
    let cardId1 = null
    let cardTooltip1 = null
    let cardImage2 = null
    let cardTitle2 = null
    let cardId2 = null
    let cardTooltip2 = null
    let cardImage3 = null
    let cardTitle3 = null
    let cardId3 = null
    let cardTooltip3 = null
    let cardImage4 = null
    let cardTitle4 = null
    let cardId4 = null
    let cardTooltip4 = null
    let cardImage5 = null
    let cardTitle5 = null
    let cardId5 = null
    let cardTooltip5 = null
    let interpretation = null
    let retrospective = null
    
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
        cardImage1, cardTitle1, cardId1, cardTooltip1,
        cardImage2, cardTitle2, cardId2, cardTooltip2,
        cardImage3, cardTitle3, cardId3, cardTooltip3,
        cardImage4, cardTitle4, cardId4, cardTooltip4,
        cardImage5, cardTitle5, cardId5, cardTooltip5,
        interpretation, retrospective
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
    let { 
        cardImage1, cardTitle1, cardId1, cardTooltip1 
    } = getState().readings[id]
    
    cardImage1 = state.card1.image
    cardTitle1 = state.card1.title
    cardId1 = state.card1.id
    cardTooltip1 = state.card1.tooltip

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1, cardTooltip1
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
}

export const saveReadingThree = (id, state) => async (dispatch, getState) => {
    let { 
        cardImage1, cardTitle1, cardId1, cardTooltip1,
        cardImage2, cardTitle2, cardId2, cardTooltip2,
        cardImage3, cardTitle3, cardId3, cardTooltip3,
    } = getState().readings[id]
    
    cardImage1 = state.card1.image
    cardTitle1 = state.card1.title
    cardId1 = state.card1.id
    cardTooltip1 = state.card1.tooltip
    cardImage2 = state.card2.image
    cardTitle2 = state.card2.title
    cardId2 = state.card2.id
    cardTooltip2 = state.card2.tooltip
    cardImage3 = state.card3.image
    cardTitle3 = state.card3.title
    cardId3 = state.card3.id
    cardTooltip3 = state.card3.tooltip

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1, cardTooltip1,
        cardImage2, cardTitle2, cardId2, cardTooltip2,
        cardImage3, cardTitle3, cardId3, cardTooltip3
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
}

export const saveReadingFive = (id, state) => async (dispatch, getState) => {
    let { 
        cardImage1, cardTitle1, cardId1, cardTooltip1,
        cardImage2, cardTitle2, cardId2, cardTooltip2,
        cardImage3, cardTitle3, cardId3, cardTooltip3,
        cardImage4, cardTitle4, cardId4, cardTooltip4,
        cardImage5, cardTitle5, cardId5, cardTooltip5
    } = getState().readings[id]
    
    cardImage1 = state.card1.image
    cardTitle1 = state.card1.title
    cardId1 = state.card1.id
    cardTooltip1 = state.card1.tooltip
    cardImage2 = state.card2.image
    cardTitle2 = state.card2.title
    cardId2 = state.card2.id
    cardTooltip2 = state.card2.tooltip
    cardImage3 = state.card3.image
    cardTitle3 = state.card3.title
    cardId3 = state.card3.id
    cardTooltip3 = state.card3.tooltip
    cardImage4 = state.card4.image
    cardTitle4 = state.card4.title
    cardId4 = state.card4.id
    cardTooltip4 = state.card4.tooltip
    cardImage5 = state.card5.image
    cardTitle5 = state.card5.title
    cardId5 = state.card5.id
    cardTooltip5 = state.card5.tooltip

    const response = await readings.patch(`/readings/${id}`, {
        cardImage1, cardTitle1, cardId1, cardTooltip1,
        cardImage2, cardTitle2, cardId2, cardTooltip2,
        cardImage3, cardTitle3, cardId3, cardTooltip3,
        cardImage4, cardTitle4, cardId4, cardTooltip4,
        cardImage5, cardTitle5, cardId5, cardTooltip5
    })
    dispatch({
        type: SAVE_READING,
        payload: response.data
    })
    history.push(`/readings/save/${id}`)
}

export const noteReading = (id, formValues) => async (dispatch) => {
    const response = await readings.patch(`/readings/${id}`, formValues)
    dispatch({
        type: NOTE_READING,
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