"use strict";

/* ============================================================ */
/* GAME CONFIGURATION                                           */
/* ============================================================ */

const SAVE_KEY = "idleCultivationSaveV1";

const TICK_RATE = 1000;

const AUTO_SAVE_INTERVAL = 10000;

const MAX_OFFLINE_SECONDS = 60 * 60 * 12;


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
/* DAILY REWARDS                                                */
/* ============================================================ */

const DAILY_REWARDS = [
    {
        stones: 100,
        pills: 0,
        manuals: 0,
        weapons: 0
    },

    {
        stones: 0,
        pills: 1,
        manuals: 0,
        weapons: 0
    },

    {
        stones: 250,
        pills: 0,
        manuals: 0,
        weapons: 0
    },

    {
        stones: 0,
        pills: 2,
        manuals: 0,
        weapons: 0
    },

    {
        stones: 0,
        pills: 0,
        manuals: 1,
        weapons: 0
    },

    {
        stones: 500,
        pills: 0,
        manuals: 0,
        weapons: 0
    },

    {
        stones: 1000,
        pills: 2,
        manuals: 0,
        weapons: 1
    }
];


/* ============================================================ */
/* DEFAULT SAVE                                                 */
/* ============================================================ */

function createDefaultGameState() {

    return {
        playerName: "Jiang Chue",

        realmIndex: 0,

        stageIndex: 0,

        qi: 0,

        totalQi: 0,

        spiritStones: 0,

        pills: 0,

        manuals: 0,

        weapons: 0,

        breakthroughCount: 0,

        dailyStreak: 0,

        lastSignIn: null,

        lastPlayed: Date.now(),

        createdAt: Date.now(),

        log: [
            {
                time: getCurrentTime(),
                message:
                    "You opened your eyes and began walking the path of cultivation.",
                important: true
            }
        ]
    };

}


/* ============================================================ */
/* GAME STATE                                                   */
/* ============================================================ */

let game = createDefaultGameState();

let pendingOfflineQi = 0;


/* ============================================================ */
/* DOM ELEMENTS                                                 */
/* ============================================================ */

const realmDisplay =
    document.getElementById("realmDisplay");

const stageDisplay =
    document.getElementById("stageDisplay");

const mainRealmDisplay =
    document.getElementById("mainRealmDisplay");

const combatPowerDisplay =
    document.getElementById("combatPowerDisplay");

const qiPerSecondDisplay =
    document.getElementById("qiPerSecondDisplay");

const spiritStoneDisplay =
    document.getElementById("spiritStoneDisplay");

const breakthroughCountDisplay =
    document.getElementById("breakthroughCountDisplay");

const totalQiDisplay =
    document.getElementById("totalQiDisplay");

const qiProgressText =
    document.getElementById("qiProgressText");

const qiProgressBar =
    document.getElementById("qiProgressBar");

const breakthroughChanceDisplay =
    document.getElementById("breakthroughChanceDisplay");

const systemMessage =
    document.getElementById("systemMessage");

const cultivateButton =
    document.getElementById("cultivateButton");

const breakthroughButton =
    document.getElementById("breakthroughButton");

const signInButton =
    document.getElementById("signInButton");

const usePillButton =
    document.getElementById("usePillButton");

const saveButton =
    document.getElementById("saveButton");

const resetButton =
    document.getElementById("resetButton");

const pillCountDisplay =
    document.getElementById("pillCountDisplay");

const inventoryStoneDisplay =
    document.getElementById("inventoryStoneDisplay");

const manualCountDisplay =
    document.getElementById("manualCountDisplay");

const weaponCountDisplay =
    document.getElementById("weaponCountDisplay");

const streakDisplay =
    document.getElementById("streakDisplay");

const dailyStatus =
    document.getElementById("dailyStatus");

const cultivationLog =
    document.getElementById("cultivationLog");

const realmPath =
    document.getElementById("realmPath");

const notificationContainer =
    document.getElementById("notificationContainer");

const offlineModal =
    document.getElementById("offlineModal");

const offlineTimeDisplay =
    document.getElementById("offlineTimeDisplay");

