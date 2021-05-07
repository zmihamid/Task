export const SET_SHOW_MODAL_ADD = "SET_SHOW_MODAL_ADD"
export const SET_SHOW_LIST_TASKS = "SET_SHOW_LIST_TASKS"
export const SET_SHOW_MODAL_DONE_TASK = "SET_SHOW_MODAL_DONE_TASK"
export const SET_TASKS = "SET_TASKS"
export const SET_ID = "SET_ID"
export const SET_SHOW_MODAL_EDIT = "SET_SHOW_MODAL_EDIT"
export const SET_OBJECT_EDIT = "SET_OBJECT_EDIT"
export const SET_MODAL_DELETE_TASK = "SET_MODAL_DELETE_TASK"

export function setShowModalAdd(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MODAL_ADD,
            payload: value
        })
    }
}

export function setModalDelete(value) {
    return dispatch => {
        dispatch({
            type: SET_MODAL_DELETE_TASK,
            payload: value
        })
    }
}

export function setShowListTask(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_LIST_TASKS,
            payload: value
        })
    }
}

export function setShowModalTaskDone(value) {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MODAL_DONE_TASK,
            payload: value
        })
    }
}

export function setTask(data) {
    return dispatch => {
        dispatch({
            type : SET_TASKS,
            payload: data
        })
    }
}

export function setObjectEdit(data) {
    return dispatch => {
        dispatch({
            type : SET_OBJECT_EDIT,
            payload: data
        })
    }
}

export function setShowModalEdit(value) {
    return dispatch => {
        dispatch({
            type : SET_SHOW_MODAL_EDIT,
            payload: value
        })
    }
}

export function setId() {
    return dispatch => {
        dispatch({
            type : SET_ID,        
        })
    }
}