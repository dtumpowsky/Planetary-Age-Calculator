export class Earth {

  constructor (birthdate)
  {
    this.birthdate=birthdate;
    this.currentDate=new Date();
  }

  BirthdateInSeconds() {
    var birth = this.birthdate.getTime();
    return birth;
  }

  CurrentDateInSeconds() {
    var now = this.currentDate.getTime()/1000;
    return now;
  }

  GetAgeInSeconds() {
    var now = this.currentDate.getTime()/1000;
    var birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    return ageInSeconds;
  }

  AgeOnEarth(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInYears = Math.floor(ageInSeconds * (1/365.25) * (1/24) * (1/60) * (1/60));

    return ageInYears;
  }




}
