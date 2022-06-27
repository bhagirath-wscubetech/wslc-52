import React from 'react'
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="container-fluid p-0 bg-primary">
            <nav className="container navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
