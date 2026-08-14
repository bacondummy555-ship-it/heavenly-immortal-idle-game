"use strict";


/* ========================================================= */
/* SAVE                                                      */
/* ========================================================= */

const SAVE_KEY =
    "idleCultivationSaveV5";


const OLD_SAVE_KEYS = [
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


/*
    Realm changes listed here require
    a Heavenly Tribulation.

    The number is the new realm index.
*/

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

        name:
            "Mortal Breathing Art",

        rank:
            "Mortal",

        qiBonus:
            0,

        soulBonus:
            0,

        unlockRealm:
            0,

        description:
            "A simple breathing method used by beginning cultivators."
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

        soulBonus:
            0.05,

        unlockRealm:
            1,

        description:
            "Circulates spiritual energy smoothly through the meridians."
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

        soulBonus:
            0.10,

        unlockRealm:
            2,

        description:
            "Draws pure spiritual Qi from heaven."
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

        soulBonus:
            0.15,

        unlockRealm:
            4,

        description:
            "Refines blazing solar essence."
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

        soulBonus:
            0.25,

        unlockRealm:
            6,

        description:
            "Devours spiritual essence from heaven and earth."
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

        soulBonus:
            0.50,

        unlockRealm:
            9,

        description:
            "A supreme scripture born before heaven and earth."
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

        unlockRealm:
            0,

        damageMultiplier:
            1.35,

        cooldown:
            2,

        description:
            "A powerful palm strike that channels physical strength."
    },


    {
        id:
            "spirit-blade",

        name:
            "Spirit Blade Slash",

        type:
            "Sword",

        unlockRealm:
            1,

        damageMultiplier:
            1.65,

        cooldown:
            3,

        description:
            "Channels Qi through a weapon and releases a cutting blade."
    },


    {
        id:
            "soul-pierce",

        name:
            "Soul Piercing Finger",

        type:
            "Soul",

        unlockRealm:
            2,

        damageMultiplier:
            1.95,

        cooldown:
            4,

        description:
            "A spiritual finger attack that directly assaults the enemy's essence."
    },


    {
        id:
            "azure-sword",

        name:
            "Azure Heaven Sword Art",

        type:
            "Sword",

        unlockRealm:
            3,

        damageMultiplier:
            2.4,

        cooldown:
            5,

        description:
            "Calls upon azure sword intent and rains cutting Qi upon the enemy."
    },


    {
        id:
            "dragon-fist",

        name:
            "True Dragon Fist",

        type:
            "Strength",

        unlockRealm:
            4,

        damageMultiplier:
            3,

        cooldown:
            6,

        description:
            "A domineering fist carrying traces of true dragon might."
    },


    {
        id:
            "nine-sun-burst",

        name:
            "Nine Suns Heavenly Burst",

        type:
            "Soul",

        unlockRealm:
            5,

        damageMultiplier:
            3.8,

        cooldown:
            7,

        description:
            "Condenses solar spiritual power into an explosive strike."
    },


    {
        id:
            "void-severing",

        name:
            "Void Severing Sword",

        type:
            "Sword",

        unlockRealm:
            6,

        damageMultiplier:
            5,

        cooldown:
            8,

        description:
            "A sword strike capable of disturbing the surrounding space."
    },


    {
        id:
            "chaos-palm",

        name:
            "Primordial Chaos Palm",

        type:
            "Soul",

        unlockRealm:
            8,

        damageMultiplier:
            7,

        cooldown:
            10,

        description:
            "A forbidden palm art carrying the destructive aura of primordial chaos."
    }

];


/* ========================================================= */
/* RARITIES / WEAPONS                                        */
/* ========================================================= */

