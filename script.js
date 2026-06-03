/*
  Bobrova algoritemska misija
  ---------------------------------------------------
  Popravljena različica:
  - dodane so 3 naloge za končno geslo ALGORITEM
  - naloge se samodejno premešajo ob kliku na gumb "Začni misijo"
  - podpira slike kartic iz mape images
  - podpira oznake odgovorov 1/2/3 ali A/B/C/D
*/

const challenges = [
  {
    title: "Zastavice",
    type: "Zaporedje in vzorci",
    image: "images/kartica-03.png",
    imageAlt: "Kartica Zastavice",
    question: "Oglejte si vzorec zastavic. Katera zastavica pride naslednja?",
    labels: ["1", "2", "3"],
    options: [
      "zastavica številka 1",
      "zastavica številka 2",
      "zastavica številka 3"
    ],
    correct: 0,
    hint: "Poiščite najkrajši del vzorca, ki se ponavlja.",
    explanation: "Naslednja je zastavica številka 1.",
    letter: "A"
  },
  {
    title: "Robot usmerja avto",
    type: "Ukazi robota",
    image: "images/kartica-04.png",
    imageAlt: "Kartica Robot usmerja avto",
    question: "Poglejte kartico in izberite program, ki pripelje avto v Beaverland.",
    labels: ["A", "B", "C", "D"],
    options: [
      "Naprej 1 → Levo → Naprej 1 → Desno → Naprej 3",
      "Naprej 3 → Desno → Naprej 1 → Levo → Naprej 1",
      "Naprej 3 → Levo → Naprej 1 → Desno → Naprej 1",
      "Naprej 1 → Desno → Naprej 1 → Levo → Naprej 3"
    ],
    correct: 3,
    hint: "Najprej preverite, koliko kvadratkov se avto premakne naravnost.",
    explanation: "Pravilen je program D, ker sledi narisani poti.",
    letter: "L"
  },
  {
    title: "Jutranja rutina",
    type: "Zaporedje korakov",
    image: "images/kartica-07.png",
    imageAlt: "Kartica Jutranja rutina",
    question: "Kateri dve opravili sta na napačnem mestu?",
    options: [
      "Prvi dve opravili",
      "Dve opravili v sredini zaporedja",
      "Zadnji dve opravili",
      "Nobeno opravilo ni na napačnem mestu"
    ],
    correct: 1,
    hint: "Algoritem preverjajte po vrsti, od prvega koraka proti zadnjemu.",
    explanation: "Pri zaporedju moramo preveriti, kje se logični vrstni red prekine.",
    letter: "G"
  },
  {
    title: "Kamenčki",
    type: "Pogoj ČE / SICER",
    image: "images/kartica-18.png",
    imageAlt: "Kartica Kamenčki",
    question: "Kateri programski pojem je pri tej nalogi najpomembnejši?",
    options: [
      "Naključno izbiranje",
      "Pogoj oziroma odločitev",
      "Risanje slike",
      "Shranjevanje fotografije"
    ],
    correct: 1,
    hint: "Bodite pozorni na besedi ČE in SICER.",
    explanation: "Besedi ČE in SICER pomenita, da program izvede različne ukaze glede na pogoj.",
    letter: "O"
  },
  {
    title: "Najdi napako",
    type: "Razhroščevanje",
    image: "images/kartica-25.png",
    imageAlt: "Kartica Najdi napako",
    question: "Kaj pomeni, da mora bober nalogo razhroščiti?",
    options: [
      "Da mora izbrisati vse odgovore.",
      "Da mora preveriti korake in najti mesto, kjer se pravilo ne ujema z rezultatom.",
      "Da mora nalogo rešiti čim hitreje.",
      "Da mora izbrati naključno črko."
    ],
    correct: 1,
    hint: "Razhroščevanje pomeni iskanje in popravljanje napake.",
    explanation: "Pri razhroščevanju preverimo algoritem korak za korakom in poiščemo, kje se zgodi napaka.",
    letter: "R"
  },
  {
    title: "Šifra",
    type: "Kodiranje in dekodiranje",
    image: "images/kartica-26.png",
    imageAlt: "Kartica Šifra",
    question: "Kaj naredimo pri dekodiranju sporočila, če je bilo pri šifriranju uporabljeno premikanje črk za 2 mesti naprej?",
    options: [
      "Vsako črko premaknemo za 2 mesti nazaj.",
      "Vsako črko premaknemo za 2 mesti naprej.",
      "Vse črke zamenjamo s številkami.",
      "Preberemo samo vsako drugo črko."
    ],
    correct: 0,
    hint: "Pri dekodiranju naredimo obratni postopek.",
    explanation: "Za dekodiranje naredimo obratno operacijo: vsako črko premaknemo za 2 mesti nazaj.",
    letter: "I"
  },
  {
    title: "Mozaik iz kamnov",
    type: "Zaporedje ukazov",
    image: "images/kartica-11.png",
    imageAlt: "Kartica Mozaik iz kamnov",
    question: "Kateri programski pojem je pri tej nalogi najpomembnejši?",
    options: [
      "Zaporedje ukazov",
      "Merjenje temperature",
      "Spletno iskanje",
      "Snemanje zvoka"
    ],
    correct: 0,
    hint: "Robot izvaja navodila po vrsti, korak za korakom.",
    explanation: "Pri tej nalogi je v ospredju zaporedje ukazov, saj robot sledi navodilom po točno določenem vrstnem redu.",
    letter: "T"
  },
  {
    title: "Bobrov jezik",
    type: "Kodiranje sporočil",
    image: "images/kartica-24.png",
    imageAlt: "Kartica Bobrov jezik",
    question: "Iz česa so sestavljene črke v bobrovem jeziku?",
    options: [
      "Iz dolgih in kratkih žvižgov",
      "Iz števil",
      "Iz barvnih pik",
      "Iz puščic"
    ],
    correct: 0,
    hint: "Poglejte opis naloge nad vprašanjem.",
    explanation: "Črke v bobrovem jeziku so sestavljene iz kombinacij dolgih in kratkih žvižgov.",
    letter: "E"
  },
  {
    title: "Robot Nosač",
    type: "Pravila in pogoji",
    image: "images/kartica-22.png",
    imageAlt: "Kartica Robot Nosač",
    question: "Kaj mora robot pri prenašanju paketa upoštevati?",
    options: [
      "Samo barvo paketa",
      "Težo paketa in čas priprave pred vsakim vzponom",
      "Samo število nadstropij",
      "Samo hitrost dvigala"
    ],
    correct: 1,
    hint: "V opisu naloge sta pomembna teža paketa in priprava pred vzponom.",
    explanation: "Robot mora upoštevati težo paketa in tudi to, da pred vsakim vzponom potrebuje 1 minuto za pripravo.",
    letter: "M"
  }
];

