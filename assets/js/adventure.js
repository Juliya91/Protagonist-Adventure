//Code is taken from Javascript-Text-Adventure-Game by Mega-Barrel on GitHub and edited slightly
//(https://github.com/Mega-Barrel/Javascript-Text-Adventure-Game/blob/master/main.js)

const textElement = document.getElementById('story')
const pathButtonsElement = document.getElementById('choices-buttons')

function startGame() {
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (pathButtonsElement.firstChild) {
        pathButtonsElement.removeChild(pathButtonsElement.firstChild)
    }

    textNode.choices.forEach(choice => {
        if (choice) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectChoice(choice))
            pathButtonsElement.appendChild(button)
        }
    })
}

function selectChoice(choice) {

    let nextTextNodeId = choice.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    showTextNode(nextTextNodeId)
}


const textNodes = [{
        id: 1,
        text: 'You open your eyes and find yourself in the middle of an enormous sports stadium, completely and utterly disorientated... Where... are you? And what exactly is going on? ....The last thing you vaguely remember is that the government ordered the city to take a vaccine named SI-1093 which promised to prevent the contraction of deadly viruses. Surely that was just speculation. Or was it? .....You blink rapidly and focus on a group of people in the near distance, huddled around what looked like a makeshift bonfire barbecue of some sort. The people are wearing worn out, mis-matched clothing and look slightly disheveled...',
        choices: [{
                text: 'Approach the group to discover what has happened?',
                nextText: 3
            },
            {
                text: 'Try to find an exit on your own',
                nextText: 2
            }
        ]
    },

    {
        id: 2,
        text: 'You break into a run, towards a metal door in front of you. You enter the stadium building and see what appears to be an information desk. The telephone is disconnected and papers a stack of various papers are nearly placed on the counter. You....',
        choices: [{
                text: 'Head towards the desk, to search for more information',
                nextText: 4
            },
            {
                text: 'Notice an exit sign to your left and run in that direction',
                nextText: 5
            }
        ]
    },

    {
        id: 3,
        text: 'As you approach the huddle, a young man with a warm smile notices you and says: "Hey man, you look awful." He smirks. "Come with me..." He ushers you inside the stadium, towards an information desk, away from prying ears. "Dude you literally passed out in the middle of the field for ages! You told me you were fine, after we came back from the food supply run..." Wait what? Confusion sets in across your face...',
        choices: [{
                text: 'You need more information, so you open up about your seeming memory loss.',
                nextText: 7
            },
            {
                text: 'You snap at him, keeping your amnesia a secret - on the assumption this individual clearly knows you and left you lying unconscious for so long.',
                nextText: 8
            }
        ]
    },
    {
        id: 4,
        text: 'A middle aged woman with crinkled green eyes looks up at you and smiles kindly, genuine concern in her voice as she says: "Oh dear, you look like you\'ve seen a ghost. What\'s troubling you sweetheart?" You are beyond confused, however she seems to recognise you... You frown.',
        choices: [{
            text: 'Be honest and open up that you don\'t remember anything before the government announcement on the SI-1093 injection. Ask her what happened?',
            nextText: 6
        },
        {
            text: 'Lie and make an excuse that you have a pounding headache and you need to go outside for fresh air.',
            nextText: 5
        }
    ]
    },
    {
        id: 5,
        text: 'You make your way through a marked exit and see a door with diving equipment next to it. Hmm convenient... You decide to out the gear on and dive through an immense water channel that surrounds the stadium. Once you reach land, you walk a few meters across, trying to find dry clothing to change into. Before you can wipe away the water droplets dripping down your face, you are surrounded by weird non humanoid creatures that look like fractured shadows constantly disapating and piecing back together. You are captured and don\'t survive the onslaught.',
        choices: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 6,
        text: 'The woman looks incredibly worried and hesitantly says: "Why don\'t you sit down for a moment my dear and I\'ll call your friend over to explain. I suppose you may not remember him, but I can assure you he is your best friend and he\'s probably the right person to catch you up to speed."',
        choices: [{
            text: 'Agree and wait for your supposed `best friend`',
            nextText: 7
        },
        {
            text: 'Slam your first angrily on the desk and demand an explanation now!',
            nextText: 9 
        }
    ]
    },
    {
        id: 7,
        text: 'He says: "So you really don\'t remember anything after the SI-1093 injection announcement? That\'s messed up! Ah man, where to begin... Well not long after, the majority of city residents opted in for the `miracle` vaccine, however we had to abide by a priority queue. Naturally the uber elite, got their jabs earlier. Idiots! These fascists bragged about their privilege in interviews broadcasted on live TV however things took a sinister turn for the worse...." He paused and sighed. "Their hands started visibly trembling and shortly after it looked as though glitched atoms began disapating and materialising constantly from their very fingers!" He looked unsettled. "Wide spread panic insued. Many rushed over to their local vaccine centres, however the government shut all operations down. It was total chaos! ....Once the dust settled, the few who fortunately weren\'t injected banded together in an attempt to survive and stay alive...." His voice trailed off, sadness and loss apparent.',
        choices: [{
                text: 'Ask him why survival was necessary?',
                nextText: 10
            },
            {
                text: 'Ask him what happened next and what they are doing in a stadium?',
                nextText: 11
            },
            {
                text: 'Ask him how you know one another?',
                nextText: 12
            },
            {
                text: 'Move on',
                nextText: 14 
            }
        ]
    },
    {
        id: 8,
        text: 'He looks suprised. He pauses for a moment and then says: "Woah, dude calm down, you seem way too stressed! Truth be told, it\'s kind of your thing to lay down in the field or sit in silence in a corner and gather your thoughts, especially after a hunt. I just thought you crashed hard... Are you sure you\'re fine? You can tell me, I\'m your best mate..." He truly seems to care about you, but you don\'t recognise him. You....',
        choices: [{
            text: 'Tell him if he really was your best friend, he would\'ve noticed something was wrong and then storm off, looking for an exit.',
            nextText: 5
        },
        {
            text: 'Tell him the truth about your memory loss.',
            nextText: 7
        }
    ]
    },
    {
        id: 9,
        text: 'The woman looks startled: "Jack dear, you\'ve never snapped at me like this before..." She wipes a small tear rolling down her right cheek and continued: "Not long after the majority of city residents opted in for the `miracle` vaccine, however we had to abide by a priority queue. Naturally the uber elite, got their jabs earlier. These fascists bragged about their privilege in interviews broadcasted on live TV however things took a sinister turn for the worse...." She paused and sighed. "Their hands started visibly trembling and shortly after it looked as though glitched atoms began disapating and materialising constantly from their very fingers!" She looked unsettled. "Wide spread panic insued. Many rushed over to their local vaccine centres, however the government shut all operations down. It was total chaos! ....Once the dust settled, the few who fortunately weren\'t injected banded together in an attempt to survive and stay alive..." Her voice trailed off, sadness and loss apparent. "Oh, Greg\'s here! I\'ll leave him to finish..."',
        choices: [{
            text: 'Apologise to the woman and ask your friend why survival was necessary?',
            nextText: 10
        },
        {
            text: 'Disregard the woman and ask your friend what\'s happened and what they are doing in a stadium?',
            nextText: 13
        }
    ]
    },
    {
        id: 10,
        text: 'He answers: "Turns out the vaccine wasn\'t a `miracle cure` after all. On the flip side, it caused an adverse reaction, now being coined as the worst virus known to man in history so far... Symptoms didn\'t stop with the fingers. In a matter of days, it spread to the entire body." He flinched. "We call them.... `The Shattered`. These.. creatures are full of rage and hunger. If they manage to touch your bare skin, you\'re done for man! Put it this way, you have 12 days until you turn into one of them. And there\'s no cure...!"',
        choices: [{
            text: 'Ask him what happened next and what they are doing in a stadium?',
            nextText: 11
        },
        {
            text: 'Ask him how you know one another?',
            nextText: 12
        },
        {
            text: 'Move on',
            nextText: 14 
        }
        ]
    },
    {
        id: 11,
        text: 'He continues: "In short, when us survivors found eachother,  we were simply trying to isolate from the infected and stock up on food supplies. No place was safe for long, and so we had to come up with a solution. About three months ago, The Shattered were chasing us HARD. Bad was an understatement, we lost so many in midst of it all. We were cornered at a dead end, with a huge lake in front of us. In fear of our lives, we jumped in, swimming frantically. To our suprise, they stopped short at the waters edge. Once across, we figured we\'d need a place large enough to house all of us, with a water source nearby. After an exhausting hours trek, we discovered this sports stadium had a river partially surrounding it. We made sure to painstakingly dig the banks nearby to widen it\'s reach closer to the building.',
        choices: [{
            text: 'Ask him why survival is necessary?',
            nextText: 10
        },
        {
            text: 'Ask him how you know one another?',
            nextText: 12
        },
        {
            text: 'Move on',
            nextText: 14 
        }
    ]
    },
    {
        id: 12,
        text: 'Haha, man it was flipping insane! YOU were the one who saved our group! When approaching that lake, you were running solo like some kind of crazed lunatic and dived head first into the water. You were screaming at the top of your lungs and spluttering that we do the same, as they can\'t follow. Because of you, we learned that it\'s impossible for The Shattered to reformulate under water. Something about the water particles interference.. I remember thinking, this guy is nuts! We invited you to join our group and we became best mates." He looks hopeful at the sentiment.',
        choices: [{
            text: 'Ask him why survival is necessary?',
            nextText: 10
        },
        {
            text: 'Ask him what happened next and what they are doing in a stadium?',
            nextText: 11
        },
        {
            text: 'Move on',
            nextText: 14
        }
    ]
    },
    {
        id: 13,
        text: 'Greg looks at you in shock and slight disappointment. "Man, that is not cool... Nell\'s been like a mum to you. To us. She goes out of her way to give you extra portions and sweets from her share. You shouldn\'t disrespect her like that."',
        choices: [{
            text: 'Apologise to Nell and ask Greg nicely this time.',
            nextText: 10
        },
        {
            text: 'Wince and ignore him. Disregard the woman and move on.',
            nextText: 14
        }
    ]
    },
    {
        id: 14,
        text: 'All of a sudden, out of nowhere a group of 4 odd looking non humanoid creatures appear in a flash of bright light and a loud eerie sound. They have unique symbols on their slender faces and wear billowing beige cloaks. One of them stands out prominently. His symbols are glow in a lustrous gold hue, whilst the others emit a dull brown. Greg stares in disbelief and Nell\'s gentle humming quiets immediately. We all turn around to see the disruption. Undoubtedly the leader, looks at something electronic on his wrist, presses a button and says in a deep, powerful voice: "Greetings dear Earthians, my vanguards and I appear to have veered off course. Our Adhara device is broken. Would you kindly direct me to your master mender?" Then he looks directly you. His gaze sends a chill down your spine. You are as shocked as Greg and Nell, but curious to know more...',
        choices: [{
            text: 'Ask the leader who are they and where are they from?',
            nextText: 15
        },
        {
            text: 'Ask the leader what he means by mender and what exactly he is trying to fix?',
            nextText: 16
        }]
        },
        {
            id: 15,
            text: 'The leader answers: "Pardon my rashness, I imagine you have many questions. Of course, I\'m happy to oblige. I, Eldredth Lazarus, son of Zorg am the rightful Emperor of Circadia, a planet from the Great Naksatra Galaxy and these are my loyal Vanguardians. Following a great nebular battle victory, we were traveling south to planet Nibua. However our navigation has faultered. I trust that will suffice? Now would you introduce me to your master mender?"',
            choices: [{
                text: 'Ask the leader what he means by mender and what exactly he is trying to fix?',
                nextText: 16
            }]
        },
        {
            id: 16,
            text: 'The Emperor looks at his wrist again and adjusts something, then translates: "Excuse my linguistics, on this planet you refer to it as an engineer. This advanced Adhara device is our interception locator / traveling technology. Take me to your highest skilled professional." He lightly touches your arm and in a bizarre tingle, a flood of memories suddenly start rushing back to you. You gasp. Your brain feels hazy. Slowly but surely, you remember everything all at once. An intense feeling of realisation sets in.',
            choices: [{
                text: 'Take the Emperor to Elliot who is a genius master engineer.',
                nextText: 17
            }]
        },
        {
            id: 17,
            text: 'On route to Elliot your hand starts shaking furiously and you feel a sudden urge to punch something... You glance at your hand and notice that your index finger starts disintegrating and integrating. What the....? You are terrified and don\'t know what to do.... You realise the Emperor is watching you with a keen interest, and says: "What is wrong with your hand my boy?" You tell him about the virus and he offers to help, adamant that he can reverse it. Could this be too good to be true?',
            choices: [{
                text: 'Accept his help.',
                nextText: 18
            },
            {
                text: ' Deny his help, saying that there is no cure and you will leave as soon as you take him to Elliot.',
                nextText: 19
            }
        ]
        },
        {
            id: 18,
            text: 'Emperor Eldredth Lazarus takes you outside to the field and asks everyone to leave. The group stares wide eyed in absolute horrror, but comply swiftly. He grabs your wrists tightly and spins you anti-clockwise at the speed of light, then slams you hard against the ground. You groan in pain. He helps you to your feet and says: "You have nothing to fear now Earthian". You look at your hand, flexing your fingers and it looks completely normal! The Emperor breathes heavily, steadying himself.',
            choices: [{
                text: 'You express your endless gratitude and offer to take the Emperor\'s device to Elliot, whilst he rests.',
                nextText: 20
            },
            {
                text: 'You express your endless gratitude and offer to take the Emperor\'s device to Elliot, when in reality you plan to break it indefinitely so that the alien beings never leave and help to save countles lives.',
                nextText: 21
            }
        ]
        },
        {
            id: 19,
            text: 'The Emperor takes your hand and tells you: "Earth may have yet to discover a cure, however I hail from a highly superior Galaxy and your human virus can be easily reversed, simply by exposure to light speed interference. You may choose to accept my help and live. Or refuse, and you will die.',
            choices: [{
                text: 'Accept his help.',
                nextText: 20
            }
        ]
        },
        {
            id: 20,
            text: 'While Elliot is working on the Adhara device, the Circadian Emperor generously helps save the lives of the members of your group who got infected on the supply runs, as a gesture of gratitude for helping him in return. He promises to come back with more of his subjects to help cure all the living beings on the planet Earth.',
            choices: [{
                text: 'Congratulations! You have succeeded..Play again.',
                nextText: -1
            }
        ]
        },
        {
            id: 20,
            text: 'You destroy the device on the way to Elliot while no one was looking. Little do you know, one of the vanuardians saw you and she reported this directly to the Emperor. He was FURIOUS to learn this is how you repay him for saving your life. He destroyes the stadium in a flash and unleashes his rage onto the whole planet wiping out all living beings and humanity as we know it.',
            choices: [{
                text: 'Restart',
                nextText: -1
            }
        ]
        }
    
    ]


startGame()