import { Route, Routes } from 'react-router-dom';
import Timer from './pages/Timer';

import GlobalStyle from './styles/globalReset';
import Layout from './components/Layout';
import Stopwatch from './pages/Stopwatch';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/Timer' element={ <Layout /> }>
          <Route path='/Timer' element={ <Timer /> } />
          <Route path='/Timer/stopwatch' element={ <Stopwatch /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
