class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
    imageArea.className = 'new'
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    this.changeAction("Out on the street, ready to go!", 'new')
  }

  defend() {
    this.changeAction("You put sunglasses on.", 'defend')
  }

  attack() {
    this.changeAction("ATTAAAAAAAAAK!", 'attack')
  }

  heal() {
    this.changeAction("You feel refreshed after yoga.", 'heal')
  }

  breakdance() {
    this.changeAction("It's really spinning class", 'breakdance')
  }

  eatCronut() {
    this.changeAction("You've gained 1000 health points.", 'eat')
  }

  changeAction(text,action){
  var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    eventArea.prepend(div);
    imageArea.className = action;
  }

}


const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')

document.addEventListener('DOMContentLoaded', function() {
  const unicorn = new Unicorn('Name', 'Occupation')
  const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
  const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn.attack())
  const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn.defend())
  const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn.heal())
  const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())
  const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())
})