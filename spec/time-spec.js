import { Earth } from './../src/Earth.js';


describe('Time on Earth', function() {
  var myBirthday;
  var today;
  var age;

  beforeEach(function() {
    myBirthday = new Date("February 27, 1992 23:34:00");
    age = new Earth(myBirthday)

    expect(age.BirthdateInSeconds()).not.toEqual(17);
  });

  it('should get birtdate in seconds', function() {
    console.log(myBirthday);
  });
});
