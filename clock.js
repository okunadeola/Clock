function setClock() {
  const second = document.querySelector("[data-second-hand]");
  const minute = document.querySelector("[data-minute-hand]");
  const hour = document.querySelector("[data-hour-hand]");
  let date = new Date();
  let secondRate = date.getSeconds() / 60;
  let minuteRate = (secondRate + date.getMinutes()) / 60;
  console.log(secondRate *360)
  
  let hourRate = (minuteRate + date.getHours()) / 12;
  
  setRatio(second, secondRate);
  setRatio(minute, minuteRate);
  setRatio(hour, hourRate);
}
function setRatio(element, rate) {
  element.style.setProperty("--rotation", rate * 360);
}

setClock();
setInterval(() => {
  setClock()
}, 1000);