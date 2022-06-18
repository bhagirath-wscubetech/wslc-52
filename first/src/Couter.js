import React, { useState } from "react"
function Counter(props) {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    // state name, set state function
    const incCart = () => {
        const newCount = count + 1;
        setCount(newCount)
        setAmount(props.amount * newCount)
    }
    const descCart = () => {
        const newCount = count - 1;
        // if(newCount < 0) {
        //     return;
        // }
        if (newCount < 0) return
        setCount(newCount) // update
        setAmount(props.amount * newCount)
    }

    return (
        <div style={{ textAlign: "center", color: "red" }}>
            {/* <button onClick={() => setCount(count - 1)}>-</button> */}
            <button onClick={descCart}>-</button>
            <span> {count} </span>
            {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            <button onClick={incCart}>+</button>
            <h1>₹ {amount}</h1>
        </div>
    )
}

export default Counter