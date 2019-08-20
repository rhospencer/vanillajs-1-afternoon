console.log('The house always wins!')

let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

console.log(idInput)
console.log(colorInput)

function setCard() {
    let card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
}
function resetCards() {
    let diamonds = document.getElementById('diamonds')
    if (diamonds.style.color) {
        diamonds.style.color = 'grey'
    }
    let clubs = document.getElementById('clubs')
    if (clubs.style.color) {
        clubs.style.color = 'grey'
    }
    let hearts = document.getElementById('hearts')
    if (hearts.style.color) {
        hearts.style.color = 'grey'
    }
    let spades = document.getElementById('spades')
    if (spades.style.color) {
        spades.style.color = 'grey'
    }
    let id = document.getElementById('idInput')
    console.dir(id)
    id.value = ""
    let color = document.getElementById('colorInput')
    console.dir(color)
    color.value = ""
    
}