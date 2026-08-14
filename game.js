"use strict";


/* ========================================================= */
/* SAVE CONFIG                                               */
/* ========================================================= */

const SAVE_KEY =
    "idleCultivationSaveV6";


const OLD_SAVE_KEYS = [
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


const MAX_OFFLINE_SECONDS =
    60 * 60 * 12;


/* ========================================================= */
/* REALMS                                                    */
/* ========================================================= */

const REALMS = [

    {
        name: "Mortal",
        baseRequirement: 100,
        qiMultiplier: 1,
        combatMultiplier: 1
    },

    {
        name: "Body Tempering",
        baseRequirement: 300,
        qiMultiplier: 1.5,
        combatMultiplier: 2
    },

    {
        name: "Qi Refining",
        baseRequirement: 900,
        qiMultiplier: 2.5,
        combatMultiplier: 4
    },

    {
        name: "Foundation Establishment",
        baseRequirement: 2500,
        qiMultiplier: 4,
        combatMultiplier: 8
    },

    {
        name: "Golden Core",
        baseRequirement: 7000,
        qiMultiplier: 7,
        combatMultiplier: 15
    },

    {
        name: "Nascent Soul",
        baseRequirement: 20000,
        qiMultiplier: 12,
        combatMultiplier: 30
    },

    {
        name: "Soul Transformation",
        baseRequirement: 60000,
        qiMultiplier: 20,
        combatMultiplier: 60
    },

    {
        name: "Void Refining",
        baseRequirement: 180000,
        qiMultiplier: 35,
        combatMultiplier: 120
    },

    {
        name: "Integration",
        baseRequirement: 550000,
        qiMultiplier: 60,
        combatMultiplier: 250
    },

    {
        name: "Mahayana",
        baseRequirement: 1700000,
        qiMultiplier: 100,
        combatMultiplier: 500
    },

    {
        name: "Tribulation Transcendence",
        baseRequirement: 5000000,
        qiMultiplier: 175,
        combatMultiplier: 1000
    },

    {
        name: "Immortal",
        baseRequirement: 15000000,
        qiMultiplier: 300,
        combatMultiplier: 2500
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
/* ROOTS                                                     */
/* ========================================================= */

const SPIRITUAL_ROOTS = [

    {
        name: "Five Element Root",
        qiBonus: 0.05,
        breakthroughBonus: 0
    },

    {
        name: "Dual Spiritual Root",
        qiBonus: 0.12,
        breakthroughBonus: 2
    },

    {
        name: "Heavenly Spiritual Root",
        qiBonus: 0.25,
        breakthroughBonus: 5
    },

    {
        name: "Sword Spiritual Root",
        qiBonus: 0.30,
        breakthroughBonus: 5
    },

    {
        name: "Primordial Chaos Root",
        qiBonus: 0.50,
        breakthroughBonus: 10
    },

    {
        name: "Dao Origin Root",
        qiBonus: 0.75,
        breakthroughBonus: 15
    }

];


/* ========================================================= */
/* CULTIVATION TECHNIQUES                                    */
/* ========================================================= */

const TECHNIQUES = [

    {
        id: "mortal-breathing",
        name: "Mortal Breathing Art",
        rank: "Mortal",
        qiBonus: 0,
        soulBonus: 0,
        unlockRealm: 0
    },

    {
        id: "jade-cloud",
        name: "Jade Cloud Scripture",
        rank: "Yellow",
        qiBonus: 0.20,
        soulBonus: 0.05,
        unlockRealm: 1
    },

    {
        id: "azure-heaven",
        name: "Azure Heaven Art",
        rank: "Profound",
        qiBonus: 0.45,
        soulBonus: 0.10,
        unlockRealm: 2
    },

    {
        id: "nine-suns",
        name: "Nine Suns Immortal Scripture",
        rank: "Earth",
        qiBonus: 0.80,
        soulBonus: 0.15,
        unlockRealm: 4
    },

    {
        id: "chaos-devouring",
        name: "Chaos Devouring Art",
        rank: "Heaven",
        qiBonus: 1.30,
        soulBonus: 0.25,
        unlockRealm: 6
    },

    {
        id: "primordial-dao",
        name: "Primordial Dao Scripture",
        rank: "Immortal",
        qiBonus: 2,
        soulBonus: 0.50,
        unlockRealm: 9
    }

];


/* ========================================================= */
/* MARTIAL SKILLS                                            */
/* ========================================================= */

const MARTIAL_SKILLS = [

    {
        id: "heavy-palm",
        name: "Mountain Crushing Palm",
        type: "Strength",
        unlockRealm: 0,
        damageMultiplier: 1.35,
        cooldown: 2
    },

    {
        id: "spirit-blade",
        name: "Spirit Blade Slash",
        type: "Sword",
        unlockRealm: 1,
        damageMultiplier: 1.65,
        cooldown: 3
    },

    {
        id: "soul-pierce",
        name: "Soul Piercing Finger",
        type: "Soul",
        unlockRealm: 2,
        damageMultiplier: 1.95,
        cooldown: 4
    },

    {
        id: "azure-sword",
        name: "Azure Heaven Sword Art",
        type: "Sword",
        unlockRealm: 3,
        damageMultiplier: 2.4,
        cooldown: 5
    },

    {
        id: "dragon-fist",
        name: "True Dragon Fist",
        type: "Strength",
        unlockRealm: 4,
        damageMultiplier: 3,
        cooldown: 6
    },

    {
        id: "nine-sun-burst",
        name: "Nine Suns Heavenly Burst",
        type: "Soul",
        unlockRealm: 5,
        damageMultiplier: 3.8,
        cooldown: 7
    },

    {
        id: "void-severing",
        name: "Void Severing Sword",
        type: "Sword",
        unlockRealm: 6,
        damageMultiplier: 5,
        cooldown: 8
    },

    {
        id: "chaos-palm",
        name: "Primordial Chaos Palm",
        type: "Soul",
        unlockRealm: 8,
        damageMultiplier: 7,
        cooldown: 10
    }

];


/* ========================================================= */
/* RARITIES                                                  */
/* ========================================================= */

const RARITIES = [

    {
        name: "Common",
        weight: 46,
        multiplier: 1,
        sellMultiplier: 1
    },

    {
        name: "Uncommon",
        weight: 28,
        multiplier: 1.8,
        sellMultiplier: 1.8
    },

    {
        name: "Rare",
        weight: 15,
        multiplier: 3,
        sellMultiplier: 3
    },

    {
        name: "Epic",
        weight: 7,
        multiplier: 5,
        sellMultiplier: 6
    },

    {
        name: "Legendary",
        weight: 3.5,
        multiplier: 9,
        sellMultiplier: 12
    },

    {
        name: "Mythic",
        weight: 0.5,
        multiplier: 18,
        sellMultiplier: 25
    }

];


/* ========================================================= */
/* WEAPONS                                                   */
/* ========================================================= */

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


/* ========================================================= */
/* ARTIFACTS                                                 */
/* ========================================================= */

const ARTIFACT_NAMES = {

    Common: [
        "Spirit Jade Pendant",
        "Iron Soul Bell",
        "Meditation Bead"
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
        "Heavenly Tribulation Pearl"
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
    "tribulation"
];


/* ========================================================= */
/* SPIRIT PETS                                               */
/* ========================================================= */

const PET_TEMPLATES = [

    {
        name: "Spirit Fox",
        icon: "🦊",
        rarity: "Common",
        qiBonus: 0.05,
        combatBonus: 0,
        herbBonus: 0.05
    },

    {
        name: "Cloud Crane",
        icon: "🕊️",
        rarity: "Uncommon",
        qiBonus: 0.08,
        combatBonus: 0.03,
        herbBonus: 0.08
    },

    {
        name: "Thunder Tiger",
        icon: "🐯",
        rarity: "Rare",
        qiBonus: 0,
        combatBonus: 0.15,
        herbBonus: 0
    },

    {
        name: "Jade Serpent",
        icon: "🐍",
        rarity: "Rare",
        qiBonus: 0.12,
        combatBonus: 0.06,
        herbBonus: 0.08
    },

    {
        name: "Golden Crow",
        icon: "🐦‍🔥",
        rarity: "Epic",
        qiBonus: 0.18,
        combatBonus: 0.16,
        herbBonus: 0
    },

    {
        name: "Azure Dragon",
        icon: "🐉",
        rarity: "Legendary",
        qiBonus: 0.25,
        combatBonus: 0.30,
        herbBonus: 0.12
    },

    {
        name: "Primordial Qilin",
        icon: "🦄",
        rarity: "Mythic",
        qiBonus: 0.40,
        combatBonus: 0.45,
        herbBonus: 0.20
    }

];


/* ========================================================= */
/* CAVE BUILDINGS                                            */
/* ========================================================= */

const CAVE_BUILDINGS = [

    {
        id: "spirit-array",
        name: "Spirit Gathering Array",
        description:
            "Increases automatic Qi generation.",
        baseCost: 250
    },

    {
        id: "alchemy-room",
        name: "Alchemy Chamber",
        description:
            "Improves herb gathering and alchemy success.",
        baseCost: 300
    },

    {
        id: "beast-pen",
        name: "Spirit Beast Pen",
        description:
            "Strengthens active Spirit Pet bonuses.",
        baseCost: 400
    },

    {
        id: "training-hall",
        name: "Martial Training Hall",
        description:
            "Improves Combat Power and passive health regeneration.",
        baseCost: 450
    }

];


/* ========================================================= */
/* DAO UPGRADES                                              */
/* ========================================================= */

const DAO_UPGRADES = [

    {
        id: "dao-qi",
        name: "Dao of Spiritual Energy",
        description:
            "+10% permanent Qi generation per level.",
        baseCost: 2
    },

    {
        id: "dao-combat",
        name: "Dao of Battle",
        description:
            "+10% permanent Combat Power per level.",
        baseCost: 2
    },

    {
        id: "dao-fortune",
        name: "Dao of Fortune",
        description:
            "+5% rare loot chance per level.",
        baseCost: 3
    },

    {
        id: "dao-vitality",
        name: "Dao of Vitality",
        description:
            "+10% maximum health per level.",
        baseCost: 2
    }

];


/* ========================================================= */
/* HERBS                                                     */
/* ========================================================= */

const HERBS = [

    {
        id: "spirit-grass",
        name: "Spirit Grass",
        icon: "🌿"
    },

    {
        id: "blood-ginseng",
        name: "Blood Ginseng",
        icon: "🌱"
    },

    {
        id: "moon-flower",
        name: "Moon Flower",
        icon: "🌸"
    },

    {
        id: "fire-root",
        name: "Fire Root",
        icon: "🔥"
    },

    {
        id: "jade-leaf",
        name: "Jade Leaf",
        icon: "🍃"
    },

    {
        id: "soul-orchid",
        name: "Soul Orchid",
        icon: "🪻"
    }

];


/* ========================================================= */
/* ALCHEMY                                                   */
/* ========================================================= */

const ALCHEMY_RECIPES = [

    {
        id: "qi-pill",
        name: "Qi Gathering Pill",
        unlockLevel: 0,
        baseChance: 90,

        materials: {
            "spirit-grass": 3,
            "jade-leaf": 1
        },

        result: {
            pills: 1
        }
    },

    {
        id: "healing-pill",
        name: "Healing Pill",
        unlockLevel: 0,
        baseChance: 88,

        materials: {
            "spirit-grass": 2,
            "blood-ginseng": 2
        },

        result: {
            healingPills: 1
        }
    },

    {
        id: "meridian-pill",
        name: "Meridian Tempering Pill",
        unlockLevel: 1,
        baseChance: 75,

        materials: {
            "blood-ginseng": 3,
            "fire-root": 2,
            "jade-leaf": 1
        },

        result: {
            statPoints: 1
        }
    },

    {
        id: "soul-pill",
        name: "Soul Nourishing Pill",
        unlockLevel: 2,
        baseChance: 62,

        materials: {
            "moon-flower": 3,
            "soul-orchid": 2,
            "jade-leaf": 2
        },

        result: {
            soul: 1
        }
    },

    {
        id: "foundation-pill",
        name: "Foundation Stabilizing Pill",
        unlockLevel: 3,
        baseChance: 50,

        materials: {
            "fire-root": 4,
            "blood-ginseng": 4,
            "soul-orchid": 2
        },

        result: {
            breakthroughPills: 1
        }
    }

];


const ALCHEMY_LEVELS = [

    {
        name: "Novice Alchemist",
        required: 0
    },

    {
        name: "Apprentice Alchemist",
        required: 100
    },

    {
        name: "Grade 1 Alchemist",
        required: 300
    },

    {
        name: "Grade 2 Alchemist",
        required: 700
    },

    {
        name: "Grade 3 Alchemist",
        required: 1500
    },

    {
        name: "Alchemy Master",
        required: 3500
    }

];


/* ========================================================= */
/* SECT                                                      */
/* ========================================================= */

const SECT_RANKS = [

    {
        name: "Outer Disciple",
        contributionRequired: 0,
        qiBonus: 0,
        treasuryDiscount: 0
    },

    {
        name: "Inner Disciple",
        contributionRequired: 500,
        qiBonus: 0.05,
        treasuryDiscount: 0.05
    },

    {
        name: "Core Disciple",
        contributionRequired: 2000,
        qiBonus: 0.12,
        treasuryDiscount: 0.10
    },

    {
        name: "Personal Disciple",
        contributionRequired: 6000,
        qiBonus: 0.20,
        treasuryDiscount: 0.15
    },

    {
        name: "Sect Elder",
        contributionRequired: 15000,
        qiBonus: 0.35,
        treasuryDiscount: 0.20
    },

    {
        name: "Grand Elder",
        contributionRequired: 40000,
        qiBonus: 0.55,
        treasuryDiscount: 0.25
    }

];


const SECT_TREASURY = [

    {
        id: "cultivation-pill",
        name: "Cultivation Pill",
        cost: 60
    },

    {
        id: "healing-pill",
        name: "Healing Pill",
        cost: 45
    },

    {
        id: "herb-pack",
        name: "Spirit Herb Pack",
        cost: 80
    },

    {
        id: "attribute-point",
        name: "Body Tempering Essence",
        cost: 300
    },

    {
        id: "sect-weapon",
        name: "Sect Treasure Weapon",
        cost: 900
    }

];


const SECT_DUTIES = [

    {
        id: "patrol",
        name: "Mountain Patrol",
        type: "expeditions",
        target: 3,
        contribution: 60
    },

    {
        id: "beasts",
        name: "Beast Extermination",
        type: "kills",
        target: 5,
        contribution: 120
    },

    {
        id: "herbs",
        name: "Medicinal Gathering",
        type: "herbs",
        target: 8,
        contribution: 150
    },

    {
        id: "boss",
        name: "Eliminate Region Lord",
        type: "bosses",
        target: 1,
        contribution: 300
    }

];


/* ========================================================= */
/* ZONES                                                     */
/* ========================================================= */

const ZONES = [

    {
        id: "misty-forest",
        name: "Misty Forest",
        requiredRealm: 0,
        powerMultiplier: 0.65,
        stoneMultiplier: 1,
        herbTier: 1,

        description:
            "A forest filled with weak spirit beasts.",

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
        id: "spirit-mountain",
        name: "Spirit Mountain",
        requiredRealm: 1,
        powerMultiplier: 1.25,
        stoneMultiplier: 2,
        herbTier: 2,

        description:
            "A mountain rich in spiritual Qi.",

        enemies: [
            "Rockback Ape",
            "Storm Eagle",
            "Ironhide Bear"
        ],

        boss:
            "Golden-Eyed Mountain Ape"
    },

    {
        id: "blood-valley",
        name: "Blood Moon Valley",
        requiredRealm: 2,
        powerMultiplier: 2,
        stoneMultiplier: 4,
        herbTier: 3,

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
        id: "ancient-ruins",
        name: "Ancient Sect Ruins",
        requiredRealm: 3,
        powerMultiplier: 3.6,
        stoneMultiplier: 7,
        herbTier: 4,

        description:
            "Ruins containing forgotten treasures.",

        enemies: [
            "Ancient Guardian",
            "Sword Puppet",
            "Stone Golem"
        ],

        boss:
            "Ancient Sect Guardian"
    },

    {
        id: "dragon-abyss",
        name: "Dragon Abyss",
        requiredRealm: 4,
        powerMultiplier: 6,
        stoneMultiplier: 12,
        herbTier: 5,

        description:
            "An abyss carrying ancient dragon blood.",

        enemies: [
            "Abyss Drake",
            "Dragonblood Serpent",
            "Dragonbone Wraith"
        ],

        boss:
            "Ancient Abyss Dragon"
    },

    {
        id: "void-rift",
        name: "Void Rift",
        requiredRealm: 6,
        powerMultiplier: 15,
        stoneMultiplier: 30,
        herbTier: 6,

        description:
            "A dimensional rift filled with void creatures.",

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
        id: "first-blood",
        name: "Outer Sect Trial",
        type: "kills",
        target: 5,

        reward: {
            stones: 250,
            pills: 1,
            statPoints: 2
        }
    },

    {
        id: "hunter",
        name: "Spirit Beast Hunter",
        type: "kills",
        target: 15,

        reward: {
            stones: 700,
            healingPills: 2,
            statPoints: 3
        }
    },

    {
        id: "boss-killer",
        name: "Slay a Region Lord",
        type: "bosses",
        target: 1,

        reward: {
            stones: 1200,
            weapon: true,
            egg: 1
        }
    }

];


/* ========================================================= */
/* MARKET                                                    */
/* ========================================================= */

const MARKET_ITEMS = [

    {
        id: "cultivation-pill",
        name: "Cultivation Pill",
        price: 180
    },

    {
        id: "healing-pill",
        name: "Healing Pill",
        price: 130
    },

    {
        id: "herb-pack",
        name: "Herb Bundle",
        price: 220
    },

    {
        id: "weapon-box",
        name: "Mystery Weapon Chest",
        price: 1500
    },

    {
        id: "egg",
        name: "Spirit Beast Egg",
        price: 2200
    },

    {
        id: "artifact-box",
        name: "Artifact Chest",
        price: 3200
    }

];


/* ========================================================= */
/* DAILY                                                     */
/* ========================================================= */

const DAILY_REWARDS = [

    {
        stones: 100
    },

    {
        pills: 1
    },

    {
        herbs: 4
    },

    {
        healingPills: 2
    },

    {
        eggs: 1
    },

    {
        statPoints: 3
    },

    {
        artifact: true
    }

];


/* ========================================================= */
/* DEFAULT STATE                                             */
/* ========================================================= */

function createDefaultState() {

    return {

        playerName:
            "Jiang Chue",

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

            strength: 10,
            constitution: 10,
            soul: 10

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

            "spirit-grass": 0,
            "blood-ginseng": 0,
            "moon-flower": 0,
            "fire-root": 0,
            "jade-leaf": 0,
            "soul-orchid": 0

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

        dailyStreak:
            0,

        lastSignIn:
            null,

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

        missionClaims:
            {},

        zoneBossProgress:
            {},

        battleLog:
            [],

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


let pendingOffline = {

    qi:
        0,

    stones:
        0,

    herbs:
        0

};


let autoBattleTimer =
    null;


/* ========================================================= */
/* HELPERS                                                   */
/* ========================================================= */

function byId(id) {

    return document.getElementById(id);

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


function getDateString(date) {

    const y =
        date.getFullYear();


    const m =
        String(
            date.getMonth() +
            1
        ).padStart(
            2,
            "0"
        );


    const d =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${y}-${m}-${d}`;

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

        {
            v: 1e15,
            s: "Qa"
        },

        {
            v: 1e12,
            s: "T"
        },

        {
            v: 1e9,
            s: "B"
        },

        {
            v: 1e6,
            s: "M"
        },

        {
            v: 1e3,
            s: "K"
        }

    ];


    for (
        const unit
        of units
    ) {

        if (
            number >=
            unit.v
        ) {

            return (
                (
                    number /
                    unit.v
                ).toFixed(
                    1
                ) +
                unit.s
            );

        }

    }


    return String(
        Math.floor(
            number
        )
    );

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
/* BASIC GETTERS                                             */
/* ========================================================= */

function getCurrentRealm() {

    return REALMS[
        game.realmIndex
    ];

}


function getRoot() {

    return (
        SPIRITUAL_ROOTS.find(
            item =>
                item.name ===
                game.spiritualRoot
        ) ||
        SPIRITUAL_ROOTS[0]
    );

}


function getTechnique() {

    return (
        TECHNIQUES.find(
            item =>
                item.id ===
                game.activeTechnique
        ) ||
        TECHNIQUES[0]
    );

}


function getWeapon() {

    return (
        game.weapons.find(
            item =>
                item.id ===
                game.equippedWeaponId
        ) ||
        null
    );

}


function getArtifact() {

    return (
        game.artifacts.find(
            item =>
                item.id ===
                game.equippedArtifactId
        ) ||
        null
    );

}


function getActivePet() {

    return (
        game.pets.find(
            item =>
                item.id ===
                game.activePetId
        ) ||
        null
    );

}


function getSelectedZone() {

    return (
        ZONES.find(
            item =>
                item.id ===
                game.selectedZone
        ) ||
        ZONES[0]
    );

}


/* ========================================================= */
/* DAO BONUSES                                               */
/* ========================================================= */

function getDaoUpgradeLevel(id) {

    return (
        game.daoUpgrades[
            id
        ] ||
        0
    );

}


function getDaoQiBonus() {

    return (
        getDaoUpgradeLevel(
            "dao-qi"
        ) *
        0.10
    );

}


function getDaoCombatBonus() {

    return (
        getDaoUpgradeLevel(
            "dao-combat"
        ) *
        0.10
    );

}


function getDaoFortuneBonus() {

    return (
        getDaoUpgradeLevel(
            "dao-fortune"
        ) *
        0.05
    );

}


function getDaoVitalityBonus() {

    return (
        getDaoUpgradeLevel(
            "dao-vitality"
        ) *
        0.10
    );

}


/* ========================================================= */
/* CAVE BONUSES                                              */
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
                total,
                value
            ) =>
                total +
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


function getCavePetBonus() {

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


function getHealthRegenPerSecond() {

    return (
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
        )
    );

}


/* ========================================================= */
/* PET BONUSES                                               */
/* ========================================================= */

function getPetBonus(type) {

    const pet =
        getActivePet();


    if (
        !pet
    ) {

        return 0;

    }


    const levelMultiplier =
        1 +
        (
            pet.level -
            1
        ) *
        0.05;


    const caveMultiplier =
        getCavePetBonus();


    return (
        (
            pet[
                type
            ] ||
            0
        ) *
        levelMultiplier *
        caveMultiplier
    );

}


/* ========================================================= */
/* ARTIFACT BONUSES                                          */
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
/* PLAYER CALCULATIONS                                      */
/* ========================================================= */

function getMaxHealth() {

    const normal =
        100 +
        game.attributes.constitution *
        10 +
        game.realmIndex *
        80 +
        game.stageIndex *
        25;


    return Math.floor(
        normal *
        (
            1 +
            getDaoVitalityBonus()
        )
    );

}


function getQiRequirement() {

    return Math.floor(
        getCurrentRealm()
            .baseRequirement *
        (
            1 +
            game.stageIndex *
            0.65
        )
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
                rank.contributionRequired
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


function getQiPerSecond() {

    const realm =
        getCurrentRealm();


    const technique =
        getTechnique();


    const root =
        getRoot();


    let value =
        realm.qiMultiplier;


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
        root.qiBonus;


    value *=
        1 +
        technique.qiBonus;


    value *=
        1 +
        getTechniqueMastery() *
        0.002;


    value *=
        1 +
        getSectRank()
            .qiBonus;


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


    return value;

}


function getCombatPower() {

    const weapon =
        getWeapon();


    let value =
        10 *
        getCurrentRealm()
            .combatMultiplier;


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


    return Math.floor(
        value
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
            .breakthroughBonus;


    chance +=
        Math.max(
            0,
            game.attributes.constitution -
            10
        ) *
        0.3;


    chance +=
        game.breakthroughBuff;


    return Math.max(
        35,
        Math.min(
            100,
            chance
        )
    );

}


/* ========================================================= */
/* CULTIVATION                                               */
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


function manuallyCultivate(event) {

    const amount =
        getQiPerSecond() *
        2.5;


    addQi(
        amount
    );


    increaseTechniqueMastery(
        0.12
    );


    createFloatingQi(
        event,
        amount
    );


    render();

}


function increaseTechniqueMastery(amount) {

    game.techniqueMastery[
        game.activeTechnique
    ] =
        Math.min(
            100,
            getTechniqueMastery() +
            amount
        );

}


/* ========================================================= */
/* BREAKTHROUGH                                             */
/* ========================================================= */

function attemptBreakthrough() {

    const requirement =
        getQiRequirement();


    if (
        game.qi <
        requirement
    ) {

        notify(
            "Not enough Qi.",
            "error"
        );

        return;

    }


    if (
        Math.random() *
        100 >
        getBreakthroughChance()
    ) {

        game.qi -=
            requirement *
            0.12;


        game.health =
            Math.max(
                1,
                game.health -
                getMaxHealth() *
                0.10
            );


        game.breakthroughBuff =
            0;


        notify(
            "Breakthrough failed.",
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


        notify(
            `Reached ${STAGES[game.stageIndex]}.`,
            "success"
        );

    } else {

        if (
            game.realmIndex <
            REALMS.length -
            1
        ) {

            game.realmIndex +=
                1;


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


            notify(
                `Realm breakthrough — ${getCurrentRealm().name}!`,
                "success"
            );


            addLog(
                `Jiang Chue entered ${getCurrentRealm().name}.`,
                true
            );

        }

    }


    saveGame();

    render();

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


    saveGame();

    render();

}


/* ========================================================= */
/* TECHNIQUES                                                */
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


    addQi(
        Math.max(
            100,
            getQiRequirement() *
            0.35
        )
    );


    saveGame();

    render();

}


function useHealingPill() {

    if (
        game.healingPills <=
        0
    ) {

        return false;

    }


    game.healingPills -=
        1;


    game.health =
        Math.min(
            getMaxHealth(),
            game.health +
            getMaxHealth() *
            0.45
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


    saveGame();

    render();

}


/* ========================================================= */
/* RARITY                                                   */
/* ========================================================= */

function chooseRarity() {

    const fortune =
        getDaoFortuneBonus();


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
        0.04 +
        fortune *
        0.08
    ) {

        return RARITIES[4];

    }


    if (
        roll <
        0.12 +
        fortune *
        0.10
    ) {

        return RARITIES[3];

    }


    if (
        roll <
        0.30 +
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
/* WEAPON                                                    */
/* ========================================================= */

function generateWeapon() {

    const rarity =
        chooseRarity();


    const names =
        WEAPON_NAMES[
            rarity.name
        ];


    return {

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

}


function equipWeapon(id) {

    game.equippedWeaponId =
        id;


    saveGame();

    render();

}


/* ========================================================= */
/* ARTIFACTS                                                 */
/* ========================================================= */

function generateArtifact() {

    const rarity =
        chooseRarity();


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


    let value =
        0.03 *
        rarity.multiplier;


    value =
        Math.min(
            1.5,
            value
        );


    return {

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

        value

    };

}


function equipArtifact(id) {

    game.equippedArtifactId =
        id;


    saveGame();

    render();

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
            2 +
            Math.floor(
                Math.random() *
                2
            );

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
            1,

        exp:
            0

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
        "success"
    );


    saveGame();

    render();

}


function summonPet(id) {

    game.activePetId =
        id;


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


    saveGame();

    render();

}


/* ========================================================= */
/* CAVE                                                     */
/* ========================================================= */

function upgradeCaveBuilding(id) {

    const building =
        CAVE_BUILDINGS.find(
            item =>
                item.id ===
                id
        );


    const current =
        getCaveLevel(
            id
        );


    const cost =
        Math.floor(
            building.baseCost *
            Math.pow(
                1.85,
                current -
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


    notify(
        `${building.name} upgraded to Level ${game.caveBuildings[id]}.`,
        "success"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* EXPLORATION                                               */
/* ========================================================= */

function selectZone(id) {

    const zone =
        ZONES.find(
            item =>
                item.id ===
                id
        );


    if (
        !zone ||
        game.realmIndex <
        zone.requiredRealm ||
        game.autoBattle
    ) {

        return;

    }


    game.selectedZone =
        id;


    render();

}


function exploreZone() {

    if (
        game.currentEnemy
    ) {

        return;

    }


    const zone =
        getSelectedZone();


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
                zone.stoneMultiplier
            );


        game.spiritStones +=
            stones;

    } else if (
        roll <
        0.88
    ) {

        game.pills +=
            1;

    } else if (
        roll <
        0.93
    ) {

        game.healingPills +=
            1;

    } else if (
        roll <
        0.965
    ) {

        game.weapons.push(
            generateWeapon()
        );

    } else if (
        roll <
        0.99
    ) {

        game.artifacts.push(
            generateArtifact()
        );

    } else {

        game.spiritEggs +=
            1;


        notify(
            "A rare Spirit Beast Egg was discovered!",
            "success"
        );

    }


    saveGame();

    render();

}


/* ========================================================= */
/* HERB GATHERING                                            */
/* ========================================================= */

function gatherHerbs(zone) {

    let amount =
        1 +
        Math.floor(
            Math.random() *
            Math.max(
                2,
                zone.herbTier
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
                zone.herbTier +
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
        zone.powerMultiplier *
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

        power:
            Math.max(
                8,
                Math.floor(
                    power
                )
            ),

        maxHealth,

        health:
            maxHealth

    };


    game.skillCooldowns =
        {};


    addBattleLog(
        `${game.currentEnemy.name} appeared.`
    );


    render();

}


function playerAttack(
    spiritual =
        false
) {

    if (
        !game.currentEnemy
    ) {

        return;

    }


    let damage =
        getCombatPower() *
        (
            0.65 +
            Math.random() *
            0.30
        );


    if (
        spiritual
    ) {

        damage *=
            1 +
            game.attributes.soul *
            0.015;

    }


    damage =
        Math.floor(
            damage
        );


    game.currentEnemy.health -=
        damage;


    addBattleLog(
        `Jiang Chue dealt ${formatNumber(damage)} damage.`
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


    const stones =
        Math.floor(
            (
                25 +
                enemy.power *
                0.45
            ) *
            zone.stoneMultiplier
        );


    game.spiritStones +=
        stones;


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.45
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
                ? 0.28
                : 0.01
        )
    ) {

        game.spiritEggs +=
            1;

    }


    game.currentEnemy =
        null;


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


    render();

}


/* ========================================================= */
/* MARTIAL SKILLS                                            */
/* ========================================================= */

function isSkillUnlocked(skill) {

    return (
        game.realmIndex >=
        skill.unlockRealm
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
        skill.damageMultiplier;


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


    const damage =
        Math.floor(
            getCombatPower() *
            multiplier
        );


    game.currentEnemy.health -=
        damage;


    game.skillMastery[
        id
    ] =
        Math.min(
            100,
            mastery +
            0.35
        );


    game.skillCooldowns[
        id
    ] =
        skill.cooldown;


    game.totalSkillUses +=
        1;


    addBattleLog(
        `${skill.name} dealt ${formatNumber(damage)} damage.`
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
                    b.damageMultiplier -
                    a.damageMultiplier
            )[0];


    if (
        skill
    ) {

        useMartialSkill(
            skill.id
        );

    } else {

        playerAttack();

    }

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


function hasRecipeMaterials(recipe) {

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
            recipe.unlockLevel &&
            hasRecipeMaterials(
                recipe
            )
    ).length;

}


function refinePill(id) {

    const recipe =
        ALCHEMY_RECIPES.find(
            item =>
                item.id ===
                id
        );


    if (
        !recipe ||
        !hasRecipeMaterials(
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


    let chance =
        recipe.baseChance;


    chance +=
        (
            getCaveLevel(
                "alchemy-room"
            ) -
            1
        ) *
        2;


    chance +=
        game.attributes.soul *
        0.1;


    const success =
        Math.random() *
        100 <=
        chance;


    if (
        success
    ) {

        game.alchemySuccess +=
            1;


        game.alchemyExp +=
            15;


        game.pills +=
            recipe.result.pills ||
            0;


        game.healingPills +=
            recipe.result.healingPills ||
            0;


        game.breakthroughPills +=
            recipe.result.breakthroughPills ||
            0;


        game.statPoints +=
            recipe.result.statPoints ||
            0;


        if (
            recipe.result.soul
        ) {

            game.attributes.soul +=
                recipe.result.soul;

        }

    } else {

        game.alchemyFails +=
            1;


        game.alchemyExp +=
            5;

    }


    saveGame();

    render();

}


/* ========================================================= */
/* RANDOM HERBS                                              */
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
/* MARKET                                                    */
/* ========================================================= */

function buyMarketItem(id) {

    const item =
        MARKET_ITEMS.find(
            entry =>
                entry.id ===
                id
        );


    if (
        !item ||
        game.spiritStones <
        item.price
    ) {

        return;

    }


    game.spiritStones -=
        item.price;


    switch (
        id
    ) {

        case "cultivation-pill":

            game.pills +=
                1;

            break;


        case "healing-pill":

            game.healingPills +=
                1;

            break;


        case "herb-pack":

            grantRandomHerbs(
                5
            );

            break;


        case "weapon-box":

            game.weapons.push(
                generateWeapon()
            );

            break;


        case "egg":

            game.spiritEggs +=
                1;

            break;


        case "artifact-box":

            game.artifacts.push(
                generateArtifact()
            );

            break;

    }


    saveGame();

    render();

}


/* ========================================================= */
/* DAILY                                                     */
/* ========================================================= */

function canSignInToday() {

    return (
        game.lastSignIn !==
        getDateString(
            new Date()
        )
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
        getDateString(
            new Date()
        );


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
        reward.healingPills ||
        0;


    game.statPoints +=
        reward.statPoints ||
        0;


    game.spiritEggs +=
        reward.eggs ||
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


    saveGame();

    render();

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
        duty.contribution;


    game.totalSectContribution +=
        duty.contribution;


    game.sectDutyBaseline[
        id
    ] =
        getDutyValue(
            duty.type
        );


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


    const discount =
        getSectRank()
            .treasuryDiscount;


    const cost =
        Math.ceil(
            item.cost *
            (
                1 -
                discount
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
        "cultivation-pill"
    ) {

        game.pills +=
            1;

    }


    if (
        id ===
        "healing-pill"
    ) {

        game.healingPills +=
            1;

    }


    if (
        id ===
        "herb-pack"
    ) {

        grantRandomHerbs(
            6
        );

    }


    if (
        id ===
        "attribute-point"
    ) {

        game.statPoints +=
            1;

    }


    if (
        id ===
        "sect-weapon"
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }


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
        ]
    ) {

        return;

    }


    if (
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
        reward.healingPills ||
        0;


    game.statPoints +=
        reward.statPoints ||
        0;


    game.spiritEggs +=
        reward.egg ||
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


    saveGame();

    render();

}


/* ========================================================= */
/* ASCENSION                                                 */
/* ========================================================= */

function getAscensionDaoGain() {

    if (
        game.realmIndex <
        REALMS.length -
        1
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
            game.reincarnations *
            3
        )
    );

}


function ascend() {

    const gain =
        getAscensionDaoGain();


    if (
        gain <=
        0
    ) {

        notify(
            "You must reach the Immortal Realm before ascending.",
            "error"
        );

        return;

    }


    const confirmed =
        window.confirm(
            `Ascend and reincarnate for ${gain} Dao Points?\n\nMost normal progress will reset, but Dao Points and Dao upgrades remain permanently.`
        );


    if (
        !confirmed
    ) {

        return;

    }


    const persistent = {

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
        }

    };


    game =
        createDefaultState();


    game.daoPoints =
        persistent.daoPoints;


    game.lifetimeDaoPoints =
        persistent.lifetimeDaoPoints;


    game.reincarnations =
        persistent.reincarnations;


    game.daoUpgrades =
        persistent.daoUpgrades;


    game.health =
        getMaxHealth();


    saveGame();


    openPage(
        "cultivationPage"
    );


    notify(
        `Reincarnation complete. +${gain} Dao Points.`,
        "success"
    );


    render();

}


function upgradeDao(id) {

    const upgrade =
        DAO_UPGRADES.find(
            item =>
                item.id ===
                id
        );


    const level =
        getDaoUpgradeLevel(
            id
        );


    const cost =
        Math.floor(
            upgrade.baseCost *
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


    increaseTechniqueMastery(
        0.003
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
                getHealthRegenPerSecond()
            );

    }


    renderCore();

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
            (
                getTotalCaveLevel() *
                2
            )
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


    return (
        `${Math.floor(minutes / 60)}h ` +
        `${minutes % 60}m`
    );

}


/* ========================================================= */
/* LOGGING                                                   */
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
            70
        );

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
            button =>
                button.classList.toggle(
                    "active-tab",
                    button.dataset.page ===
                    pageId
                )
        );


    render();

}


/* ========================================================= */
/* CORE RENDER                                               */
/* ========================================================= */

function renderCore() {

    const realm =
        getCurrentRealm();


    const root =
        getRoot();


    const technique =
        getTechnique();


    const weapon =
        getWeapon();


    const artifact =
        getArtifact();


    const pet =
        getActivePet();


    const requirement =
        getQiRequirement();


    const herbTotal =
        Object.values(
            game.herbs
        )
            .reduce(
                (
                    sum,
                    amount
                ) =>
                    sum +
                    amount,
                0
            );


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
        "topDaoPointDisplay"
    ).textContent =
        game.daoPoints;


    byId(
        "playerNameDisplay"
    ).textContent =
        game.playerName;


    byId(
        "realmDisplay"
    ).textContent =
        realm.name;


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
        `Qi Efficiency +${Math.round(root.qiBonus * 100)}%`;


    byId(
        "mainRealmDisplay"
    ).textContent =
        `${realm.name} · ${STAGES[game.stageIndex]}`;


    byId(
        "combatPowerDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "totalCombatDisplay"
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
        `${formatNumber(getHealthRegenPerSecond())} / sec`;


    byId(
        "qiPerSecondDisplay"
    ).textContent =
        formatNumber(
            getQiPerSecond()
        );


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
        `${Math.min(
            100,
            game.qi /
            requirement *
            100
        )}%`;


    byId(
        "breakthroughChanceDisplay"
    ).textContent =
        `Breakthrough: ${getBreakthroughChance().toFixed(1)}%`;


    byId(
        "activeTechniqueDisplay"
    ).textContent =
        technique.name;


    byId(
        "techniqueBonusDisplay"
    ).textContent =
        `Qi Production +${Math.round(technique.qiBonus * 100)}%`;


    byId(
        "techniqueMasteryBar"
    ).style.width =
        `${getTechniqueMastery()}%`;


    byId(
        "techniqueMasteryText"
    ).textContent =
        `Mastery ${getTechniqueMastery().toFixed(1)}%`;


    byId(
        "equippedWeaponName"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";


    byId(
        "equippedWeaponStats"
    ).textContent =
        weapon
            ? `Combat Power +${formatNumber(weapon.power)}`
            : "No weapon equipped.";


    byId(
        "equippedArtifactName"
    ).textContent =
        artifact
            ? `${artifact.rarity} ${artifact.name}`
            : "None";


    byId(
        "equippedArtifactStats"
    ).textContent =
        artifact
            ? `${artifact.effect.toUpperCase()} +${Math.round(artifact.value * 100)}%`
            : "No artifact equipped.";


    renderActivePetCard(
        pet
    );


    const nextTribulation =
        game.stageIndex ===
            3 &&
        TRIBULATION_REALMS.includes(
            game.realmIndex +
            1
        );


    byId(
        "nextRealmWarning"
    ).classList.toggle(
        "hidden",
        !nextTribulation
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


    byId(
        "signInButton"
    ).disabled =
        !canSignInToday();


    byId(
        "dailyStatus"
    ).textContent =
        canSignInToday()
            ? "Daily reward available."
            : "Today's reward has been claimed.";


    byId(
        "streakDisplay"
    ).textContent =
        game.dailyStreak;

}


/* ========================================================= */
/* ACTIVE PET CARD                                           */
/* ========================================================= */

function renderActivePetCard(pet) {

    const container =
        byId(
            "activePetCard"
        );


    if (
        !pet
    ) {

        container.innerHTML =
            `
                <div class="empty-state">
                    No Spirit Pet summoned.
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

                <div class="pet-rarity">
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
/* TECHNIQUE RENDER                                          */
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
                game.activeTechnique ===
                technique.id;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "technique-card";


            if (
                active
            ) {

                card.classList.add(
                    "active"
                );

            }


            if (
                !unlocked
            ) {

                card.classList.add(
                    "locked"
                );

            }


            card.innerHTML =
                `
                    <div class="technique-name">
                        ${technique.name}
                    </div>

                    <div class="technique-rank">
                        ${technique.rank} Rank
                    </div>

                    <div class="technique-description">
                        Qi Bonus +${Math.round(technique.qiBonus * 100)}%
                        <br>
                        Mastery ${getTechniqueMastery(technique.id).toFixed(1)}%
                    </div>

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
/* MARTIAL SKILLS RENDER                                     */
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
                "martial-skill-card";


            if (
                !unlocked
            ) {

                card.classList.add(
                    "locked"
                );

            }


            card.innerHTML =
                `
                    <h3>
                        ${skill.name}
                    </h3>

                    <div class="martial-skill-type">
                        ${skill.type}
                    </div>

                    <p>
                        Damage ×${skill.damageMultiplier}
                        <br>
                        Cooldown ${skill.cooldown} turns
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
/* COMBAT SKILL BUTTONS                                      */
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
                            ${skill.type} ×${skill.damageMultiplier}
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
                <div class="empty-state">
                    No Spirit Pets contracted yet.
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


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "pet-card";


            if (
                active
            ) {

                card.classList.add(
                    "active"
                );

            }


            card.innerHTML =
                `
                    <div class="pet-icon">
                        ${pet.icon}
                    </div>

                    <h3>
                        ${pet.name}
                    </h3>

                    <div class="pet-rarity">
                        ${pet.rarity} • Level ${pet.level}
                    </div>

                    <p>
                        Qi +${Math.round(pet.qiBonus * 100)}%
                        <br>
                        Combat +${Math.round(pet.combatBonus * 100)}%
                        <br>
                        Herb +${Math.round(pet.herbBonus * 100)}%
                    </p>

                    <button
                        data-summon-pet="${pet.id}"
                        ${active ? "disabled" : ""}
                    >
                        ${active ? "Summoned" : "Summon"}
                    </button>

                    <button
                        data-train-pet="${pet.id}"
                        ${game.spiritStones < cost ? "disabled" : ""}
                    >
                        Train — ${formatNumber(cost)} Stones
                    </button>
                `;


            container.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            "[data-summon-pet]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        summonPet(
                            button.dataset.summonPet
                        );

            }
        );


    document
        .querySelectorAll(
            "[data-train-pet]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        trainPet(
                            button.dataset.trainPet
                        );

            }
        );


    const active =
        getActivePet();


    byId(
        "petBonusDisplay"
    ).innerHTML =
        active
            ? `
                <h3>
                    ${active.icon} ${active.name}
                </h3>

                <p>
                    Effective Qi Bonus:
                    +${Math.round(getPetBonus("qiBonus") * 100)}%
                </p>

                <p>
                    Effective Combat Bonus:
                    +${Math.round(getPetBonus("combatBonus") * 100)}%
                </p>

                <p>
                    Effective Herb Bonus:
                    +${Math.round(getPetBonus("herbBonus") * 100)}%
                </p>

                <p>
                    Spirit Beast Pen multiplier:
                    ×${getCavePetBonus().toFixed(2)}
                </p>
            `
            : `
                <h3>
                    No active Spirit Pet
                </h3>

                <p>
                    Hatch and summon a Spirit Pet to receive passive bonuses.
                </p>
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
        `${formatNumber(getHealthRegenPerSecond())}/sec`;


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
                    building.baseCost *
                    Math.pow(
                        1.85,
                        level -
                        1
                    )
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "cave-building-card";


            card.innerHTML =
                `
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
                        data-cave-upgrade="${building.id}"
                        ${game.spiritStones < cost ? "disabled" : ""}
                    >
                        Upgrade
                        <br>
                        ${formatNumber(cost)}
                    </button>
                `;


            container.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            "[data-cave-upgrade]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        upgradeCaveBuilding(
                            button.dataset.caveUpgrade
                        );

            }
        );


    byId(
        "caveProductionDisplay"
    ).innerHTML =
        `
            <h3>
                Secluded Cultivation Production
            </h3>

            <p>
                Offline Qi uses 75% of your current Qi/sec.
            </p>

            <p>
                Spirit Stone production:
                ${formatNumber(getTotalCaveLevel() * 2)}
                stones/minute.
            </p>

            <p>
                Alchemy Chamber occasionally produces medicinal herbs while offline.
            </p>
        `;

}


/* ========================================================= */
/* ADVENTURE RENDER                                          */
/* ========================================================= */

function renderAdventure() {

    const zone =
        getSelectedZone();


    byId(
        "battlePlayerRealm"
    ).textContent =
        `${getCurrentRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "battlePlayerHealthText"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "battlePlayerHealthBar"
    ).style.width =
        `${Math.max(
            0,
            game.health /
            getMaxHealth() *
            100
        )}%`;


    byId(
        "battlePlayerPower"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


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
        "bossesSlainDisplay"
    ).textContent =
        game.bossesSlain;


    byId(
        "expeditionsDisplay"
    ).textContent =
        game.expeditions;


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
            `${Math.max(
                0,
                enemy.health /
                enemy.maxHealth *
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
/* ZONE RENDER                                               */
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
                zone.requiredRealm;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "zone-card";


            if (
                zone.id ===
                game.selectedZone
            ) {

                card.classList.add(
                    "selected"
                );

            }


            if (
                !unlocked
            ) {

                card.classList.add(
                    "locked"
                );

            }


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
                                ? `Herb Tier ${zone.herbTier}`
                                : `Requires ${REALMS[zone.requiredRealm].name}`
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
/* MISSION RENDER                                            */
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


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "mission-card";


            card.innerHTML =
                `
                    <h3>
                        ${mission.name}
                    </h3>

                    <p>
                        ${mission.type}: ${Math.min(progress, mission.target)}
                        / ${mission.target}
                    </p>

                    <button
                        data-mission="${mission.id}"
                        ${progress < mission.target || claimed ? "disabled" : ""}
                    >
                        ${claimed ? "Claimed" : "Claim Reward"}
                    </button>
                `;


            container.appendChild(
                card
            );

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

    const container =
        byId(
            "battleLog"
        );


    container.innerHTML =
        game.battleLog
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
            );

}


/* ========================================================= */
/* ZONE PROGRESS                                            */
/* ========================================================= */

function renderZoneProgress() {

    byId(
        "zoneProgressList"
    ).innerHTML =
        ZONES
            .map(
                zone =>
                    `
                        <div
                            class="realm-path-item ${
                                zone.id ===
                                game.selectedZone
                                    ? "current"
                                    : ""
                            }"
                        >
                            ${
                                game.realmIndex >=
                                zone.requiredRealm
                                    ? `${zone.name} — Threat ${
                                        Math.min(
                                            5,
                                            game.zoneBossProgress[
                                                zone.id
                                            ] ||
                                            0
                                        )
                                    }/5`
                                    : `${zone.name} — Locked`
                            }
                        </div>
                    `
            )
            .join(
                ""
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
/* REALM PATH                                               */
/* ========================================================= */

function renderRealmPath() {

    byId(
        "realmPath"
    ).innerHTML =
        REALMS
            .map(
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
            )
            .join(
                ""
            );

}


/* ========================================================= */
/* SECT RENDER                                               */
/* ========================================================= */

function renderSect() {

    const rank =
        getSectRank();


    byId(
        "sectNameDisplay"
    ).textContent =
        game.sectName;


    byId(
        "sectRankDisplay"
    ).textContent =
        rank.name;


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
        SECT_RANKS
            .map(
                (
                    item,
                    index
                ) =>
                    `
                        <div class="rank-card ${
                            index ===
                            getSectRankIndex()
                                ? "current"
                                : game.totalSectContribution <
                                  item.contributionRequired
                                    ? "locked"
                                    : ""
                        }">

                            <h3>
                                ${item.name}
                            </h3>

                            <p>
                                Requires ${formatNumber(item.contributionRequired)}
                                contribution.
                            </p>

                        </div>
                    `
            )
            .join(
                ""
            );


    renderSectTreasury();

    renderSectDuties();


    byId(
        "sectBenefitDisplay"
    ).innerHTML =
        `
            <h3>
                ${rank.name}
            </h3>

            <p>
                Qi Bonus:
                +${Math.round(rank.qiBonus * 100)}%
            </p>

            <p>
                Treasury Discount:
                ${Math.round(rank.treasuryDiscount * 100)}%
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
                        getSectRank()
                            .treasuryDiscount
                    )
                );


            container.innerHTML +=
                `
                    <div class="shop-item">

                        <h3>
                            ${item.name}
                        </h3>

                        <div class="item-price">
                            ${cost} Contribution
                        </div>

                        <button
                            data-sect-item="${item.id}"
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
            "[data-sect-item]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        buySectItem(
                            button.dataset.sectItem
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
                            / ${duty.target}
                        </div>

                        <button
                            data-duty="${duty.id}"
                            ${progress < duty.target ? "disabled" : ""}
                        >
                            Claim +${duty.contribution}
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
/* ALCHEMY RENDER                                            */
/* ========================================================= */

function renderAlchemy() {

    byId(
        "herbInventoryList"
    ).innerHTML =
        HERBS
            .map(
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
            )
            .join(
                ""
            );


    const level =
        ALCHEMY_LEVELS[
            getAlchemyLevelIndex()
        ];


    byId(
        "alchemyLevelDisplay"
    ).textContent =
        level.name;


    byId(
        "alchemyExpText"
    ).textContent =
        `${game.alchemyExp} Mastery`;


    byId(
        "alchemyExpBar"
    ).style.width =
        `${Math.min(
            100,
            game.alchemyExp /
            (
                ALCHEMY_LEVELS[
                    Math.min(
                        getAlchemyLevelIndex() +
                        1,
                        ALCHEMY_LEVELS.length -
                        1
                    )
                ].required ||
                1
            ) *
            100
        )}%`;


    const container =
        byId(
            "alchemyRecipeList"
        );


    container.innerHTML =
        "";


    ALCHEMY_RECIPES.forEach(
        recipe => {

            const materialText =
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
                            ${materialText}
                        </p>

                        <button
                            data-recipe="${recipe.id}"
                            ${!hasRecipeMaterials(recipe) ? "disabled" : ""}
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
                        refinePill(
                            button.dataset.recipe
                        );

            }
        );

}


/* ========================================================= */
/* MARKET RENDER                                             */
/* ========================================================= */

function renderMarket() {

    byId(
        "marketStoneDisplay"
    ).textContent =
        formatNumber(
            game.spiritStones
        );


    byId(
        "marketShopList"
    ).innerHTML =
        MARKET_ITEMS
            .map(
                item =>
                    `
                        <div class="shop-item">

                            <h3>
                                ${item.name}
                            </h3>

                            <div class="item-price">
                                ${formatNumber(item.price)} Spirit Stones
                            </div>

                            <button
                                data-market="${item.id}"
                                ${game.spiritStones < item.price ? "disabled" : ""}
                            >
                                Buy
                            </button>

                        </div>
                    `
            )
            .join(
                ""
            );


    document
        .querySelectorAll(
            "[data-market]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        buyMarketItem(
                            button.dataset.market
                        );

            }
        );


    byId(
        "marketWeaponList"
    ).innerHTML =
        `
            <div class="benefit-card">

                <h3>
                    Treasure Selling
                </h3>

                <p>
                    Sell unwanted weapons directly from the Equipment menu.
                </p>

                <p>
                    Artifact selling will be added with the future Auction House system.
                </p>

            </div>
        `;

}


/* ========================================================= */
/* ASCENSION RENDER                                          */
/* ========================================================= */

function renderAscension() {

    const gain =
        getAscensionDaoGain();


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
                getDaoUpgradeLevel(
                    upgrade.id
                );


            const cost =
                Math.floor(
                    upgrade.baseCost *
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
                            • Cost ${cost} Dao Points
                        </div>

                        <button
                            data-dao-upgrade="${upgrade.id}"
                            ${game.daoPoints < cost ? "disabled" : ""}
                        >
                            Comprehend Dao
                        </button>

                    </div>
                `;

        }
    );


    document
        .querySelectorAll(
            "[data-dao-upgrade]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        upgradeDao(
                            button.dataset.daoUpgrade
                        );

            }
        );

}


