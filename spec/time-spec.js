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

//returns age on Mercury
describe('Age on Mercury', function() {
  var today;
  var myBirthday;
  var age;

  beforeEach(function() {
    today = new Date();
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday);


    expect(age.AgeOnMercury(myBirthday)).toEqual(108);
  });

  it('should get my age on Mercury', function() {
    console.log(age);
  });
});

//returns age on Venus
describe('Age on Venus', function() {
  var today;
  var myBirthday;
  var age;

  beforeEach(function() {
    today = new Date();
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday);


    expect(age.AgeOnVenus(myBirthday)).toEqual(42);
  });

  it('should get my age on Mercury', function() {
    console.log(age);
  });
});


//returns age on Mars
describe('Age on Mars', function() {
  var today;
  var myBirthday;
  var age;

  beforeEach(function() {
    today = new Date();
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday);


    expect(age.AgeOnMars(myBirthday)).toEqual(13);
  });

  it('should get my age on Mars', function() {
    console.log(age);
  });
});


//returns age on Jupiter
describe('Age on Jupiter', function() {
  var today;
  var myBirthday;
  var age;

  beforeEach(function() {
    today = new Date();
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday);


    expect(age.AgeOnJupiter(myBirthday)).toEqual(2);
  });

  it('should get my age on Jupiter', function() {
    console.log(age);
  });
});
