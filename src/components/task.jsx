/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Task = () => {
  return <div>
    <h2>Tehtävä</h2>
    <p>Kesälomat lähestyvät ja monien katseet kääntyvät kohti kesämökkejä. Osalla nämä löytyvät lähempää, osalla taas matkustukseen kuluu pitkiäkin aikoja. Monesti tien päällä ollessa tuntuu siltä, että jos hieman vielä kiihdyttäisi, olisi perillä merkittävästi nopeammin… vai olisiko sittenkään? Ovatko voitetut minuutit kasvaneiden matkakustannusten arvoisia? Entä kuinka paljon matkustusajoneuvon tyyppi vaikuttaa tähän? </p>
    <p>Tehtävänäsi on toteuttaa autoilumittari-sovellus. Sovelluksen tulee pystyä suorittamaan vertailu matka-ajan ja polttoaineen kulutuksen välillä kahden eri valitun nopeuden mukaan: käyttäjä ilmoittaa saman matkustettavan etäisyyden samalla kulkuneuvotyypillä eri nopeuksilla ja sovellus laskee miten paljon nopeammin käyttäjä on perillä ja kuinka paljon enemmän polttoainetta tähän kuluu. Etäisyyden sekä kulkuneuvotyypin tulee siis olla molemmissa samat. Sovelluksen tulee pystyä näyttämään web-käyttöliittymässä molemmista annetuista matkanopeuksista käytetty aika ja polttoaine, sekä näiden kahden ero.</p>
    <p>Sovelluksessa tulee pystyä tarkastelemaan kolmen erilaisen auton tuloksia. Autojen bensankulutus kasvaa 1.009 kulmakertoimella. Eli jos auton nopeus kasvaa 1km/h, niin bensankulutus kasvaa 1.009 kertaiseksi. Eri autojen bensakulutus 1km/h nopeudella on seuraava:
      <ul>
        <li>Auto A: 3l / 100km</li>
        <li>Auto B: 3.5l / 100km</li>
        <li>Auto C: 4l / 100km</li>
      </ul>
    </p>
    <p>Toteutuksessa käytettävät teknologiat ovat vapaasti päätettävissäsi. Tehtävässä ei välttämättä ole tarpeen tehdä erillistä backend-toteutusta, mutta voit sen halutessasi tehdä. Tehtävässä ei saa käyttää mitään kolmannen osapuolen palvelua tai kirjastoa, mikä toteuttaa vaaditut vertailutoimenpiteet. </p>
    <p>Katso vielä lisätiedot tehtävän arviointikriteereistä sekä tarkempi ohje siitä, mitä palautuksessa tulee huomioida. </p>
    <p>Onnea koodihaasteeseen ja mukavaa (kesä)koodailua!</p>
  </div>;
};

const Evaluation = () => {
  return <div>
    <div>
      <h2>Arviointi</h2>
      <p>Palautetussa työssä tulee olla ratkaistu kaikki annetut tehtävänannon osa-alueet. Arvioimme tuloksien oikeellisuutta, koodia, sen selkeyttä ja laatua sekä tehdyn ratkaisun ulkoasua. </p>
    </div>
  </div>;
};

const Returning = () => {
  return <div class="content">
    <div>
      <h2>Palautus</h2>
      <h3>Tehtävän palautusohjeet</h3>
      <p>Lähetä linkki projektisi Git-repositorioon 6.6.2021 mennessä sähköpostiosoitteeseen koodihaaste@solidabis.com. Voit myös asentaa web-käyttöliittymäsi pyörimään esimerkiksi Heroku-palveluun. Lähetä tällöin myös linkki sovellukseesi.  </p>
      <p>Lisää repositorioosi README.md tiedosto, jossa ilmenee vastausten tarkastelua helpottavat tiedot, eli: </p>
      <ul>
        <li>Mitä teknologioita olet käyttänyt ja millä käyttöjärjestelmällä </li>
        <li>Ohjeet miten ratkaisusi pystytetään ja käynnistetään </li>
        <li>Muutaman lauseen kuvaus tekemästäsi ratkaisusta</li>
      </ul>
      <p>Kerro samalla, haluatko osallistua vain kilpailuun ja arvontaan, vai haluatko Solidabiksen ottavan yhteyttä myös työtarjouksiin liittyen. Se ei tarkoita, että sinulle lähetettäisiin roskapostia, vaan nimensä mukaisesti esimerkiksi kutsu työhaastatteluun. Voit halutessasi osallistua koodihasteeseen myös ilman, että haluat ottaa palkintoa vastaan tai osallistua arvontaan. </p>
    </div>
  </div>;
};

export default {Evaluation, Returning, Task};