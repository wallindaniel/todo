import React from 'react';
import Header from '../containers/Header';
import Footer from '../components/Footer';
import MainSection from '../containers/MainSection';

const data = [
  {
    name: 'saab'
  }
];

/*
  Så "cars" är namnet på argumentet vi skickar in i komponenten.
  "data" inuti måsvingar är själva innehållet och refererar till
  arrayen ovan. Vi skickar in arrayen "data" i komponenten "header"
  Komponenten header refererar när den tar emot till det namn vi ger
  som i det här fallet är "cars". Se hur data tas emot i komponenten
  "header".
*/

const App = () => (
  <>
    <Header cars={data} />
    <MainSection />
    <Footer />
  </>
)

export default App;