/* ========================================================= */
/* EQUIPMENT MODAL RENDER                                    */
/* ========================================================= */

function renderEquipment() {

    const weaponContainer =
        byId(
            "weaponInventoryList"
        );


    weaponContainer.innerHTML =
        game.weapons.length
            ? ""
            : `
                <div class="empty-state">
                    No weapons.
                </div>
            `;


    game.weapons
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


                weaponContainer.innerHTML +=
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
                                data-equip-weapon="${weapon.id}"
                                ${equipped ? "disabled" : ""}
                            >
                                ${equipped ? "Equipped" : "Equip"}
                            </button>

                        </div>
                    `;

            }
        );


    const artifactContainer =
        byId(
            "artifactInventoryList"
        );


    artifactContainer.innerHTML =
        game.artifacts.length
            ? ""
            : `
                <div class="empty-state">
                    No artifacts.
                </div>
            `;


    game.artifacts.forEach(
        artifact => {

            const equipped =
                artifact.id ===
                game.equippedArtifactId;


            artifactContainer.innerHTML +=
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
                            data-equip-artifact="${artifact.id}"
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
            "[data-equip-weapon]"
        )
        .forEach(
            button => {

                button.onclick =
                    () => {

                        equipWeapon(
                            button.dataset.equipWeapon
                        );


                        renderEquipment();

                    };

            }
        );


    document
        .querySelectorAll(
            "[data-equip-artifact]"
        )
        .forEach(
            button => {

                button.onclick =
                    () => {

                        equipArtifact(
                            button.dataset.equipArtifact
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
        "statusRealmDisplay"
    ).textContent =
        `${getCurrentRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "statusCombatDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "statusQiDisplay"
    ).textContent =
        formatNumber(
            getQiPerSecond()
        );


    byId(
        "statusHealthDisplay"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "statusPetDisplay"
    ).textContent =
        getActivePet()
            ? `${getActivePet().name} Lv.${getActivePet().level}`
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

}


