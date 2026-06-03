# Bobrova algoritemska misija - različica s slikami kartic

Ta mapa vsebuje pripravljeno interaktivno spletno igro s slikami kartic.

## Datoteke

- `index.html` - glavna stran igre
- `style.css` - oblikovanje
- `script.js` - naloge, odgovori, namigi in logika igre
- `images/` - slike kartic od `kartica-01.png` do `kartica-26.png`

## Kako zaženem igro?

Odpri datoteko `index.html` v brskalniku.

## Kako zamenjam sliko pri nalogi?

V datoteki `script.js` pri posamezni nalogi spremeni vrstico:

```js
image: "images/kartica-04.png"
```

Primer: če želiš uporabiti kartico 12, napišeš:

```js
image: "images/kartica-12.png"
```

## Kako spremenim odgovore?

V `script.js` poišči del:

```js
options: [
  "Odgovor A",
  "Odgovor B",
  "Odgovor C",
  "Odgovor D"
],
correct: 1,
```

`correct: 0` pomeni, da je pravilen prvi odgovor.  
`correct: 1` pomeni, da je pravilen drugi odgovor.  
`correct: 2` pomeni, da je pravilen tretji odgovor.  
`correct: 3` pomeni, da je pravilen četrti odgovor.

## Kako objavim na GitHub Pages?

1. Ustvari nov GitHub repozitorij.
2. Naloži vse datoteke in mapo `images`.
3. Odpri **Settings**.
4. Izberi **Pages**.
5. Pri **Branch** izberi `main` in mapo `/root`.
6. Shrani.
7. Po nekaj minutah bo igra objavljena.

## Pomembno

Na GitHub moraš naložiti tudi mapo `images`. Če naložiš samo `index.html`, `style.css` in `script.js`, se slike ne bodo prikazale.
