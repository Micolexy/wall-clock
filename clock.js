setInterval(setClock, 1000);

const secondHand = document.querySelector('[ data-second-hand]')
const minuteHand =document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock() {
 const currentDate = new Date();
 const seconds = currentDate.getSeconds() / 60
 const minutes = (seconds + currentDate.getMinutes()) / 60
 const hours =(minutes + currentDate.getHours()) / 12
 setRotation(secondHand, seconds);
 setRotation(minuteHand, minutes);
 setRotation(hourHand, hours);
}

function setRotation(element, rotation) {
  element.style.setProperty('--rotation', rotation * 360);
}
setClock();




//  const secondHand = document.getElementById('#secondData')
//  const minuteHand = document.getElementById('#minuteData')
//  const hourHand = document.getElementById('#hourData')