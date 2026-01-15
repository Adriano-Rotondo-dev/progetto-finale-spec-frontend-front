# Lorwyn Card Comparator - Frontend React SPA

## 🎯 Descrizione

Il mio progetto finale per il corso di specializzazione Front-End e la mia love letter ad un blocco di Magic: The Gathering che amo.

Questa SPA permetterà agli utenti non autenticati di esplorare e confrontare le carte del blocco Lorwyn di Magic: The Gathering (Lorwyn, Morningtide, Shadowmoor, Eventide).

## L’app consentirà di:

- Sfogliare, cercare e filtrare carte per Titolo o Set (categoria)

- Confrontare due o più carte affiancate

- Salvare le carte nei preferiti - i dati vengono salvati nel localStorage. Cliccare sui preferiti porterà alla pagina di dettaglio della singola carta.
  {piccolo bug - se salvate dalla Lista Carte l'icona mostrerà il cardback placeholder per via del funzionamento backend. Se salvate dai Dettagli Carta, l'icona mostrerà correttamente la carta salvata. }

- ❌ Gli utenti non possono creare, modificare o cancellare le carte.

## 🛠️ Stack Tecnologico

- Frontend: React (JavaScript)

- Styling: Bootstrap 5 e piccole scelte personalizzate per il design

- Libraries - bootstrap, react-router-dom, lodash.debounce

## Future Release

- Implementazione dell'API di Scryfall per il backend per ottenere i record di ogni carta dei blocchi di appartenenza.