/* ========================================================= */
/* PILL MODAL                                                */
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
/* FULL RENDER                                               */
/* ========================================================= */

function render() {

    renderCore();

    renderTechniques();

    renderMartialSkills();

    renderPets();

    renderCave();

    renderAdventure();

    renderSect();

    renderAlchemy();

    renderMarket();

    renderAscension();

    renderCultivationLog();

    renderRealmPath();

    renderStatus();

    renderPills();


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
    showMessage =
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
        showMessage
    ) {

        notify(
            "Progress saved.",
            "success"
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

            caveBuildings: {

                ...defaults.caveBuildings,

                ...(
                    parsed.caveBuildings ||
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

            daoUpgrades: {

                ...defaults.daoUpgrades,

                ...(
                    parsed.daoUpgrades ||
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


        game.currentEnemy =
            null;


        game.autoBattle =
            false;


        game.skillCooldowns =
            {};


        game.health =
            Math.max(
                1,
                Math.min(
                    game.health ||
                    getMaxHealth(),
                    getMaxHealth()
                )
            );

    } catch (
        error
    ) {

        console.error(
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

    if (
        !window.confirm(
            "Erase all progress?"
        )
    ) {

        return;

    }


    stopAutoBattle();


    [
        SAVE_KEY,
        ...OLD_SAVE_KEYS
    ]
        .forEach(
            key =>
                localStorage.removeItem(
                    key
                )
        );


    game =
        createDefaultState();


    game.health =
        getMaxHealth();


    saveGame();


    location.reload();

}


/* ========================================================= */
/* NOTIFY                                                    */
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
        3200
    );

}


/* ========================================================= */
/* FLOATING QI                                               */
/* ========================================================= */

function createFloatingQi(
    event,
    amount
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "notification";


    element.textContent =
        `+${formatNumber(amount)} Qi`;


    element.style.position =
        "fixed";


    element.style.left =
        `${event?.clientX || 500}px`;


    element.style.top =
        `${event?.clientY || 300}px`;


    document.body.appendChild(
        element
    );


    setTimeout(
        () =>
            element.remove(),
        800
    );

}


/* ========================================================= */
/* PARTICLES                                                 */
/* ========================================================= */

function createParticles() {

    for (
        let i = 0;
        i <
        30;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.width =
            `${1 + Math.random() * 2}px`;


        particle.style.height =
            particle.style.width;


        particle.style.animationDuration =
            `${10 + Math.random() * 15}s`;


        particle.style.animationDelay =
            `${Math.random() * 10}s`;


        byId(
            "particles"
        ).appendChild(
            particle
        );

    }

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
    "exploreButton"
).onclick =
    exploreZone;


byId(
    "attackButton"
).onclick =
    () =>
        playerAttack(
            false
        );


byId(
    "spiritualAttackButton"
).onclick =
    () =>
        playerAttack(
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


byId(
    "hatchPetButton"
).onclick =
    hatchSpiritEgg;


byId(
    "ascendButton"
).onclick =
    ascend;


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


/* PILLS */

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
    "closePillButton"
).onclick =
    () =>
        byId(
            "pillModal"
        ).classList.add(
            "hidden"
        );


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


/* OFFLINE */

byId(
    "claimOfflineButton"
).onclick =
    claimOfflineProgress;


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


/* ========================================================= */
/* LEAVING PAGE                                              */
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


    calculateOfflineProgress();


    createParticles();


    render();


    setInterval(
        gameTick,
        TICK_RATE
    );


    setInterval(
        saveGame,
        AUTO_SAVE_INTERVAL
    );

}


initialize();
