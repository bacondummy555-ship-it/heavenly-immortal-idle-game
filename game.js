"use strict";


/* ============================================================ */
/* CONFIG                                                       */
/* ============================================================ */

const SAVE_KEY =
    "idleCultivationSaveV2";

const OLD_SAVE_KEY =
    "idleCultivationSaveV1";

const TICK_RATE =
    1000;

const AUTO_SAVE_INTERVAL =
    10000;

const MAX_OFFLINE_SECONDS =
    60 * 60 * 12;


/* ============================================================ */
/* REALMS                                                       */
/* ============================================================ */

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


/* ============================================================ */
/* SPIRITUAL ROOTS                                              */
/* ============================================================ */

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


/* ============================================================ */
/* TECHNIQUES                                                   */
/* ============================================================ */

const TECHNIQUES = [

    {
        id: "mortal-breathing",
        name: "Mortal Breathing Art",
        rank: "Mortal",
        qiBonus: 0,
        soulBonus: 0,
        unlockRealm: 0,
        description:
            "A basic breathing method used by those beginning the path."
    },

    {
        id: "jade-cloud",
        name: "Jade Cloud Scripture",
        rank: "Yellow",
        qiBonus: 0.20,
        soulBonus: 0.05,
        unlockRealm: 1,
        description:
            "Circulates spiritual Qi through the meridians like drifting clouds."
    },

    {
        id: "azure-heaven",
        name: "Azure Heaven Art",
        rank: "Profound",
        qiBonus: 0.45,
        soulBonus: 0.10,
        unlockRealm: 2,
        description:
            "Draws spiritual energy from heaven and refines it into pure Qi."
    },

    {
        id: "nine-suns",
        name: "Nine Suns Immortal Scripture",
        rank: "Earth",
        qiBonus: 0.80,
        soulBonus: 0.15,
        unlockRealm: 4,
        description:
            "A domineering scripture said to contain fragments of solar Dao."
    },

    {
        id: "chaos-devouring",
        name: "Chaos Devouring Art",
        rank: "Heaven",
        qiBonus: 1.30,
        soulBonus: 0.25,
        unlockRealm: 6,
        description:
            "Devours the spiritual essence of heaven and earth."
    },

    {
        id: "primordial-dao",
        name: "Primordial Dao Scripture",
        rank: "Immortal",
        qiBonus: 2,
        soulBonus: 0.50,
        unlockRealm: 9,
        description:
            "A forbidden scripture tracing its origin to the beginning of creation."
    }

];


/* ============================================================ */
/* WEAPONS                                                      */
/* ============================================================ */

const WEAPON_NAMES = {

    Common: [
        "Iron Sword",
        "Wooden Spirit Blade",
        "Refined Steel Saber"
    ],

    Uncommon: [
        "Spirit Iron Sword",
        "Emerald Wind Saber",
        "Moonlight Blade"
    ],

    Rare: [
        "Azure Cloud Sword",
        "Blood Moon Saber",
        "Thunder Spirit Blade"
    ],

    Epic: [
        "Heaven Piercing Sword",
        "Nine Star Saber",
        "Dragon Vein Blade"
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


/* ============================================================ */
/* DAILY REWARDS                                                */
/* ============================================================ */

const DAILY_REWARDS = [

    {
        stones: 100,
        pills: 0,
        manuals: 0,
        weapon: false
    },

    {
        stones: 0,
        pills: 1,
        manuals: 0,
        weapon: false
    },

    {
        stones: 250,
        pills: 0,
        manuals: 0,
        weapon: false
    },

    {
        stones: 0,
        pills: 2,
        manuals: 0,
        weapon: false
    },

    {
        stones: 0,
        pills: 0,
        manuals: 1,
        weapon: false
    },

    {
        stones: 500,
        pills: 0,
        manuals: 0,
        weapon: false
    },

    {
        stones: 1000,
        pills: 2,
        manuals: 0,
        weapon: true
    }

];


/* ============================================================ */
/* DEFAULT STATE                                                */
/* ============================================================ */

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

        lastPlayed:
            Date.now(),

        createdAt:
            Date.now(),

        log: [

            {
                time:
                    getCurrentTime(),

                message:
                    "The Heavenly Dao System awakened within Jiang Chue.",

                important:
                    true
            }

        ]

    };

}


/* ============================================================ */
/* SPIRITUAL ROOT GENERATION                                    */
/* ============================================================ */

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


