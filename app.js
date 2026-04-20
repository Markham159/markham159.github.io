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
    beguiler: {
        name: "Beguiler",
        accent: "linear-gradient(90deg, #ffc68f, #ff8eb8)",
        preview: "Charm, persuasion, and knowing how to tilt a room your way.",
        summary: "You read as socially quick, persuasive, and hard to ignore once you decide to steer the moment."
    },
    charger: {
        name: "Charger",
        accent: "linear-gradient(90deg, #ffe27a, #ff9c79)",
        preview: "Kinetic force, fast impact, and power that lands hard.",
        summary: "Your results point toward momentum, nerve, and a tendency to hit situations with force instead of hesitation."
    },
    conjurer: {
        name: "Conjurer",
        accent: "linear-gradient(90deg, #8ef0d5, #bca6ff)",
        preview: "Manifesting tools, ideas, and solutions out of focused intent.",
        summary: "You feel inventive and flexible, like someone who would rather make the right answer appear than wait for one."
    },
    descryer: {
        name: "Descryer",
        accent: "linear-gradient(90deg, #9fe6ff, #d4ffb8)",
        preview: "Pattern-finding, long-range insight, and answers other people miss.",
        summary: "You lean observant, investigative, and good at spotting what matters before everyone else catches up."
    },
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
    enhancer: {
        name: "Enhancer",
        accent: "linear-gradient(90deg, #ffe89a, #91f0d6)",
        preview: "Boosting allies, amplifying strengths, and making teams better.",
        summary: "Your strongest edge looks supportive but powerful. You would likely be best at making other people sharper, steadier, and stronger."
    },
    flasher: {
        name: "Flasher",
        accent: "linear-gradient(90deg, #fff3a5, #95e6ff)",
        preview: "Light, speed, misdirection, and dramatic timing.",
        summary: "You give off quick, bright energy and would probably do best with a talent built around speed, presence, and disruption."
    },
    froster: {
        name: "Froster",
        accent: "linear-gradient(90deg, #c9f3ff, #9fd6ff)",
        preview: "Cold control, precision, and keeping your head under pressure.",
        summary: "You read controlled and exacting, like someone whose strength shows up through restraint instead of chaos."
    },
    guster: {
        name: "Guster",
        accent: "linear-gradient(90deg, #b7fff0, #a1d8ff)",
        preview: "Wind, movement, mobility, and fast-changing energy.",
        summary: "Your answers suggest restless motion, adaptability, and a style that works best when you can keep things moving."
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
        preview: "Intensity, drive, and firepower attached to a canonically illegal talent.",
        summary: "You are intense, decisive, and emotionally visible when something matters to you. In canon this talent is banned, which fits how volatile this result feels."
    },
    inflictor: {
        name: "Inflictor",
        accent: "linear-gradient(90deg, #ffb38e, #ff8c8c)",
        preview: "Protective force, nerve, and a refusal to get pushed around.",
        summary: "You can be protective, forceful, and extremely hard to shove off course when it counts."
    },
    mesmer: {
        name: "Mesmer",
        accent: "linear-gradient(90deg, #d7b8ff, #ffb5d6)",
        preview: "Influence, focus, and changing the mood of a room by sheer presence.",
        summary: "You seem built for quiet influence and intense focus, with a social gravity that can redirect other people fast."
    },
    phaser: {
        name: "Phaser",
        accent: "linear-gradient(90deg, #b8d6ff, #b6fff2)",
        preview: "Slipping past barriers, evasive movement, and impossible positioning.",
        summary: "You come across as elusive and hard to contain, like someone who always finds a way around the obvious obstacle."
    },
    polyglot: {
        name: "Polyglot",
        accent: "linear-gradient(90deg, #8ce7ff, #a6ffea)",
        preview: "Language, learning speed, and absorbing knowledge fast.",
        summary: "Language, study, and rapid information intake would likely be your natural edge."
    },
    psionipath: {
        name: "Psionipath",
        accent: "linear-gradient(90deg, #b7d1ff, #ffb6f0)",
        preview: "Psychic force, mental pressure, and disciplined willpower.",
        summary: "This result leans intensely mental: focused, forceful, and built around pushing your will outward with precision."
    },
    teleporter: {
        name: "Teleporter",
        accent: "linear-gradient(90deg, #ffd7f5, #8fdfff)",
        preview: "Blinking across space in a talent historically tied to Alicorns and Sophie Foster.",
        summary: "You read bold, precise, and hard to pin down. This is a very rare result, with canon history that mostly points to Alicorns and Sophie Foster as the only known elf."
    },
    talentless: {
        name: "Talentless",
        accent: "linear-gradient(90deg, #ffd0c4, #d6dbdf)",
        preview: "Grounded, practical, and important without needing a flashy ability.",
        summary: "Your result leans grounded and practical. In this version of the Lost Cities, you matter because of your choices, not a special power."
    },
    vociferator: {
        name: "Vociferator",
        accent: "linear-gradient(90deg, #ffb892, #ffe18a)",
        preview: "Voice-based force, command, and making yourself impossible to ignore.",
        summary: "You come across as direct, high-impact, and built to project power outward in a way that changes the whole room."
    }
};

const traitInfo = {
    heart: "Loyal",
    wit: "Sharp",
    nerve: "Bold",
    calm: "Calm",
    spark: "Creative"
};

