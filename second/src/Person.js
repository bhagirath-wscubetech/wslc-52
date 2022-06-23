import React, { useState } from 'react'
import "./App.css"
export default function Person(props) {
    const [mainCss, setMainCss] = useState([
        'Person-Container'
    ])
    let ageClass = ["Age", "Demo"];
    if (props.age >= 10 && props.age < 20) {
        ageClass.push("Red")
    } else if (props.age >= 20 && props.age < 30) {
        ageClass.push("Blue")
    } else {
        ageClass.push("Green")
    }

    const hightlight = (e) => {
        // console.log(event);
        e.target.innerText = "Clicked"
        let newMainCss = [
            ...mainCss, // speard
            'Highlight'
        ]
        setMainCss(newMainCss)
        //state updates -> component redender
    }

    // Highlight
    return (
        <div className={mainCss.join(" ")}>
            <h3>Name: {props.name}</h3>
            {/* className="Age Demo Green" */}
            <h3 className={ageClass.join(" ")}>Age: {props.age}</h3>
            <button onClick={() => props.click(props.index)}>Remove Me {props.index}</button>
            <button onClick={hightlight}>Click Me</button>
            {/* <button onClick={props.click}>Click Me {props.index}</button> */}
        </div>
    )
}
