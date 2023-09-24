import { NavLink } from "react-router-dom";

export default function Intro() {
    return (
        <div>
            <h1>Intro</h1>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </div>

    )
}