const GET_STUDENTS = {
    type: "GET_STUDENTS"
}

const ADD_STUDENT = {
    type: "ADD_STUDENT", payload: "id"
}

const UPDATE_STUDENT = {
    type: "UPDATE_STUDENT", payload: "id"
}

const DELETE_STUDENT = {
    type: "DELETE_STUDENT", payload: "id"
}

export { GET_STUDENTS, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT }