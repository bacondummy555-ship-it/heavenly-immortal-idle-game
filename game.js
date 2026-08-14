"use strict";


/* ========================================================= */
/* SAVE CONFIG                                               */
/* ========================================================= */

const SAVE_KEY =
    "idleCultivationSaveV8";


const OLD_SAVE_KEYS = [

    "idleCultivationSaveV7",

    "idleCultivationSaveV6",

    "idleCultivationSaveV5",

    "idleCultivationSaveV4",

    "idleCultivationSaveV3",

    "idleCultivationSaveV2",

    "idleCultivationSaveV1"

];


const TICK_RATE =
    1000;


const AUTO_SAVE_INTERVAL =
    10000;


const AUTO_BATTLE_INTERVAL =
    1600;


const AUCTION_REFRESH_TIME =
    10 * 60 * 1000;


const MAX_OFFLINE_SECONDS =
    12 * 60 * 60;



/* ========================================================= */
/* REALMS                                                    */
/* ========================================================= */

const REALMS = [

    {
        name: "Mortal",
        qi: 120,
        qiMultiplier: 1,
        combat: 1
    },

    {
        name: "Body Tempering",
        qi: 450,
        qiMultiplier: 1.55,
        combat: 2
    },

    {
        name: "Qi Refining",
        qi: 1500,
        qiMultiplier: 2.6,
        combat: 4.2
    },

    {
        name: "Foundation Establishment",
        qi: 5000,
        qiMultiplier: 4.5,
        combat: 8.5
    },

    {
        name: "Golden Core",
        qi: 16000,
        qiMultiplier: 8,
        combat: 17
    },

    {
        name: "Nascent Soul",
        qi: 52000,
        qiMultiplier: 14,
        combat: 35
    },

    {
        name: "Soul Transformation",
        qi: 175000,
        qiMultiplier: 25,
        combat: 72
    },

    {
        name: "Void Refining",
        qi: 600000,
        qiMultiplier: 44,
        combat: 150
    },

    {
        name: "Integration",
        qi: 2100000,
        qiMultiplier: 78,
        combat: 320
    },

    {
        name: "Mahayana",
        qi: 7500000,
        qiMultiplier: 140,
        combat: 700
    },

    {
        name: "Tribulation Transcendence",
        qi: 26000000,
        qiMultiplier: 250,
        combat: 1500
    },

    {
        name: "Immortal",
        qi: 90000000,
        qiMultiplier: 450,
        combat: 3500
    }

];


const STAGES = [

    "Early Stage",

    "Middle Stage",

    "Late Stage",

    "Peak Stage"

];


const TRIBULATION_REALMS = [

    2,

    3,

    4,

    5,

    6,

    8,

    10,

    11

];



/* ========================================================= */
/* SPIRITUAL ROOTS                                           */
/* ========================================================= */

const SPIRITUAL_ROOTS = [

    {
        name:
            "Five Element Root",

        qi:
            0.05,

        breakthrough:
            0
    },

    {
        name:
            "Dual Spiritual Root",

        qi:
            0.12,

        breakthrough:
            2
    },

    {
        name:
            "Heavenly Spiritual Root",

        qi:
            0.25,

        breakthrough:
            5
    },

    {
        name:
            "Sword Spiritual Root",

        qi:
            0.30,

        breakthrough:
            5
    },

    {
        name:
            "Primordial Chaos Root",

        qi:
            0.50,

        breakthrough:
            10
    },

    {
        name:
            "Dao Origin Root",

        qi:
            0.75,

        breakthrough:
            15
    }

];



/* ========================================================= */
/* TECHNIQUES                                                */
/* ========================================================= */

const TECHNIQUES = [

    {
        id:
            "mortal-breathing",

        name:
            "Mortal Breathing Art",

        rank:
            "Mortal",

        qiBonus:
            0,

        unlockRealm:
            0
    },

    {
        id:
            "jade-cloud",

        name:
            "Jade Cloud Scripture",

        rank:
            "Yellow",

        qiBonus:
            0.20,

        unlockRealm:
            1
    },

    {
        id:
            "azure-heaven",

        name:
            "Azure Heaven Art",

        rank:
            "Profound",

        qiBonus:
            0.45,

        unlockRealm:
            2
    },

    {
        id:
            "nine-suns",

        name:
            "Nine Suns Immortal Scripture",

        rank:
            "Earth",

        qiBonus:
            0.80,

        unlockRealm:
            4
    },

    {
        id:
            "chaos-devouring",

        name:
            "Chaos Devouring Art",

        rank:
            "Heaven",

        qiBonus:
            1.30,

        unlockRealm:
            6
    },

    {
        id:
            "primordial-dao",

        name:
            "Primordial Dao Scripture",

        rank:
            "Immortal",

        qiBonus:
            2,

        unlockRealm:
            9
    }

];



/* ========================================================= */
/* MARTIAL SKILLS                                            */
/* ========================================================= */

const MARTIAL_SKILLS = [

    {
        id:
            "heavy-palm",

        name:
            "Mountain Crushing Palm",

        type:
            "Strength",

        realm:
            0,

        damage:
            1.35,

        cooldown:
            2
    },

    {
        id:
            "spirit-blade",

        name:
            "Spirit Blade Slash",

        type:
            "Sword",

        realm:
            1,

        damage:
            1.65,

        cooldown:
            3
    },

    {
        id:
            "soul-pierce",

        name:
            "Soul Piercing Finger",

        type:
            "Soul",

        realm:
            2,

        damage:
            1.95,

        cooldown:
            4
    },

    {
        id:
            "azure-sword",

        name:
            "Azure Heaven Sword Art",

        type:
            "Sword",

        realm:
            3,

        damage:
            2.4,

        cooldown:
            5
    },

    {
        id:
            "dragon-fist",

        name:
            "True Dragon Fist",

        type:
            "Strength",

        realm:
            4,

        damage:
            3,

        cooldown:
            6
    },

    {
        id:
            "nine-sun-burst",

        name:
            "Nine Suns Heavenly Burst",

        type:
            "Soul",

        realm:
            5,

        damage:
            3.8,

        cooldown:
            7
    },

    {
        id:
            "void-severing",

        name:
            "Void Severing Sword",

        type:
            "Sword",

        realm:
            6,

        damage:
            5,

        cooldown:
            8
    },

    {
        id:
            "chaos-palm",

        name:
            "Primordial Chaos Palm",

        type:
            "Soul",

        realm:
            8,

        damage:
            7,

        cooldown:
            10
    }

];



/* ========================================================= */
/* RARITIES                                                  */
/* ========================================================= */

const RARITIES = [

    {
        name:
            "Common",

        multiplier:
            1
    },

    {
        name:
            "Uncommon",

        multiplier:
            1.8
    },

    {
        name:
            "Rare",

        multiplier:
            3
    },

    {
        name:
            "Epic",

        multiplier:
            5
    },

    {
        name:
            "Legendary",

        multiplier:
            9
    },

    {
        name:
            "Mythic",

        multiplier:
            18
    }

];


const WEAPON_NAMES = {

    Common: [

        "Iron Sword",

        "Steel Saber",

        "Spiritwood Blade"

    ],

    Uncommon: [

        "Moonlight Blade",

        "Emerald Saber",

        "Spirit Iron Sword"

    ],

    Rare: [

        "Azure Cloud Sword",

        "Thunder Spirit Blade",

        "Blood Moon Saber"

    ],

    Epic: [

        "Heaven Piercing Sword",

        "Dragon Vein Blade",

        "Nine Star Saber"

    ],

    Legendary: [

        "Celestial Emperor Sword",

        "Heaven Devouring Saber",

        "Primordial Dragon Blade"

    ],

    Mythic: [

        "Sword of Dao Origin",

        "World Severing Immortal Blade",

        "Chaos Annihilation Sword"

    ]

};


const ARTIFACT_NAMES = {

    Common: [

        "Spirit Jade Pendant",

        "Meditation Bead",

        "Soul Bell"

    ],

    Uncommon: [

        "Cloud Gathering Orb",

        "Emerald Spirit Seal",

        "Golden Crane Pendant"

    ],

    Rare: [

        "Azure Lotus Mirror",

        "Dragon Blood Talisman",

        "Moon Soul Lantern"

    ],

    Epic: [

        "Heavenly Dao Compass",

        "Nine Star Pagoda",

        "Void Spirit Mirror"

    ],

    Legendary: [

        "Celestial Emperor Seal",

        "Primordial Chaos Bell",

        "Tribulation Pearl"

    ],

    Mythic: [

        "Dao Origin Wheel",

        "World Creation Cauldron",

        "Heavenly Mandate Scripture"

    ]

};


const ARTIFACT_EFFECTS = [

    "qi",

    "combat",

    "regen",

    "fortune"

];



/* ========================================================= */
/* PETS                                                      */
/* ========================================================= */

const PET_TEMPLATES = [

    {
        name:
            "Spirit Fox",

        icon:
            "🦊",

        rarity:
            "Common",

        qiBonus:
            0.05,

        combatBonus:
            0,

        herbBonus:
            0.05
    },

    {
        name:
            "Cloud Crane",

        icon:
            "🕊️",

        rarity:
            "Uncommon",

        qiBonus:
            0.08,

        combatBonus:
            0.03,

        herbBonus:
            0.08
    },

    {
        name:
            "Thunder Tiger",

        icon:
            "🐯",

        rarity:
            "Rare",

        qiBonus:
            0,

        combatBonus:
            0.15,

        herbBonus:
            0
    },

    {
        name:
            "Jade Serpent",

        icon:
            "🐍",

        rarity:
            "Rare",

        qiBonus:
            0.12,

        combatBonus:
            0.06,

        herbBonus:
            0.08
    },

    {
        name:
            "Golden Crow",

        icon:
            "🐦‍🔥",

        rarity:
            "Epic",

        qiBonus:
            0.18,

        combatBonus:
            0.16,

        herbBonus:
            0
    },

    {
        name:
            "Azure Dragon",

        icon:
            "🐉",

        rarity:
            "Legendary",

        qiBonus:
            0.25,

        combatBonus:
            0.30,

        herbBonus:
            0.12
    },

    {
        name:
            "Primordial Qilin",

        icon:
            "🦄",

        rarity:
            "Mythic",

        qiBonus:
            0.40,

        combatBonus:
            0.45,

        herbBonus:
            0.20
    }

];



/* ========================================================= */
/* CAVE                                                      */
/* ========================================================= */

const CAVE_BUILDINGS = [

    {
        id:
            "spirit-array",

        name:
            "Spirit Gathering Array",

        description:
            "Increases automatic Qi generation.",

        cost:
            250
    },

    {
        id:
            "alchemy-room",

        name:
            "Alchemy Chamber",

        description:
            "Improves herb gathering and alchemy success.",

        cost:
            300
    },

    {
        id:
            "beast-pen",

        name:
            "Spirit Beast Pen",

        description:
            "Strengthens Spirit Pet bonuses.",

        cost:
            400
    },

    {
        id:
            "training-hall",

        name:
            "Martial Training Hall",

        description:
            "Improves combat and passive healing.",

        cost:
            450
    }

];



/* ========================================================= */
/* DAO                                                       */
/* ========================================================= */

const DAO_UPGRADES = [

    {
        id:
            "dao-qi",

        name:
            "Dao of Spiritual Energy",

        description:
            "+10% permanent Qi generation.",

        cost:
            2
    },

    {
        id:
            "dao-combat",

        name:
            "Dao of Battle",

        description:
            "+10% permanent Combat Power.",

        cost:
            2
    },

    {
        id:
            "dao-fortune",

        name:
            "Dao of Fortune",

        description:
            "+5% treasure fortune.",

        cost:
            3
    },

    {
        id:
            "dao-vitality",

        name:
            "Dao of Vitality",

        description:
            "+10% maximum health.",

        cost:
            2
    }

];



/* ========================================================= */
/* HERBS                                                     */
/* ========================================================= */

const HERBS = [

    {
        id:
            "spirit-grass",

        name:
            "Spirit Grass",

        icon:
            "🌿"
    },

    {
        id:
            "blood-ginseng",

        name:
            "Blood Ginseng",

        icon:
            "🌱"
    },

    {
        id:
            "moon-flower",

        name:
            "Moon Flower",

        icon:
            "🌸"
    },

    {
        id:
            "fire-root",

        name:
            "Fire Root",

        icon:
            "🔥"
    },

    {
        id:
            "jade-leaf",

        name:
            "Jade Leaf",

        icon:
            "🍃"
    },

    {
        id:
            "soul-orchid",

        name:
            "Soul Orchid",

        icon:
            "🪻"
    }

];



/* ========================================================= */
/* ALCHEMY                                                   */
/* ========================================================= */

const ALCHEMY_LEVELS = [

    {
        name:
            "Novice Alchemist",

        required:
            0
    },

    {
        name:
            "Apprentice Alchemist",

        required:
            100
    },

    {
        name:
            "Grade 1 Alchemist",

        required:
            300
    },

    {
        name:
            "Grade 2 Alchemist",

        required:
            700
    },

    {
        name:
            "Grade 3 Alchemist",

        required:
            1500
    },

    {
        name:
            "Alchemy Master",

        required:
            3500
    }

];


const ALCHEMY_RECIPES = [

    {
        id:
            "qi-pill",

        name:
            "Qi Gathering Pill",

        unlock:
            0,

        chance:
            90,

        materials: {

            "spirit-grass":
                3,

            "jade-leaf":
                1

        },

        reward:
            "pill"
    },

    {
        id:
            "healing-pill",

        name:
            "Healing Pill",

        unlock:
            0,

        chance:
            88,

        materials: {

            "spirit-grass":
                2,

            "blood-ginseng":
                2

        },

        reward:
            "healing"
    },

    {
        id:
            "meridian-pill",

        name:
            "Meridian Tempering Pill",

        unlock:
            1,

        chance:
            75,

        materials: {

            "blood-ginseng":
                3,

            "fire-root":
                2,

            "jade-leaf":
                1

        },

        reward:
            "stat"
    },

    {
        id:
            "foundation-pill",

        name:
            "Foundation Stabilizing Pill",

        unlock:
            3,

        chance:
            55,

        materials: {

            "fire-root":
                4,

            "blood-ginseng":
                4,

            "soul-orchid":
                2

        },

        reward:
            "breakthrough"
    }

];



/* ========================================================= */
/* SECT                                                      */
/* ========================================================= */

const SECT_RANKS = [

    {
        name:
            "Outer Disciple",

        required:
            0,

        qi:
            0,

        discount:
            0
    },

    {
        name:
            "Inner Disciple",

        required:
            500,

        qi:
            0.05,

        discount:
            0.05
    },

    {
        name:
            "Core Disciple",

        required:
            2000,

        qi:
            0.12,

        discount:
            0.10
    },

    {
        name:
            "Personal Disciple",

        required:
            6000,

        qi:
            0.20,

        discount:
            0.15
    },

    {
        name:
            "Sect Elder",

        required:
            15000,

        qi:
            0.35,

        discount:
            0.20
    },

    {
        name:
            "Grand Elder",

        required:
            40000,

        qi:
            0.55,

        discount:
            0.25
    }

];


const SECT_TREASURY = [

    {
        id:
            "pill",

        name:
            "Cultivation Pill",

        cost:
            60
    },

    {
        id:
            "heal",

        name:
            "Healing Pill",

        cost:
            45
    },

    {
        id:
            "herbs",

        name:
            "Herb Pack",

        cost:
            80
    },

    {
        id:
            "stats",

        name:
            "Body Tempering Essence",

        cost:
            300
    },

    {
        id:
            "weapon",

        name:
            "Sect Treasure Weapon",

        cost:
            900
    },

    {
        id:
            "token",

        name:
            "Secret Realm Token",

        cost:
            1200
    }

];


const SECT_DUTIES = [

    {
        id:
            "patrol",

        name:
            "Mountain Patrol",

        type:
            "expeditions",

        target:
            3,

        reward:
            60
    },

    {
        id:
            "beasts",

        name:
            "Beast Extermination",

        type:
            "kills",

        target:
            5,

        reward:
            120
    },

    {
        id:
            "herbs",

        name:
            "Medicinal Gathering",

        type:
            "herbs",

        target:
            8,

        reward:
            150
    },

    {
        id:
            "boss",

        name:
            "Eliminate Region Lord",

        type:
            "bosses",

        target:
            1,

        reward:
            300
    }

];



/* ========================================================= */
/* ZONES                                                     */
/* ========================================================= */

const ZONES = [

    {
        id:
            "misty-forest",

        name:
            "Misty Forest",

        required:
            0,

        power:
            0.65,

        stones:
            1,

        herbs:
            1,

        description:
            "A quiet forest inhabited by weak spirit beasts.",

        enemies: [

            "Fang Wolf",

            "Horned Rabbit",

            "Poison Fang Snake",

            "Wild Spirit Boar"

        ],

        boss:
            "Ancient Fang Wolf King"
    },

    {
        id:
            "spirit-mountain",

        name:
            "Spirit Mountain",

        required:
            1,

        power:
            1.25,

        stones:
            2,

        herbs:
            2,

        description:
            "A mountain overflowing with spiritual energy.",

        enemies: [

            "Rockback Ape",

            "Storm Eagle",

            "Ironhide Bear"

        ],

        boss:
            "Golden-Eyed Mountain Ape"
    },

    {
        id:
            "blood-valley",

        name:
            "Blood Moon Valley",

        required:
            2,

        power:
            2,

        stones:
            4,

        herbs:
            3,

        description:
            "An ancient battlefield saturated with killing intent.",

        enemies: [

            "Blood Demon",

            "Crimson Serpent",

            "Ghost Cultivator"

        ],

        boss:
            "Blood Moon Demon General"
    },

    {
        id:
            "ancient-ruins",

        name:
            "Ancient Sect Ruins",

        required:
            3,

        power:
            3.6,

        stones:
            7,

        herbs:
            4,

        description:
            "Forgotten ruins protected by ancient formations.",

        enemies: [

            "Ancient Guardian",

            "Sword Puppet",

            "Stone Golem"

        ],

        boss:
            "Ancient Sect Guardian"
    },

    {
        id:
            "dragon-abyss",

        name:
            "Dragon Abyss",

        required:
            4,

        power:
            6,

        stones:
            12,

        herbs:
            5,

        description:
            "A terrifying abyss infused with dragon blood.",

        enemies: [

            "Abyss Drake",

            "Dragonblood Serpent",

            "Dragonbone Wraith"

        ],

        boss:
            "Ancient Abyss Dragon"
    },

    {
        id:
            "void-rift",

        name:
            "Void Rift",

        required:
            6,

        power:
            15,

        stones:
            30,

        herbs:
            6,

        description:
            "A spatial tear filled with void creatures.",

        enemies: [

            "Void Devourer",

            "Spatial Fiend",

            "Star Beast"

        ],

        boss:
            "Void Sovereign"
    }

];



/* ========================================================= */
/* MISSIONS                                                  */
/* ========================================================= */

const MISSIONS = [

    {
        id:
            "first-blood",

        name:
            "Outer Sect Trial",

        type:
            "kills",

        target:
            5,

        reward: {

            stones:
                250,

            pills:
                1,

            stats:
                2

        }
    },

    {
        id:
            "hunter",

        name:
            "Spirit Beast Hunter",

        type:
            "kills",

        target:
            15,

        reward: {

            stones:
                700,

            healing:
                2,

            stats:
                3

        }
    },

    {
        id:
            "boss-killer",

        name:
            "Slay a Region Lord",

        type:
            "bosses",

        target:
            1,

        reward: {

            stones:
                1200,

            egg:
                1,

            token:
                1,

            weapon:
                true

        }
    }

];



/* ========================================================= */
/* STORY                                                     */
/* ========================================================= */

const STORY_CHAPTERS = [

    {
        title:
            "Chapter I — Awakening",

        text:
            "Jiang Chue awakens beneath the Azure Cloud Mountains with the Heavenly Dao System bound to his soul. An unknown voice declares that the path of immortality has opened.",

        requirement:
            "Reach Body Tempering Realm.",

        check:
            () =>
                game.realmIndex >=
                1,

        reward:
            () => {

                game.spiritStones +=
                    300;


                game.pills +=
                    2;

            }
    },

    {
        title:
            "Chapter II — Azure Cloud Sect",

        text:
            "Elder Yun notices your unusual spiritual fluctuations and invites you deeper into the Azure Cloud Sect. Rumors begin spreading about a mysterious new disciple.",

        requirement:
            "Reach Qi Refining Realm.",

        check:
            () =>
                game.realmIndex >=
                2,

        reward:
            () => {

                game.sectContribution +=
                    200;


                game.totalSectContribution +=
                    200;

            }
    },

    {
        title:
            "Chapter III — The Hidden Map",

        text:
            "Lin Yue secretly gives you a fragment of an ancient map. It points toward a sealed dimension known as the Violet Moon Secret Realm.",

        requirement:
            "Complete 10 expeditions.",

        check:
            () =>
                game.expeditions >=
                10,

        reward:
            () => {

                game.secretTokens +=
                    2;

            }
    },

    {
        title:
            "Chapter IV — Blood Moon Conspiracy",

        text:
            "Demonic cultivators appear near Blood Moon Valley. Elder Yun suspects an ancient demonic sect has returned.",

        requirement:
            "Defeat 2 region bosses.",

        check:
            () =>
                game.bossesSlain >=
                2,

        reward:
            () => {

                game.artifacts.push(
                    generateArtifact(
                        "Rare"
                    )
                );

            }
    },

    {
        title:
            "Chapter V — Golden Core Genius",

        text:
            "Your rise becomes impossible to ignore. Inner disciples challenge you, elders debate your origin and Zhao Feng begins watching your every move.",

        requirement:
            "Reach Golden Core Realm.",

        check:
            () =>
                game.realmIndex >=
                4,

        reward:
            () => {

                game.spiritEggs +=
                    1;


                game.statPoints +=
                    5;

            }
    },

    {
        title:
            "Chapter VI — Heaven's Chosen",

        text:
            "The Heavenly Dao itself begins reacting to your cultivation. Ancient inheritances stir and world calamities awaken.",

        requirement:
            "Reach Nascent Soul Realm.",

        check:
            () =>
                game.realmIndex >=
                5,

        reward:
            () => {

                game.secretTokens +=
                    3;


                game.daoPoints +=
                    1;


                game.lifetimeDaoPoints +=
                    1;

            }
    },

    {
        title:
            "Chapter VII — Beyond Mortal Heaven",

        text:
            "Jiang Chue gazes beyond the mortal realm. The final secrets of the Heavenly Dao System remain hidden beyond immortality.",

        requirement:
            "Reach Immortal Realm.",

        check:
            () =>
                game.realmIndex >=
                11,

        reward:
            () => {

                game.daoPoints +=
                    5;


                game.lifetimeDaoPoints +=
                    5;

            }
    }

];



/* ========================================================= */
/* NPCS                                                      */
/* ========================================================= */

const NPCS = [

    {
        id:
            "elder-yun",

        name:
            "Elder Yun",

        title:
            "Azure Cloud Sect Elder",

        symbol:
            "雲",

        dialogues: [

            "Your cultivation is advancing quickly. Do not allow arrogance to damage your Dao Heart.",

            "A strong foundation is worth more than a thousand temporary breakthroughs.",

            "The Blood Moon Valley has become restless. Be cautious.",

            "Perhaps Heaven itself has chosen you, Jiang Chue."

        ],

        rewardAffinity:
            25,

        reward:
            () => {

                game.sectContribution +=
                    300;


                game.totalSectContribution +=
                    300;

            }
    },

    {
        id:
            "lin-yue",

        name:
            "Lin Yue",

        title:
            "Inner Sect Disciple",

        symbol:
            "月",

        dialogues: [

            "I found another strange symbol on the ancient map.",

            "You always disappear into secluded cultivation. Do you ever rest?",

            "If you enter another Secret Realm, perhaps I should come with you.",

            "You are becoming frighteningly strong."

        ],

        rewardAffinity:
            25,

        reward:
            () => {

                game.secretTokens +=
                    2;

            }
    },

    {
        id:
            "master-chen",

        name:
            "Master Chen",

        title:
            "Alchemy Hall Master",

        symbol:
            "丹",

        dialogues: [

            "Alchemy is not merely mixing herbs. You must understand the nature of heaven and earth.",

            "Soul strength determines how precisely you control spiritual flame.",

            "Bring me rare herbs and perhaps I will show you something interesting.",

            "Your control of spiritual Qi has improved considerably."

        ],

        rewardAffinity:
            30,

        reward:
            () => {

                game.alchemyExp +=
                    150;


                game.pills +=
                    2;

            }
    },

    {
        id:
            "zhao-feng",

        name:
            "Zhao Feng",

        title:
            "Core Disciple Rival",

        symbol:
            "戰",

        dialogues: [

            "So you are Jiang Chue. I expected someone more intimidating.",

            "Do not mistake rapid cultivation for true strength.",

            "Meet me in the tournament arena if you believe you are worthy.",

            "Hmph. Perhaps I underestimated you."

        ],

        rewardAffinity:
            40,

        reward:
            () => {

                game.statPoints +=
                    5;

            }
    }

];



/* ========================================================= */
/* SECRET REALMS                                             */
/* ========================================================= */

const SECRET_REALMS = [

    {
        id:
            "violet-moon",

        name:
            "Violet Moon Secret Realm",

        required:
            2,

        tokenCost:
            1,

        difficulty:
            1.3,

        rewardMultiplier:
            1,

        inheritance:
            "Violet Moon Essence"
    },

    {
        id:
            "fallen-sword",

        name:
            "Fallen Sword Tomb",

        required:
            3,

        tokenCost:
            1,

        difficulty:
            2.2,

        rewardMultiplier:
            2,

        inheritance:
            "Ancient Sword Intent"
    },

    {
        id:
            "dragon-palace",

        name:
            "Sunken Dragon Palace",

        required:
            4,

        tokenCost:
            2,

        difficulty:
            3.8,

        rewardMultiplier:
            4,

        inheritance:
            "Dragon Bloodline"
    },

    {
        id:
            "star-palace",

        name:
            "Nine Star Palace",

        required:
            6,

        tokenCost:
            3,

        difficulty:
            7,

        rewardMultiplier:
            8,

        inheritance:
            "Nine Star Dao Mark"
    },

    {
        id:
            "primordial-chaos",

        name:
            "Primordial Chaos Domain",

        required:
            8,

        tokenCost:
            5,

        difficulty:
            15,

        rewardMultiplier:
            18,

        inheritance:
            "Primordial Chaos Essence"
    }

];



/* ========================================================= */
/* TOURNAMENT                                                */
/* ========================================================= */

const TOURNAMENT_RANKS = [

    {
        name:
            "Unranked",

        required:
            0
    },

    {
        name:
            "Bronze Disciple",

        required:
            100
    },

    {
        name:
            "Silver Disciple",

        required:
            300
    },

    {
        name:
            "Golden Disciple",

        required:
            700
    },

    {
        name:
            "Inner Sect Champion",

        required:
            1500
    },

    {
        name:
            "Core Sect Champion",

        required:
            3000
    },

    {
        name:
            "Azure Cloud Saint",

        required:
            6000
    }

];


const TOURNAMENT_NAMES = [

    "Li Wei",

    "Chen Mo",

    "Xu Fang",

    "Han Tian",

    "Meng Yu",

    "Zhao Feng",

    "Shen Luo",

    "Bai Xue",

    "Tang Hao",

    "Gu Chen"

];



/* ========================================================= */
/* WORLD BOSSES                                              */
/* ========================================================= */

const WORLD_BOSSES = [

    {
        name:
            "Ancient Demon Sovereign",

        description:
            "A demonic sovereign sealed beneath the continent for ten thousand years."
    },

    {
        name:
            "Nine-Headed Abyss Dragon",

        description:
            "An ancient dragon corrupted by abyssal Qi."
    },

    {
        name:
            "Heaven Devouring Roc",

        description:
            "A colossal divine beast capable of swallowing spiritual mountains."
    },

    {
        name:
            "Void Calamity Emperor",

        description:
            "A creature born within the cracks between worlds."
    }

];



/* ========================================================= */
/* DAILY REWARDS                                             */
/* ========================================================= */

const DAILY_REWARDS = [

    {
        stones:
            100
    },

    {
        pills:
            1
    },

    {
        herbs:
            4
    },

    {
        healing:
            2
    },

    {
        eggs:
            1
    },

    {
        tokens:
            1
    },

    {
        artifact:
            true
    }

];



/* ========================================================= */
/* ACHIEVEMENTS                                              */
/* ========================================================= */

const ACHIEVEMENTS = [

    {
        id:
            "first-step",

        name:
            "First Step on the Dao",

        description:
            "Reach Body Tempering Realm.",

        points:
            5,

        rewardStones:
            250,

        progress:
            () =>
                Math.min(
                    game.realmIndex,
                    1
                ),

        target:
            1
    },

    {
        id:
            "qi-refiner",

        name:
            "True Cultivator",

        description:
            "Reach Qi Refining Realm.",

        points:
            10,

        rewardStones:
            500,

        progress:
            () =>
                Math.min(
                    game.realmIndex,
                    2
                ),

        target:
            2
    },

    {
        id:
            "golden-core",

        name:
            "Golden Core Genius",

        description:
            "Reach Golden Core Realm.",

        points:
            20,

        rewardStones:
            2000,

        progress:
            () =>
                Math.min(
                    game.realmIndex,
                    4
                ),

        target:
            4
    },

    {
        id:
            "hunter",

        name:
            "Spirit Beast Hunter",

        description:
            "Defeat 25 enemies.",

        points:
            10,

        rewardStones:
            1000,

        progress:
            () =>
                game.enemiesSlain,

        target:
            25
    },

    {
        id:
            "boss-slayer",

        name:
            "Region Lord Slayer",

        description:
            "Defeat 5 region bosses.",

        points:
            20,

        rewardStones:
            2500,

        progress:
            () =>
                game.bossesSlain,

        target:
            5
    },

    {
        id:
            "secret-seeker",

        name:
            "Seeker of Hidden Realms",

        description:
            "Clear 5 Secret Realms.",

        points:
            15,

        rewardStones:
            2200,

        progress:
            () =>
                game.secretClears,

        target:
            5
    },

    {
        id:
            "arena-master",

        name:
            "Arena Master",

        description:
            "Win 20 Sect Tournament battles.",

        points:
            20,

        rewardStones:
            3000,

        progress:
            () =>
                game.tournamentWins,

        target:
            20
    },

    {
        id:
            "alchemist",

        name:
            "Flame of Alchemy",

        description:
            "Successfully refine 25 pills.",

        points:
            15,

        rewardStones:
            1800,

        progress:
            () =>
                game.alchemySuccess,

        target:
            25
    },

    {
        id:
            "pet-master",

        name:
            "Spirit Beast Master",

        description:
            "Contract 5 Spirit Pets.",

        points:
            15,

        rewardStones:
            1800,

        progress:
            () =>
                game.pets.length,

        target:
            5
    },

    {
        id:
            "wealth",

        name:
            "Wealth of a Cultivator",

        description:
            "Possess 100,000 Spirit Stones.",

        points:
            20,

        rewardStones:
            5000,

        progress:
            () =>
                game.spiritStones,

        target:
            100000
    },

    {
        id:
            "heaven-defier",

        name:
            "Defier of Heaven",

        description:
            "Survive 5 Heavenly Tribulations.",

        points:
            30,

        rewardStones:
            10000,

        progress:
            () =>
                game.tribulationsSurvived,

        target:
            5
    },

    {
        id:
            "immortal",

        name:
            "Immortal Ascendant",

        description:
            "Reach the Immortal Realm.",

        points:
            50,

        rewardStones:
            25000,

        progress:
            () =>
                Math.min(
                    game.realmIndex,
                    11
                ),

        target:
            11
    },

    {
        id:
            "reincarnation",

        name:
            "Cycle of Reincarnation",

        description:
            "Reincarnate for the first time.",

        points:
            50,

        rewardStones:
            5000,

        progress:
            () =>
                game.reincarnations,

        target:
            1
    }

];



/* ========================================================= */
/* TITLES                                                    */
/* ========================================================= */

const PLAYER_TITLES = [

    {
        id:
            "wandering-mortal",

        name:
            "Wandering Mortal",

        unlock:
            () =>
                true
    },

    {
        id:
            "spirit-hunter",

        name:
            "Spirit Beast Hunter",

        unlock:
            () =>
                game.enemiesSlain >=
                25
    },

    {
        id:
            "golden-core-genius",

        name:
            "Golden Core Genius",

        unlock:
            () =>
                game.realmIndex >=
                4
    },

    {
        id:
            "secret-realm-seeker",

        name:
            "Secret Realm Seeker",

        unlock:
            () =>
                game.secretClears >=
                5
    },

    {
        id:
            "azure-cloud-champion",

        name:
            "Azure Cloud Champion",

        unlock:
            () =>
                game.tournamentPoints >=
                1500
    },

    {
        id:
            "heaven-defier",

        name:
            "Heaven Defier",

        unlock:
            () =>
                game.tribulationsSurvived >=
                5
    },

    {
        id:
            "dao-reincarnator",

        name:
            "Dao Reincarnator",

        unlock:
            () =>
                game.reincarnations >=
                1
    },

    {
        id:
            "immortal-sovereign",

        name:
            "Immortal Sovereign",

        unlock:
            () =>
                game.realmIndex >=
                11
    }

];



/* ========================================================= */
/* DEFAULT GAME STATE                                        */
/* ========================================================= */

function createDefaultState() {

    return {

        playerName:
            "Jiang Chue",

        activeTitle:
            "wandering-mortal",

        realmIndex:
            0,

        stageIndex:
            0,

        qi:
            0,

        totalQi:
            0,

        spiritStones:
            0,

        pills:
            0,

        healingPills:
            3,

        breakthroughPills:
            0,

        breakthroughBuff:
            0,

        statPoints:
            0,

        attributes: {

            strength:
                10,

            constitution:
                10,

            soul:
                10

        },

        health:
            200,

        spiritualRoot:
            generateSpiritualRoot(),

        activeTechnique:
            "mortal-breathing",

        techniqueMastery: {

            "mortal-breathing":
                0

        },

        skillMastery: {

            "heavy-palm":
                0

        },

        skillCooldowns:
            {},

        totalSkillUses:
            0,

        criticalHits:
            0,

        weapons:
            [],

        equippedWeaponId:
            null,

        artifacts:
            [],

        equippedArtifactId:
            null,

        spiritEggs:
            0,

        pets:
            [],

        activePetId:
            null,

        caveBuildings: {

            "spirit-array":
                1,

            "alchemy-room":
                1,

            "beast-pen":
                1,

            "training-hall":
                1

        },

        herbs: {

            "spirit-grass":
                0,

            "blood-ginseng":
                0,

            "moon-flower":
                0,

            "fire-root":
                0,

            "jade-leaf":
                0,

            "soul-orchid":
                0

        },

        herbsGathered:
            0,

        alchemyExp:
            0,

        alchemySuccess:
            0,

        alchemyFails:
            0,

        sectName:
            "Azure Cloud Sect",

        sectContribution:
            0,

        totalSectContribution:
            0,

        sectDutyBaseline:
            {},

        selectedZone:
            "misty-forest",

        currentEnemy:
            null,

        victories:
            0,

        defeats:
            0,

        enemiesSlain:
            0,

        bossesSlain:
            0,

        expeditions:
            0,

        autoBattle:
            false,

        zoneBossProgress:
            {},

        missionClaims:
            {},

        battleLog:
            [],

        dailyStreak:
            0,

        lastSignIn:
            null,

        secretTokens:
            0,

        secretClears:
            0,

        secretFails:
            0,

        inheritances:
            {},

        storyChapter:
            0,

        npcAffinity: {

            "elder-yun":
                0,

            "lin-yue":
                0,

            "master-chen":
                0,

            "zhao-feng":
                0

        },

        npcRewardsClaimed:
            {},

        tournamentWins:
            0,

        tournamentLosses:
            0,

        tournamentPoints:
            0,

        auctionListings:
            [],

        auctionRefreshAt:
            0,

        auctionHistory:
            [],

        worldBossDate:
            null,

        worldBossIndex:
            0,

        worldBossMaxHealth:
            0,

        worldBossHealth:
            0,

        worldBossDamage:
            0,

        worldBossAttacks:
            0,

        worldBossRewardClaimed:
            false,

        worldBossKills:
            0,

        pendingTribulationRealm:
            null,

        tribulationsSurvived:
            0,

        daoPoints:
            0,

        lifetimeDaoPoints:
            0,

        reincarnations:
            0,

        daoUpgrades: {

            "dao-qi":
                0,

            "dao-combat":
                0,

            "dao-fortune":
                0,

            "dao-vitality":
                0

        },

        achievementsClaimed:
            {},

        settings: {

            sound:
                true,

            music:
                false,

            effects:
                true,

            floatingNumbers:
                true,

            compact:
                false

        },

        log: [

            {
                time:
                    getCurrentTime(),

                message:
                    "The Heavenly Dao System awakened within Jiang Chue.",

                important:
                    true
            }

        ],

        lastPlayed:
            Date.now(),

        createdAt:
            Date.now()

    };

}



/* ========================================================= */
/* STATE                                                     */
/* ========================================================= */

let game =
    createDefaultState();


let autoBattleTimer =
    null;


let selectedNpcId =
    null;


let audioContext =
    null;


let ambientOscillator =
    null;


let ambientGain =
    null;


let pendingOffline = {

    qi:
        0,

    stones:
        0,

    herbs:
        0

};



/* ========================================================= */
/* HELPERS                                                   */
/* ========================================================= */

function byId(id) {

    return document.getElementById(
        id
    );

}


function getCurrentTime() {

    return new Date()
        .toLocaleTimeString(
            [],
            {
                hour:
                    "2-digit",

                minute:
                    "2-digit"
            }
        );

}


function getDateKey() {

    const date =
        new Date();


    return [

        date.getFullYear(),

        String(
            date.getMonth() +
            1
        ).padStart(
            2,
            "0"
        ),

        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        )

    ].join(
        "-"
    );

}


function clamp(
    value,
    min,
    max
) {

    return Math.max(
        min,
        Math.min(
            max,
            value
        )
    );

}


function formatNumber(number) {

    if (
        !Number.isFinite(
            number
        )
    ) {

        return "0";

    }


    if (
        number <
        1000
    ) {

        return Math.floor(
            number
        ).toLocaleString();

    }


    const units = [

        [1e18, "Qi"],

        [1e15, "Qa"],

        [1e12, "T"],

        [1e9, "B"],

        [1e6, "M"],

        [1e3, "K"]

    ];


    for (
        const [
            value,
            suffix
        ]
        of units
    ) {

        if (
            number >=
            value
        ) {

            return (
                (
                    number /
                    value
                ).toFixed(
                    1
                ) +
                suffix
            );

        }

    }


    return Math.floor(
        number
    ).toString();

}



/* ========================================================= */
/* ROOT                                                      */
/* ========================================================= */

function generateSpiritualRoot() {

    const roll =
        Math.random() *
        100;


    if (
        roll <
        1
    ) {

        return "Dao Origin Root";

    }


    if (
        roll <
        5
    ) {

        return "Primordial Chaos Root";

    }


    if (
        roll <
        15
    ) {

        return "Sword Spiritual Root";

    }


    if (
        roll <
        35
    ) {

        return "Heavenly Spiritual Root";

    }


    if (
        roll <
        65
    ) {

        return "Dual Spiritual Root";

    }


    return "Five Element Root";

}



/* ========================================================= */
/* GETTERS                                                   */
/* ========================================================= */

function getRealm() {

    return REALMS[
        game.realmIndex
    ];

}


function getRoot() {

    return (
        SPIRITUAL_ROOTS.find(
            root =>
                root.name ===
                game.spiritualRoot
        ) ||
        SPIRITUAL_ROOTS[0]
    );

}


function getTechnique() {

    return (
        TECHNIQUES.find(
            technique =>
                technique.id ===
                game.activeTechnique
        ) ||
        TECHNIQUES[0]
    );

}


function getTechniqueMastery(
    id =
        game.activeTechnique
) {

    return (
        game.techniqueMastery[
            id
        ] ||
        0
    );

}


function getWeapon() {

    return (
        game.weapons.find(
            weapon =>
                weapon.id ===
                game.equippedWeaponId
        ) ||
        null
    );

}


function getArtifact() {

    return (
        game.artifacts.find(
            artifact =>
                artifact.id ===
                game.equippedArtifactId
        ) ||
        null
    );

}


function getPet() {

    return (
        game.pets.find(
            pet =>
                pet.id ===
                game.activePetId
        ) ||
        null
    );

}


function getZone() {

    return (
        ZONES.find(
            zone =>
                zone.id ===
                game.selectedZone
        ) ||
        ZONES[0]
    );

}


function getActiveTitle() {

    const title =
        PLAYER_TITLES.find(
            item =>
                item.id ===
                game.activeTitle
        );


    if (
        title &&
        title.unlock()
    ) {

        return title;

    }


    return PLAYER_TITLES[0];

}



/* ========================================================= */
/* DAO                                                       */
/* ========================================================= */

function getDaoLevel(id) {

    return (
        game.daoUpgrades[
            id
        ] ||
        0
    );

}


function getDaoQiBonus() {

    return (
        getDaoLevel(
            "dao-qi"
        ) *
        0.10
    );

}


function getDaoCombatBonus() {

    return (
        getDaoLevel(
            "dao-combat"
        ) *
        0.10
    );

}


function getDaoFortuneBonus() {

    return (
        getDaoLevel(
            "dao-fortune"
        ) *
        0.05
    );

}


function getDaoVitalityBonus() {

    return (
        getDaoLevel(
            "dao-vitality"
        ) *
        0.10
    );

}



/* ========================================================= */
/* CAVE                                                      */
/* ========================================================= */

function getCaveLevel(id) {

    return (
        game.caveBuildings[
            id
        ] ||
        1
    );

}


function getTotalCaveLevel() {

    return Object.values(
        game.caveBuildings
    )
        .reduce(
            (
                sum,
                value
            ) =>
                sum +
                value,
            0
        );

}


function getCaveQiBonus() {

    return (
        (
            getCaveLevel(
                "spirit-array"
            ) -
            1
        ) *
        0.08
    );

}


function getCaveHerbBonus() {

    return (
        (
            getCaveLevel(
                "alchemy-room"
            ) -
            1
        ) *
        0.06
    );

}


function getCaveCombatBonus() {

    return (
        (
            getCaveLevel(
                "training-hall"
            ) -
            1
        ) *
        0.06
    );

}


function getCavePetMultiplier() {

    return (
        1 +
        (
            getCaveLevel(
                "beast-pen"
            ) -
            1
        ) *
        0.05
    );

}



/* ========================================================= */
/* PET BONUSES                                               */
/* ========================================================= */

function getPetBonus(type) {

    const pet =
        getPet();


    if (
        !pet
    ) {

        return 0;

    }


    return (
        (
            pet[
                type
            ] ||
            0
        ) *
        (
            1 +
            (
                pet.level -
                1
            ) *
            0.05
        ) *
        getCavePetMultiplier()
    );

}



/* ========================================================= */
/* ARTIFACT BONUS                                            */
/* ========================================================= */

function getArtifactBonus(effect) {

    const artifact =
        getArtifact();


    if (
        !artifact ||
        artifact.effect !==
        effect
    ) {

        return 0;

    }


    return artifact.value;

}



/* ========================================================= */
/* SECT                                                      */
/* ========================================================= */

