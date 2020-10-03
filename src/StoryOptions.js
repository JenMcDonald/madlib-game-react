import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faWineBottle, faAppleAlt, faBomb, faCoins, faSlash } from '@fortawesome/free-solid-svg-icons';

const hammer = <FontAwesomeIcon icon={faHammer} key="hammer" />;
const bottle = <FontAwesomeIcon icon={faWineBottle} key="bottle" />;
const food = <FontAwesomeIcon icon={faAppleAlt} key="food" />;
const bomb = <FontAwesomeIcon icon={faBomb} key="bomb" />;
const coin = <FontAwesomeIcon icon={faCoins} key="coin" />;
const oar = <FontAwesomeIcon icon={faSlash} key="oar" />;

export const story = [
    {
        id: 1,
        text: "Captain, Captain, CAPTAIN! The sound of your comrades calling you brings you back to consciousness, and you remember the mutiny you started. You quickly look around for a weapon and choose to pick up ... ",
        options: [
            {
                text: "A hammer",
                nextText: 2
            },
            {
                text: "An oar",
                nextText: 3
            }
        ],
        inventory: "No items yet",
    },
    {
        id: 2,
        text: "Like a maniac you start waving your hammer around, gouging at the enemies' eyes with the hook end. Your comrades shout to you to check below so you head down into the ... ",
        options: [
            {
                text: "Kitchen",
                nextText: 4
            },
            {
                text: "Hold",
                nextText: 5
            }
        ],
        inventory: hammer,
    },
    {
        id: 3,
        text: "You grab the oar and spin around, taking out two of your former shipmates. As you do this you spy the utility boat at the edge of the ship, and you wonder if this has all been a mistake. Should you make a run for it?",
        options: [
            {
                text: "Keep hitting pirates with the oar!!",
                nextText: 6
            },
            {
                text: "Head to the boat",
                nextText: 7
            }
        ],
        inventory: oar,
    },
    {
        id: 4,
        text: "Arriving in the kitchen it's clear a feast was being prepared. Half filled platters were lined up and there were still pots on the fire. But then your eyes land on the all the tequila",
        options: [
            {
                text: "Take some food",
                nextText: 8
            },
            {
                text: "Take the tequila",
                nextText: 9
            }
        ],
        inventory: hammer,
    },
    {
        id: 5,
        text: "You head down to the hold and you see a heavy prison cell door on one side and what looks like a treasure chest on the other. Which do you open?",
        options: [
            {
                text: "Door",
                nextText: 10
            },
            {
                text: "Chest",
                nextText: 11
            }
        ],
        inventory: hammer,
    },
    {
        id: 6,
        text: " With renewed vigour you re-join the fight, bringing the oar down so hard on someone's head that it smashes into a thousand pieces. You pick up the hammer instead and remember that it was your job to check all is clear below deck",
        options: [
            {
                text: "Head to the Kitchen",
                nextText: 4
            },
            {
                text: "Head to the Hold",
                nextText: 5
            }
        ],
        inventory: oar,
    },
    {
        id: 7,
        text: "Your self preservation instinct takes over and you discreetly make your way over to the utility boat. As you climb in you notice a canvas covering something in the corner.",
        options: [
            {
                text: "Get the boat in the water first",
                nextText: 12
            },
            {
                text: "Lift it up",
                nextText: 13
            }
        ],
        inventory: oar,
    },
    {
        id: 8,
        text: "You grab as much food as you can and shove it in your bag, taking a big bite of apple as you do. But the minute you do, your mind drifts back to the fairytales you read as a kid and as your eyes roll back and you begin to lose consciousness you realise your mistake. The food was poisoned.",
        options: [
            {
                text: "Reset",
                nextText: 1,
            }
        ],
        inventory: [hammer, food],
    },
    {
        id: 9,
        text: "You pick up some bottles of tequila and sling them in your bag, they'll taste sweet with your victory. But as your doing this your former quartermaster comes hurling through the door",
        options: [
            {
                text: "Throw the hammer",
                nextText: 16
            },
            {
                text: "Throw the tequila",
                nextText: 17
            }
        ],
        inventory: [hammer, bottle],
    },
    {
        id: 10,
        text: " You smash through the padlock with your hammer and slowly open the door. Sat there is an old friend of yours. You thought they'd made him walk the plank years ago. You tell him about your mission and he tells you about a conversation he overheard about all the food and drink in the kitchen being poisoned! You're about to head back up to the deck when you remember the chest in the corner",
        options: [
            {
                text: "Open it",
                nextText: 11
            },
            {
                text: "Leave it",
                nextText: 14
            }
        ],
        inventory: [hammer],
    },
    {
        id: 11,
        text: "You risk taking a peak inside the chest, wondering what treasures you may be able to share with your crew later. As you reach to lift the lid, it flips back and someone jumps out!",
        options: [
            {
                text: "Hit him with the hammer",
                nextText: 15,
            },
            {
                text: "Kick him in the crotch!",
                nextText: 18,
            }
        ],
        inventory: [hammer],
    },
    {
        id: 12,
        text: "You jump in the boat and quietly lower it down to the water. Once you've reached a safe distance you lift the canvas up which reveals food, defaultDrink, money, bombs - everything you'll need until you reach dry land. You let out a 'Yippee' sail away!",
        options: [
            {
                text: "Or perhaps you'd like to reset and try to win in a less cowardly way",
                nextText: 1
            },
        ],
        inventory: [oar, food, bottle, coin, bomb],
    },
    {
        id: 13,
        text: "You lift the canopy and underneath you see loads of crates - filled with food, drink, bombs, money, everything you need to win the fight ... or to make a bid for freedom",
        options: [
            {
                text: "Stay in the Fight",
                nextText: 6
            },
            {
                text: "Row for Freedom",
                nextText: 19
            }
        ],
        inventory: oar,
    },
    {
        id: 14,
        text: " To be continued ",
        options: [
            {
                text: " Reset ",
                nextText: 1
            }
        ],
        inventory: hammer,
    },
    {
        id: 15,
        text: " You raise the hammer to bring it down on his head but he blocks your swing and smashes his face into yours. The impact sends you reeling backwards and he pushes you into the cell locking you in",
        options: [
            {
                text: "Reset",
                nextText: 1
            },
        ],
        inventory: [hammer],
    },
    {
        id: 16,
        text: "You lunge across the table to reach your hammer but he's quicker. With one heavy hit you feel the world disappear beneath you.",
        options: [
            {
                text: "Reset",
                nextText: 1,
            }
        ],
        inventory: [hammer, bottle],
    },
    {
        id: 17,
        text: "In an angry rage you smash the bottle of tequila over his head, and his face melts straight off! The tequila was poisoned! You dodged a bullet there. With luck on your side you head to the:",
        options: [
            {
                text: "Hold",
                nextText: 5
            },
            {
                text: "Deck",
                nextText: 14
            }
        ],
        inventory: [hammer],
    },
    {
        id: 18,
        text: "You kick him hard, and the force causes him to stagger back and in his moment of weakness you push him into the prison cell and lock him in. You may be able to question him later. You peer back into the chest and notice an unlit bomb",
        options: [
            {
                text: "Take it in case you need it later",
                nextText: 20,
            },
            {
                text: "Leave it in case you need it later",
                nextText: 21,
            }
        ],
        inventory: [hammer],
    },
    {
        id: 19,
        text: "As you contemplate your choices you're seen by one of your own men climbing into the boat. He lights a match and throws it onto the crate of bombs. Your stomach sinks and you know what's about to happen. As your world explodes you know that your indecision and weak will has cost you your life",
        options: [
            {
                text: "Reset",
                nextText: 1
            },
        ],
        inventory: [oar, food, coin, bottle, bomb, bomb, bomb],
    },
    {
        id: 20,
        text: " To be continued ",
        options: [
            {
                text: "Reset",
                nextText: 1
            },
        ],
        inventory: [hammer, bomb],
    },
    {
        id: 21,
        text: " To be continued",
        options: [
            {
                text: "Reset",
                nextText: 1,
            }
        ],
        inventory: [hammer],
    }
]