const RARITIES = [

    {
        name: "Common",
        weight: 45,
        multiplier: 1,
        sellMultiplier: 1
    },

    {
        name: "Uncommon",
        weight: 28,
        multiplier: 1.8,
        sellMultiplier: 1.7
    },

    {
        name: "Rare",
        weight: 15,
        multiplier: 3,
        sellMultiplier: 3
    },

    {
        name: "Epic",
        weight: 8,
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
/* ALCHEMY                                                  */
/* ========================================================= */

const ALCHEMY_RECIPES = [

    {
        id: "qi-pill",

        name:
            "Qi Gathering Pill",

        unlockLevel:
            0,

        baseChance:
            90,

        materials: {
            "spirit-grass": 3,
            "jade-leaf": 1
        },

        result: {
            pills: 1
        },

        description:
            "Accelerates cultivation by providing concentrated spiritual Qi."
    },


    {
        id:
            "healing-pill",

        name:
            "Healing Pill",

        unlockLevel:
            0,

        baseChance:
            88,

        materials: {
            "spirit-grass": 2,
            "blood-ginseng": 2
        },

        result: {
            healingPills: 1
        },

        description:
            "Repairs wounds and damaged meridians."
    },


    {
        id:
            "meridian-pill",

        name:
            "Meridian Tempering Pill",

        unlockLevel:
            1,

        baseChance:
            75,

        materials: {
            "blood-ginseng": 3,
            "fire-root": 2,
            "jade-leaf": 1
        },

        result: {
            statPoints: 1
        },

        description:
            "Strengthens the body and grants one Attribute Point."
    },


    {
        id:
            "soul-pill",

        name:
            "Soul Nourishing Pill",

        unlockLevel:
            2,

        baseChance:
            62,

        materials: {
            "moon-flower": 3,
            "soul-orchid": 2,
            "jade-leaf": 2
        },

        result: {
            soul: 1
        },

        description:
            "Permanently increases Soul by one."
    },


    {
        id:
            "foundation-pill",

        name:
            "Foundation Stabilizing Pill",

        unlockLevel:
            3,

        baseChance:
            50,

        materials: {
            "fire-root": 4,
            "blood-ginseng": 4,
            "soul-orchid": 2
        },

        result: {
            breakthroughPills: 1
        },

        description:
            "Improves the success chance of your next breakthrough."
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
        treasuryDiscount: 0,

        description:
            "A newly accepted disciple of the Azure Cloud Sect."
    },

    {
        name: "Inner Disciple",
        contributionRequired: 500,
        qiBonus: 0.05,
        treasuryDiscount: 0.05,

        description:
            "A disciple recognized for talent and loyalty."
    },

    {
        name: "Core Disciple",
        contributionRequired: 2000,
        qiBonus: 0.12,
        treasuryDiscount: 0.10,

        description:
            "One of the sect's most promising cultivators."
    },

    {
        name: "Personal Disciple",
        contributionRequired: 6000,
        qiBonus: 0.20,
        treasuryDiscount: 0.15,

        description:
            "A chosen disciple personally guided by an elder."
    },

    {
        name: "Sect Elder",
        contributionRequired: 15000,
        qiBonus: 0.35,
        treasuryDiscount: 0.20,

        description:
            "A respected elder entrusted with sect authority."
    },

    {
        name: "Grand Elder",
        contributionRequired: 40000,
        qiBonus: 0.55,
        treasuryDiscount: 0.25,

        description:
            "One of the supreme pillars of the Azure Cloud Sect."
    }

];


const SECT_TREASURY = [

    {
        id: "cultivation-pill",
        name: "Cultivation Pill",
        cost: 60,

        description:
            "Receive one Cultivation Pill."
    },

    {
        id: "healing-pill",
        name: "Healing Pill",
        cost: 45,

        description:
            "Receive one Healing Pill."
    },

    {
        id: "herb-pack",
        name: "Spirit Herb Pack",
        cost: 80,

        description:
            "Receive six random medicinal herbs."
    },

    {
        id: "attribute-point",
        name: "Body Tempering Essence",
        cost: 300,

        description:
            "Receive one Attribute Point."
    },

    {
        id: "sect-weapon",
        name: "Sect Treasure Weapon",
        cost: 900,

        description:
            "Receive an Uncommon or better spirit weapon."
    }

];


const SECT_DUTIES = [

    {
        id: "daily-patrol",

        name:
            "Mountain Patrol",

        description:
            "Complete 3 expeditions.",

        type:
            "expeditions",

        target:
            3,

        contribution:
            60
    },

    {
        id: "beast-extermination",

        name:
            "Beast Extermination",

        description:
            "Defeat 5 enemies.",

        type:
            "kills",

        target:
            5,

        contribution:
            120
    },

    {
        id: "herb-gathering",

        name:
            "Medicinal Herb Gathering",

        description:
            "Gather 8 herbs.",

        type:
            "herbs",

        target:
            8,

        contribution:
            150
    },

    {
        id: "regional-threat",

        name:
            "Eliminate Regional Threat",

        description:
            "Defeat one region boss.",

        type:
            "bosses",

        target:
            1,

        contribution:
            300
    }

];


/* ========================================================= */
/* ZONES                                                     */
/* ========================================================= */

const ZONES = [

    {
        id: "misty-forest",

        name:
            "Misty Forest",

        description:
            "A forest containing weak spirit beasts and common herbs.",

        requiredRealm:
            0,

        powerMultiplier:
            0.65,

        stoneMultiplier:
            1,

        herbTier:
            1,

        enemies: [
            "Fang Wolf",
            "Horned Rabbit",
            "Poison Fang Snake",
            "Wild Spirit Boar",
            "Black Claw Lynx"
        ],

        boss:
            "Ancient Fang Wolf King"
    },


    {
        id:
            "spirit-mountain",

        name:
            "Spirit Mountain",

        description:
            "A mountain overflowing with dense spiritual energy.",

        requiredRealm:
            1,

        powerMultiplier:
            1.25,

        stoneMultiplier:
            2,

        herbTier:
            2,

        enemies: [
            "Rockback Ape",
            "Storm Eagle",
            "Ironhide Bear",
            "Spirit Horn Deer",
            "Mountain Python"
        ],

        boss:
            "Golden-Eyed Mountain Ape"
    },


    {
        id:
            "blood-valley",

        name:
            "Blood Moon Valley",

        description:
            "An ancient battlefield saturated with killing intent.",

        requiredRealm:
            2,

        powerMultiplier:
            2,

        stoneMultiplier:
            4,

        herbTier:
            3,

        enemies: [
            "Blood Demon",
            "Corpse Puppet",
            "Crimson Serpent",
            "Ghost Cultivator",
            "Bloodwing Bat"
        ],

        boss:
            "Blood Moon Demon General"
    },


    {
        id:
            "ancient-ruins",

        name:
            "Ancient Sect Ruins",

        description:
            "Ruins filled with forgotten treasures and ancient guardians.",

        requiredRealm:
            3,

        powerMultiplier:
            3.6,

        stoneMultiplier:
            7,

        herbTier:
            4,

        enemies: [
            "Ancient Guardian",
            "Sword Puppet",
            "Ruins Phantom",
            "Stone Golem",
            "Corrupted Disciple"
        ],

        boss:
            "Ancient Sect Guardian"
    },


    {
        id:
            "dragon-abyss",

        name:
            "Dragon Abyss",

        description:
            "An abyss containing traces of true dragon blood.",

        requiredRealm:
            4,

        powerMultiplier:
            6,

        stoneMultiplier:
            12,

        herbTier:
            5,

        enemies: [
            "Abyss Drake",
            "Dragonblood Serpent",
            "Blackscale Beast",
            "Abyssal Crocodile",
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

        description:
            "A dimensional tear populated by horrifying void creatures.",

        requiredRealm:
            6,

        powerMultiplier:
            15,

        stoneMultiplier:
            30,

        herbTier:
            6,

        enemies: [
            "Void Devourer",
            "Spatial Fiend",
            "Rift Demon",
            "Voidwalker",
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

        name:
            "Outer Sect Trial",

        description:
            "Defeat 5 enemies.",

        type:
            "kills",

        target:
            5,

        reward: {
            stones: 250,
            statPoints: 2,
            pills: 1
        }
    },


    {
        id: "beast-hunter",

        name:
            "Spirit Beast Hunter",

        description:
            "Defeat 15 enemies.",

        type:
            "kills",

        target:
            15,

        reward: {
            stones: 700,
            statPoints: 3,
            healingPills: 2
        }
    },


    {
        id: "boss-slayer",

        name:
            "Slay a Region Lord",

        description:
            "Defeat one boss.",

        type:
            "bosses",

        target:
            1,

        reward: {
            stones: 1200,
            statPoints: 5,
            weapon: true
        }
    },


    {
        id: "veteran",

        name:
            "Seasoned Disciple",

        description:
            "Win 30 battles.",

        type:
            "victories",

        target:
            30,

        reward: {
            stones: 2500,
            statPoints: 8,
            pills: 3
        }
    }

];


/* ========================================================= */
/* MARKET                                                    */
/* ========================================================= */

const MARKET_ITEMS = [

    {
        id: "cultivation-pill",

        name:
            "Cultivation Pill",

        price:
            180,

        description:
            "A common pill containing concentrated spiritual Qi."
    },

    {
        id: "healing-pill",

        name:
            "Healing Pill",

        price:
            130,

        description:
            "Restores forty-five percent of maximum health."
    },

    {
        id: "common-herbs",

        name:
            "Common Herb Bundle",

        price:
            220,

        description:
            "Contains several random alchemy herbs."
    },

    {
        id: "mystery-weapon",

        name:
            "Mystery Weapon Chest",

        price:
            1500,

        description:
            "Contains one random spirit weapon."
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
        stones: 500
    },

    {
        statPoints: 3
    },

    {
        stones: 1000,
        weapon: true
    }

];


/* ========================================================= */
/* DEFAULT SAVE                                              */
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

        manuals:
            0,

        breakthroughCount:
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

        skillCooldowns: {},

        totalSkillUses:
            0,

        weapons:
            [],

        equippedWeaponId:
            null,

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

        sectDutyCount:
            0,

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

        autoBattleVictories:
            0,

        missionClaims:
            {},

        zoneBossProgress:
            {},

        battleLog:
            [],

        tribulation: null,

        tribulationsSurvived:
            0,

        pendingRealmAscension:
            null,

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


let pendingOfflineQi =
    0;


let autoBattleTimer =
    null;


/* ========================================================= */
/* HELPERS                                                   */
/* ========================================================= */

function byId(id) {

    return document.getElementById(id);

}


function formatNumber(number) {

    if (
        !Number.isFinite(number)
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
            value: 1e15,
            suffix: "Qa"
        },

        {
            value: 1e12,
            suffix: "T"
        },

        {
            value: 1e9,
            suffix: "B"
        },

        {
            value: 1e6,
            suffix: "M"
        },

        {
            value: 1e3,
            suffix: "K"
        }

    ];


    for (
        const unit
        of units
    ) {

        if (
            number >=
            unit.value
        ) {

            const value =
                number /
                unit.value;


            return (
                value.toFixed(
                    value >=
                    100
                        ? 0
                        : value >=
                            10
                            ? 1
                            : 2
                ) +
                unit.suffix
            );

        }

    }


    return String(
        Math.floor(
            number
        )
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


function getDateString(date) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() +
            1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${year}-${month}-${day}`;

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
/* CURRENT DATA                                              */
/* ========================================================= */

function getCurrentRealm() {

    return REALMS[
        game.realmIndex
    ];

}


function getCurrentRoot() {

    return (
        SPIRITUAL_ROOTS.find(
            root =>
                root.name ===
                game.spiritualRoot
        ) ||
        SPIRITUAL_ROOTS[0]
    );

}


function getCurrentTechnique() {

    return (
        TECHNIQUES.find(
            technique =>
                technique.id ===
                game.activeTechnique
        ) ||
        TECHNIQUES[0]
    );

}


function getSelectedZone() {

    return (
        ZONES.find(
            zone =>
                zone.id ===
                game.selectedZone
        ) ||
        ZONES[0]
    );

}


function getEquippedWeapon() {

    return (
        game.weapons.find(
            weapon =>
                weapon.id ===
                game.equippedWeaponId
        ) ||
        null
    );

}


/* ========================================================= */
/* SECT                                                     */
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


/* ========================================================= */
/* ALCHEMY                                                  */
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


function getAlchemyLevel() {

    return ALCHEMY_LEVELS[
        getAlchemyLevelIndex()
    ];

}


/* ========================================================= */
/* PLAYER CALCULATIONS                                      */
/* ========================================================= */

function getMaxHealth() {

    return Math.floor(
        100 +
        game.attributes.constitution *
        10 +
        game.realmIndex *
        80 +
        game.stageIndex *
        25
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


function getQiPerSecond() {

    const realm =
        getCurrentRealm();


    const root =
        getCurrentRoot();


    const technique =
        getCurrentTechnique();


    const mastery =
        getTechniqueMastery();


    const stage =
        1 +
        game.stageIndex *
        0.25;


    const soul =
        1 +
        Math.max(
            0,
            game.attributes.soul -
            10
        ) *
        0.012;


    const manual =
        1 +
        game.manuals *
        0.12;


    const breakthroughs =
        1 +
        game.breakthroughCount *
        0.02;


    const sect =
        1 +
        getSectRank()
            .qiBonus;


    return (
        realm.qiMultiplier *
        stage *
        soul *
        manual *
        breakthroughs *
        (
            1 +
            root.qiBonus
        ) *
        (
            1 +
            technique.qiBonus
        ) *
        (
            1 +
            mastery *
            0.002
        ) *
        sect
    );

}


function getCombatPower() {

    const realm =
        getCurrentRealm();


    const technique =
        getCurrentTechnique();


    const weapon =
        getEquippedWeapon();


    const strength =
        1 +
        game.attributes.strength *
        0.04;


    const constitution =
        1 +
        game.attributes.constitution *
        0.02;


    const soul =
        1 +
        game.attributes.soul *
        0.025;


    const stage =
        1 +
        game.stageIndex *
        0.5;


    return Math.floor(
        10 *
        realm.combatMultiplier *
        strength *
        constitution *
        soul *
        stage *
        (
            1 +
            technique.soulBonus
        ) +
        (
            weapon
                ? weapon.power
                : 0
        )
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
        Math.max(
            0,
            game.attributes.constitution -
            10
        ) *
        0.3;


    chance +=
        getCurrentRoot()
            .breakthroughBonus;


    chance +=
        game.breakthroughBuff;


    return Math.min(
        100,
        Math.max(
            35,
            chance
        )
    );

}


/* ========================================================= */
/* QI                                                       */
/* ========================================================= */

function addQi(amount) {

    if (
        !Number.isFinite(amount) ||
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


function increaseTechniqueMastery(amount) {

    game.techniqueMastery[
        game.activeTechnique
    ] =
        Math.min(
            100,
            (
                game.techniqueMastery[
                    game.activeTechnique
                ] ||
                0
            ) +
            amount
        );

}


/* ========================================================= */
/* CULTIVATION                                              */
/* ========================================================= */

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


    setSystemMessage(
        `You circulated ${getCurrentTechnique().name} and absorbed ${formatNumber(amount)} Qi.`
    );


    renderCore();

}


/* ========================================================= */
/* BREAKTHROUGH                                             */
/* ========================================================= */

function attemptBreakthrough() {

    if (
        game.currentEnemy ||
        game.tribulation
    ) {

        notify(
            "You cannot breakthrough during battle.",
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
            `You need ${formatNumber(requirement - game.qi)} more Qi.`,
            "error"
        );

        return;
    }


    const successful =
        Math.random() *
        100 <=
        getBreakthroughChance();


    if (
        !successful
    ) {

        const loss =
            requirement *
            0.12;


        game.qi =
            Math.max(
                0,
                game.qi -
                loss
            );


        game.health =
            Math.max(
                1,
                game.health -
                getMaxHealth() *
                0.1
            );


        game.breakthroughBuff =
            0;


        notify(
            "Breakthrough failed. Your meridians were injured.",
            "error"
        );


        saveGame();

        render();

        return;

    }


    /*
        Normal stage advancement.
    */

    if (
        game.stageIndex <
        STAGES.length -
        1
    ) {

        game.qi -=
            requirement;


        game.stageIndex +=
            1;


        grantBreakthroughStatGrowth();


        game.breakthroughBuff =
            0;


        game.health =
            getMaxHealth();


        addLog(
            `Breakthrough successful. You reached ${getCurrentRealm().name} ${STAGES[game.stageIndex]}.`,
            true
        );


        notify(
            `Breakthrough successful — ${getCurrentRealm().name} ${STAGES[game.stageIndex]}!`,
            "success"
        );


        saveGame();

        render();

        return;

    }


    /*
        Realm advancement.
    */

    const nextRealmIndex =
        game.realmIndex +
        1;


    if (
        nextRealmIndex >=
        REALMS.length
    ) {

        notify(
            "You have already reached the current pinnacle.",
            "success"
        );

        return;

    }


    game.qi -=
        requirement;


    game.breakthroughBuff =
        0;


    /*
        Some realms trigger tribulation.
    */

    if (
        TRIBULATION_REALMS.includes(
            nextRealmIndex
        )
    ) {

        game.pendingRealmAscension =
            nextRealmIndex;


        startTribulation(
            nextRealmIndex
        );


        saveGame();

        render();

        return;

    }


    completeRealmAscension(
        nextRealmIndex
    );

}


/* ========================================================= */
/* BREAKTHROUGH GROWTH                                       */
/* ========================================================= */

function grantBreakthroughStatGrowth() {

    game.breakthroughCount +=
        1;


    game.statPoints +=
        3;


    game.attributes.strength +=
        1;


    game.attributes.constitution +=
        1;


    game.attributes.soul +=
        1;

}


/* ========================================================= */
/* ASCENSION                                                */
/* ========================================================= */

function completeRealmAscension(
    nextRealmIndex
) {

    game.realmIndex =
        nextRealmIndex;


    game.stageIndex =
        0;


    grantBreakthroughStatGrowth();


    game.statPoints +=
        7;


    game.attributes.strength +=
        3;


    game.attributes.constitution +=
        3;


    game.attributes.soul +=
        3;


    game.health =
        getMaxHealth();


    grantRealmReward();


    game.pendingRealmAscension =
        null;


    addLog(
        `Heaven and earth trembled as Jiang Chue entered the ${getCurrentRealm().name} Realm.`,
        true
    );


    notify(
        `境界突破 — ${getCurrentRealm().name}!`,
        "success"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* REALM REWARDS                                             */
/* ========================================================= */

function grantRealmReward() {

    game.spiritStones +=
        150 *
        Math.pow(
            2,
            game.realmIndex
        );


    game.pills +=
        Math.max(
            1,
            Math.floor(
                game.realmIndex /
                2
            )
        );


    if (
        Math.random() <
        0.45
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }

}


/* ========================================================= */
/* TRIBULATION                                              */
/* ========================================================= */

function startTribulation(
    targetRealmIndex
) {

    game.autoBattle =
        false;


    stopAutoBattle();


    const realmPower =
        Math.max(
            1,
            getCombatPower()
        );


    const waves =
        Math.min(
            9,
            3 +
            Math.floor(
                targetRealmIndex /
                2
            )
        );


    const totalHealth =
        Math.floor(
            realmPower *
            (
                5 +
                targetRealmIndex *
                0.9
            )
        );


    game.health =
        getMaxHealth();


    game.tribulation = {

        targetRealmIndex,

        wave:
            1,

        maxWaves:
            waves,

        health:
            totalHealth,

        maxHealth:
            totalHealth,

        power:
            Math.floor(
                realmPower *
                (
                    0.55 +
                    targetRealmIndex *
                    0.07
                )
            )

    };


    resetSkillCooldowns();


    byId(
        "tribulationModal"
    ).classList.remove(
        "hidden"
    );


    byId(
        "tribulationMessage"
    ).textContent =
        "The heavens have descended to test your Dao. Survive.";


    renderTribulation();

}


/* ========================================================= */
/* TRIBULATION BASIC ATTACK                                  */
/* ========================================================= */

function tribulationAttack() {

    if (
        !game.tribulation
    ) {
        return;
    }


    let damage =
        getCombatPower() *
        (
            0.75 +
            Math.random() *
            0.25
        );


    damage =
        Math.floor(
            damage
        );


    game.tribulation.health =
        Math.max(
            0,
            game.tribulation.health -
            damage
        );


    byId(
        "tribulationMessage"
    ).textContent =
        `You resisted the Heavenly Lightning and dispersed ${formatNumber(damage)} tribulation energy.`;


    if (
        game.tribulation.health <=
        0
    ) {

        nextTribulationWave();

        return;

    }


    tribulationEnemyTurn();


    renderTribulation();

}


/* ========================================================= */
/* TRIBULATION DAMAGE                                        */
/* ========================================================= */

function tribulationEnemyTurn() {

    if (
        !game.tribulation
    ) {
        return;
    }


    const tribulation =
        game.tribulation;


    let damage =
        tribulation.power *
        (
            0.55 +
            Math.random() *
            0.35
        );


    damage *=
        1 +
        (
            tribulation.wave -
            1
        ) *
        0.14;


    damage /=
        1 +
        game.attributes.constitution *
        0.016;


    damage =
        Math.max(
            1,
            Math.floor(
                damage
            )
        );


    game.health =
        Math.max(
            0,
            game.health -
            damage
        );


    reduceSkillCooldowns();


    byId(
        "tribulationMessage"
    ).textContent +=
        ` Heavenly Lightning struck you for ${formatNumber(damage)} damage.`;


    if (
        game.health <=
        0
    ) {

        failTribulation();

    }

}


/* ========================================================= */
/* TRIBULATION WAVE                                          */
/* ========================================================= */

function nextTribulationWave() {

    if (
        !game.tribulation
    ) {
        return;
    }


    if (
        game.tribulation.wave >=
        game.tribulation.maxWaves
    ) {

        completeTribulation();

        return;

    }


    game.tribulation.wave +=
        1;


    game.tribulation.maxHealth =
        Math.floor(
            game.tribulation.maxHealth *
            1.22
        );


    game.tribulation.health =
        game.tribulation.maxHealth;


    game.tribulation.power =
        Math.floor(
            game.tribulation.power *
            1.12
        );


    byId(
        "tribulationMessage"
    ).textContent =
        `Lightning Wave ${game.tribulation.wave} descends from the heavens!`;


    renderTribulation();

}


/* ========================================================= */
/* TRIBULATION SUCCESS                                       */
/* ========================================================= */

function completeTribulation() {

    if (
        !game.tribulation
    ) {
        return;
    }


    const target =
        game.tribulation.targetRealmIndex;


    game.tribulationsSurvived +=
        1;


    game.tribulation =
        null;


    byId(
        "tribulationModal"
    ).classList.add(
        "hidden"
    );


    const tribulationReward =
        Math.floor(
            500 *
            Math.pow(
                2,
                target
            )
        );


    game.spiritStones +=
        tribulationReward;


    game.statPoints +=
        5 +
        target;


    notify(
        `Heavenly Tribulation survived! +${formatNumber(tribulationReward)} Spirit Stones.`,
        "success"
    );


    addLog(
        "The Heavenly Tribulation dispersed. Your Dao foundation became immeasurably stronger.",
        true
    );


    completeRealmAscension(
        target
    );

}


/* ========================================================= */
/* TRIBULATION FAILURE                                       */
/* ========================================================= */

function failTribulation() {

    game.tribulation =
        null;


    game.pendingRealmAscension =
        null;


    game.health =
        Math.max(
            1,
            Math.floor(
                getMaxHealth() *
                0.15
            )
        );


    game.qi =
        Math.max(
            0,
            game.qi -
            getQiRequirement() *
            0.2
        );


    byId(
        "tribulationModal"
    ).classList.add(
        "hidden"
    );


    notify(
        "The Heavenly Tribulation overwhelmed you. Your ascension failed.",
        "error"
    );


    addLog(
        "Your attempt to defy Heaven failed. Your meridians suffered grievous injuries.",
        true
    );


    saveGame();

    render();

}


/* ========================================================= */
/* TRIBULATION RENDER                                        */
/* ========================================================= */

function renderTribulation() {

    if (
        !game.tribulation
    ) {

        return;

    }


    const tribulation =
        game.tribulation;


    byId(
        "tribulationTargetRealm"
    ).textContent =
        REALMS[
            tribulation.targetRealmIndex
        ].name;


    byId(
        "tribulationPlayerHealth"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "tribulationPlayerBar"
    ).style.width =
        `${Math.max(
            0,
            game.health /
            getMaxHealth() *
            100
        )}%`;


    byId(
        "tribulationHealthText"
    ).textContent =
        `${formatNumber(tribulation.health)} / ${formatNumber(tribulation.maxHealth)}`;


    byId(
        "tribulationHealthBar"
    ).style.width =
        `${Math.max(
            0,
            tribulation.health /
            tribulation.maxHealth *
            100
        )}%`;


    byId(
        "tribulationWaveDisplay"
    ).textContent =
        `${tribulation.wave} / ${tribulation.maxWaves}`;


    renderCombatSkillButtons(
        "tribulationSkillButtons",
        true
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

        notify(
            "You have no Attribute Points.",
            "error"
        );

        return;

    }


    if (
        !Object.prototype
            .hasOwnProperty.call(
                game.attributes,
                stat
            )
    ) {

        return;

    }


    game.attributes[
        stat
    ] +=
        1;


    game.statPoints -=
        1;


    if (
        stat ===
        "constitution"
    ) {

        game.health =
            Math.min(
                getMaxHealth(),
                game.health +
                10
            );

    }


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

        notify(
            "You have no Cultivation Pills.",
            "error"
        );

        return false;

    }


    game.pills -=
        1;


    const reward =
        Math.max(
            100,
            getQiRequirement() *
            0.35
        );


    addQi(
        reward
    );


    increaseTechniqueMastery(
        0.5
    );


    notify(
        `Cultivation Pill refined: +${formatNumber(reward)} Qi.`,
        "success"
    );


    saveGame();

    render();

    return true;

}


function useHealingPill() {

    if (
        game.healingPills <=
        0
    ) {

        notify(
            "You have no Healing Pills.",
            "error"
        );

        return false;

    }


    if (
        game.health >=
        getMaxHealth()
    ) {

        notify(
            "Your health is already full.",
            "error"
        );

        return false;

    }


    game.healingPills -=
        1;


    const healing =
        getMaxHealth() *
        0.45;


    game.health =
        Math.min(
            getMaxHealth(),
            game.health +
            healing
        );


    notify(
        `Recovered ${formatNumber(healing)} health.`,
        "success"
    );


    saveGame();

    render();

    return true;

}


function useBreakthroughPill() {

    if (
        game.breakthroughPills <=
        0
    ) {

        notify(
            "You do not possess a Foundation Stabilizing Pill.",
            "error"
        );

        return false;

    }


    if (
        game.breakthroughBuff >
        0
    ) {

        notify(
            "A Foundation Stabilizing Pill is already active.",
            "error"
        );

        return false;

    }


    game.breakthroughPills -=
        1;


    game.breakthroughBuff =
        15;


    notify(
        "Foundation stabilized. +15% breakthrough success for your next attempt.",
        "success"
    );


    saveGame();

    render();

    return true;

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
        !technique
    ) {
        return;
    }


    if (
        game.realmIndex <
        technique.unlockRealm
    ) {

        return;

    }


    game.activeTechnique =
        id;


    if (
        game.techniqueMastery[
            id
        ] ===
        undefined
    ) {

        game.techniqueMastery[
            id
        ] =
            0;

    }


    notify(
        `${technique.name} equipped.`,
        "success"
    );


    saveGame();

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


function getSkillMastery(id) {

    return (
        game.skillMastery[
            id
        ] ||
        0
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


function resetSkillCooldowns() {

    game.skillCooldowns =
        {};

}


function reduceSkillCooldowns() {

    for (
        const id
        of Object.keys(
            game.skillCooldowns
        )
    ) {

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

}


function calculateSkillDamage(skill) {

    const mastery =
        getSkillMastery(
            skill.id
        );


    let multiplier =
        skill.damageMultiplier *
        (
            1 +
            mastery *
            0.004
        );


    /*
        Attribute scaling.
    */

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
        "Sword"
    ) {

        multiplier *=
            1 +
            game.attributes.strength *
            0.008 +
            game.attributes.soul *
            0.008;


        if (
            getEquippedWeapon()
        ) {

            multiplier *=
                1.2;

        }

    }


    return Math.floor(
        getCombatPower() *
        multiplier *
        (
            0.90 +
            Math.random() *
            0.20
        )
    );

}


/* ========================================================= */
/* USE MARTIAL SKILL                                         */
/* ========================================================= */

function useMartialSkill(
    skillId,
    againstTribulation =
        false
) {

    const skill =
        MARTIAL_SKILLS.find(
            item =>
                item.id ===
                skillId
        );


    if (
        !skill ||
        !isSkillUnlocked(
            skill
        )
    ) {

        return;

    }


    if (
        getSkillCooldown(
            skill.id
        ) >
        0
    ) {

        return;

    }


    if (
        againstTribulation
    ) {

        if (
            !game.tribulation
        ) {
            return;
        }

    } else {

        if (
            !game.currentEnemy
        ) {
            return;
        }

    }


    const damage =
        calculateSkillDamage(
            skill
        );


    game.totalSkillUses +=
        1;


    game.skillMastery[
        skill.id
    ] =
        Math.min(
            100,
            getSkillMastery(
                skill.id
            ) +
            0.35
        );


    game.skillCooldowns[
        skill.id
    ] =
        skill.cooldown;


    if (
        againstTribulation
    ) {

        game.tribulation.health =
            Math.max(
                0,
                game.tribulation.health -
                damage
            );


        byId(
            "tribulationMessage"
        ).textContent =
            `${skill.name} dispersed ${formatNumber(damage)} Heavenly Tribulation energy!`;


        if (
            game.tribulation.health <=
            0
        ) {

            nextTribulationWave();

            render();

            return;

        }


        tribulationEnemyTurn();

    } else {

        game.currentEnemy.health =
            Math.max(
                0,
                game.currentEnemy.health -
                damage
            );


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

    }


    saveGame();

    render();

}


/* ========================================================= */
/* WEAPON GENERATION                                         */
/* ========================================================= */

function chooseRarity(
    minimum =
        null
) {

    let available =
        [...RARITIES];


    if (
        minimum
    ) {

        const index =
            RARITIES.findIndex(
                item =>
                    item.name ===
                    minimum
            );


        if (
            index >=
            0
        ) {

            available =
                RARITIES.slice(
                    index
                );

        }

    }


    const total =
        available.reduce(
            (
                sum,
                rarity
            ) =>
                sum +
                rarity.weight,
            0
        );


    let roll =
        Math.random() *
        total;


    for (
        const rarity
        of available
    ) {

        roll -=
            rarity.weight;


        if (
            roll <=
            0
        ) {

            return rarity;

        }

    }


    return available[0];

}


function generateWeapon(
    guaranteedRarity =
        null
) {

    const rarity =
        guaranteedRarity
            ? RARITIES.find(
                item =>
                    item.name ===
                    guaranteedRarity
            )
            : chooseRarity();


    const safeRarity =
        rarity ||
        RARITIES[0];


    const names =
        WEAPON_NAMES[
            safeRarity.name
        ];


    const name =
        names[
            Math.floor(
                Math.random() *
                names.length
            )
        ];


    const scaling =
        Math.max(
            1,
            Math.pow(
                game.realmIndex +
                1,
                1.8
            )
        );


    return {

        id:
            `${Date.now()}-${Math.random()}`,

        name,

        rarity:
            safeRarity.name,

        power:
            Math.floor(
                25 *
                safeRarity.multiplier *
                scaling *
                (
                    0.85 +
                    Math.random() *
                    0.3
                )
            )

    };

}


function equipWeapon(id) {

    const weapon =
        game.weapons.find(
            item =>
                item.id ===
                id
        );


    if (
        !weapon
    ) {

        return;

    }


    game.equippedWeaponId =
        id;


    notify(
        `${weapon.name} equipped.`,
        "success"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* ADVENTURE                                                */
/* ========================================================= */

function selectZone(id) {

    if (
        game.currentEnemy ||
        game.autoBattle
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
        zone.requiredRealm
    ) {

        return;

    }


    game.selectedZone =
        id;


    renderAdventure();

}


/* ========================================================= */
/* EXPLORE                                                   */
/* ========================================================= */

function exploreZone(
    fromAuto =
        false
) {

    if (
        game.currentEnemy ||
        game.tribulation
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
        0.58
    ) {

        startBattle(
            zone
        );

        return;

    }


    if (
        roll <
        0.78
    ) {

        gatherHerbs(
            zone
        );

    } else if (
        roll <
        0.87
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


        setAdventureMessage(
            `You discovered ${formatNumber(stones)} Spirit Stones.`
        );

    } else if (
        roll <
        0.92
    ) {

        game.pills +=
            1;


        setAdventureMessage(
            "You discovered a Cultivation Pill."
        );

    } else if (
        roll <
        0.96
    ) {

        game.healingPills +=
            1;


        setAdventureMessage(
            "You discovered a Healing Pill."
        );

    } else {

        const weapon =
            generateWeapon();


        game.weapons.push(
            weapon
        );


        setAdventureMessage(
            `Fortuitous encounter! You found ${weapon.rarity} ${weapon.name}.`
        );


        if (
            !fromAuto
        ) {

            notify(
                `${weapon.rarity} ${weapon.name} obtained!`,
                "success"
            );

        }

    }


    saveGame();

    render();

}


/* ========================================================= */
/* HERBS                                                     */
/* ========================================================= */

function gatherHerbs(zone) {

    const available =
        HERBS.slice(
            0,
            Math.min(
                HERBS.length,
                Math.max(
                    2,
                    zone.herbTier
                )
            )
        );


    const amount =
        1 +
        Math.floor(
            Math.random() *
            Math.min(
                4,
                zone.herbTier +
                1
            )
        );


    const names =
        [];


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


        names.push(
            herb.name
        );

    }


    setAdventureMessage(
        `You gathered medicinal herbs: ${names.join(", ")}.`
    );

}


/* ========================================================= */
/* START ENEMY BATTLE                                        */
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
            0.55
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

        type:
            boss
                ? "Region Boss"
                : "Spirit Beast",

        boss,

        power,

        health:
            maxHealth,

        maxHealth,

        zoneId:
            zone.id

    };


    resetSkillCooldowns();


    addBattleLog(
        `${game.currentEnemy.name} appeared!`
    );


    setAdventureMessage(
        boss
            ? `${game.currentEnemy.name}, ruler of the region, has appeared!`
            : `${game.currentEnemy.name} blocks your path.`
    );


    render();

}


/* ========================================================= */
/* BASIC ATTACK                                              */
/* ========================================================= */

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
            1.18 *
            (
                1 +
                game.attributes.soul *
                0.015
            );

    } else {

        damage *=
            1 +
            game.attributes.strength *
            0.01;

    }


    const critical =
        Math.random() <
        0.10;


    if (
        critical
    ) {

        damage *=
            1.75;

    }


    damage =
        Math.floor(
            damage
        );


    game.currentEnemy.health =
        Math.max(
            0,
            game.currentEnemy.health -
            damage
        );


    addBattleLog(
        `Jiang Chue dealt ${formatNumber(damage)} damage${critical ? " — CRITICAL!" : "."}`
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
/* ENEMY TURN                                                */
/* ========================================================= */

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


    if (
        game.currentEnemy.boss
    ) {

        damage *=
            1.12;

    }


    damage =
        Math.max(
            1,
            Math.floor(
                damage
            )
        );


    game.health =
        Math.max(
            0,
            game.health -
            damage
        );


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


/* ========================================================= */
/* WIN BATTLE                                                */
/* ========================================================= */

function winBattle() {

    const enemy =
        game.currentEnemy;


    if (
        !enemy
    ) {

        return;

    }


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
        game.autoBattle
    ) {

        game.autoBattleVictories +=
            1;

    }


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


    let rewardText =
        `${formatNumber(stones)} Spirit Stones`;


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.75
                : 0.12
        )
    ) {

        game.pills +=
            1;


        rewardText +=
            ", Cultivation Pill";

    }


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.65
                : 0.09
        )
    ) {

        game.healingPills +=
            1;


        rewardText +=
            ", Healing Pill";

    }


    if (
        Math.random() <
        (
            enemy.boss
                ? 0.85
                : 0.06
        )
    ) {

        const weapon =
            enemy.boss
                ? generateWeapon(
                    game.realmIndex >=
                    4
                        ? "Epic"
                        : "Rare"
                )
                : generateWeapon();


        game.weapons.push(
            weapon
        );


        rewardText +=
            `, ${weapon.rarity} ${weapon.name}`;

    }


    if (
        enemy.boss
    ) {

        const points =
            3 +
            game.realmIndex;


        game.statPoints +=
            points;


        rewardText +=
            `, ${points} Attribute Points`;

    }


    addBattleLog(
        `${enemy.name} was defeated.`
    );


    if (
        !game.autoBattle
    ) {

        notify(
            `Victory! ${rewardText}`,
            "success"
        );

    }


    setAdventureMessage(
        `You defeated ${enemy.name}.`
    );


    game.currentEnemy =
        null;


    resetSkillCooldowns();


    saveGame();

    render();

}


/* ========================================================= */
/* LOSE BATTLE                                               */
/* ========================================================= */

function loseBattle() {

    const enemy =
        game.currentEnemy;


    game.defeats +=
        1;


    game.health =
        Math.max(
            1,
            Math.floor(
                getMaxHealth() *
                0.2
            )
        );


    const lost =
        Math.floor(
            game.spiritStones *
            0.08
        );


    game.spiritStones =
        Math.max(
            0,
            game.spiritStones -
            lost
        );


    addBattleLog(
        `You were defeated by ${enemy.name}.`
    );


    game.currentEnemy =
        null;


    game.autoBattle =
        false;


    stopAutoBattle();


    notify(
        "Auto-Battle stopped because Jiang Chue was defeated.",
        "error"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* FLEE                                                      */
/* ========================================================= */

function fleeBattle() {

    if (
        !game.currentEnemy
    ) {

        return;

    }


    const success =
        Math.random() <
        (
            0.65 +
            Math.min(
                0.2,
                game.attributes.soul *
                0.002
            )
        );


    if (
        success
    ) {

        addBattleLog(
            `You escaped from ${game.currentEnemy.name}.`
        );


        game.currentEnemy =
            null;


        resetSkillCooldowns();


        setAdventureMessage(
            "You successfully escaped."
        );

    } else {

        enemyTurn();

    }


    saveGame();

    render();

}


/* ========================================================= */
/* AUTO BATTLE                                               */
/* ========================================================= */

function toggleAutoBattle() {

    if (
        game.tribulation
    ) {

        return;

    }


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

    renderAdventure();

}


function startAutoBattle() {

    stopAutoBattle();


    autoBattleTimer =
        setInterval(
            runAutoBattleStep,
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


/* ========================================================= */
/* AUTO BATTLE STEP                                         */
/* ========================================================= */

function runAutoBattleStep() {

    if (
        !game.autoBattle ||
        game.tribulation
    ) {

        return;

    }


    /*
        Heal automatically under 35%.
    */

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
                "Auto-Battle stopped: low health and no Healing Pills.",
                "error"
            );


            render();

            return;

        }

    }


    /*
        Explore if no enemy.
    */

    if (
        !game.currentEnemy
    ) {

        exploreZone(
            true
        );


        return;

    }


    /*
        Use best available combat skill.
    */

    const availableSkills =
        MARTIAL_SKILLS
            .filter(
                skill =>
                    isSkillUnlocked(
                        skill
                    ) &&
                    getSkillCooldown(
                        skill.id
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
            );


    if (
        availableSkills.length >
        0
    ) {

        useMartialSkill(
            availableSkills[0]
                .id
        );

    } else {

        playerAttack(
            false
        );

    }

}


/* ========================================================= */
/* MISSIONS                                                  */
/* ========================================================= */

function getMissionProgress(
    mission
) {

    switch (
        mission.type
    ) {

        case "kills":
            return game.enemiesSlain;

        case "bosses":
            return game.bossesSlain;

        case "victories":
            return game.victories;

        default:
            return 0;

    }

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


    game.statPoints +=
        reward.statPoints ||
        0;


    game.pills +=
        reward.pills ||
        0;


    game.healingPills +=
        reward.healingPills ||
        0;


    if (
        reward.weapon
    ) {

        game.weapons.push(
            generateWeapon(
                game.realmIndex >=
                3
                    ? "Rare"
                    : "Uncommon"
            )
        );

    }


    game.missionClaims[
        id
    ] =
        true;


    notify(
        `Mission completed: ${mission.name}`,
        "success"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* SECT DUTIES                                               */
/* ========================================================= */

function getDutyValue(duty) {

    switch (
        duty.type
    ) {

        case "expeditions":
            return game.expeditions;

        case "kills":
            return game.enemiesSlain;

        case "herbs":
            return game.herbsGathered;

        case "bosses":
            return game.bossesSlain;

        default:
            return 0;

    }

}


function getDutyProgress(duty) {

    return Math.max(
        0,
        getDutyValue(
            duty
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


    game.sectDutyCount +=
        1;


    game.sectDutyBaseline[
        duty.id
    ] =
        getDutyValue(
            duty
        );


    notify(
        `Sect duty completed: +${duty.contribution} Contribution.`,
        "success"
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
                getSectRank()
                    .treasuryDiscount
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
                6
            );

            break;


        case "attribute-point":

            game.statPoints +=
                1;

            break;


        case "sect-weapon":

            game.weapons.push(
                generateWeapon(
                    "Uncommon"
                )
            );

            break;

    }


    notify(
        `${item.name} obtained from the Sect Treasury.`,
        "success"
    );


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
/* ALCHEMY                                                  */
/* ========================================================= */

function getAlchemySuccessBonus() {

    return (
        getAlchemyLevelIndex() *
        4 +
        game.attributes.soul *
        0.1
    );

}


function hasRecipeMaterials(recipe) {

    return Object.entries(
        recipe.materials
    ).every(
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


function consumeRecipeMaterials(recipe) {

    Object.entries(
        recipe.materials
    ).forEach(
        (
            [
                id,
                amount
            ]
        ) => {

            game.herbs[
                id
            ] -=
                amount;

        }
    );

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
        getAlchemyLevelIndex() <
        recipe.unlockLevel ||
        !hasRecipeMaterials(
            recipe
        )
    ) {

        return;

    }


    consumeRecipeMaterials(
        recipe
    );


    const chance =
        Math.min(
            98,
            recipe.baseChance +
            getAlchemySuccessBonus()
        );


    if (
        Math.random() *
        100 <=
        chance
    ) {

        game.alchemySuccess +=
            1;


        game.alchemyExp +=
            15 +
            recipe.unlockLevel *
            12;


        grantAlchemyResult(
            recipe.result
        );


        notify(
            `Alchemy successful: ${recipe.name}!`,
            "success"
        );

    } else {

        game.alchemyFails +=
            1;


        game.alchemyExp +=
            5;


        notify(
            `${recipe.name} refinement failed.`,
            "error"
        );

    }


    saveGame();

    render();

}


function grantAlchemyResult(result) {

    game.pills +=
        result.pills ||
        0;


    game.healingPills +=
        result.healingPills ||
        0;


    game.statPoints +=
        result.statPoints ||
        0;


    game.breakthroughPills +=
        result.breakthroughPills ||
        0;


    if (
        result.soul
    ) {

        game.attributes.soul +=
            result.soul;

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


        case "common-herbs":

            grantRandomHerbs(
                5
            );

            break;


        case "mystery-weapon":

            game.weapons.push(
                generateWeapon()
            );

            break;

    }


    notify(
        `${item.name} purchased.`,
        "success"
    );


    saveGame();

    render();

}


function getWeaponSellPrice(weapon) {

    const rarity =
        RARITIES.find(
            item =>
                item.name ===
                weapon.rarity
        ) ||
        RARITIES[0];


    return Math.max(
        25,
        Math.floor(
            weapon.power *
            1.2 *
            rarity.sellMultiplier
        )
    );

}


function sellWeapon(id) {

    const index =
        game.weapons.findIndex(
            item =>
                item.id ===
                id
        );


    if (
        index <
        0
    ) {

        return;

    }


    const weapon =
        game.weapons[
            index
        ];


    if (
        weapon.id ===
        game.equippedWeaponId
    ) {

        notify(
            "Unequip this weapon before selling it.",
            "error"
        );

        return;

    }


    const price =
        getWeaponSellPrice(
            weapon
        );


    game.spiritStones +=
        price;


    game.weapons.splice(
        index,
        1
    );


    notify(
        `${weapon.name} sold for ${formatNumber(price)} Spirit Stones.`,
        "success"
    );


    saveGame();

    render();

}


/* ========================================================= */
/* DAILY SIGN-IN                                             */
/* ========================================================= */

function canSignInToday() {

    return (
        !game.lastSignIn ||
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


    let streak =
        1;


    if (
        game.lastSignIn
    ) {

        const yesterday =
            new Date();


        yesterday.setDate(
            yesterday.getDate() -
            1
        );


        if (
            game.lastSignIn ===
            getDateString(
                yesterday
            )
        ) {

            streak =
                game.dailyStreak +
                1;

        }

    }


    game.dailyStreak =
        streak;


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


    if (
        reward.herbs
    ) {

        grantRandomHerbs(
            reward.herbs
        );

    }


    if (
        reward.weapon
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }


    notify(
        `Day ${game.dailyStreak} reward claimed.`,
        "success"
    );


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


    rollRandomCultivationEvent();


    /*
        Passive health regeneration.
    */

    if (
        !game.currentEnemy &&
        !game.tribulation &&
        game.health <
        getMaxHealth()
    ) {

        game.health =
            Math.min(
                getMaxHealth(),
                game.health +
                getMaxHealth() *
                0.001
            );

    }


    renderCore();

}


/* ========================================================= */
/* RANDOM CULTIVATION EVENT                                  */
/* ========================================================= */

function rollRandomCultivationEvent() {

    if (
        Math.random() >
        0.02
    ) {

        return;

    }


    const roll =
        Math.random();


    if (
        roll <
        0.4
    ) {

        addQi(
            getQiPerSecond() *
            20
        );

    } else if (
        roll <
        0.65
    ) {

        game.spiritStones +=
            15 +
            game.realmIndex *
            15;

    } else if (
        roll <
        0.82
    ) {

        game.pills +=
            1;

    } else {

        grantRandomHerbs(
            1
        );

    }

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


function setSystemMessage(message) {

    byId(
        "systemMessage"
    ).textContent =
        message;

}


function setAdventureMessage(message) {

    byId(
        "adventureMessage"
    ).textContent =
        message;

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

    game.health =
        Math.min(
            game.health,
            getMaxHealth()
        );


    const realm =
        getCurrentRealm();


    const root =
        getCurrentRoot();


    const technique =
        getCurrentTechnique();


    const weapon =
        getEquippedWeapon();


    const requirement =
        getQiRequirement();


    const mastery =
        getTechniqueMastery();


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
        "healthDisplay"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "qiPerSecondDisplay"
    ).textContent =
        formatNumber(
            getQiPerSecond()
        );


    byId(
        "spiritStoneDisplay"
    ).textContent =
        formatNumber(
            game.spiritStones
        );


    byId(
        "statPointDisplay"
    ).textContent =
        game.statPoints;


    byId(
        "sectContributionMiniDisplay"
    ).textContent =
        formatNumber(
            game.sectContribution
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
        `${mastery}%`;


    byId(
        "techniqueMasteryText"
    ).textContent =
        `Mastery ${mastery.toFixed(1)}%`;


    byId(
        "pillCountDisplay"
    ).textContent =
        game.pills;


    byId(
        "healingPillDisplay"
    ).textContent =
        game.healingPills;


    byId(
        "breakthroughPillDisplay"
    ).textContent =
        game.breakthroughPills;


    byId(
        "totalHerbDisplay"
    ).textContent =
        Object.values(
            game.herbs
        )
            .reduce(
                (
                    total,
                    amount
                ) =>
                    total +
                    amount,
                0
            );


    if (
        weapon
    ) {

        byId(
            "equippedWeaponName"
        ).textContent =
            `${weapon.rarity} ${weapon.name}`;


        byId(
            "equippedWeaponName"
        ).className =
            `rarity-${weapon.rarity.toLowerCase()}`;


        byId(
            "equippedWeaponStats"
        ).textContent =
            `Combat Power +${formatNumber(weapon.power)}`;

    } else {

        byId(
            "equippedWeaponName"
        ).textContent =
            "None";


        byId(
            "equippedWeaponName"
        ).className =
            "";


        byId(
            "equippedWeaponStats"
        ).textContent =
            "No weapon equipped.";

    }


    const canSign =
        canSignInToday();


    byId(
        "signInButton"
    ).disabled =
        !canSign;


    byId(
        "signInButton"
    ).textContent =
        canSign
            ? "Daily Sign-In"
            : "Already Signed In";


    byId(
        "dailyStatus"
    ).textContent =
        canSign
            ? "Sign-in reward available."
            : "Today's reward has already been claimed.";


    byId(
        "streakDisplay"
    ).textContent =
        game.dailyStreak;


    byId(
        "breakthroughButton"
    ).textContent =
        game.qi >=
        requirement
            ? (
                game.breakthroughBuff >
                0
                    ? "Attempt Breakthrough (+15%)"
                    : (
                        game.stageIndex ===
                            STAGES.length -
                            1 &&
                        TRIBULATION_REALMS.includes(
                            game.realmIndex +
                            1
                        )
                            ? "Challenge Heavenly Tribulation"
                            : "Attempt Breakthrough"
                    )
            )
            : `Need ${formatNumber(requirement)} Qi`;

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


    for (
        const technique
        of TECHNIQUES
    ) {

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

                    ${technique.description}

                    <br><br>

                    Qi Production:
                    +${Math.round(technique.qiBonus * 100)}%

                    <br>

                    Mastery:
                    ${getTechniqueMastery(technique.id).toFixed(1)}%

                </div>

                <button
                    data-technique="${technique.id}"
                    ${active || !unlocked ? "disabled" : ""}
                >
                    ${
                        active
                            ? "Currently Cultivating"
                            : unlocked
                                ? "Cultivate Technique"
                                : `Unlock at ${REALMS[technique.unlockRealm].name}`
                    }
                </button>
            `;


        container.appendChild(
            card
        );

    }


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
/* MARTIAL ARTS RENDER                                       */
/* ========================================================= */

function renderMartialSkills() {

    const container =
        byId(
            "martialSkillList"
        );


    container.innerHTML =
        "";


    for (
        const skill
        of MARTIAL_SKILLS
    ) {

        const unlocked =
            isSkillUnlocked(
                skill
            );


        const mastery =
            getSkillMastery(
                skill.id
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
                    ${skill.type} Technique
                </div>

                <p>
                    ${skill.description}
                </p>

                <div class="skill-data-grid">

                    <div>
                        <span>Damage</span>
                        <strong>
                            ×${skill.damageMultiplier.toFixed(2)}
                        </strong>
                    </div>

                    <div>
                        <span>Cooldown</span>
                        <strong>
                            ${skill.cooldown} turns
                        </strong>
                    </div>

                    <div>
                        <span>Mastery</span>
                        <strong>
                            ${mastery.toFixed(1)}%
                        </strong>
                    </div>

                    <div>
                        <span>Requirement</span>
                        <strong>
                            ${
                                unlocked
                                    ? "Learned"
                                    : REALMS[skill.unlockRealm].name
                            }
                        </strong>
                    </div>

                </div>

                <div class="skill-mastery-bar">

                    <div
                        class="skill-mastery-fill"
                        style="width:${mastery}%"
                    ></div>

                </div>
            `;


        container.appendChild(
            card
        );

    }


    const known =
        MARTIAL_SKILLS.filter(
            isSkillUnlocked
        );


    byId(
        "knownSkillCountDisplay"
    ).textContent =
        known.length;


    byId(
        "skillUsesDisplay"
    ).textContent =
        formatNumber(
            game.totalSkillUses
        );


    const highest =
        Math.max(
            0,
            ...Object.values(
                game.skillMastery
            )
        );


    byId(
        "highestSkillMasteryDisplay"
    ).textContent =
        `${highest.toFixed(1)}%`;

}


/* ========================================================= */
/* COMBAT SKILL BUTTONS                                      */
/* ========================================================= */

function renderCombatSkillButtons(
    containerId,
    againstTribulation =
        false
) {

    const container =
        byId(
            containerId
        );


    container.innerHTML =
        "";


    const unlocked =
        MARTIAL_SKILLS.filter(
            isSkillUnlocked
        );


    for (
        const skill
        of unlocked
    ) {

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
                    ${skill.type} • ×${skill.damageMultiplier.toFixed(2)}
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
                    skill.id,
                    againstTribulation
                );


        container.appendChild(
            button
        );

    }

}


/* ========================================================= */
/* CULTIVATION LOG                                           */
/* ========================================================= */

function renderCultivationLog() {

    const container =
        byId(
            "cultivationLog"
        );


    container.innerHTML =
        "";


    for (
        const entry
        of game.log
    ) {

        const row =
            document.createElement(
                "div"
            );


        row.className =
            "log-entry";


        row.innerHTML =
            `
                <span class="log-time">
                    ${entry.time}
                </span>

                <span class="${entry.important ? "log-important" : ""}">
                    ${entry.message}
                </span>
            `;


        container.appendChild(
            row
        );

    }

}


/* ========================================================= */
/* REALM PATH                                               */
/* ========================================================= */

function renderRealmPath() {

    const container =
        byId(
            "realmPath"
        );


    container.innerHTML =
        "";


    REALMS.forEach(
        (
            realm,
            index
        ) => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "realm-path-item";


            let name =
                realm.name;


            if (
                TRIBULATION_REALMS.includes(
                    index
                )
            ) {

                name =
                    `⚡ ${name}`;

            }


            element.textContent =
                name;


            if (
                index <
                game.realmIndex
            ) {

                element.classList.add(
                    "completed"
                );

            }


            if (
                index ===
                game.realmIndex
            ) {

                element.classList.add(
                    "current"
                );

            }


            container.appendChild(
                element
            );

        }
    );

}


/* ========================================================= */
/* ADVENTURE RENDER                                         */
/* ========================================================= */

function renderAdventure() {

    const zone =
        getSelectedZone();


    const weapon =
        getEquippedWeapon();


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
        "battleWeaponDisplay"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";


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
        "autoVictoryDisplay"
    ).textContent =
        game.autoBattleVictories;


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
            "enemyNameDisplay"
        ).textContent =
            enemy.name;


        byId(
            "enemyTypeDisplay"
        ).textContent =
            enemy.type;


        byId(
            "enemyRealmDisplay"
        ).textContent =
            enemy.boss
                ? "Region Lord"
                : zone.name;


        byId(
            "enemyPowerDisplay"
        ).textContent =
            formatNumber(
                enemy.power
            );


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
            "enemyRewardPreview"
        ).textContent =
            enemy.boss
                ? "High"
                : "Normal";


        byId(
            "enemySymbol"
        ).textContent =
            enemy.boss
                ? "王"
                : "妖";


        renderCombatSkillButtons(
            "battleSkillButtons"
        );

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


    for (
        const zone
        of ZONES
    ) {

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
            unlocked &&
            !game.autoBattle
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


    for (
        const mission
        of MISSIONS
    ) {

        const progress =
            getMissionProgress(
                mission
            );


        const complete =
            progress >=
            mission.target;


        const claimed =
            Boolean(
                game.missionClaims[
                    mission.id
                ]
            );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "mission-card";


        if (
            claimed
        ) {

            card.classList.add(
                "completed"
            );

        }


        card.innerHTML =
            `
                <h3>
                    ${mission.name}
                </h3>

                <p>
                    ${mission.description}
                </p>

                <div class="mission-progress">
                    ${Math.min(progress, mission.target)} / ${mission.target}
                </div>

                <button
                    data-mission="${mission.id}"
                    ${!complete || claimed ? "disabled" : ""}
                >
                    ${
                        claimed
                            ? "Claimed"
                            : complete
                                ? "Claim Reward"
                                : "Incomplete"
                    }
                </button>
            `;


        container.appendChild(
            card
        );

    }


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
        "";


    if (
        game.battleLog.length ===
        0
    ) {

        container.innerHTML =
            `
                <div class="log-entry">
                    No battles yet.
                </div>
            `;


        return;

    }


    for (
        const entry
        of game.battleLog
    ) {

        const row =
            document.createElement(
                "div"
            );


        row.className =
            "log-entry";


        row.innerHTML =
            `
                <span class="log-time">
                    ${entry.time}
                </span>

                <span>
                    ${entry.message}
                </span>
            `;


        container.appendChild(
            row
        );

    }

}


/* ========================================================= */
/* ZONE PROGRESS                                            */
/* ========================================================= */

function renderZoneProgress() {

    const container =
        byId(
            "zoneProgressList"
        );


    container.innerHTML =
        "";


    for (
        const zone
        of ZONES
    ) {

        const unlocked =
            game.realmIndex >=
            zone.requiredRealm;


        const threat =
            game.zoneBossProgress[
                zone.id
            ] ||
            0;


        const element =
            document.createElement(
                "div"
            );


        element.className =
            "realm-path-item";


        if (
            zone.id ===
            game.selectedZone
        ) {

            element.classList.add(
                "current"
            );

        }


        element.textContent =
            unlocked
                ? `${zone.name} — Boss Threat ${Math.min(threat, 5)}/5`
                : `${zone.name} — Locked`;


        container.appendChild(
            element
        );

    }

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
        "sectDutyCountDisplay"
    ).textContent =
        game.sectDutyCount;


    renderSectRanks();

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
                ${rank.description}
            </p>

            <p>
                Qi Generation Bonus:
                +${Math.round(rank.qiBonus * 100)}%
            </p>

            <p>
                Treasury Discount:
                ${Math.round(rank.treasuryDiscount * 100)}%
            </p>
        `;

}


function renderSectRanks() {

    const container =
        byId(
            "sectRankList"
        );


    container.innerHTML =
        "";


    const current =
        getSectRankIndex();


    SECT_RANKS.forEach(
        (
            rank,
            index
        ) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "rank-card";


            if (
                index ===
                current
            ) {

                card.classList.add(
                    "current"
                );

            }


            if (
                game.totalSectContribution <
                rank.contributionRequired
            ) {

                card.classList.add(
                    "locked"
                );

            }


            card.innerHTML =
                `
                    <h3>
                        ${rank.name}
                    </h3>

                    <p>
                        Requires ${formatNumber(rank.contributionRequired)}
                        total Contribution.
                    </p>

                    <p>
                        Qi Bonus +${Math.round(rank.qiBonus * 100)}%
                    </p>
                `;


            container.appendChild(
                card
            );

        }
    );

}


function renderSectTreasury() {

    const container =
        byId(
            "sectTreasuryList"
        );


    container.innerHTML =
        "";


    for (
        const item
        of SECT_TREASURY
    ) {

        const cost =
            Math.ceil(
                item.cost *
                (
                    1 -
                    getSectRank()
                        .treasuryDiscount
                )
            );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "shop-item";


        card.innerHTML =
            `
                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <div class="item-price">
                        ${formatNumber(cost)} Contribution
                    </div>

                </div>

                <button
                    data-sect-item="${item.id}"
                    ${game.sectContribution < cost ? "disabled" : ""}
                >
                    Exchange
                </button>
            `;


        container.appendChild(
            card
        );

    }


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


    for (
        const duty
        of SECT_DUTIES
    ) {

        const progress =
            getDutyProgress(
                duty
            );


        const complete =
            progress >=
            duty.target;


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "duty-card";


        card.innerHTML =
            `
                <h3>
                    ${duty.name}
                </h3>

                <p>
                    ${duty.description}
                </p>

                <div class="duty-progress">
                    ${Math.min(progress, duty.target)} / ${duty.target}
                    • +${duty.contribution} Contribution
                </div>

                <button
                    data-duty="${duty.id}"
                    ${!complete ? "disabled" : ""}
                >
                    ${complete ? "Complete Duty" : "Incomplete"}
                </button>
            `;


        container.appendChild(
            card
        );

    }


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

    renderHerbs();

    renderRecipes();


    const index =
        getAlchemyLevelIndex();


    const level =
        ALCHEMY_LEVELS[
            index
        ];


    const next =
        ALCHEMY_LEVELS[
            index +
            1
        ];


    byId(
        "alchemyLevelDisplay"
    ).textContent =
        level.name;


    if (
        next
    ) {

        const progress =
            (
                game.alchemyExp -
                level.required
            ) /
            (
                next.required -
                level.required
            ) *
            100;


        byId(
            "alchemyExpBar"
        ).style.width =
            `${Math.max(
                0,
                Math.min(
                    100,
                    progress
                )
            )}%`;


        byId(
            "alchemyExpText"
        ).textContent =
            `${formatNumber(game.alchemyExp)} / ${formatNumber(next.required)} Mastery`;

    } else {

        byId(
            "alchemyExpBar"
        ).style.width =
            "100%";


        byId(
            "alchemyExpText"
        ).textContent =
            `${formatNumber(game.alchemyExp)} Mastery`;

    }


    byId(
        "alchemySuccessDisplay"
    ).textContent =
        game.alchemySuccess;


    byId(
        "alchemyFailDisplay"
    ).textContent =
        game.alchemyFails;

}


function renderHerbs() {

    const container =
        byId(
            "herbInventoryList"
        );


    container.innerHTML =
        "";


    for (
        const herb
        of HERBS
    ) {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "herb-card";


        card.innerHTML =
            `
                <div class="herb-icon">
                    ${herb.icon}
                </div>

                <strong>
                    ${herb.name}
                </strong>

                <span>
                    ×${game.herbs[herb.id] || 0}
                </span>
            `;


        container.appendChild(
            card
        );

    }

}


function renderRecipes() {

    const container =
        byId(
            "alchemyRecipeList"
        );


    container.innerHTML =
        "";


    for (
        const recipe
        of ALCHEMY_RECIPES
    ) {

        const unlocked =
            getAlchemyLevelIndex() >=
            recipe.unlockLevel;


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

                        const herb =
                            HERBS.find(
                                item =>
                                    item.id ===
                                    id
                            );


                        return `${herb.name} ×${amount}`;

                    }
                )
                .join(
                    ", "
                );


        const chance =
            Math.min(
                98,
                recipe.baseChance +
                getAlchemySuccessBonus()
            );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "recipe-card";


        card.innerHTML =
            `
                <h3>
                    ${recipe.name}
                </h3>

                <p>
                    ${recipe.description}
                </p>

                <div class="recipe-material">
                    ${materials}
                </div>

                <div class="item-price">
                    Success Chance: ${chance.toFixed(1)}%
                </div>

                <button
                    data-recipe="${recipe.id}"
                    ${!unlocked || !hasRecipeMaterials(recipe) ? "disabled" : ""}
                >
                    ${
                        unlocked
                            ? "Refine Pill"
                            : `Requires ${ALCHEMY_LEVELS[recipe.unlockLevel].name}`
                    }
                </button>
            `;


        container.appendChild(
            card
        );

    }


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


    const shop =
        byId(
            "marketShopList"
        );


    shop.innerHTML =
        "";


    for (
        const item
        of MARKET_ITEMS
    ) {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "shop-item";


        card.innerHTML =
            `
                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <div class="item-price">
                        ${formatNumber(item.price)} Spirit Stones
                    </div>

                </div>

                <button
                    data-market-buy="${item.id}"
                    ${game.spiritStones < item.price ? "disabled" : ""}
                >
                    Buy
                </button>
            `;


        shop.appendChild(
            card
        );

    }


    document
        .querySelectorAll(
            "[data-market-buy]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        buyMarketItem(
                            button.dataset.marketBuy
                        );

            }
        );


    renderMarketWeapons();

}


function renderMarketWeapons() {

    const container =
        byId(
            "marketWeaponList"
        );


    container.innerHTML =
        "";


    if (
        game.weapons.length ===
        0
    ) {

        container.innerHTML =
            `
                <div class="shop-item">

                    <div>

                        <h3>
                            No weapons to sell
                        </h3>

                        <p>
                            Explore or defeat enemies to obtain spirit weapons.
                        </p>

                    </div>

                </div>
            `;


        return;

    }


    const sorted =
        [...game.weapons]
            .sort(
                (
                    a,
                    b
                ) =>
                    b.power -
                    a.power
            );


    for (
        const weapon
        of sorted
    ) {

        const equipped =
            weapon.id ===
            game.equippedWeaponId;


        const price =
            getWeaponSellPrice(
                weapon
            );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "shop-item";


        card.innerHTML =
            `
                <div>

                    <h3 class="rarity-${weapon.rarity.toLowerCase()}">
                        ${weapon.rarity} ${weapon.name}
                    </h3>

                    <p>
                        Combat Power +${formatNumber(weapon.power)}
                    </p>

                    <div class="item-price">
                        Sell: ${formatNumber(price)} Spirit Stones
                    </div>

                </div>

                <button
                    data-sell-weapon="${weapon.id}"
                    ${equipped ? "disabled" : ""}
                >
                    ${equipped ? "Equipped" : "Sell"}
                </button>
            `;


        container.appendChild(
            card
        );

    }


    document
        .querySelectorAll(
            "[data-sell-weapon]"
        )
        .forEach(
            button => {

                button.onclick =
                    () =>
                        sellWeapon(
                            button.dataset.sellWeapon
                        );

            }
        );

}


/* ========================================================= */
/* EQUIPMENT RENDER                                          */
/* ========================================================= */

function renderWeaponInventory() {

    const container =
        byId(
            "weaponInventoryList"
        );


    container.innerHTML =
        "";


    if (
        game.weapons.length ===
        0
    ) {

        container.innerHTML =
            `
                <div class="weapon-card">

                    <div>

                        <h3>
                            No Spirit Weapons
                        </h3>

                        <p>
                            Explore the world to obtain treasures.
                        </p>

                    </div>

                </div>
            `;


        return;

    }


    const sorted =
        [...game.weapons]
            .sort(
                (
                    a,
                    b
                ) =>
                    b.power -
                    a.power
            );


    for (
        const weapon
        of sorted
    ) {

        const equipped =
            weapon.id ===
            game.equippedWeaponId;


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "weapon-card";


        if (
            equipped
        ) {

            card.classList.add(
                "equipped"
            );

        }


        card.innerHTML =
            `
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
            `;


        container.appendChild(
            card
        );

    }


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


                        renderWeaponInventory();

                    };

            }
        );

}