function getSectRankIndex() {

    let index =
        0;


    SECT_RANKS.forEach(
        (
            rank,
            i
        ) => {

            if (
                game.totalSectContribution >=
                rank.required
            ) {

                index =
                    i;

            }

        }
    );


    return index;

}


function getSectRank() {

    return SECT_RANKS[
        getSectRankIndex()
    ];

}



/* ========================================================= */
/* PLAYER STATS                                              */
/* ========================================================= */

function getMaxHealth() {

    const base =
        100 +
        game.attributes.constitution *
        10 +
        game.realmIndex *
        80 +
        game.stageIndex *
        25;


    return Math.floor(
        base *
        (
            1 +
            getDaoVitalityBonus()
        )
    );

}


function getHealthRegen() {

    let regen =
        getMaxHealth() *
        (
            0.001 +
            (
                getCaveLevel(
                    "training-hall"
                ) -
                1
            ) *
            0.0006
        );


    regen *=
        1 +
        getArtifactBonus(
            "regen"
        );


    return regen;

}


function getQiRequirement() {

    return Math.floor(
        getRealm().qi *
        (
            1 +
            game.stageIndex *
            0.70
        )
    );

}


function getQiPerSecond() {

    let value =
        getRealm()
            .qiMultiplier;


    value *=
        1 +
        game.stageIndex *
        0.25;


    value *=
        1 +
        Math.max(
            0,
            game.attributes.soul -
            10
        ) *
        0.012;


    value *=
        1 +
        getRoot().qi;


    value *=
        1 +
        getTechnique().qiBonus;


    value *=
        1 +
        getTechniqueMastery() *
        0.002;


    value *=
        1 +
        getSectRank().qi;


    value *=
        1 +
        getCaveQiBonus();


    value *=
        1 +
        getPetBonus(
            "qiBonus"
        );


    value *=
        1 +
        getArtifactBonus(
            "qi"
        );


    value *=
        1 +
        getDaoQiBonus();


    if (
        game.inheritances[
            "Violet Moon Essence"
        ]
    ) {

        value *=
            1.08;

    }


    if (
        game.inheritances[
            "Nine Star Dao Mark"
        ]
    ) {

        value *=
            1.18;

    }


    return value;

}


function getCombatPower() {

    let value =
        10 *
        getRealm().combat;


    value *=
        1 +
        game.attributes.strength *
        0.04;


    value *=
        1 +
        game.attributes.constitution *
        0.02;


    value *=
        1 +
        game.attributes.soul *
        0.025;


    value *=
        1 +
        game.stageIndex *
        0.5;


    const weapon =
        getWeapon();


    if (
        weapon
    ) {

        value +=
            weapon.power;

    }


    value *=
        1 +
        getCaveCombatBonus();


    value *=
        1 +
        getPetBonus(
            "combatBonus"
        );


    value *=
        1 +
        getArtifactBonus(
            "combat"
        );


    value *=
        1 +
        getDaoCombatBonus();


    if (
        game.inheritances[
            "Ancient Sword Intent"
        ] &&
        weapon
    ) {

        value *=
            1.15;

    }


    if (
        game.inheritances[
            "Dragon Bloodline"
        ]
    ) {

        value *=
            1.20;

    }


    if (
        game.inheritances[
            "Primordial Chaos Essence"
        ]
    ) {

        value *=
            1.35;

    }


    return Math.floor(
        value
    );

}


function getCriticalChance() {

    let chance =
        0.05;


    chance +=
        game.attributes.soul *
        0.0008;


    chance +=
        getDaoFortuneBonus() *
        0.15;


    if (
        game.inheritances[
            "Ancient Sword Intent"
        ]
    ) {

        chance +=
            0.03;

    }


    return clamp(
        chance,
        0.05,
        0.35
    );

}


function getCriticalMultiplier() {

    return (
        1.75 +
        game.attributes.strength *
        0.002
    );

}


function getBreakthroughChance() {

    let chance =
        100 -
        game.realmIndex *
        4 -
        game.stageIndex *
        6;


    chance +=
        getRoot()
            .breakthrough;


    chance +=
        Math.max(
            0,
            game.attributes.constitution -
            10
        ) *
        0.3;


    chance +=
        game.breakthroughBuff;


    return clamp(
        chance,
        35,
        100
    );

}



/* ========================================================= */
/* SOUND                                                     */
/* ========================================================= */

function ensureAudioContext() {

    if (
        !audioContext
    ) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }

}


function playTone(
    frequency,
    duration =
        0.08,
    volume =
        0.03,
    type =
        "sine"
) {

    if (
        !game.settings.sound
    ) {

        return;

    }


    try {

        ensureAudioContext();


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.type =
            type;


        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            volume,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime +
            duration
        );


        oscillator.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime +
            duration
        );

    } catch (
        error
    ) {

        console.warn(
            "Sound unavailable:",
            error
        );

    }

}


function playClickSound() {

    playTone(
        420,
        0.04,
        0.015
    );

}


function playAttackSound() {

    playTone(
        180,
        0.06,
        0.035,
        "square"
    );

}


function playCritSound() {

    playTone(
        820,
        0.12,
        0.045,
        "triangle"
    );

}


function playRewardSound() {

    playTone(
        640,
        0.08,
        0.03
    );


    setTimeout(
        () =>
            playTone(
                850,
                0.1,
                0.028
            ),
        90
    );

}


function playBreakthroughSound() {

    playTone(
        260,
        0.22,
        0.04
    );


    setTimeout(
        () =>
            playTone(
                520,
                0.25,
                0.04
            ),
        180
    );


    setTimeout(
        () =>
            playTone(
                780,
                0.35,
                0.045
            ),
        360
    );

}


function startAmbientAudio() {

    if (
        !game.settings.music ||
        ambientOscillator
    ) {

        return;

    }


    try {

        ensureAudioContext();


        ambientOscillator =
            audioContext.createOscillator();


        ambientGain =
            audioContext.createGain();


        ambientOscillator.type =
            "sine";


        ambientOscillator.frequency.value =
            84;


        ambientGain.gain.value =
            0.007;


        ambientOscillator.connect(
            ambientGain
        );


        ambientGain.connect(
            audioContext.destination
        );


        ambientOscillator.start();

    } catch (
        error
    ) {

        console.warn(
            error
        );

    }

}


function stopAmbientAudio() {

    if (
        ambientOscillator
    ) {

        try {

            ambientOscillator.stop();

        } catch (
            error
        ) {

            console.warn(
                error
            );

        }


        ambientOscillator =
            null;


        ambientGain =
            null;

    }

}



/* ========================================================= */
/* EFFECTS                                                   */
/* ========================================================= */

function flashScreen(type) {

    if (
        !game.settings.effects
    ) {

        return;

    }


    const element =
        byId(
            "screenFlash"
        );


    element.className =
        "screen-flash";


    void element.offsetWidth;


    element.classList.add(
        type
    );

}


function shakeScreen() {

    if (
        !game.settings.effects
    ) {

        return;

    }


    document.body.classList.remove(
        "screen-shake"
    );


    void document.body.offsetWidth;


    document.body.classList.add(
        "screen-shake"
    );


    setTimeout(
        () =>
            document.body.classList.remove(
                "screen-shake"
            ),
        400
    );

}


function showFloatingNumber(
    text,
    type =
        "normal",
    x =
        window.innerWidth /
        2,
    y =
        window.innerHeight /
        2
) {

    if (
        !game.settings.floatingNumbers
    ) {

        return;

    }


    const element =
        document.createElement(
            "div"
        );


    element.className =
        `floating-damage ${type}`;


    element.textContent =
        text;


    element.style.left =
        `${x}px`;


    element.style.top =
        `${y}px`;


    byId(
        "damageLayer"
    ).appendChild(
        element
    );


    setTimeout(
        () =>
            element.remove(),
        1050
    );

}


function showEnemyHitEffect() {

    const element =
        byId(
            "enemySymbol"
        );


    if (
        !element
    ) {

        return;

    }


    element.classList.remove(
        "hit"
    );


    void element.offsetWidth;


    element.classList.add(
        "hit"
    );

}



/* ========================================================= */
/* QI                                                        */
/* ========================================================= */

function addQi(amount) {

    if (
        amount <=
        0
    ) {

        return;

    }


    game.qi +=
        amount;


    game.totalQi +=
        amount;

}



/* ========================================================= */
/* MANUAL CULTIVATION                                        */
/* ========================================================= */

function manuallyCultivate(event) {

    const amount =
        getQiPerSecond() *
        2.5;


    addQi(
        amount
    );


    game.techniqueMastery[
        game.activeTechnique
    ] =
        clamp(
            getTechniqueMastery() +
            0.12,
            0,
            100
        );


    showFloatingNumber(
        `+${formatNumber(amount)} Qi`,
        "qi",
        event?.clientX ||
        window.innerWidth /
        2,
        event?.clientY ||
        window.innerHeight /
        2
    );


    playTone(
        380,
        0.06,
        0.02
    );


    byId(
        "systemMessage"
    ).textContent =
        `You circulated ${getTechnique().name} and absorbed ${formatNumber(amount)} Qi.`;


    render();

}



/* ========================================================= */
/* BREAKTHROUGH                                              */
/* ========================================================= */

function attemptBreakthrough() {

    if (
        game.currentEnemy
    ) {

        notify(
            "You cannot breakthrough during combat.",
            "error"
        );


        return;

    }


    const requirement =
        getQiRequirement();


    if (
        game.qi <
        requirement
    ) {

        notify(
            "Your accumulated Qi is insufficient.",
            "error"
        );


        return;

    }


    const success =
        Math.random() *
        100 <=
        getBreakthroughChance();


    if (
        !success
    ) {

        game.qi =
            Math.max(
                0,
                game.qi -
                requirement *
                0.12
            );


        game.health =
            Math.max(
                1,
                game.health -
                getMaxHealth() *
                0.10
            );


        game.breakthroughBuff =
            0;


        flashScreen(
            "red"
        );


        shakeScreen();


        playTone(
            110,
            0.18,
            0.04,
            "sawtooth"
        );


        notify(
            "Breakthrough failed. Your meridians were injured.",
            "error"
        );


        saveGame();


        render();


        return;

    }


    game.qi -=
        requirement;


    game.breakthroughBuff =
        0;


    if (
        game.stageIndex <
        3
    ) {

        game.stageIndex +=
            1;


        game.statPoints +=
            3;


        game.attributes.strength +=
            1;


        game.attributes.constitution +=
            1;


        game.attributes.soul +=
            1;


        game.health =
            getMaxHealth();


        showBreakthroughAnimation(
            getRealm().name,
            STAGES[
                game.stageIndex
            ],
            false
        );


        notify(
            `Breakthrough successful — ${STAGES[game.stageIndex]}.`
        );


        saveGame();


        render();


        return;

    }


    if (
        game.realmIndex >=
        REALMS.length -
        1
    ) {

        return;

    }


    const nextRealm =
        game.realmIndex +
        1;


    if (
        TRIBULATION_REALMS.includes(
            nextRealm
        )
    ) {

        game.pendingTribulationRealm =
            nextRealm;


        openTribulationModal();


        saveGame();


        render();


        return;

    }


    completeRealmBreakthrough(
        nextRealm
    );

}


function completeRealmBreakthrough(
    nextRealm
) {

    game.realmIndex =
        nextRealm;


    game.stageIndex =
        0;


    game.statPoints +=
        8;


    game.attributes.strength +=
        3;


    game.attributes.constitution +=
        3;


    game.attributes.soul +=
        3;


    game.health =
        getMaxHealth();


    game.spiritStones +=
        150 *
        Math.pow(
            2,
            game.realmIndex
        );


    addLog(
        `Jiang Chue entered the ${getRealm().name} Realm.`,
        true
    );


    showBreakthroughAnimation(
        getRealm().name,
        STAGES[
            game.stageIndex
        ],
        false
    );


    notify(
        `Realm breakthrough — ${getRealm().name}!`
    );


    playBreakthroughSound();


    saveGame();


    render();

}



/* ========================================================= */
/* TRIBULATION                                               */
/* ========================================================= */

function getTribulationPower() {

    if (
        game.pendingTribulationRealm ===
        null
    ) {

        return 0;

    }


    const realm =
        REALMS[
            game.pendingTribulationRealm
        ];


    return Math.floor(
        100 *
        realm.combat *
        (
            1 +
            game.pendingTribulationRealm *
            0.18
        )
    );

}


function getTribulationChance() {

    if (
        game.pendingTribulationRealm ===
        null
    ) {

        return 0;

    }


    const power =
        getCombatPower();


    const tribulation =
        getTribulationPower();


    let chance =
        45 +
        (
            power /
            Math.max(
                1,
                tribulation
            )
        ) *
        30;


    chance +=
        game.attributes.constitution *
        0.12;


    if (
        game.breakthroughPills >
        0
    ) {

        chance +=
            2;

    }


    return clamp(
        chance,
        20,
        95
    );

}


function openTribulationModal() {

    const target =
        game.pendingTribulationRealm;


    if (
        target ===
        null
    ) {

        return;

    }


    byId(
        "tribulationNameDisplay"
    ).textContent =
        `${REALMS[target].name} Heavenly Thunder`;


    byId(
        "tribulationPowerDisplay"
    ).textContent =
        formatNumber(
            getTribulationPower()
        );


    byId(
        "tribulationChanceDisplay"
    ).textContent =
        `${getTribulationChance().toFixed(1)}%`;


    byId(
        "tribulationModal"
    ).classList.remove(
        "hidden"
    );

}


function faceTribulation() {

    if (
        game.pendingTribulationRealm ===
        null
    ) {

        return;

    }


    const chance =
        getTribulationChance();


    byId(
        "tribulationModal"
    ).classList.add(
        "hidden"
    );


    flashScreen(
        "purple"
    );


    shakeScreen();


    playTone(
        95,
        0.32,
        0.055,
        "sawtooth"
    );


    const survived =
        Math.random() *
        100 <=
        chance;


    if (
        survived
    ) {

        const realm =
            game.pendingTribulationRealm;


        game.pendingTribulationRealm =
            null;


        game.tribulationsSurvived +=
            1;


        completeRealmBreakthrough(
            realm
        );


        showBreakthroughAnimation(
            getRealm().name,
            "Tribulation Survived",
            true
        );


        notify(
            `⚡ Heavenly Tribulation survived — ${getRealm().name}!`
        );


        checkAchievements();


        return;

    }


    game.health =
        Math.max(
            1,
            getMaxHealth() *
            0.15
        );


    game.pendingTribulationRealm =
        null;


    game.stageIndex =
        3;


    game.qi =
        getQiRequirement() *
        0.20;


    flashScreen(
        "red"
    );


    shakeScreen();


    notify(
        "The Heavenly Tribulation shattered your breakthrough. You survived, but failed to advance.",
        "error"
    );


    addLog(
        "Heavenly thunder descended. Jiang Chue survived but failed the tribulation.",
        true
    );


    saveGame();


    render();

}


function showBreakthroughAnimation(
    realm,
    stage,
    lightning =
        false
) {

    const overlay =
        byId(
            "breakthroughOverlay"
        );


    byId(
        "breakthroughRealmText"
    ).textContent =
        realm;


    byId(
        "breakthroughStageText"
    ).textContent =
        stage;


    byId(
        "breakthroughLabel"
    ).textContent =
        lightning
            ? "HEAVEN DEFIED"
            : "BREAKTHROUGH";


    byId(
        "breakthroughSymbol"
    ).textContent =
        lightning
            ? "天"
            : "破";


    overlay.classList.remove(
        "hidden"
    );


    if (
        lightning
    ) {

        byId(
            "breakthroughLightning"
        ).classList.add(
            "active"
        );

    }


    flashScreen(
        lightning
            ? "purple"
            : "gold"
    );


    playBreakthroughSound();


    setTimeout(
        () => {

            overlay.classList.add(
                "hidden"
            );


            byId(
                "breakthroughLightning"
            ).classList.remove(
                "active"
            );

        },
        2300
    );

}



/* ========================================================= */
/* ATTRIBUTES                                                */
/* ========================================================= */

function upgradeAttribute(stat) {

    if (
        game.statPoints <=
        0
    ) {

        return;

    }


    game.attributes[
        stat
    ] +=
        1;


    game.statPoints -=
        1;


    playClickSound();


    saveGame();


    render();

}



/* ========================================================= */
/* PILLS                                                     */
/* ========================================================= */

function useCultivationPill() {

    if (
        game.pills <=
        0
    ) {

        return;

    }


    game.pills -=
        1;


    const gain =
        Math.max(
            100,
            getQiRequirement() *
            0.35
        );


    addQi(
        gain
    );


    showFloatingNumber(
        `+${formatNumber(gain)} Qi`,
        "qi"
    );


    playRewardSound();


    saveGame();


    render();

}


function useHealingPill() {

    if (
        game.healingPills <=
        0 ||
        game.health >=
        getMaxHealth()
    ) {

        return false;

    }


    game.healingPills -=
        1;


    const before =
        game.health;


    game.health =
        Math.min(
            getMaxHealth(),
            game.health +
            getMaxHealth() *
            0.45
        );


    const healed =
        game.health -
        before;


    showFloatingNumber(
        `+${formatNumber(healed)} HP`,
        "heal"
    );


    playTone(
        560,
        0.1,
        0.025
    );


    saveGame();


    render();


    return true;

}


