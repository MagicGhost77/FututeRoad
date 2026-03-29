let money = 200;
let reputation = 1;
let innovation = 0;
let path = "";
let currentLang = "en";

const texts = {
  en: {
    welcome: "Welcome to Cairo, 2040. You are Hassan, founder of a car startup.",
    start: "Start Game",
    chapter1: "Chapter 1: The First Spark\nDo you want to:",
    affordable: "Affordable Cars (A)",
    luxury: "Luxury Innovation (B)",
    eco: "Eco Responsibility (C)",

    rivals: "Chapter 2: Rivals Rise\nThree competitors appear: Falcon Motors, Nile Auto, GreenWheel.",
    rivalChoice1: "Negotiate with Falcon Motors",
    rivalChoice2: "Invest in Nile Auto technology",
    rivalChoice3: "Launch ad campaign against GreenWheel",

    crisisAffordable: "Chapter 3: Crisis!\nA battery shortage threatens production.",
    crisisAffordableChoice1: "Find alternative battery suppliers",
    crisisAffordableChoice2: "Cut production temporarily",
    crisisLuxury: "Chapter 3: Crisis!\nA prototype explodes during testing.",
    crisisLuxuryChoice1: "Rebuild prototype with safer design",
    crisisLuxuryChoice2: "Delay launch and reassure investors",
    crisisEco: "Chapter 3: Crisis!\nYour eco supplier is caught polluting.",
    crisisEcoChoice1: "Expose supplier and switch partners",
    crisisEcoChoice2: "Cover up scandal to save money",

    expansion: "Chapter 4: Expansion\nYour company grows. Where do you expand?",
    expansionChoice1: "Expand into Middle East markets",
    expansionChoice2: "Open research lab in Europe",
    expansionChoice3: "Focus on African eco‑cities",

    recession: "Chapter 5: Turning Point\nA global recession hits. What do you do?",
    recessionChoice1: "Cut costs aggressively",
    recessionChoice2: "Invest in innovation despite risks",
    recessionChoice3: "Seek government bailout",

    globalStage: "Chapter 6: Global Stage\nRivals intensify their attacks.",
    globalChoice1: "Launch breakthrough innovation",
    globalChoice2: "Strengthen brand reputation",
    globalChoice3: "Raise massive funding",

    finalChallenge: "Chapter 7: Final Challenge\nGovernment offers a mega taxi contract.",
    finalChoice1: "Accept contract and expand reputation",
    finalChoice2: "Focus on innovation instead",
    finalChoice3: "Balance both reputation and innovation",

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
    rivalChoice1: "تفاوض مع فالكون موتورز",
    rivalChoice2: "استثمر في تقنية نايل أوتو",
    rivalChoice3: "أطلق حملة ضد جرين ويل",

    crisisAffordable: "الفصل 3: أزمة!\nنقص البطاريات يهدد الإنتاج.",
    crisisAffordableChoice1: "ابحث عن موردين بديلين للبطاريات",
    crisisAffordableChoice2: "قلل الإنتاج مؤقتًا",
    crisisLuxury: "الفصل 3: أزمة!\nانفجر النموذج الأولي أثناء الاختبار.",
    crisisLuxuryChoice1: "أعد بناء النموذج بتصميم أكثر أمانًا",
    crisisLuxuryChoice2: "أجل الإطلاق وطمئن المستثمرين",
    crisisEco: "الفصل 3: أزمة!\nتم ضبط المورد البيئي وهو يلوث.",
    crisisEcoChoice1: "اكشف المورد واستبدله بشريك جديد",
    crisisEcoChoice2: "أخفي الفضيحة لتوفير المال",

    expansion: "الفصل 4: التوسع\nتنمو شركتك. أين تتوسع؟",
    expansionChoice1: "توسع في أسواق الشرق الأوسط",
    expansionChoice2: "افتح مختبر أبحاث في أوروبا",
    expansionChoice3: "ركز على المدن البيئية في أفريقيا",

    recession: "الفصل 5: نقطة التحول\nضرب ركود عالمي. ماذا تفعل؟",
    recessionChoice1: "قلل التكاليف بشكل كبير",
    recessionChoice2: "استثمر في الابتكار رغم المخاطر",
    recessionChoice3: "اطلب إنقاذ حكومي",

    globalStage: "الفصل 6: المسرح العالمي\nيزداد هجوم المنافسين.",
    globalChoice1: "أطلق ابتكارًا ثوريًا",
    globalChoice2: "عزز سمعة العلامة التجارية",
    globalChoice3: "اجمع تمويلًا ضخمًا",

    finalChallenge: "الفصل 7: التحدي الأخير\nتقدم الحكومة عقد سيارات أجرة ضخم.",
    finalChoice1: "اقبل العقد وزد السمعة",
    finalChoice2: "ركز على الابتكار بدلًا من ذلك",
    finalChoice3: "وازن بين السمعة والابتكار",

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
  // Scale money bar relative to 500 max
  let moneyPercent = Math.min(100, (money / 500) * 100);
  document.getElementById("moneyFill").style.width = moneyPercent + "%";

  // Reputation bar (scale out of 10)
  let reputationPercent = Math.min(100, (reputation / 10) * 100);
  document.getElementById("reputationFill").style.width = reputationPercent + "%";

  // Innovation bar (scale out of 10)
  let innovationPercent = Math.min(100, (innovation / 10) * 100);
  document.getElementById("innovationFill").style.width = innovationPercent + "%";
}
function showStory(text, choices) {
  const storyElement = document.getElementById("story");
  storyElement.innerText = text;

  // Reset animation by forcing reflow
  storyElement.style.animation = "none";
  storyElement.offsetHeight; // trigger reflow
  storyElement.style.animation = "fadeIn 1s ease";

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
    { text: texts[currentLang].rivalChoice1, action: () => { reputation += 1; randomEvent(chapter3); } },
    { text: texts[currentLang].rivalChoice2, action: () => { innovation += 1; randomEvent(chapter3); } },
    { text: texts[currentLang].rivalChoice3, action: () => { money += 50; randomEvent(chapter3); } }
  ]);
}

