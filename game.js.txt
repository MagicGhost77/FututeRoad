let money = 200;
let reputation = 1;
let innovation = 0;
let path = ""; // Affordable, Luxury, Eco
let currentLang = "en"; // default language

// Text dictionary
const texts = {
  en: {
    welcome: "Welcome to Cairo, 2040. You are Hassan, founder of a car startup.",
    start: "Start Game",
    chapter1: "Chapter 1: The First Spark\nDo you want to:",
    affordable: "Affordable Cars (A)",
    luxury: "Luxury Innovation (B)",
    eco: "Eco Responsibility (C)",
    rivals: "Chapter 2: Rivals Rise\nThree competitors appear: Falcon Motors, Nile Auto, GreenWheel.",
    crisisAffordable: "Chapter 3: Crisis!\nA battery shortage threatens production.",
    crisisLuxury: "Chapter 3: Crisis!\nA prototype explodes during testing.",
    crisisEco: "Chapter 3: Crisis!\nYour eco supplier is caught polluting.",
    expansion: "Chapter 4: Expansion\nYour company grows. Where do you expand?",
    recession: "Chapter 5: Turning Point\nA global recession hits. What do you do?",
    globalStage: "Chapter 6: Global Stage\nRivals intensify their attacks.",
    finalChallenge: "Chapter 7: Final Challenge\nGovernment offers a mega taxi contract.",
    randomFunding: "Random Event: Government subsidy! You gain extra funding.",
    randomRumors: "Random Event: Rival spreads rumors. Your reputation suffers.",
    randomBreakthrough: "Random Event: Breakthrough in battery tech! Innovation rises.",
    randomRepairs: "Random Event: Unexpected repair costs drain your funds.",
    endingAffordableGood: "Affordable Path - Good Ending:\nYou become the People's Hero, cars everywhere, clean streets!",
    endingAffordableBad: "Affordable Path - Bad Ending:\nRivals crush you with better tech, your cars become obsolete.",
    endingLuxuryGood: "Luxury Path - Good Ending:\nYou’re a global icon, your cars are status symbols!",
    endingLuxuryBad: "Luxury Path - Bad Ending:\nInvestors abandon you after repeated failures.",
    endingEcoGood: "Eco Path - Good Ending:\nCairo becomes the first green megacity, powered by your cars!",
    endingEcoBad: "Eco Path - Bad Ending:\nCosts bankrupt you, and your dream dies.",
    restart: "Restart Game",
    continue: "Continue"
  },
  ar: {
    welcome: "مرحبًا بك في القاهرة، 2040. أنت حسن، مؤسس شركة سيارات ناشئة.",
    start: "ابدأ اللعبة",
    chapter1: "الفصل 1: الشرارة الأولى\nهل تريد أن:",
    affordable: "سيارات اقتصادية (أ)",
    luxury: "ابتكار فاخر (ب)",
    eco: "مسؤولية بيئية (ج)",
    rivals: "الفصل 2: صعود المنافسين\nظهر ثلاثة منافسين: فالكون موتورز، نايل أوتو، جرين ويل.",
    crisisAffordable: "الفصل 3: أزمة!\nنقص البطاريات يهدد الإنتاج.",
    crisisLuxury: "الفصل 3: أزمة!\nانفجر النموذج الأولي أثناء الاختبار.",
    crisisEco: "الفصل 3: أزمة!\nتم ضبط المورد البيئي وهو يلوث.",
    expansion: "الفصل 4: التوسع\nتنمو شركتك. أين تتوسع؟",
    recession: "الفصل 5: نقطة التحول\nضرب ركود عالمي. ماذا تفعل؟",
    globalStage: "الفصل 6: المسرح العالمي\nيزداد هجوم المنافسين.",
    finalChallenge: "الفصل 7: التحدي الأخير\nتقدم الحكومة عقد سيارات أجرة ضخم.",
    randomFunding: "حدث عشوائي: دعم حكومي! تحصل على تمويل إضافي.",
    randomRumors: "حدث عشوائي: منافس ينشر شائعات. سمعتك تتضرر.",
    randomBreakthrough: "حدث عشوائي: اختراق في تقنية البطاريات! يرتفع الابتكار.",
    randomRepairs: "حدث عشوائي: تكاليف إصلاح غير متوقعة تستنزف أموالك.",
    endingAffordableGood: "النهاية الاقتصادية - جيدة:\nتصبح بطل الشعب، سياراتك في كل مكان والشوارع نظيفة!",
    endingAffordableBad: "النهاية الاقتصادية - سيئة:\nيسحقك المنافسون بتقنية أفضل، وتصبح سياراتك قديمة.",
    endingLuxuryGood: "النهاية الفاخرة - جيدة:\nتصبح أيقونة عالمية، سياراتك رمز للمكانة!",
    endingLuxuryBad: "النهاية الفاخرة - سيئة:\nيهجرك المستثمرون بعد إخفاقات متكررة.",
    endingEcoGood: "النهاية البيئية - جيدة:\nتصبح القاهرة أول مدينة خضراء كبرى بفضل سياراتك!",
    endingEcoBad: "النهاية البيئية - سيئة:\nالإفلاس ينهي حلمك.",
    restart: "أعد تشغيل اللعبة",
    continue: "استمر"
  }
};
function updateStats() {
  document.getElementById("moneyFill").style.width = Math.min(100, money) + "%";
  document.getElementById("reputationFill").style.width = Math.min(100, reputation * 20) + "%";
  document.getElementById("innovationFill").style.width = Math.min(100, innovation * 20) + "%";
}

