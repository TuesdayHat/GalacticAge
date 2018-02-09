import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/'
import './templates/styles.css';
import * as Age from './age.js';


$(document).ready(function(){
  $('#spaceAge').submit(function(event){
    event.preventDefault();

    const year = $('#inputYear').val();
    const date = $("#inputDate").val();
    const month = $('#inputMonth').val();
    const day = new Date(year, month, date);
    const now = Date.now();

    const age = Math.floor(Age.compareDate(day, now));
    // console.log(age);

    const spaceAge = Age.yearsInSpace(age, $("#planets").val());
    console.log(spaceAge);

    $('#formOutput').text("You are " + Math.floor(spaceAge) + " years old on " + $("#planets").val() + "!")

  })

});
