import { Routes, Route } from 'react-router-dom'
import Social from './components/Social'
import Header from './components/Header';
import Home from './pages/Home';
import ClubConversacion from './pages/ClubConversacion'
import SpanishForKids from './pages/SpanishForKids'
import SnackdeSpanol from './pages/SnackdeSpanol'
import Page404 from './pages/Page404'


function App() {
  return (
    <>
      <Social />
      <Header/>
      <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/ClubConversacion" element={ <ClubConversacion/> }/>
          <Route path="/SpanishForKids" element={ <SpanishForKids/> }/>
          <Route path="/SnackdeSpanol" element={ <SnackdeSpanol/> }/>
          <Route path="*" element={ <Page404/> }/>
      </Routes>
    </>
  );
}

export default App;
