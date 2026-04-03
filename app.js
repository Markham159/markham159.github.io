const characterInfo = {
    sophie: {
        name: "Sophie Foster",
        role: "Curious Catalyst",
        accent: "linear-gradient(90deg, #92e6ff, #ffe395)",
        summary: "Curious, compassionate, and stubborn in the useful way. You chase the truth even when it gets uncomfortable.",
        flavor: "You read like someone who pulls the story forward because you refuse to leave problems alone."
    },
    fitz: {
        name: "Fitz Vacker",
        role: "Strategic Leader",
        accent: "linear-gradient(90deg, #8edbff, #85baff)",
        summary: "Focused, confident, and built for taking the lead. You like clarity, plans, and direct action.",
        flavor: "You are at your best when the room needs structure, direction, and quick calls."
    },
    keefe: {
        name: "Keefe Sencen",
        role: "Chaotic Loyalist",
        accent: "linear-gradient(90deg, #ffd97f, #ff9b8b)",
        summary: "Funny on the surface, deeply loyal underneath. You read people well and care harder than you admit.",
        flavor: "Your results point toward wit, emotional instinct, and a talent for hiding depth behind humor."
    },
    biana: {
        name: "Biana Vacker",
        role: "Graceful Wild Card",
        accent: "linear-gradient(90deg, #f9d7ff, #8fe6ff)",
        summary: "Elegant, brave, and sharper than people expect. You know when subtle moves beat loud ones.",
        flavor: "You give off polished energy, but the quiz still sees nerve under the surface."
    },
    dex: {
        name: "Dex Dizznee",
        role: "Inventive Problem-Solver",
        accent: "linear-gradient(90deg, #8ff4d7, #8dc7ff)",
        summary: "Creative, practical, and quick-thinking. You trust solutions that can actually be built and used.",
        flavor: "Your answers lean hands-on, useful, and a little ahead of everyone else's plan."
    },
    tam: {
        name: "Tam Song",
        role: "Quiet Force",
        accent: "linear-gradient(90deg, #9fb3ff, #90f1c4)",
        summary: "Private, steady, and observant. You keep your power contained until it is needed.",
        flavor: "You come across as someone who notices more than they say and moves with intention."
    },
    linh: {
        name: "Linh Song",
        role: "Steady Heart",
        accent: "linear-gradient(90deg, #90f1c4, #92e6ff)",
        summary: "Gentle, patient, and emotionally grounded. You bring calm when the rest of the room starts to tilt.",
        flavor: "This result points toward grace, care, and the kind of strength that does not need to shout."
    },
    marella: {
        name: "Marella Redek",
        role: "Bold Spark",
        accent: "linear-gradient(90deg, #ffb079, #ffd36a)",
        summary: "Passionate, outspoken, and impossible to ignore. When you care, you move visibly and fast.",
        flavor: "The quiz sees intensity, confidence, and a willingness to step into the fire instead of around it."
    }
};

const abilityInfo = {
    telepath: {
        name: "Telepath",
        accent: "linear-gradient(90deg, #8fdfff, #b6f0ff)",
        preview: "Mind-based strategy, intuition, and high-stakes reading of people.",
        summary: "You would probably thrive with mind-focused talents, strategy, and fast decision-making."
    },
    empath: {
        name: "Empath",
        accent: "linear-gradient(90deg, #ffd67f, #ffb8a6)",
        preview: "Emotion-reading, people instincts, and heart-first perception.",
        summary: "You pick up on emotional undercurrents quickly and would probably be strongest at understanding people."
    },
    technopath: {
        name: "Technopath",
        accent: "linear-gradient(90deg, #90f1c4, #88d8ff)",
        preview: "Systems-thinking, invention, and making complex things behave.",
        summary: "Your best edge is building, solving, and turning impossible systems into something usable."
    },
    vanisher: {
        name: "Vanisher",
        accent: "linear-gradient(90deg, #e8d4ff, #95e8ff)",
        preview: "Stealth, timing, elegance, and knowing how to move unseen.",
        summary: "You value precision, stealth, and getting into the right place at the exact right moment."
    },
    shade: {
        name: "Shade",
        accent: "linear-gradient(90deg, #9dafff, #8be7d1)",
        preview: "Control, composure, and quiet power.",
        summary: "You are wired for contained strength, independence, and subtle control instead of spectacle."
    },
    hydrokinetic: {
        name: "Hydrokinetic",
        accent: "linear-gradient(90deg, #7fd8ff, #8df1da)",
        preview: "Calm force, adaptability, and patient pressure.",
        summary: "Your strength is steady force. You shape situations with patience instead of exploding into them."
    },
    pyrokinetic: {
        name: "Pyrokinetic",
        accent: "linear-gradient(90deg, #ff9d73, #ffd66b)",
        preview: "Intensity, drive, and action that is hard to miss.",
        summary: "You are intense, decisive, and emotionally visible when something matters to you."
    },
    inflictor: {
        name: "Inflictor",
        accent: "linear-gradient(90deg, #ffb38e, #ff8c8c)",
        preview: "Protective force, nerve, and a refusal to get pushed around.",
        summary: "You can be protective, forceful, and extremely hard to shove off course when it counts."
    },
    polyglot: {
        name: "Polyglot",
        accent: "linear-gradient(90deg, #8ce7ff, #a6ffea)",
        preview: "Language, learning speed, and absorbing knowledge fast.",
        summary: "Language, study, and rapid information intake would likely be your natural edge."
    },
    talentless: {
        name: "Talentless",
        accent: "linear-gradient(90deg, #ffd0c4, #d6dbdf)",
        preview: "Grounded, practical, and important without needing a flashy ability.",
        summary: "Your result leans grounded and practical. In this version of the Lost Cities, you matter because of your choices, not a special power."
    }
};

