const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//fixed countdown
let tempDate = new Date();
console.log(tempDate);
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempYear, tempMonth, tempDay);

//actual time
const date = new Date();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//making always 3 day, 12 hours, 37 minutes
const targetDate = new Date(tempYear, tempMonth, tempDay + 3, 12, 15, 0);

let targetYear = targetDate.getFullYear();
let targetMonth = targetDate.getMonth();
let targetDay = targetDate.getDate();
let targetHours = targetDate.getHours();
let targetMinutes = targetDate.getMinutes();

giveAway = document.querySelector('.giveaway');
8;
giveAway.textContent = `giveaway ends on ${weekdays[targetDay]}, ${targetDay} ${months[targetMonth]} ${targetYear}, ${targetHours}:${targetMinutes}am`;

const futureTime = targetDate.getTime();

items = document.querySelectorAll('.deadline-format h4');
deadline = document.querySelector('.deadline');

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // *1000 = seconds, *60 = 1 minute, *60 = 1 hours *24 = 1 day
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //getting days
  let days = Math.floor(t / oneDay);

  //gettings the remain hours of days with Modulus(%), and the divide the value for hours
  let hours = Math.floor((t % oneDay) / oneHour);
  //same for minutes
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // diving for 1000 to get the seconds
  let seconds = Math.floor((t % oneMinute) / 1000);

  // putting all vallues in an array
  values = [days, hours, minutes, seconds];

  // formating the numbers if they are less than 10
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  // using forEach with my array taking the indexes of values, this works because in my HTML im using the same name for the values ramaining, also my item uses queryselect all with deadline-form + h4.

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  // changing my timer for expired if its over
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired"> sorry, this promotion is over </h4>`;
  }
}
// using countdown so i can refer it in clearInterval
countdown = setInterval(getRemainingTime, 1000);
// calling get function
// getRemainingTime();
