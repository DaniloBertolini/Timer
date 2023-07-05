import { NavLink } from "react-router-dom"
// import Title from "../Title"
import { Title } from "../Title/title";

import styles from './NavBar.module.css'

type Type = {
  onClick: () => void,
}

function NavBar({ onClick }: Type) {

  return (
    <nav className={ styles.nav }>
        <NavLink className={ styles.timer } to='/'>
            {/* <Title title="Timer"/> */}
            <Title>Timer</Title>
        </NavLink>
        <NavLink className={ styles.stopwatch } to='/stopwatch'>
            {/* <Title title="Stopwatch"/> */}
            <Title>Stopwatch</Title>
        </NavLink>
        <button onClick={ onClick }>
          Cor
        </button>
    </nav>
  )
}

export default NavBar;