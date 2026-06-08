/*
  Bobrova algoritemska misija
  - v naboru je vseh 26 kartic
  - ob vsakem novem igranju se izbere 9 naključnih kartic
  - geslo ostane ALGORITEM
*/
const allChallenges = [
  {
    "title": "Štempiljke",
    "type": "Zaporedje plasti",
    "image": "images/kartica-01.png",
    "imageAlt": "Kartica Štempiljke",
    "question": "V kakšnem vrstnem redu je bober uporabil štempiljke?",
    "options": [
      "3 → 5 → 4 → 1 → 2",
      "3 → 1 → 5 → 4 → 2",
      "5 → 3 → 4 → 2 → 1",
      "2 → 1 → 4 → 5 → 3"
    ],
    "correct": 0,
    "hint": "Najprej poišči, kaj je čisto zadaj, nato kaj prekriva druge dele slike.",
    "explanation": "Pravilno zaporedje je 3 → 5 → 4 → 1 → 2: najprej ozadje z zvezdami, nato planet, nato bober, potem zelena raketa in nazadnje spodnji modro-rdeči del rakete."
  },
  {
    "title": "Slojevita slika",
    "type": "Zaporedje plasti",
    "image": "images/kartica-02.png",
    "imageAlt": "Kartica Slojevita slika",
    "question": "V kakšnem vrstnem redu je bober uporabil štempiljke?",
    "options": [
      "6 → 2 → 5 → 3 → 4 → 1",
      "2 → 6 → 5 → 4 → 3 → 1",
      "6 → 5 → 2 → 4 → 1 → 3",
      "1 → 4 → 3 → 5 → 2 → 6"
    ],
    "correct": 0,
    "hint": "Začni pri delu slike, ki je najbolj zadaj. Voda je v ozadju, bober pa je čisto spredaj.",
    "explanation": "Pravilno zaporedje je 6 → 2 → 5 → 3 → 4 → 1: najprej voda, nato otok z drevesom, potem zastava, grm, hiša in nazadnje bober v ospredju."
  },
  {
    "title": "Zastavice",
    "type": "Zaporedje in vzorci",
    "image": "images/kartica-03.png",
    "imageAlt": "Kartica Zastavice",
    "question": "Oglejte si vzorec zastavic. Katera zastavica pride naslednja?",
    "options": [
      "zastavica številka 1",
      "zastavica številka 2",
      "zastavica številka 3"
    ],
    "correct": 0,
    "hint": "Poišči najkrajši del vzorca, ki se ponavlja.",
    "explanation": "Naslednja je zastavica številka 1.",
    "labels": [
      "1",
      "2",
      "3"
    ]
  },
  {
    "title": "Robot usmerja avto",
    "type": "Ukazi robota",
    "image": "images/kartica-04.png",
    "imageAlt": "Kartica Robot usmerja avto",
    "question": "Poglejte kartico in izberite program, ki pripelje avto v Beaverland.",
    "options": [
      "Naprej 1 → Levo → Naprej 1 → Desno → Naprej 3",
      "Naprej 3 → Desno → Naprej 1 → Levo → Naprej 1",
      "Naprej 3 → Levo → Naprej 1 → Desno → Naprej 1",
      "Naprej 1 → Desno → Naprej 1 → Levo → Naprej 3"
    ],
    "correct": 3,
    "hint": "Avto se najprej premakne za 1 polje, nato zavije desno.",
    "explanation": "Pravilen je program D, ker sledi narisani poti.",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "title": "Robot in piškoti",
    "type": "Skladanje po ukazih",
    "image": "images/kartica-05.png",
    "imageAlt": "Kartica Robot in piškoti",
    "question": "Kako bo izgledal kupček piškotov, ko robot izvede ukaze POLOŽI Š, POLOŽI Š, POLOŽI K, POLOŽI T, POLOŽI K?",
    "options": [
      "Slika A",
      "Slika B",
      "Slika C",
      "Slika D"
    ],
    "correct": 0,
    "hint": "Piškoti se nalagajo od spodaj navzgor v istem zaporedju, kot so podani ukazi.",
    "explanation": "Pravilna je slika A. Robot najprej položi dva štirikotnika, nato krog, trikotnik in na vrh še krog.",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "title": "Ravnotežje",
    "type": "Logično sklepanje",
    "image": "images/kartica-06.png",
    "imageAlt": "Kartica Ravnotežje",
    "question": "Katera od naslednjih trditev je pravilna?",
    "options": [
      "Bober je težji od tiskalnika in motor je težji od bobra.",
      "Bober je težji od tiskalnika in motor je lažji od bobra.",
      "Bober je lažji od tiskalnika in motor je težji od bobra."
    ],
    "correct": 0,
    "hint": "Na spodnji tehtnici je bober težji od tiskalnika. Na zgornji tehtnici je motor težak kot dva bobra.",
    "explanation": "Pravilna je 1. trditev: bober je težji od tiskalnika, motor pa je težji od bobra.",
    "labels": [
      "1",
      "2",
      "3"
    ]
  },
  {
    "title": "Jutranja rutina",
    "type": "Zaporedje korakov",
    "image": "images/kartica-07.png",
    "imageAlt": "Kartica Jutranja rutina",
    "question": "Kateri dve opravili sta na napačnem mestu?",
    "options": [
      "Česanje in tuširanje",
      "Vstajanje in telovadba",
      "Umivanje zob in zajtrk",
      "Vožnja s kolesom in prihod domov"
    ],
    "correct": 0,
    "hint": "Preveri, ali je smiselno, da se bober najprej počeše in šele nato stušira.",
    "explanation": "Na napačnem mestu sta česanje in tuširanje. Najprej bi se moral stuširati, nato pa se počesati."
  },
  {
    "title": "Barvni stolp",
    "type": "Ponavljanje vzorca",
    "image": "images/kartica-08.png",
    "imageAlt": "Kartica Barvni stolp",
    "question": "Koliko obročev bo imel stolp?",
    "options": [
      "9 obročev",
      "10 obročev",
      "11 obročev",
      "12 obročev"
    ],
    "correct": 3,
    "hint": "Na stolpu so že 3 obroči. Nadaljuje se zaporedje rdeč, zelen, rumen, dokler ne zmanjka naslednje potrebne barve.",
    "explanation": "Stolp bo imel 12 obročev. Po začetnih treh lahko doda še tri celotna zaporedja rdeč-zelen-rumen."
  },
  {
    "title": "Bobrova hiša",
    "type": "Pravila odločanja",
    "image": "images/kartica-09.png",
    "imageAlt": "Kartica Bobrova hiša",
    "question": "Katera debla bo bober uporabil za streho?",
    "options": [
      "3, 4, 5, 8 in 9",
      "1, 2, 6, 7 in 10",
      "2, 3, 7, 8 in 11",
      "vsa debla"
    ],
    "correct": 0,
    "hint": "Za streho uporabi deblo, če je daljše od debla na njegovi desni.",
    "explanation": "Za streho bo uporabil debla 3, 4, 5, 8 in 9, ker so daljša od debla takoj na njihovi desni."
  },
  {
    "title": "Preberi besede",
    "type": "Drevo možnosti",
    "image": "images/kartica-10.png",
    "imageAlt": "Kartica Preberi besede",
    "question": "Ena beseda manjka. Katera?",
    "options": [
      "PANJ",
      "PANT",
      "PRAH",
      "PARA"
    ],
    "correct": 0,
    "hint": "Preberi vse poti od črke P do koncev vej. Ena pot na desni strani ni zapisana v seznamu.",
    "explanation": "Manjka beseda PANJ."
  },
  {
    "title": "Mozaik iz kamnov",
    "type": "Zaporedje ukazov",
    "image": "images/kartica-11.png",
    "imageAlt": "Kartica Mozaik iz kamnov",
    "question": "S katerim programom robobober postavi stolp iz 4 kamnov?",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": [
      "Program A",
      "Program B",
      "Program C",
      "Program D"
    ],
    "correct": 1,
    "hint": "Pazi, da znak 3 skupaj s kamnom pomeni ukaz: položi 3 kamne. Poišči program, kjer se na isto ploščo položi 1 kamen in nato še 3 kamni.",
    "explanation": "Pravilen je program B. Robot na isto ploščo položi 1 kamen in nato še 3 kamne, zato nastane stolp iz 4 kamnov."
  },
  {
    "title": "Robot hrošč",
    "type": "Sledenje puščicam",
    "image": "images/kartica-12.png",
    "imageAlt": "Kartica Robot hrošč",
    "question": "S katerega vhoda lahko robot doseže cilj?",
    "options": [
      "Samo z vhoda 1",
      "Z vhoda 2 ali vhoda 4",
      "Samo z vhoda 3",
      "Z nobenega vhoda"
    ],
    "correct": 1,
    "hint": "Sledi puščicam. Število puščic pove, za koliko kvadratov se robot premakne.",
    "explanation": "Robot lahko cilj doseže z vhoda 2 ali vhoda 4."
  },
  {
    "title": "Izbira tira",
    "type": "Odločanje na razcepih",
    "image": "images/kartica-13.png",
    "imageAlt": "Kartica Izbira tira",
    "question": "Kateri par navodil moramo dati vlaku, da bo lahko odpeljal v London?",
    "options": [
      "1a in 3a",
      "1b in 2a",
      "1a in 2b",
      "1b in 3a"
    ],
    "correct": 1,
    "hint": "Vlak mora najprej na tir, ki vodi proti zgornjemu razcepu, nato pa proti Londonu.",
    "explanation": "Pravilen par navodil je 1b in 2a.",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "title": "Vsak drugi zavoj",
    "type": "Sledenje pravilu",
    "image": "images/kartica-14.png",
    "imageAlt": "Kartica Vsak drugi zavoj",
    "question": "Do katere črke pride mačka?",
    "options": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G"
    ],
    "correct": 1,
    "hint": "Mačka gre naprej in zavije na vsakem drugem križišču. Začni šteti pri prvem križišču, na katerega pride.",
    "explanation": "Mačka pride do črke B.",
    "labels": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G"
    ]
  },
  {
    "title": "Vodni robot",
    "type": "Sledenje pravilu",
    "image": "images/kartica-15.png",
    "imageAlt": "Kartica Vodni robot",
    "question": "V katerem ribniku bo robot zaključil svojo pot?",
    "options": [
      "A",
      "D",
      "H",
      "K"
    ],
    "correct": 0,
    "hint": "Robot iz ribnika A zapluje naprej. Na križiščih se, kadar je mogoče, obrne levo.",
    "explanation": "Robot se vrne v ribnik A.",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "title": "Francoski bober",
    "type": "Ponavljanje barv",
    "image": "images/kartica-16.png",
    "imageAlt": "Kartica Francoski bober",
    "question": "Katere barve bo 10. majica?",
    "options": [
      "modra",
      "bela",
      "rdeča",
      "rumena"
    ],
    "correct": 0,
    "hint": "Barve se ponavljajo v zaporedju: modra, bela, rdeča. Deseta majica je spet prva barva v zaporedju.",
    "explanation": "10. majica bo modra."
  },
  {
    "title": "Rover na Luni",
    "type": "Koordinate",
    "image": "images/kartica-17.png",
    "imageAlt": "Kartica Rover na Luni",
    "question": "Katero oviro bo na svoji poti srečal rover?",
    "options": [
      "hrib",
      "krater",
      "skalo",
      "nobene ovire"
    ],
    "correct": 1,
    "hint": "Sledi zapisanim koordinatam poti. Prva številka je vrstica, druga pa stolpec.",
    "explanation": "Rover bo na poti srečal krater."
  },
  {
    "title": "Kamenčki",
    "type": "Pogoj ČE / SICER",
    "image": "images/kartica-18.png",
    "imageAlt": "Kartica Kamenčki",
    "question": "Koliko kamenčkov bo nabral robot?",
    "options": [
      "3 kamenčke",
      "4 kamenčke",
      "5 kamenčkov",
      "6 kamenčkov"
    ],
    "correct": 2,
    "hint": "Sledi poti po poljih. Če je na polju en kamenček, se robot samo premakne naprej. Če jih je več, pobere enega in skoči za toliko polj naprej, kolikor kamenčkov ostane.",
    "explanation": "Robot bo nabral 5 kamenčkov."
  },
  {
    "title": "Lepe ploščice",
    "type": "Ponavljanje ukazov",
    "image": "images/kartica-19.png",
    "imageAlt": "Kartica Lepe ploščice",
    "question": "Največ koliko rož je robot-bober narisal na posamezno ploščico po izvedbi teh ukazov?",
    "options": [
      "4 rože",
      "5 rož",
      "6 rož",
      "7 rož"
    ],
    "correct": 1,
    "hint": "Ukaz s številko 3 pomeni, da se naslednji izbrani ukaz ponovi trikrat.",
    "explanation": "Največ je na eni ploščici narisal 5 rož."
  },
  {
    "title": "Zamenjava",
    "type": "Najmanjše število korakov",
    "image": "images/kartica-20.png",
    "imageAlt": "Kartica Zamenjava",
    "question": "Koliko zamenjav je potrebnih, da bodo vsi bobri na začetku vrste in vsi kenguruji na koncu?",
    "options": [
      "2 zamenjavi",
      "3 zamenjave",
      "4 zamenjave",
      "5 zamenjav"
    ],
    "correct": 1,
    "hint": "Štej, kolikokrat mora kenguru zamenjati mesto z bobrom, ki je desno od njega.",
    "explanation": "Potrebne so 3 zamenjave."
  },
  {
    "title": "Žaba",
    "type": "Pot in štetje skokov",
    "image": "images/kartica-21.png",
    "imageAlt": "Kartica Žaba",
    "question": "Koliko skokov mora narediti robot-žaba, da bo ujela vse žuželke?",
    "options": [
      "7 skokov",
      "8 skokov",
      "9 skokov",
      "10 skokov"
    ],
    "correct": 2,
    "hint": "Sledi puščicam. Na listih z več žuželkami jih žaba lovi z več obiski, saj z enim skokom ujame eno žuželko.",
    "explanation": "Robot-žaba mora narediti 9 skokov."
  },
  {
    "title": "Robot Nosač",
    "type": "Pravila in pogoji",
    "image": "images/kartica-22.png",
    "imageAlt": "Kartica Robot Nosač",
    "question": "Koliko minut bo robot Nosač potreboval, da prinese 13-kilogramski paket v 3. nadstropje?",
    "options": [
      "6 minut",
      "7 minut",
      "9 minut",
      "12 minut"
    ],
    "correct": 2,
    "hint": "Paket je težji od 10 kg, zato robot za vsak vzpon potrebuje 2 minuti. Pred vsakim vzponom potrebuje še 1 minuto priprave.",
    "explanation": "Robot mora opraviti 3 vzpone. Za vsak vzpon potrebuje 1 minuto priprave in 2 minuti hoje, skupaj 3 × 3 = 9 minut."
  },
  {
    "title": "Beri naokrog",
    "type": "Zaporedje preskokov",
    "image": "images/kartica-23.png",
    "imageAlt": "Kartica Beri naokrog",
    "question": "Katero besedo iščemo?",
    "options": [
      "PROGRAM",
      "PROGA",
      "ROBOT",
      "ROVER"
    ],
    "correct": 0,
    "hint": "Začni pri P in nato preskakuj 1, 2, 3, 4 ... polja.",
    "explanation": "Iskana beseda je PROGRAM."
  },
  {
    "title": "Bobrov jezik",
    "type": "Kodiranje sporočil",
    "image": "images/kartica-24.png",
    "imageAlt": "Kartica Bobrov jezik",
    "question": "Katero zaporedje žvižgov predstavlja besedo BEBRAS?",
    "labels": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": [
      "Zaporedje A",
      "Zaporedje B",
      "Zaporedje C",
      "Zaporedje D"
    ],
    "correct": 3,
    "hint": "Primerjaj vsako črko posebej: B, E, B, R, A, S. Med črkami so premori.",
    "explanation": "Pravilno je zaporedje D, ker ustreza zapisu BEBRAS."
  },
  {
    "title": "Najdi napako",
    "type": "Razhroščevanje",
    "image": "images/kartica-25.png",
    "imageAlt": "Kartica Najdi napako",
    "question": "Bober je prebral besedo in našel napako. Kje je napaka?",
    "options": [
      "Na levi strani kolesa je črka A, morala bi biti R.",
      "Na desni strani kolesa je črka E, morala bi biti A.",
      "Na vrhu kolesa je črka P, morala bi biti M.",
      "Na dnu kolesa je črka G, morala bi biti O."
    ],
    "correct": 0,
    "hint": "Primerjaj kolo s pravilnim branjem besede. Ena črka na levi strani ne ustreza besedi.",
    "explanation": "Napaka je na levi strani kolesa: tam je zapisana črka A, morala pa bi biti R."
  },
  {
    "title": "Šifra",
    "type": "Kodiranje in dekodiranje",
    "image": "images/kartica-26.png",
    "imageAlt": "Kartica Šifra",
    "question": "Prejeto sporočilo je NGR RQBFTCX. Kaj je napisal bober?",
    "options": [
      "LEP POZDRAV",
      "NGR RQBFTCX",
      "JCN NQZBPYT",
      "MIR DOBERDAN"
    ],
    "correct": 0,
    "hint": "Pri dekodiranju vsako črko premakni za 2 mesti nazaj po angleški abecedi.",
    "explanation": "Če vsako črko premaknemo za 2 mesti nazaj, dobimo sporočilo LEP POZDRAV."
  }
];