const abilityProfiles = {
    beguiler: {
        traits: { spark: 0.38, heart: 0.26, wit: 0.22 },
        characters: { keefe: 0.34, biana: 0.3, sophie: 0.18 }
    },
    charger: {
        traits: { nerve: 0.42, spark: 0.25, wit: 0.12 },
        characters: { fitz: 0.3, marella: 0.34, sophie: 0.16 }
    },
    conjurer: {
        traits: { spark: 0.38, wit: 0.28, calm: 0.12 },
        characters: { dex: 0.34, biana: 0.24, linh: 0.14 }
    },
    descryer: {
        traits: { wit: 0.4, calm: 0.26, heart: 0.1 },
        characters: { sophie: 0.26, tam: 0.3, linh: 0.2 }
    },
    telepath: {
        traits: { wit: 0.34, nerve: 0.22, calm: 0.1 },
        characters: { sophie: 0.3, fitz: 0.32 }
    },
    empath: {
        traits: { heart: 0.4, calm: 0.2, spark: 0.08 },
        characters: { keefe: 0.3, linh: 0.28, sophie: 0.2 }
    },
    enhancer: {
        traits: { heart: 0.34, nerve: 0.2, calm: 0.16 },
        characters: { fitz: 0.3, biana: 0.28, sophie: 0.18 }
    },
    flasher: {
        traits: { spark: 0.34, nerve: 0.3, wit: 0.12 },
        characters: { biana: 0.3, fitz: 0.24, marella: 0.18 }
    },
    froster: {
        traits: { calm: 0.42, wit: 0.2, heart: 0.08 },
        characters: { linh: 0.3, tam: 0.32, biana: 0.14 }
    },
    guster: {
        traits: { spark: 0.28, calm: 0.24, nerve: 0.18 },
        characters: { marella: 0.24, linh: 0.26, keefe: 0.18 }
    },
    technopath: {
        traits: { wit: 0.34, spark: 0.28, calm: 0.08 },
        characters: { dex: 0.42, fitz: 0.14, biana: 0.12 }
    },
    vanisher: {
        traits: { calm: 0.24, nerve: 0.24, spark: 0.12 },
        characters: { biana: 0.42, tam: 0.22, linh: 0.08 }
    },
    shade: {
        traits: { calm: 0.38, wit: 0.26, nerve: 0.08 },
        characters: { tam: 0.4, biana: 0.18, linh: 0.14 }
    },
    hydrokinetic: {
        traits: { calm: 0.32, heart: 0.28, wit: 0.06 },
        characters: { linh: 0.42, sophie: 0.1, tam: 0.12 }
    },
    pyrokinetic: {
        traits: { nerve: 0.34, spark: 0.34, heart: 0.06 },
        characters: { marella: 0.42, sophie: 0.12, keefe: 0.1 }
    },
    inflictor: {
        traits: { nerve: 0.38, heart: 0.22, calm: 0.08 },
        characters: { sophie: 0.28, marella: 0.24, fitz: 0.14 }
    },
    mesmer: {
        traits: { wit: 0.28, spark: 0.28, calm: 0.16 },
        characters: { keefe: 0.28, biana: 0.24, tam: 0.18 }
    },
    phaser: {
        traits: { calm: 0.28, wit: 0.24, nerve: 0.2 },
        characters: { tam: 0.26, biana: 0.3, sophie: 0.12 }
    },
    polyglot: {
        traits: { wit: 0.42, calm: 0.12, heart: 0.06 },
        characters: { sophie: 0.26, dex: 0.32, fitz: 0.12 }
    },
    psionipath: {
        traits: { wit: 0.26, nerve: 0.26, calm: 0.18 },
        characters: { fitz: 0.24, tam: 0.22, sophie: 0.18 }
    },
    teleporter: {
        traits: { nerve: 0.3, wit: 0.24, spark: 0.12 },
        characters: { sophie: 0.32, biana: 0.22, fitz: 0.18 }
    },
    vociferator: {
        traits: { spark: 0.32, nerve: 0.32, heart: 0.06 },
        characters: { marella: 0.3, keefe: 0.22, fitz: 0.18 }
    }
};

