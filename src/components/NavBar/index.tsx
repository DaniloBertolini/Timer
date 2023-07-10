import { House, Palette } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom"
import { Title } from "../Title/title";
import styles from './NavBar.module.css'

type Type = {
  onClick: () => void,
}

function NavBar({ onClick }: Type) {

  return (
    <nav className={ styles.nav }>
          <a href="https://danilobertolini.github.io/DB-Games/" className={ styles.navbarA }>
          <House size={32} color="#fff" />
        </a>
        <NavLink className={ styles.timer } to='/'>
            <Title>Timer</Title>
        </NavLink>
        <NavLink className={ styles.stopwatch } to='/stopwatch'>
            <Title>Stopwatch</Title>
        </NavLink>
        <button className={ styles.buttonColor } onClick={ onClick } >
          <Palette size={32} color="#fff" />
        </button>
    </nav>
  )
}

export default NavBar;