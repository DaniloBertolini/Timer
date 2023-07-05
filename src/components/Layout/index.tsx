import { ThemeProvider } from 'styled-components';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

import blue from '../../styles/themes/blue';
import red from '../../styles/themes/red';
import { useState } from 'react';

function Layout() {
  const [color, setColor] = useState(0)
  const arrayColors = [blue, red]

  const toggleColor = () => {
    if (arrayColors.length === color + 1) {
      setColor(0);
    } else {
      setColor(color + 1)
    }
  }

  return (
    <>
      <ThemeProvider theme={ arrayColors[color] } >
        <NavBar onClick={ toggleColor } />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default Layout