const traitInfo = {
    heart: "Loyal",
    wit: "Sharp",
    nerve: "Bold",
    calm: "Calm",
    spark: "Creative"
};

const quizData = [
    {
        question: "A friend is suddenly in trouble. What do you do first?",
        options: [
            {
                title: "Step in immediately",
                note: "Protect first, deal with the consequences after.",
                effects: {
                    characters: { sophie: 2, biana: 1, marella: 1 },
                    abilities: { inflictor: 2, telepath: 1, vanisher: 1 },
                    traits: { heart: 1, nerve: 2 }
                }
            },
            {
                title: "Read the room",
                note: "Figure out what everyone is feeling before acting.",
                effects: {
                    characters: { keefe: 2, sophie: 1, fitz: 1 },
                    abilities: { empath: 2, telepath: 1 },
                    traits: { heart: 2, wit: 1 }
                }
            },
            {
                title: "Make a plan",
                note: "Organize people fast and solve the problem cleanly.",
                effects: {
                    characters: { fitz: 2, dex: 1 },
                    abilities: { telepath: 1, technopath: 2 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Watch for the hidden angle",
                note: "Stay calm, stay observant, and move when it counts.",
                effects: {
                    characters: { tam: 2, linh: 1 },
                    abilities: { shade: 2, hydrokinetic: 1, talentless: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Which setting sounds the most like your ideal day?",
        options: [
            {
                title: "A giant library full of secrets",
                note: "I want mysteries, research, and a lot to learn.",
                effects: {
                    characters: { sophie: 2, fitz: 1, tam: 1 },
                    abilities: { telepath: 1, polyglot: 2 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "A workshop packed with gadgets",
                note: "Let me build something no one else has thought of.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4 },
                    traits: { wit: 1, spark: 3 }
                }
            },
            {
                title: "A chaotic day with jokes and drama",
                note: "Energy and people make everything better.",
                effects: {
                    characters: { keefe: 3, marella: 1 },
                    abilities: { empath: 1, pyrokinetic: 2 },
                    traits: { heart: 1, spark: 2, nerve: 1 }
                }
            },
            {
                title: "A quiet place near water",
                note: "I like peace, reflection, and a little distance.",
                effects: {
                    characters: { linh: 3, biana: 1 },
                    abilities: { hydrokinetic: 3, vanisher: 1 },
                    traits: { calm: 3, heart: 1 }
                }
            }
        ]
    },
    {
        question: "Which strength do you trust the most in yourself?",
        options: [
            {
                title: "Empathy",
                note: "I know when people are hurting, even if they hide it.",
                effects: {
                    characters: { keefe: 2, linh: 1, sophie: 1 },
                    abilities: { empath: 3 },
                    traits: { heart: 3 }
                }
            },
            {
                title: "Problem-solving",
                note: "I can usually think my way through the mess.",
                effects: {
                    characters: { dex: 2, fitz: 1, tam: 1 },
                    abilities: { technopath: 2, telepath: 1, shade: 1 },
                    traits: { wit: 3 }
                }
            },
            {
                title: "Courage under pressure",
                note: "When things get bad, I stop hesitating.",
                effects: {
                    characters: { sophie: 2, biana: 1, marella: 1 },
                    abilities: { inflictor: 1, vanisher: 1, pyrokinetic: 1 },
                    traits: { nerve: 3 }
                }
            },
            {
                title: "Self-control",
                note: "I stay steady and do not break easily.",
                effects: {
                    characters: { tam: 2, biana: 1, linh: 1 },
                    abilities: { shade: 2, hydrokinetic: 1, talentless: 1 },
                    traits: { calm: 3 }
                }
            }
        ]
    },
    {
        question: "People who do not know you well usually think you are...",
        options: [
            {
                title: "Too intense",
                note: "There is more going on under the surface than people expect.",
                effects: {
                    characters: { tam: 2, marella: 1, sophie: 1 },
                    abilities: { shade: 1, pyrokinetic: 1, inflictor: 1 },
                    traits: { calm: 1, nerve: 1, spark: 1 }
                }
            },
            {
                title: "Too sarcastic",
                note: "Humor is easier than explaining myself.",
                effects: {
                    characters: { keefe: 3, dex: 1 },
                    abilities: { empath: 1, technopath: 1 },
                    traits: { spark: 2, heart: 1 }
                }
            },
            {
                title: "Too quiet",
                note: "I say less, but I notice more.",
                effects: {
                    characters: { biana: 2, linh: 1, tam: 1 },
                    abilities: { vanisher: 2, hydrokinetic: 1, shade: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Too idealistic",
                note: "I still think the right thing matters.",
                effects: {
                    characters: { sophie: 3, fitz: 1 },
                    abilities: { telepath: 1, polyglot: 1, inflictor: 1 },
                    traits: { heart: 2, nerve: 1 }
                }
            }
        ]
    },
    {
        question: "Which power sounds the most tempting?",
        options: [
            {
                title: "Reading minds",
                note: "I want the truth fast, even if it gets complicated.",
                effects: {
                    characters: { sophie: 2, fitz: 3 },
                    abilities: { telepath: 4 },
                    traits: { wit: 2, nerve: 1 }
                }
            },
            {
                title: "Using shadow and silence",
                note: "Subtle power is still power.",
                effects: {
                    characters: { tam: 3, biana: 1 },
                    abilities: { shade: 3, vanisher: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Creating impossible tech",
                note: "Let me invent the answer instead.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4 },
                    traits: { wit: 2, spark: 2 }
                }
            },
            {
                title: "Staying ordinary",
                note: "I would rather prove I matter without a gift.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 4 },
                    traits: { heart: 1, calm: 1 }
                }
            }
        ]
    },
    {
        question: "At a school like Foxfire, what role would fit you best?",
        options: [
            {
                title: "The curious top student",
                note: "I would ask too many questions and keep chasing answers.",
                effects: {
                    characters: { sophie: 3, fitz: 1 },
                    abilities: { telepath: 1, polyglot: 2 },
                    traits: { wit: 2, nerve: 1 }
                }
            },
            {
                title: "The funny one with layers",
                note: "People would underestimate how much I actually feel.",
                effects: {
                    characters: { keefe: 3 },
                    abilities: { empath: 2 },
                    traits: { spark: 2, heart: 2 }
                }
            },
            {
                title: "The maker everyone needs",
                note: "I would be busy fixing, building, and improving everything.",
                effects: {
                    characters: { dex: 3, biana: 1 },
                    abilities: { technopath: 3, vanisher: 1 },
                    traits: { wit: 2, spark: 2 }
                }
            },
            {
                title: "The calm observer",
                note: "I would listen first and reveal less than I know.",
                effects: {
                    characters: { tam: 3, linh: 1 },
                    abilities: { shade: 2, hydrokinetic: 1 },
                    traits: { calm: 3, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Pick the energy that feels closest to you.",
        options: [
            {
                title: "Fire",
                note: "Direct, passionate, and impossible to ignore.",
                effects: {
                    characters: { marella: 3 },
                    abilities: { pyrokinetic: 4 },
                    traits: { nerve: 2, spark: 2 }
                }
            },
            {
                title: "Water",
                note: "Steady, adaptable, and stronger than I look.",
                effects: {
                    characters: { linh: 3 },
                    abilities: { hydrokinetic: 4 },
                    traits: { calm: 2, heart: 2 }
                }
            },
            {
                title: "Mist",
                note: "Elegant, quick, and hard to pin down.",
                effects: {
                    characters: { biana: 3 },
                    abilities: { vanisher: 4 },
                    traits: { calm: 1, nerve: 1, spark: 1 }
                }
            },
            {
                title: "Mind",
                note: "Focused, strategic, and always thinking two moves ahead.",
                effects: {
                    characters: { fitz: 2, sophie: 1 },
                    abilities: { telepath: 3 },
                    traits: { wit: 3 }
                }
            }
        ]
    },
    {
        question: "If someone betrays your trust, your first instinct is to...",
        options: [
            {
                title: "Try to understand why",
                note: "I want the whole story before I decide.",
                effects: {
                    characters: { keefe: 2, sophie: 1, linh: 1 },
                    abilities: { empath: 2, hydrokinetic: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            },
            {
                title: "Pull back quietly",
                note: "I do not always confront people, but I do remember.",
                effects: {
                    characters: { tam: 3, biana: 1 },
                    abilities: { shade: 2, vanisher: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Call it out directly",
                note: "If there is a problem, I would rather face it head-on.",
                effects: {
                    characters: { marella: 2, fitz: 1, sophie: 1 },
                    abilities: { pyrokinetic: 2, inflictor: 1, telepath: 1 },
                    traits: { nerve: 3 }
                }
            },
            {
                title: "Move on and stay grounded",
                note: "I would rather focus on what is real and useful.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 3, technopath: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "What kind of role sounds most satisfying in a team?",
        options: [
            {
                title: "Leader and problem-solver",
                note: "Keep the team moving and make the hard calls.",
                effects: {
                    characters: { sophie: 2, fitz: 2, dex: 1 },
                    abilities: { telepath: 1, technopath: 1, inflictor: 1 },
                    traits: { wit: 2, nerve: 2 }
                }
            },
            {
                title: "Scout or spy",
                note: "I would rather gather the right information first.",
                effects: {
                    characters: { biana: 3, tam: 1 },
                    abilities: { vanisher: 3, shade: 1 },
                    traits: { calm: 1, wit: 2 }
                }
            },
            {
                title: "Inventor behind the scenes",
                note: "I want to make the thing that changes everything.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4 },
                    traits: { spark: 3, wit: 1 }
                }
            },
            {
                title: "Comfort person",
                note: "I keep people steady when everything is falling apart.",
                effects: {
                    characters: { linh: 2, keefe: 2, sophie: 1 },
                    abilities: { empath: 2, hydrokinetic: 1 },
                    traits: { heart: 3, calm: 1 }
                }
            }
        ]
    },
    {
        question: "Pick the motto that feels the most like you.",
        options: [
            {
                title: "Knowledge changes everything",
                note: "Learning is power, and I want more of it.",
                effects: {
                    characters: { sophie: 2, dex: 1 },
                    abilities: { polyglot: 2, technopath: 1, telepath: 1 },
                    traits: { wit: 3 }
                }
            },
            {
                title: "People matter more than pride",
                note: "Relationships come first, even when it gets complicated.",
                effects: {
                    characters: { keefe: 2, linh: 1, sophie: 1 },
                    abilities: { empath: 2 },
                    traits: { heart: 3 }
                }
            },
            {
                title: "Power means responsibility",
                note: "If I have influence, I should use it well.",
                effects: {
                    characters: { fitz: 1, biana: 1, marella: 1, sophie: 1 },
                    abilities: { telepath: 1, vanisher: 1, pyrokinetic: 1, inflictor: 1 },
                    traits: { nerve: 2, heart: 1 }
                }
            },
            {
                title: "I do not need a gift to matter",
                note: "I would still find a way to count.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 4 },
                    traits: { calm: 1, heart: 2 }
                }
            }
        ]
    }
];

const characterPreviewGrid = document.getElementById("characterPreviewGrid");
const abilityPreviewGrid = document.getElementById("abilityPreviewGrid");
const introPanel = document.getElementById("introPanel");
const questionPanel = document.getElementById("questionPanel");
const resultPanel = document.getElementById("resultPanel");
const startQuizButton = document.getElementById("startQuizButton");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const selectionHint = document.getElementById("selectionHint");
const questionText = document.getElementById("questionText");
const optionGrid = document.getElementById("optionGrid");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const resultHeading = document.getElementById("resultHeading");
const characterName = document.getElementById("characterName");
const characterSummary = document.getElementById("characterSummary");
const resultFlavor = document.getElementById("resultFlavor");
const runnerUpText = document.getElementById("runnerUpText");
const abilityList = document.getElementById("abilityList");
const abilitySummary = document.getElementById("abilitySummary");
const traitList = document.getElementById("traitList");
const shareText = document.getElementById("shareText");
const copyStatus = document.getElementById("copyStatus");
const characterStats = document.getElementById("characterStats");
const abilityStats = document.getElementById("abilityStats");
const copyResultButton = document.getElementById("copyResultButton");
const restartButton = document.getElementById("restartButton");

const state = {
    currentQuestion: 0,
    answers: Array(quizData.length).fill(null)
};

function renderPreviewCards() {
    const characters = Object.values(characterInfo)
        .map((character) => `
            <article class="preview-card" style="--card-accent: ${character.accent};">
                <span class="mini-label">${character.role}</span>
                <h3>${character.name}</h3>
                <p>${character.summary}</p>
            </article>
        `)
        .join("");

    const abilities = Object.values(abilityInfo)
        .map((ability) => `
            <article class="preview-card" style="--card-accent: ${ability.accent};">
                <span class="mini-label">Ability</span>
                <h3>${ability.name}</h3>
                <p>${ability.preview}</p>
            </article>
        `)
        .join("");

    characterPreviewGrid.innerHTML = characters;
    abilityPreviewGrid.innerHTML = abilities;
}

function showPanel(panelName) {
    introPanel.hidden = panelName !== "intro";
    questionPanel.hidden = panelName !== "question";
    resultPanel.hidden = panelName !== "result";
}

function renderQuestion() {
    const current = quizData[state.currentQuestion];
    const selectedIndex = state.answers[state.currentQuestion];

    showPanel("question");
    copyStatus.textContent = "";
    progressText.textContent = `Question ${state.currentQuestion + 1} of ${quizData.length}`;
    progressFill.style.width = `${((state.currentQuestion + 1) / quizData.length) * 100}%`;
    questionText.textContent = current.question;
    selectionHint.textContent = selectedIndex === null ? "Choose one answer to continue." : "Answer selected. You can still change it.";
    optionGrid.innerHTML = "";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option-card";
        if (selectedIndex === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <span class="option-title">${option.title}</span>
            <span class="option-note">${option.note}</span>
        `;

        button.addEventListener("click", () => {
            state.answers[state.currentQuestion] = index;
            renderQuestion();
        });

        optionGrid.appendChild(button);
    });

    backButton.disabled = state.currentQuestion === 0;
    nextButton.disabled = selectedIndex === null;
    nextButton.textContent = state.currentQuestion === quizData.length - 1 ? "Reveal result" : "Next";
}

function addScores(target, source) {
    Object.entries(source || {}).forEach(([key, value]) => {
        target[key] = (target[key] || 0) + value;
    });
}

function sortedEntries(map) {
    return Object.entries(map).sort((left, right) => right[1] - left[1]);
}

function pickAbilities(abilityScores) {
    const talentlessScore = abilityScores.talentless || 0;
    const magicalEntries = sortedEntries(
        Object.fromEntries(Object.entries(abilityScores).filter(([key]) => key !== "talentless"))
    );
    const bestMagic = magicalEntries[0] || [null, 0];
    const secondMagic = magicalEntries[1] || [null, 0];
    const shouldUseTalentless = talentlessScore >= 7 && (bestMagic[1] < 7 || talentlessScore >= bestMagic[1] + 1);

    if (shouldUseTalentless || !bestMagic[0]) {
        return ["talentless"];
    }

    const chosen = [bestMagic[0]];
    if (secondMagic[0] && secondMagic[1] >= bestMagic[1] - 1 && secondMagic[1] >= 5) {
        chosen.push(secondMagic[0]);
    }

    return chosen;
}

function getTopTraits(traitScores) {
    return sortedEntries(traitScores)
        .slice(0, 3)
        .map(([key]) => traitInfo[key]);
}

function renderScoreBars(container, entries, labelMap) {
    container.innerHTML = "";
    const topEntries = entries.slice(0, 4);
    const maxScore = topEntries[0] ? topEntries[0][1] : 1;

    topEntries.forEach(([key, score]) => {
        const row = document.createElement("div");
        row.className = "score-row";
        row.innerHTML = `
            <div class="score-top">
                <span class="score-label">${labelMap[key].name}</span>
                <span>${score}</span>
            </div>
            <div class="score-bar">
                <div class="score-fill" style="width: ${(score / maxScore) * 100}%"></div>
            </div>
        `;
        container.appendChild(row);
    });
}

function buildShareText(character, abilities, traits) {
    const abilityText = abilities.map((key) => abilityInfo[key].name).join(abilities.length > 1 ? " + " : "");
    const traitText = traits.join(", ");
    const pageUrl = window.location.href.split("#")[0];
    return `I got ${character.name} on Lost Cities Matchmaker. Likely ability: ${abilityText}. Core traits: ${traitText}. Try it here: ${pageUrl}`;
}

function calculateResult() {
    const totals = {
        characters: {},
        abilities: {},
        traits: {}
    };

    state.answers.forEach((answerIndex, questionIndex) => {
        const choice = quizData[questionIndex].options[answerIndex];
        addScores(totals.characters, choice.effects.characters);
        addScores(totals.abilities, choice.effects.abilities);
        addScores(totals.traits, choice.effects.traits);
    });

    const rankedCharacters = sortedEntries(totals.characters);
    const rankedAbilities = sortedEntries(totals.abilities);
    const chosenAbilityKeys = pickAbilities(totals.abilities);
    const topTraits = getTopTraits(totals.traits);

    return {
        topCharacterKey: rankedCharacters[0][0],
        runnerUp: rankedCharacters[1] || null,
        rankedCharacters,
        rankedAbilities,
        chosenAbilityKeys,
        topTraits
    };
}

function renderResult() {
    const result = calculateResult();
    const character = characterInfo[result.topCharacterKey];

    resultHeading.textContent = `You match ${character.name}`;
    characterName.textContent = character.name;
    characterSummary.textContent = character.summary;
    resultFlavor.textContent = `${character.role}: ${character.flavor}`;

    if (result.runnerUp && result.rankedCharacters[0][1] - result.runnerUp[1] <= 2) {
        runnerUpText.textContent = `Close second: ${characterInfo[result.runnerUp[0]].name}`;
    } else {
        runnerUpText.textContent = "";
    }

    abilityList.innerHTML = "";
    result.chosenAbilityKeys.forEach((abilityKey, index) => {
        const item = document.createElement("li");
        const className = abilityKey === "talentless" ? "tag tag-plain" : index === 0 ? "tag tag-gold" : "tag";
        item.className = className;
        item.textContent = abilityInfo[abilityKey].name;
        abilityList.appendChild(item);
    });

    if (result.chosenAbilityKeys[0] === "talentless") {
        abilitySummary.textContent = abilityInfo.talentless.summary;
    } else if (result.chosenAbilityKeys.length === 1) {
        abilitySummary.textContent = abilityInfo[result.chosenAbilityKeys[0]].summary;
    } else {
        abilitySummary.textContent = `${abilityInfo[result.chosenAbilityKeys[0]].summary} You also have a strong secondary pull toward ${abilityInfo[result.chosenAbilityKeys[1]].name.toLowerCase()}.`;
    }

    traitList.innerHTML = "";
    result.topTraits.forEach((trait) => {
        const item = document.createElement("li");
        item.className = "tag";
        item.textContent = trait;
        traitList.appendChild(item);
    });

    renderScoreBars(characterStats, result.rankedCharacters, characterInfo);
    renderScoreBars(abilityStats, result.rankedAbilities, abilityInfo);

    shareText.value = buildShareText(character, result.chosenAbilityKeys, result.topTraits);
    copyStatus.textContent = "";
    showPanel("result");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
    state.currentQuestion = 0;
    state.answers = Array(quizData.length).fill(null);
    renderQuestion();
}

async function copyResultText() {
    try {
        await navigator.clipboard.writeText(shareText.value);
        copyStatus.textContent = "Result text copied.";
    } catch (error) {
        shareText.focus();
        shareText.select();
        const copied = document.execCommand("copy");
        copyStatus.textContent = copied ? "Result text copied." : "Copy failed. Select the text box and copy it manually.";
    }
}

startQuizButton.addEventListener("click", () => {
    resetQuiz();
});

backButton.addEventListener("click", () => {
    if (state.currentQuestion === 0) {
        return;
    }

    state.currentQuestion -= 1;
    renderQuestion();
});

nextButton.addEventListener("click", () => {
    if (state.answers[state.currentQuestion] === null) {
        return;
    }

    if (state.currentQuestion === quizData.length - 1) {
        renderResult();
        return;
    }

    state.currentQuestion += 1;
    renderQuestion();
});

copyResultButton.addEventListener("click", () => {
    copyResultText();
});

restartButton.addEventListener("click", () => {
    resetQuiz();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderPreviewCards();
showPanel("intro");
