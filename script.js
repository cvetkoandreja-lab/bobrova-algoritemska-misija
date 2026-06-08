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
    "question": "Kaj moraš ugotoviti pri tej nalogi?",
    "options": [
      "V kakšnem vrstnem redu je bober uporabil štempiljke.",
      "Koliko štempiljk ima bober.",
      "Katera štempiljka je največja.",
      "Katera štempiljka je najlepša."
    ],
    "correct": 0,
    "hint": "Opazuj, kateri deli slike prekrivajo druge.",
    "explanation": "Ugotoviti je treba vrstni red uporabe štempiljk."
  },
  {
    "title": "Slojevita slika",
    "type": "Zaporedje plasti",
    "image": "images/kartica-02.png",
    "imageAlt": "Kartica Slojevita slika",
    "question": "Kateri postopek je pri tej nalogi najpomembnejši?",
    "options": [
      "Branje plasti slike od spodaj navzgor.",
      "Štetje vseh živali.",
      "Merjenje velikosti drevesa.",
      "Iskanje najkrajše besede."
    ],
    "correct": 0,
    "hint": "Tisto, kar je v ozadju, je bilo običajno dodano prej.",
    "explanation": "Pri slojeviti sliki razmišljamo, kaj je spodaj in kaj je bilo dodano pozneje."
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
    "question": "Kaj prikazujejo ukazi POLOŽI pri tej nalogi?",
    "options": [
      "Zaporedje, v katerem robot zlaga piškote enega na drugega.",
      "Koliko piškotov robot poje.",
      "Barve piškotov.",
      "Kje robot kupi piškote."
    ],
    "correct": 0,
    "hint": "Vsak naslednji ukaz položi nov piškot na kupček.",
    "explanation": "Ukazi določajo zaporedje skladanja piškotov."
  },
  {
    "title": "Ravnotežje",
    "type": "Logično sklepanje",
    "image": "images/kartica-06.png",
    "imageAlt": "Kartica Ravnotežje",
    "question": "Kaj moraš primerjati pri tej nalogi?",
    "options": [
      "Težo bobra, tiskalnika in motorja.",
      "Barvo motorja.",
      "Velikost tiskalnika.",
      "Število bobrovih zob."
    ],
    "correct": 0,
    "hint": "Opazuj, katera stran tehtnice je nižje.",
    "explanation": "Pri nalogi sklepamo iz prikaza ravnotežja oziroma neravnotežja."
  },
  {
    "title": "Jutranja rutina",
    "type": "Zaporedje korakov",
    "image": "images/kartica-07.png",
    "imageAlt": "Kartica Jutranja rutina",
    "question": "Kaj moraš poiskati v zaporedju jutranjih opravil?",
    "options": [
      "Dve opravili, ki sta na napačnem mestu.",
      "Najljubši zajtrk bobra.",
      "Koliko je ura.",
      "Koliko zob ima bober."
    ],
    "correct": 0,
    "hint": "Algoritem preverjaj od začetka proti koncu.",
    "explanation": "Pri rutini iščemo koraka, ki sta v napačnem vrstnem redu."
  },
  {
    "title": "Barvni stolp",
    "type": "Ponavljanje vzorca",
    "image": "images/kartica-08.png",
    "imageAlt": "Kartica Barvni stolp",
    "question": "Kateri vzorec Bobrčica ponavlja pri zlaganju obročev?",
    "options": [
      "Rdeč → zelen → rumen",
      "Rumen → zelen → rdeč",
      "Zelen → rdeč → rumen",
      "Rdeč → rumen → zelen"
    ],
    "correct": 0,
    "hint": "Vzorec je zapisan v navodilu naloge.",
    "explanation": "Bobrčica ponavlja zaporedje rdeč, zelen, rumen."
  },
  {
    "title": "Bobrova hiša",
    "type": "Pravila odločanja",
    "image": "images/kartica-09.png",
    "imageAlt": "Kartica Bobrova hiša",
    "question": "Kaj določa, ali bo deblo uporabljeno za streho?",
    "options": [
      "Če je daljše od debla na njegovi desni.",
      "Če je krajše od debla na njegovi desni.",
      "Če je rdeče barve.",
      "Če ima številko 1."
    ],
    "correct": 0,
    "hint": "Preberi drugi korak pravila.",
    "explanation": "Deblo uporabi za streho, če je daljše od debla na njegovi desni."
  },
  {
    "title": "Preberi besede",
    "type": "Drevo možnosti",
    "image": "images/kartica-10.png",
    "imageAlt": "Kartica Preberi besede",
    "question": "Kaj predstavlja drevo možnosti na kartici?",
    "options": [
      "Možne poti za sestavljanje besed.",
      "Zemljevid gozda.",
      "Seznam živali.",
      "Urnik pouka."
    ],
    "correct": 0,
    "hint": "Vsaka pot od začetka do konca tvori besedo.",
    "explanation": "Drevo možnosti prikazuje poti, iz katerih preberemo besede."
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
    "question": "Kaj moraš pri tej nalogi upoštevati?",
    "options": [
      "Smer puščice in število puščic na polju, kjer robot stoji.",
      "Samo barvo kvadratov.",
      "Samo velikost robota.",
      "Samo prvi vhod."
    ],
    "correct": 0,
    "hint": "Robot ne upošteva puščic na poljih, čez katera gre.",
    "explanation": "Robot se premika v smeri puščice za toliko polj, kolikor puščic je na trenutnem polju."
  },
  {
    "title": "Izbira tira",
    "type": "Odločanje na razcepih",
    "image": "images/kartica-13.png",
    "imageAlt": "Kartica Izbira tira",
    "question": "Kaj določajo navodila a in b pri tej nalogi?",
    "options": [
      "Smer vožnje vlaka na razcepih.",
      "Barvo vlaka.",
      "Hitrost vlaka.",
      "Število potnikov."
    ],
    "correct": 0,
    "hint": "Na vsakem razcepu moraš izbrati pravo smer.",
    "explanation": "Navodila določajo, kako se vlak premakne na razcepu."
  },
  {
    "title": "Vsak drugi zavoj",
    "type": "Sledenje pravilu",
    "image": "images/kartica-14.png",
    "imageAlt": "Kartica Vsak drugi zavoj",
    "question": "Katero pravilo uporablja robotska mačka?",
    "options": [
      "Zavije na vsakem drugem križišču.",
      "Zavije na vsakem križišču.",
      "Nikoli ne zavije.",
      "Vedno gre nazaj."
    ],
    "correct": 0,
    "hint": "Štej križišča po vrsti.",
    "explanation": "Mačka se premika naprej in zavije na vsakem drugem križišču."
  },
  {
    "title": "Vodni robot",
    "type": "Sledenje pravilu",
    "image": "images/kartica-15.png",
    "imageAlt": "Kartica Vodni robot",
    "question": "Katero pravilo uporablja vodni robot?",
    "options": [
      "Pluje naprej in kadar je mogoče, se obrne levo.",
      "Vedno se obrne desno.",
      "Nikoli ne zavije.",
      "Vedno se ustavi pri A."
    ],
    "correct": 0,
    "hint": "Pravilo je zapisano v navodilu kartice.",
    "explanation": "Robot pluje naprej in se obrne levo, kadar je to mogoče."
  },
  {
    "title": "Francoski bober",
    "type": "Ponavljanje barv",
    "image": "images/kartica-16.png",
    "imageAlt": "Kartica Francoski bober",
    "question": "Kateri vzorec barv se ponavlja pri majicah?",
    "options": [
      "modra → bela → rdeča",
      "rdeča → bela → modra",
      "bela → modra → rdeča",
      "modra → rdeča → bela"
    ],
    "correct": 0,
    "hint": "V navodilu piše, katero majico nosi najprej, drugo in tretjo.",
    "explanation": "Vzorec barv je modra, bela, rdeča."
  },
  {
    "title": "Rover na Luni",
    "type": "Koordinate",
    "image": "images/kartica-17.png",
    "imageAlt": "Kartica Rover na Luni",
    "question": "Kaj opisujejo pari števil na poti roverja?",
    "options": [
      "Vrstico in stolpec na zemljevidu.",
      "Hitrost in čas.",
      "Dolžino in širino roverja.",
      "Število koles in anten."
    ],
    "correct": 0,
    "hint": "Prva številka pomeni vrstico, druga številka stolpec.",
    "explanation": "Par števil opisuje položaj na mreži."
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
    "question": "Kaj pomeni ukaz s številko 3 pri tej nalogi?",
    "options": [
      "Ponovi izbrani ukaz trikrat.",
      "Premakni se za tri vrstice navzgor.",
      "Nariši tri ploščice.",
      "Izbriši tri rože."
    ],
    "correct": 0,
    "hint": "Preberi razlago ikone s številko 3.",
    "explanation": "Ukaz s številko 3 pomeni, da robot izbrani ukaz ponovi trikrat."
  },
  {
    "title": "Zamenjava",
    "type": "Najmanjše število korakov",
    "image": "images/kartica-20.png",
    "imageAlt": "Kartica Zamenjava",
    "question": "Kakšno omejitev imaš pri zamenjavi kartic?",
    "options": [
      "Zamenjaš lahko le dve sosednji karti.",
      "Zamenjaš lahko poljubne tri karte.",
      "Kartic ne smeš premikati.",
      "Premakneš lahko samo kenguruje."
    ],
    "correct": 0,
    "hint": "Omejitev je zapisana v navodilu naloge.",
    "explanation": "Dovoljena je samo zamenjava dveh sosednjih kart."
  },
  {
    "title": "Žaba",
    "type": "Pot in štetje skokov",
    "image": "images/kartica-21.png",
    "imageAlt": "Kartica Žaba",
    "question": "Kaj moraš ugotoviti pri tej nalogi?",
    "options": [
      "Koliko skokov mora narediti robot-žaba, da ujame vse žuželke.",
      "Kakšne barve je žaba.",
      "Koliko listov je v ribniku.",
      "Kje spi žaba."
    ],
    "correct": 0,
    "hint": "Sledi puščicam od lista do lista.",
    "explanation": "Pri nalogi štejemo skoke, s katerimi žaba ujame vse žuželke."
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
    "question": "Kakšno pravilo uporablja kolo pri branju črk?",
    "options": [
      "Najprej preskoči 1 polje, nato 2 polji, nato 3 polja itd.",
      "Vedno preskoči 1 polje.",
      "Bere samo samoglasnike.",
      "Bere črke od spodaj navzgor."
    ],
    "correct": 0,
    "hint": "Pravilo je zapisano v navodilu kartice.",
    "explanation": "Kolo sledi zaporedju preskokov 1, 2, 3 ..."
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
