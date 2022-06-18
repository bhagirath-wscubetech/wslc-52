import React from 'react'

export default function Container(props) {
    return (
        <div style={{ margin: "auto", width: "1000px" }}>
            {props.children}
        </div>
    )
}
