import * as Age from './../src/age.js';
const assert = require( 'assert' );

describe( 'Age', function() {

//convert age in years to seconds
  describe('yearToSeconds', function(){
    it("should convert a number of years into seconds", function(){
      assert.equal(31536000 , Age.yearToSeconds("Earth"));
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
  describe('yearsInSpace', function(){
    it("should calculate a given amount of time in Mercury years (.24 Earth years)", function(){
      const dayOne = new Date(1992, 11, 28);
      const dayTwo = new Date(2018, 1, 9);
      const age = Age.compareDate(dayOne, dayTwo);
      assert(Age.yearsInSpace(age, 'Mercury') > 104 && Age.yearsInSpace(age, 'Mercury') < 108.4)
      //rounding because I refuse to work out my space age by hand to check this down the the second. I'm writing an app for that.
    })
  })

//return age in Venus years (.62 earth years)
describe('yearsInSpace', function(){
  it("should calculate a given amount of time in Venus years (.62 Earth years)", function(){
    const dayOne = new Date(1992, 11, 28);
    const dayTwo = new Date(2018, 1, 9);
    const age = Age.compareDate(dayOne, dayTwo);
    assert(Age.yearsInSpace(age, 'Venus') > 40.3 && Age.yearsInSpace(age, 'Venus') < 41.9)
  })
})

//return age in Mars years (1.88 earth years)
describe('yearsInSpace', function(){
  it("should calculate a given amount of time in Mars years (1.88 Earth years)", function(){
    const dayOne = new Date(1992, 11, 28);
    const dayTwo = new Date(2018, 1, 9);
    const age = Age.compareDate(dayOne, dayTwo);
    assert(Age.yearsInSpace(age, 'Mars') > 13.29 && Age.yearsInSpace(age, 'Mars') < 13.82)
  })
})

//return age in Jupiter years (11.86 earth years)
describe('yearsInSpace', function(){
  it("should calculate a given amount of time in Jupiter years (11.86 Earth years)", function(){
    const dayOne = new Date(1992, 11, 28);
    const dayTwo = new Date(2018, 1, 9);
    const age = Age.compareDate(dayOne, dayTwo);
    assert(Age.yearsInSpace(age, 'Jupiter') > 2.10 && Age.yearsInSpace(age, 'Jupiter') < 2.19)
  })
})
})
