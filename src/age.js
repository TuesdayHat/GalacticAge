import { time } from './times.js';

export function yearToSeconds(years){
  let result = years * time.year ;
  result *= time.day;
  result *= time.hour;
  result *= time.minute;
  return result
}
