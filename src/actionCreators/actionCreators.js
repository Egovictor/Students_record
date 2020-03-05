import * as action from "./actions"

const GET_STUDENTS = () => (dispatch, getState) => {
    dispatch(action.GET_STUDENTS)
}

export { GET_STUDENTS }