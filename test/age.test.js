import * as Age from './../src/age.js';
const assert = require( 'assert' );

describe( 'Age', function() {

//convert age in years to seconds
  describe('yearToSeconds', function(){
    it("should convert a number of years into seconds", function(){
      assert.equal(31536000 , Age.yearToSeconds(1));
    });
  });

//take two dates and compare the difference
  describe('compareDate', function(){
    it("should calculate the difference in seconds between two dates", function(){
      var dayOne = new Date(2018, 0, 27);
      var dayTwo = new Date(2018, 1, 6);
      // dayOne.setFullYear(2018).setMonth(0).setDate(27);
      // dayTwo.setFullYear(2018).setMonth(1).setDate(6);
      assert.equal(950400, Age.compareDate(dayOne, dayTwo));
    })
  })
//return age in Mercury years (.24 earth years)

//return age in Venus years (.62 earth years)

//return age in Mars years (1.88 earth years)

//return age in Jupiter years (11.86 earth years)

//calc life expectancy, convert into { planet } years

//check if user has already exceeded life expectancy

})