function showStory(text, choices) {
  document.getElementById("story").innerText = text;
  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  choices.forEach(c => {
    let btn = document.createElement("button");
    btn.innerText = c.text;
    btn.onclick = c.action;
    choicesDiv.appendChild(btn);
  });
  updateStats();
}

function updateCarImage() {
  let img = document.getElementById("carImage");
  img.classList.remove("show");
  setTimeout(() => {
    if (path === "Affordable") {
      img.src = "affordable.jpg";
      document.body.className = "affordable";
    } else if (path === "Luxury") {
      img.src = "luxury.jpg";
      document.body.className = "luxury";
    } else if (path === "Eco") {
      img.src = "eco.jpg";
      document.body.className = "eco";
    }
    img.classList.add("show");
  }, 100);
}

function randomEvent(nextChapter) {
  let roll = Math.random();
  if (roll < 0.25) {
    money += 50;
    showStory(texts[currentLang].randomFunding, [{ text: texts[currentLang].continue, action: nextChapter }]);
  } else if (roll < 0.5) {
    reputation -= 1;
    showStory(texts[currentLang].randomRumors, [{ text: texts[currentLang].continue, action: nextChapter }]);
  } else if (roll < 0.75) {
    innovation += 1;
    showStory(texts[currentLang].randomBreakthrough, [{ text: texts[currentLang].continue, action: nextChapter }]);
  } else {
    money -= 30;
    showStory(texts[currentLang].randomRepairs, [{ text: texts[currentLang].continue, action: nextChapter }]);
  }
}
function startGame() {
  showStory(texts[currentLang].chapter1, [
    { text: texts[currentLang].affordable, action: choiceA },
    { text: texts[currentLang].luxury, action: choiceB },
    { text: texts[currentLang].eco, action: choiceC }
  ]);
}

function choiceA() { path = "Affordable"; money += 50; reputation += 2; updateCarImage(); randomEvent(chapter2); }
function choiceB() { path = "Luxury"; money += 100; innovation += 2; updateCarImage(); randomEvent(chapter2); }
function choiceC() { path = "Eco"; reputation += 3; innovation += 1; updateCarImage(); randomEvent(chapter2); }

function chapter2() {
  showStory(texts[currentLang].rivals, [
    { text: "Option 1", action: () => { reputation += 1; randomEvent(chapter3); } },
    { text: "Option 2", action: () => { innovation += 1; randomEvent(chapter3); } },
    { text: "Option 3", action: () => { money += 50; randomEvent(chapter3); } }
  ]);
}

