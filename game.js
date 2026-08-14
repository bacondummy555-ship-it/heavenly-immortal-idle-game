"use strict";


/* ========================================================= */
/* CONFIG                                                    */
/* ========================================================= */

const SAVE_KEY =
    "idleCultivationSaveV3";

const OLD_SAVE_KEYS = [
    "idleCultivationSaveV2",
    "idleCultivationSaveV1"
];

const TICK_RATE =
    1000;

const AUTO_SAVE_INTERVAL =
    10000;

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


/* ========================================================= */
/* SPIRITUAL ROOTS                                           */
/* ========================================================= */

const SPIRITUAL_ROOTS = [

    {
        name: "Five Element Root",
        rarity: "Common",
        qiBonus: 0.05,
        breakthroughBonus: 0
    },

    {
        name: "Dual Spiritual Root",
        rarity: "Uncommon",
        qiBonus: 0.12,
        breakthroughBonus: 2
    },

    {
        name: "Heavenly Spiritual Root",
        rarity: "Rare",
        qiBonus: 0.25,
        breakthroughBonus: 5
    },

    {
        name: "Sword Spiritual Root",
        rarity: "Epic",
        qiBonus: 0.30,
        breakthroughBonus: 5
    },

    {
        name: "Primordial Chaos Root",
        rarity: "Legendary",
        qiBonus: 0.50,
        breakthroughBonus: 10
    },

    {
        name: "Dao Origin Root",
        rarity: "Mythic",
        qiBonus: 0.75,
        breakthroughBonus: 15
    }

];


/* ========================================================= */
/* TECHNIQUES                                                */
/* ========================================================= */

const TECHNIQUES = [

    {
        id: "mortal-breathing",
        name: "Mortal Breathing Art",
        rank: "Mortal",
        qiBonus: 0,
        soulBonus: 0,
        unlockRealm: 0,
        description:
            "A basic breathing method for beginning cultivators."
    },

    {
        id: "jade-cloud",
        name: "Jade Cloud Scripture",
        rank: "Yellow",
        qiBonus: 0.20,
        soulBonus: 0.05,
        unlockRealm: 1,
        description:
            "Guides spiritual energy gently through the meridians."
    },

    {
        id: "azure-heaven",
        name: "Azure Heaven Art",
        rank: "Profound",
        qiBonus: 0.45,
        soulBonus: 0.10,
        unlockRealm: 2,
        description:
            "Draws pure spiritual energy from heaven."
    },

    {
        id: "nine-suns",
        name: "Nine Suns Immortal Scripture",
        rank: "Earth",
        qiBonus: 0.80,
        soulBonus: 0.15,
        unlockRealm: 4,
        description:
            "Refines blazing solar essence."
    },

    {
        id: "chaos-devouring",
        name: "Chaos Devouring Art",
        rank: "Heaven",
        qiBonus: 1.30,
        soulBonus: 0.25,
        unlockRealm: 6,
        description:
            "Devours and refines the essence of heaven and earth."
    },

    {
        id: "primordial-dao",
        name: "Primordial Dao Scripture",
        rank: "Immortal",
        qiBonus: 2,
        soulBonus: 0.50,
        unlockRealm: 9,
        description:
            "A scripture said to originate before heaven and earth."
    }

];


/* ========================================================= */
/* WEAPON RARITIES                                           */
/* ========================================================= */

