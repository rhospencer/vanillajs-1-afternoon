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
// function resetCards() {
//     let card = document.getElementsByTagName('section')
//     if (card.style.color !== undefined) {
//         card.style.color = 'grey'
//     }
// }