/* ========================================================= */
/* PILL RENDER                                               */
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


    byId(
        "modalUseCultivationPill"
    ).disabled =
        game.pills <=
        0;


    byId(
        "modalUseHealingPill"
    ).disabled =
        game.healingPills <=
        0 ||
        game.health >=
        getMaxHealth();


    byId(
        "modalUseBreakthroughPill"
    ).disabled =
        game.breakthroughPills <=
        0 ||
        game.breakthroughBuff >
        0;

}


/* ========================================================= */
/* STATUS RENDER                                             */
/* ========================================================= */

function renderStatus() {

    const weapon =
        getEquippedWeapon();


    byId(
        "statusNameDisplay"
    ).textContent =
        game.playerName;


    byId(
        "statusRealmDisplay"
    ).textContent =
        `${getCurrentRealm().name} · ${STAGES[game.stageIndex]}`;


    byId(
        "statusRootDisplay"
    ).textContent =
        game.spiritualRoot;


    byId(
        "statusStrengthDisplay"
    ).textContent =
        game.attributes.strength;


    byId(
        "statusConstitutionDisplay"
    ).textContent =
        game.attributes.constitution;


    byId(
        "statusSoulDisplay"
    ).textContent =
        game.attributes.soul;


    byId(
        "statusHealthDisplay"
    ).textContent =
        `${formatNumber(game.health)} / ${formatNumber(getMaxHealth())}`;


    byId(
        "statusCombatDisplay"
    ).textContent =
        formatNumber(
            getCombatPower()
        );


    byId(
        "statusQiGenerationDisplay"
    ).textContent =
        `${formatNumber(getQiPerSecond())} Qi/sec`;


    byId(
        "statusTechniqueDisplay"
    ).textContent =
        getCurrentTechnique()
            .name;


    byId(
        "statusWeaponDisplay"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";


    byId(
        "statusSectRankDisplay"
    ).textContent =
        getSectRank()
            .name;


    byId(
        "statusAlchemyRankDisplay"
    ).textContent =
        getAlchemyLevel()
            .name;


    byId(
        "statusTribulationDisplay"
    ).textContent =
        game.tribulationsSurvived;


    byId(
        "statusAutoBattleDisplay"
    ).textContent =
        game.autoBattleVictories;

}


/* ========================================================= */
/* FULL RENDER                                               */
/* ========================================================= */

function render() {

    renderCore();

    renderTechniques();

    renderMartialSkills();

    renderCultivationLog();

    renderRealmPath();

    renderAdventure();

    renderSect();

    renderAlchemy();

    renderMarket();

    renderStatus();

    renderPills();

    renderTribulation();


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
/* NOTIFICATION                                              */
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
        3800
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
        "floating-qi";


    element.textContent =
        `+${formatNumber(amount)} Qi`;


    const rect =
        byId(
            "cultivateButton"
        ).getBoundingClientRect();


    element.style.left =
        `${
            event?.clientX ||
            rect.left +
            rect.width /
            2
        }px`;


    element.style.top =
        `${
            event?.clientY ||
            rect.top +
            rect.height /
            2
        }px`;


    document.body.appendChild(
        element
    );


    setTimeout(
        () =>
            element.remove(),
        1000
    );

}


/* ========================================================= */
/* OFFLINE                                                   */
/* ========================================================= */

function calculateOfflineProgress() {

    if (
        !game.lastPlayed
    ) {

        return;

    }


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


    pendingOfflineQi =
        getQiPerSecond() *
        seconds *
        0.75;


    byId(
        "offlineTimeDisplay"
    ).textContent =
        formatDuration(
            seconds
        );


    byId(
        "offlineQiDisplay"
    ).textContent =
        `+${formatNumber(pendingOfflineQi)} Qi`;


    byId(
        "offlineModal"
    ).classList.remove(
        "hidden"
    );

}


function claimOfflineProgress() {

    if (
        pendingOfflineQi <=
        0
    ) {

        return;

    }


    addQi(
        pendingOfflineQi
    );


    addLog(
        `Offline cultivation generated ${formatNumber(pendingOfflineQi)} Qi.`,
        true
    );


    pendingOfflineQi =
        0;


    byId(
        "offlineModal"
    ).classList.add(
        "hidden"
    );


    saveGame();

    render();

}


function formatDuration(seconds) {

    if (
        seconds <
        60
    ) {

        return `${seconds} seconds`;

    }


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
/* SAVE                                                     */
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
            "Cultivation progress saved.",
            "success"
        );

    }

}


