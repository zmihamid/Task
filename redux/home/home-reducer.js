import {
    SET_SHOW_MODAL_ADD, SET_SHOW_LIST_TASKS, SET_SHOW_MODAL_DONE_TASK,
    SET_TASKS, SET_ID, SET_SHOW_MODAL_EDIT, SET_OBJECT_EDIT, SET_MODAL_DELETE_TASK
} from './home-action'

const initialState = {
    modalAdd: false,
    showListTask: false,
    modalTaskDone: false,
    tasks: [],
    id: 1,
    modalEdit: false,
    taskEdit: [],
    modalDelete: false
}

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_MODAL_ADD:
            return {
                ...state,
                modalAdd: action.payload
            }
        case SET_MODAL_DELETE_TASK:
            return {
                ...state,
                modalDelete: action.payload
            }
        case SET_SHOW_LIST_TASKS:
            return {
                ...state,
                showListTask: action.payload
            }
        case SET_SHOW_MODAL_DONE_TASK:
            return {
                ...state,
                modalTaskDone: action.payload
            }
        case SET_SHOW_MODAL_EDIT:
            return {
                ...state,
                modalEdit: action.payload
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_ID:
            return {
                ...state,
                id: state.id + 1
            }
        case SET_OBJECT_EDIT:
            return {
                ...state,
                taskEdit: action.payload
            }
        default:
            return state
    }
}