function useBreakthroughPill() {

    if (
        game.breakthroughPills <=
        0 ||
        game.breakthroughBuff >
        0
    ) {

        return;

    }


    game.breakthroughPills -=
        1;


    game.breakthroughBuff =
        15;


    notify(
        "Foundation stabilized. +15% breakthrough chance."
    );


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* TECHNIQUE                                                 */
/* ========================================================= */

function equipTechnique(id) {

    const technique =
        TECHNIQUES.find(
            item =>
                item.id ===
                id
        );


    if (
        !technique ||
        game.realmIndex <
        technique.unlockRealm
    ) {

        return;

    }


    game.activeTechnique =
        id;


    game.techniqueMastery[
        id
    ] =
        game.techniqueMastery[
            id
        ] ||
        0;


    playClickSound();


    saveGame();


    render();

}



/* ========================================================= */
/* RARITY                                                    */
/* ========================================================= */

function chooseRarity(
    guaranteed =
        null
) {

    if (
        guaranteed
    ) {

        return (
            RARITIES.find(
                rarity =>
                    rarity.name ===
                    guaranteed
            ) ||
            RARITIES[0]
        );

    }


    const fortune =
        getDaoFortuneBonus() +
        getArtifactBonus(
            "fortune"
        );


    const roll =
        Math.random();


    if (
        roll <
        0.005 +
        fortune *
        0.02
    ) {

        return RARITIES[5];

    }


    if (
        roll <
        0.035 +
        fortune *
        0.06
    ) {

        return RARITIES[4];

    }


    if (
        roll <
        0.11 +
        fortune *
        0.08
    ) {

        return RARITIES[3];

    }


    if (
        roll <
        0.28 +
        fortune *
        0.10
    ) {

        return RARITIES[2];

    }


    if (
        roll <
        0.58
    ) {

        return RARITIES[1];

    }


    return RARITIES[0];

}



/* ========================================================= */
/* WEAPONS                                                   */
/* ========================================================= */

function generateWeapon(
    rarityName =
        null
) {

    const rarity =
        chooseRarity(
            rarityName
        );


    const names =
        WEAPON_NAMES[
            rarity.name
        ];


    const weapon = {

        id:
            `${Date.now()}-${Math.random()}`,

        name:
            names[
                Math.floor(
                    Math.random() *
                    names.length
                )
            ],

        rarity:
            rarity.name,

        power:
            Math.floor(
                25 *
                rarity.multiplier *
                Math.pow(
                    game.realmIndex +
                    1,
                    1.8
                )
            )

    };


    announceRareDrop(
        weapon
    );


    return weapon;

}


function equipWeapon(id) {

    if (
        game.weapons.some(
            weapon =>
                weapon.id ===
                id
        )
    ) {

        game.equippedWeaponId =
            id;


        playClickSound();


        saveGame();


        render();

    }

}



/* ========================================================= */
/* ARTIFACTS                                                 */
/* ========================================================= */

function generateArtifact(
    rarityName =
        null
) {

    const rarity =
        chooseRarity(
            rarityName
        );


    const names =
        ARTIFACT_NAMES[
            rarity.name
        ];


    const effect =
        ARTIFACT_EFFECTS[
            Math.floor(
                Math.random() *
                ARTIFACT_EFFECTS.length
            )
        ];


    const artifact = {

        id:
            `${Date.now()}-${Math.random()}`,

        name:
            names[
                Math.floor(
                    Math.random() *
                    names.length
                )
            ],

        rarity:
            rarity.name,

        effect,

        value:
            Math.min(
                1.5,
                0.03 *
                rarity.multiplier
            )

    };


    announceRareDrop(
        artifact
    );


    return artifact;

}


function equipArtifact(id) {

    if (
        game.artifacts.some(
            artifact =>
                artifact.id ===
                id
        )
    ) {

        game.equippedArtifactId =
            id;


        playClickSound();


        saveGame();


        render();

    }

}


function announceRareDrop(item) {

    if (
        item.rarity ===
        "Legendary"
    ) {

        notify(
            `LEGENDARY TREASURE: ${item.name}`,
            "legendary"
        );


        playRewardSound();


        flashScreen(
            "gold"
        );

    }


    if (
        item.rarity ===
        "Mythic"
    ) {

        notify(
            `MYTHIC TREASURE: ${item.name}`,
            "mythic"
        );


        playBreakthroughSound();


        flashScreen(
            "red"
        );

    }

}



/* ========================================================= */
/* PETS                                                      */
/* ========================================================= */

function hatchSpiritEgg() {

    if (
        game.spiritEggs <=
        0
    ) {

        notify(
            "You do not possess a Spirit Beast Egg.",
            "error"
        );


        return;

    }


    game.spiritEggs -=
        1;


    const roll =
        Math.random();


    let index =
        0;


    if (
        roll >
        0.995
    ) {

        index =
            6;

    } else if (
        roll >
        0.97
    ) {

        index =
            5;

    } else if (
        roll >
        0.88
    ) {

        index =
            4;

    } else if (
        roll >
        0.60
    ) {

        index =
            Math.random() <
            0.5
                ? 2
                : 3;

    } else if (
        roll >
        0.30
    ) {

        index =
            1;

    }


    const template =
        PET_TEMPLATES[
            index
        ];


    const pet = {

        id:
            `${Date.now()}-${Math.random()}`,

        ...template,

        level:
            1

    };


    game.pets.push(
        pet
    );


    if (
        !game.activePetId
    ) {

        game.activePetId =
            pet.id;

    }


    notify(
        `${template.rarity} Spirit Pet hatched: ${template.name}!`,
        template.rarity ===
        "Mythic"
            ? "mythic"
            : template.rarity ===
                "Legendary"
                ? "legendary"
                : "success"
    );


    playRewardSound();


    checkAchievements();


    saveGame();


    render();

}


function summonPet(id) {

    game.activePetId =
        id;


    playClickSound();


    saveGame();


    render();

}


function trainPet(id) {

    const pet =
        game.pets.find(
            item =>
                item.id ===
                id
        );


    if (
        !pet
    ) {

        return;

    }


    const cost =
        100 *
        pet.level *
        pet.level;


    if (
        game.spiritStones <
        cost
    ) {

        return;

    }


    game.spiritStones -=
        cost;


    pet.level +=
        1;


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* CAVE                                                      */
/* ========================================================= */

function upgradeCaveBuilding(id) {

    const building =
        CAVE_BUILDINGS.find(
            item =>
                item.id ===
                id
        );


    const level =
        getCaveLevel(
            id
        );


    const cost =
        Math.floor(
            building.cost *
            Math.pow(
                1.85,
                level -
                1
            )
        );


    if (
        game.spiritStones <
        cost
    ) {

        notify(
            "Not enough Spirit Stones.",
            "error"
        );


        return;

    }


    game.spiritStones -=
        cost;


    game.caveBuildings[
        id
    ] +=
        1;


    playRewardSound();


    notify(
        `${building.name} upgraded to Level ${game.caveBuildings[id]}.`
    );


    saveGame();


    render();

}



/* ========================================================= */
/* ADVENTURE                                                 */
/* ========================================================= */

function selectZone(id) {

    if (
        game.autoBattle ||
        game.currentEnemy
    ) {

        return;

    }


    const zone =
        ZONES.find(
            item =>
                item.id ===
                id
        );


    if (
        !zone ||
        game.realmIndex <
        zone.required
    ) {

        return;

    }


    game.selectedZone =
        id;


    playClickSound();


    render();

}


function exploreZone() {

    if (
        game.currentEnemy
    ) {

        return;

    }


    const zone =
        getZone();


    game.expeditions +=
        1;


    const roll =
        Math.random();


    if (
        roll <
        0.55
    ) {

        startBattle(
            zone
        );


        return;

    }


    if (
        roll <
        0.72
    ) {

        gatherHerbs(
            zone
        );


        byId(
            "adventureMessage"
        ).textContent =
            "You discovered medicinal herbs.";

    } else if (
        roll <
        0.82
    ) {

        const stones =
            Math.floor(
                (
                    30 +
                    Math.random() *
                    80
                ) *
                zone.stones
            );


        game.spiritStones +=
            stones;


        byId(
            "adventureMessage"
        ).textContent =
            `You found ${formatNumber(stones)} Spirit Stones.`;

    } else if (
        roll <
        0.88
    ) {

        game.pills +=
            1;


        notify(
            "You discovered a Cultivation Pill."
        );

    } else if (
        roll <
        0.93
    ) {

        game.healingPills +=
            1;


        notify(
            "You discovered a Healing Pill."
        );

    } else if (
        roll <
        0.96
    ) {

        game.weapons.push(
            generateWeapon()
        );

    } else if (
        roll <
        0.98
    ) {

        game.artifacts.push(
            generateArtifact()
        );

    } else if (
        roll <
        0.992
    ) {

        game.spiritEggs +=
            1;


        notify(
            "You discovered a Spirit Beast Egg!"
        );

    } else {

        game.secretTokens +=
            1;


        notify(
            "You discovered a Secret Realm Token!"
        );

    }


    checkAchievements();


    saveGame();


    render();

}


function gatherHerbs(zone) {

    let amount =
        1 +
        Math.floor(
            Math.random() *
            Math.max(
                2,
                zone.herbs
            )
        );


    amount =
        Math.ceil(
            amount *
            (
                1 +
                getCaveHerbBonus() +
                getPetBonus(
                    "herbBonus"
                )
            )
        );


    const available =
        HERBS.slice(
            0,
            Math.min(
                HERBS.length,
                zone.herbs +
                1
            )
        );


    for (
        let i = 0;
        i <
        amount;
        i++
    ) {

        const herb =
            available[
                Math.floor(
                    Math.random() *
                    available.length
                )
            ];


        game.herbs[
            herb.id
        ] +=
            1;


        game.herbsGathered +=
            1;

    }

}



/* ========================================================= */
/* BATTLE                                                    */
/* ========================================================= */

function startBattle(zone) {

    const threat =
        game.zoneBossProgress[
            zone.id
        ] ||
        0;


    const boss =
        Math.random() <
        (
            threat >=
            5
                ? 0.30
                : 0.04
        );


    let power =
        getCombatPower() *
        zone.power *
        (
            0.72 +
            Math.random() *
            0.50
        );


    if (
        boss
    ) {

        power *=
            1.7;

    }


    power =
        Math.max(
            8,
            Math.floor(
                power
            )
        );


    const maxHealth =
        Math.floor(
            120 +
            power *
            (
                boss
                    ? 8
                    : 4.5
            )
        );


    game.currentEnemy = {

        name:
            boss
                ? zone.boss
                : zone.enemies[
                    Math.floor(
                        Math.random() *
                        zone.enemies.length
                    )
                ],

        boss,

        type:
            boss
                ? "Region Boss"
                : "Spirit Beast",

        zoneId:
            zone.id,

        power,

        health:
            maxHealth,

        maxHealth

    };


    game.skillCooldowns =
        {};


    if (
        boss
    ) {

        flashScreen(
            "red"
        );


        shakeScreen();


        notify(
            `⚠ REGION BOSS: ${game.currentEnemy.name}`
        );

    }


    addBattleLog(
        `${game.currentEnemy.name} appeared!`
    );


    render();

}


function calculatePlayerDamage(
    baseMultiplier =
        1
) {

    let damage =
        getCombatPower() *
        baseMultiplier *
        (
            0.85 +
            Math.random() *
            0.25
        );


    const critical =
        Math.random() <
        getCriticalChance();


    if (
        critical
    ) {

        damage *=
            getCriticalMultiplier();


        game.criticalHits +=
            1;

    }


    return {

        damage:
            Math.floor(
                damage
            ),

        critical

    };

}


function basicAttack(
    spiritual =
        false
) {

    if (
        !game.currentEnemy
    ) {

        return;

    }


    let multiplier =
        spiritual
            ? (
                1 +
                game.attributes.soul *
                0.015
            )
            : 1;


    const result =
        calculatePlayerDamage(
            multiplier
        );


    game.currentEnemy.health -=
        result.damage;


    playAttackSound();


    showEnemyHitEffect();


    if (
        result.critical
    ) {

        playCritSound();


        flashScreen(
            "gold"
        );

    }


    const enemyRect =
        byId(
            "enemySymbol"
        ).getBoundingClientRect();


    showFloatingNumber(
        `${result.critical ? "CRIT " : ""}-${formatNumber(result.damage)}`,
        result.critical
            ? "critical"
            : "normal",
        enemyRect.left +
        enemyRect.width /
        2,
        enemyRect.top
    );


    addBattleLog(
        `Jiang Chue dealt ${formatNumber(result.damage)} damage${result.critical ? " CRITICAL!" : "."}`
    );


    if (
        game.currentEnemy.health <=
        0
    ) {

        winBattle();


        return;

    }


    enemyTurn();


    render();

}


function enemyTurn() {

    if (
        !game.currentEnemy
    ) {

        return;

    }


    let damage =
        game.currentEnemy.power *
        (
            0.42 +
            Math.random() *
            0.30
        );


    damage /=
        1 +
        game.attributes.constitution *
        0.018;


    damage =
        Math.max(
            1,
            Math.floor(
                damage
            )
        );


    game.health -=
        damage;


    reduceSkillCooldowns();


    const playerRect =
        byId(
            "battlePlayerSymbol"
        ).getBoundingClientRect();


    showFloatingNumber(
        `-${formatNumber(damage)}`,
        "enemy",
        playerRect.left +
        playerRect.width /
        2,
        playerRect.top
    );


    flashScreen(
        "red"
    );


    addBattleLog(
        `${game.currentEnemy.name} dealt ${formatNumber(damage)} damage.`
    );


    if (
        game.health <=
        0
    ) {

        loseBattle();

    }

}


function winBattle() {

    const enemy =
        game.currentEnemy;


    const zone =
        ZONES.find(
            item =>
                item.id ===
                enemy.zoneId
        );


    game.victories +=
        1;


    game.enemiesSlain +=
        1;


    if (
        enemy.boss
    ) {

        game.bossesSlain +=
            1;


        game.zoneBossProgress[
            zone.id
        ] =
            0;

    } else {

        game.zoneBossProgress[
            zone.id
        ] =
            (
                game.zoneBossProgress[
                    zone.id
                ] ||
                0
            ) +
            1;

    }


    const reward =
        Math.floor(
            (
                25 +
                enemy.power *
                0.45
            ) *
            zone.stones
        );


    game.spiritStones +=
        reward;


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.50
                : 0.03
        )
    ) {

        game.artifacts.push(
            generateArtifact()
        );

    }


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.30
                : 0.01
        )
    ) {

        game.spiritEggs +=
            1;

    }


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.20
                : 0.004
        )
    ) {

        game.secretTokens +=
            1;

    }


    addBattleLog(
        `${enemy.name} was defeated.`
    );


    notify(
        `${enemy.name} defeated! +${formatNumber(reward)} Spirit Stones.`
    );


    playRewardSound();


    game.currentEnemy =
        null;


    checkAchievements();


    saveGame();


    render();

}


function loseBattle() {

    game.defeats +=
        1;


    game.health =
        Math.max(
            1,
            getMaxHealth() *
            0.20
        );


    game.currentEnemy =
        null;


    game.autoBattle =
        false;


    stopAutoBattle();


    flashScreen(
        "red"
    );


    shakeScreen();


    notify(
        "You were defeated. Auto-Battle stopped.",
        "error"
    );


    saveGame();


    render();

}


function fleeBattle() {

    game.currentEnemy =
        null;


    addBattleLog(
        "Jiang Chue withdrew from battle."
    );


    render();

}



/* ========================================================= */
/* MARTIAL SKILLS                                            */
/* ========================================================= */

function isSkillUnlocked(skill) {

    return (
        game.realmIndex >=
        skill.realm
    );

}


function getSkillCooldown(id) {

    return (
        game.skillCooldowns[
            id
        ] ||
        0
    );

}


function reduceSkillCooldowns() {

    Object.keys(
        game.skillCooldowns
    )
        .forEach(
            id => {

                game.skillCooldowns[
                    id
                ] =
                    Math.max(
                        0,
                        game.skillCooldowns[
                            id
                        ] -
                        1
                    );

            }
        );

}


function useMartialSkill(id) {

    if (
        !game.currentEnemy
    ) {

        return;

    }


    const skill =
        MARTIAL_SKILLS.find(
            item =>
                item.id ===
                id
        );


    if (
        !skill ||
        !isSkillUnlocked(
            skill
        ) ||
        getSkillCooldown(
            id
        ) >
        0
    ) {

        return;

    }


    let multiplier =
        skill.damage;


    if (
        skill.type ===
        "Strength"
    ) {

        multiplier *=
            1 +
            game.attributes.strength *
            0.015;

    }


    if (
        skill.type ===
        "Soul"
    ) {

        multiplier *=
            1 +
            game.attributes.soul *
            0.018;

    }


    if (
        skill.type ===
        "Sword" &&
        getWeapon()
    ) {

        multiplier *=
            1.2;

    }


    const mastery =
        game.skillMastery[
            id
        ] ||
        0;


    multiplier *=
        1 +
        mastery *
        0.004;


    const result =
        calculatePlayerDamage(
            multiplier
        );


    game.currentEnemy.health -=
        result.damage;


    game.skillMastery[
        id
    ] =
        clamp(
            mastery +
            0.35,
            0,
            100
        );


    game.skillCooldowns[
        id
    ] =
        skill.cooldown;


    game.totalSkillUses +=
        1;


    playAttackSound();


    showEnemyHitEffect();


    if (
        result.critical
    ) {

        playCritSound();


        flashScreen(
            "gold"
        );

    }


    const rect =
        byId(
            "enemySymbol"
        ).getBoundingClientRect();


    showFloatingNumber(
        `${result.critical ? "CRIT " : ""}-${formatNumber(result.damage)}`,
        result.critical
            ? "critical"
            : "normal",
        rect.left +
        rect.width /
        2,
        rect.top
    );


    addBattleLog(
        `${skill.name} dealt ${formatNumber(result.damage)} damage${result.critical ? " CRITICAL!" : "."}`
    );


    if (
        game.currentEnemy.health <=
        0
    ) {

        winBattle();


        return;

    }


    enemyTurn();


    render();

}



/* ========================================================= */
/* AUTO BATTLE                                               */
/* ========================================================= */

function toggleAutoBattle() {

    game.autoBattle =
        !game.autoBattle;


    if (
        game.autoBattle
    ) {

        startAutoBattle();

    } else {

        stopAutoBattle();

    }


    playClickSound();


    saveGame();


    render();

}


function startAutoBattle() {

    stopAutoBattle();


    autoBattleTimer =
        setInterval(
            autoBattleStep,
            AUTO_BATTLE_INTERVAL
        );

}


function stopAutoBattle() {

    if (
        autoBattleTimer
    ) {

        clearInterval(
            autoBattleTimer
        );


        autoBattleTimer =
            null;

    }

}


function autoBattleStep() {

    if (
        !game.autoBattle
    ) {

        return;

    }


    if (
        game.health <
        getMaxHealth() *
        0.35
    ) {

        if (
            game.healingPills >
            0
        ) {

            useHealingPill();

        } else {

            game.autoBattle =
                false;


            stopAutoBattle();


            notify(
                "Auto-Battle stopped due to low health.",
                "error"
            );


            return;

        }

    }


    if (
        !game.currentEnemy
    ) {

        exploreZone();


        return;

    }


    const skill =
        MARTIAL_SKILLS
            .filter(
                item =>
                    isSkillUnlocked(
                        item
                    ) &&
                    getSkillCooldown(
                        item.id
                    ) <=
                    0
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b.damage -
                    a.damage
            )[0];


    if (
        skill
    ) {

        useMartialSkill(
            skill.id
        );

    } else {

        basicAttack();

    }

}



/* ========================================================= */
/* STORY                                                     */
/* ========================================================= */

function advanceStory() {

    if (
        game.storyChapter >=
        STORY_CHAPTERS.length
    ) {

        return;

    }


    const chapter =
        STORY_CHAPTERS[
            game.storyChapter
        ];


    if (
        !chapter.check()
    ) {

        notify(
            `Requirement not met: ${chapter.requirement}`,
            "error"
        );


        return;

    }


    chapter.reward();


    game.storyChapter +=
        1;


    notify(
        "Story chapter completed!"
    );


    playRewardSound();


    addWorldRumor(
        `${chapter.title} was completed by Jiang Chue.`
    );


    checkAchievements();


    saveGame();


    render();

}



/* ========================================================= */
/* NPCS                                                      */
/* ========================================================= */

function openNpc(id) {

    const npc =
        NPCS.find(
            item =>
                item.id ===
                id
        );


    if (
        !npc
    ) {

        return;

    }


    selectedNpcId =
        id;


    byId(
        "npcModalSymbol"
    ).textContent =
        npc.symbol;


    byId(
        "npcModalName"
    ).textContent =
        npc.name;


    byId(
        "npcModalTitle"
    ).textContent =
        npc.title;


    updateNpcModal();


    byId(
        "npcModal"
    ).classList.remove(
        "hidden"
    );

}


function updateNpcModal() {

    const npc =
        NPCS.find(
            item =>
                item.id ===
                selectedNpcId
        );


    if (
        !npc
    ) {

        return;

    }


    const affinity =
        game.npcAffinity[
            npc.id
        ] ||
        0;


    const dialogueIndex =
        Math.min(
            npc.dialogues.length -
            1,
            Math.floor(
                affinity /
                25
            )
        );


    byId(
        "npcDialogueText"
    ).textContent =
        npc.dialogues[
            dialogueIndex
        ];


    byId(
        "npcAffinityText"
    ).textContent =
        `${affinity} / 100`;


    byId(
        "npcAffinityBar"
    ).style.width =
        `${clamp(
            affinity,
            0,
            100
        )}%`;


    byId(
        "giftNpcButton"
    ).disabled =
        game.spiritStones <
        100 ||
        affinity >=
        100;

}


function talkNpc() {

    if (
        !selectedNpcId
    ) {

        return;

    }


    const npc =
        NPCS.find(
            item =>
                item.id ===
                selectedNpcId
        );


    const current =
        game.npcAffinity[
            npc.id
        ] ||
        0;


    if (
        current >=
        100
    ) {

        return;

    }


    const increase =
        2 +
        Math.floor(
            Math.random() *
            4
        );


    game.npcAffinity[
        npc.id
    ] =
        clamp(
            current +
            increase,
            0,
            100
        );


    checkNpcReward(
        npc
    );


    playClickSound();


    updateNpcModal();


    saveGame();


    renderWorld();

}


function giftNpc() {

    if (
        !selectedNpcId ||
        game.spiritStones <
        100
    ) {

        return;

    }


    const npc =
        NPCS.find(
            item =>
                item.id ===
                selectedNpcId
        );


    game.spiritStones -=
        100;


    game.npcAffinity[
        npc.id
    ] =
        clamp(
            (
                game.npcAffinity[
                    npc.id
                ] ||
                0
            ) +
            8,
            0,
            100
        );


    checkNpcReward(
        npc
    );


    playRewardSound();


    updateNpcModal();


    saveGame();


    render();

}


function checkNpcReward(npc) {

    if (
        (
            game.npcAffinity[
                npc.id
            ] ||
            0
        ) >=
            npc.rewardAffinity &&
        !game.npcRewardsClaimed[
            npc.id
        ]
    ) {

        npc.reward();


        game.npcRewardsClaimed[
            npc.id
        ] =
            true;


        notify(
            `${npc.name} gave you a special reward.`
        );


        playRewardSound();

    }

}



/* ========================================================= */
/* SECRET REALMS                                             */
/* ========================================================= */

function enterSecretRealm(id) {

    const realm =
        SECRET_REALMS.find(
            item =>
                item.id ===
                id
        );


    if (
        !realm
    ) {

        return;

    }


    if (
        game.realmIndex <
        realm.required
    ) {

        notify(
            "Your cultivation realm is too low.",
            "error"
        );


        return;

    }


    if (
        game.secretTokens <
        realm.tokenCost
    ) {

        notify(
            "Not enough Secret Realm Tokens.",
            "error"
        );


        return;

    }


    game.secretTokens -=
        realm.tokenCost;


    const playerPower =
        getCombatPower();


    const requiredPower =
        600 *
        realm.difficulty *
        Math.pow(
            realm.required +
            1,
            2
        );


    let chance =
        35 +
        (
            playerPower /
            requiredPower
        ) *
        40;


    chance =
        clamp(
            chance,
            15,
            95
        );


    flashScreen(
        "purple"
    );


    if (
        Math.random() *
        100 <=
        chance
    ) {

        game.secretClears +=
            1;


        const stones =
            Math.floor(
                1000 *
                realm.rewardMultiplier *
                (
                    game.realmIndex +
                    1
                )
            );


        game.spiritStones +=
            stones;


        game.statPoints +=
            Math.max(
                1,
                realm.rewardMultiplier
            );


        if (
            Math.random() <
            0.45
        ) {

            game.artifacts.push(
                generateArtifact(
                    realm.required >=
                    6
                        ? "Epic"
                        : "Rare"
                )
            );

        }


        if (
            !game.inheritances[
                realm.inheritance
            ] &&
            Math.random() <
            0.35
        ) {

            game.inheritances[
                realm.inheritance
            ] =
                true;


            notify(
                `Ancient Inheritance obtained: ${realm.inheritance}!`,
                "achievement"
            );


            playBreakthroughSound();

        } else {

            notify(
                `${realm.name} cleared! +${formatNumber(stones)} Spirit Stones.`
            );


            playRewardSound();

        }

    } else {

        game.secretFails +=
            1;


        game.health =
            Math.max(
                1,
                getMaxHealth() *
                0.35
            );


        shakeScreen();


        notify(
            `${realm.name} expedition failed.`,
            "error"
        );

    }


    checkAchievements();


    saveGame();


    render();

}



/* ========================================================= */
/* TOURNAMENT                                                */
/* ========================================================= */

function getTournamentRank() {

    let index =
        0;


    TOURNAMENT_RANKS.forEach(
        (
            rank,
            i
        ) => {

            if (
                game.tournamentPoints >=
                rank.required
            ) {

                index =
                    i;

            }

        }
    );


    return TOURNAMENT_RANKS[
        index
    ];

}


