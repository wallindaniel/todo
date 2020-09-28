import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
  Här uppe bestämmer vi hur olika element ska se ut.
  Det som står efter "styled." dvs h1 är elementet som
  vi ska förändra utseendet på. I det är fallet en rubrik
  (h1). Variabeln används sedan i komponenten nedan och
  för sitt rätta utseende.
*/
const CarHeading = styled.h1`
  font-size: 38px;
  font-weight: bold;
  font-style: italic;
  color: green;
  text-transform: uppercase;
`;

/*
  Här tar vi emot argumentet som vi skickade in i anropet
  till komponenten. Observera att vi alltid måste skriva
  alla argument vi skickar in, INUTI ett objekt som skriver
  inuti funktionens parenteser. Vi kan nu använda den data
  som vi skickade in för att skriva ut bilens namen.
*/

/*
  Html (hypertext marked language), skriver ut saker på skärmen
  Css (se ovan), ger html-element dess form.
  JavaScript sköter funktionalitet och logik för att hantera data
  och för att "svara" på interaktioner som användaren gör på
  webbsidan (till exempel klickar på "visa fler produkter").
*/

/*
  Observera att html "taggar" (de olika elementen) och anrop
  till / initiering av komponenter ser till sitt utseende
  lika ut. Jämför tex html-taggen <header> och initierade
  komponenten <Header />. Skillnaden är stor första bokstav
  på komponenten. Css kan man skriva på olika sätt i React,
  i det här projektet så skrivs även Css ut med liknande
  "taggar".

    Ex.
      <CarHeading>{cars[0].name}</CarHeading>
      <h1>{cars[0].name}</h1>

  Dessa två rader ovan skriver ut samma element, <h1></h1>
  med innehåll. Skillnaden är att den första har fått ett
  utseende.
*/

/*
  Din uppgift blir nu att:

  1. HTM - Ta reda på vilka html-taggar som finns att använda (googla html5)
  och att börja bygga webbsidan med dessa element. Kom ihåg att det finns
  både element som skriver ut saker på skärmen (rubrik, paragraf, bild etc)
  och andra element som används för att skapa sidans layout (tex elementen
  "section" och "aside")

  2. CSS - Undersök vilka regler det finns för att ge elementen dess utseende
  (googla Css och Css3). Css3 är de nyaste reglerna medans resten ryms
  under endast Css.

  3. JavaScript - Din uppgift blir att skriva en ny liten komponent och att
  initiera den med innehåll (html, css), så att det syns på sidan.

  Detta för att du ska komma in både ramverket, hur man skriver komponenter
  samt lära om hur man skriver Html och Css kombinerat med JavaScript.

  Lycka till :)
  Bara fråga om du undrar något.
*/

const Header = function({ cars: cars }) {
  return (
    <header>
      <CarHeading>{cars[0].name}</CarHeading>
    </header>
  )
};

Header.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Header;
