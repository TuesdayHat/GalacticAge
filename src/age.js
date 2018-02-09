import { time } from './times.js';

export function yearToSeconds(planet){
  let result = 1;
  result *= time[planet];
  result *= time.day; //almost certainly a more elegant way to write this, but written for clarity
  result *= time.hour;
  result *= time.minute;
  return result;
}

export function compareDate(dayOne, dayTwo){
  let result;
  if (dayTwo > dayOne){
    result = dayTwo - dayOne;
  } else {
    result = dayOne-dayTwo;
  }
  return result/1000;
}

export function yearsInSpace(time, planet){
  const mercAge = time/yearToSeconds(planet);
  return mercAge;
}
