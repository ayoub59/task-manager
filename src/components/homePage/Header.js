import React from "react";
import { Link, Routes, Route } from 'react-router-dom'



function Header() {
    return (
        <div className="nav">
            <h1>SAMU</h1>
            <ul>
                <li><Link className="link" to="/cards" > cards</Link></li>
                <li><Link className="link" to="/login" > LOG IN</Link> </li>
            </ul>


        </div>
    )
}
export default Header;