function chapter3() {
  if (path === "Affordable") {
    showStory(texts[currentLang].crisisAffordable, [
      { text: "Option 1", action: () => { money += 50; randomEvent(chapter4); } },
      { text: "Option 2", action: () => { reputation -= 1; randomEvent(chapter4); } }
    ]);
  } else if (path === "Luxury") {
    showStory(texts[currentLang].crisisLuxury, [
      { text: "Option 1", action: () => { reputation += 1; randomEvent(chapter4); } },
      { text: "Option 2", action: () => { innovation += 2; randomEvent(chapter4); } }
    ]);
  } else {
    showStory(texts[currentLang].crisisEco, [
      { text: "Option 1", action: () => { reputation += 1; money -= 50; randomEvent(chapter4); } },
      { text: "Option 2", action: () => { money += 50; reputation -= 2; randomEvent(chapter4); } }
    ]);
  }
}

function chapter4() {
  showStory(texts[currentLang].expansion, [
    { text: "Option 1", action: () => { money += 100; reputation += 2; randomEvent(chapter5); } },
    { text: "Option 2", action: () => { innovation += 2; money += 50; randomEvent(chapter5); } },
    { text: "Option 3", action: () => { reputation += 3; innovation += 1; randomEvent(chapter5); } }
  ]);
}

function chapter5() {
  showStory(texts[currentLang].recession, [
    { text: "Option 1", action: () => { money += 50; reputation -= 1; randomEvent(chapter6); } },
    { text: "Option 2", action: () => { innovation += 2; money -= 50; randomEvent(chapter6); } },
    { text: "Option 3", action: () => { reputation += 1; money += 50; randomEvent(chapter6); } }
  ]);
}

function chapter6() {
  showStory(texts[currentLang].globalStage, [
    { text: "Option 1", action: () => { innovation += 2; randomEvent(chapter7); } },
    { text: "Option 2", action: () => { reputation += 2; randomEvent(chapter7); } },
    { text: "Option 3", action: () => { money += 100; randomEvent(chapter7); } }
  ]);
}

function chapter7() {
  showStory(texts[currentLang].finalChallenge, [
    { text: "Option 1", action: () => { reputation += 2; ending(); } },
    { text: "Option 2", action: () => { innovation += 3; ending(); } },
    { text: "Option 3", action: () => { reputation += 2; innovation += 2; ending(); } }
  ]);
}
function ending() {
  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (path === "Affordable") {
    if (reputation >= 4) {
      showStory(texts[currentLang].endingAffordableGood, []);
    } else {
      showStory(texts[currentLang].endingAffordableBad, []);
    }
  } else if (path === "Luxury") {
    if (innovation >= 5) {
      showStory(texts[currentLang].endingLuxuryGood, []);
    } else {
      showStory(texts[currentLang].endingLuxuryBad, []);
    }
  } else {
    if (reputation >= 5 && innovation >= 3) {
      showStory(texts[currentLang].endingEcoGood, []);
    } else {
      showStory(texts[currentLang].endingEcoBad, []);
    }
  }

  // Restart button
  let restartBtn = document.createElement("button");
  restartBtn.innerText = texts[currentLang].restart;
  restartBtn.onclick = () => {
    money = 200; reputation = 1; innovation = 0; path = "";
    document.body.className = "";
    document.getElementById("carImage").src = "";
    document.getElementById("carImage").classList.remove("show");
    document.getElementById("startBtn").style.display = "block";
    document.getElementById("story").innerText = texts[currentLang].welcome;
    document.getElementById("choices").innerHTML = "";
    updateStats();
  };
  choicesDiv.appendChild(restartBtn);
}
// Language toggle button
document.getElementById("langBtn").onclick = () => {
  if (currentLang === "en") {
    currentLang = "ar";
    document.getElementById("langBtn").innerText = "Switch to English";
    document.getElementById("story").innerText = texts.ar.welcome;
    document.getElementById("startBtn").innerText = texts.ar.start;
  } else {
    currentLang = "en";
    document.getElementById("langBtn").innerText = "Switch to Arabic";
    document.getElementById("story").innerText = texts.en.welcome;
    document.getElementById("startBtn").innerText = texts.en.start;
  }
};

// Attach Start button
document.getElementById("startBtn").onclick = () => {
  document.getElementById("startBtn").style.display = "none";
  startGame();
};