function chapter3() {
  if (path === "Affordable") {
    showStory(texts[currentLang].crisisAffordable, [
      { text: texts[currentLang].crisisAffordableChoice1, action: () => { money += 50; randomEvent(chapter4); } },
      { text: texts[currentLang].crisisAffordableChoice2, action: () => { reputation -= 1; randomEvent(chapter4); } }
    ]);
  } else if (path === "Luxury") {
    showStory(texts[currentLang].crisisLuxury, [
      { text: texts[currentLang].crisisLuxuryChoice1, action: () => { reputation += 1; randomEvent(chapter4); } },
      { text: texts[currentLang].crisisLuxuryChoice2, action: () => { innovation += 2; randomEvent(chapter4); } }
    ]);
  } else {
    showStory(texts[currentLang].crisisEco, [
      { text: texts[currentLang].crisisEcoChoice1, action: () => { reputation += 1; money -= 50; randomEvent(chapter4); } },
      { text: texts[currentLang].crisisEcoChoice2, action: () => { money += 50; reputation -= 2; randomEvent(chapter4); } }
    ]);
  }
}

function chapter4() {
  showStory(texts[currentLang].expansion, [
    { text: texts[currentLang].expansionChoice1, action: () => { money += 100; reputation += 2; randomEvent(chapter5); } },
    { text: texts[currentLang].expansionChoice2, action: () => { innovation += 2; money += 50; randomEvent(chapter5); } },
    { text: texts[currentLang].expansionChoice3, action: () => { reputation += 3; innovation += 1; randomEvent(chapter5); } }
  ]);
}

function chapter5() {
  showStory(texts[currentLang].recession, [
    { text: texts[currentLang].recessionChoice1, action: () => { money += 50; reputation -= 1; randomEvent(chapter6); } },
    { text: texts[currentLang].recessionChoice2, action: () => { innovation += 2; money -= 50; randomEvent(chapter6); } },
    { text: texts[currentLang].recessionChoice3, action: () => { reputation += 1; money += 50; randomEvent(chapter6); } }
  ]);
}

function chapter6() {
  showStory(texts[currentLang].globalStage, [
    { text: texts[currentLang].globalChoice1, action: () => { innovation += 2; randomEvent(chapter7); } },
    { text: texts[currentLang].globalChoice2, action: () => { reputation += 2; randomEvent(chapter7); } },
    { text: texts[currentLang].globalChoice3, action: () => { money += 100; randomEvent(chapter7); } }
  ]);
}

function chapter7() {
  showStory(texts[currentLang].finalChallenge, [
    { text: texts[currentLang].finalChoice1, action: () => { reputation += 2; ending(); } },
    { text: texts[currentLang].finalChoice2, action: () => { innovation += 3; ending(); } },
    { text: texts[currentLang].finalChoice3, action: () => { reputation += 2; innovation += 2; ending(); } }
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
document.getElementById("playerName").style.display = "block";
document.getElementById("updateNameBtn").style.display = "block";

document.getElementById("playerNameLabel").style.display = "block";
document.getElementById("langBtn").style.display = "block";
    document.getElementById("story").innerText =
texts[currentLang].welcome;
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
  
  // Hide input and label
  document.getElementById("playerName").style.display = "none";
  document.getElementById("playerNameLabel").style.display = "none";
  document.getElementById("startBtn").style.display = "none";
document.getElementById("updateNameBtn").style.display = "none";

  document.getElementById("langBtn").style.display = "none";

  // Show updated welcome immediately
  document.getElementById("story").innerText = texts[currentLang].welcome;

  startGame();
};
document.getElementById("updateNameBtn").onclick = () => {
  const playerName = document.getElementById("playerName").value || "Hassan";

  texts.en.welcome = `Welcome to Cairo, 2040. You are ${playerName}, founder of a car startup.`;
  texts.ar.welcome = `مرحبًا بك في القاهرة، 2040. أنت ${playerName}، مؤسس شركة سيارات ناشئة.`;

  // Show updated welcome immediately
  document.getElementById("story").innerText = texts[currentLang].welcome;
};