const offlineQiDisplay =
    document.getElementById("offlineQiDisplay");

const claimOfflineButton =
    document.getElementById("claimOfflineButton");


/* ============================================================ */
/* NUMBER FORMAT                                                */
/* ============================================================ */

function formatNumber(number) {

    if (!Number.isFinite(number)) {
        return "0";
    }

    if (number < 1000) {
        return Math.floor(number).toLocaleString();
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

    return Math.floor(number).toString();

}


/* ============================================================ */
/* CURRENT REALM                                                */
/* ============================================================ */

function getCurrentRealm() {

    return REALMS[game.realmIndex];

}


/* ============================================================ */
/* QI REQUIREMENT                                               */
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
/* QI PER SECOND                                                */
/* ============================================================ */

function getQiPerSecond() {

    const realm =
        getCurrentRealm();

    const stageBonus =
        1 +
        game.stageIndex * 0.25;

    const manualBonus =
        1 +
        game.manuals * 0.15;

    const breakthroughBonus =
        1 +
        game.breakthroughCount * 0.025;

    return (
        realm.qiMultiplier *
        stageBonus *
        manualBonus *
        breakthroughBonus
    );

}


/* ============================================================ */
/* CLICK QI                                                     */
/* ============================================================ */

function getClickQi() {

    return Math.max(
        1,
        getQiPerSecond() * 2.5
    );

}


/* ============================================================ */
/* COMBAT POWER                                                 */
/* ============================================================ */

function getCombatPower() {

    const realm =
        getCurrentRealm();

    const realmPower =
        10 *
        realm.combatMultiplier;

    const stagePower =
        1 +
        game.stageIndex * 0.45;

    const weaponPower =
        1 +
        game.weapons * 0.35;

    const manualPower =
        1 +
        game.manuals * 0.08;

    return Math.floor(
        realmPower *
        stagePower *
        weaponPower *
        manualPower
    );

}


/* ============================================================ */
/* BREAKTHROUGH CHANCE                                          */
/* ============================================================ */

function getBreakthroughChance() {

    let chance =
        100 -
        game.realmIndex * 4 -
        game.stageIndex * 6;

    chance =
        Math.max(
            40,
            chance
        );

    return chance;

}


/* ============================================================ */
/* ADD QI                                                       */
/* ============================================================ */

function addQi(amount) {

    if (
        typeof amount !== "number" ||
        amount <= 0
    ) {
        return;
    }

    game.qi += amount;

    game.totalQi += amount;

}


/* ============================================================ */
/* CULTIVATE CLICK                                              */
/* ============================================================ */

function manuallyCultivate(event) {

    const amount =
        getClickQi();

    addQi(amount);

    createFloatingQi(
        event,
        amount
    );

    setSystemMessage(
        `You circulated your spiritual energy and gathered ${formatNumber(amount)} Qi.`
    );

    render();

}


/* ============================================================ */
/* FLOATING QI                                                  */
/* ============================================================ */

function createFloatingQi(
    event,
    amount
) {

    const element =
        document.createElement("div");

    element.className =
        "floating-qi";

    element.textContent =
        `+${formatNumber(amount)} Qi`;

    const rect =
        cultivateButton.getBoundingClientRect();

    let x =
        rect.left +
        rect.width / 2;

    let y =
        rect.top +
        rect.height / 2;

    if (
        event &&
        typeof event.clientX === "number"
    ) {
        x = event.clientX;
        y = event.clientY;
    }

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
        1100
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
            `You need ${formatNumber(requirement - game.qi)} more Qi before attempting a breakthrough.`,
            "error"
        );

        setSystemMessage(
            "Your cultivation foundation is not yet complete."
        );

        return;
    }

    const chance =
        getBreakthroughChance();

    const roll =
        Math.random() * 100;

    if (roll <= chance) {

        game.qi -= requirement;

        game.breakthroughCount += 1;

        const oldRealm =
            getCurrentRealm().name;

        const oldStage =
            STAGES[game.stageIndex];

        if (
            game.stageIndex <
            STAGES.length - 1
        ) {

            game.stageIndex += 1;

            const newStage =
                STAGES[game.stageIndex];

            const message =
                `Breakthrough successful! ${oldRealm} ${oldStage} → ${oldRealm} ${newStage}.`;

            addLog(
                message,
                true
            );

            setSystemMessage(
                message
            );

            notify(
                `突破成功 — You reached ${oldRealm} ${newStage}!`,
                "success"
            );

        } else {

            if (
                game.realmIndex <
                REALMS.length - 1
            ) {

                game.realmIndex += 1;

                game.stageIndex = 0;

                const newRealm =
                    getCurrentRealm().name;

                const message =
                    `Heaven and earth tremble. You ascended from ${oldRealm} to ${newRealm}!`;

                addLog(
                    message,
                    true
                );

                setSystemMessage(
                    message
                );

                notify(
                    `境界突破 — ${newRealm}!`,
                    "success"
                );

                grantRealmReward();

            } else {

                game.qi += requirement;

                notify(
                    "You have already reached the current pinnacle of cultivation.",
                    "success"
                );

                setSystemMessage(
                    "Beyond immortality lies a path yet unwritten."
                );

            }

        }

    } else {

        const qiLost =
            Math.floor(
                requirement * 0.15
            );

        game.qi =
            Math.max(
                0,
                game.qi - qiLost
            );

        const message =
            `Breakthrough failed. Your meridians were disturbed and you lost ${formatNumber(qiLost)} Qi.`;

        addLog(
            message
        );

        setSystemMessage(
            message
        );

        notify(
            "Breakthrough failed. Stabilize your cultivation before trying again.",
            "error"
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
        100 *
        Math.pow(
            2,
            game.realmIndex
        );

    game.spiritStones +=
        stones;

    if (
        Math.random() <=
        0.4
    ) {
        game.pills += 1;
    }

    addLog(
        `Realm ascension reward: ${formatNumber(stones)} Spirit Stones.`,
        true
    );

}


/* ============================================================ */
/* CULTIVATION PILL                                             */
/* ============================================================ */

function useCultivationPill() {

    if (game.pills <= 0) {

        notify(
            "You do not possess any Cultivation Pills.",
            "error"
        );

        return;
    }

    game.pills -= 1;

    const requirement =
        getQiRequirement();

    const qiReward =
        Math.max(
            100,
            requirement * 0.35
        );

    addQi(
        qiReward
    );

    addLog(
        `You consumed a Cultivation Pill and gained ${formatNumber(qiReward)} Qi.`
    );

    setSystemMessage(
        `Medicinal energy rushed through your meridians. +${formatNumber(qiReward)} Qi.`
    );

    notify(
        `Cultivation Pill consumed: +${formatNumber(qiReward)} Qi.`,
        "success"
    );

    saveGame();

    render();

}


/* ============================================================ */
/* DAILY SIGN-IN                                                */
/* ============================================================ */

function claimDailyReward() {

    if (!canSignInToday()) {

        notify(
            "You have already signed in today.",
            "error"
        );

        return;
    }

    const today =
        getDateString(
            new Date()
        );

    let newStreak = 1;

    if (game.lastSignIn) {

        const yesterday =
            new Date();

        yesterday.setDate(
            yesterday.getDate() - 1
        );

        const yesterdayString =
            getDateString(
                yesterday
            );

        if (
            game.lastSignIn ===
            yesterdayString
        ) {
            newStreak =
                game.dailyStreak + 1;
        }

    }

    game.dailyStreak =
        newStreak;

    game.lastSignIn =
        today;

    const rewardIndex =
        (game.dailyStreak - 1) %
        DAILY_REWARDS.length;

    const reward =
        DAILY_REWARDS[
            rewardIndex
        ];

    game.spiritStones +=
        reward.stones;

    game.pills +=
        reward.pills;

    game.manuals +=
        reward.manuals;

    game.weapons +=
        reward.weapons;

    const description =
        buildRewardDescription(
            reward
        );

    addLog(
        `Daily sign-in Day ${game.dailyStreak}: ${description}.`,
        true
    );

    setSystemMessage(
        `The Heavenly Dao granted your daily reward: ${description}.`
    );

    notify(
        `Daily reward claimed: ${description}`,
        "success"
    );

    saveGame();

    render();

}


/* ============================================================ */
/* DAILY DESCRIPTION                                            */
/* ============================================================ */

function buildRewardDescription(
    reward
) {

    const rewards = [];

    if (reward.stones > 0) {

        rewards.push(
            `${formatNumber(reward.stones)} Spirit Stones`
        );

    }

    if (reward.pills > 0) {

        rewards.push(
            `${reward.pills} Cultivation Pill${reward.pills > 1 ? "s" : ""}`
        );

    }

    if (reward.manuals > 0) {

        rewards.push(
            `${reward.manuals} Ancient Manual${reward.manuals > 1 ? "s" : ""}`
        );

    }

    if (reward.weapons > 0) {

        rewards.push(
            `${reward.weapons} Spirit Weapon${reward.weapons > 1 ? "s" : ""}`
        );

    }

    return rewards.join(", ");

}


/* ============================================================ */
/* SIGN-IN AVAILABILITY                                         */
/* ============================================================ */

function canSignInToday() {

    if (!game.lastSignIn) {
        return true;
    }

    const today =
        getDateString(
            new Date()
        );

    return (
        game.lastSignIn !==
        today
    );

}


/* ============================================================ */
/* DATE STRING                                                  */
/* ============================================================ */

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
/* SYSTEM MESSAGE                                               */
/* ============================================================ */

function setSystemMessage(message) {

    systemMessage.textContent =
        message;

}


/* ============================================================ */
/* LOG                                                          */
/* ============================================================ */

function addLog(
    message,
    important = false
) {

    game.log.unshift({
        time: getCurrentTime(),
        message,
        important
    });

    if (
        game.log.length >
        50
    ) {
        game.log =
            game.log.slice(
                0,
                50
            );
    }

}


/* ============================================================ */
/* CURRENT TIME                                                 */
/* ============================================================ */

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


/* ============================================================ */
/* RANDOM CULTIVATION EVENTS                                    */
/* ============================================================ */

function rollRandomEvent() {

    const chance =
        Math.random();

    if (chance > 0.035) {
        return;
    }

    const events = [
        randomQiEvent,
        randomStoneEvent,
        randomPillEvent
    ];

    const chosenEvent =
        events[
            Math.floor(
                Math.random() *
                events.length
            )
        ];

    chosenEvent();

}


/* ============================================================ */
/* QI EVENT                                                     */
/* ============================================================ */

function randomQiEvent() {

    const amount =
        Math.max(
            10,
            getQiPerSecond() *
            20
        );

    addQi(
        amount
    );

    addLog(
        `You entered a brief state of enlightenment and gained ${formatNumber(amount)} Qi.`
    );

    notify(
        `Enlightenment! +${formatNumber(amount)} Qi.`,
        "success"
    );

}


/* ============================================================ */
/* STONE EVENT                                                  */
/* ============================================================ */

function randomStoneEvent() {

    const amount =
        Math.max(
            5,
            Math.floor(
                10 +
                game.realmIndex *
                15
            )
        );

    game.spiritStones +=
        amount;

    addLog(
        `You discovered ${formatNumber(amount)} Spirit Stones during cultivation.`
    );

    notify(
        `You discovered ${formatNumber(amount)} Spirit Stones.`,
        "success"
    );

}


/* ============================================================ */
/* PILL EVENT                                                   */
/* ============================================================ */

function randomPillEvent() {

    game.pills += 1;

    addLog(
        "A mysterious fragrance filled the chamber. You discovered a Cultivation Pill."
    );

    notify(
        "You discovered a Cultivation Pill!",
        "success"
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

    rollRandomEvent();

    render();

}


/* ============================================================ */
/* RENDER                                                       */
/* ============================================================ */

function render() {

    const realm =
        getCurrentRealm();

    const stage =
        STAGES[
            game.stageIndex
        ];

    const requirement =
        getQiRequirement();

    const progress =
        Math.min(
            100,
            game.qi /
            requirement *
            100
        );

    const qiPerSecond =
        getQiPerSecond();

    const combatPower =
        getCombatPower();

    const breakthroughChance =
        getBreakthroughChance();


    /* ======================================================== */
    /* CHARACTER                                                */
    /* ======================================================== */

    realmDisplay.textContent =
        realm.name;

    stageDisplay.textContent =
        stage;

    mainRealmDisplay.textContent =
        `${realm.name} · ${stage}`;


    /* ======================================================== */
    /* STATS                                                    */
    /* ======================================================== */

    combatPowerDisplay.textContent =
        formatNumber(
            combatPower
        );

    qiPerSecondDisplay.textContent =
        formatNumber(
            qiPerSecond
        );

    spiritStoneDisplay.textContent =
        formatNumber(
            game.spiritStones
        );

    breakthroughCountDisplay.textContent =
        formatNumber(
            game.breakthroughCount
        );

    totalQiDisplay.textContent =
        formatNumber(
            game.totalQi
        );


    /* ======================================================== */
    /* QI PROGRESS                                              */
    /* ======================================================== */

    qiProgressText.textContent =
        `${formatNumber(game.qi)} / ${formatNumber(requirement)} Qi`;

    qiProgressBar.style.width =
        `${progress}%`;

    breakthroughChanceDisplay.textContent =
        `Breakthrough: ${breakthroughChance}%`;


    /* ======================================================== */
    /* INVENTORY                                                */
    /* ======================================================== */

    pillCountDisplay.textContent =
        game.pills;

    inventoryStoneDisplay.textContent =
        formatNumber(
            game.spiritStones
        );

    manualCountDisplay.textContent =
        game.manuals;

    weaponCountDisplay.textContent =
        game.weapons;


    /* ======================================================== */
    /* DAILY                                                   */
    /* ======================================================== */

    streakDisplay.textContent =
        game.dailyStreak;

    if (canSignInToday()) {

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


    /* ======================================================== */
    /* PILLS                                                    */
    /* ======================================================== */

    usePillButton.disabled =
        game.pills <= 0;


    /* ======================================================== */
    /* BREAKTHROUGH                                             */
    /* ======================================================== */

    if (
        game.realmIndex ===
            REALMS.length - 1 &&
        game.stageIndex ===
            STAGES.length - 1
    ) {

        breakthroughButton.textContent =
            "Pinnacle Reached";

        breakthroughButton.disabled =
            true;

    } else {

        breakthroughButton.textContent =
            game.qi >= requirement
                ? "Attempt Breakthrough"
                : `Need ${formatNumber(requirement)} Qi`;

        breakthroughButton.disabled =
            false;

    }


    renderLog();

    renderRealmPath();

}


/* ============================================================ */
/* RENDER LOG                                                   */
/* ============================================================ */

function renderLog() {

    cultivationLog.innerHTML =
        "";

    if (
        !Array.isArray(
            game.log
        ) ||
        game.log.length === 0
    ) {

        cultivationLog.innerHTML =
            `
                <div class="log-entry">
                    No cultivation records yet.
                </div>
            `;

        return;

    }

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

        if (
            entry.important
        ) {
            message.className =
                "log-important";
        }

        message.textContent =
            entry.message;

        element.appendChild(
            time
        );

        element.appendChild(
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
/* NOTIFICATION                                                 */
/* ============================================================ */

function notify(
    message,
    type = "success"
) {

    const notification =
        document.createElement(
            "div"
        );

    notification.className =
        `notification ${type}`;

    notification.textContent =
        message;

    notificationContainer.appendChild(
        notification
    );

    setTimeout(
        () => {

            notification.style.opacity =
                "0";

            notification.style.transform =
                "translateX(30px)";

        },
        3500
    );

    setTimeout(
        () => {
            notification.remove();
        },
        4000
    );

}


/* ============================================================ */
/* SAVE GAME                                                    */
/* ============================================================ */

function saveGame(
    showMessage = false
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
            "Failed to save game:",
            error
        );

        if (showMessage) {

            notify(
                "Failed to save your cultivation progress.",
                "error"
            );

        }

    }

}


/* ============================================================ */
/* LOAD GAME                                                    */
/* ============================================================ */

function loadGame() {

    try {

        const savedData =
            localStorage.getItem(
                SAVE_KEY
            );

        if (!savedData) {

            game =
                createDefaultGameState();

            return;

        }

        const parsed =
            JSON.parse(
                savedData
            );

        game = {
            ...createDefaultGameState(),
            ...parsed
        };

        if (
            !Array.isArray(
                game.log
            )
        ) {
            game.log = [];
        }

    } catch (error) {

        console.error(
            "Failed to load save:",
            error
        );

        game =
            createDefaultGameState();

    }

}


/* ============================================================ */
/* OFFLINE CULTIVATION                                          */
/* ============================================================ */

function calculateOfflineProgress() {

    if (
        !game.lastPlayed
    ) {
        return;
    }

    const now =
        Date.now();

    const differenceMilliseconds =
        now -
        game.lastPlayed;

    let seconds =
        Math.floor(
            differenceMilliseconds /
            1000
        );

    if (seconds < 10) {
        return;
    }

    seconds =
        Math.min(
            seconds,
            MAX_OFFLINE_SECONDS
        );

    pendingOfflineQi =
        getQiPerSecond() *
        seconds *
        0.75;

    if (
        pendingOfflineQi <= 0
    ) {
        return;
    }

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


/* ============================================================ */
/* CLAIM OFFLINE                                                */
/* ============================================================ */

function claimOfflineProgress() {

    if (
        pendingOfflineQi <= 0
    ) {

        offlineModal.classList.add(
            "hidden"
        );

        return;
    }

    addQi(
        pendingOfflineQi
    );

    addLog(
        `You completed secluded cultivation while away and gained ${formatNumber(pendingOfflineQi)} Qi.`,
        true
    );

    notify(
        `Offline cultivation claimed: +${formatNumber(pendingOfflineQi)} Qi.`,
        "success"
    );

    setSystemMessage(
        "Even while you rested, your cultivation never ceased."
    );

    pendingOfflineQi = 0;

    offlineModal.classList.add(
        "hidden"
    );

    saveGame();

    render();

}


/* ============================================================ */
/* DURATION FORMAT                                              */
/* ============================================================ */

function formatDuration(seconds) {

    if (
        seconds <
        60
    ) {
        return `${seconds} seconds`;
    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    if (
        minutes <
        60
    ) {
        return `${minutes} minute${minutes === 1 ? "" : "s"}`;
    }

    const hours =
        Math.floor(
            minutes / 60
        );

    const remainingMinutes =
        minutes % 60;

    if (
        remainingMinutes === 0
    ) {
        return `${hours} hour${hours === 1 ? "" : "s"}`;
    }

    return (
        `${hours}h ` +
        `${remainingMinutes}m`
    );

}


/* ============================================================ */
/* RESET                                                        */
/* ============================================================ */

function resetGame() {

    const confirmed =
        window.confirm(
            "Erase all cultivation progress and return to mortality?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        SAVE_KEY
    );

    game =
        createDefaultGameState();

    pendingOfflineQi = 0;

    setSystemMessage(
        "Your previous life faded away. A new cultivation journey begins."
    );

    notify(
        "Cultivation progress reset.",
        "success"
    );

    saveGame();

    render();

}


/* ============================================================ */
/* PARTICLES                                                    */
/* ============================================================ */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    const particleCount =
        35;

    for (
        let i = 0;
        i < particleCount;
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
/* EVENT LISTENERS                                              */
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

saveButton.addEventListener(
    "click",
    () => {
        saveGame(
            true
        );
    }
);

resetButton.addEventListener(
    "click",
    resetGame
);

claimOfflineButton.addEventListener(
    "click",
    claimOfflineProgress
);


/* ============================================================ */
/* SAVE WHEN PAGE CLOSES                                        */
/* ============================================================ */

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


/* ============================================================ */
/* START                                                        */
/* ============================================================ */

initializeGame();
