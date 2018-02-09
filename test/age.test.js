import * as Age from './../src/age.js';
const assert = require( 'assert' );

describe( 'Age', function() {

//convert age in years to seconds
  describe('yearToSeconds', function(){
    it("should convert a number of years into seconds", function(){
      assert.equal(31536000 , Age.yearToSeconds(1, "earth"));
    });
  });

//take two dates and compare the difference
  describe('compareDate', function(){
    it("should calculate the difference in seconds between two dates", function(){
      const dayOne = new Date(2018, 0, 27); //January 27th, 2018 note does not count the 27th itself.
      const dayTwo = new Date(2018, 1, 7); //February 7th, 2018
      assert.equal(950400, Age.compareDate(dayOne, dayTwo));
    })
  })
//return age in Mercury years (.24 earth years)
  describe('yearsOnMercury', function(){
    it("should calculate a given amount of time in Mercury years (.24 Earth years)", function(){
      const dayOne = new Date(1992, 11, 28);
      const dayTwo = new Date(2018, 1, 9);
      const age = Age.compareDate(dayOne, dayTwo);
      assert(Age.yearsOnMercury(age) > 104 && Age.yearsOnMercury(age) < 108.4)
    })
  })

//return age in Venus years (.62 earth years)

//return age in Mars years (1.88 earth years)

//return age in Jupiter years (11.86 earth years)

//calc life expectancy, convert into { planet } years

//check if user has already exceeded life expectancy

})
