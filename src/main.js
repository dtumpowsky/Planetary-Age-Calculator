import { Earth } from './Earth.js';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

    let continent = $('#continent').val();
    let gender = $('#gender').val();
    let myAge = new Date($('#birthday').input());
    let planet = $('#planet').val();



  $("button#verify").click(function(event) {
    let thisAge=new Earth(myAge);
    let deathAge;



    if ((continent == "northAmerica" || "europe") && (gender == "female")) {
      deathAge = 81;
    } else if ((continent == "oceana" || "southAmerica") && (gender == "female")) {
      deathAge = 79;
    } else if (gender == "female") {
      deathAge = 64;
    } else if ((continent == "oceana" || "europe") && (gender == "male")) {
      deathAge = 75;
    } else if ((continent == "northAmerica") && (gender = "male")) {
      deathAge = 77;
    } else if ((continent == "southAmerica") && (gender = "male")) {
      deathAge = 73;
    } else if ((continent == "asia") && (gender = "male")) {
      deathAge = 71;
    } else {
      deathAge = 61;
    }


    if (planet == "Jupiter") {
      let age = thisAge.AgeOnJupter(myAge);
      let death = deathAge.DeathOnJupiter();
      $("#result").text(age);
      $("#result").text("You have " + (death - age) + "years to live");
    } else if (planet == "Mars") {
      let age = thisAge.AgeOnMars(myAge);
      let death = deathAge.DeathOnMars();
      $("#result").text(age);
      $("#result").text("You have " + (death - age) + "years to live");
    } else if (planet == "Earth") {
      let age = thisAge.AgeOnEarth(myAge);
      let death = deathAge.DeathOnEarth();
      $("#result").text(age);
      $("#result").text("You have " + (death - age) + "years to live");
    } else if (planet == "Venus") {
      let age = thisAge.AgeOnVenus(myAge);
      let death = deathAge.DeathOnVenus();
      $("#result").text(age);
      $("#result").text("You have " + (death - age) + "years to live");
    } else if (planet == "Mercury") {
      let age = thisAge.AgeOnMercury(myAge);
      let death = deathAge.DeathOnMercury();
      $("#result").text(age);
      $("#result").text("You have " + (death - age) + "years to live");
    }

  });
});
