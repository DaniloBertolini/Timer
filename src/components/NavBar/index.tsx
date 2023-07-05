import { NavLink } from "react-router-dom"
import Title from "../Title"

import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={ styles.nav }>
        <NavLink className={ styles.timer } to='/'>
            <Title title="Timer"/>
        </NavLink>
        <NavLink className={ styles.stopwatch } to='/stopwatch'>
            <Title title="Stopwatch"/>
        </NavLink>
    </nav>
  )
}

export default NavBar;