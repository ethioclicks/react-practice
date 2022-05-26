import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

  return (
    <div>
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
        </nav>
    </div>
  )
}