/* ============================================================ */
/* STATE                                                        */
/* ============================================================ */

let game =
    createDefaultGameState();

let pendingOfflineQi =
    0;


/* ============================================================ */
/* DOM                                                          */
/* ============================================================ */

function byId(id) {

    return document.getElementById(id);

}


const playerNameDisplay =
    byId("playerNameDisplay");

const realmDisplay =
    byId("realmDisplay");

const stageDisplay =
    byId("stageDisplay");

const spiritualRootDisplay =
    byId("spiritualRootDisplay");

const rootBonusDisplay =
    byId("rootBonusDisplay");

const mainRealmDisplay =
    byId("mainRealmDisplay");

const combatPowerDisplay =
    byId("combatPowerDisplay");

const qiPerSecondDisplay =
    byId("qiPerSecondDisplay");

const spiritStoneDisplay =
    byId("spiritStoneDisplay");

const statPointDisplay =
    byId("statPointDisplay");

const breakthroughCountDisplay =
    byId("breakthroughCountDisplay");

const totalQiDisplay =
    byId("totalQiDisplay");

const strengthDisplay =
    byId("strengthDisplay");

const constitutionDisplay =
    byId("constitutionDisplay");

const soulDisplay =
    byId("soulDisplay");

const qiProgressText =
    byId("qiProgressText");

const qiProgressBar =
    byId("qiProgressBar");

const breakthroughChanceDisplay =
    byId("breakthroughChanceDisplay");

const activeTechniqueDisplay =
    byId("activeTechniqueDisplay");

const techniqueBonusDisplay =
    byId("techniqueBonusDisplay");

const techniqueMasteryBar =
    byId("techniqueMasteryBar");

const techniqueMasteryText =
    byId("techniqueMasteryText");

const cultivateButton =
    byId("cultivateButton");

const breakthroughButton =
    byId("breakthroughButton");

const signInButton =
    byId("signInButton");

const usePillButton =
    byId("usePillButton");

const systemMessage =
    byId("systemMessage");

const pillCountDisplay =
    byId("pillCountDisplay");

const inventoryStoneDisplay =
    byId("inventoryStoneDisplay");

const manualCountDisplay =
    byId("manualCountDisplay");

const weaponCountDisplay =
    byId("weaponCountDisplay");

const equippedWeaponName =
    byId("equippedWeaponName");

const equippedWeaponStats =
    byId("equippedWeaponStats");

const streakDisplay =
    byId("streakDisplay");

const dailyStatus =
    byId("dailyStatus");

const techniqueList =
    byId("techniqueList");

const cultivationLog =
    byId("cultivationLog");

const realmPath =
    byId("realmPath");

const notificationContainer =
    byId("notificationContainer");

const statusModal =
    byId("statusModal");

const equipmentModal =
    byId("equipmentModal");

const offlineModal =
    byId("offlineModal");

const offlineTimeDisplay =
    byId("offlineTimeDisplay");

const offlineQiDisplay =
    byId("offlineQiDisplay");


/* ============================================================ */
/* HELPERS                                                      */
/* ============================================================ */

