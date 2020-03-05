import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {v4 as uuidv4 } from "uuid"
import * as action from "../actionCreators/actionCreators"

const captions = ["s/n", "first name", "last name", "gender", "action"];
// const students = [
//     {first_name: "uche", last_name: "okafor", gender: "male", },
//     {first_name: "nneka", last_name: "okoye", gender: "female" },
//     {first_name: "uche", last_name: "okafor", gender: "male", },
//     {first_name: "nneka", last_name: "okoye", gender: "female" },
//     {first_name: "uche", last_name: "okafor", gender: "male", },
//     {first_name: "nneka", last_name: "okoye", gender: "female" },
// ]

const mapStateToProps = (state) => {
    let { students } = state;
    return {students }
}


const mapDispatchToProps = {getStudents: action.GET_STUDENTS }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getStudents: () => dispatch({type: "GET_STUDENTS"})
//     }
// }

const StudentsList = (props) => {

    const [students, setStudents ] = useState([]);
console.log("props:: ", props)
    
useEffect(() => {

    props.getStudents()
    setStudents(props.students)
}, [])

console.log("setList:::", students)


    return (
        <table className="students_list">
            <thead>
                <tr>
                    {
                        captions.map(caption => (
                            <th key={uuidv4()}> {caption}</th>
                        ))}
                </tr>
            </thead>

            <tbody>
                { 
                students.map( (student, ind) => (
                    <tr key={uuidv4()}>
                        <td> {ind+1} </td>
                        <td> {student.first_name} </td>
                        <td> {student.last_name} </td>
                        <td> {student.gender} </td>

                        <td> 
                            <button>
                            <Link to="/update-student">
                                edit
                            </Link>
                            </button>
                            <button>
                                delete
                            </button>
                        </td>
                    </tr>
    ))}
            </tbody>
        </table>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);