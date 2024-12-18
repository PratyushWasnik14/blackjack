
 //array ordered list of items
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive =  false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards-el")
let chipsEl = document.getElementById("chips-el")
chipsEl.textContent=player.name+" : $ "+player.chips
 player={
    name:"Pratyush",
    chips:150
}

function startGame(){
    isAlive=true
    n1=getrandomcard()
    n2=getrandomcard()
    sum=n1+n2
    cards = [n1,n2]
    renderGame()
    return sum,n1,n2
}

function getrandomcard(){
   let rc=Math.floor(Math.random()*13+1)
    if (rc===1){
        return 11
    }else if(rc>10){
        return 10
    } else return rc
}

function renderGame() {

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i]
        cardEl.textContent = cards.join(" ")
    }
    if (sum <= 20) {
        message = "do you want to draw a new card"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "you got black jack"
    } else {
        isAlive = false
        message = "you lost"
    }
    messageEl.textContent = message
    sumEl.textContent ="sum: "+ sum
}

function newcard(){
    if (isAlive===true && hasBlackJack===false)
    { let card = getrandomcard()
    sum+=card
    cards.push(card)
    renderGame()
}}