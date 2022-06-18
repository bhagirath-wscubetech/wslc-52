import React from 'react'
import "./App.css"
export default function Person(props) {
    return (
        <div className='Person-Container'>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <button onClick={() => props.click(props.index)}>Remove Me {props.index}</button>
            {/* <button onClick={props.click}>Click Me {props.index}</button> */}
        </div>
    )
}