const normalQuizData = [
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
    },
    {
        question: "Which subtle or mental talent sounds the most like your style?",
        options: [
            {
                title: "Beguiler",
                note: "Charm, persuasion, and getting people to lean your direction without brute force.",
                effects: {
                    characters: { keefe: 2, biana: 1, sophie: 1 },
                    abilities: { beguiler: 10, empath: 1, mesmer: 1 },
                    traits: { spark: 2, heart: 1, wit: 1 }
                }
            },
            {
                title: "Descryer",
                note: "I want insight, patterns, and the ability to spot what everyone else missed.",
                effects: {
                    characters: { sophie: 2, tam: 1, linh: 1 },
                    abilities: { descryer: 10, telepath: 1, polyglot: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Mesmer",
                note: "Presence, focus, and influence feel stronger than loud power.",
                effects: {
                    characters: { biana: 2, keefe: 1, tam: 1 },
                    abilities: { mesmer: 10, beguiler: 1, empath: 1 },
                    traits: { calm: 1, spark: 1, wit: 1 }
                }
            },
            {
                title: "Psionipath",
                note: "Mental force and disciplined pressure sound the most useful to me.",
                effects: {
                    characters: { fitz: 1, tam: 1, sophie: 1 },
                    abilities: { psionipath: 10, telepath: 1, inflictor: 1 },
                    traits: { wit: 1, nerve: 1, calm: 1 }
                }
            }
        ]
    },
    {
        question: "Which active talent feels the most satisfying to use?",
        options: [
            {
                title: "Charger",
                note: "I want force, impact, and a power that hits like a shove from nowhere.",
                effects: {
                    characters: { marella: 1, fitz: 1, sophie: 1 },
                    abilities: { charger: 10, inflictor: 1, pyrokinetic: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "Conjurer",
                note: "Making the right thing appear at the right time is exactly my kind of power.",
                effects: {
                    characters: { dex: 2, biana: 1 },
                    abilities: { conjurer: 10, technopath: 1, polyglot: 1 },
                    traits: { spark: 2, wit: 1 }
                }
            },
            {
                title: "Enhancer",
                note: "I like the idea of turning a whole team stronger instead of grabbing attention myself.",
                effects: {
                    characters: { sophie: 1, fitz: 1, biana: 1, linh: 1 },
                    abilities: { enhancer: 10, empath: 1, inflictor: 1 },
                    traits: { heart: 2, calm: 1, nerve: 1 }
                }
            },
            {
                title: "Vociferator",
                note: "Power through voice sounds dramatic, efficient, and impossible to ignore.",
                effects: {
                    characters: { marella: 2, keefe: 1, fitz: 1 },
                    abilities: { vociferator: 10, pyrokinetic: 1, beguiler: 1 },
                    traits: { spark: 2, nerve: 1 }
                }
            }
        ]
    },
    {
        question: "Which rare movement or battlefield edge sounds best?",
        options: [
            {
                title: "Flasher",
                note: "Speed, light, and striking before anyone else is ready.",
                effects: {
                    characters: { biana: 1, fitz: 1, marella: 1 },
                    abilities: { flasher: 10, vanisher: 1, teleporter: 1 },
                    traits: { spark: 1, nerve: 2 }
                }
            },
            {
                title: "Phaser",
                note: "I want the weird option that lets me bypass walls and expectations.",
                effects: {
                    characters: { tam: 2, biana: 1 },
                    abilities: { phaser: 10, shade: 1, vanisher: 1 },
                    traits: { calm: 1, wit: 1, nerve: 1 }
                }
            },
            {
                title: "Teleporter",
                note: "If I could move instantly, I would solve half my problems on the spot.",
                effects: {
                    characters: { sophie: 2, biana: 1, fitz: 1 },
                    abilities: { teleporter: 10, telepath: 1, vanisher: 1 },
                    traits: { nerve: 2, wit: 1 }
                }
            },
            {
                title: "Froster",
                note: "Cold precision sounds calmer and cleaner than flashy destruction.",
                effects: {
                    characters: { linh: 1, tam: 2 },
                    abilities: { froster: 10, hydrokinetic: 1, shade: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Pick the final ability vibe that feels closest to you.",
        options: [
            {
                title: "Guster",
                note: "Fast-moving, hard to contain, and always shifting the space around me.",
                effects: {
                    characters: { marella: 1, linh: 1, keefe: 1 },
                    abilities: { guster: 10, flasher: 1, hydrokinetic: 1 },
                    traits: { spark: 1, calm: 1, nerve: 1 }
                }
            },
            {
                title: "Inflictor",
                note: "Protective force still feels the most natural when something matters.",
                effects: {
                    characters: { sophie: 2, marella: 1, fitz: 1 },
                    abilities: { inflictor: 10, charger: 1, telepath: 1 },
                    traits: { nerve: 2, heart: 1 }
                }
            },
            {
                title: "Polyglot",
                note: "Give me language, knowledge, and the ability to learn faster than everyone else.",
                effects: {
                    characters: { sophie: 1, dex: 2, fitz: 1 },
                    abilities: { polyglot: 10, descryer: 1, technopath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Talentless",
                note: "I still like the grounded route where choices matter more than powers.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 10 },
                    traits: { calm: 2, heart: 1 }
                }
            }
        ]
    }
];

const advancedOnlyQuizData = [
    {
        question: "Which kind of influence sounds the most natural to you in a tense room?",
        options: [
            {
                title: "Quiet persuasion",
                note: "I would rather steer the room with charm than force.",
                effects: {
                    characters: { keefe: 2, biana: 1, sophie: 1 },
                    abilities: { beguiler: 4, mesmer: 2, empath: 1 },
                    traits: { spark: 2, heart: 1, wit: 1 }
                }
            },
            {
                title: "Emotional calibration",
                note: "If I can understand how everyone feels, I can calm the situation down.",
                effects: {
                    characters: { linh: 2, keefe: 1, sophie: 1 },
                    abilities: { empath: 4, enhancer: 1, hydrokinetic: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            },
            {
                title: "Commanding the room",
                note: "I would rather cut through the noise and make people listen.",
                effects: {
                    characters: { marella: 2, fitz: 1 },
                    abilities: { vociferator: 4, charger: 1, inflictor: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "Making other people stronger",
                note: "The best move is usually helping the right person do more.",
                effects: {
                    characters: { biana: 1, sophie: 1, fitz: 1, linh: 1 },
                    abilities: { enhancer: 4, empath: 1, technopath: 1 },
                    traits: { heart: 2, calm: 1, wit: 1 }
                }
            }
        ]
    },
    {
        question: "What kind of impossible problem would you want to solve?",
        options: [
            {
                title: "Pulling the right tool out of nowhere",
                note: "I want flexible answers, not just the obvious ones.",
                effects: {
                    characters: { dex: 2, biana: 1 },
                    abilities: { conjurer: 4, technopath: 1, polyglot: 1 },
                    traits: { spark: 2, wit: 1 }
                }
            },
            {
                title: "Seeing the pattern first",
                note: "The real advantage is noticing what everyone else missed.",
                effects: {
                    characters: { sophie: 2, tam: 1, fitz: 1 },
                    abilities: { descryer: 4, telepath: 1, polyglot: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Building the system that fixes it",
                note: "I trust solutions that can actually be engineered.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4, conjurer: 1 },
                    traits: { wit: 2, spark: 1 }
                }
            },
            {
                title: "Learning every language around it",
                note: "Give me enough information and I will figure it out.",
                effects: {
                    characters: { sophie: 1, dex: 1, fitz: 1 },
                    abilities: { polyglot: 4, descryer: 1, telepath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            }
        ]
    },
    {
        question: "Pick the movement edge you would trust the most.",
        options: [
            {
                title: "Flashing in fast",
                note: "Speed and timing sound better than long setup.",
                effects: {
                    characters: { biana: 1, fitz: 1, marella: 1 },
                    abilities: { flasher: 4, charger: 1, teleporter: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "Passing through the problem",
                note: "If I can bypass the obstacle, I would rather do that.",
                effects: {
                    characters: { tam: 2, biana: 1 },
                    abilities: { phaser: 4, shade: 1, vanisher: 1 },
                    traits: { calm: 1, wit: 1, nerve: 1 }
                }
            },
            {
                title: "Instant relocation",
                note: "Nothing beats being exactly where you need to be immediately.",
                effects: {
                    characters: { sophie: 2, biana: 1, fitz: 1 },
                    abilities: { teleporter: 4, vanisher: 1, telepath: 1 },
                    traits: { nerve: 2, wit: 1 }
                }
            },
            {
                title: "Moving unseen",
                note: "Stealth will always beat noise if you use it right.",
                effects: {
                    characters: { biana: 2, tam: 1 },
                    abilities: { vanisher: 4, shade: 1, flasher: 1 },
                    traits: { calm: 1, wit: 1, nerve: 1 }
                }
            }
        ]
    },
    {
        question: "When your energy spikes, what does it feel most like?",
        options: [
            {
                title: "Fire",
                note: "Visible, intense, and hard to hide.",
                effects: {
                    characters: { marella: 3 },
                    abilities: { pyrokinetic: 4, vociferator: 1 },
                    traits: { spark: 2, nerve: 1 }
                }
            },
            {
                title: "Water",
                note: "Steady, shaping, and stronger over time.",
                effects: {
                    characters: { linh: 3 },
                    abilities: { hydrokinetic: 4, froster: 1 },
                    traits: { calm: 2, heart: 1 }
                }
            },
            {
                title: "Cold",
                note: "Controlled, exact, and clean under pressure.",
                effects: {
                    characters: { tam: 2, linh: 1 },
                    abilities: { froster: 4, shade: 1, hydrokinetic: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Wind",
                note: "Restless, mobile, and always changing the room around you.",
                effects: {
                    characters: { keefe: 1, marella: 1, linh: 1 },
                    abilities: { guster: 4, flasher: 1, hydrokinetic: 1 },
                    traits: { spark: 1, calm: 1, nerve: 1 }
                }
            }
        ]
    },
    {
        question: "Which form of mental pressure sounds the most like your strength?",
        options: [
            {
                title: "Reading the board instantly",
                note: "If I know what people are thinking, I can move fast.",
                effects: {
                    characters: { sophie: 2, fitz: 2 },
                    abilities: { telepath: 4, descryer: 1 },
                    traits: { wit: 2, nerve: 1 }
                }
            },
            {
                title: "Projecting raw force of will",
                note: "I would rather push outward than just observe.",
                effects: {
                    characters: { fitz: 1, tam: 1, sophie: 1 },
                    abilities: { psionipath: 4, telepath: 1, inflictor: 1 },
                    traits: { nerve: 1, wit: 1, calm: 1 }
                }
            },
            {
                title: "Pulling focus my way",
                note: "Control can look quiet and still be overwhelming.",
                effects: {
                    characters: { biana: 1, keefe: 1, tam: 1 },
                    abilities: { mesmer: 4, beguiler: 1, empath: 1 },
                    traits: { calm: 1, spark: 1, wit: 1 }
                }
            },
            {
                title: "Containing everything inside",
                note: "Composure is power if you can hold it.",
                effects: {
                    characters: { tam: 3 },
                    abilities: { shade: 4, froster: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Which responsibility would you actually volunteer for?",
        options: [
            {
                title: "Making the team stronger",
                note: "I want to lift the whole group, not just myself.",
                effects: {
                    characters: { sophie: 1, fitz: 1, linh: 1, biana: 1 },
                    abilities: { enhancer: 4, empath: 1, technopath: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            },
            {
                title: "Taking the hit if needed",
                note: "If something ugly has to happen, I would rather take that role.",
                effects: {
                    characters: { sophie: 2, marella: 1, fitz: 1 },
                    abilities: { inflictor: 4, charger: 1, pyrokinetic: 1 },
                    traits: { nerve: 2, heart: 1 }
                }
            },
            {
                title: "Handling mobility and scouting",
                note: "Getting in, getting out, and knowing where everyone is matters most.",
                effects: {
                    characters: { biana: 1, sophie: 1, fitz: 1 },
                    abilities: { teleporter: 4, vanisher: 1, phaser: 1 },
                    traits: { nerve: 1, wit: 1, calm: 1 }
                }
            },
            {
                title: "Managing the systems",
                note: "Someone has to keep the real machinery working.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4, conjurer: 1, polyglot: 1 },
                    traits: { wit: 2, spark: 1 }
                }
            }
        ]
    },
    {
        question: "At Foxfire, what rumor would probably follow you?",
        options: [
            {
                title: "They always get people talking",
                note: "Somehow, rooms tilt when they walk in.",
                effects: {
                    characters: { keefe: 2, biana: 1 },
                    abilities: { beguiler: 3, mesmer: 1, vociferator: 1 },
                    traits: { spark: 2, heart: 1 }
                }
            },
            {
                title: "They see things early",
                note: "They notice patterns before the rest of us do.",
                effects: {
                    characters: { sophie: 2, tam: 1 },
                    abilities: { descryer: 3, telepath: 1, polyglot: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "They always seem prepared",
                note: "No one knows how they keep producing answers at the perfect time.",
                effects: {
                    characters: { dex: 2, biana: 1 },
                    abilities: { conjurer: 3, technopath: 1 },
                    traits: { spark: 1, wit: 2 }
                }
            },
            {
                title: "They do not need a talent to matter",
                note: "They are useful even without flashy magic.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 4 },
                    traits: { calm: 1, heart: 2 }
                }
            }
        ]
    },
    {
        question: "What kind of secrecy feels the most natural to you?",
        options: [
            {
                title: "Simple invisibility",
                note: "Hide the movement, keep the mission clean.",
                effects: {
                    characters: { biana: 2, tam: 1 },
                    abilities: { vanisher: 3, flasher: 1, teleporter: 1 },
                    traits: { calm: 1, wit: 1, nerve: 1 }
                }
            },
            {
                title: "Staying unreadable",
                note: "I would rather make it impossible for people to tell what I am thinking.",
                effects: {
                    characters: { tam: 3 },
                    abilities: { shade: 3, mesmer: 1, froster: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Bypassing the barrier completely",
                note: "If walls exist, I want the weird power that ignores them.",
                effects: {
                    characters: { tam: 2, biana: 1 },
                    abilities: { phaser: 3, teleporter: 1, vanisher: 1 },
                    traits: { wit: 1, calm: 1, nerve: 1 }
                }
            },
            {
                title: "Knowing more than I say",
                note: "Information is the real shield if you use it carefully.",
                effects: {
                    characters: { sophie: 1, fitz: 1, dex: 1 },
                    abilities: { polyglot: 2, descryer: 1, telepath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            }
        ]
    },
    {
        question: "In a real crisis, what kind of role would satisfy you the most?",
        options: [
            {
                title: "Breaking the line",
                note: "Sometimes the right answer is force and speed.",
                effects: {
                    characters: { marella: 1, fitz: 1, sophie: 1 },
                    abilities: { charger: 4, inflictor: 1, flasher: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "Protecting the vulnerable person first",
                note: "I care less about looking good than making sure someone gets out safe.",
                effects: {
                    characters: { sophie: 2, linh: 1, keefe: 1 },
                    abilities: { inflictor: 4, empath: 1, enhancer: 1 },
                    traits: { heart: 2, nerve: 1 }
                }
            },
            {
                title: "Keeping the team emotionally steady",
                note: "Panic ruins everything if no one calms it down.",
                effects: {
                    characters: { linh: 2, keefe: 1, sophie: 1 },
                    abilities: { empath: 4, hydrokinetic: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            },
            {
                title: "Supplying the impossible solution",
                note: "I want to be the person who creates the answer nobody saw coming.",
                effects: {
                    characters: { dex: 2, biana: 1 },
                    abilities: { conjurer: 3, technopath: 1, polyglot: 1 },
                    traits: { spark: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Which study track sounds the most like your best self?",
        options: [
            {
                title: "Languages and records",
                note: "If I can read everything, I can understand anything.",
                effects: {
                    characters: { sophie: 1, dex: 1, fitz: 1 },
                    abilities: { polyglot: 4, descryer: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Patterns and future consequences",
                note: "I want to understand how one choice changes the whole board.",
                effects: {
                    characters: { sophie: 2, fitz: 1, tam: 1 },
                    abilities: { descryer: 4, telepath: 1, psionipath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Systems and invention",
                note: "Give me machines, interfaces, and a problem to solve.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 4, conjurer: 1 },
                    traits: { wit: 2, spark: 1 }
                }
            },
            {
                title: "Mental combat and control",
                note: "Power in the mind seems more useful than power in the air.",
                effects: {
                    characters: { fitz: 2, sophie: 1 },
                    abilities: { telepath: 3, psionipath: 1, mesmer: 1 },
                    traits: { wit: 2, nerve: 1 }
                }
            }
        ]
    },
    {
        question: "Which reputation sounds the most correct for you?",
        options: [
            {
                title: "Too loud when it matters",
                note: "If I care, people are going to know it.",
                effects: {
                    characters: { marella: 2, keefe: 1 },
                    abilities: { vociferator: 3, pyrokinetic: 2 },
                    traits: { spark: 2, nerve: 1 }
                }
            },
            {
                title: "A little dangerous to underestimate",
                note: "The surprise factor is part of the whole deal.",
                effects: {
                    characters: { marella: 1, biana: 1, fitz: 1 },
                    abilities: { flasher: 3, charger: 1, phaser: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "Hard to pin down",
                note: "People know I move differently, but they cannot always explain how.",
                effects: {
                    characters: { tam: 1, biana: 1, keefe: 1 },
                    abilities: { guster: 3, teleporter: 1, vanisher: 1 },
                    traits: { spark: 1, calm: 1, nerve: 1 }
                }
            },
            {
                title: "Cooler than the room around me",
                note: "I stay collected even when the energy gets messy.",
                effects: {
                    characters: { tam: 2, linh: 1 },
                    abilities: { froster: 3, shade: 1, hydrokinetic: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Which kind of control sounds the most satisfying to use well?",
        options: [
            {
                title: "Clean, exact restraint",
                note: "I like power that does not waste motion.",
                effects: {
                    characters: { tam: 2, linh: 1 },
                    abilities: { froster: 3, shade: 1, psionipath: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Patient shaping",
                note: "Subtle pressure over time beats spectacle.",
                effects: {
                    characters: { linh: 3 },
                    abilities: { hydrokinetic: 3, enhancer: 1 },
                    traits: { calm: 2, heart: 1 }
                }
            },
            {
                title: "Holding the line internally",
                note: "If I can master myself, I can master the situation.",
                effects: {
                    characters: { tam: 3 },
                    abilities: { shade: 3, froster: 1, mesmer: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "Controlling the room's attention",
                note: "If the spotlight is on me, I want to know how to use it.",
                effects: {
                    characters: { biana: 1, keefe: 1, marella: 1 },
                    abilities: { mesmer: 3, beguiler: 1, vociferator: 1 },
                    traits: { spark: 1, wit: 1, calm: 1 }
                }
            }
        ]
    },
    {
        question: "What would you bring to an expedition that nobody else could replace?",
        options: [
            {
                title: "Instant mobility",
                note: "If the route changes, I want to be the one who keeps the team alive.",
                effects: {
                    characters: { sophie: 2, biana: 1, fitz: 1 },
                    abilities: { teleporter: 3, vanisher: 1, phaser: 1 },
                    traits: { nerve: 1, wit: 1, calm: 1 }
                }
            },
            {
                title: "Utility answers",
                note: "I want the weird fix that keeps everyone moving.",
                effects: {
                    characters: { dex: 2, biana: 1 },
                    abilities: { conjurer: 3, technopath: 1, polyglot: 1 },
                    traits: { spark: 2, wit: 1 }
                }
            },
            {
                title: "Knowledge depth",
                note: "I want to know what we are looking at before it becomes a disaster.",
                effects: {
                    characters: { sophie: 1, dex: 1, fitz: 1 },
                    abilities: { polyglot: 3, descryer: 1, telepath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "Sustainable support",
                note: "The team lasts longer if someone is quietly making everybody better.",
                effects: {
                    characters: { linh: 1, sophie: 1, fitz: 1 },
                    abilities: { enhancer: 3, empath: 1, hydrokinetic: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            }
        ]
    },
    {
        question: "Which inner rule feels the most like your real default?",
        options: [
            {
                title: "Focus can overpower noise",
                note: "If I stay locked in, I can force the moment to bend.",
                effects: {
                    characters: { fitz: 2, tam: 1 },
                    abilities: { psionipath: 3, telepath: 1, mesmer: 1 },
                    traits: { wit: 1, nerve: 1, calm: 1 }
                }
            },
            {
                title: "Momentum beats hesitation",
                note: "The right move is usually the one that actually moves.",
                effects: {
                    characters: { marella: 1, fitz: 1, sophie: 1 },
                    abilities: { charger: 3, flasher: 1, pyrokinetic: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "I do not need magic to count",
                note: "Power is useful, but it is not the only thing that matters.",
                effects: {
                    characters: { dex: 1, linh: 1 },
                    abilities: { talentless: 4 },
                    traits: { calm: 1, heart: 2 }
                }
            },
            {
                title: "People can be moved if you understand them",
                note: "Influence is often more subtle than force.",
                effects: {
                    characters: { keefe: 2, biana: 1 },
                    abilities: { beguiler: 3, empath: 1, mesmer: 1 },
                    traits: { heart: 1, spark: 1, wit: 1 }
                }
            }
        ]
    },
    {
        question: "If your friends had to describe what you do for a group, what would they say?",
        options: [
            {
                title: "You notice how everyone is doing",
                note: "You keep the emotional damage from becoming the real problem.",
                effects: {
                    characters: { linh: 2, keefe: 1, sophie: 1 },
                    abilities: { empath: 3, enhancer: 1, hydrokinetic: 1 },
                    traits: { heart: 2, calm: 1 }
                }
            },
            {
                title: "You take over when the room gets messy",
                note: "Sometimes the group just needs someone to project certainty.",
                effects: {
                    characters: { fitz: 1, marella: 2, keefe: 1 },
                    abilities: { vociferator: 3, inflictor: 1, charger: 1 },
                    traits: { nerve: 2, spark: 1 }
                }
            },
            {
                title: "You fix things no one else wants to think about",
                note: "You are the practical solution when everyone else is still reacting.",
                effects: {
                    characters: { dex: 3 },
                    abilities: { technopath: 3, conjurer: 1, talentless: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "You appear where you are needed and disappear again",
                note: "You are not always loud, but you are always useful.",
                effects: {
                    characters: { biana: 2, tam: 1, sophie: 1 },
                    abilities: { vanisher: 3, teleporter: 1, phaser: 1 },
                    traits: { calm: 1, nerve: 1, wit: 1 }
                }
            }
        ]
    },
    {
        question: "Which ending note sounds the most like the way you actually work?",
        options: [
            {
                title: "I prefer strange solutions over obvious ones",
                note: "If there is a side door, I am going to find it.",
                effects: {
                    characters: { tam: 1, biana: 1, dex: 1 },
                    abilities: { phaser: 3, conjurer: 1, teleporter: 1 },
                    traits: { wit: 1, spark: 1, calm: 1 }
                }
            },
            {
                title: "I trust precision more than force",
                note: "Control matters more to me than spectacle.",
                effects: {
                    characters: { tam: 2, linh: 1 },
                    abilities: { froster: 3, shade: 1, hydrokinetic: 1 },
                    traits: { calm: 2, wit: 1 }
                }
            },
            {
                title: "I keep circling back to the bigger pattern",
                note: "I want the answer behind the answer.",
                effects: {
                    characters: { sophie: 2, fitz: 1, tam: 1 },
                    abilities: { descryer: 3, telepath: 1, psionipath: 1 },
                    traits: { wit: 2, calm: 1 }
                }
            },
            {
                title: "I become the shield when things get ugly",
                note: "If someone needs backing, I do not really hesitate.",
                effects: {
                    characters: { sophie: 2, marella: 1, linh: 1 },
                    abilities: { inflictor: 3, enhancer: 1, empath: 1 },
                    traits: { heart: 2, nerve: 1 }
                }
            }
        ]
    }
];

const quickQuestionGroups = [
    [0, 4],
    [1, 7],
    [2, 8],
    [3, 9],
    [5, 10],
    [6, 11],
    [12, 13]
];

const quizModes = {
    quick: {
        name: "Quick Quiz",
        countLabel: "7 dynamic questions",
        startLabel: "Start quick quiz",
        note: "Quick quiz is selected. It uses a shorter rotating question set.",
        sidebarText: "7 dynamic questions with a fast read. Good when you want a result quickly or want to reroll a different question mix.",
        analysisHeading: "Quick read",
        analysisIntro: "This short dynamic version is built to catch your strongest first-impression pattern fast.",
        detailLabels: ["Strongest Signal", "Likely Role", "Keep In Mind"]
    },
    normal: {
        name: "Normal Quiz",
        countLabel: "14 questions",
        startLabel: "Start normal quiz",
        note: "Normal quiz is selected. It uses the full standard question set.",
        sidebarText: "14 questions with the standard result read. This is the balanced version and the closest thing to the default site experience.",
        analysisHeading: "Standard read",
        analysisIntro: "This standard version balances speed with enough range to separate similar characters and talents cleanly.",
        detailLabels: ["Decision Style", "Team Role", "Nuance"]
    },
    advanced: {
        name: "Advanced Quiz",
        countLabel: "30 questions",
        startLabel: "Start advanced quiz",
        note: "Advanced quiz is selected. It uses 30 questions and gives a much deeper result breakdown.",
        sidebarText: "30 questions with extra scenario, pressure, and role questions. The result screen also gives a deeper explanation of what the mix means.",
        analysisHeading: "Deep read",
        analysisIntro: "This 30-question version is meant to give a more layered read, not just a fast first impression.",
        detailLabels: ["Core Pattern", "How It Shows Up", "What It Means"]
    }
};

const traitNarratives = {
    heart: {
        decision: "You tend to make decisions through loyalty, protection, and emotional stakes instead of distance.",
        team: "In groups, you read as the protector, stabilizer, or person others trust with the real problem.",
        challenge: "Your pressure point is overextending yourself or staying loyal long after something has gone uneven."
    },
    wit: {
        decision: "You prefer leverage, pattern recognition, and understanding the whole board before you commit.",
        team: "In groups, you become the strategist, translator, or person who sees the hidden angle first.",
        challenge: "Your pressure point is overthinking, delaying, or waiting for the map to feel complete before you move."
    },
    nerve: {
        decision: "You get clearer when the stakes are real and usually trust action more than hesitation.",
        team: "In groups, you read as the initiator, challenger, or person willing to take the hard first move.",
        challenge: "Your pressure point is pushing too hard or mistaking urgency for proof that your first impulse is the right one."
    },
    calm: {
        decision: "You regulate yourself first, which makes you hard to rattle and good at spotting the real leverage point.",
        team: "In groups, you become the steadying force, quiet protector, or person who lowers the emotional temperature.",
        challenge: "Your pressure point is going too inward, seeming unreadable, or waiting too long to say what you know."
    },
    spark: {
        decision: "You think in live wires, leaps, and possibility, which makes you inventive and difficult to box in.",
        team: "In groups, you become the idea engine, disruptor, or person who changes the mood and gets things moving.",
        challenge: "Your pressure point is scattering your energy or leaning on momentum before the structure is ready."
    }
};

const characterPreviewGrid = document.getElementById("characterPreviewGrid");
const abilityPreviewGrid = document.getElementById("abilityPreviewGrid");
const introPanel = document.getElementById("introPanel");
const questionPanel = document.getElementById("questionPanel");
const resultPanel = document.getElementById("resultPanel");
const modeNote = document.getElementById("modeNote");
const activeModePill = document.getElementById("activeModePill");
const changeModeButton = document.getElementById("changeModeButton");
const startQuizButton = document.getElementById("startQuizButton");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const selectionHint = document.getElementById("selectionHint");
const questionText = document.getElementById("questionText");
const optionGrid = document.getElementById("optionGrid");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const resultModeLabel = document.getElementById("resultModeLabel");
const resultHeading = document.getElementById("resultHeading");
const characterName = document.getElementById("characterName");
const characterSummary = document.getElementById("characterSummary");
const resultFlavor = document.getElementById("resultFlavor");
const runnerUpText = document.getElementById("runnerUpText");
const abilityList = document.getElementById("abilityList");
const abilitySummary = document.getElementById("abilitySummary");
const traitList = document.getElementById("traitList");
const analysisHeading = document.getElementById("analysisHeading");
const analysisIntro = document.getElementById("analysisIntro");
const detailOneLabel = document.getElementById("detailOneLabel");
const detailOneText = document.getElementById("detailOneText");
const detailTwoLabel = document.getElementById("detailTwoLabel");
const detailTwoText = document.getElementById("detailTwoText");
const detailThreeLabel = document.getElementById("detailThreeLabel");
const detailThreeText = document.getElementById("detailThreeText");
const shareText = document.getElementById("shareText");
const copyStatus = document.getElementById("copyStatus");
const characterStats = document.getElementById("characterStats");
const abilityStats = document.getElementById("abilityStats");
const sidebarModeHeading = document.getElementById("sidebarModeHeading");
const sidebarModeText = document.getElementById("sidebarModeText");
const copyResultButton = document.getElementById("copyResultButton");
const changeQuizTypeResultButton = document.getElementById("changeQuizTypeResultButton");
const restartButton = document.getElementById("restartButton");
const modeButtons = Array.from(document.querySelectorAll("[data-mode]"));

const state = {
    modeKey: "normal",
    activeQuestions: [],
    currentQuestion: 0,
    answers: [],
    lastResult: null
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

function shuffleArray(items) {
    const copy = items.slice();

    for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }

    return copy;
}

function buildQuickQuiz() {
    const selectedQuestions = quickQuestionGroups.map((group) => {
        const choiceIndex = group[Math.floor(Math.random() * group.length)];
        return normalQuizData[choiceIndex];
    });

    return shuffleArray(selectedQuestions);
}

function getQuestionsForMode(modeKey) {
    if (modeKey === "quick") {
        return buildQuickQuiz();
    }

    if (modeKey === "advanced") {
        return normalQuizData.concat(advancedOnlyQuizData);
    }

    return normalQuizData.slice();
}

function getActiveMode() {
    return quizModes[state.modeKey];
}

function setSelectedMode(modeKey) {
    state.modeKey = modeKey;
    updateModeUI();
}

function updateModeUI() {
    const mode = getActiveMode();

    modeNote.textContent = mode.note;
    startQuizButton.textContent = mode.startLabel;
    activeModePill.textContent = mode.name;
    resultModeLabel.textContent = `${mode.name} Result`;
    sidebarModeHeading.textContent = mode.name;
    sidebarModeText.textContent = mode.sidebarText;

    modeButtons.forEach((button) => {
        if (button.dataset.mode === state.modeKey) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });
}

function getCurrentQuestionCount() {
    return state.activeQuestions.length;
}

function renderQuestion() {
    const current = state.activeQuestions[state.currentQuestion];
    const selectedIndex = state.answers[state.currentQuestion];
    const totalQuestions = getCurrentQuestionCount();

    showPanel("question");
    copyStatus.textContent = "";
    progressText.textContent = `Question ${state.currentQuestion + 1} of ${totalQuestions}`;
    progressFill.style.width = `${((state.currentQuestion + 1) / totalQuestions) * 100}%`;
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
    nextButton.textContent = state.currentQuestion === totalQuestions - 1 ? "Reveal result" : "Next";
}

function addScores(target, source) {
    Object.entries(source || {}).forEach(([key, value]) => {
        target[key] = (target[key] || 0) + value;
    });
}

function sortedEntries(map) {
    return Object.entries(map).sort((left, right) => right[1] - left[1]);
}

function buildAbilityScores(totals) {
    const scores = {};

    Object.keys(abilityInfo).forEach((abilityKey) => {
        let score = totals.abilities[abilityKey] || 0;
        const profile = abilityProfiles[abilityKey];

        if (profile) {
            Object.entries(profile.traits || {}).forEach(([traitKey, weight]) => {
                score += (totals.traits[traitKey] || 0) * weight;
            });

            Object.entries(profile.characters || {}).forEach(([characterKey, weight]) => {
                score += (totals.characters[characterKey] || 0) * weight;
            });
        }

        scores[abilityKey] = Math.round(score * 10) / 10;
    });

    return scores;
}

function pickAbilities(abilityScores) {
    const rankedAll = sortedEntries(abilityScores);
    if (rankedAll[0] && rankedAll[0][0] === "talentless") {
        return ["talentless"];
    }

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

function getTopTraitKeys(traitScores) {
    return sortedEntries(traitScores)
        .slice(0, 3)
        .map(([key]) => key);
}

function formatScore(score) {
    return Number.isInteger(score) ? String(score) : score.toFixed(1).replace(/\.0$/, "");
}

function lowerFirst(text) {
    return text.charAt(0).toLowerCase() + text.slice(1);
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
                <span>${formatScore(score)}</span>
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
    return `I got ${character.name} on the ${getActiveMode().name} in Lost Cities Matchmaker. Likely ability: ${abilityText}. Core traits: ${traitText}. Try it here: ${pageUrl}`;
}

function calculateResult() {
    const totals = {
        characters: {},
        abilities: {},
        traits: {}
    };

    state.answers.forEach((answerIndex, questionIndex) => {
        const choice = state.activeQuestions[questionIndex].options[answerIndex];
        addScores(totals.characters, choice.effects.characters);
        addScores(totals.abilities, choice.effects.abilities);
        addScores(totals.traits, choice.effects.traits);
    });

    const rankedCharacters = sortedEntries(totals.characters);
    const abilityScores = buildAbilityScores(totals);
    const rankedAbilities = sortedEntries(abilityScores);
    const chosenAbilityKeys = pickAbilities(abilityScores);
    const topTraitKeys = getTopTraitKeys(totals.traits);
    const topTraits = topTraitKeys.map((key) => traitInfo[key]);

    return {
        topCharacterKey: rankedCharacters[0][0],
        runnerUp: rankedCharacters[1] || null,
        rankedCharacters,
        rankedAbilities,
        chosenAbilityKeys,
        topTraitKeys,
        topTraits
    };
}

function buildCharacterSummaryText(character, result) {
    const traitBlend = result.topTraitKeys
        .slice(0, 2)
        .map((key) => traitInfo[key].toLowerCase())
        .join(" and ");

    if (state.modeKey === "quick") {
        return character.summary;
    }

    if (state.modeKey === "advanced") {
        return `${character.summary} Across the longer question set, this match stayed on top because your answers kept blending ${traitBlend} traits in a way that lined up with ${character.name}.`;
    }

    return character.summary;
}

function buildAbilitySummaryText(result) {
    const primaryAbilityKey = result.chosenAbilityKeys[0];
    const primaryAbility = abilityInfo[primaryAbilityKey];
    const secondaryAbility = result.chosenAbilityKeys[1] ? abilityInfo[result.chosenAbilityKeys[1]] : null;
    const traitBlend = result.topTraitKeys
        .slice(0, 2)
        .map((key) => traitInfo[key].toLowerCase())
        .join(" and ");

    if (primaryAbilityKey === "talentless") {
        if (state.modeKey === "advanced") {
            return `${abilityInfo.talentless.summary} In the advanced read, that usually means your answers kept favoring grounded judgment, usefulness, and self-control over spectacle.`;
        }

        return abilityInfo.talentless.summary;
    }

    if (state.modeKey === "advanced") {
        if (secondaryAbility) {
            return `${primaryAbility.summary} Across 30 questions, this talent stayed on top because your answers kept circling back to ${traitBlend} patterns. ${secondaryAbility.name} also stayed close, which adds extra nuance to how the result shows up.`;
        }

        return `${primaryAbility.summary} Across 30 questions, this talent stayed on top because your answers kept circling back to ${traitBlend} patterns.`;
    }

    if (secondaryAbility) {
        return `${primaryAbility.summary} You also have a strong secondary pull toward ${secondaryAbility.name.toLowerCase()}.`;
    }

    return primaryAbility.summary;
}

function buildAnalysis(result, character) {
    const mode = getActiveMode();
    const primaryTraitKey = result.topTraitKeys[0];
    const secondaryTraitKey = result.topTraitKeys[1] || primaryTraitKey;
    const primaryTrait = traitNarratives[primaryTraitKey];
    const secondaryTrait = traitNarratives[secondaryTraitKey];
    const primaryAbility = abilityInfo[result.chosenAbilityKeys[0]];
    const secondaryAbility = result.chosenAbilityKeys[1] ? abilityInfo[result.chosenAbilityKeys[1]] : null;
    const runnerUpName = result.runnerUp ? characterInfo[result.runnerUp[0]].name : null;
    const characterGap = result.runnerUp ? result.rankedCharacters[0][1] - result.runnerUp[1] : null;
    const secondaryTraitLine = secondaryTraitKey !== primaryTraitKey
        ? ` The backup pull toward ${traitInfo[secondaryTraitKey].toLowerCase()} means ${lowerFirst(secondaryTrait.decision)}`
        : "";
    let intro = mode.analysisIntro;

    if (state.modeKey === "advanced") {
        intro += ` ${character.name} and ${primaryAbility.name} held up because your answers kept returning to ${traitInfo[primaryTraitKey].toLowerCase()} and ${traitInfo[secondaryTraitKey].toLowerCase()} patterns.`;
    } else if (state.modeKey === "normal") {
        intro += ` ${character.name} came through as the cleanest character fit, with ${primaryAbility.name} leading the ability side.`;
    } else {
        intro += ` Think of it as the clearest snapshot of your strongest pattern, not the final word on every nuance.`;
    }

    let detailOne = primaryTrait.decision;
    let detailTwo = `${character.role} energy fits here. ${primaryTrait.team}`;
    let detailThree = primaryTrait.challenge;

    if (state.modeKey === "quick") {
        if (secondaryAbility) {
            detailTwo += ` The secondary pull toward ${secondaryAbility.name.toLowerCase()} keeps the result from being one-note.`;
        }

        if (runnerUpName && characterGap !== null && characterGap <= 2) {
            detailThree = `This is the short version, so the close second-place pull toward ${runnerUpName} matters. ${primaryTrait.challenge}`;
        }
    } else if (state.modeKey === "normal") {
        detailOne = `${primaryTrait.decision}${secondaryTraitLine}`;
        detailTwo = `${character.role} fits here. ${primaryTrait.team} Paired with ${primaryAbility.name}, that usually looks grounded and readable in a group.`;
        detailThree = runnerUpName && characterGap !== null && characterGap <= 2
            ? `You also stayed fairly close to ${runnerUpName}, which suggests this result has some layered overlap instead of being completely one-note. ${secondaryAbility ? `The extra pull toward ${secondaryAbility.name.toLowerCase()} reinforces that.` : ""}`
            : `${primaryTrait.challenge}${secondaryAbility ? ` There is also a meaningful secondary pull toward ${secondaryAbility.name.toLowerCase()}, which softens the edges of the main result.` : ""}`;
    } else {
        detailOne = `${primaryTrait.decision}${secondaryTraitLine}`;
        detailTwo = `${character.role} is the clearest social role here. ${primaryTrait.team} With ${primaryAbility.name} on top, the result feels broad rather than flat${secondaryAbility ? `, especially with ${secondaryAbility.name.toLowerCase()} staying close.` : "."}`;
        detailThree = runnerUpName && characterGap !== null && characterGap <= 2
            ? `The small gap between ${character.name} and ${runnerUpName} suggests a layered personality rather than a single rigid archetype. ${primaryTrait.challenge}`
            : `Your top character score separated cleanly even across 30 questions, which makes this read feel fairly stable. ${primaryTrait.challenge}`;
    }

    return {
        heading: mode.analysisHeading,
        intro,
        labels: mode.detailLabels,
        details: [detailOne, detailTwo, detailThree]
    };
}

function renderResult() {
    const result = calculateResult();
    const character = characterInfo[result.topCharacterKey];
    const analysis = buildAnalysis(result, character);
    state.lastResult = result;

    resultHeading.textContent = `You match ${character.name}`;
    characterName.textContent = character.name;
    characterSummary.textContent = buildCharacterSummaryText(character, result);
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
        abilitySummary.textContent = buildAbilitySummaryText(result);
    } else {
        abilitySummary.textContent = buildAbilitySummaryText(result);
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

    analysisHeading.textContent = analysis.heading;
    analysisIntro.textContent = analysis.intro;
    [detailOneLabel.textContent, detailTwoLabel.textContent, detailThreeLabel.textContent] = analysis.labels;
    [detailOneText.textContent, detailTwoText.textContent, detailThreeText.textContent] = analysis.details;

    shareText.value = buildShareText(character, result.chosenAbilityKeys, result.topTraits);
    copyStatus.textContent = "";
    showPanel("result");
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
    state.activeQuestions = getQuestionsForMode(state.modeKey);
    state.currentQuestion = 0;
    state.answers = Array(state.activeQuestions.length).fill(null);
    state.lastResult = null;
    renderQuestion();
}

function returnToModePicker() {
    copyStatus.textContent = "";
    showPanel("intro");
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
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
    startQuiz();
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

    if (state.currentQuestion === state.activeQuestions.length - 1) {
        renderResult();
        return;
    }

    state.currentQuestion += 1;
    renderQuestion();
});

copyResultButton.addEventListener("click", () => {
    copyResultText();
});

changeModeButton.addEventListener("click", () => {
    returnToModePicker();
});

changeQuizTypeResultButton.addEventListener("click", () => {
    returnToModePicker();
});

restartButton.addEventListener("click", () => {
    startQuiz();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
});

modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setSelectedMode(button.dataset.mode);
    });
});

renderPreviewCards();
updateModeUI();
showPanel("intro");