function generateTournamentOpponents() {

    const player =
        getCombatPower();


    return [

        {
            name:
                randomTournamentName(),

            power:
                Math.floor(
                    player *
                    (
                        0.70 +
                        Math.random() *
                        0.18
                    )
                ),

            reward:
                40
        },

        {
            name:
                randomTournamentName(),

            power:
                Math.floor(
                    player *
                    (
                        0.92 +
                        Math.random() *
                        0.20
                    )
                ),

            reward:
                80
        },

        {
            name:
                randomTournamentName(),

            power:
                Math.floor(
                    player *
                    (
                        1.12 +
                        Math.random() *
                        0.30
                    )
                ),

            reward:
                140
        }

    ];

}


function randomTournamentName() {

    return TOURNAMENT_NAMES[
        Math.floor(
            Math.random() *
            TOURNAMENT_NAMES.length
        )
    ];

}


function fightTournamentOpponent(
    power,
    reward,
    name
) {

    const playerPower =
        getCombatPower() *
        (
            0.85 +
            Math.random() *
            0.30
        );


    const enemyPower =
        power *
        (
            0.85 +
            Math.random() *
            0.30
        );


    if (
        playerPower >=
        enemyPower
    ) {

        game.tournamentWins +=
            1;


        game.tournamentPoints +=
            reward;


        game.sectContribution +=
            reward;


        game.totalSectContribution +=
            reward;


        game.spiritStones +=
            reward *
            5;


        flashScreen(
            "gold"
        );


        playRewardSound();


        notify(
            `You defeated ${name}! +${reward} Ranking Points.`
        );

    } else {

        game.tournamentLosses +=
            1;


        game.tournamentPoints =
            Math.max(
                0,
                game.tournamentPoints -
                Math.floor(
                    reward *
                    0.25
                )
            );


        flashScreen(
            "red"
        );


        notify(
            `${name} defeated you in the arena.`,
            "error"
        );

    }


    checkAchievements();


    saveGame();


    render();

}



/* ========================================================= */
/* AUCTION                                                   */
/* ========================================================= */

function initializeAuction() {

    if (
        !Array.isArray(
            game.auctionListings
        ) ||
        game.auctionListings.length ===
            0 ||
        Date.now() >=
            game.auctionRefreshAt
    ) {

        refreshAuctionListings(
            false
        );

    }

}


function refreshAuctionListings(
    manual =
        true
) {

    if (
        manual
    ) {

        const cost =
            250;


        if (
            game.spiritStones <
            cost
        ) {

            notify(
                "You need 250 Spirit Stones to refresh the auction.",
                "error"
            );


            return;

        }


        game.spiritStones -=
            cost;

    }


    game.auctionListings =
        [];


    for (
        let i = 0;
        i <
        6;
        i++
    ) {

        const typeRoll =
            Math.random();


        let item;


        if (
            typeRoll <
            0.45
        ) {

            item =
                generateWeapon();

        } else if (
            typeRoll <
            0.85
        ) {

            item =
                generateArtifact();

        } else {

            item = {

                id:
                    `${Date.now()}-${Math.random()}`,

                name:
                    "Ancient Secret Realm Token",

                rarity:
                    "Rare",

                type:
                    "token"

            };

        }


        let price;


        if (
            item.type ===
            "token"
        ) {

            price =
                1800;

        } else {

            const rarity =
                RARITIES.find(
                    rarity =>
                        rarity.name ===
                        item.rarity
                );


            price =
                Math.floor(
                    550 *
                    rarity.multiplier *
                    Math.pow(
                        game.realmIndex +
                        1,
                        1.35
                    )
                );

        }


        game.auctionListings.push({

            auctionId:
                `${Date.now()}-${i}-${Math.random()}`,

            item,

            price

        });

    }


    game.auctionRefreshAt =
        Date.now() +
        AUCTION_REFRESH_TIME;


    saveGame();


    render();

}


function buyAuctionListing(id) {

    const index =
        game.auctionListings.findIndex(
            listing =>
                listing.auctionId ===
                id
        );


    if (
        index <
        0
    ) {

        return;

    }


    const listing =
        game.auctionListings[
            index
        ];


    if (
        game.spiritStones <
        listing.price
    ) {

        notify(
            "You cannot afford this treasure.",
            "error"
        );


        return;

    }


    game.spiritStones -=
        listing.price;


    if (
        listing.item.type ===
        "token"
    ) {

        game.secretTokens +=
            1;

    } else if (
        listing.item.effect
    ) {

        game.artifacts.push(
            listing.item
        );

    } else {

        game.weapons.push(
            listing.item
        );

    }


    game.auctionHistory.unshift({

        time:
            getCurrentTime(),

        message:
            `Purchased ${listing.item.name} for ${formatNumber(listing.price)} Spirit Stones.`

    });


    game.auctionHistory =
        game.auctionHistory.slice(
            0,
            30
        );


    game.auctionListings.splice(
        index,
        1
    );


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* WORLD BOSS                                                */
/* ========================================================= */

function initializeWorldBoss() {

    const date =
        getDateKey();


    if (
        game.worldBossDate ===
            date &&
        game.worldBossMaxHealth >
            0
    ) {

        return;

    }


    const seed =
        new Date()
            .getDate() %
        WORLD_BOSSES.length;


    const boss =
        WORLD_BOSSES[
            seed
        ];


    const baseHealth =
        Math.max(
            100000,
            getCombatPower() *
            75
        );


    game.worldBossDate =
        date;


    game.worldBossIndex =
        seed;


    game.worldBossMaxHealth =
        Math.floor(
            baseHealth
        );


    game.worldBossHealth =
        game.worldBossMaxHealth;


    game.worldBossDamage =
        0;


    game.worldBossAttacks =
        0;


    game.worldBossRewardClaimed =
        false;


    addWorldRumor(
        `${boss.name} has appeared and threatens the cultivation world.`
    );


    saveGame();

}


function attackWorldBoss() {

    initializeWorldBoss();


    if (
        game.worldBossHealth <=
        0
    ) {

        notify(
            "The World Boss has already been defeated today."
        );


        return;

    }


    const result =
        calculatePlayerDamage(
            2 +
            Math.random() *
            1.5
        );


    const damage =
        result.damage;


    game.worldBossDamage +=
        damage;


    game.worldBossAttacks +=
        1;


    game.worldBossHealth =
        Math.max(
            0,
            game.worldBossHealth -
            damage
        );


    const rect =
        byId(
            "worldBossSymbol"
        ).getBoundingClientRect();


    showFloatingNumber(
        `${result.critical ? "CRIT " : ""}-${formatNumber(damage)}`,
        result.critical
            ? "critical"
            : "normal",
        rect.left +
        rect.width /
        2,
        rect.top
    );


    if (
        result.critical
    ) {

        playCritSound();

    } else {

        playAttackSound();

    }


    flashScreen(
        "purple"
    );


    if (
        game.worldBossHealth <=
        0
    ) {

        game.worldBossKills +=
            1;


        game.secretTokens +=
            2;


        notify(
            "The World Boss has fallen!",
            "achievement"
        );


        playBreakthroughSound();


        addWorldRumor(
            `Jiang Chue helped defeat ${WORLD_BOSSES[game.worldBossIndex].name}.`
        );

    }


    checkAchievements();


    saveGame();


    render();

}


function claimWorldBossReward() {

    if (
        game.worldBossRewardClaimed ||
        game.worldBossDamage <=
        0
    ) {

        return;

    }


    const ratio =
        game.worldBossDamage /
        game.worldBossMaxHealth;


    const stones =
        Math.floor(
            500 +
            ratio *
            25000
        );


    game.spiritStones +=
        stones;


    game.pills +=
        Math.max(
            1,
            Math.floor(
                ratio *
                10
            )
        );


    if (
        ratio >=
        0.10
    ) {

        game.artifacts.push(
            generateArtifact(
                "Rare"
            )
        );

    }


    if (
        ratio >=
        0.25
    ) {

        game.secretTokens +=
            1;

    }


    game.worldBossRewardClaimed =
        true;


    playRewardSound();


    notify(
        `World Boss reward claimed: ${formatNumber(stones)} Spirit Stones.`
    );


    saveGame();


    render();

}



/* ========================================================= */
/* ALCHEMY                                                   */
/* ========================================================= */

function getAlchemyLevelIndex() {

    let index =
        0;


    ALCHEMY_LEVELS.forEach(
        (
            level,
            i
        ) => {

            if (
                game.alchemyExp >=
                level.required
            ) {

                index =
                    i;

            }

        }
    );


    return index;

}


function hasMaterials(recipe) {

    return Object.entries(
        recipe.materials
    )
        .every(
            (
                [
                    id,
                    amount
                ]
            ) =>
                (
                    game.herbs[
                        id
                    ] ||
                    0
                ) >=
                amount
        );

}


function countCraftableRecipes() {

    return ALCHEMY_RECIPES.filter(
        recipe =>
            getAlchemyLevelIndex() >=
            recipe.unlock &&
            hasMaterials(
                recipe
            )
    ).length;

}


function refineRecipe(id) {

    const recipe =
        ALCHEMY_RECIPES.find(
            item =>
                item.id ===
                id
        );


    if (
        !recipe ||
        getAlchemyLevelIndex() <
        recipe.unlock ||
        !hasMaterials(
            recipe
        )
    ) {

        return;

    }


    Object.entries(
        recipe.materials
    )
        .forEach(
            (
                [
                    herb,
                    amount
                ]
            ) => {

                game.herbs[
                    herb
                ] -=
                    amount;

            }
        );


    const bonus =
        (
            getCaveLevel(
                "alchemy-room"
            ) -
            1
        ) *
        2 +
        game.attributes.soul *
        0.1;


    const success =
        Math.random() *
        100 <=
        recipe.chance +
        bonus;


    if (
        success
    ) {

        game.alchemySuccess +=
            1;


        game.alchemyExp +=
            15;


        if (
            recipe.reward ===
            "pill"
        ) {

            game.pills +=
                1;

        }


        if (
            recipe.reward ===
            "healing"
        ) {

            game.healingPills +=
                1;

        }


        if (
            recipe.reward ===
            "stat"
        ) {

            game.statPoints +=
                1;

        }


        if (
            recipe.reward ===
            "breakthrough"
        ) {

            game.breakthroughPills +=
                1;

        }


        flashScreen(
            "gold"
        );


        playRewardSound();


        notify(
            `${recipe.name} refinement succeeded.`
        );

    } else {

        game.alchemyFails +=
            1;


        game.alchemyExp +=
            5;


        flashScreen(
            "red"
        );


        playTone(
            120,
            0.12,
            0.025
        );


        notify(
            `${recipe.name} refinement failed.`,
            "error"
        );

    }


    checkAchievements();


    saveGame();


    render();

}



/* ========================================================= */
/* HERBS                                                     */
/* ========================================================= */

function grantRandomHerbs(amount) {

    for (
        let i = 0;
        i <
        amount;
        i++
    ) {

        const herb =
            HERBS[
                Math.floor(
                    Math.random() *
                    HERBS.length
                )
            ];


        game.herbs[
            herb.id
        ] +=
            1;


        game.herbsGathered +=
            1;

    }

}



/* ========================================================= */
/* SECT DUTIES                                               */
/* ========================================================= */

function getDutyValue(type) {

    if (
        type ===
        "expeditions"
    ) {

        return game.expeditions;

    }


    if (
        type ===
        "kills"
    ) {

        return game.enemiesSlain;

    }


    if (
        type ===
        "herbs"
    ) {

        return game.herbsGathered;

    }


    if (
        type ===
        "bosses"
    ) {

        return game.bossesSlain;

    }


    return 0;

}


function getDutyProgress(duty) {

    return Math.max(
        0,
        getDutyValue(
            duty.type
        ) -
        (
            game.sectDutyBaseline[
                duty.id
            ] ||
            0
        )
    );

}


function claimSectDuty(id) {

    const duty =
        SECT_DUTIES.find(
            item =>
                item.id ===
                id
        );


    if (
        !duty ||
        getDutyProgress(
            duty
        ) <
        duty.target
    ) {

        return;

    }


    game.sectContribution +=
        duty.reward;


    game.totalSectContribution +=
        duty.reward;


    game.sectDutyBaseline[
        id
    ] =
        getDutyValue(
            duty.type
        );


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* SECT TREASURY                                             */
/* ========================================================= */

function buySectItem(id) {

    const item =
        SECT_TREASURY.find(
            entry =>
                entry.id ===
                id
        );


    if (
        !item
    ) {

        return;

    }


    const cost =
        Math.ceil(
            item.cost *
            (
                1 -
                getSectRank().discount
            )
        );


    if (
        game.sectContribution <
        cost
    ) {

        return;

    }


    game.sectContribution -=
        cost;


    if (
        id ===
        "pill"
    ) {

        game.pills +=
            1;

    }


    if (
        id ===
        "heal"
    ) {

        game.healingPills +=
            1;

    }


    if (
        id ===
        "herbs"
    ) {

        grantRandomHerbs(
            6
        );

    }


    if (
        id ===
        "stats"
    ) {

        game.statPoints +=
            1;

    }


    if (
        id ===
        "weapon"
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }


    if (
        id ===
        "token"
    ) {

        game.secretTokens +=
            1;

    }


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* MISSIONS                                                  */
/* ========================================================= */

function getMissionProgress(mission) {

    return getDutyValue(
        mission.type
    );

}


function claimMission(id) {

    const mission =
        MISSIONS.find(
            item =>
                item.id ===
                id
        );


    if (
        !mission ||
        game.missionClaims[
            id
        ] ||
        getMissionProgress(
            mission
        ) <
        mission.target
    ) {

        return;

    }


    const reward =
        mission.reward;


    game.spiritStones +=
        reward.stones ||
        0;


    game.pills +=
        reward.pills ||
        0;


    game.healingPills +=
        reward.healing ||
        0;


    game.statPoints +=
        reward.stats ||
        0;


    game.spiritEggs +=
        reward.egg ||
        0;


    game.secretTokens +=
        reward.token ||
        0;


    if (
        reward.weapon
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }


    game.missionClaims[
        id
    ] =
        true;


    playRewardSound();


    notify(
        `${mission.name} reward claimed.`
    );


    saveGame();


    render();

}



/* ========================================================= */
/* DAILY                                                     */
/* ========================================================= */

function canSignInToday() {

    return (
        game.lastSignIn !==
        getDateKey()
    );

}


function claimDailyReward() {

    if (
        !canSignInToday()
    ) {

        return;

    }


    game.dailyStreak +=
        1;


    game.lastSignIn =
        getDateKey();


    const reward =
        DAILY_REWARDS[
            (
                game.dailyStreak -
                1
            ) %
            DAILY_REWARDS.length
        ];


    game.spiritStones +=
        reward.stones ||
        0;


    game.pills +=
        reward.pills ||
        0;


    game.healingPills +=
        reward.healing ||
        0;


    game.spiritEggs +=
        reward.eggs ||
        0;


    game.secretTokens +=
        reward.tokens ||
        0;


    if (
        reward.herbs
    ) {

        grantRandomHerbs(
            reward.herbs
        );

    }


    if (
        reward.artifact
    ) {

        game.artifacts.push(
            generateArtifact()
        );

    }


    flashScreen(
        "gold"
    );


    playRewardSound();


    notify(
        `Day ${game.dailyStreak} reward claimed.`
    );


    saveGame();


    render();

}



/* ========================================================= */
/* ACHIEVEMENTS                                              */
/* ========================================================= */

function isAchievementComplete(achievement) {

    return (
        achievement.progress() >=
        achievement.target
    );

}


function isAchievementClaimed(id) {

    return Boolean(
        game.achievementsClaimed[
            id
        ]
    );

}


function getUnclaimedAchievementCount() {

    return ACHIEVEMENTS.filter(
        achievement =>
            isAchievementComplete(
                achievement
            ) &&
            !isAchievementClaimed(
                achievement.id
            )
    ).length;

}


function getAchievementPoints() {

    return ACHIEVEMENTS
        .filter(
            achievement =>
                isAchievementClaimed(
                    achievement.id
                )
        )
        .reduce(
            (
                total,
                achievement
            ) =>
                total +
                achievement.points,
            0
        );

}


function claimAchievement(id) {

    const achievement =
        ACHIEVEMENTS.find(
            item =>
                item.id ===
                id
        );


    if (
        !achievement ||
        !isAchievementComplete(
            achievement
        ) ||
        isAchievementClaimed(
            id
        )
    ) {

        return;

    }


    game.achievementsClaimed[
        id
    ] =
        true;


    game.spiritStones +=
        achievement.rewardStones;


    flashScreen(
        "gold"
    );


    playRewardSound();


    notify(
        `Achievement completed: ${achievement.name}`,
        "achievement"
    );


    saveGame();


    render();

}


function checkAchievements() {

    const count =
        getUnclaimedAchievementCount();


    if (
        count >
        0
    ) {

        byId(
            "achievementBadge"
        ).classList.remove(
            "hidden"
        );

    }

}



/* ========================================================= */
/* TITLES                                                    */
/* ========================================================= */

function equipTitle(id) {

    const title =
        PLAYER_TITLES.find(
            item =>
                item.id ===
                id
        );


    if (
        !title ||
        !title.unlock()
    ) {

        return;

    }


    game.activeTitle =
        id;


    playClickSound();


    saveGame();


    render();

}



/* ========================================================= */
/* ASCENSION                                                 */
/* ========================================================= */

function getAscensionGain() {

    if (
        game.realmIndex <
        11
    ) {

        return 0;

    }


    return Math.max(
        1,
        Math.floor(
            5 +
            game.totalQi /
            1000000 +
            game.tribulationsSurvived *
            2 +
            game.secretClears *
            0.5 +
            game.worldBossKills *
            2 +
            game.reincarnations *
            3
        )
    );

}


function ascend() {

    const gain =
        getAscensionGain();


    if (
        gain <=
        0
    ) {

        notify(
            "Reach Immortal Realm before ascending.",
            "error"
        );


        return;

    }


    const confirmed =
        window.confirm(
            `Reincarnate for ${gain} Dao Points?\n\nMost cultivation progress will reset. Dao upgrades and reincarnation history remain permanent.`
        );


    if (
        !confirmed
    ) {

        return;

    }


    const permanent = {

        daoPoints:
            game.daoPoints +
            gain,

        lifetimeDaoPoints:
            game.lifetimeDaoPoints +
            gain,

        reincarnations:
            game.reincarnations +
            1,

        daoUpgrades: {
            ...game.daoUpgrades
        },

        achievementsClaimed: {
            ...game.achievementsClaimed
        },

        settings: {
            ...game.settings
        }

    };


    game =
        createDefaultState();


    game.daoPoints =
        permanent.daoPoints;


    game.lifetimeDaoPoints =
        permanent.lifetimeDaoPoints;


    game.reincarnations =
        permanent.reincarnations;


    game.daoUpgrades =
        permanent.daoUpgrades;


    game.achievementsClaimed =
        permanent.achievementsClaimed;


    game.settings =
        permanent.settings;


    game.health =
        getMaxHealth();


    flashScreen(
        "purple"
    );


    showBreakthroughAnimation(
        "REINCARNATION",
        `Life ${game.reincarnations + 1}`,
        true
    );


    notify(
        `Reincarnation complete. +${gain} Dao Points.`,
        "achievement"
    );


    checkAchievements();


    saveGame();


    openPage(
        "cultivationPage"
    );

}


function upgradeDao(id) {

    const upgrade =
        DAO_UPGRADES.find(
            item =>
                item.id ===
                id
        );


    const level =
        getDaoLevel(
            id
        );


    const cost =
        Math.floor(
            upgrade.cost *
            Math.pow(
                1.75,
                level
            )
        );


    if (
        game.daoPoints <
        cost
    ) {

        return;

    }


    game.daoPoints -=
        cost;


    game.daoUpgrades[
        id
    ] +=
        1;


    playRewardSound();


    saveGame();


    render();

}



/* ========================================================= */
/* GAME TICK                                                 */
/* ========================================================= */

function gameTick() {

    addQi(
        getQiPerSecond()
    );


    game.techniqueMastery[
        game.activeTechnique
    ] =
        clamp(
            getTechniqueMastery() +
            0.003,
            0,
            100
        );


    if (
        !game.currentEnemy &&
        game.health <
        getMaxHealth()
    ) {

        game.health =
            Math.min(
                getMaxHealth(),
                game.health +
                getHealthRegen()
            );

    }


    if (
        Date.now() >=
        game.auctionRefreshAt
    ) {

        refreshAuctionListings(
            false
        );

    }


    renderCore();


    renderAuctionTimer();

}



/* ========================================================= */
/* OFFLINE                                                   */
/* ========================================================= */

function calculateOfflineProgress() {

    const seconds =
        Math.min(
            Math.floor(
                (
                    Date.now() -
                    game.lastPlayed
                ) /
                1000
            ),
            MAX_OFFLINE_SECONDS
        );


    if (
        seconds <
        10
    ) {

        return;

    }


    pendingOffline.qi =
        getQiPerSecond() *
        seconds *
        0.75;


    pendingOffline.stones =
        Math.floor(
            seconds /
            60 *
            getTotalCaveLevel() *
            2
        );


    pendingOffline.herbs =
        Math.floor(
            seconds /
            300 *
            (
                1 +
                getCaveLevel(
                    "alchemy-room"
                ) *
                0.25
            )
        );


    byId(
        "offlineTimeDisplay"
    ).textContent =
        formatDuration(
            seconds
        );


    byId(
        "offlineQiDisplay"
    ).textContent =
        `+${formatNumber(pendingOffline.qi)}`;


    byId(
        "offlineStoneDisplay"
    ).textContent =
        `+${formatNumber(pendingOffline.stones)}`;


    byId(
        "offlineHerbDisplay"
    ).textContent =
        `+${formatNumber(pendingOffline.herbs)}`;


    byId(
        "offlineModal"
    ).classList.remove(
        "hidden"
    );

}


function claimOfflineProgress() {

    addQi(
        pendingOffline.qi
    );


    game.spiritStones +=
        pendingOffline.stones;


    grantRandomHerbs(
        pendingOffline.herbs
    );


    pendingOffline = {

        qi:
            0,

        stones:
            0,

        herbs:
            0

    };


    byId(
        "offlineModal"
    ).classList.add(
        "hidden"
    );


    playRewardSound();


    checkAchievements();


    saveGame();


    render();

}


function formatDuration(seconds) {

    const minutes =
        Math.floor(
            seconds /
            60
        );


    if (
        minutes <
        60
    ) {

        return `${minutes} minutes`;

    }


    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

}



/* ========================================================= */
/* LOG                                                       */
/* ========================================================= */

function addLog(
    message,
    important =
        false
) {

    game.log.unshift({

        time:
            getCurrentTime(),

        message,

        important

    });


    game.log =
        game.log.slice(
            0,
            60
        );

}


function addBattleLog(message) {

    game.battleLog.unshift({

        time:
            getCurrentTime(),

        message

    });


    game.battleLog =
        game.battleLog.slice(
            0,
            60
        );

}


function addWorldRumor(message) {

    game.log.unshift({

        time:
            getCurrentTime(),

        message:
            `[WORLD] ${message}`,

        important:
            true

    });

}



/* ========================================================= */
/* NAVIGATION                                                */
/* ========================================================= */

function openPage(pageId) {

    document
        .querySelectorAll(
            ".page-section"
        )
        .forEach(
            page =>
                page.classList.add(
                    "hidden-page"
                )
        );


    byId(
        pageId
    ).classList.remove(
        "hidden-page"
    );


    document
        .querySelectorAll(
            ".nav-button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active-tab",
                    button.dataset.page ===
                    pageId
                );

            }
        );


    playClickSound();


    render();

}



/* ========================================================= */
/* CORE RENDER                                               */
/* ========================================================= */

function renderCore() {

    game.health =
        Math.min(
            game.health,
            getMaxHealth()
        );


    const requirement =
        getQiRequirement();


    const herbTotal =
        Object.values(
            game.herbs
        )
            .reduce(
                (
                    sum,
                    value
                ) =>
                    sum +
                    value,
                0
            );


    byId(
        "topTitleDisplay"
    ).textContent =
        getActiveTitle().name;


    byId(
        "topRealmDisplay"
    ).textContent =
        `${getRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "topCombatDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "topQiDisplay"
    ).textContent =
        `${formatNumber(getQiPerSecond())}/s`;


    byId(
        "topStoneDisplay"
    ).textContent =
        formatNumber(
            game.spiritStones
        );


    byId(
        "topHerbDisplay"
    ).textContent =
        herbTotal;


    byId(
        "topPillDisplay"
    ).textContent =
        game.pills +
        game.healingPills +
        game.breakthroughPills;


    byId(
        "topContributionDisplay"
    ).textContent =
        formatNumber(
            game.sectContribution
        );


    byId(
        "topEggDisplay"
    ).textContent =
        game.spiritEggs;


    byId(
        "topSecretTokenDisplay"
    ).textContent =
        game.secretTokens;


    byId(
        "topDaoPointDisplay"
    ).textContent =
        game.daoPoints;


    byId(
        "playerNameDisplay"
    ).textContent =
        game.playerName;


    byId(
        "playerTitleDisplay"
    ).textContent =
        getActiveTitle().name;


    byId(
        "realmDisplay"
    ).textContent =
        getRealm().name;


    byId(
        "stageDisplay"
    ).textContent =
        STAGES[
            game.stageIndex
        ];


    byId(
        "spiritualRootDisplay"
    ).textContent =
        game.spiritualRoot;


    byId(
        "rootBonusDisplay"
    ).textContent =
        `Qi Efficiency +${Math.round(getRoot().qi * 100)}%`;


    byId(
        "mainRealmDisplay"
    ).textContent =
        `${getRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "combatPowerDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "healthDisplay"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "healthRegenDisplay"
    ).textContent =
        `${formatNumber(getHealthRegen())}/sec`;


    byId(
        "qiPerSecondDisplay"
    ).textContent =
        formatNumber(
            getQiPerSecond()
        );


    byId(
        "attributePointDisplay"
    ).textContent =
        game.statPoints;


    byId(
        "critChanceDisplay"
    ).textContent =
        `${(getCriticalChance() * 100).toFixed(1)}%`;


    byId(
        "strengthDisplay"
    ).textContent =
        game.attributes.strength;


    byId(
        "constitutionDisplay"
    ).textContent =
        game.attributes.constitution;


    byId(
        "soulDisplay"
    ).textContent =
        game.attributes.soul;


    byId(
        "qiProgressText"
    ).textContent =
        `${formatNumber(game.qi)} / ${formatNumber(requirement)} Qi`;


    byId(
        "qiProgressBar"
    ).style.width =
        `${clamp(
            game.qi /
            requirement *
            100,
            0,
            100
        )}%`;


    byId(
        "breakthroughChanceDisplay"
    ).textContent =
        `Breakthrough: ${getBreakthroughChance().toFixed(1)}%`;


    byId(
        "activeTechniqueDisplay"
    ).textContent =
        getTechnique().name;


    byId(
        "techniqueBonusDisplay"
    ).textContent =
        `Qi Production +${Math.round(getTechnique().qiBonus * 100)}%`;


    byId(
        "techniqueMasteryBar"
    ).style.width =
        `${getTechniqueMastery()}%`;


    byId(
        "techniqueMasteryText"
    ).textContent =
        `Mastery ${getTechniqueMastery().toFixed(1)}%`;


    const weapon =
        getWeapon();


    byId(
        "equippedWeaponName"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";


    byId(
        "equippedWeaponName"
    ).className =
        weapon
            ? `rarity-${weapon.rarity.toLowerCase()}`
            : "";


    byId(
        "equippedWeaponStats"
    ).textContent =
        weapon
            ? `Combat Power +${formatNumber(weapon.power)}`
            : "No weapon equipped.";


    const artifact =
        getArtifact();


    byId(
        "equippedArtifactName"
    ).textContent =
        artifact
            ? `${artifact.rarity} ${artifact.name}`
            : "None";


    byId(
        "equippedArtifactName"
    ).className =
        artifact
            ? `rarity-${artifact.rarity.toLowerCase()}`
            : "";


    byId(
        "equippedArtifactStats"
    ).textContent =
        artifact
            ? `${artifact.effect.toUpperCase()} +${Math.round(artifact.value * 100)}%`
            : "No artifact equipped.";


    renderActivePet();


    const tribulationNext =
        game.stageIndex ===
            3 &&
        TRIBULATION_REALMS.includes(
            game.realmIndex +
            1
        );


    byId(
        "tribulationWarning"
    ).classList.toggle(
        "hidden",
        !tribulationNext
    );


    const craftable =
        countCraftableRecipes();


    byId(
        "alchemyBadge"
    ).textContent =
        craftable;


    byId(
        "alchemyBadge"
    ).classList.toggle(
        "hidden",
        craftable <=
        0
    );


    const achievementCount =
        getUnclaimedAchievementCount();


    byId(
        "achievementBadge"
    ).textContent =
        achievementCount;


    byId(
        "achievementBadge"
    ).classList.toggle(
        "hidden",
        achievementCount <=
        0
    );


    byId(
        "signInButton"
    ).disabled =
        !canSignInToday();


    byId(
        "dailyStatus"
    ).textContent =
        canSignInToday()
            ? "Daily reward available."
            : "Today's reward has already been claimed.";


    byId(
        "streakDisplay"
    ).textContent =
        game.dailyStreak;

}



/* ========================================================= */
/* ACTIVE PET                                                */
/* ========================================================= */

function renderActivePet() {

    const container =
        byId(
            "activePetCard"
        );


    const pet =
        getPet();


    if (
        !pet
    ) {

        container.innerHTML =
            `
                <div class="benefit-card">

                    <p>
                        No Spirit Pet summoned.
                    </p>

                </div>
            `;


        return;

    }


    container.innerHTML =
        `
            <div class="pet-card active">

                <div class="pet-icon">
                    ${pet.icon}
                </div>

                <h3>
                    ${pet.name}
                </h3>

                <div class="pet-rarity rarity-${pet.rarity.toLowerCase()}">
                    ${pet.rarity} • Level ${pet.level}
                </div>

                <p>
                    Qi +${Math.round(getPetBonus("qiBonus") * 100)}%
                    <br>
                    Combat +${Math.round(getPetBonus("combatBonus") * 100)}%
                    <br>
                    Herb Find +${Math.round(getPetBonus("herbBonus") * 100)}%
                </p>

            </div>
        `;

}



/* ========================================================= */
/* TECHNIQUES                                                */
/* ========================================================= */

function renderTechniques() {

    const container =
        byId(
            "techniqueList"
        );


    container.innerHTML =
        "";


    TECHNIQUES.forEach(
        technique => {

            const unlocked =
                game.realmIndex >=
                technique.unlockRealm;


            const active =
                technique.id ===
                game.activeTechnique;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `technique-card ${
                    active
                        ? "active"
                        : ""
                } ${
                    !unlocked
                        ? "locked"
                        : ""
                }`;


            card.innerHTML =
                `
                    <h3>
                        ${technique.name}
                    </h3>

                    <p>
                        ${technique.rank} Rank
                        <br>
                        Qi Bonus +${Math.round(technique.qiBonus * 100)}%
                        <br>
                        Mastery ${getTechniqueMastery(technique.id).toFixed(1)}%
                    </p>

                    <button
                        data-technique="${technique.id}"
                        ${active || !unlocked ? "disabled" : ""}
                    >
                        ${
                            active
                                ? "Active"
                                : unlocked
                                    ? "Cultivate"
                                    : `Requires ${REALMS[technique.unlockRealm].name}`
                        }
                    </button>
                `;


            container.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            "[data-technique]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        equipTechnique(
                            button.dataset.technique
                        );

            }
        );

}



/* ========================================================= */
/* MARTIAL SKILL RENDER                                      */
/* ========================================================= */

function renderMartialSkills() {

    const container =
        byId(
            "martialSkillList"
        );


    container.innerHTML =
        "";


    MARTIAL_SKILLS.forEach(
        skill => {

            const unlocked =
                isSkillUnlocked(
                    skill
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `martial-skill-card ${
                    !unlocked
                        ? "locked"
                        : ""
                }`;


            card.innerHTML =
                `
                    <h3>
                        ${skill.name}
                    </h3>

                    <p>
                        ${skill.type} Technique
                        <br>
                        Damage ×${skill.damage}
                        <br>
                        Cooldown ${skill.cooldown}
                        <br>
                        Mastery ${(game.skillMastery[skill.id] || 0).toFixed(1)}%
                    </p>
                `;


            container.appendChild(
                card
            );

        }
    );


    byId(
        "knownSkillCountDisplay"
    ).textContent =
        MARTIAL_SKILLS.filter(
            isSkillUnlocked
        ).length;


    byId(
        "skillUsesDisplay"
    ).textContent =
        game.totalSkillUses;


    byId(
        "highestSkillMasteryDisplay"
    ).textContent =
        `${
            Math.max(
                0,
                ...Object.values(
                    game.skillMastery
                )
            ).toFixed(
                1
            )
        }%`;

}



/* ========================================================= */
/* COMBAT SKILLS                                             */
/* ========================================================= */

function renderCombatSkills() {

    const container =
        byId(
            "battleSkillButtons"
        );


    container.innerHTML =
        "";


    MARTIAL_SKILLS
        .filter(
            isSkillUnlocked
        )
        .forEach(
            skill => {

                const cooldown =
                    getSkillCooldown(
                        skill.id
                    );


                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "combat-skill-button";


                button.disabled =
                    cooldown >
                    0;


                button.innerHTML =
                    `
                        <span class="combat-skill-name">
                            ${skill.name}
                        </span>

                        <span class="combat-skill-meta">
                            ${skill.type} ×${skill.damage}
                        </span>

                        ${
                            cooldown >
                            0
                                ? `
                                    <span class="skill-cooldown">
                                        ${cooldown}
                                    </span>
                                `
                                : ""
                        }
                    `;


                button.onclick =
                    () =>
                        useMartialSkill(
                            skill.id
                        );


                container.appendChild(
                    button
                );

            }
        );

}



/* ========================================================= */
/* ADVENTURE RENDER                                          */
/* ========================================================= */

function renderAdventure() {

    const zone =
        getZone();


    byId(
        "battlePlayerRealm"
    ).textContent =
        `${getRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "battlePlayerHealthText"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "battlePlayerHealthBar"
    ).style.width =
        `${clamp(
            game.health /
            getMaxHealth() *
            100,
            0,
            100
        )}%`;


    byId(
        "battlePlayerPower"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "battleCritChance"
    ).textContent =
        `${(getCriticalChance() * 100).toFixed(1)}%`;


    byId(
        "autoBattleStatus"
    ).textContent =
        game.autoBattle
            ? "Active"
            : "Disabled";


    byId(
        "autoBattleButton"
    ).textContent =
        game.autoBattle
            ? "Disable"
            : "Enable";


    byId(
        "selectedZoneName"
    ).textContent =
        zone.name;


    byId(
        "selectedZoneDescription"
    ).textContent =
        zone.description;


    byId(
        "adventureVictoryDisplay"
    ).textContent =
        game.victories;


    byId(
        "defeatDisplay"
    ).textContent =
        game.defeats;


    byId(
        "enemiesSlainDisplay"
    ).textContent =
        game.enemiesSlain;


    byId(
        "bossesSlainDisplay"
    ).textContent =
        game.bossesSlain;


    byId(
        "expeditionsDisplay"
    ).textContent =
        game.expeditions;


    byId(
        "criticalHitsDisplay"
    ).textContent =
        game.criticalHits;


    renderZones();


    renderMissions();


    renderBattleLog();


    renderZoneProgress();


    const fighting =
        Boolean(
            game.currentEnemy
        );


    byId(
        "explorationView"
    ).classList.toggle(
        "hidden",
        fighting
    );


    byId(
        "battleView"
    ).classList.toggle(
        "hidden",
        !fighting
    );


    if (
        fighting
    ) {

        const enemy =
            game.currentEnemy;


        byId(
            "enemySymbol"
        ).textContent =
            enemy.boss
                ? "王"
                : "妖";


        byId(
            "enemyTypeDisplay"
        ).textContent =
            enemy.type;


        byId(
            "enemyNameDisplay"
        ).textContent =
            enemy.name;


        byId(
            "enemyRealmDisplay"
        ).textContent =
            zone.name;


        byId(
            "enemyHealthText"
        ).textContent =
            `${formatNumber(enemy.health)} / ${formatNumber(enemy.maxHealth)}`;


        byId(
            "enemyHealthBar"
        ).style.width =
            `${clamp(
                enemy.health /
                enemy.maxHealth *
                100,
                0,
                100
            )}%`;


        byId(
            "enemyPowerDisplay"
        ).textContent =
            formatNumber(
                enemy.power
            );


        byId(
            "enemyRewardPreview"
        ).textContent =
            enemy.boss
                ? "Boss"
                : "Normal";


        renderCombatSkills();

    }

}



/* ========================================================= */
/* ZONES                                                     */
/* ========================================================= */

function renderZones() {

    const container =
        byId(
            "zoneList"
        );


    container.innerHTML =
        "";


    ZONES.forEach(
        zone => {

            const unlocked =
                game.realmIndex >=
                zone.required;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `zone-card ${
                    game.selectedZone ===
                    zone.id
                        ? "selected"
                        : ""
                } ${
                    !unlocked
                        ? "locked"
                        : ""
                }`;


            card.innerHTML =
                `
                    <h3>
                        ${zone.name}
                    </h3>

                    <p>
                        ${zone.description}
                    </p>

                    <small>
                        ${
                            unlocked
                                ? `Herb Tier ${zone.herbs}`
                                : `Requires ${REALMS[zone.required].name}`
                        }
                    </small>
                `;


            if (
                unlocked
            ) {

                card.onclick =
                    () =>
                        selectZone(
                            zone.id
                        );

            }


            container.appendChild(
                card
            );

        }
    );

}



/* ========================================================= */
/* MISSIONS                                                  */
/* ========================================================= */

function renderMissions() {

    const container =
        byId(
            "missionList"
        );


    container.innerHTML =
        "";


    MISSIONS.forEach(
        mission => {

            const progress =
                getMissionProgress(
                    mission
                );


            const claimed =
                game.missionClaims[
                    mission.id
                ];


            container.innerHTML +=
                `
                    <div class="mission-card">

                        <h3>
                            ${mission.name}
                        </h3>

                        <div class="mission-progress">
                            ${Math.min(progress, mission.target)}
                            /
                            ${mission.target}
                        </div>

                        <button
                            data-mission="${mission.id}"
                            ${progress < mission.target || claimed ? "disabled" : ""}
                        >
                            ${claimed ? "Claimed" : "Claim Reward"}
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-mission]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        claimMission(
                            button.dataset.mission
                        );

            }
        );

}



