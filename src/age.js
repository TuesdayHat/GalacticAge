import {time} from 'times.js';

export function yearToSeconds(years){
  let result = years * time.year ;
  return result
}
