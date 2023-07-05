import { Route, Routes } from 'react-router-dom';
import Timer from './pages/Timer';

import GlobalStyle from './styles/globalReset';
import Layout from './components/Layout';
import Stopwatch from './pages/Stopwatch';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/' element={ <Timer /> } />
          <Route path='/stopwatch' element={ <Stopwatch /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
