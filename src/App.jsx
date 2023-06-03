import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import ClubConversacion from './pages/ClubConversacion'
import SpanishForKids from './pages/SpanishForKids'
import SnackdeSpanol from './pages/SnackdeSpanol'
import Page404 from './pages/Page404'


function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/ClubConversacion" Component={ClubConversacion}/>
          <Route path="/SpanishForKids" Component={SpanishForKids}/>
          <Route path="/SnackdeSpanol" Component={SnackdeSpanol}/>
          <Route path="*" Component={Page404}/>
      </Routes>
    </>
  );
}

export default App;
