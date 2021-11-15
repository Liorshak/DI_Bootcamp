const prompts = require("prompts");

let now = new Date();

const timeleft = function (date) {
  let date1 = new Date(date);

  let date2 = date1 - now;

  let sec = 1000;
  let minute = 60 * sec;
  let hour = 60 * minute;
  let day = 24 * hour;

  let dayleft = Math.floor(date2 / day);
  let hoursleft = Math.floor((date2 - dayleft * day) / hour);
  let minleft = Math.floor((date2 - dayleft * day - hoursleft * hour) / minute);
  let secleft = Math.floor(
    (date2 - dayleft * day - hoursleft * hour - minleft * minute) / sec
  );

  let calTime = `${dayleft} days and ${hoursleft}:${minleft}:${secleft} hours`;

  return calTime;
};

const howOld = function () {
  //   let birthdate = await prompts.date("whats your age");
  let birthdate = new Date("8/19/1986");

  let age = now - birthdate;

  let sec = 1000;
  let minute = 60 * sec;

  return Math.floor(age / minute);
};

module.exports = {
  time: timeleft,
  age: howOld,
};
