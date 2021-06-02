//Code is taken from Javascript-Text-Adventure-Game by Mega-Barrel on GitHub and edited slightly
//(https://github.com/Mega-Barrel/Javascript-Text-Adventure-Game/blob/master/main.js)

const storyElement = document.getElementById('story')
const pathButtonsElement = document.getElementById('path-buttons')

let progress = {}

function startGame() {
    progress = {}
    showStoryNode(1)
}

function showStoryNode(textNodeIndex) {
    
}

function selectPath(path) {

}

const storyNodes = [
    {
        id: 1,
        text: 'You open your eyes in the middle of enormous stadium that has been turned into refuge town for survirers. You have no idea what\'s going on.'
    }
]


startGame()