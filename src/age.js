import { time } from './times.js';

export function yearToSeconds(years){
  let result = years * time.year ;
  result *= time.day; //almost certainly a more elegant way to write this, but written for clarity
  result *= time.hour;
  result *= time.minute;
  return result
}

export function compareDate(dayOne, dayTwo){
  let result = dayTwo - dayOne
  return result/1000;
}