/* ========================================================= */
/* BATTLE LOG                                                */
/* ========================================================= */

function renderBattleLog() {

    byId(
        "battleLog"
    ).innerHTML =
        game.battleLog.length
            ? game.battleLog
                .map(
                    entry =>
                        `
                            <div class="log-entry">

                                <span class="log-time">
                                    ${entry.time}
                                </span>

                                <span>
                                    ${entry.message}
                                </span>

                            </div>
                        `
                )
                .join(
                    ""
                )
            : `
                <div class="log-entry">
                    No battles recorded.
                </div>
            `;

}



/* ========================================================= */
/* ZONE PROGRESS                                             */
/* ========================================================= */

function renderZoneProgress() {

    byId(
        "zoneProgressList"
    ).innerHTML =
        ZONES.map(
            zone =>
                `
                    <div
                        class="realm-path-item ${
                            game.selectedZone ===
                            zone.id
                                ? "current"
                                : ""
                        }"
                    >
                        ${
                            game.realmIndex >=
                            zone.required
                                ? `${zone.name} — Threat ${Math.min(
                                    5,
                                    game.zoneBossProgress[
                                        zone.id
                                    ] ||
                                    0
                                )}/5`
                                : `${zone.name} — Locked`
                        }
                    </div>
                `
        ).join(
            ""
        );

}



/* ========================================================= */
/* WORLD                                                     */
/* ========================================================= */

function renderWorld() {

    if (
        game.storyChapter >=
        STORY_CHAPTERS.length
    ) {

        byId(
            "storyChapterTitle"
        ).textContent =
            "The Chronicle Continues";


        byId(
            "storyChapterText"
        ).textContent =
            "The known chapters of Jiang Chue's mortal journey are complete. Greater mysteries await beyond the Immortal Realm.";


        byId(
            "storyRequirementDisplay"
        ).textContent =
            "All current story chapters completed.";


        byId(
            "advanceStoryButton"
        ).disabled =
            true;

    } else {

        const chapter =
            STORY_CHAPTERS[
                game.storyChapter
            ];


        byId(
            "storyChapterTitle"
        ).textContent =
            chapter.title;


        byId(
            "storyChapterText"
        ).textContent =
            chapter.text;


        byId(
            "storyRequirementDisplay"
        ).textContent =
            chapter.requirement;


        byId(
            "advanceStoryButton"
        ).disabled =
            !chapter.check();

    }


    renderNpcList();


    renderRelationships();


    renderWorldRumors();


    byId(
        "destinyDisplay"
    ).innerHTML =
        `
            <h3>
                Fate of Jiang Chue
            </h3>

            <p>
                Story Progress:
                ${Math.min(game.storyChapter, STORY_CHAPTERS.length)}
                /
                ${STORY_CHAPTERS.length}
            </p>

            <p>
                Secret Realm Clears:
                ${game.secretClears}
            </p>

            <p>
                Tournament Rank:
                ${getTournamentRank().name}
            </p>

            <p>
                Heavenly Tribulations Survived:
                ${game.tribulationsSurvived}
            </p>

            <p>
                Achievement Points:
                ${getAchievementPoints()}
            </p>
        `;

}



/* ========================================================= */
/* NPC RENDER                                                */
/* ========================================================= */

function renderNpcList() {

    const container =
        byId(
            "npcList"
        );


    container.innerHTML =
        "";


    NPCS.forEach(
        npc => {

            const affinity =
                game.npcAffinity[
                    npc.id
                ] ||
                0;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "npc-card";


            card.innerHTML =
                `
                    <div class="npc-symbol">
                        ${npc.symbol}
                    </div>

                    <h3>
                        ${npc.name}
                    </h3>

                    <p>
                        ${npc.title}
                        <br><br>
                        Affinity ${affinity}/100
                    </p>

                    <button
                        data-npc="${npc.id}"
                    >
                        Speak
                    </button>
                `;


            container.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            "[data-npc]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        openNpc(
                            button.dataset.npc
                        );

            }
        );

}



/* ========================================================= */
/* RELATIONSHIP RENDER                                       */
/* ========================================================= */

function renderRelationships() {

    byId(
        "relationshipList"
    ).innerHTML =
        NPCS.map(
            npc => {

                const affinity =
                    game.npcAffinity[
                        npc.id
                    ] ||
                    0;


                let level =
                    "Acquaintance";


                if (
                    affinity >=
                    25
                ) {

                    level =
                        "Friendly";

                }


                if (
                    affinity >=
                    50
                ) {

                    level =
                        "Trusted";

                }


                if (
                    affinity >=
                    75
                ) {

                    level =
                        "Close Companion";

                }


                if (
                    affinity >=
                    100
                ) {

                    level =
                        "Dao Companion";

                }


                return `
                    <div class="relationship-card">

                        <h3>
                            ${npc.name}
                        </h3>

                        <div class="relationship-level">
                            ${level}
                        </div>

                        <p>
                            Affinity:
                            ${affinity}/100
                        </p>

                    </div>
                `;

            }
        )
            .join(
                ""
            );

}



