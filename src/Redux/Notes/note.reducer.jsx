import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING } from "./note.type"

let initialState = {
    loading: false,
    error: false,
    data:[],
}

export const noteReducer=(state=initialState,action)=>{

    const {type, payload} = action

    switch(type){

        case GET_NOTES_LOADING:{
            return {
                ...state, loading:true
            }
        }

        case GET_NOTES_SUCCESS:{
            return {
                ...state, loading:false, data:payload
            }
        }

        case GET_NOTES_ERROR:{
            return {
                ...state, loading:false, error:true
            }
        }

        case CREATE_NOTES_LOADING:{
            return {
                ...state, loading:true
            }
        }

        case CREATE_NOTES_SUCCESS:{
            return {
                ...state, loading:false, data:payload
            }
        }

        case CREATE_NOTES_ERROR:{
            return {
                ...state, loading:false, error:true
            }
        }

        case UPDATE_NOTES_LOADING:{
            return {
                ...state, loading:true
            }
        }

        case UPDATE_NOTES_LOADING:{
            return {
                ...state, loading:false, data:payload
            }
        }

        case UPDATE_NOTES_ERROR:{
            return {
                ...state, loading:false, error:true
            }
        }

        default:{
            return state
        }
    }
}