const RARITIES = [

    {
        name: "Common",
        weight: 45,
        multiplier: 1
    },

    {
        name: "Uncommon",
        weight: 28,
        multiplier: 1.8
    },

    {
        name: "Rare",
        weight: 15,
        multiplier: 3
    },

    {
        name: "Epic",
        weight: 8,
        multiplier: 5
    },

    {
        name: "Legendary",
        weight: 3.5,
        multiplier: 9
    },

    {
        name: "Mythic",
        weight: 0.5,
        multiplier: 18
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
/* ADVENTURE ZONES                                           */
/* ========================================================= */

const ZONES = [

    {
        id: "misty-forest",

        name:
            "Misty Forest",

        description:
            "A forest near the mortal lands inhabited by weak spirit beasts.",

        requiredRealm:
            0,

        powerMultiplier:
            0.65,

        stoneMultiplier:
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
        id: "spirit-mountain",

        name:
            "Spirit Mountain",

        description:
            "A mountain overflowing with spiritual energy and dangerous beasts.",

        requiredRealm:
            1,

        powerMultiplier:
            1.25,

        stoneMultiplier:
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
        id: "blood-valley",

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
        id: "ancient-ruins",

        name:
            "Ancient Sect Ruins",

        description:
            "The shattered remains of a sect destroyed thousands of years ago.",

        requiredRealm:
            3,

        powerMultiplier:
            3.6,

        stoneMultiplier:
            7,

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
        id: "dragon-abyss",

        name:
            "Dragon Abyss",

        description:
            "An abyss carrying traces of an ancient true dragon bloodline.",

        requiredRealm:
            4,

        powerMultiplier:
            6,

        stoneMultiplier:
            12,

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
        id: "void-rift",

        name:
            "Void Rift",

        description:
            "A dimensional tear where terrifying creatures roam.",

        requiredRealm:
            6,

        powerMultiplier:
            15,

        stoneMultiplier:
            30,

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
            "Defeat 1 boss.",

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
        id: "seasoned-warrior",

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
    },


    {
        id: "great-hunter",

        name:
            "Inner Sect Hunter",

        description:
            "Defeat 5 bosses.",

        type:
            "bosses",

        target:
            5,

        reward: {
            stones: 6000,
            statPoints: 12,
            weapon: true
        }
    }

];


/* ========================================================= */
/* DAILY REWARDS                                             */
/* ========================================================= */

const DAILY_REWARDS = [

    {
        stones: 100
    },

    {
        pills: 1
    },

    {
        healingPills: 2
    },

    {
        pills: 2
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

function createDefaultGameState() {

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
            100,

        spiritualRoot:
            generateSpiritualRoot(),

        activeTechnique:
            "mortal-breathing",

        techniqueMastery: {

            "mortal-breathing":
                0

        },

        weapons:
            [],

        equippedWeaponId:
            null,

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

        missionClaims:
            {},

        zoneBossProgress:
            {},

        battleLog:
            [],

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
/* GAME STATE                                                */
/* ========================================================= */

let game =
    createDefaultGameState();

let pendingOfflineQi =
    0;


/* ========================================================= */
/* DOM HELPERS                                               */
/* ========================================================= */

function byId(id) {

    return document.getElementById(id);

}


/* ========================================================= */
/* RANDOM ROOT                                               */
/* ========================================================= */

function generateSpiritualRoot() {

    const roll =
        Math.random() * 100;

    if (roll < 1) {
        return "Dao Origin Root";
    }

    if (roll < 5) {
        return "Primordial Chaos Root";
    }

    if (roll < 15) {
        return "Sword Spiritual Root";
    }

    if (roll < 35) {
        return "Heavenly Spiritual Root";
    }

    if (roll < 65) {
        return "Dual Spiritual Root";
    }

    return "Five Element Root";

}


/* ========================================================= */
/* DATA HELPERS                                              */
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


/* ========================================================= */
/* FORMATTING                                                */
/* ========================================================= */

function formatNumber(number) {

    if (
        !Number.isFinite(number)
    ) {
        return "0";
    }

    if (number < 1000) {

        return Math.floor(number)
            .toLocaleString();

    }

    const units = [

        {
            value: 1e15,
            symbol: "Qa"
        },

        {
            value: 1e12,
            symbol: "T"
        },

        {
            value: 1e9,
            symbol: "B"
        },

        {
            value: 1e6,
            symbol: "M"
        },

        {
            value: 1e3,
            symbol: "K"
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
                    value >= 100
                        ? 0
                        : value >= 10
                            ? 1
                            : 2
                ) +
                unit.symbol
            );

        }

    }

    return String(
        Math.floor(number)
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
            date.getMonth() + 1
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
/* CHARACTER CALCULATIONS                                    */
/* ========================================================= */

function getMaxHealth() {

    const base =
        100;

    const constitution =
        game.attributes.constitution;

    const realmBonus =
        game.realmIndex *
        80;

    const stageBonus =
        game.stageIndex *
        25;

    return Math.floor(
        base +
        constitution *
        10 +
        realmBonus +
        stageBonus
    );

}


function getQiRequirement() {

    const realm =
        getCurrentRealm();

    return Math.floor(
        realm.baseRequirement *
        (
            1 +
            game.stageIndex *
            0.65
        )
    );

}


function getTechniqueMastery(
    techniqueId =
        game.activeTechnique
) {

    return (
        game.techniqueMastery[
            techniqueId
        ] ||
        0
    );

}


function getQiPerSecond() {

    const realm =
        getCurrentRealm();

    const technique =
        getCurrentTechnique();

    const root =
        getCurrentRoot();

    const mastery =
        getTechniqueMastery();

    const stageBonus =
        1 +
        game.stageIndex *
        0.25;

    const soulBonus =
        1 +
        Math.max(
            0,
            game.attributes.soul -
            10
        ) *
        0.012;

    const manualBonus =
        1 +
        game.manuals *
        0.12;

    const breakthroughBonus =
        1 +
        game.breakthroughCount *
        0.02;

    return (
        realm.qiMultiplier *
        stageBonus *
        soulBonus *
        manualBonus *
        breakthroughBonus *
        (
            1 +
            technique.qiBonus
        ) *
        (
            1 +
            root.qiBonus
        ) *
        (
            1 +
            mastery *
            0.002
        )
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

    const weaponPower =
        weapon
            ? weapon.power
            : 0;

    return Math.floor(
        (
            10 *
            realm.combatMultiplier *
            strength *
            constitution *
            soul *
            stage *
            (
                1 +
                technique.soulBonus
            )
        ) +
        weaponPower
    );

}


function getBreakthroughChance() {

    const root =
        getCurrentRoot();

    const constitutionBonus =
        Math.max(
            0,
            game.attributes.constitution -
            10
        ) *
        0.3;

    let chance =
        100 -
        game.realmIndex *
        4 -
        game.stageIndex *
        6;

    chance +=
        constitutionBonus;

    chance +=
        root.breakthroughBonus;

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
        amount <= 0 ||
        !Number.isFinite(amount)
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

    setSystemMessage(
        `You circulated ${getCurrentTechnique().name} and absorbed ${formatNumber(amount)} Qi.`
    );

    render();

}


function increaseTechniqueMastery(amount) {

    if (
        !game.techniqueMastery[
            game.activeTechnique
        ]
    ) {

        game.techniqueMastery[
            game.activeTechnique
        ] = 0;

    }

    game.techniqueMastery[
        game.activeTechnique
    ] =
        Math.min(
            100,
            game.techniqueMastery[
                game.activeTechnique
            ] +
            amount
        );

}


/* ========================================================= */
/* BREAKTHROUGH                                              */
/* ========================================================= */

function attemptBreakthrough() {

    if (game.currentEnemy) {

        notify(
            "You cannot attempt a breakthrough while fighting.",
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

    const success =
        Math.random() *
        100 <=
        getBreakthroughChance();

    if (success) {

        game.qi -=
            requirement;

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


        if (
            game.stageIndex <
            STAGES.length -
            1
        ) {

            game.stageIndex +=
                1;

            notify(
                `Breakthrough successful — ${getCurrentRealm().name} ${STAGES[game.stageIndex]}!`,
                "success"
            );

            addLog(
                `You reached ${getCurrentRealm().name} ${STAGES[game.stageIndex]}.`,
                true
            );

        } else if (
            game.realmIndex <
            REALMS.length -
            1
        ) {

            game.realmIndex +=
                1;

            game.stageIndex =
                0;

            game.statPoints +=
                7;

            game.attributes.strength +=
                3;

            game.attributes.constitution +=
                3;

            game.attributes.soul +=
                3;

            grantRealmReward();

            notify(
                `境界突破 — ${getCurrentRealm().name}!`,
                "success"
            );

            addLog(
                `Heaven and earth trembled as Jiang Chue entered the ${getCurrentRealm().name} Realm.`,
                true
            );

        }

        game.health =
            getMaxHealth();

    } else {

        const lost =
            getQiRequirement() *
            0.12;

        game.qi =
            Math.max(
                0,
                game.qi -
                lost
            );

        game.health =
            Math.max(
                1,
                game.health -
                getMaxHealth() *
                0.1
            );

        notify(
            "Breakthrough failed. Your meridians were injured.",
            "error"
        );

    }

    saveGame();

    render();

}


function grantRealmReward() {

    const stones =
        Math.floor(
            150 *
            Math.pow(
                2,
                game.realmIndex
            )
        );

    game.spiritStones +=
        stones;

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
/* ATTRIBUTE UPGRADES                                       */
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
        !Object.prototype.hasOwnProperty.call(
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

        return;
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
        `Healing Pill restored ${formatNumber(healing)} health.`,
        "success"
    );

    addBattleLog(
        `Jiang Chue consumed a Healing Pill and recovered ${formatNumber(healing)} health.`
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

    if (!technique) {
        return;
    }

    if (
        game.realmIndex <
        technique.unlockRealm
    ) {

        notify(
            `Reach ${REALMS[technique.unlockRealm].name} first.`,
            "error"
        );

        return;
    }

    game.activeTechnique =
        technique.id;

    if (
        !game.techniqueMastery[
            technique.id
        ]
    ) {

        game.techniqueMastery[
            technique.id
        ] = 0;

    }

    notify(
        `${technique.name} equipped.`,
        "success"
    );

    saveGame();

    render();

}


/* ========================================================= */
/* WEAPON GENERATION                                        */
/* ========================================================= */

function chooseRarity(
    minimumRarity =
        null
) {

    let available =
        [...RARITIES];

    if (minimumRarity) {

        const minimumIndex =
            RARITIES.findIndex(
                item =>
                    item.name ===
                    minimumRarity
            );

        if (
            minimumIndex >=
            0
        ) {

            available =
                RARITIES.slice(
                    minimumIndex
                );

        }

    }

    const total =
        available.reduce(
            (
                sum,
                item
            ) =>
                sum +
                item.weight,
            0
        );

    let roll =
        Math.random() *
        total;

    for (
        const item
        of available
    ) {

        roll -=
            item.weight;

        if (
            roll <=
            0
        ) {
            return item;
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

    const realmScaling =
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
                realmScaling *
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

    if (!weapon) {
        return;
    }

    game.equippedWeaponId =
        weapon.id;

    notify(
        `${weapon.name} equipped.`,
        "success"
    );

    saveGame();

    render();

    renderWeaponInventory();

}


/* ========================================================= */
/* EXPLORATION                                               */
/* ========================================================= */

function selectZone(id) {

    if (
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

    if (!zone) {
        return;
    }

    if (
        game.realmIndex <
        zone.requiredRealm
    ) {

        notify(
            `You must reach ${REALMS[zone.requiredRealm].name} to enter this region.`,
            "error"
        );

        return;
    }

    game.selectedZone =
        zone.id;

    renderAdventure();

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


    /*
        68% enemy
        12% treasure
        8% stones
        5% pill
        4% healing pill
        3% rare treasure
    */

    if (
        roll <
        0.68
    ) {

        startRandomBattle(
            zone
        );

        return;
    }


    if (
        roll <
        0.80
    ) {

        const amount =
            Math.floor(
                (
                    40 +
                    Math.random() *
                    80
                ) *
                zone.stoneMultiplier
            );

        game.spiritStones +=
            amount;

        setAdventureMessage(
            `You discovered an abandoned cultivator pouch containing ${formatNumber(amount)} Spirit Stones.`
        );

        notify(
            `Treasure found: ${formatNumber(amount)} Spirit Stones.`,
            "success"
        );

    } else if (
        roll <
        0.88
    ) {

        const amount =
            Math.floor(
                (
                    20 +
                    Math.random() *
                    60
                ) *
                zone.stoneMultiplier
            );

        game.spiritStones +=
            amount;

        setAdventureMessage(
            `You discovered ${formatNumber(amount)} Spirit Stones.`
        );

    } else if (
        roll <
        0.93
    ) {

        game.pills +=
            1;

        setAdventureMessage(
            "You discovered a Cultivation Pill growing beside a spiritual herb."
        );

    } else if (
        roll <
        0.97
    ) {

        game.healingPills +=
            1;

        setAdventureMessage(
            "You discovered a Healing Pill inside an abandoned storage pouch."
        );

    } else {

        const weapon =
            generateWeapon();

        game.weapons.push(
            weapon
        );

        setAdventureMessage(
            `Fortuitous encounter! You found a ${weapon.rarity} ${weapon.name}.`
        );

        notify(
            `${weapon.rarity} ${weapon.name} obtained!`,
            "success"
        );

    }

    saveGame();

    render();

}


/* ========================================================= */
/* START BATTLE                                              */
/* ========================================================= */

function startRandomBattle(zone) {

    const bossProgress =
        game.zoneBossProgress[
            zone.id
        ] ||
        0;

    const bossChance =
        bossProgress >=
        5
            ? 0.28
            : 0.04;

    const boss =
        Math.random() <
        bossChance;


    const playerPower =
        getCombatPower();

    const powerVariance =
        0.72 +
        Math.random() *
        0.55;

    let enemyPower =
        playerPower *
        zone.powerMultiplier *
        powerVariance;


    if (boss) {

        enemyPower *=
            1.7;

    }


    enemyPower =
        Math.max(
            8,
            Math.floor(
                enemyPower
            )
        );


    const maxHealth =
        Math.floor(
            120 +
            enemyPower *
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

        power:
            enemyPower,

        maxHealth,

        health:
            maxHealth,

        zoneId:
            zone.id

    };


    addBattleLog(
        `${game.currentEnemy.name} appeared!`
    );


    setAdventureMessage(
        boss
            ? `A terrifying aura descends. ${game.currentEnemy.name}, ruler of this region, has appeared!`
            : `${game.currentEnemy.name} blocks your path.`
    );


    renderAdventure();

}


/* ========================================================= */
/* PLAYER ATTACK                                             */
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


    const enemy =
        game.currentEnemy;


    let baseDamage =
        getCombatPower() *
        (
            0.65 +
            Math.random() *
            0.30
        );


    if (spiritual) {

        const soulMultiplier =
            1 +
            game.attributes.soul *
            0.015;

        baseDamage *=
            1.18 *
            soulMultiplier;

    } else {

        const strengthMultiplier =
            1 +
            game.attributes.strength *
            0.01;

        baseDamage *=
            strengthMultiplier;

    }


    const critical =
        Math.random() <
        0.10;


    if (critical) {

        baseDamage *=
            1.75;

    }


    const damage =
        Math.max(
            1,
            Math.floor(
                baseDamage
            )
        );


    enemy.health =
        Math.max(
            0,
            enemy.health -
            damage
        );


    addBattleLog(
        spiritual
            ? `Jiang Chue unleashed a Spiritual Strike for ${formatNumber(damage)} damage${critical ? " — CRITICAL!" : "."}`
            : `Jiang Chue attacked for ${formatNumber(damage)} damage${critical ? " — CRITICAL!" : "."}`
    );


    if (
        enemy.health <=
        0
    ) {

        winBattle();

        return;

    }


    enemyTurn();

    renderAdventure();

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

    const enemy =
        game.currentEnemy;


    let damage =
        enemy.power *
        (
            0.42 +
            Math.random() *
            0.30
        );


    const defenseReduction =
        1 +
        game.attributes.constitution *
        0.018;


    damage /=
        defenseReduction;


    if (
        enemy.boss
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


    addBattleLog(
        `${enemy.name} struck Jiang Chue for ${formatNumber(damage)} damage.`
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

    if (!enemy) {
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


    if (enemy.boss) {

        game.bossesSlain +=
            1;

        game.zoneBossProgress[
            zone.id
        ] = 0;

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


    const pillChance =
        enemy.boss
            ? 0.70
            : 0.13;


    if (
        Math.random() <
        pillChance
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
                : 0.10
        )
    ) {

        game.healingPills +=
            1;

        rewardText +=
            ", Healing Pill";

    }


    const weaponChance =
        enemy.boss
            ? 0.80
            : 0.06;


    if (
        Math.random() <
        weaponChance
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


    if (enemy.boss) {

        game.statPoints +=
            3 +
            game.realmIndex;

        rewardText +=
            `, ${3 + game.realmIndex} Attribute Points`;

    }


    addBattleLog(
        `${enemy.name} was defeated.`
    );

    addBattleLog(
        `Rewards: ${rewardText}.`
    );


    notify(
        `Victory! ${rewardText}`,
        "success"
    );


    setAdventureMessage(
        `You defeated ${enemy.name}.`
    );


    game.currentEnemy =
        null;


    saveGame();

    render();

}


/* ========================================================= */
/* DEFEAT                                                    */
/* ========================================================= */

function loseBattle() {

    const enemy =
        game.currentEnemy;

    game.defeats +=
        1;


    const maxHealth =
        getMaxHealth();


    game.health =
        Math.max(
            1,
            Math.floor(
                maxHealth *
                0.20
            )
        );


    const stoneLoss =
        Math.floor(
            game.spiritStones *
            0.08
        );


    game.spiritStones =
        Math.max(
            0,
            game.spiritStones -
            stoneLoss
        );


    addBattleLog(
        `Jiang Chue was defeated by ${enemy.name}.`
    );

    addBattleLog(
        `${formatNumber(stoneLoss)} Spirit Stones were lost while escaping.`
    );


    setAdventureMessage(
        "You barely escaped with your life. Your injuries are severe."
    );


    notify(
        "Defeated. Recover before returning to battle.",
        "error"
    );


    game.currentEnemy =
        null;


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


    const successChance =
        0.65 +
        Math.min(
            0.20,
            game.attributes.soul *
            0.002
        );


    if (
        Math.random() <
        successChance
    ) {

        addBattleLog(
            `Jiang Chue escaped from ${game.currentEnemy.name}.`
        );

        setAdventureMessage(
            "You successfully fled from battle."
        );

        game.currentEnemy =
            null;

    } else {

        addBattleLog(
            "Your escape failed!"
        );

        enemyTurn();

    }


    saveGame();

    render();

}


/* ========================================================= */
/* RANDOM CULTIVATION EVENTS                                 */
/* ========================================================= */

function rollRandomCultivationEvent() {

    if (
        Math.random() >
        0.025
    ) {
        return;
    }


    const roll =
        Math.random();


    if (
        roll <
        0.45
    ) {

        const qi =
            getQiPerSecond() *
            20;

        addQi(
            qi
        );

        notify(
            `Minor enlightenment: +${formatNumber(qi)} Qi.`,
            "success"
        );

    } else if (
        roll <
        0.7
    ) {

        game.spiritStones +=
            20 +
            game.realmIndex *
            20;

    } else if (
        roll <
        0.9
    ) {

        game.pills +=
            1;

    } else {

        game.healingPills +=
            1;

    }

}


/* ========================================================= */
/* MISSIONS                                                  */
/* ========================================================= */

function getMissionProgress(
    mission
) {

    if (
        mission.type ===
        "kills"
    ) {

        return game.enemiesSlain;

    }


    if (
        mission.type ===
        "bosses"
    ) {

        return game.bossesSlain;

    }


    if (
        mission.type ===
        "victories"
    ) {

        return game.victories;

    }


    return 0;

}


function claimMission(
    id
) {

    const mission =
        MISSIONS.find(
            item =>
                item.id ===
                id
        );

    if (!mission) {
        return;
    }


    if (
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

        notify(
            "Mission requirements are not complete.",
            "error"
        );

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


    addLog(
        `Sect Mission completed: ${mission.name}.`,
        true
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

        notify(
            "Today's sign-in reward has already been claimed.",
            "error"
        );

        return;
    }


    let newStreak =
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

            newStreak =
                game.dailyStreak +
                1;

        }

    }


    game.dailyStreak =
        newStreak;


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
        reward.weapon
    ) {

        game.weapons.push(
            generateWeapon()
        );

    }


    notify(
        `Daily Sign-In Day ${game.dailyStreak} claimed.`,
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
        Tiny passive recovery while not in combat.
    */

    if (
        !game.currentEnemy &&
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


    render();

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


function addBattleLog(
    message
) {

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
/* MESSAGES                                                  */
/* ========================================================= */

function setSystemMessage(
    message
) {

    byId(
        "systemMessage"
    ).textContent =
        message;

}


function setAdventureMessage(
    message
) {

    byId(
        "adventureMessage"
    ).textContent =
        message;

}


/* ========================================================= */
/* RENDER CULTIVATION                                       */
/* ========================================================= */

function renderCultivation() {

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
        "victoryDisplay"
    ).textContent =
        game.victories;


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
        "inventoryStoneDisplay"
    ).textContent =
        formatNumber(
            game.spiritStones
        );


    byId(
        "weaponCountDisplay"
    ).textContent =
        game.weapons.length;


    if (weapon) {

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


    byId(
        "streakDisplay"
    ).textContent =
        game.dailyStreak;


    if (
        canSignInToday()
    ) {

        byId(
            "signInButton"
        ).disabled =
            false;


        byId(
            "signInButton"
        ).textContent =
            "Daily Sign-In";


        byId(
            "dailyStatus"
        ).textContent =
            "Sign-in reward available.";

    } else {

        byId(
            "signInButton"
        ).disabled =
            true;


        byId(
            "signInButton"
        ).textContent =
            "Already Signed In";


        byId(
            "dailyStatus"
        ).textContent =
            "Today's reward has been claimed.";

    }


    byId(
        "usePillButton"
    ).disabled =
        game.pills <=
        0;


    byId(
        "breakthroughButton"
    ).textContent =
        game.qi >=
        requirement
            ? "Attempt Breakthrough"
            : `Need ${formatNumber(requirement)} Qi`;


    renderTechniques();

    renderCultivationLog();

    renderRealmPath();

}


/* ========================================================= */
/* RENDER TECHNIQUES                                        */
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


        if (active) {

            card.classList.add(
                "active"
            );

        }


        if (!unlocked) {

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
                    <br>
                    Qi +${Math.round(technique.qiBonus * 100)}%
                    <br>
                    Mastery ${getTechniqueMastery(technique.id).toFixed(1)}%
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

                button.addEventListener(
                    "click",
                    () => {

                        equipTechnique(
                            button.dataset.technique
                        );

                    }
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
        "injuryWarning"
    ).classList.toggle(
        "hidden",
        game.health >
        getMaxHealth() *
        0.35
    );


    byId(
        "selectedZoneName"
    ).textContent =
        zone.name;


    byId(
        "selectedZoneDescription"
    ).textContent =
        zone.description;


    renderZones();

    renderMissions();

    renderBattleLog();

    renderZoneProgress();


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


    if (fighting) {

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

    }

}


/* ========================================================= */
/* ZONE CARDS                                               */
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


        if (!unlocked) {

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
                            ? "Available"
                            : `Requires ${REALMS[zone.requiredRealm].name}`
                    }
                </small>
            `;


        if (unlocked) {

            card.addEventListener(
                "click",
                () => {

                    selectZone(
                        zone.id
                    );

                }
            );

        }


        container.appendChild(
            card
        );

    }

}


/* ========================================================= */
/* MISSIONS RENDER                                          */
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


        if (claimed) {

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

                button.addEventListener(
                    "click",
                    () => {

                        claimMission(
                            button.dataset.mission
                        );

                    }
                );

            }
        );

}


/* ========================================================= */
/* LOG RENDERS                                              */
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

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "log-entry";


        element.innerHTML =
            `
                <span class="log-time">
                    ${entry.time}
                </span>

                <span class="${entry.important ? "log-important" : ""}">
                    ${entry.message}
                </span>
            `;


        container.appendChild(
            element
        );

    }

}


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
                    No battles have been fought yet.
                </div>
            `;

        return;

    }


    for (
        const entry
        of game.battleLog
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "log-entry";


        element.innerHTML =
            `
                <span class="log-time">
                    ${entry.time}
                </span>

                <span>
                    ${entry.message}
                </span>
            `;


        container.appendChild(
            element
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


            element.textContent =
                realm.name;


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


        const progress =
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
                ? `${zone.name} — Boss Threat ${Math.min(progress, 5)}/5`
                : `${zone.name} — Locked`;


        container.appendChild(
            element
        );

    }

}


/* ========================================================= */
/* STATUS WINDOW                                            */
/* ========================================================= */

function renderStatusWindow() {

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
        getCurrentTechnique().name;


    byId(
        "statusWeaponDisplay"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";


    byId(
        "statusVictoriesDisplay"
    ).textContent =
        game.victories;


    byId(
        "statusBossesDisplay"
    ).textContent =
        game.bossesSlain;

}


/* ========================================================= */
/* WEAPON INVENTORY                                         */
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
                            Explore regions and defeat enemies to discover weapons.
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


        if (equipped) {

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

                button.addEventListener(
                    "click",
                    () => {

                        equipWeapon(
                            button.dataset.weapon
                        );

                    }
                );

            }
        );

}


/* ========================================================= */
/* GLOBAL RENDER                                            */
/* ========================================================= */

function render() {

    game.health =
        Math.min(
            game.health,
            getMaxHealth()
        );


    renderCultivation();

    renderAdventure();

    renderStatusWindow();


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
/* TAB SYSTEM                                               */
/* ========================================================= */

function openCultivationTab() {

    byId(
        "cultivationPage"
    ).classList.remove(
        "hidden-page"
    );


    byId(
        "adventurePage"
    ).classList.add(
        "hidden-page"
    );


    byId(
        "cultivationTabButton"
    ).classList.add(
        "active-tab"
    );


    byId(
        "adventureTabButton"
    ).classList.remove(
        "active-tab"
    );

}


function openAdventureTab() {

    byId(
        "cultivationPage"
    ).classList.add(
        "hidden-page"
    );


    byId(
        "adventurePage"
    ).classList.remove(
        "hidden-page"
    );


    byId(
        "cultivationTabButton"
    ).classList.remove(
        "active-tab"
    );


    byId(
        "adventureTabButton"
    ).classList.add(
        "active-tab"
    );


    renderAdventure();

}


/* ========================================================= */
/* FLOATING QI                                              */
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


    const x =
        event?.clientX ||
        (
            rect.left +
            rect.width /
            2
        );


    const y =
        event?.clientY ||
        (
            rect.top +
            rect.height /
            2
        );


    element.style.left =
        `${x}px`;


    element.style.top =
        `${y}px`;


    document.body.appendChild(
        element
    );


    setTimeout(
        () => {

            element.remove();

        },
        1000
    );

}


/* ========================================================= */
/* NOTIFICATION                                             */
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
        () => {

            element.remove();

        },
        3800
    );

}


/* ========================================================= */
/* OFFLINE PROGRESS                                         */
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
        `Secluded cultivation generated ${formatNumber(pendingOfflineQi)} Qi while you were away.`,
        true
    );


    notify(
        `Offline cultivation: +${formatNumber(pendingOfflineQi)} Qi.`,
        "success"
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


function formatDuration(
    seconds
) {

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


    const hours =
        Math.floor(
            minutes /
            60
        );


    return `${hours}h ${minutes % 60}m`;

}


/* ========================================================= */
/* SAVE                                                      */
/* ========================================================= */

function saveGame(
    showMessage =
        false
) {

    try {

        game.lastPlayed =
            Date.now();


        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(
                game
            )
        );


        if (showMessage) {

            notify(
                "Cultivation progress saved.",
                "success"
            );

        }

    } catch (error) {

        console.error(
            "Save error:",
            error
        );

    }

}


/* ========================================================= */
/* LOAD + MIGRATION                                         */
/* ========================================================= */

function loadGame() {

    try {

        let saved =
            localStorage.getItem(
                SAVE_KEY
            );


        if (!saved) {

            for (
                const oldKey
                of OLD_SAVE_KEYS
            ) {

                saved =
                    localStorage.getItem(
                        oldKey
                    );


                if (saved) {
                    break;
                }

            }

        }


        if (!saved) {

            game =
                createDefaultGameState();

            game.health =
                getMaxHealth();

            return;

        }


        const parsed =
            JSON.parse(
                saved
            );


        const defaults =
            createDefaultGameState();


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

            techniqueMastery: {

                ...defaults.techniqueMastery,

                ...(
                    parsed.techniqueMastery ||
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
            Don't resume an old combat encounter
            after reloading.
        */

        game.currentEnemy =
            null;


        if (
            !Number.isFinite(
                game.health
            )
        ) {

            game.health =
                getMaxHealth();

        }


        game.health =
            Math.min(
                getMaxHealth(),
                Math.max(
                    1,
                    game.health
                )
            );

    } catch (error) {

        console.error(
            "Load error:",
            error
        );


        game =
            createDefaultGameState();


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


    if (!confirmed) {
        return;
    }


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
        createDefaultGameState();


    game.health =
        getMaxHealth();


    saveGame();


    openCultivationTab();


    notify(
        "A new cultivation life has begun.",
        "success"
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
        i < 35;
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


        particle.style.animationDuration =
            `${10 + Math.random() * 18}s`;


        particle.style.animationDelay =
            `${Math.random() * 20}s`;


        const size =
            1 +
            Math.random() *
            3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        container.appendChild(
            particle
        );

    }

}


/* ========================================================= */
/* EVENTS                                                    */
/* ========================================================= */

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
    "usePillButton"
).addEventListener(
    "click",
    useCultivationPill
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
            useHealingPill()
        ) {

            enemyTurn();

            render();

        }

    }
);


byId(
    "exploreButton"
).addEventListener(
    "click",
    exploreZone
);


byId(
    "attackButton"
).addEventListener(
    "click",
    () => {

        playerAttack(
            false
        );

    }
);


byId(
    "spiritualAttackButton"
).addEventListener(
    "click",
    () => {

        playerAttack(
            true
        );

    }
);


byId(
    "fleeButton"
).addEventListener(
    "click",
    fleeBattle
);


byId(
    "cultivationTabButton"
).addEventListener(
    "click",
    openCultivationTab
);


byId(
    "adventureTabButton"
).addEventListener(
    "click",
    openAdventureTab
);


byId(
    "saveButton"
).addEventListener(
    "click",
    () => {

        saveGame(
            true
        );

    }
);


byId(
    "resetButton"
).addEventListener(
    "click",
    resetGame
);


document
    .querySelectorAll(
        ".attribute-upgrade"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    upgradeAttribute(
                        button.dataset.stat
                    );

                }
            );

        }
    );


/* STATUS MODAL */

byId(
    "statusButton"
).addEventListener(
    "click",
    () => {

        renderStatusWindow();


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
    () => {

        byId(
            "statusModal"
        ).classList.add(
            "hidden"
        );

    }
);


/* EQUIPMENT */

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
    () => {

        byId(
            "equipmentModal"
        ).classList.add(
            "hidden"
        );

    }
);


/* OFFLINE */

byId(
    "claimOfflineButton"
).addEventListener(
    "click",
    claimOfflineProgress
);


/* CLICK OUTSIDE MODALS */

byId(
    "statusModal"
).addEventListener(
    "click",
    event => {

        if (
            event.target ===
            byId(
                "statusModal"
            )
        ) {

            byId(
                "statusModal"
            ).classList.add(
                "hidden"
            );

        }

    }
);


byId(
    "equipmentModal"
).addEventListener(
    "click",
    event => {

        if (
            event.target ===
            byId(
                "equipmentModal"
            )
        ) {

            byId(
                "equipmentModal"
            ).classList.add(
                "hidden"
            );

        }

    }
);


/* SAVE WHEN LEAVING */

window.addEventListener(
    "beforeunload",
    () => {

        saveGame();

    }
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
/* INITIALIZATION                                           */
/* ========================================================= */

function initializeGame() {

    loadGame();


    if (
        !game.health
    ) {

        game.health =
            getMaxHealth();

    }


    calculateOfflineProgress();


    createParticles();


    render();


    setInterval(
        gameTick,
        TICK_RATE
    );


    setInterval(
        () => {

            saveGame();

        },
        AUTO_SAVE_INTERVAL
    );

}


/* ========================================================= */
/* START                                                     */
/* ========================================================= */

initializeGame();
