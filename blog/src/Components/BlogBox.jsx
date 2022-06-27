import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogBox(props) {
    return (
        <div className='col-md-3 mt-2'>
            <div className="card">
                <img src={props.image} className="card-img-top rounded" alt="..." style={{
                    height: "200px"
                }} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" style={{
                        textAlign: "justify"
                    }}>{props.short}</p>
                    {/* <a href={props.link} className="btn btn-primary"></a> */}
                    <Link to={props.link} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    )
}
