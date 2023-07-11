import { ThemeProvider } from 'styled-components';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import blue from '../../styles/themes/blue';
import red from '../../styles/themes/red';
import cyan from '../../styles/themes/cyan';
import purple from '../../styles/themes/purple';
import green from '../../styles/themes/green';
import darkGolden from '../../styles/themes/darkGolden';
import pink from '../../styles/themes/pink';
import brown from '../../styles/themes/brown';
import slateGray from '../../styles/themes/slateGray';
import aliceBlue from '../../styles/themes/aliceBlue';

function Layout() {
  const [color, setColor] = useState(0)
  const arrayColors = [blue, red, cyan, purple, green, darkGolden, pink, brown, slateGray, aliceBlue]

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