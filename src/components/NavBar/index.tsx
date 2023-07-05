import { NavLink } from "react-router-dom"
import Title from "../Title"

function NavBar() {
  return (
    <nav>
        <NavLink to='/'>
            <Title title="Timer"/>
        </NavLink>
        <NavLink to='/stopwatch'>
            <Title title="Stopwatch"/>
        </NavLink>
    </nav>
  )
}

export default NavBar;