function formatNumber(number) {

    if (!Number.isFinite(number)) {
        return "0";
    }

    if (number < 1000) {

        return Math.floor(number)
            .toLocaleString();

    }

    const units = [

        {
            value: 1e18,
            symbol: "Qi"
        },

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

    for (const unit of units) {

        if (number >= unit.value) {

            const result =
                number /
                unit.value;

            return (
                result.toFixed(
                    result >= 100
                        ? 0
                        : result >= 10
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
                hour: "2-digit",
                minute: "2-digit"
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


/* ============================================================ */
/* CURRENT OBJECTS                                              */
/* ============================================================ */

function getCurrentRealm() {

    return REALMS[
        game.realmIndex
    ];

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


function getEquippedWeapon() {

    if (!game.equippedWeaponId) {
        return null;
    }

    return (
        game.weapons.find(
            weapon =>
                weapon.id ===
                game.equippedWeaponId
        ) ||
        null
    );

}


/* ============================================================ */
/* REQUIREMENTS                                                 */
/* ============================================================ */

function getQiRequirement() {

    const realm =
        getCurrentRealm();

    const stageMultiplier =
        1 +
        game.stageIndex * 0.65;

    return Math.floor(
        realm.baseRequirement *
        stageMultiplier
    );

}


/* ============================================================ */
/* TECHNIQUE MASTERY                                            */
/* ============================================================ */

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


function increaseTechniqueMastery(
    amount
) {

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


/* ============================================================ */
/* QI RATE                                                      */
/* ============================================================ */

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

    const manualBonus =
        1 +
        game.manuals *
        0.12;

    const breakthroughBonus =
        1 +
        game.breakthroughCount *
        0.02;

    const soulBonus =
        1 +
        Math.max(
            0,
            game.attributes.soul - 10
        ) *
        0.012;

    const techniqueBonus =
        1 +
        technique.qiBonus;

    const masteryBonus =
        1 +
        mastery *
        0.002;

    const rootBonus =
        1 +
        root.qiBonus;

    return (
        realm.qiMultiplier *
        stageBonus *
        manualBonus *
        breakthroughBonus *
        soulBonus *
        techniqueBonus *
        masteryBonus *
        rootBonus
    );

}


/* ============================================================ */
/* CLICK QI                                                     */
/* ============================================================ */

function getClickQi() {

    return Math.max(
        1,
        getQiPerSecond() *
        2.5
    );

}


/* ============================================================ */
/* COMBAT POWER                                                 */
/* ============================================================ */

function getCombatPower() {

    const realm =
        getCurrentRealm();

    const weapon =
        getEquippedWeapon();

    const technique =
        getCurrentTechnique();

    const base =
        10 *
        realm.combatMultiplier;

    const stageBonus =
        1 +
        game.stageIndex *
        0.5;

    const strengthBonus =
        1 +
        game.attributes.strength *
        0.04;

    const constitutionBonus =
        1 +
        game.attributes.constitution *
        0.02;

    const soulBonus =
        1 +
        game.attributes.soul *
        0.025;

    const techniqueBonus =
        1 +
        technique.soulBonus;

    const weaponPower =
        weapon
            ? weapon.power
            : 0;

    return Math.floor(
        base *
        stageBonus *
        strengthBonus *
        constitutionBonus *
        soulBonus *
        techniqueBonus +
        weaponPower
    );

}


/* ============================================================ */
/* BREAKTHROUGH CHANCE                                          */
/* ============================================================ */

function getBreakthroughChance() {

    const root =
        getCurrentRoot();

    let chance =
        100 -
        game.realmIndex *
        4 -
        game.stageIndex *
        6;

    const constitutionBonus =
        Math.max(
            0,
            game.attributes.constitution -
            10
        ) *
        0.3;

    chance +=
        constitutionBonus;

    chance +=
        root.breakthroughBonus;

    return Math.min(
        100,
        Math.max(
            35,
            chance
        )
    );

}


/* ============================================================ */
/* ADD QI                                                       */
/* ============================================================ */

function addQi(amount) {

    if (
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        return;
    }

    game.qi += amount;

    game.totalQi += amount;

}


/* ============================================================ */
/* MANUAL CULTIVATION                                           */
/* ============================================================ */

function manuallyCultivate(event) {

    const amount =
        getClickQi();

    addQi(amount);

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


/* ============================================================ */
/* ATTRIBUTES                                                   */
/* ============================================================ */

function upgradeAttribute(stat) {

    if (game.statPoints <= 0) {

        notify(
            "You have no unused Attribute Points.",
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
    ] += 1;

    game.statPoints -= 1;

    notify(
        `${capitalize(stat)} increased to ${game.attributes[stat]}.`,
        "success"
    );

    setSystemMessage(
        `Your ${capitalize(stat)} has strengthened.`
    );

    saveGame();

    render();

}


function capitalize(text) {

    return (
        text.charAt(0)
            .toUpperCase() +
        text.slice(1)
    );

}


/* ============================================================ */
/* BREAKTHROUGH                                                 */
/* ============================================================ */

function attemptBreakthrough() {

    const requirement =
        getQiRequirement();

    if (game.qi < requirement) {

        notify(
            `You require ${formatNumber(requirement - game.qi)} more Qi.`,
            "error"
        );

        return;
    }

    const chance =
        getBreakthroughChance();

    const roll =
        Math.random() *
        100;

    if (roll <= chance) {

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

        const oldRealm =
            getCurrentRealm().name;

        const oldStage =
            STAGES[
                game.stageIndex
            ];

        if (
            game.stageIndex <
            STAGES.length - 1
        ) {

            game.stageIndex +=
                1;

            const newStage =
                STAGES[
                    game.stageIndex
                ];

            addLog(
                `Breakthrough successful: ${oldRealm} ${oldStage} → ${oldRealm} ${newStage}.`,
                true
            );

            notify(
                `突破成功 — ${oldRealm} ${newStage}`,
                "success"
            );

            setSystemMessage(
                "Your meridians expanded and your physical body grew stronger."
            );

        } else if (
            game.realmIndex <
            REALMS.length - 1
        ) {

            game.realmIndex +=
                1;

            game.stageIndex =
                0;

            const newRealm =
                getCurrentRealm().name;

            game.statPoints +=
                7;

            game.attributes.strength +=
                3;

            game.attributes.constitution +=
                3;

            game.attributes.soul +=
                3;

            addLog(
                `Heaven and earth trembled as you entered the ${newRealm} Realm.`,
                true
            );

            notify(
                `境界突破 — ${newRealm}!`,
                "success"
            );

            setSystemMessage(
                `Congratulations, Host. Your cultivation has reached ${newRealm}.`
            );

            grantRealmReward();

            checkTechniqueUnlocks();

        }

    } else {

        const qiLost =
            Math.floor(
                requirement *
                0.12
            );

        game.qi =
            Math.max(
                0,
                game.qi -
                qiLost
            );

        addLog(
            `Breakthrough failed. ${formatNumber(qiLost)} Qi was lost.`
        );

        notify(
            "Breakthrough failed. Your foundation was shaken.",
            "error"
        );

        setSystemMessage(
            "Your meridians tremble. Stabilize your foundation before attempting another breakthrough."
        );

    }

    saveGame();

    render();

}


/* ============================================================ */
/* REALM REWARD                                                 */
/* ============================================================ */

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

        const weapon =
            generateWeapon();

        game.weapons.push(
            weapon
        );

        addLog(
            `Realm reward: ${weapon.rarity} ${weapon.name}.`,
            true
        );

    }

    addLog(
        `Realm reward: ${formatNumber(stones)} Spirit Stones.`,
        true
    );

}


/* ============================================================ */
/* TECHNIQUE UNLOCK                                             */
/* ============================================================ */

function checkTechniqueUnlocks() {

    const unlocked =
        TECHNIQUES.filter(
            technique =>
                technique.unlockRealm ===
                game.realmIndex
        );

    for (
        const technique
        of unlocked
    ) {

        if (
            !Object.prototype.hasOwnProperty.call(
                game.techniqueMastery,
                technique.id
            )
        ) {

            game.techniqueMastery[
                technique.id
            ] = 0;

        }

        notify(
            `New Technique Unlocked: ${technique.name}`,
            "success"
        );

        addLog(
            `The System unlocked ${technique.name}.`,
            true
        );

    }

}


/* ============================================================ */
/* TECHNIQUE EQUIP                                              */
/* ============================================================ */

function equipTechnique(
    techniqueId
) {

    const technique =
        TECHNIQUES.find(
            item =>
                item.id ===
                techniqueId
        );

    if (!technique) {
        return;
    }

    if (
        game.realmIndex <
        technique.unlockRealm
    ) {

        notify(
            `Reach ${REALMS[technique.unlockRealm].name} to learn this technique.`,
            "error"
        );

        return;
    }

    game.activeTechnique =
        technique.id;

    if (
        !Object.prototype.hasOwnProperty.call(
            game.techniqueMastery,
            technique.id
        )
    ) {

        game.techniqueMastery[
            technique.id
        ] = 0;

    }

    notify(
        `${technique.name} is now your active cultivation technique.`,
        "success"
    );

    addLog(
        `You began cultivating the ${technique.name}.`
    );

    saveGame();

    render();

}


/* ============================================================ */
/* PILLS                                                        */
/* ============================================================ */

function useCultivationPill() {

    if (game.pills <= 0) {

        notify(
            "You possess no Cultivation Pills.",
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

    addLog(
        `You consumed a Cultivation Pill and refined ${formatNumber(reward)} Qi.`
    );

    notify(
        `+${formatNumber(reward)} Qi`,
        "success"
    );

    saveGame();

    render();

}


/* ============================================================ */
/* WEAPON GENERATION                                            */
/* ============================================================ */

function chooseRarity() {

    const total =
        RARITIES.reduce(
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
        of RARITIES
    ) {

        roll -=
            rarity.weight;

        if (roll <= 0) {
            return rarity;
        }

    }

    return RARITIES[0];

}


function generateWeapon() {

    const rarity =
        chooseRarity();

    const names =
        WEAPON_NAMES[
            rarity.name
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

    const power =
        Math.floor(
            25 *
            rarity.multiplier *
            realmScaling *
            (
                0.85 +
                Math.random() *
                0.3
            )
        );

    return {

        id:
            `${Date.now()}-${Math.random()}`,

        name,

        rarity:
            rarity.name,

        power,

        obtainedAt:
            Date.now()

    };

}


/* ============================================================ */
/* EQUIP WEAPON                                                 */
/* ============================================================ */

function equipWeapon(
    weaponId
) {

    const weapon =
        game.weapons.find(
            item =>
                item.id ===
                weaponId
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

    addLog(
        `You equipped the ${weapon.name}.`
    );

    saveGame();

    render();

    renderWeaponInventory();

}


/* ============================================================ */
/* RANDOM EVENTS                                                */
/* ============================================================ */

function rollRandomEvent() {

    if (
        Math.random() >
        0.035
    ) {
        return;
    }

    const roll =
        Math.random();

    if (roll < 0.35) {

        const qi =
            getQiPerSecond() *
            25;

        addQi(qi);

        notify(
            `Enlightenment! +${formatNumber(qi)} Qi.`,
            "success"
        );

        addLog(
            `You entered enlightenment and absorbed ${formatNumber(qi)} Qi.`
        );

    } else if (
        roll < 0.6
    ) {

        const stones =
            20 +
            game.realmIndex *
            30;

        game.spiritStones +=
            stones;

        notify(
            `You discovered ${formatNumber(stones)} Spirit Stones.`,
            "success"
        );

    } else if (
        roll < 0.82
    ) {

        game.pills +=
            1;

        notify(
            "You discovered a Cultivation Pill.",
            "success"
        );

    } else {

        const weapon =
            generateWeapon();

        game.weapons.push(
            weapon
        );

        notify(
            `${weapon.rarity} Weapon obtained: ${weapon.name}!`,
            "success"
        );

        addLog(
            `Treasure encounter: ${weapon.rarity} ${weapon.name}.`,
            true
        );

    }

}


/* ============================================================ */
/* DAILY                                                        */
/* ============================================================ */

function canSignInToday() {

    if (!game.lastSignIn) {
        return true;
    }

    return (
        game.lastSignIn !==
        getDateString(
            new Date()
        )
    );

}


function claimDailyReward() {

    if (!canSignInToday()) {

        notify(
            "You already signed in today.",
            "error"
        );

        return;
    }

    const today =
        getDateString(
            new Date()
        );

    let streak =
        1;

    if (game.lastSignIn) {

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
        today;

    const index =
        (
            game.dailyStreak -
            1
        ) %
        DAILY_REWARDS.length;

    const reward =
        DAILY_REWARDS[
            index
        ];

    game.spiritStones +=
        reward.stones;

    game.pills +=
        reward.pills;

    game.manuals +=
        reward.manuals;

    const messages =
        [];

    if (reward.stones) {
        messages.push(
            `${reward.stones} Spirit Stones`
        );
    }

    if (reward.pills) {
        messages.push(
            `${reward.pills} Cultivation Pill(s)`
        );
    }

    if (reward.manuals) {
        messages.push(
            `${reward.manuals} Ancient Manual`
        );
    }

    if (reward.weapon) {

        const weapon =
            generateWeapon();

        game.weapons.push(
            weapon
        );

        messages.push(
            `${weapon.rarity} ${weapon.name}`
        );

    }

    const message =
        messages.join(", ");

    notify(
        `Daily Sign-In: ${message}`,
        "success"
    );

    addLog(
        `Day ${game.dailyStreak} sign-in reward: ${message}.`,
        true
    );

    saveGame();

    render();

}


/* ============================================================ */
/* LOG                                                          */
/* ============================================================ */

function addLog(
    message,
    important = false
) {

    game.log.unshift({

        time:
            getCurrentTime(),

        message,

        important

    });

    if (
        game.log.length >
        60
    ) {

        game.log =
            game.log.slice(
                0,
                60
            );

    }

}


/* ============================================================ */
/* SYSTEM MESSAGE                                               */
/* ============================================================ */

function setSystemMessage(
    message
) {

    systemMessage.textContent =
        message;

}


/* ============================================================ */
/* FLOATING QI                                                  */
/* ============================================================ */

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
        cultivateButton
            .getBoundingClientRect();

    let x =
        rect.left +
        rect.width /
        2;

    let y =
        rect.top +
        rect.height /
        2;

    if (
        event &&
        typeof event.clientX ===
        "number"
    ) {

        x =
            event.clientX;

        y =
            event.clientY;

    }

    element.style.left =
        `${x}px`;

    element.style.top =
        `${y}px`;

    document.body.appendChild(
        element
    );

    setTimeout(
        () =>
            element.remove(),
        1100
    );

}


/* ============================================================ */
/* NOTIFICATION                                                 */
/* ============================================================ */

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

    notificationContainer
        .appendChild(
            element
        );

    setTimeout(
        () => {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateX(30px)";

        },
        3500
    );

    setTimeout(
        () =>
            element.remove(),
        4000
    );

}


/* ============================================================ */
/* GAME TICK                                                    */
/* ============================================================ */

function gameTick() {

    const qiGain =
        getQiPerSecond();

    addQi(
        qiGain
    );

    increaseTechniqueMastery(
        0.003
    );

    rollRandomEvent();

    render();

}


/* ============================================================ */
/* TECHNIQUE LIST                                               */
/* ============================================================ */

function renderTechniques() {

    techniqueList.innerHTML =
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

        const mastery =
            getTechniqueMastery(
                technique.id
            );

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

        const buttonText =
            active
                ? "Currently Cultivating"
                : unlocked
                    ? "Cultivate Technique"
                    : `Unlock at ${REALMS[technique.unlockRealm].name}`;

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
                    Qi Production +${Math.round(technique.qiBonus * 100)}%
                    <br>
                    Mastery ${mastery.toFixed(1)}%
                </div>

                <button
                    ${active || !unlocked ? "disabled" : ""}
                    data-technique="${technique.id}"
                >
                    ${buttonText}
                </button>
            `;

        techniqueList.appendChild(
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


/* ============================================================ */
/* WEAPON INVENTORY                                             */
/* ============================================================ */

function renderWeaponInventory() {

    const list =
        byId(
            "weaponInventoryList"
        );

    list.innerHTML =
        "";

    if (
        game.weapons.length ===
        0
    ) {

        list.innerHTML =
            `
                <div class="weapon-card">
                    <div>
                        <h3>No Spirit Weapons</h3>
                        <p>
                            Weapons can drop from random encounters,
                            daily rewards, and realm breakthroughs.
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

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "weapon-card";

        if (
            weapon.id ===
            game.equippedWeaponId
        ) {

            card.classList.add(
                "equipped"
            );

        }

        const rarityClass =
            `rarity-${weapon.rarity.toLowerCase()}`;

        card.innerHTML =
            `
                <div>

                    <h3 class="${rarityClass}">
                        ${weapon.rarity} ${weapon.name}
                    </h3>

                    <p>
                        Combat Power +${formatNumber(weapon.power)}
                    </p>

                </div>

                <button
                    data-weapon="${weapon.id}"
                    ${weapon.id === game.equippedWeaponId ? "disabled" : ""}
                >
                    ${weapon.id === game.equippedWeaponId ? "Equipped" : "Equip"}
                </button>
            `;

        list.appendChild(
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


/* ============================================================ */
/* LOG RENDER                                                   */
/* ============================================================ */

function renderLog() {

    cultivationLog.innerHTML =
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

        const time =
            document.createElement(
                "span"
            );

        time.className =
            "log-time";

        time.textContent =
            entry.time;

        const message =
            document.createElement(
                "span"
            );

        message.textContent =
            entry.message;

        if (
            entry.important
        ) {

            message.className =
                "log-important";

        }

        element.append(
            time,
            message
        );

        cultivationLog.appendChild(
            element
        );

    }

}


/* ============================================================ */
/* REALM PATH                                                   */
/* ============================================================ */

function renderRealmPath() {

    realmPath.innerHTML =
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

            realmPath.appendChild(
                element
            );

        }
    );

}


/* ============================================================ */
/* STATUS WINDOW                                                */
/* ============================================================ */

function renderStatusWindow() {

    const technique =
        getCurrentTechnique();

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
        technique.name;

    byId(
        "statusWeaponDisplay"
    ).textContent =
        weapon
            ? `${weapon.rarity} ${weapon.name}`
            : "None";

    byId(
        "statusTotalQiDisplay"
    ).textContent =
        formatNumber(
            game.totalQi
        );

}


/* ============================================================ */
/* MAIN RENDER                                                  */
/* ============================================================ */

function render() {

    const realm =
        getCurrentRealm();

    const stage =
        STAGES[
            game.stageIndex
        ];

    const root =
        getCurrentRoot();

    const technique =
        getCurrentTechnique();

    const weapon =
        getEquippedWeapon();

    const requirement =
        getQiRequirement();

    const progress =
        Math.min(
            100,
            game.qi /
            requirement *
            100
        );

    const mastery =
        getTechniqueMastery();

    playerNameDisplay.textContent =
        game.playerName;

    realmDisplay.textContent =
        realm.name;

    stageDisplay.textContent =
        stage;

    spiritualRootDisplay.textContent =
        game.spiritualRoot;

    rootBonusDisplay.textContent =
        `Qi Efficiency +${Math.round(root.qiBonus * 100)}%`;

    mainRealmDisplay.textContent =
        `${realm.name} · ${stage}`;

    combatPowerDisplay.textContent =
        formatNumber(
            getCombatPower()
        );

    qiPerSecondDisplay.textContent =
        formatNumber(
            getQiPerSecond()
        );

    spiritStoneDisplay.textContent =
        formatNumber(
            game.spiritStones
        );

    statPointDisplay.textContent =
        game.statPoints;

    breakthroughCountDisplay.textContent =
        game.breakthroughCount;

    totalQiDisplay.textContent =
        formatNumber(
            game.totalQi
        );

    strengthDisplay.textContent =
        game.attributes.strength;

    constitutionDisplay.textContent =
        game.attributes.constitution;

    soulDisplay.textContent =
        game.attributes.soul;

    qiProgressText.textContent =
        `${formatNumber(game.qi)} / ${formatNumber(requirement)} Qi`;

    qiProgressBar.style.width =
        `${progress}%`;

    breakthroughChanceDisplay.textContent =
        `Breakthrough: ${getBreakthroughChance().toFixed(1)}%`;

    activeTechniqueDisplay.textContent =
        technique.name;

    techniqueBonusDisplay.textContent =
        `Qi Production +${Math.round(technique.qiBonus * 100)}%`;

    techniqueMasteryBar.style.width =
        `${mastery}%`;

    techniqueMasteryText.textContent =
        `Mastery ${mastery.toFixed(1)}%`;

    pillCountDisplay.textContent =
        game.pills;

    inventoryStoneDisplay.textContent =
        formatNumber(
            game.spiritStones
        );

    manualCountDisplay.textContent =
        game.manuals;

    weaponCountDisplay.textContent =
        game.weapons.length;

    streakDisplay.textContent =
        game.dailyStreak;


    if (weapon) {

        equippedWeaponName.textContent =
            `${weapon.rarity} ${weapon.name}`;

        equippedWeaponName.className =
            `rarity-${weapon.rarity.toLowerCase()}`;

        equippedWeaponStats.textContent =
            `Combat Power +${formatNumber(weapon.power)}`;

    } else {

        equippedWeaponName.textContent =
            "None";

        equippedWeaponName.className =
            "";

        equippedWeaponStats.textContent =
            "No weapon equipped.";

    }


    if (
        canSignInToday()
    ) {

        dailyStatus.textContent =
            "Sign-in reward available.";

        signInButton.disabled =
            false;

        signInButton.textContent =
            "Daily Sign-In";

    } else {

        dailyStatus.textContent =
            "Today's reward has already been claimed.";

        signInButton.disabled =
            true;

        signInButton.textContent =
            "Already Signed In";

    }


    usePillButton.disabled =
        game.pills <=
        0;


    if (
        game.realmIndex ===
            REALMS.length - 1 &&
        game.stageIndex ===
            STAGES.length - 1
    ) {

        breakthroughButton.disabled =
            true;

        breakthroughButton.textContent =
            "Pinnacle Reached";

    } else {

        breakthroughButton.disabled =
            false;

        breakthroughButton.textContent =
            game.qi >=
            requirement
                ? "Attempt Breakthrough"
                : `Need ${formatNumber(requirement)} Qi`;

    }


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


    renderTechniques();

    renderLog();

    renderRealmPath();

    renderStatusWindow();

}


/* ============================================================ */
/* OFFLINE                                                      */
/* ============================================================ */

function calculateOfflineProgress() {

    if (!game.lastPlayed) {
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

    offlineTimeDisplay.textContent =
        formatDuration(
            seconds
        );

    offlineQiDisplay.textContent =
        `+${formatNumber(pendingOfflineQi)} Qi`;

    offlineModal.classList.remove(
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
        `Offline Cultivation: +${formatNumber(pendingOfflineQi)} Qi`,
        "success"
    );

    pendingOfflineQi =
        0;

    offlineModal.classList.add(
        "hidden"
    );

    saveGame();

    render();

}


function formatDuration(
    seconds
) {

    if (seconds < 60) {
        return `${seconds} seconds`;
    }

    const minutes =
        Math.floor(
            seconds /
            60
        );

    if (minutes < 60) {
        return `${minutes} minutes`;
    }

    const hours =
        Math.floor(
            minutes /
            60
        );

    const remaining =
        minutes %
        60;

    return `${hours}h ${remaining}m`;

}


/* ============================================================ */
/* SAVE                                                         */
/* ============================================================ */

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
            error
        );

    }

}


/* ============================================================ */
/* LOAD + MIGRATION                                             */
/* ============================================================ */

function loadGame() {

    try {

        let saved =
            localStorage.getItem(
                SAVE_KEY
            );

        if (!saved) {

            saved =
                localStorage.getItem(
                    OLD_SAVE_KEY
                );

        }

        if (!saved) {

            game =
                createDefaultGameState();

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
                ...(parsed.attributes || {})
            },

            techniqueMastery: {
                ...defaults.techniqueMastery,
                ...(parsed.techniqueMastery || {})
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
            !game.spiritualRoot
        ) {

            game.spiritualRoot =
                generateSpiritualRoot();

        }


        if (
            typeof parsed.weapons ===
            "number"
        ) {

            game.weapons =
                [];

            for (
                let i = 0;
                i < parsed.weapons;
                i++
            ) {

                game.weapons.push(
                    generateWeapon()
                );

            }

        }


        if (
            !Array.isArray(
                game.log
            )
        ) {

            game.log =
                [];

        }

    } catch (error) {

        console.error(
            "Save load failed:",
            error
        );

        game =
            createDefaultGameState();

    }

}


/* ============================================================ */
/* RESET                                                        */
/* ============================================================ */

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

    localStorage.removeItem(
        OLD_SAVE_KEY
    );

    game =
        createDefaultGameState();

    saveGame();

    notify(
        "A new cultivation life has begun.",
        "success"
    );

    render();

}


/* ============================================================ */
/* PARTICLES                                                    */
/* ============================================================ */

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


/* ============================================================ */
/* EVENTS                                                       */
/* ============================================================ */

cultivateButton.addEventListener(
    "click",
    manuallyCultivate
);


breakthroughButton.addEventListener(
    "click",
    attemptBreakthrough
);


signInButton.addEventListener(
    "click",
    claimDailyReward
);


usePillButton.addEventListener(
    "click",
    useCultivationPill
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


byId(
    "statusButton"
).addEventListener(
    "click",
    () => {

        renderStatusWindow();

        statusModal.classList.remove(
            "hidden"
        );

    }
);


byId(
    "closeStatusButton"
).addEventListener(
    "click",
    () => {

        statusModal.classList.add(
            "hidden"
        );

    }
);


byId(
    "openInventoryButton"
).addEventListener(
    "click",
    () => {

        renderWeaponInventory();

        equipmentModal.classList.remove(
            "hidden"
        );

    }
);


byId(
    "closeEquipmentButton"
).addEventListener(
    "click",
    () => {

        equipmentModal.classList.add(
            "hidden"
        );

    }
);


byId(
    "claimOfflineButton"
).addEventListener(
    "click",
    claimOfflineProgress
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


statusModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            statusModal
        ) {

            statusModal.classList.add(
                "hidden"
            );

        }

    }
);


equipmentModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            equipmentModal
        ) {

            equipmentModal.classList.add(
                "hidden"
            );

        }

    }
);


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


/* ============================================================ */
/* INITIALIZE                                                   */
/* ============================================================ */

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
        () => {

            saveGame();

        },
        AUTO_SAVE_INTERVAL
    );

}


initializeGame();