/* ========================================================= */
/* WORLD RUMORS                                              */
/* ========================================================= */

function renderWorldRumors() {

    const rumors =
        game.log
            .filter(
                entry =>
                    entry.message.startsWith(
                        "[WORLD]"
                    )
            )
            .slice(
                0,
                12
            );


    byId(
        "worldRumorList"
    ).innerHTML =
        rumors.length
            ? rumors.map(
                entry =>
                    `
                        <div class="log-entry">

                            <span class="log-time">
                                ${entry.time}
                            </span>

                            <span class="log-important">
                                ${entry.message.replace("[WORLD] ", "")}
                            </span>

                        </div>
                    `
            ).join(
                ""
            )
            : `
                <div class="log-entry">
                    The cultivation world is unusually quiet.
                </div>
            `;

}



/* ========================================================= */
/* SECRET REALM RENDER                                       */
/* ========================================================= */

function renderSecretRealms() {

    byId(
        "secretTokenDisplay"
    ).textContent =
        game.secretTokens;


    byId(
        "secretClearDisplay"
    ).textContent =
        game.secretClears;


    byId(
        "secretFailDisplay"
    ).textContent =
        game.secretFails;


    const container =
        byId(
            "secretRealmList"
        );


    container.innerHTML =
        "";


    SECRET_REALMS.forEach(
        realm => {

            const unlocked =
                game.realmIndex >=
                realm.required;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `secret-card ${
                    !unlocked
                        ? "locked"
                        : ""
                }`;


            card.innerHTML =
                `
                    <h3>
                        ${realm.name}
                    </h3>

                    <p>
                        Recommended Realm:
                        ${REALMS[realm.required].name}
                        <br>
                        Token Cost:
                        ${realm.tokenCost}
                        <br>
                        Potential Inheritance:
                        ${realm.inheritance}
                    </p>

                    <button
                        data-secret="${realm.id}"
                        ${!unlocked || game.secretTokens < realm.tokenCost ? "disabled" : ""}
                    >
                        Enter Secret Realm
                    </button>
                `;


            container.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            "[data-secret]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        enterSecretRealm(
                            button.dataset.secret
                        );

            }
        );


    byId(
        "inheritanceList"
    ).innerHTML =
        SECRET_REALMS.map(
            realm =>
                `
                    <div
                        class="inheritance-card ${
                            game.inheritances[
                                realm.inheritance
                            ]
                                ? "unlocked"
                                : ""
                        }"
                    >

                        <h3>
                            ${realm.inheritance}
                        </h3>

                        <p>
                            ${
                                game.inheritances[
                                    realm.inheritance
                                ]
                                    ? "Inheritance awakened."
                                    : "Not yet obtained."
                            }
                        </p>

                    </div>
                `
        ).join(
            ""
        );

}



/* ========================================================= */
/* PET RENDER                                                */
/* ========================================================= */

function renderPets() {

    byId(
        "petEggDisplay"
    ).textContent =
        game.spiritEggs;


    byId(
        "hatchPetButton"
    ).disabled =
        game.spiritEggs <=
        0;


    const container =
        byId(
            "petInventoryList"
        );


    container.innerHTML =
        "";


    if (
        game.pets.length ===
        0
    ) {

        container.innerHTML =
            `
                <div class="benefit-card">

                    <p>
                        No Spirit Pets contracted.
                    </p>

                </div>
            `;

    }


    game.pets.forEach(
        pet => {

            const active =
                pet.id ===
                game.activePetId;


            const cost =
                100 *
                pet.level *
                pet.level;


            container.innerHTML +=
                `
                    <div class="pet-card ${active ? "active" : ""}">

                        <div class="pet-icon">
                            ${pet.icon}
                        </div>

                        <h3>
                            ${pet.name}
                        </h3>

                        <div class="pet-rarity rarity-${pet.rarity.toLowerCase()}">
                            ${pet.rarity}
                            • Level ${pet.level}
                        </div>

                        <p>
                            Qi +${Math.round(pet.qiBonus * 100)}%
                            <br>
                            Combat +${Math.round(pet.combatBonus * 100)}%
                            <br>
                            Herb +${Math.round(pet.herbBonus * 100)}%
                        </p>

                        <button
                            data-pet-summon="${pet.id}"
                            ${active ? "disabled" : ""}
                        >
                            ${active ? "Summoned" : "Summon"}
                        </button>

                        <button
                            data-pet-train="${pet.id}"
                            ${game.spiritStones < cost ? "disabled" : ""}
                        >
                            Train — ${formatNumber(cost)}
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-pet-summon]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        summonPet(
                            button.dataset.petSummon
                        );

            }
        );


    document
        .querySelectorAll(
            "[data-pet-train]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        trainPet(
                            button.dataset.petTrain
                        );

            }
        );


    const pet =
        getPet();


    byId(
        "petBonusDisplay"
    ).innerHTML =
        pet
            ? `
                <h3>
                    ${pet.icon} ${pet.name}
                </h3>

                <p>
                    Effective Qi:
                    +${Math.round(getPetBonus("qiBonus") * 100)}%
                </p>

                <p>
                    Effective Combat:
                    +${Math.round(getPetBonus("combatBonus") * 100)}%
                </p>

                <p>
                    Effective Herb Find:
                    +${Math.round(getPetBonus("herbBonus") * 100)}%
                </p>
            `
            : `
                <h3>
                    No active Spirit Pet
                </h3>
            `;

}



/* ========================================================= */
/* CAVE RENDER                                               */
/* ========================================================= */

function renderCave() {

    byId(
        "caveTotalLevelDisplay"
    ).textContent =
        getTotalCaveLevel();


    byId(
        "caveQiBonusDisplay"
    ).textContent =
        `+${Math.round(getCaveQiBonus() * 100)}%`;


    byId(
        "caveRegenDisplay"
    ).textContent =
        `${formatNumber(getHealthRegen())}/sec`;


    byId(
        "caveHerbBonusDisplay"
    ).textContent =
        `+${Math.round(getCaveHerbBonus() * 100)}%`;


    const container =
        byId(
            "caveBuildingList"
        );


    container.innerHTML =
        "";


    CAVE_BUILDINGS.forEach(
        building => {

            const level =
                getCaveLevel(
                    building.id
                );


            const cost =
                Math.floor(
                    building.cost *
                    Math.pow(
                        1.85,
                        level -
                        1
                    )
                );


            container.innerHTML +=
                `
                    <div class="cave-building-card">

                        <div>

                            <h3>
                                ${building.name}
                            </h3>

                            <p>
                                ${building.description}
                            </p>

                            <div class="cave-level">
                                Level ${level}
                            </div>

                        </div>

                        <button
                            data-cave="${building.id}"
                            ${game.spiritStones < cost ? "disabled" : ""}
                        >
                            Upgrade
                            <br>
                            ${formatNumber(cost)}
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-cave]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        upgradeCaveBuilding(
                            button.dataset.cave
                        );

            }
        );


    byId(
        "caveProductionDisplay"
    ).innerHTML =
        `
            <h3>
                Offline Production
            </h3>

            <p>
                Offline Qi:
                75% of normal Qi/sec.
            </p>

            <p>
                Spirit Stones:
                ${formatNumber(getTotalCaveLevel() * 2)}
                per minute.
            </p>

            <p>
                Higher Alchemy Chamber levels generate additional herbs.
            </p>
        `;

}



/* ========================================================= */
/* SECT RENDER                                               */
/* ========================================================= */

function renderSect() {

    byId(
        "sectNameDisplay"
    ).textContent =
        game.sectName;


    byId(
        "sectRankDisplay"
    ).textContent =
        getSectRank().name;


    byId(
        "sectContributionDisplay"
    ).textContent =
        formatNumber(
            game.sectContribution
        );


    byId(
        "totalContributionDisplay"
    ).textContent =
        formatNumber(
            game.totalSectContribution
        );


    byId(
        "sectRankList"
    ).innerHTML =
        SECT_RANKS.map(
            (
                rank,
                index
            ) =>
                `
                    <div
                        class="rank-card ${
                            index ===
                            getSectRankIndex()
                                ? "current"
                                : game.totalSectContribution <
                                  rank.required
                                    ? "locked"
                                    : ""
                        }"
                    >

                        <h3>
                            ${rank.name}
                        </h3>

                        <p>
                            Requires:
                            ${formatNumber(rank.required)}
                            lifetime contribution.
                        </p>

                    </div>
                `
        ).join(
            ""
        );


    renderSectTreasury();


    renderSectDuties();


    byId(
        "sectBenefitDisplay"
    ).innerHTML =
        `
            <h3>
                ${getSectRank().name}
            </h3>

            <p>
                Qi Bonus:
                +${Math.round(getSectRank().qi * 100)}%
            </p>

            <p>
                Treasury Discount:
                ${Math.round(getSectRank().discount * 100)}%
            </p>
        `;

}


function renderSectTreasury() {

    const container =
        byId(
            "sectTreasuryList"
        );


    container.innerHTML =
        "";


    SECT_TREASURY.forEach(
        item => {

            const cost =
                Math.ceil(
                    item.cost *
                    (
                        1 -
                        getSectRank().discount
                    )
                );


            container.innerHTML +=
                `
                    <div class="shop-item">

                        <h3>
                            ${item.name}
                        </h3>

                        <div class="item-price">
                            ${formatNumber(cost)}
                            Contribution
                        </div>

                        <button
                            data-sect-buy="${item.id}"
                            ${game.sectContribution < cost ? "disabled" : ""}
                        >
                            Exchange
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-sect-buy]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        buySectItem(
                            button.dataset.sectBuy
                        );

            }
        );

}


function renderSectDuties() {

    const container =
        byId(
            "sectDutyList"
        );


    container.innerHTML =
        "";


    SECT_DUTIES.forEach(
        duty => {

            const progress =
                getDutyProgress(
                    duty
                );


            container.innerHTML +=
                `
                    <div class="duty-card">

                        <h3>
                            ${duty.name}
                        </h3>

                        <div class="duty-progress">
                            ${Math.min(progress, duty.target)}
                            /
                            ${duty.target}
                        </div>

                        <button
                            data-duty="${duty.id}"
                            ${progress < duty.target ? "disabled" : ""}
                        >
                            Claim +${duty.reward}
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-duty]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        claimSectDuty(
                            button.dataset.duty
                        );

            }
        );

}



/* ========================================================= */
/* TOURNAMENT RENDER                                         */
/* ========================================================= */

function renderTournament() {

    byId(
        "tournamentRankDisplay"
    ).textContent =
        getTournamentRank().name;


    byId(
        "tournamentVictoryDisplay"
    ).textContent =
        game.tournamentWins;


    byId(
        "tournamentDefeatDisplay"
    ).textContent =
        game.tournamentLosses;


    byId(
        "tournamentPointDisplay"
    ).textContent =
        game.tournamentPoints;


    const opponents =
        generateTournamentOpponents();


    const container =
        byId(
            "tournamentOpponentList"
        );


    container.innerHTML =
        "";


    opponents.forEach(
        (
            opponent,
            index
        ) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "tournament-card";


            card.innerHTML =
                `
                    <h3>
                        ${opponent.name}
                    </h3>

                    <p>
                        ${
                            index ===
                            0
                                ? "Outer Arena Challenger"
                                : index ===
                                    1
                                    ? "Inner Arena Challenger"
                                    : "Elite Arena Challenger"
                        }
                    </p>

                    <div class="tournament-power">
                        Estimated Power:
                        ${formatNumber(opponent.power)}
                    </div>

                    <button>
                        Challenge
                    </button>
                `;


            card
                .querySelector(
                    "button"
                )
                .onclick =
                    () =>
                        fightTournamentOpponent(
                            opponent.power,
                            opponent.reward,
                            opponent.name
                        );


            container.appendChild(
                card
            );

        }
    );


    byId(
        "tournamentRewardDisplay"
    ).innerHTML =
        `
            <h3>
                Current Rank Rewards
            </h3>

            <p>
                Victories grant Ranking Points, Sect Contribution and Spirit Stones.
            </p>

            <p>
                Current Rank:
                ${getTournamentRank().name}
            </p>
        `;

}



/* ========================================================= */
/* ALCHEMY RENDER                                            */
/* ========================================================= */

function renderAlchemy() {

    byId(
        "herbInventoryList"
    ).innerHTML =
        HERBS.map(
            herb =>
                `
                    <div class="herb-card">

                        <div class="herb-icon">
                            ${herb.icon}
                        </div>

                        <strong>
                            ${herb.name}
                        </strong>

                        <span>
                            ×${game.herbs[herb.id] || 0}
                        </span>

                    </div>
                `
        ).join(
            ""
        );


    const levelIndex =
        getAlchemyLevelIndex();


    const current =
        ALCHEMY_LEVELS[
            levelIndex
        ];


    const next =
        ALCHEMY_LEVELS[
            Math.min(
                levelIndex +
                1,
                ALCHEMY_LEVELS.length -
                1
            )
        ];


    byId(
        "alchemyLevelDisplay"
    ).textContent =
        current.name;


    byId(
        "alchemyExpText"
    ).textContent =
        `${game.alchemyExp} Mastery`;


    if (
        levelIndex ===
        ALCHEMY_LEVELS.length -
        1
    ) {

        byId(
            "alchemyExpBar"
        ).style.width =
            "100%";

    } else {

        byId(
            "alchemyExpBar"
        ).style.width =
            `${clamp(
                (
                    game.alchemyExp -
                    current.required
                ) /
                (
                    next.required -
                    current.required
                ) *
                100,
                0,
                100
            )}%`;

    }


    const container =
        byId(
            "alchemyRecipeList"
        );


    container.innerHTML =
        "";


    ALCHEMY_RECIPES.forEach(
        recipe => {

            const materials =
                Object.entries(
                    recipe.materials
                )
                    .map(
                        (
                            [
                                id,
                                amount
                            ]
                        ) => {

                            return `${
                                HERBS.find(
                                    herb =>
                                        herb.id ===
                                        id
                                ).name
                            } ×${amount}`;

                        }
                    )
                    .join(
                        ", "
                    );


            container.innerHTML +=
                `
                    <div class="recipe-card">

                        <h3>
                            ${recipe.name}
                        </h3>

                        <p>
                            ${materials}
                        </p>

                        <button
                            data-recipe="${recipe.id}"
                            ${
                                getAlchemyLevelIndex() <
                                    recipe.unlock ||
                                !hasMaterials(recipe)
                                    ? "disabled"
                                    : ""
                            }
                        >
                            Refine
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-recipe]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        refineRecipe(
                            button.dataset.recipe
                        );

            }
        );

}



/* ========================================================= */
/* AUCTION RENDER                                            */
/* ========================================================= */

function renderAuction() {

    initializeAuction();


    const container =
        byId(
            "auctionListingContainer"
        );


    container.innerHTML =
        "";


    game.auctionListings.forEach(
        listing => {

            const item =
                listing.item;


            const subtitle =
                item.type ===
                "token"
                    ? "Secret Realm Token"
                    : item.effect
                        ? `${item.effect.toUpperCase()} +${Math.round(item.value * 100)}%`
                        : `Combat Power +${formatNumber(item.power)}`;


            container.innerHTML +=
                `
                    <div class="auction-card">

                        <div>

                            <h3 class="rarity-${item.rarity.toLowerCase()}">
                                ${item.rarity} ${item.name}
                            </h3>

                            <p>
                                ${subtitle}
                            </p>

                            <div class="item-price">
                                ${formatNumber(listing.price)}
                                Spirit Stones
                            </div>

                        </div>

                        <button
                            data-auction="${listing.auctionId}"
                            ${game.spiritStones < listing.price ? "disabled" : ""}
                        >
                            Buy
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-auction]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        buyAuctionListing(
                            button.dataset.auction
                        );

            }
        );


    byId(
        "auctionHistoryDisplay"
    ).innerHTML =
        game.auctionHistory.length
            ? game.auctionHistory
                .map(
                    entry =>
                        `
                            <div class="log-entry">

                                <span class="log-time">
                                    ${entry.time}
                                </span>

                                <span>
                                    ${entry.message}
                                </span>

                            </div>
                        `
                )
                .join(
                    ""
                )
            : `
                <div class="log-entry">
                    No auction purchases yet.
                </div>
            `;


    renderAuctionTimer();

}


