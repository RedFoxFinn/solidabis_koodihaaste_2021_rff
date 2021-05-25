# Solidabiksen koodihaaste 2021 - Solidabis code challenge 2021

![Page version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/RedFoxFinn/solidabis_koodihaaste_2021_rff/dev/package.json&query=version&color=008080&label=version)
![Test Status](https://github.com/RedFoxFinn/solidabis_koodihaaste_2021_rff/workflows/CICD/badge.svg?branch=dev)
[![codecov](https://codecov.io/gh/RedFoxFinn/solidabis_koodihaaste_2021_rff/branch/dev/graph/badge.svg?token=PFANDMCHX4)](https://codecov.io/gh/RedFoxFinn/solidabis_koodihaaste_2021_rff)

## Projektista - About project

### FI: 

Oma toteutus vuoden 2021 Solidabiksen koodihaasteeseen.

Sivu on koodattu käyttämällä kielenä JavaScriptiä sekä merkittävimpinä kirjastoina Reactia ja React Routeria.

Testtaukset on toteutettu hyödyntämällä Jestiä ja React Testing Librarya.

Testit ajetaan komennolla `yarn test`, joka käynnistää React Scriptsin komennon `test` CLI-valinnoilla.

GitHub Actionsissa testit ajetaan komennolla `yarn ci`, joka käynnistää React Scriptsin komennon `test` hiukan erilaisilla CLI-valinnoilla (mm. CI=true).

GitHub Actions ajaa testit, lataa testien kattavuusraportit [Codecov-palveluun](https://codecov.io), jonka jälkeen README.md saa päivitetyn statusilmaisimen testien kattavuudesta. Statusilmaisin `CICD` päivittyy jokaisen Github Actions workflown ajon päätteeksi: testit saavat joko statuksen `passing` tai `failing`.

Mikäli testit menevät läpi, GH Actions workflow luo uuden tuotantokelpoisen version sovelmasta ja lataa sen `gh-pages` branchiin sivun tuotantoversiona.

Jokaisella branchiin `dev` lataamisella `version`-statusilmaisin saa uuden, päivitetyn, versionumeron.

### EN: 

My take on Solidabis code challenge of the year 2021.

Page was built mainly with JS, ReactJS and React Router.

Testing is done with Jest & React Testing Library.

Tests are run with command `yarn test` triggering React Scripts command `test` with some CLI options.

On GitHub Actions tests are run with command `yarn ci` triggering React Scripts command `test` but with altered CLI options (ie. CI=true).

GitHub Actions runs tests, uploads coverage reports to [Codecov](https://codecov.io) and README.md gets updated coverage status badge. Status badge `tests` gets updated on every workflow run: tests either get status `passing` or `failing`.

If the tests are passing, GH Actions workflow then creates production build and deploys that build to `gh-pages` branch as production ready page.

On every push to GH branch dev status badge labeled `version` gets updated to new version number.
