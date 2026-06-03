/*
  Bobrova algoritemska misija - različica s slikami kartic
  --------------------------------------------------------
  V mapi images so slike kartic: kartica-01.png do kartica-26.png.

  Kako zamenjaš sliko pri nalogi?
  image: "images/kartica-04.png"

  Kako dodaš novo nalogo?
  Kopiraj en objekt v seznamu challenges in popravi title, type, image, question,
  options, correct, hint, explanation in letter.

  correct: 0 pomeni prvi odgovor, correct: 1 drugi odgovor itd.
*/

const challenges = [
{
  title: "Zastavice",
  type: "Zaporedje in vzorci",
  image: "images/kartica-03.png",
  question: "Oglejte si vzorec zastavic. Katera zastavica pride naslednja?",
  labels: ["1", "2", "3"],
  options: [
    "Možnost 1",
    "Možnost 2",
    "Možnost 3"
  ],
  correct: 0,
  hint: "Poišči najkrajši del vzorca, ki se ponavlja.",
  explanation: "Naslednja je zastavica številka 1.",
  letter: "A"
}
  {
    title: "Robot usmerja avto",
    type: "Ukazi robota",
    image: "images/kartica-04.png",
    imageAlt: "Kartica Robot usmerja avto",
    question: "Kateri program pripelje avto v Beaverland?",
    options: [
      "Program A",
      "Program B",
      "Program C",
      "Program D"
    ],
    correct: 1,
    hint: "Ukaze preverjajte po vrsti: najprej premik, nato obrat, nato naslednji premik.",
    explanation: "Robot ukaze izvaja natančno po vrsti, zato je treba pot preveriti korak za korakom.",
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
      "Dve opravili na sredini zaporedja",
      "Zadnji dve opravili",
      "Vsa opravila so pravilno razporejena"
    ],
    correct: 1,
    hint: "Rutino preverite od začetka do konca in se vprašajte, ali je vrstni red smiseln.",
    explanation: "Pri algoritmih je vrstni red zelo pomemben. Ena zamenjava lahko spremeni celoten potek.",
    letter: "G"
  },
  {
    title: "Kamenčki",
    type: "Pogoj ČE / SICER",
    image: "images/kartica-18.png",
    imageAlt: "Kartica Kamenčki",
    question: "Kateri programski pojem je pri tej nalogi najpomembnejši?",
    options: [
      "Pogoj oziroma odločitev",
      "Risanje slike",
      "Shranjevanje datoteke",
      "Naključno izbiranje"
    ],
    correct: 0,
    hint: "Bodite pozorni na pravilo ČE ... SICER ...",
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
      "Preveriti mora korake in poiskati, kje se pravilo ne ujema z rezultatom.",
      "Izbrati mora naključno črko.",
      "Preskočiti mora celotno nalogo.",
      "Prebrati mora samo prvo črko."
    ],
    correct: 0,
    hint: "Razhroščevanje pomeni iskanje in popravljanje napake.",
    explanation: "Pri razhroščevanju preverimo algoritem korak za korakom in poiščemo mesto napake.",
    letter: "R"
  },
  {
    title: "Šifra",
    type: "Kodiranje in dekodiranje",
    image: "images/kartica-26.png",
    imageAlt: "Kartica Šifra",
    question: "Kaj je napisal bober, če prejeto sporočilo dekodiramo z zamikom za 2 črki nazaj?",
    options: [
      "LEP POZDRAV",
      "MGR RQDFTCX",
      "NGR RQBFTCX",
      "KDO JE BOBER"
    ],
    correct: 0,
    hint: "Pri šifriranju je bil zamik +2, zato pri branju uporabimo zamik -2.",
    explanation: "Vsako črko premaknemo za dve mesti nazaj po angleški abecedi. NGR RQBFTCX postane LEP POZDRAV.",
    letter: "I"
  }
];

// Geslo je sestavljeno iz zbranih črk. Po želji ga lahko zamenjate.
const finalPassword = "ALGORI";

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
const imageWrap = document.getElementById("imageWrap");
const challengeBody = document.getElementById("challengeBody");
const answerForm = document.getElementById("answerForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("passwordInput");
const finalFeedback = document.getElementById("finalFeedback");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  progressPanel.classList.remove("hidden");
  challengeCard.classList.remove("hidden");
  renderChallenge();
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextChallenge);
unlockBtn.addEventListener("click", unlockFinal);

function renderChallenge() {
  const ch = challenges[current];
  progressText.textContent = `${current + 1} / ${challenges.length}`;
  letters.textContent = collectedLetters.length ? collectedLetters.join(" ") : "—";

  challengeType.textContent = ch.type;
  challengeTitle.textContent = ch.title;

  if (ch.image) {
    imageWrap.innerHTML = `<img src="${ch.image}" alt="${ch.imageAlt || ch.title}" class="card-image">`;
  } else {
    imageWrap.innerHTML = "";
  }

  challengeBody.innerHTML = `<div class="challenge-box"><p>${ch.question}</p></div>`;
  answerForm.innerHTML = "";

  ch.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "answer";
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
     <span><strong>${ch.labels ? ch.labels[index] : String.fromCharCode(65 + index)}.</strong> ${option}</span>
    `;
    answerForm.appendChild(label);
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
    showFeedback("Izberi en odgovor.", "info");
    return;
  }

  if (selected === ch.correct) {
    if (!collectedLetters.includes(ch.letter)) collectedLetters.push(ch.letter);
    letters.textContent = collectedLetters.join(" ");
    showFeedback(`Pravilno! Prejeli ste črko ${ch.letter}. ${ch.explanation}`, "ok");
    checkBtn.classList.add("hidden");
    hintBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    showFeedback("Ni še pravilno. Preverite kartico in poskusite ponovno.", "bad");
  }
}

function showHint() {
  showFeedback(`Namig: ${challenges[current].hint}`, "info");
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
      Uspešno ste zaključili Bobrovo algoritemsko misijo. 🦫<br><br>
      Pogovor za zaključek: Kje ste uporabili zaporedje, kje pogoj in kje razhroščevanje?
    `;
  } else {
    finalFeedback.className = "feedback bad show";
    finalFeedback.textContent = "Geslo še ni pravilno. Preverite zbrane črke in poskusite znova.";
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
