import { time } from './times.js';

export function yearToSeconds(years, planet){
  let result = years
  switch(planet){
      case "earth":
        result *= time.year;
        break;
      case "mercury":
        result *= time.mercury;
        break;
      default:
        console.log("not a planet we track");
        break;
  }
  result *= time.day; //almost certainly a more elegant way to write this, but written for clarity
  result *= time.hour;
  result *= time.minute;
  return result
}

export function compareDate(dayOne, dayTwo){
  let result = dayTwo - dayOne
  return result/1000;
}

export function yearsOnMercury(time){
  const mercAge = time/yearToSeconds(1, "mercury");
  return mercAge;
}
