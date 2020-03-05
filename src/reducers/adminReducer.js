import React from "react"


const initRecord = [
    {first_name: "Admin", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
    {first_name: "uche", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
    {first_name: "uche", last_name: "okafor", gender: "male", },
    {first_name: "nneka", last_name: "okoye", gender: "female" },
] 

export default function adminReducer(state = initRecord, action ) {
    const payload = { action }
    switch(action.type) {
        case "ADD_ADMIN":
        return [
            initRecord.concat(payload) 
        ]
        default:
            return [
                ...initRecord
            ]
    }
}