const finalPassword = "ALGORITEM";

let current = 0;
let collectedLetters = [];
let gameStarted = false;

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

// Če v index.html že obstaja imageWrap, ga uporabi.
// Če ne obstaja, ga program ustvari sam nad besedilom naloge.
let imageWrap = document.getElementById("imageWrap");
if (!imageWrap && challengeBody) {
  imageWrap = document.createElement("div");
  imageWrap.id = "imageWrap";
  challengeBody.parentNode.insertBefore(imageWrap, challengeBody);
}

startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    shuffleChallenges();
    gameStarted = true;
  }

  intro.classList.add("hidden");
  progressPanel.classList.remove("hidden");
  challengeCard.classList.remove("hidden");
  renderChallenge();
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextChallenge);
unlockBtn.addEventListener("click", unlockFinal);

function shuffleChallenges() {
  for (let i = challenges.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [challenges[i], challenges[randomIndex]] = [challenges[randomIndex], challenges[i]];
  }
}

function renderChallenge() {
  const ch = challenges[current];

  progressText.textContent = `${current + 1} / ${challenges.length}`;
  letters.textContent = collectedLetters.length ? collectedLetters.join(" ") : "—";

  challengeType.textContent = ch.type;
  challengeTitle.textContent = ch.title;

  if (ch.image && imageWrap) {
    imageWrap.innerHTML = `<img src="${ch.image}" alt="${ch.imageAlt || ch.title}" class="card-image">`;
  } else if (imageWrap) {
    imageWrap.innerHTML = "";
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
    showFeedback("Ni še pravilno. Poskusite ponovno in preverite algoritem korak za korakom.", "bad");
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
      Pogovor za zaključek: Kje ste uporabili zaporedje, kje pogoj in kje razhroščevanje?
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