function renderAuctionTimer() {

    if (
        !byId(
            "auctionTimerDisplay"
        )
    ) {

        return;

    }


    const remaining =
        Math.max(
            0,
            game.auctionRefreshAt -
            Date.now()
        );


    const seconds =
        Math.floor(
            remaining /
            1000
        );


    const minutes =
        Math.floor(
            seconds /
            60
        );


    byId(
        "auctionTimerDisplay"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

}



/* ========================================================= */
/* WORLD BOSS RENDER                                         */
/* ========================================================= */

function renderWorldBoss() {

    initializeWorldBoss();


    const boss =
        WORLD_BOSSES[
            game.worldBossIndex
        ];


    byId(
        "worldBossNameDisplay"
    ).textContent =
        boss.name;


    byId(
        "worldBossDescription"
    ).textContent =
        boss.description;


    byId(
        "worldBossHealthText"
    ).textContent =
        `${formatNumber(game.worldBossHealth)} / ${formatNumber(game.worldBossMaxHealth)}`;


    byId(
        "worldBossHealthBar"
    ).style.width =
        `${clamp(
            game.worldBossHealth /
            game.worldBossMaxHealth *
            100,
            0,
            100
        )}%`;


    byId(
        "worldBossDamageDisplay"
    ).textContent =
        formatNumber(
            game.worldBossDamage
        );


    byId(
        "worldBossAttackCountDisplay"
    ).textContent =
        game.worldBossAttacks;


    byId(
        "worldBossKillDisplay"
    ).textContent =
        game.worldBossKills;


    byId(
        "attackWorldBossButton"
    ).disabled =
        game.worldBossHealth <=
        0;


    byId(
        "claimWorldBossRewardButton"
    ).disabled =
        game.worldBossDamage <=
        0 ||
        game.worldBossRewardClaimed;


    const ratio =
        game.worldBossMaxHealth >
        0
            ? game.worldBossDamage /
            game.worldBossMaxHealth
            : 0;


    byId(
        "worldBossRewardPreview"
    ).innerHTML =
        `
            <h3>
                Contribution Reward
            </h3>

            <p>
                Any damage:
                Spirit Stones + Cultivation Pills
            </p>

            <p>
                10% contribution:
                Guaranteed Rare Artifact
            </p>

            <p>
                25% contribution:
                +1 Secret Realm Token
            </p>

            <p>
                Current Contribution:
                ${(ratio * 100).toFixed(2)}%
            </p>
        `;

}



/* ========================================================= */
/* ACHIEVEMENT RENDER                                        */
/* ========================================================= */

function renderAchievements() {

    const completed =
        ACHIEVEMENTS.filter(
            achievement =>
                isAchievementClaimed(
                    achievement.id
                )
        ).length;


    byId(
        "achievementCompletedDisplay"
    ).textContent =
        completed;


    byId(
        "achievementTotalDisplay"
    ).textContent =
        ACHIEVEMENTS.length;


    byId(
        "achievementPointDisplay"
    ).textContent =
        getAchievementPoints();


    const container =
        byId(
            "achievementList"
        );


    container.innerHTML =
        "";


    ACHIEVEMENTS.forEach(
        achievement => {

            const progress =
                achievement.progress();


            const complete =
                isAchievementComplete(
                    achievement
                );


            const claimed =
                isAchievementClaimed(
                    achievement.id
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `achievement-card ${
                    claimed
                        ? "claimed"
                        : complete
                            ? "unlocked"
                            : "locked"
                }`;


            card.innerHTML =
                `
                    <div>

                        <h3>
                            ${achievement.name}
                        </h3>

                        <p>
                            ${achievement.description}
                        </p>

                        <div class="achievement-progress">
                            ${formatNumber(Math.min(progress, achievement.target))}
                            /
                            ${formatNumber(achievement.target)}
                            • ${achievement.points} AP
                            • Reward ${formatNumber(achievement.rewardStones)} Stones
                        </div>

                    </div>

                    <button
                        ${!complete || claimed ? "disabled" : ""}
                    >
                        ${
                            claimed
                                ? "Claimed"
                                : complete
                                    ? "Claim"
                                    : "Locked"
                        }
                    </button>
                `;


            card
                .querySelector(
                    "button"
                )
                .onclick =
                    () =>
                        claimAchievement(
                            achievement.id
                        );


            container.appendChild(
                card
            );

        }
    );


    const titleContainer =
        byId(
            "titleList"
        );


    titleContainer.innerHTML =
        "";


    PLAYER_TITLES.forEach(
        title => {

            const unlocked =
                title.unlock();


            const active =
                game.activeTitle ===
                title.id;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `title-card ${
                    active
                        ? "active-title"
                        : ""
                } ${
                    !unlocked
                        ? "locked"
                        : ""
                }`;


            card.innerHTML =
                `
                    <h3>
                        ${title.name}
                    </h3>

                    <p>
                        ${
                            active
                                ? "Currently equipped."
                                : unlocked
                                    ? "Unlocked."
                                    : "Locked."
                        }
                    </p>

                    <button
                        ${!unlocked || active ? "disabled" : ""}
                    >
                        ${active ? "Equipped" : unlocked ? "Equip" : "Locked"}
                    </button>
                `;


            card
                .querySelector(
                    "button"
                )
                .onclick =
                    () =>
                        equipTitle(
                            title.id
                        );


            titleContainer.appendChild(
                card
            );

        }
    );

}



/* ========================================================= */
/* ASCENSION RENDER                                          */
/* ========================================================= */

function renderAscension() {

    const gain =
        getAscensionGain();


    byId(
        "daoPointDisplay"
    ).textContent =
        game.daoPoints;


    byId(
        "daoPointGainDisplay"
    ).textContent =
        `+${gain}`;


    byId(
        "reincarnationDisplay"
    ).textContent =
        game.reincarnations;


    byId(
        "lifetimeDaoDisplay"
    ).textContent =
        game.lifetimeDaoPoints;


    byId(
        "daoQiBonusDisplay"
    ).textContent =
        `+${Math.round(getDaoQiBonus() * 100)}%`;


    byId(
        "daoCombatBonusDisplay"
    ).textContent =
        `+${Math.round(getDaoCombatBonus() * 100)}%`;


    byId(
        "ascendButton"
    ).disabled =
        gain <=
        0;


    byId(
        "ascensionRequirementText"
    ).textContent =
        gain >
        0
            ? `You may reincarnate for ${gain} Dao Points.`
            : "Reach Immortal Realm to unlock Ascension.";


    const container =
        byId(
            "daoUpgradeList"
        );


    container.innerHTML =
        "";


    DAO_UPGRADES.forEach(
        upgrade => {

            const level =
                getDaoLevel(
                    upgrade.id
                );


            const cost =
                Math.floor(
                    upgrade.cost *
                    Math.pow(
                        1.75,
                        level
                    )
                );


            container.innerHTML +=
                `
                    <div class="dao-upgrade-card">

                        <h3>
                            ${upgrade.name}
                        </h3>

                        <p>
                            ${upgrade.description}
                        </p>

                        <div class="item-price">
                            Level ${level}
                            • ${cost} Dao Points
                        </div>

                        <button
                            data-dao="${upgrade.id}"
                            ${game.daoPoints < cost ? "disabled" : ""}
                        >
                            Comprehend
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-dao]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        upgradeDao(
                            button.dataset.dao
                        );

            }
        );

}



/* ========================================================= */
/* EQUIPMENT RENDER                                          */
/* ========================================================= */

function renderEquipment() {

    const weapons =
        byId(
            "weaponInventoryList"
        );


    weapons.innerHTML =
        "";


    if (
        game.weapons.length ===
        0
    ) {

        weapons.innerHTML =
            `
                <div class="benefit-card">
                    <p>No weapons obtained.</p>
                </div>
            `;

    }


    game.weapons
        .slice()
        .sort(
            (
                a,
                b
            ) =>
                b.power -
                a.power
        )
        .forEach(
            weapon => {

                const equipped =
                    weapon.id ===
                    game.equippedWeaponId;


                weapons.innerHTML +=
                    `
                        <div class="weapon-card ${equipped ? "equipped" : ""}">

                            <div>

                                <h3 class="rarity-${weapon.rarity.toLowerCase()}">
                                    ${weapon.rarity} ${weapon.name}
                                </h3>

                                <p>
                                    Combat Power +${formatNumber(weapon.power)}
                                </p>

                            </div>

                            <button
                                data-weapon="${weapon.id}"
                                ${equipped ? "disabled" : ""}
                            >
                                ${equipped ? "Equipped" : "Equip"}
                            </button>

                        </div>
                    `;

            }
        );


    const artifacts =
        byId(
            "artifactInventoryList"
        );


    artifacts.innerHTML =
        "";


    if (
        game.artifacts.length ===
        0
    ) {

        artifacts.innerHTML =
            `
                <div class="benefit-card">
                    <p>No artifacts obtained.</p>
                </div>
            `;

    }


    game.artifacts.forEach(
        artifact => {

            const equipped =
                artifact.id ===
                game.equippedArtifactId;


            artifacts.innerHTML +=
                `
                    <div class="weapon-card ${equipped ? "equipped" : ""}">

                        <div>

                            <h3 class="rarity-${artifact.rarity.toLowerCase()}">
                                ${artifact.rarity} ${artifact.name}
                            </h3>

                            <p>
                                ${artifact.effect.toUpperCase()}
                                +${Math.round(artifact.value * 100)}%
                            </p>

                        </div>

                        <button
                            data-artifact="${artifact.id}"
                            ${equipped ? "disabled" : ""}
                        >
                            ${equipped ? "Equipped" : "Equip"}
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-weapon]"
        )
        .forEach(
            button => {

                button.onclick =
                    () => {

                        equipWeapon(
                            button.dataset.weapon
                        );


                        renderEquipment();

                    };

            }
        );


    document
        .querySelectorAll(
            "[data-artifact]"
        )
        .forEach(
            button => {

                button.onclick =
                    () => {

                        equipArtifact(
                            button.dataset.artifact
                        );


                        renderEquipment();

                    };

            }
        );

}



/* ========================================================= */
/* STATUS                                                    */
/* ========================================================= */

function renderStatus() {

    byId(
        "statusNameDisplay"
    ).textContent =
        game.playerName;


    byId(
        "statusTitleDisplay"
    ).textContent =
        getActiveTitle().name;


    byId(
        "statusRealmDisplay"
    ).textContent =
        `${getRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "statusCombatDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "statusQiDisplay"
    ).textContent =
        `${formatNumber(getQiPerSecond())}/sec`;


    byId(
        "statusHealthDisplay"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "statusPetDisplay"
    ).textContent =
        getPet()
            ? `${getPet().name} Lv.${getPet().level}`
            : "None";


    byId(
        "statusArtifactDisplay"
    ).textContent =
        getArtifact()
            ? getArtifact().name
            : "None";


    byId(
        "statusCaveDisplay"
    ).textContent =
        getTotalCaveLevel();


    byId(
        "statusDaoDisplay"
    ).textContent =
        game.daoPoints;


    byId(
        "statusStoryDisplay"
    ).textContent =
        `${Math.min(game.storyChapter, STORY_CHAPTERS.length)} / ${STORY_CHAPTERS.length}`;


    byId(
        "statusTournamentDisplay"
    ).textContent =
        getTournamentRank().name;


    byId(
        "statusSecretDisplay"
    ).textContent =
        game.secretClears;


    byId(
        "statusAchievementDisplay"
    ).textContent =
        `${Object.keys(game.achievementsClaimed).filter(
            id =>
                game.achievementsClaimed[
                    id
                ]
        ).length} / ${ACHIEVEMENTS.length}`;

}



/* ========================================================= */
/* PILLS RENDER                                              */
/* ========================================================= */

function renderPills() {

    byId(
        "pillModalCultivationCount"
    ).textContent =
        `×${game.pills}`;


    byId(
        "pillModalHealingCount"
    ).textContent =
        `×${game.healingPills}`;


    byId(
        "pillModalBreakthroughCount"
    ).textContent =
        `×${game.breakthroughPills}`;

}



/* ========================================================= */
/* SETTINGS RENDER                                           */
/* ========================================================= */

function renderSettings() {

    const mappings = [

        [
            "soundToggleButton",
            "sound"
        ],

        [
            "musicToggleButton",
            "music"
        ],

        [
            "effectsToggleButton",
            "effects"
        ],

        [
            "floatingToggleButton",
            "floatingNumbers"
        ],

        [
            "compactToggleButton",
            "compact"
        ]

    ];


    mappings.forEach(
        (
            [
                id,
                key
            ]
        ) => {

            const button =
                byId(
                    id
                );


            const enabled =
                Boolean(
                    game.settings[
                        key
                    ]
                );


            button.textContent =
                enabled
                    ? "ON"
                    : "OFF";


            button.classList.toggle(
                "off",
                !enabled
            );

        }
    );


    document.body.classList.toggle(
        "compact-mode",
        game.settings.compact
    );

}



/* ========================================================= */
/* CULTIVATION LOG                                           */
/* ========================================================= */

function renderCultivationLog() {

    byId(
        "cultivationLog"
    ).innerHTML =
        game.log
            .filter(
                entry =>
                    !entry.message.startsWith(
                        "[WORLD]"
                    )
            )
            .map(
                entry =>
                    `
                        <div class="log-entry">

                            <span class="log-time">
                                ${entry.time}
                            </span>

                            <span class="${entry.important ? "log-important" : ""}">
                                ${entry.message}
                            </span>

                        </div>
                    `
            )
            .join(
                ""
            );

}



/* ========================================================= */
/* REALM PATH                                                */
/* ========================================================= */

function renderRealmPath() {

    byId(
        "realmPath"
    ).innerHTML =
        REALMS.map(
            (
                realm,
                index
            ) =>
                `
                    <div
                        class="realm-path-item ${
                            index ===
                            game.realmIndex
                                ? "current"
                                : index <
                                  game.realmIndex
                                    ? "completed"
                                    : ""
                        }"
                    >
                        ${
                            TRIBULATION_REALMS.includes(
                                index
                            )
                                ? "⚡ "
                                : ""
                        }${realm.name}
                    </div>
                `
        ).join(
            ""
        );

}



/* ========================================================= */
/* FULL RENDER                                               */
/* ========================================================= */

function render() {

    renderCore();


    renderTechniques();


    renderMartialSkills();


    renderAdventure();


    renderWorld();


    renderSecretRealms();


    renderPets();


    renderCave();


    renderSect();


    renderTournament();


    renderAlchemy();


    renderAuction();


    renderWorldBoss();


    renderAchievements();


    renderAscension();


    renderCultivationLog();


    renderRealmPath();


    renderStatus();


    renderPills();


    renderSettings();


    document
        .querySelectorAll(
            ".attribute-upgrade"
        )
        .forEach(
            button => {

                button.disabled =
                    game.statPoints <=
                    0;

            }
        );

}



/* ========================================================= */
/* SAVE                                                      */
/* ========================================================= */

function saveGame(
    show =
        false
) {

    game.lastPlayed =
        Date.now();


    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(
            game
        )
    );


    if (
        show
    ) {

        notify(
            "Cultivation progress saved."
        );

    }

}



/* ========================================================= */
/* LOAD                                                      */
/* ========================================================= */

function loadGame() {

    let saved =
        localStorage.getItem(
            SAVE_KEY
        );


    if (
        !saved
    ) {

        for (
            const key
            of OLD_SAVE_KEYS
        ) {

            saved =
                localStorage.getItem(
                    key
                );


            if (
                saved
            ) {

                break;

            }

        }

    }


    if (
        !saved
    ) {

        game =
            createDefaultState();


        game.health =
            getMaxHealth();


        return;

    }


    try {

        const parsed =
            JSON.parse(
                saved
            );


        const defaults =
            createDefaultState();


        game = {

            ...defaults,

            ...parsed,

            attributes: {

                ...defaults.attributes,

                ...(
                    parsed.attributes ||
                    {}
                )

            },

            herbs: {

                ...defaults.herbs,

                ...(
                    parsed.herbs ||
                    {}
                )

            },

            caveBuildings: {

                ...defaults.caveBuildings,

                ...(
                    parsed.caveBuildings ||
                    {}
                )

            },

            techniqueMastery: {

                ...defaults.techniqueMastery,

                ...(
                    parsed.techniqueMastery ||
                    {}
                )

            },

            skillMastery: {

                ...defaults.skillMastery,

                ...(
                    parsed.skillMastery ||
                    {}
                )

            },

            missionClaims: {

                ...defaults.missionClaims,

                ...(
                    parsed.missionClaims ||
                    {}
                )

            },

            zoneBossProgress: {

                ...defaults.zoneBossProgress,

                ...(
                    parsed.zoneBossProgress ||
                    {}
                )

            },

            sectDutyBaseline: {

                ...defaults.sectDutyBaseline,

                ...(
                    parsed.sectDutyBaseline ||
                    {}
                )

            },

            daoUpgrades: {

                ...defaults.daoUpgrades,

                ...(
                    parsed.daoUpgrades ||
                    {}
                )

            },

            npcAffinity: {

                ...defaults.npcAffinity,

                ...(
                    parsed.npcAffinity ||
                    {}
                )

            },

            npcRewardsClaimed: {

                ...defaults.npcRewardsClaimed,

                ...(
                    parsed.npcRewardsClaimed ||
                    {}
                )

            },

            inheritances: {

                ...defaults.inheritances,

                ...(
                    parsed.inheritances ||
                    {}
                )

            },

            achievementsClaimed: {

                ...defaults.achievementsClaimed,

                ...(
                    parsed.achievementsClaimed ||
                    {}
                )

            },

            settings: {

                ...defaults.settings,

                ...(
                    parsed.settings ||
                    {}
                )

            }

        };


        game.weapons =
            Array.isArray(
                game.weapons
            )
                ? game.weapons
                : [];


        game.artifacts =
            Array.isArray(
                game.artifacts
            )
                ? game.artifacts
                : [];


        game.pets =
            Array.isArray(
                game.pets
            )
                ? game.pets
                : [];


        game.battleLog =
            Array.isArray(
                game.battleLog
            )
                ? game.battleLog
                : [];


        game.log =
            Array.isArray(
                game.log
            )
                ? game.log
                : [];


        game.auctionListings =
            Array.isArray(
                game.auctionListings
            )
                ? game.auctionListings
                : [];


        game.auctionHistory =
            Array.isArray(
                game.auctionHistory
            )
                ? game.auctionHistory
                : [];


        game.currentEnemy =
            null;


        game.autoBattle =
            false;


        game.skillCooldowns =
            {};


        game.pendingTribulationRealm =
            null;


        game.health =
            clamp(
                game.health ||
                getMaxHealth(),
                1,
                getMaxHealth()
            );

    } catch (
        error
    ) {

        console.error(
            "Save loading failed:",
            error
        );


        game =
            createDefaultState();


        game.health =
            getMaxHealth();

    }

}



/* ========================================================= */
/* RESET                                                     */
/* ========================================================= */

function resetGame() {

    const confirmed =
        window.confirm(
            "Erase all cultivation progress and begin again?"
        );


    if (
        !confirmed
    ) {

        return;

    }


    stopAutoBattle();


    stopAmbientAudio();


    [
        SAVE_KEY,
        ...OLD_SAVE_KEYS
    ].forEach(
        key =>
            localStorage.removeItem(
                key
            )
    );


    location.reload();

}



/* ========================================================= */
/* NOTIFICATIONS                                             */
/* ========================================================= */

function notify(
    message,
    type =
        "success"
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        `notification ${type}`;


    element.textContent =
        message;


    byId(
        "notificationContainer"
    ).appendChild(
        element
    );


    setTimeout(
        () =>
            element.remove(),
        3400
    );

}



/* ========================================================= */
/* PARTICLES                                                 */
/* ========================================================= */

function createParticles() {

    const container =
        byId(
            "particles"
        );


    container.innerHTML =
        "";


    for (
        let i = 0;
        i <
        35;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        const size =
            1 +
            Math.random() *
            2;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${10 + Math.random() * 16}s`;


        particle.style.animationDelay =
            `${Math.random() * 10}s`;


        container.appendChild(
            particle
        );

    }

}



/* ========================================================= */
/* TOOLTIPS                                                  */
/* ========================================================= */

function initializeTooltips() {

    const tooltip =
        byId(
            "tooltip"
        );


    document.addEventListener(
        "mouseover",
        event => {

            const target =
                event.target.closest(
                    "[data-tooltip]"
                );


            if (
                !target
            ) {

                return;

            }


            tooltip.textContent =
                target.dataset.tooltip;


            tooltip.classList.remove(
                "hidden"
            );

        }
    );


    document.addEventListener(
        "mousemove",
        event => {

            if (
                tooltip.classList.contains(
                    "hidden"
                )
            ) {

                return;

            }


            tooltip.style.left =
                `${event.clientX + 14}px`;


            tooltip.style.top =
                `${event.clientY + 14}px`;

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            const target =
                event.target.closest(
                    "[data-tooltip]"
                );


            if (
                !target
            ) {

                return;

            }


            tooltip.classList.add(
                "hidden"
            );

        }
    );

}



/* ========================================================= */
/* SETTINGS                                                  */
/* ========================================================= */

function toggleSetting(key) {

    game.settings[
        key
    ] =
        !game.settings[
            key
        ];


    if (
        key ===
        "music"
    ) {

        if (
            game.settings.music
        ) {

            startAmbientAudio();

        } else {

            stopAmbientAudio();

        }

    }


    saveGame();


    renderSettings();

}



/* ========================================================= */
/* EVENTS                                                    */
/* ========================================================= */

document
    .querySelectorAll(
        ".nav-button"
    )
    .forEach(
        button => {

            button.onclick =
                () =>
                    openPage(
                        button.dataset.page
                    );

        }
    );


byId(
    "cultivateButton"
).onclick =
    manuallyCultivate;


byId(
    "breakthroughButton"
).onclick =
    attemptBreakthrough;


byId(
    "signInButton"
).onclick =
    claimDailyReward;


byId(
    "openPillsButton"
).onclick =
    () => {

        renderPills();


        byId(
            "pillModal"
        ).classList.remove(
            "hidden"
        );

    };


byId(
    "modalUseCultivationPill"
).onclick =
    useCultivationPill;


byId(
    "modalUseHealingPill"
).onclick =
    useHealingPill;


byId(
    "modalUseBreakthroughPill"
).onclick =
    useBreakthroughPill;


byId(
    "closePillButton"
).onclick =
    () =>
        byId(
            "pillModal"
        ).classList.add(
            "hidden"
        );


document
    .querySelectorAll(
        ".attribute-upgrade"
    )
    .forEach(
        button => {

            button.onclick =
                () =>
                    upgradeAttribute(
                        button.dataset.stat
                    );

        }
    );


/* ADVENTURE */

byId(
    "exploreButton"
).onclick =
    exploreZone;


byId(
    "attackButton"
).onclick =
    () =>
        basicAttack(
            false
        );


byId(
    "spiritualAttackButton"
).onclick =
    () =>
        basicAttack(
            true
        );


byId(
    "battleHealButton"
).onclick =
    useHealingPill;


byId(
    "fleeButton"
).onclick =
    fleeBattle;


byId(
    "autoBattleButton"
).onclick =
    toggleAutoBattle;


/* STORY */

byId(
    "advanceStoryButton"
).onclick =
    advanceStory;


/* NPC */

byId(
    "talkNpcButton"
).onclick =
    talkNpc;


byId(
    "giftNpcButton"
).onclick =
    giftNpc;


byId(
    "closeNpcModalButton"
).onclick =
    () =>
        byId(
            "npcModal"
        ).classList.add(
            "hidden"
        );


/* PET */

byId(
    "hatchPetButton"
).onclick =
    hatchSpiritEgg;


/* AUCTION */

byId(
    "manualAuctionRefreshButton"
).onclick =
    () =>
        refreshAuctionListings(
            true
        );


/* WORLD BOSS */

byId(
    "attackWorldBossButton"
).onclick =
    attackWorldBoss;


byId(
    "claimWorldBossRewardButton"
).onclick =
    claimWorldBossReward;


/* ASCENSION */

byId(
    "ascendButton"
).onclick =
    ascend;


/* TRIBULATION */

byId(
    "faceTribulationButton"
).onclick =
    faceTribulation;


/* EQUIPMENT */

byId(
    "openInventoryButton"
).onclick =
    () => {

        renderEquipment();


        byId(
            "equipmentModal"
        ).classList.remove(
            "hidden"
        );

    };


byId(
    "closeEquipmentButton"
).onclick =
    () =>
        byId(
            "equipmentModal"
        ).classList.add(
            "hidden"
        );


/* STATUS */

byId(
    "statusButton"
).onclick =
    () => {

        renderStatus();


        byId(
            "statusModal"
        ).classList.remove(
            "hidden"
        );

    };


byId(
    "closeStatusButton"
).onclick =
    () =>
        byId(
            "statusModal"
        ).classList.add(
            "hidden"
        );


/* SETTINGS */

byId(
    "settingsButton"
).onclick =
    () => {

        renderSettings();


        byId(
            "settingsModal"
        ).classList.remove(
            "hidden"
        );

    };


byId(
    "closeSettingsButton"
).onclick =
    () =>
        byId(
            "settingsModal"
        ).classList.add(
            "hidden"
        );


byId(
    "soundToggleButton"
).onclick =
    () =>
        toggleSetting(
            "sound"
        );


byId(
    "musicToggleButton"
).onclick =
    () =>
        toggleSetting(
            "music"
        );


byId(
    "effectsToggleButton"
).onclick =
    () =>
        toggleSetting(
            "effects"
        );


byId(
    "floatingToggleButton"
).onclick =
    () =>
        toggleSetting(
            "floatingNumbers"
        );


byId(
    "compactToggleButton"
).onclick =
    () =>
        toggleSetting(
            "compact"
        );


/* SAVE */

byId(
    "saveButton"
).onclick =
    () =>
        saveGame(
            true
        );


byId(
    "resetButton"
).onclick =
    resetGame;


byId(
    "claimOfflineButton"
).onclick =
    claimOfflineProgress;



/* ========================================================= */
/* MODAL BACKGROUND CLOSE                                    */
/* ========================================================= */

[
    "statusModal",

    "equipmentModal",

    "pillModal",

    "npcModal",

    "settingsModal"

].forEach(
    id => {

        byId(
            id
        ).addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    byId(
                        id
                    )
                ) {

                    byId(
                        id
                    ).classList.add(
                        "hidden"
                    );

                }

            }
        );

    }
);



/* ========================================================= */
/* GLOBAL CLICK SOUND                                        */
/* ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "button"
            ) &&
            !event.target.disabled
        ) {

            ensureAudioContext();

        }

    }
);



/* ========================================================= */
/* UNLOAD                                                    */
/* ========================================================= */

window.addEventListener(
    "beforeunload",
    saveGame
);



/* ========================================================= */
/* INITIALIZE                                                */
/* ========================================================= */

function initialize() {

    loadGame();


    initializeAuction();


    initializeWorldBoss();


    calculateOfflineProgress();


    createParticles();


    initializeTooltips();


    render();


    if (
        game.settings.music
    ) {

        document.addEventListener(
            "click",
            function startMusicOnce() {

                startAmbientAudio();


                document.removeEventListener(
                    "click",
                    startMusicOnce
                );

            }
        );

    }


    setInterval(
        gameTick,
        TICK_RATE
    );


    setInterval(
        () =>
            saveGame(),
        AUTO_SAVE_INTERVAL
    );

}


initialize();
