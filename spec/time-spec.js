import { Earth } from './../src/Earth.js';

//registers birthday in milliseconds
describe('Birthday in seconds', function() {
  var myBirthday;
  var today;
  var bdInSeconds;

  beforeEach(function() {
    myBirthday = new Date("February 27, 1992 23:34:00");
    bdInSeconds = new Earth(myBirthday)

    expect(bdInSeconds.BirthdateInSeconds()).not.toEqual(17);
    console.log(myBirthday);
  });

  it('should fail to get birtdate in seconds', function() {
    console.log(myBirthday);
  });
});


//returns current date accurately
describe('Current on Earth', function() {
  var today;

  beforeEach(function() {
    today = new Date();

    expect(today.getTime()).toEqual(new Date().getTime());
  });

  it('should get current time', function() {
    console.log(today);
  });
});


//returns age on Earth
describe('Age on Earth', function() {
  var today;
  var myBirthday;
  var age;

  beforeEach(function() {
    today = new Date();
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday);


    expect(age.AgeOnEarth(myBirthday)).toEqual(26);
  });

  it('should get my age', function() {
    console.log(age);
  });
});
