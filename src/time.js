export class Time {

  constructor (birthdate, lifeExpectancy)
  {
    this.birthdate = birthdate;
    this.currentDate = new Date();
  }

  BirthdateInSeconds(){
    var ageInSeconds = this.birthdate.getTime()/1000;
    return ageInSeconds;
  }

  CurrentDateInSeconds(){
    var dateInSeconds = this.currentDate.getTime()/1000;
    return dateInSeconds;
  }
}