/* ========================================================= */
/* LOAD                                                     */
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

            skillCooldowns: {},

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


        if (
            !Array.isArray(
                game.weapons
            )
        ) {

            game.weapons =
                [];

        }


        if (
            !Array.isArray(
                game.log
            )
        ) {

            game.log =
                [];

        }


        if (
            !Array.isArray(
                game.battleLog
            )
        ) {

            game.battleLog =
                [];

        }


        /*
            Do not restore active battles,
            tribulations or auto-battle.
        */

        game.currentEnemy =
            null;


        game.tribulation =
            null;


        game.pendingRealmAscension =
            null;


        game.autoBattle =
            false;


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
            "Save load error:",
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
            "Erase all cultivation progress and reincarnate?"
        );


    if (
        !confirmed
    ) {

        return;

    }


    stopAutoBattle();


    localStorage.removeItem(
        SAVE_KEY
    );


    for (
        const key
        of OLD_SAVE_KEYS
    ) {

        localStorage.removeItem(
            key
        );

    }


    game =
        createDefaultState();


    game.health =
        getMaxHealth();


    saveGame();


    openPage(
        "cultivationPage"
    );


    render();

}


/* ========================================================= */
/* PARTICLES                                                 */
/* ========================================================= */

function createParticles() {

    const container =
        byId(
            "particles"
        );


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
            3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${10 + Math.random() * 18}s`;


        particle.style.animationDelay =
            `${Math.random() * 20}s`;


        container.appendChild(
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

            button.addEventListener(
                "click",
                () =>
                    openPage(
                        button.dataset.page
                    )
            );

        }
    );


byId(
    "cultivateButton"
).addEventListener(
    "click",
    manuallyCultivate
);


byId(
    "breakthroughButton"
).addEventListener(
    "click",
    attemptBreakthrough
);


byId(
    "signInButton"
).addEventListener(
    "click",
    claimDailyReward
);


byId(
    "exploreButton"
).addEventListener(
    "click",
    () =>
        exploreZone(
            false
        )
);


byId(
    "attackButton"
).addEventListener(
    "click",
    () =>
        playerAttack(
            false
        )
);


byId(
    "spiritualAttackButton"
).addEventListener(
    "click",
    () =>
        playerAttack(
            true
        )
);


byId(
    "fleeButton"
).addEventListener(
    "click",
    fleeBattle
);


byId(
    "healButton"
).addEventListener(
    "click",
    useHealingPill
);


byId(
    "battleHealButton"
).addEventListener(
    "click",
    () => {

        if (
            useHealingPill() &&
            game.currentEnemy
        ) {

            enemyTurn();

            render();

        }

    }
);


byId(
    "autoBattleButton"
).addEventListener(
    "click",
    toggleAutoBattle
);


/* ========================================================= */
/* ATTRIBUTES                                                */
/* ========================================================= */

document
    .querySelectorAll(
        ".attribute-upgrade"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () =>
                    upgradeAttribute(
                        button.dataset.stat
                    )
            );

        }
    );


/* ========================================================= */
/* STATUS                                                    */
/* ========================================================= */

byId(
    "statusButton"
).addEventListener(
    "click",
    () => {

        renderStatus();


        byId(
            "statusModal"
        ).classList.remove(
            "hidden"
        );

    }
);


byId(
    "closeStatusButton"
).addEventListener(
    "click",
    () =>
        byId(
            "statusModal"
        ).classList.add(
            "hidden"
        )
);


/* ========================================================= */
/* EQUIPMENT                                                */
/* ========================================================= */

byId(
    "openInventoryButton"
).addEventListener(
    "click",
    () => {

        renderWeaponInventory();


        byId(
            "equipmentModal"
        ).classList.remove(
            "hidden"
        );

    }
);


byId(
    "closeEquipmentButton"
).addEventListener(
    "click",
    () =>
        byId(
            "equipmentModal"
        ).classList.add(
            "hidden"
        )
);


/* ========================================================= */
/* PILL INVENTORY                                            */
/* ========================================================= */

byId(
    "openPillsButton"
).addEventListener(
    "click",
    () => {

        renderPills();


        byId(
            "pillModal"
        ).classList.remove(
            "hidden"
        );

    }
);


byId(
    "closePillButton"
).addEventListener(
    "click",
    () =>
        byId(
            "pillModal"
        ).classList.add(
            "hidden"
        )
);


byId(
    "modalUseCultivationPill"
).addEventListener(
    "click",
    () => {

        useCultivationPill();

        renderPills();

    }
);


byId(
    "modalUseHealingPill"
).addEventListener(
    "click",
    () => {

        useHealingPill();

        renderPills();

    }
);


byId(
    "modalUseBreakthroughPill"
).addEventListener(
    "click",
    () => {

        useBreakthroughPill();

        renderPills();

    }
);


/* ========================================================= */
/* TRIBULATION                                              */
/* ========================================================= */

byId(
    "tribulationAttackButton"
).addEventListener(
    "click",
    tribulationAttack
);


byId(
    "tribulationHealButton"
).addEventListener(
    "click",
    () => {

        if (
            useHealingPill() &&
            game.tribulation
        ) {

            tribulationEnemyTurn();

            render();

        }

    }
);


/* ========================================================= */
/* SAVE / RESET                                              */
/* ========================================================= */

byId(
    "saveButton"
).addEventListener(
    "click",
    () =>
        saveGame(
            true
        )
);


byId(
    "resetButton"
).addEventListener(
    "click",
    resetGame
);


byId(
    "claimOfflineButton"
).addEventListener(
    "click",
    claimOfflineProgress
);


/* ========================================================= */
/* CLOSE MODALS OUTSIDE                                      */
/* ========================================================= */

[
    "statusModal",
    "equipmentModal",
    "pillModal"
]
    .forEach(
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
/* SAVE WHEN LEAVING                                         */
/* ========================================================= */

window.addEventListener(
    "beforeunload",
    () =>
        saveGame()
);


document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "hidden"
        ) {

            saveGame();

        }

    }
);


/* ========================================================= */
/* INITIALIZATION                                            */
/* ========================================================= */

function initializeGame() {

    loadGame();


    calculateOfflineProgress();


    createParticles();


    render();


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


initializeGame();