const finalPassword = "ALGORITEM";
const lettersForPassword = ["A", "L", "G", "O", "R", "I", "T", "E", "M"];

let challenges = [];
let current = 0;
let collectedLetters = [];

const intro = document.getElementById("intro");
const progressPanel = document.getElementById("progressPanel");
const challengeCard = document.getElementById("challengeCard");
const finalPanel = document.getElementById("finalPanel");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const hintBtn = document.getElementById("hintBtn");
const nextBtn = document.getElementById("nextBtn");
const unlockBtn = document.getElementById("unlockBtn");

const progressText = document.getElementById("progressText");
const letters = document.getElementById("letters");
const challengeType = document.getElementById("challengeType");
const challengeTitle = document.getElementById("challengeTitle");
const challengeBody = document.getElementById("challengeBody");
const answerForm = document.getElementById("answerForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("passwordInput");
const finalFeedback = document.getElementById("finalFeedback");

let imageWrap = document.getElementById("imageWrap");
if (!imageWrap && challengeBody) {
  imageWrap = document.createElement("div");
  imageWrap.id = "imageWrap";
  challengeBody.parentNode.insertBefore(imageWrap, challengeBody);
}

startBtn.addEventListener("click", () => {
  resetGame();

  intro.classList.add("hidden");
  finalPanel.classList.add("hidden");
  progressPanel.classList.remove("hidden");
  challengeCard.classList.remove("hidden");

  renderChallenge();
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextChallenge);
unlockBtn.addEventListener("click", unlockFinal);

function resetGame() {
  current = 0;
  collectedLetters = [];
  passwordInput.value = "";
  finalFeedback.className = "feedback";
  finalFeedback.textContent = "";

  challenges = pickRandomChallenges(allChallenges, lettersForPassword.length);
  assignLetters(challenges, lettersForPassword);
}

function pickRandomChallenges(source, count) {
  const copy = [...source];
  shuffleArray(copy);
  return copy.slice(0, count);
}

function assignLetters(selectedChallenges, lettersList) {
  selectedChallenges.forEach((challenge, index) => {
    challenge.letter = lettersList[index];
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

function renderChallenge() {
  const ch = challenges[current];

  progressText.textContent = `${current + 1} / ${challenges.length}`;
  letters.textContent = collectedLetters.length ? collectedLetters.join(" ") : "—";

  challengeType.textContent = ch.type;
  challengeTitle.textContent = ch.title;

  if (imageWrap) {
    imageWrap.innerHTML = `<img src="${ch.image}" alt="${ch.imageAlt || ch.title}" class="card-image">`;
  }
  challengeBody.innerHTML = `<div class="challenge-box"><p>${ch.question}</p></div>`;

  answerForm.innerHTML = "";

  ch.options.forEach((option, index) => {
    const answerLabel = document.createElement("label");
    answerLabel.className = "answer";
    const oznaka = ch.labels ? ch.labels[index] : String.fromCharCode(65 + index);

    answerLabel.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      <span><strong>${oznaka}.</strong> ${option}</span>
    `;

    answerForm.appendChild(answerLabel);
  });

  clearFeedback();
  checkBtn.classList.remove("hidden");
  hintBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
}

function selectedAnswer() {
  const checked = answerForm.querySelector("input[name='answer']:checked");
  return checked ? Number(checked.value) : null;
}

function checkAnswer() {
  const selected = selectedAnswer();
  const ch = challenges[current];

  if (selected === null) {
    showFeedback("Izberite en odgovor.", "info");
    return;
  }

  if (selected === ch.correct) {
    collectedLetters.push(ch.letter);
    letters.textContent = collectedLetters.join(" ");
    showFeedback(`Pravilno! Prejeli ste črko ${ch.letter}. ${ch.explanation}`, "ok");

    checkBtn.classList.add("hidden");
    hintBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    showFeedback("Ni še pravilno. Poskusite ponovno in preverite algoritem, pravilo ali vzorec še enkrat.", "bad");
  }
}

function showHint() {
  const ch = challenges[current];
  showFeedback(`Namig: ${ch.hint}`, "info");
}

function nextChallenge() {
  current++;

  if (current >= challenges.length) {
    challengeCard.classList.add("hidden");
    finalPanel.classList.remove("hidden");
    progressText.textContent = `${challenges.length} / ${challenges.length}`;
    letters.textContent = collectedLetters.join(" ");
  } else {
    renderChallenge();
  }
}

function unlockFinal() {
  const userPassword = passwordInput.value.trim().toUpperCase().replaceAll(" ", "");

  if (userPassword === finalPassword) {
    finalFeedback.className = "feedback ok show";
    finalFeedback.innerHTML = `
      <strong>Odklenjeno!</strong><br>
      Uspešno ste zaključili Bobrovo algoritemsko misijo. 🦫
      <br><br>
      Pogovor za zaključek: Pri kateri nalogi ste uporabili zaporedje, pri kateri pogoj in pri kateri razhroščevanje?
    `;
  } else {
    finalFeedback.className = "feedback bad show";
    finalFeedback.textContent = "Geslo še ni pravilno. Iz zbranih črk sestavite besedo, ki pomeni natančno zaporedje korakov za reševanje problema.";
  }
}

function showFeedback(message, type) {
  feedback.className = `feedback ${type} show`;
  feedback.textContent = message;
}

function clearFeedback() {
  feedback.className = "feedback";
  feedback.textContent = "";
}
