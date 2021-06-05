//Code is taken from Javascript-Text-Adventure-Game by Mega-Barrel on GitHub and edited slightly
//(https://github.com/Mega-Barrel/Javascript-Text-Adventure-Game/blob/master/main.js)

const textElement = document.getElementById('story')
const pathButtonsElement = document.getElementById('choices-buttons')

let status = {}

function startGame() {
    status = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (pathButtonsElement.firstChild) {
        pathButtonsElement.removeChild(pathButtonsElement.firstChild)
    }

    textNode.choices.forEach(choice => {
        if (showChoice(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectChoice(choice))
            pathButtonsElement.appendChild(button)
        }
    })
}

function showChoice(choice) {
    return choice.requiredStatus == null || choice.requiredStatus(status)
}

function selectChoice(choice) {

    let nextTextNodeId = choice.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    status = Object.assign(status, choice.setStatus)
    showTextNode(nextTextNodeId)
}


const textNodes = [{
        id: 1,
        text: 'You open your eyes and find yourself in the middle of the enourmous stadium not understanding what is going on. Last thing you remeber is that everyone was promised to get injection which will prevent us from contracting any dangerous virus. You look around and see group of people making barbeque in the left corner. You...',
        choices: [{
                text: 'Approach them to find out what is going on',
                nextText: 3
            },
            {
                text: 'Try to find the way out',
                nextText: 2
            }
        ]
    },

    {
        id: 2,
        text: 'You started running towards the gate you saw in front of you. You run inside the building of the stadium and see what looks like the information desk. You...',
        choices: [{
                text: 'Head towards it, to get more information',
                nextText: 4
            },
            {
                text: 'Notice exit sign and run in that direction',
                nextText: 5
            }
        ]
    },

    {
        id: 3,
        text: 'As you approached the group, young man with a warm smile take a notice of you and says "Hey man, you look awful. What were you doing lying there in the middle of the field? I thought you said you were fine after we came back from getting the food supplies". You are confused, but...',
        choices: [{
                text: 'You want to know what is happening, so you tell him the truth about your memory loss',
                nextText: 7
            },
            {
                text: 'You snap at him, for not checking on you while you were lying unconscious and pretend that everything is okay',
                nextText: 8
            }
        ]
    },
    {
        id: 4,
        text: 'Midle aged woman looks up and smiles kindly, then with concerned voice says "Oh dear, you look like you saw a ghost. What\'s trabelling you? How can I help?" You are confused, she seems to recognize you, but you see her for the first time.',
        choices: [{
            text: 'Tell her that you don\'t remember anything after announcement of miracle injections and ask her what is going on?',
            nextText: 6
        },
        {
            text: 'Make a joke that you been hit by ball and make excuse that you need to go outside',
            nextText: 5
        }
    ]
    },
    {
        id: 5,
        text: 'You get out through marked exit and see door with diving equipment next to it. You put it on and dive through the chanel which surrounds stadium. Once you reached the outter land, you changed back into the normal close. The moment you walked a few meters away from the stadium grounds you been captured by weird creatures that looked like fractured shadow trying to piece itself together, but falls apart and gathers again. You didn\'t survive.',
        choices: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 6,
        text: 'Woman looks very concerned, she says "Why don\'t you sit down for a moment and I call your friend to explain everything. You might not remeber him, but he is your best friend and he will be the best person to cath you up on what is going on.',
        choices: [{
            text: 'Wait for a guy who is supposed to be your best friend',
            nextText: 7
        },
        {
            text: 'Hit angrily the desk and tell her that you want explanation now',
            nextText: 9 
        }
    ]
    },
    {
        id: 7,
        text: 'So you don\'t remember anything after injection anouncement?! That is bad. Okay, so when majority have had that "miracle" injection a few elite one\'s obviously got theirs earlier and they started showing symptoms right on live TV. Their hands started trembling and shortly after it looked like atoms of their fingers started falling apart and gather back in. Panick followed, everyone started running back to where they got injections, but the doors were shut. It was horrible. Anyway, after the dust settled and few that left who wasn\'t injected found each other to survive.',
        choices: [{
                text: '',
                nextText: 8
            },
            {
                text: '',
                nextText: 9
            },
            {
                text: '',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: '',
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: '',
        choices: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 9,
        text: '',
        choices: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 10,
        text: '',
        choices: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 11,
        text: '',
        choices: [{
            text: 'Congratulations. Play Again.',
            nextText: -1
        }]
    }

]


startGame()