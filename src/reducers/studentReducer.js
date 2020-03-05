import React from "react"


const initRecord = [
    {first_name: "uche", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
    {first_name: "uche", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
    {first_name: "uche", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
] 

export default function studentReducer(state = [], action ) {
    const payload = { action }
    switch(action.type) {
        case "GET_STUDENTS":
            return [
                ...initRecord
            ]
        break
        case "ADD_STUDENT":
        return [
            initRecord.concat(payload) 
        ]
        default:
            return [
                ...initRecord
            ]
    }
}